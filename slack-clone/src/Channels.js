import React from 'react';
import PropTypes from 'prop-types';

const Channels = ({ channelList, handleSelection }) => (
    <div className="channel-list">
      <span>Channels</span>
      {channelList.map(channelName =>
                       <span key={channelName} onClick={() => handleSelection("channels.".concat(channelName))}>
                         # {channelName}
                       </span>
                      )}
    </div>
);

Channels.propTypes = {
    channelList: PropTypes.array.isRequired,
    handleSelection: PropTypes.func.isRequired
};

export default Channels;
