import React from 'react';
import {
    Media
} from 'react-bootstrap';
import faker from 'faker';
import classNames from 'classnames';

import {
    AvatarImage,
    Charts,
    Sidebar,
    SlimProgressBar
} from 'components';

import classes from './../AddOns.scss';
import avatarImage from 'static/avatars/avatar-33.jpg';
import { Colors } from 'consts';

const UserName = `${faker.name.firstName()} ${faker.name.lastName()}`;

const Bars = (props) => (
    <Sidebar.AddOn>
        {/*     Default Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='default'>
            <Media>
                <Media.Left>
                    <AvatarImage
                        src={ avatarImage }
                        showStatus
                        statusPlacement='bottom'
                        statusColor={ Colors.brandSuccess }
                        statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                    />
                </Media.Left>
                <Media.Body>
                    <Media.Heading
                        componentClass='h5'
                        className='m-y-0'
                    >
                        { UserName }
                    </Media.Heading>
                    <small>Back-end Developer</small>
                </Media.Body>
                <Media.Right align='middle'>
                    <i className="fa fa-fw fa-gear"></i>
                </Media.Right>
            </Media>
            <div className='m-t-3'>
                <div className='m-b-1'>
                    <SlimProgressBar
                        now={ 34 }
                        bsStyle='danger'
                    />
                    <div className={ classNames(classes.barDetails, 'flex-space-between') }>
                        <small>Capacity</small>
                        <small className='text-white'>34%</small>
                    </div>
                </div>
                <div className='m-b-1'>
                    <SlimProgressBar
                        now={ 67 }
                        bsStyle='info'
                    />
                    <div className={ classNames(classes.barDetails, 'flex-space-between') }>
                        <small>Storage</small>
                        <small className='text-white'>67%</small>
                    </div>
                </div>
                <div className='m-b-1'>
                    <SlimProgressBar
                        now={ 87 }
                        bsStyle='primary'
                    />
                    <div className={ classNames(classes.barDetails, 'flex-space-between') }>
                        <small>Quota Limit</small>
                        <small className='text-white'>87%</small>
                    </div>
                </div>
            </div>
    </Sidebar.AddOnContent>
        {/*     Slim Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='big-icons'>
            <AvatarImage
                src={ avatarImage }
                showStatus
                statusPlacement='bottom'
                statusColor={ Colors.brandSuccess }
                statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                className='m-b-1'
            />
            <p className='text-white m-y-0'>
                { UserName }
            </p>
        </Sidebar.AddOnContent>
        {/*     BigIcons Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='slim'>
            <AvatarImage
                src={ avatarImage }
                showStatus
                statusPlacement='bottom'
                statusColor={ Colors.brandSuccess }
                statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                size='small'
            />
        </Sidebar.AddOnContent>
    </Sidebar.AddOn>
);

Bars.propTypes = {
    colorSidebar: React.PropTypes.bool
};

export default Bars;
