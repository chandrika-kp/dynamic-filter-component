import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Filters = ({ sampleData, updateTableData }) => {
  const [filters, setFilters] = useState([]);
  const [logicalOperators, setLogicalOperators] = useState(['AND']);
  const [showFilterInput, setShowFilterInput] = useState(false);

  const columns = [
    { key: 'name', prettyName: 'Name', type: 'string' },
    { key: 'screen_name', prettyName: 'Screen Name', type: 'string' },
    { key: 'followers_count', prettyName: 'Followers Count', type: 'number' },
    { key: 'following_count', prettyName: 'Following Count', type: 'number' },
    { key: 'location', prettyName: 'Location', type: 'string' },
    { key: 'verified', prettyName: 'Verified', type: 'boolean' },
  ];

  const operators = [
    { key: 'CONTAINS', prettyName: 'Contains', type: 'string' },
    { key: 'GTE', prettyName: '>=', type: 'number' },
    { key: 'LTE', prettyName: '<=', type: 'number' },
    { key: 'EQ', prettyName: 'Equals', type: 'boolean' },
  ];

  const handleFilter = () => {
    const filteredData = sampleData.filter((row) => {
      return filters.every((filter, index) => {
        const column = columns.find((col) => col.key === filter.column);
        const value = filter.value;

        switch (filter.operator) {
          case 'CONTAINS':
            return String(row[column.key]).toLowerCase().includes(value.toLowerCase());
          case 'GTE':
            return Number(row[column.key]) >= Number(value);
          case 'LTE':
            return Number(row[column.key]) <= Number(value);
          case 'EQ':
            return row[column.key] === (value === 'true' ? true : value === 'false' ? false : value);
          default:
            return true;
        }
      });
    });

    updateTableData(filteredData);
  };

  const addFilter = () => {
    setShowFilterInput(true);
    const newFilter = {
      column: columns[0].key,
      operator: operators[0].key,
      value: '',
    };
    setFilters([...filters, newFilter]);

    if (filters.length > 0) {
      setLogicalOperators([...logicalOperators, 'AND']);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [filters]);

  return (
      <div className='container border my-1'>
        <h1 className='text-center'>Assesment</h1>
      <h4>FILTERS</h4>
      {showFilterInput &&
        filters.map((filter, index) => (
          <div key={index}>
            {index === 0 && <label className='mx-1'>Where</label>}
            {index !== 0 && (
              <select
                className='py-1 mx-2'
                value={logicalOperators[index]}
                onChange={(e) => {
                  const newOperators = [...logicalOperators];
                  newOperators[index] = e.target.value;
                  setLogicalOperators(newOperators);
                }}
              >
                {['AND', 'OR'].map((logicalOperator) => (
                  <option key={logicalOperator} value={logicalOperator}>
                    {logicalOperator}
                  </option>
                ))}
              </select>
            )}
            <select
              className='p-1 mx-2'
              value={filter.column}
              onChange={(e) => {
                const newFilters = [...filters];
                newFilters[index].column = e.target.value;
                setFilters(newFilters);
              }}
            >
              {columns.map((eachcolumn) => (
                <option key={eachcolumn.key} value={eachcolumn.key}>
                  {eachcolumn.prettyName}
                </option>
              ))}
            </select>
            <select
              className='p-1 mx-2'
              value={filter.operator}
              onChange={(e) => {
                const newFilters = [...filters];
                newFilters[index].operator = e.target.value;
                setFilters(newFilters);
              }}
            >
              {operators.map((eachOperator) => (
                <option key={eachOperator.key} value={eachOperator.key}>
                  {eachOperator.prettyName}
                </option>
              ))}
            </select>
            <input
              className='p-1 m-2'
              type={filter.column === 'verified' ? 'checkbox' : 'text'}
              value={filter.value}
              onChange={(e) => {
                const newFilters = [...filters];
                newFilters[index].value = e.target.value;
                setFilters(newFilters);
              }}
            />
            <button
              className='p-1 mx-2'
              onClick={() => {
                const newFilters = [...filters];
                newFilters.splice(index, 1);
                setFilters(newFilters);

                const newLogicalOperators = [...logicalOperators];
                newLogicalOperators.splice(index, 1);
                setLogicalOperators(newLogicalOperators);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      <button className='m-1' onClick={addFilter}>+ Add Filter</button>
    </div>
  );
};

export default Filters;
