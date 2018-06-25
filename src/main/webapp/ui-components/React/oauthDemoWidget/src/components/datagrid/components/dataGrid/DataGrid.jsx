import React from 'react';
import PropTypes from 'prop-types';
import Table from './table';

const DataGridSection = ({data, metadata, styleData}) => {
  if (!data || !data.length) {
    return null;
  }
  const style = styleData ? styleData.gridWrapper : null;
  return (
    <div className="data-grid" style={style}>
      <div className="content" style={style}>
        <Table data={data} metadata={metadata} styleData={styleData} />
      </div>
    </div>
  );
};

DataGridSection.propTypes = {
  data: PropTypes.array,
  metadata: PropTypes.object,
  styleData: PropTypes.object,
};

DataGridSection.defaultProps = {
  data: [],
  metadata: {},
  styleData: {},
};

export default DataGridSection;