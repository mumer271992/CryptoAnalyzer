import React, { PropTypes } from 'react';

/* A presentational component which takes data list and display that data table,
** it does not know how and where to retrive data.
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