// src/components/ImageUpload.jsx

import React from 'react';
import PropTypes from 'prop-types';

const ImageUpload = ({ onChange }) => {
  const handleFileChange = (e) => {
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        accept="image/png"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
      />
    </div>
  );
};

ImageUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ImageUpload;
