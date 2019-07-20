import React from 'react';
import PropTypes from 'prop-types';

const Channels = ({ channelList, handleSelection }) => (
    <div className="channel-list">
      {channelList.map(channelName => 
                       <span onClick={() => handleSelection(channels.concat({channelName}))}>
                         {channelName}
                       </span>
                      )}
    </div>
);
