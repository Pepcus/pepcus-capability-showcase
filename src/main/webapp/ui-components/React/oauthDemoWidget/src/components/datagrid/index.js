import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './datagrid.css';
import DataGridSection from './components/dataGrid/DataGrid';


class DataGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.data) {
      return <DataGridSection data={this.props.data} metadata={this.props.metadata} styleData={this.props.styleData} />;
    } else {
      return (
        <div className="no-data-available"> No Data Available</div>
      )
    }
  }
}

DataGrid.propTypes = {
  data: PropTypes.array,
  metadata: PropTypes.object,
  styleData: PropTypes.object,
};

DataGrid.defaultProps = {
  data: [],
  metadata: {},
  styleData: {},
};

export default DataGrid;
