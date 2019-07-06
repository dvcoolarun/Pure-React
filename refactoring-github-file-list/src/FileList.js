import React from 'react';
import PropTypes from 'prop-types';
import FileListItem from './FileListItem';

const FileList = ({ files }) => (
    <div className="file-list">
      <div>
        {files.map(file => (
            <FileListItem key={file.id} file={file}/>
        ))}
      </div>
    </div>
);

FileList.propTypes = {
    files: PropTypes.array
};

export default FileList;
