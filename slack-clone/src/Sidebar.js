import React from 'react';
import Channels from './Channels';
import People from './People';
import PropTypes from 'prop-types';

const Sidebar = ({ channelList, peopleList, handleSelection }) => (
    <div className="sidebar">
      <Channels channelList={channelList} handleSelection={handleSelection}/>
      <People peopleList={peopleList} handleSelection={handleSelection}/>
    </div>
);

Sidebar.propTypes = {
    channelList: PropTypes.array.isRequired,
    peopleList: PropTypes.array.isRequired
};

export default Sidebar;

