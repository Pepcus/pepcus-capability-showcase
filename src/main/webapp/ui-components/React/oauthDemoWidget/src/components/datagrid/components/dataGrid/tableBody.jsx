import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ tableData, metadata, styleData }) => {
  if (!tableData) {
    return null;
  }
  return tableData.map(rowData => <Row data={rowData} metadata={metadata} styleData={styleData} key={rowData.companyId} />);
};

const Row = ({ data, metadata, styleData }) => (
  <tr style={styleData.gridTableTR}>
    {metadata.headerConfig.map(colMetaData => <RowColumn value={data[colMetaData.key]} styleData={styleData} key={colMetaData.key} />)}
  </tr>
);

const RowColumn = ({ value, styleData }) => (
  <td style={styleData.gridTableTD}>{value}</td>
);

TableBody.propTypes = {
  data: PropTypes.array,
  metadata: PropTypes.object,
  styleData: PropTypes.object,
};

TableBody.defaultProps = {
  data: [],
  metadata: {},
  styleData: {},
};

export default TableBody;