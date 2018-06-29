import React, { PropTypes } from 'react';

/* A presentational component which will display a table using provided props,
** total column of table will be according to provided props 'columns'. columns structure as follow
  columns:[{
    title: '', This will be name of column
    dataIndex: '',
    key: '' This is key of dataobject to show in this column
  }]

*/

const propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  dataSource: PropTypes.arrayOf(PropTypes.object)
}

const defaultProps = {
  columns: [],
  dataSource: []
}

const DataTables = ({ columns, dataSource }) => {
  
  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
          {
            columns.map((column,index) => (
              <th scope="col" key={index}>{column.title}</th>
            ))
          }
          </tr>
        </thead>
        <tbody>
          {
            dataSource.map((rowItem, index) => (
              <tr key={index}>
                {
                  columns.map((columnData, index) => (
                    <td key={index}>{rowItem[columnData.key]}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTables;