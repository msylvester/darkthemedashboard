import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import truncate from 'truncate';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Row,
    Col,
    Panel,
    Button,
    DropdownButton,
    MenuItem,
    ButtonGroup,
    FormControl,
    ListGroup,
    ListGroupItem,
    Label,
    Badge,
    Table,
    Media,
    Tooltip,
    ButtonToolbar,
    Pagination,
    OverlayTrigger,
    Divider,
    SlimProgressBar,
    AvatarImage
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';

import { Colors } from 'consts';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import projectsData from 'consts/data/app-projects.json';

import classes from './Projects.scss';
// ------------------------------------
// Subcomponents
// ------------------------------------
import {
    FavoriteApps,
    SearchBox,
    ProjectsList,
    UsersList
} from './../components';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const projectStatusToColor = status => {
    switch(status) {
        case 'Active':
            return Colors.brandSuccess;
        case 'Waiting':
            return Colors.brandWarning;
        case 'Suspended':
            return Colors.brandDanger;
        default:
        case 'Disabled':
            return Colors.grayLighter;
    }
}

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderActionsDropdown = (isSmall = false, dropup = false) => (
    <DropdownButton
        bsSize={ isSmall ? 'xsmall' : 'small' }
        pullRight
        dropup={ dropup }
        title={
            <i className='fa fa-fw fa-gear m-r-1'></i>
        }
        id='dropdown-task-actions'
    >
        <MenuItem eventKey="1">
            <i className="fa fa-fw fa-folder-open text-gray-lighter m-r-1"></i>
            View
        </MenuItem>
        <MenuItem eventKey="2">
            <i className="fa fa-fw fa-ticket text-gray-lighter m-r-1"></i>
            Add Task
        </MenuItem>
        <MenuItem eventKey="3">
            <i className="fa fa-fw fa-paperclip text-gray-lighter m-r-1"></i>
            Add Files
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">
            <i className="fa fa-fw fa-trash text-gray-lighter m-r-1"></i>
            Delete
        </MenuItem>
    </DropdownButton>
);

