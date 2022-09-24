import React from "react";
import Button from "../button";

const Table = ({ list, colNames }) => {
  return (
    <div>
      <div className="client-table">
        {list.length > 0 && (
          <table className="table-sort">
            <thead>
              <tr>
                {/* {colNames.map((headerItem, index) => (
                                  <th key={index}>
                                      {headerItem.toUpperCase()}
                                      
                                      </th>
                                  )
                                  )} */}

                {Object.keys(list[0]).map((headerItem, index) => {
                  return (
                    <th key={headerItem}>
                      {headerItem.charAt(0).toUpperCase() + headerItem.slice(1)}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {Object.values(list).map((obj, index) => (
                <tr key={index} className="client-list">
                  {/* <td>{index + 1}</td> */}
                  {Object.values(obj).map((value, index2) => (
                    <td key={index2}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
