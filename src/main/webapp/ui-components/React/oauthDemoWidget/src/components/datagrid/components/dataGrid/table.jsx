import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ data, metadata, styleData }) => {
  return (
    <div className="table" >
      <table style={styleData.gridTable}>
        <thead style={styleData.gridTableThead}>
          <tr className="total-record-row" style={styleData.gridTableTR}>
            <th colSpan="4" style={styleData.gridTableTH}>
              {data.length} RECORDS
            </th>
          </tr>
          <tr className="table-header" style={styleData.gridTableTR}>
            <TableHeader metadata={metadata.headerConfig} styleData={styleData} />
          </tr>
        </thead>
        <tbody style={styleData.gridTableTbody}>
          <TableBody tableData={data} metadata={metadata} styleData={styleData} />
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  metadata: PropTypes.object,
  styleData: PropTypes.object,
};

Table.defaultProps = {
  data: [],
  metadata: {},
  styleData: {},
};

export default Table;