import React from 'react';
import PropTypes from 'prop-types';

const Channels = ({ channelList }) => (
    <div className="channel-list">
      {channelList.map(channel => 
                       <span>{channel}</span>
                      )}
    </div>
);
