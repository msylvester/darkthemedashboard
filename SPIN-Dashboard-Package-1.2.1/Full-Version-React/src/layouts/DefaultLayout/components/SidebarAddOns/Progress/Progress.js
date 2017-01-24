import React from 'react';
import {
    Media
} from 'react-bootstrap';
import faker from 'faker';

import {
    AvatarImage,
    SlimProgressBar,
    Sidebar
} from 'components';

import avatarImage from 'static/avatars/avatar-34.jpg';
import { Colors } from 'consts';

const UserName = `${faker.name.firstName()} ${faker.name.lastName()}`;

const Progress = (props) => (
    <Sidebar.AddOn>
        {/*     Default Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='default'>
            <Media>
                <Media.Left>
                    <AvatarImage
                        src={ avatarImage }
                        showStatus
                        statusPlacement='bottom'
                        statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                        className='sidebar-avatar'
                    />
                </Media.Left>
                <Media.Body>
                    <Media.Heading
                        componentClass='h5'
                        className='m-y-0'
                    >
                        { UserName }
                    </Media.Heading>
                    <small>Senior Front-end Developer</small>
                    <SlimProgressBar
                        now={ 40 }
                        className='m-y-1'
                    />
                    <div className={ `flex-space-between m-t-1` }>
                        <small>1.22 GB / 4GB</small>
                        <i className='fa fa-gear small'></i>
                    </div>
                </Media.Body>
            </Media>
        </Sidebar.AddOnContent>
        {/*     Slim Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='big-icons'>
            <AvatarImage
                src={ avatarImage }
                showStatus
                statusPlacement='bottom'
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

Progress.propTypes = {
    colorSidebar: React.PropTypes.bool
};

export default Progress;