const renderProjectsList = (projects) => (
    <div className='m-t-1'>
        <Table className={classes.projectsListTable} hover responsive>
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Tasks Completed</th>
                    <th className='text-right'>People</th>
                    <th className='text-right'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(projects, (project, index) => (
                        <tr key={ project._id }>
                            <td>
                                <Media>
                                    <Media.Left align='middle'>
                                        <OverlayTrigger
                                            placement='top'
                                            overlay={
                                                <Tooltip id='tooltip-add-to-favorites'>
                                                    Add To Favorites
                                                </Tooltip>
                                            }
                                        >
                                            <i className="fa fa-fw fa-lg fa-star-o"></i>
                                        </OverlayTrigger>
                                    </Media.Left>
                                    <Media.Body className={ classes.mediaFix }>
                                        <h4 className="m-t-0">
                                            <Link to='/apps/tasks/list'>
                                                { project.Title }
                                            </Link>
                                        </h4>
                                        <Media.Heading className={ classes.projectsEdited }>
                                            Last Edited by:
                                            <span className="text-white">
                                                { ` ${project.LastEdit.Author}` }
                                            </span>
                                            <br/>
                                            <span>
                                                { moment(project.LastEdit.Date).format('dddd, DD MMMM YYYY') }
                                            </span>
                                        </Media.Heading>
                                    </Media.Body>
                                </Media>
                            </td>
                            <td>
                                <Label
                                    outline
                                    bsStyle='custom'
                                    customColor={ projectStatusToColor(project.Status) }
                                >
                                    { project.Status }
                                </Label>
                            </td>
                            <td>
                                <SlimProgressBar
                                    now={ project.Completed.Value / project.Completed.Total * 100 }
                                    className='m-b-1 m-t-0'
                                />
                                <p className='m-y-0'>
                                    Tasks Completed:
                                    <span className='m-l-1 text-white'>
                                        { project.Completed.Value }/{ project.Completed.Total }
                                    </span>
                                </p>
                            </td>
                            <td className='text-right'>
                                {
                                    _.map(project.AssignedUsers, user => (
                                        <AvatarImage
                                            size='small'
                                            src={ user.Avatar }
                                            key={ user._id }
                                            className={ classes.projectAvatar }
                                        />
                                    ))
                                }
                            </td>
                            <td className='text-right'>
                                { renderActionsDropdown(false, index === (projects.length - 1)) }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        <div className='text-center'>
            <Pagination
                items={10}
                activePage={1}
                boundaryLinks
                prev
                next
                first
                last
                ellipsis
            />
        </div>
    </div>
);

const renderProjectsGrid = (projects) => {
    const renderProjectTile = (project) => (
        <Panel className={ classes.projectsPanel } key={ project._id }>
            <Label
                outline
                bsStyle='custom'
                customColor={ projectStatusToColor(project.Status) }
            >
                { project.Status }
            </Label>

            <div className='m-y-1'>
                <OverlayTrigger
                    placement='top'
                    overlay={
                        <Tooltip id='tooltip-add-to-favorites'>
                            Add To Favorites
                        </Tooltip>
                    }
                >
                    <i className="fa fa-fw fa-lg fa-star-o m-r-1"></i>
                </OverlayTrigger>
                <h4 className={ classes.inlineHeader }>
                    <Link to='/apps/tasks/grid'>
                        { project.Title }
                    </Link>
                </h4>
            </div>

            <p className={ `${classes.projectsEdited} m-b-0` }>
                Last Edited by:
                <span className="text-white">
                    { ` ${project.LastEdit.Author}` }
                </span>
                <br/>
                <span>
                    { moment(project.LastEdit.Date).format('dddd, DD MMMM YYYY') }
                </span>
            </p>

            <ListGroup fill>
                <ListGroupItem className='no-bg'>
                    <SlimProgressBar
                        now={ project.Completed.Value / project.Completed.Total * 100 }
                        className='m-b-1 m-t-0'
                    />
                    <p className='m-y-0'>
                        Tasks Completed:
                        <span className='m-l-1 text-white'>
                            { project.Completed.Value }/{ project.Completed.Total }
                        </span>
                    </p>
                </ListGroupItem>

                {
                    project.AssignedUsers ? (
                        <ListGroupItem  className='no-bg'>
                            {
                                _.map(project.AssignedUsers, user => (
                                    <AvatarImage
                                        size='small'
                                        src={ user.Avatar }
                                        key={ user._id }
                                        className={ classes.projectAvatar }
                                    />
                                ))
                            }
                        </ListGroupItem>
                    ) : null
                }


                <ListGroupItem className='no-bg'>
                    <div className='flex-space-between'>
                        <span>
                            Start: { moment(project.StartDate).format('dddd, DD MMMM YYYY') }
                        </span>
                        { renderActionsDropdown(true) }
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Panel>
    );

    return (
        <div className='m-t-1'>
            <Row>
                <Col md={ 6 }>
                    {
                        _.map(projects, (project, index) => {
                            if(index % 2 === 0) {
                                return renderProjectTile(project);
                            }
                        })
                    }
                </Col>
                <Col md={ 6 }>
                    {
                        _.map(projects, (project, index) => {
                            if(index % 2 !== 0) {
                                return renderProjectTile(project);
                            }
                        })
                    }
                </Col>
            </Row>
            <div className='text-center'>
                <Pagination
                    bsSize="medium"
                    items={10}
                    activePage={1}
                    boundaryLinks
                    prev
                    next
                    first
                    last
                    ellipsis
                />
            </div>
        </div>
    )
};
// ------------------------------------
// Main Container
// ------------------------------------
class ProjectsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(projectsData),
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return(
            <Row>
                <Col lg={ 3 }>
                    <Divider className={ classes.leftPanelDivider }>
                        Search
                    </Divider>
                    <SearchBox className={ classes.leftPanelSection } />

                    <Divider className={ classes.leftPanelDivider }>
                        Favorites
                    </Divider>
                    <FavoriteApps
                        className={ classes.leftPanelSection }
                        appSelected={ (url) => this.props.history.push(url) }
                    />

                    <Divider className={ classes.leftPanelDivider }>
                        Projects
                    </Divider>
                    <ProjectsList
                        className={ classes.leftPanelSection }
                        items={ this.state.data.ProjectsList }
                        projectSelected={ () => { this.props.history.push('/apps/tasks') } }
                    />

                    <Divider className={ classes.leftPanelDivider }>
                        People
                    </Divider>
                    <UsersList
                        className={ classes.leftPanelSection }
                        items={ this.state.data.People }
                    />
                </Col>
                <Col lg={ 9 }>
                    <div className='flex-space-between'>
                        <h3 className="f-w-300 m-t-1">
                            Analytics Redesign
                            <Badge className='hidden-sm m-l-2'>
                                125 Tasks
                            </Badge>
                        </h3>
                        <div className='hidden-xs'>
                            <ButtonGroup>
                                <LinkContainer to='/apps/projects/list'>
                                    <Button href="javascript:;">
                                        <i className="fa fa-list text-white"></i>
                                    </Button>
                                </LinkContainer>
                                <LinkContainer to='/apps/projects/grid'>
                                    <Button href="javascript:;">
                                        <i className="fa fa-th-large text-white"></i>
                                    </Button>
                                </LinkContainer>
                            </ButtonGroup>
                            <Button bsStyle='primary' className='m-l-1'>
                                <span className="hidden-md hidden-sm hidden-xs">
                                    Add New Project
                                </span>
                                <i className="fa fa-fw fa-plus"></i>
                            </Button>
                        </div>
                    </div>
                    <ButtonToolbar  className='visible-xs'>
                        <ButtonGroup justified>
                            <Button
                                active={ this.state.viewType === 'list' }
                                onClick={() => this.changeListType('list')}
                                href="javascript:void(0)"
                            >
                                <i className="fa fa-list text-white"></i>
                            </Button>
                            <Button
                                active={ this.state.viewType === 'grid' }
                                onClick={() => this.changeListType('grid')}
                                href="javascript:void(0)"
                            >
                                <i className="fa fa-th-large text-white"></i>
                            </Button>
                            <Button
                                href="javascript:void(0)"
                            >
                                <i className="fa fa-fw fa-plus text-white"></i>
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    {
                        (this.props.routeParams.listStyle === 'list') ?
                            renderSection(renderProjectsList, this.state.data.Projects) :
                            renderSection(renderProjectsGrid, this.state.data.Projects)
                    }
                </Col>
            </Row>
        );
    }
}

export default connect()(ProjectsContainer);
