import React from 'react';
import PropTypes from 'prop-types';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ file }) => (
    <div className="file-list-item">
      <FileName file={file}/>
      <CommitMessage commit={file.latestCommit}/>
      <span className="age">
        <Time time={file.updated_at}/>
      </span>
    </div>
);

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileListItem;
