import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ metadata, styleData }) => {
  if (!metadata) {
    return null;
  }
  return metadata.map(
    (colMetaDataHeader) => {
      if (!colMetaDataHeader) {
        return null;
      }
      return (
        <HeaderRow
          metadata={colMetaDataHeader}
          styleData={styleData}
          key={colMetaDataHeader.name}
        />
      );
    });
};

const HeaderRow = ({ metadata, styleData = {} }) => (
  <th style={styleData.gridTableTH}>{metadata.name}</th>
);

TableHeader.propTypes = {
  data: PropTypes.array,
  metadata: PropTypes.array,
  styleData: PropTypes.object,
};

TableHeader.defaultProps = {
  data: [],
  metadata: [],
  styleData: {},
};

export default TableHeader;