import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div className='container border my-1'>
      <table className='table table-info table-striped-columns'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Screen Name</th>
            <th>Followers Count</th>
            <th>Following Count</th>
            <th>Location</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.screen_name}</td>
              <td>{row.followers_count}</td>
              <td>{row.following_count}</td>
              <td>{row.location}</td>
              <td>{row.verified.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
