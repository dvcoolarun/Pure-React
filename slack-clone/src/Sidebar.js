import React from 'react';
import Channels from './Channels';
import People from './People';
import PropTypes form 'prop-types';

const Sidebar = ({ channelList, peopleList }) => (
    <div className="sidebar">
      <Channels channeList={channelList}/>
      <People peopleList={peopleList}/>
    </div>
);

Sidebar.propTypes = {
    channelList: PropTypes.array.isRequired,
    peopleList: PropTypes.array.isRequired
};

export default Sidebar;

