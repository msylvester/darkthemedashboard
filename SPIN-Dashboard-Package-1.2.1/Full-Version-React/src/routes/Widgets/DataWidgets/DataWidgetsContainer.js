import React from 'react';
import _ from 'underscore';
import {
    Row,
    Col,
    Table,
    CollapsablePanel
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';

/*
    Timeliens from Timeline examples
*/
import TimelineExample1 from 'routes/Pages/Timeline/components/TimelineExample_VerticalInnerDate';
import TimelineExample2 from 'routes/Pages/Timeline/components/TimelineExample_Horizontal';
import TimelineExample3 from 'routes/Pages/Timeline/components/TimelineExample_Vertical';

/*
    Page specific components
*/
import {
    SummaryBox,
    Notifications,
    Emails,
    Timeline,
    Tasks,
    Reminders,
    Comments,
    Projects,
    Users,
    Attachments,
    Comments2,
    Chat
} from './components';

class DataWidgetsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            closedPanels: []
        };
    }
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    isPanelOpen(panelId) {
        return !_.contains(this.state.closedPanels, panelId);
    }

    closePanel(panelId) {
        this.setState({
            closedPanels: [...this.state.closedPanels, panelId]
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={ 3 }>
                        <SummaryBox
                            title='Capacity'
                            value='1,288'
                            unit='$'
                            color='primary'
                            icon={ <i className='fa fa-database'></i> }
                            footer={
                                <div>
                                    <i className='fa fa-history m-r-1'></i>
                                    <span>Updated Now</span>
                                </div>
                            }
                        />
                    </Col>
                    <Col lg={ 3 }>
                        <SummaryBox
                            title='Revenue'
                            value='1,234'
                            unit='$'
                            color='success'
                            icon={ <i className='fa fa-dollar'></i> }
                            footer={
                                <div>
                                    <i className='fa fa-calendar-o m-r-1'></i>
                                    <span>Last Day</span>
                                </div>
                            }
                        />
                    </Col>
                    <Col lg={ 3 }>
                        <SummaryBox
                            title='Errors'
                            value='34'
                            color='warning'
                            icon={ <i className='fa fa-exclamation'></i> }
                            footer={
                                <div>
                                    <i className='fa fa-clock-o m-r-1'></i>
                                    <span>In the last Hour</span>
                                </div>
                            }
                        />
                    </Col>
                    <Col lg={ 3 }>
                        <SummaryBox
                            title='Alerts'
                            value='98'
                            color='danger'
                            icon={ <i className='fa fa-flash'></i> }
                            footer={
                                <div>
                                    <i className='fa fa-desktop m-r-1'></i>
                                    <span>From Beginning</span>
                                </div>
                            }
                        />
                    </Col>
                </Row>

                <Row>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('notifications') && (
                                <Notifications onClose={ () => this.closePanel('notifications') }/>
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('emails') && (
                                <Emails onClose={ () => this.closePanel('emails') } />
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('timeline_1') && (
                                <Timeline
                                    title='Timeline #1'
                                    onClose={ () => this.closePanel('timeline_1') }
                                >
                                    <TimelineExample1 />
                                </Timeline>
                            )
                        }
                    </Col>
                </Row>

                <Row>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('tasks') && (
                                <Tasks onClose={ () => this.closePanel('tasks') } />
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('reminders') && (
                                <Reminders onClose={ () => this.closePanel('reminders') } />
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('coments') && (
                                <Comments onClose={ () => this.closePanel('coments') } />
                            )
                        }
                    </Col>
                </Row>

                <Row>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('projects') && (
                                <Projects onClose={ () => this.closePanel('projects') } />
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('users') && (
                                <Users onClose={ () => this.closePanel('users') } />
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('chat') && (
                                <Chat onClose={ () => this.closePanel('chat') } />
                            )
                        }
                    </Col>
                </Row>

                <Row>
                    <Col lg={ 6 }>
                        {
                            this.isPanelOpen('comments2') && (
                                <Comments2 onClose={ () => this.closePanel('comments2') } />
                            )
                        }
                    </Col>
                    <Col lg={ 6 }>
                        {
                            this.isPanelOpen('attachments') && (
                                <Attachments onClose={ () => this.closePanel('attachments') } />
                            )
                        }
                    </Col>
                </Row>

                <Row>
                    <Col lg={ 6 }>
                        {
                            this.isPanelOpen('timeline_2') && (
                                <Timeline
                                    title='Timeline #2'
                                    onClose={ () => this.closePanel('timeline_2') }
                                >
                                    <TimelineExample2 />
                                </Timeline>
                            )
                        }
                    </Col>
                    <Col lg={ 6 }>
                        {
                            this.isPanelOpen('timeline_3') && (
                                <Timeline
                                    title='Timeline #3'
                                    onClose={ () => this.closePanel('timeline_3') }
                                >
                                    <TimelineExample3 />
                                </Timeline>
                            )
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(DataWidgetsContainer);
