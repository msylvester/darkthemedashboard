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

import avatarImage from 'static/avatars/avatar-18.jpg';
import { Colors } from 'consts';

const UserName = `${faker.name.firstName()} ${faker.name.lastName()}`;

const AvatarAndNumbers = (props) => (
    <Sidebar.AddOn>
        {/*     Default Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='default'>
            <Media>
                <Media.Left align='middle'>
                    <i className="fa fa-fw fa-power-off"></i>
                </Media.Left>
                <Media.Body className='text-center'>
                    <AvatarImage
                        src={ avatarImage }
                        showStatus
                        size='large'
                        statusPlacement='bottom'
                        statusColor={ Colors.brandSuccess }
                        statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                    />
                    <div className='m-t-2'>
                        <Media.Heading
                            componentClass='h5'
                            className='m-y-0'
                        >
                            { UserName }
                        </Media.Heading>
                        <small>Back-end Developer</small>
                    </div>
                </Media.Body>
                <Media.Right align='middle'>
                    <i className="fa fa-fw fa-gear"></i>
                </Media.Right>
            </Media>
            <div className={ `flex-space-between m-t-2 p-x-1` }>
                <a href='javascript: void(0)' className='text-center'>
                    <p className='m-y-0 h1'>23</p>
                    <small className='text-white'>Video</small>
                </a>
                <a href='javascript: void(0)' className='text-center'>
                    <p className='m-y-0 h1'>14</p>
                    <small className='text-white'>Photos</small>
                </a>
                <a href='javascript: void(0)' className='text-center'>
                    <p className='m-y-0 h1'>89</p>
                    <small className='text-white'>Sounds</small>
                </a>
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

AvatarAndNumbers.propTypes = {
    colorSidebar: React.PropTypes.bool
};

export default AvatarAndNumbers;
