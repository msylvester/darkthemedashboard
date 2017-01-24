import React from 'react';
import { IndexLink, Link } from 'react-router';
import uid from 'node-uuid';
import _ from 'underscore';
import {
    HEADER_STYLE_SIMPLE,
    HEADER_STYLE_BREADCRUMBS
} from 'layouts/DefaultLayout/modules/layout';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Grid,
    Row,
    Col,
    PageHeader,
    Breadcrumb
} from 'react-bootstrap';

import ROUTES_STRUCTURE, { findActiveNodes } from 'routes/routesStructure';

const headers = {
    [HEADER_STYLE_SIMPLE]: ( title, path, containerFluid ) => (
        <div className="sub-navbar sub-navbar__header">
            <Grid fluid={ containerFluid }>
                <Row>
                    <Col lg={ 12 }>
                        <PageHeader>
                            { title }
                        </PageHeader>
                    </Col>
                </Row>
            </Grid>
        </div>
    ),
    [HEADER_STYLE_BREADCRUMBS]: ( title, path, containerFluid ) => (
        <div className="sub-navbar sub-navbar__header-breadcrumbs">
            <Grid fluid={ containerFluid }>
                <Row>
                    <Col lg={ 12 } className='sub-navbar-column'>
                        <div className="sub-navbar-header">
                            <h3>{ title || 'Home' }</h3>
                        </div>
                        {
                            (path && path.length > 0) ?
                                (
                                    <Breadcrumb
                                        className='navbar-text navbar-right no-bg'
                                    >
                                        <LinkContainer to='/' onlyActiveOnIndex>
                                            <Breadcrumb.Item active={ false }>
                                                <i className="fa fa-fw fa-home"></i>
                                            </Breadcrumb.Item>
                                        </LinkContainer>
                                        {
                                            _.map(path.reverse(), (pathItem, index) => (
                                                <Breadcrumb.Item
                                                    href='javascript:void(0)'
                                                    active={ index === path.length - 1 }
                                                    key={ `header-breadcrumb-${index}` }
                                                >{ pathItem.title }</Breadcrumb.Item>
                                            ))
                                        }
                                    </Breadcrumb>
                                ) : null
                        }

                    </Col>
                </Row>
            </Grid>
        </div>
    )
};

const Header = (props) => {
    const path = findActiveNodes(ROUTES_STRUCTURE, props.currentUrl);
    const { title } = (path && path.length > 0) ? path[0] : '';

    return headers[props.style](title, path, props.fluid);
}

Header.propTypes = {
    currentUrl: React.PropTypes.string.isRequired,
    style: React.PropTypes.string.isRequired,
    fluid: React.PropTypes.bool.isRequired
}

export default Header;
