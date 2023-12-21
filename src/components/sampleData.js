const sampleData = [
    {name: 'John Doe', screen_name: 'johndoe', followers_count: 100, following_count: 50, location: 'Maharashtra', verified: true},
    {name: 'Jane Smith', screen_name: 'janesmith', followers_count: 150, following_count: 75, location: 'Karnataka', verified: false},
    {name: 'Alex Johnson', screen_name: 'alexjohnson', followers_count: 80, following_count: 40, location: 'Tamil Nadu', verified: true},
    {name: 'Emily Brown', screen_name: 'emilybrown', followers_count: 120, following_count: 60, location: 'Gujarat', verified: false},
    {name: 'Michael White', screen_name: 'michaelwhite', followers_count: 200, following_count: 100, location: 'Rajasthan', verified: true},
    {name: 'Sophia Davis', screen_name: 'sophiadavis', followers_count: 90, following_count: 45, location: 'Uttar Pradesh', verified: false},
    {name: 'Daniel Lee', screen_name: 'daniellee', followers_count: 180, following_count: 90, location: 'Madhya Pradesh', verified: true},
    {name: 'Olivia Hall', screen_name: 'oliviahall', followers_count: 110, following_count: 55, location: 'Bihar', verified: false},
    {name: 'William Turner', screen_name: 'williamturner', followers_count: 250, following_count: 125, location: 'West Bengal', verified: true},
    {name: 'Ava Moore', screen_name: 'avamoore', followers_count: 130, following_count: 65, location: 'Andhra Pradesh', verified: false},
    {name: 'James Harris', screen_name: 'jamesharris', followers_count: 300, following_count: 150, location: 'Telangana', verified: true},
    {name: 'Isabella Clark', screen_name: 'isabellaclark', followers_count: 70, following_count: 35, location: 'Kerala', verified: false},
    {name: 'Benjamin Lewis', screen_name: 'benjaminlewis', followers_count: 160, following_count: 80, location: 'Punjab', verified: true},
    {name: 'Mia Turner', screen_name: 'miaturner', followers_count: 95, following_count: 47, location: 'Haryana', verified: false},
    {name: 'Elijah Wright', screen_name: 'elijahwright', followers_count: 220, following_count: 110, location: 'Assam', verified: true},
    {name: 'Emma Allen', screen_name: 'emmaallen', followers_count: 140, following_count: 70, location: 'Jharkhand', verified: false},
    {name: 'Carter Moore', screen_name: 'cartermoore', followers_count: 190, following_count: 95, location: 'Chhattisgarh', verified: true},
    {name: 'Grace Walker', screen_name: 'gracewalker', followers_count: 85, following_count: 42, location: 'Odisha', verified: false},
    {name: 'Liam Lewis', screen_name: 'liamlewis', followers_count: 270, following_count: 135, location: 'Uttarakhand', verified: true},
    {name: 'Aria King', screen_name: 'ariaking', followers_count: 105, following_count: 52, location: 'Himachal Pradesh', verified: false},
    {name: 'Noah Reed', screen_name: 'noahreed', followers_count: 175, following_count: 87, location: 'Goa', verified: true},
    {name: 'Lily Wright', screen_name: 'lilywright', followers_count: 125, following_count: 62, location: 'Tripura', verified: false},
    {name: 'Logan Hall', screen_name: 'loganhall', followers_count: 230, following_count: 115, location: 'Meghalaya', verified: true},
    {name: 'Abigail Turner', screen_name: 'abigailturner', followers_count: 75, following_count: 37, location: 'Manipur', verified: false},
    {name: 'Owen Taylor', screen_name: 'owentaylor', followers_count: 200, following_count: 100, location: 'Nagaland', verified: true},
    {name: 'Scarlett Harris', screen_name: 'scarlettharris', followers_count: 115, following_count: 57, location: 'Arunachal Pradesh', verified: false},
    {name: 'Lucas Turner', screen_name: 'lucasturner', followers_count: 210, following_count: 105, location: 'Mizoram', verified: true},
    {name: 'Chloe Allen', screen_name: 'chloeallen', followers_count: 160, following_count: 80, location: 'Sikkim', verified: false},
    {name: 'Jackson Moore', screen_name: 'jacksonmoore', followers_count: 240, following_count: 120, location: 'Bihar', verified: true},
    {name: 'Eva Clark', screen_name: 'evaclark', followers_count: 100, following_count: 50, location: 'Gujarat', verified: false},
    {name: 'Caleb King', screen_name: 'calebking', followers_count: 180, following_count: 90, location: 'Rajasthan', verified: true},
    {name: 'Hannah Turner', screen_name: 'hannahturner', followers_count: 95, following_count: 47, location: 'Tamil Nadu', verified: false},
    {name: 'Jackie Moore', screen_name: 'jackiemoore', followers_count: 260, following_count: 130, location: 'Maharashtra', verified: true}
];

// import React, { useState } from 'react';

// const UItable = ({ data }) => {
//   return (
//     <div>
//       <h2>UI Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Pretty Name</th>
//             <th>Screen Name</th>
//             <th>Followers Count</th>
//             <th>Following Count</th>
//             <th>Location</th>
//             <th>Verified</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               <td>{row.name}</td>
//               <td>{row.screen_name}</td>
//               <td>{row.followers_count}</td>
//               <td>{row.following_count}</td>
//               <td>{row.location}</td>
//               <td>{row.verified.toString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const FilterComponent = ({ onFilterChange }) => {
//   const initialFilter = {
//     entries: [
//       { id: 1, logicalOperator: 'AND', columnName: '', operator: 'CONTAINS', value: '' },
//     ],
//   };

//   const operators = {
//     string: [{ key: 'CONTAINS', prettyName: 'Contains' }],
//     number: [
//       { key: 'GTE', prettyName: '>=' },
//       { key: 'LTE', prettyName: '<=' },
//     ],
//     boolean: [{ key: 'EQ', prettyName: 'Equals' }],
//   };

//   const columns = [
//     { key: 'name', prettyName: 'Name', type: 'string' },
//     { key: 'screen_name', prettyName: 'Screen Name', type: 'string' },
//     { key: 'followers_count', prettyName: 'Followers Count', type: 'number' },
//     { key: 'following_count', prettyName: 'Following Count', type: 'number' },
//     { key: 'location', prettyName: 'Location', type: 'string' },
//     { key: 'verified', prettyName: 'Verified', type: 'boolean' },
//     // Add more columns as needed
//   ];

//   const [filter, setFilter] = useState(initialFilter);

//   const addFilterEntry = () => {
//     const newFilter = { ...filter };
//     const newEntryId = filter.entries.length + 1;
//     newFilter.entries.push({
//       id: newEntryId,
//       logicalOperator: 'AND',
//       columnName: '',
//       operator: 'CONTAINS',
//       value: '',
//     });
//     setFilter(newFilter);
//   };

//   const removeFilterEntry = (entryId) => {
//     const newFilter = { ...filter };
//     newFilter.entries = newFilter.entries.filter((entry) => entry.id !== entryId);
//     setFilter(newFilter);
//   };

//   const handleFilterChange = (entryId, field, value) => {
//     const newFilter = { ...filter };
//     const entryIndex = newFilter.entries.findIndex((entry) => entry.id === entryId);
//     newFilter.entries[entryIndex][field] = value;
//     setFilter(newFilter);
//   };

//   const applyFilter = () => {
//     // Convert filter to the desired format and pass it to the parent component
//     const filterQuery = {
//       conditions: filter.entries.map((entry) => ({
//         id: entry.columnName,
//         operator: entry.operator,
//         value: entry.value,
//       })),
//     };
//     onFilterChange(filterQuery);
//   };

//   return (
//     <div>
//       <h3>Filter</h3>
//       {filter.entries.map((entry) => (
//         <div key={entry.id}>
//           <label>
//             Where:
//             <select
//               value={entry.logicalOperator}
//               onChange={(e) => handleFilterChange(entry.id, 'logicalOperator', e.target.value)}
//             >
//               <option value="AND">AND</option>
//               <option value="OR">OR</option>
//             </select>
//           </label>
//           <label>
//             Column Name:
//             <select
//               value={entry.columnName}
//               onChange={(e) => handleFilterChange(entry.id, 'columnName', e.target.value)}
//             >
//               {columns.map((column) => (
//                 <option key={column.key} value={column.key}>
//                   {column.prettyName}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label>
//             Operator:
//             <select
//               value={entry.operator}
//               onChange={(e) => handleFilterChange(entry.id, 'operator', e.target.value)}
//             >
//               {operators[columns.find((column) => column.key === entry.columnName)?.type].map(
//                 (op) => (
//                   <option key={op.key} value={op.key}>
//                     {op.prettyName}
//                   </option>
//                 )
//               )}
//             </select>
//           </label>
//           <label>
//             Value:
//             {columns.find((column) => column.key === entry.columnName)?.type === 'boolean' ? (
//               <select 
//                 value={entry.value}
//                 onChange={(e) => handleFilterChange(entry.id, 'value', e.target.value)}
//               >
//                 <option value="true">Yes</option>
//                 <option value="false">No</option>
//               </select>
//             ) : (
//               <input
//                 type="text"
//                 value={entry.value}
//                 onChange={(e) => handleFilterChange(entry.id, 'value', e.target.value)}
//               />
//             )}
//           </label>
//           {filter.entries.length > 1 && (
//             <button onClick={() => removeFilterEntry(entry.id)}>Remove</button>
//           )}
//         </div>
//       ))}
//       <button onClick={addFilterEntry}>Add Filter Entry</button>
//       <button onClick={applyFilter}>Apply Filter</button>
//     </div>
//   );
// };

// const FilterComponents = () => {
//   const [filteredData, setFilteredData] = useState([]);

//   const handleFilterChange = (filterQuery) => {
//     // Implement your logic to filter the data based on the filter query
//     // For this example, we'll just log the filter query
//     console.log('Filter Query:', filterQuery);
//     // You can replace the following line with the actual filtering logic based on your data
//     setFilteredData([]); // Set the filtered data here
//   };

//   return (
//     <div>
//       <FilterComponent onFilterChange={handleFilterChange} />
//       <UItable data={filteredData} />
//     </div>
//   );
// };

// export default FilterComponents;


// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const Filters = () => {
//     const [filters, setFilters] = useState([]);
//     const [showFilterInput, setShowFilterInput] = useState(false);

//     const columns = [
//         { key: ' name', prettyName: 'name', type: 'string' },
//         { key: 'screen_name', prettyName: 'Screen Name', type: 'string' },
//         { key: 'followers_count', prettyName: 'Followers Count', type: 'number' },
//         { key: 'following_count', prettyName: 'Following Count', type: 'number' },
//         { key: 'location', prettyName: 'location', type: 'string' },
//         { key: 'verified', prettyName: 'verified', type: 'boolean' },
//     ];

//     const operators = [
//         { key: 'CONTAINS', prettyName: 'Contains', type: 'string' },
//         { key: 'GTE', prettyName: '>=', type: 'number' },
//         { key: 'LTE', prettyName: '<=', type: 'number' },
//         { key: 'EQ', prettyName: 'Equals', type: 'boolean' }
//     ];

//     const handleFilter = () => {

//     };

//     const addFilter = () => {
//         setShowFilterInput(true);
//         const newFilter = {
//             column: columns[0].key,
//             operator: operators[0].key,
//             value: '',
//         };
//         setFilters([...filters, newFilter]);
//     };

//     return (
//         <div className='container'>
//             <h4>FILTERS</h4>
//             {showFilterInput &&
//                 filters.map((filter, index) => (
//                     <div key={index}>
//                         <label>Where
//                             {/* <select className='py-1 mx-2'>
//                                 <option value="AND">AND</option>
//                                 <option value="OR">OR</option>
//                             </select> */}
//                         <select className='py-1 mx-2'>
//                             {columns.map((eachcolumn) =>
//                             (<option key={eachcolumn.key} value={eachcolumn.key}>
//                                 {eachcolumn.prettyName}
//                             </option>
//                             ))}
//                         </select>
//                         <select className='py-1 mx-2'>
//                             {operators.map((eachOperator) =>
//                             (<option key={eachOperator.key} value={eachOperator.key}>
//                                 {eachOperator.prettyName}
//                             </option>
//                             ))}
//                         </select>
//                         <input className='py-1 mx-2' type="text" onClick={e => handleFilter()} />
//                         <button className='py-1 mx-2'><FontAwesomeIcon icon={faTrash} /></button>
//                     </label>
//                     </div>
//     ))
// }

// <button onClick={addFilter}>+ Add Filter</button>
// {/* <button onClick={applyFilter}> Apply Filter</button> */ }

//         </div >
//     );
// };

// export default Filters;


// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const Filters = ({ sampleData, updateTableData }) => {
//     const [filters, setFilters] = useState([]);
//     const [logicalOperators, setLogicalOperators] = useState(['AND']);
//     const [showFilterInput, setShowFilterInput] = useState(false);

//     const columns = [
//         { key: 'name', prettyName: 'Name', type: 'string' },
//         { key: 'screen_name', prettyName: 'Screen Name', type: 'string' },
//         { key: 'followers_count', prettyName: 'Followers Count', type: 'number' },
//         { key: 'following_count', prettyName: 'Following Count', type: 'number' },
//         { key: 'location', prettyName: 'Location', type: 'string' },
//         { key: 'verified', prettyName: 'Verified', type: 'boolean' },
//     ];

//     const operators = [
//         { key: 'CONTAINS', prettyName: 'Contains', type: 'string' },
//         { key: 'GTE', prettyName: '>=', type: 'number' },
//         { key: 'LTE', prettyName: '<=', type: 'number' },
//         { key: 'EQ', prettyName: 'Equals', type: 'boolean' },
//     ];

//     const handleFilter = () => {
//         const filteredData = sampleData.filter((row) => {
//             return filters.every((filter, index) => {
//                 const column = columns.find((col) => col.key === filter.column);
//                 const value = filter.value;

//                 switch (filter.operator) {
//                     case 'CONTAINS':
//                         return String(row[column.key]).toLowerCase().includes(value.toLowerCase());
//                     case 'GTE':
//                         return Number(row[column.key]) >= Number(value);
//                     case 'LTE':
//                         return Number(row[column.key]) <= Number(value);
//                     case 'EQ':
//                         const filterValue = column.type === 'boolean' ? value === 'true' : value === 'false';
//                         return row[column.key] === filterValue;
//                     default:
//                         return true;
//                 }
//             });
//         });

//         updateTableData(filteredData);
//     };

//     const addFilter = () => {
//         setShowFilterInput(true);
//         const newFilter = {
//             column: columns[0].key,
//             operator: operators[0].key,
//             value: '',
//         };
//         setFilters([...filters, newFilter]);

//         if (filters.length > 0) {
//             setLogicalOperators([...logicalOperators, 'AND']);
//         }
//     };

//     useEffect(() => {
//         handleFilter();
//     }, [filters]);

//     return (
//         <div className='container border my-1'>
//             <h1 className='text-center'>Assesment</h1>
//             <h4>FILTERS</h4>
//             {showFilterInput &&
//                 filters.map((filter, index) => (
//                     <div key={index}>
//                         {index === 0 && <label className='mx-1'>Where</label>}
//                         {index !== 0 && (
//                             <select
//                                 className='py-1 mx-2'
//                                 value={logicalOperators[index]}
//                                 onChange={(e) => {
//                                     const newOperators = [...logicalOperators];
//                                     newOperators[index] = e.target.value;
//                                     setLogicalOperators(newOperators);
//                                 }}
//                             >
//                                 {['AND', 'OR'].map((logicalOperator) => (
//                                     <option key={logicalOperator} value={logicalOperator}>
//                                         {logicalOperator}
//                                     </option>
//                                 ))}
//                             </select>
//                         )}
//                         <select
//                             className='p-1 mx-2'
//                             value={filter.column}
//                             onChange={(e) => {
//                                 const newFilters = [...filters];
//                                 newFilters[index].column = e.target.value;
//                                 setFilters(newFilters);
//                             }}
//                         >
//                             {columns.map((eachcolumn) => (
//                                 <option key={eachcolumn.key} value={eachcolumn.key}>
//                                     {eachcolumn.prettyName}
//                                 </option>
//                             ))}
//                         </select>
//                         <select
//                             className='p-1 mx-2'
//                             value={filter.operator}
//                             onChange={(e) => {
//                                 const newFilters = [...filters];
//                                 newFilters[index].operator = e.target.value;
//                                 setFilters(newFilters);
//                             }}
//                         >
//                             {operators.map((eachOperator) => (
//                                 <option key={eachOperator.key} value={eachOperator.key}>
//                                     {eachOperator.prettyName}
//                                 </option>
//                             ))}
//                         </select>
//                         <input
//                             className='p-1 m-2'
//                             type={filter.column === 'verified' ? 'checkbox' : 'text'}
//                             value={filter.value}
//                             onChange={(e) => {
//                                 const newFilters = [...filters];
//                                 newFilters[index].value = e.target.value;
//                                 setFilters(newFilters);
//                             }}
//                         />
//                         <button
//                             className='p-1 mx-2'
//                             onClick={() => {
//                                 const newFilters = [...filters];
//                                 newFilters.splice(index, 1);
//                                 setFilters(newFilters);

//                                 const newLogicalOperators = [...logicalOperators];
//                                 newLogicalOperators.splice(index, 1);
//                                 setLogicalOperators(newLogicalOperators);
//                             }}
//                         >
//                             <FontAwesomeIcon icon={faTrash} />
//                         </button>
//                     </div>
//                 ))}
//             <button className='m-1' onClick={addFilter}>+ Add Filter</button>
//         </div>
//     );
// };

// export default Filters;

// ..................before Changing verfied logic and add AND/OR




// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const Filters = ({ sampleData, updateTableData }) => {
//     const [filters, setFilters] = useState([]);
//     const [showFilterInput, setShowFilterInput] = useState(false);
//     const [logicalOperators, setLogicalOperators] = useState(['AND']);


//     const columns = [
//         { key: 'name', prettyName: 'Name', type: 'string' },
//         { key: 'screen_name', prettyName: 'Screen Name', type: 'string' },
//         { key: 'followers_count', prettyName: 'Followers Count', type: 'number' },
//         { key: 'following_count', prettyName: 'Following Count', type: 'number' },
//         { key: 'location', prettyName: 'Location', type: 'string' },
//         { key: 'verified', prettyName: 'Verified', type: 'boolean' },
//     ];

//     const operators = [
//         { key: 'CONTAINS', prettyName: 'Contains', type: 'string' },
//         { key: 'GTE', prettyName: '>=', type: 'number' },
//         { key: 'LTE', prettyName: '<=', type: 'number' },
//         { key: 'EQ', prettyName: 'Equals', type: 'boolean' },
//     ];

//     const handleFilter = () => {
//         const filteredData = sampleData.filter((row) => {
//             return filters.every((filter, index) => {
//                 const column = columns.find((col) => col.key === filter.column);
//                 const value = filter.value;

//                 switch (filter.operator) {
//                     case 'CONTAINS':
//                         return String(row[column.key]).toLowerCase().includes(value.toLowerCase());
//                     case 'GTE':
//                         return Number(row[column.key]) >= Number(value);
//                     case 'LTE':
//                         return Number(row[column.key]) <= Number(value);
//                     case 'EQ':
//                         return Boolean(row[column.key]) === Boolean(Number(value));
//                     default:
//                         return true;
//                 }
//             });
//         });
//         console.log(filteredData)

//         updateTableData(filteredData);
//     };

//     const addFilter = () => {
//         setShowFilterInput(true);
//         const newFilter = {
//             column: columns[0].key,
//             operator: operators[0].key,
//             value: '',
//         };
//         setFilters([...filters, newFilter]);

//         if (filters.length > 0) {
//             setLogicalOperators(logicalOperators);
//         }
//     };

//     useEffect(() => {
//         handleFilter();
//     }, [filters]);


//     return (
//         <div className='container border my-1'>
//             <h1 className='text-center'>Assesment</h1>
//             <h4>FILTERS</h4>
//             {showFilterInput &&
//                 filters.map((filter, index) => (
//                     <div key={index}>
//                         {index === 0 && <label className='mx-1'>Where</label>}
//                         {index !== 0 && (
//                             <select
//                                 className='py-1 mx-2'
//                                 value={logicalOperators[index]}
//                                 onChange={(e) => {
//                                     const newOperators = [...logicalOperators];
//                                     newOperators[index] = e.target.value;
//                                     setLogicalOperators(newOperators);
//                                 }}
//                             >
//                                 {['AND', 'OR'].map((logicalOperator) => (
//                                     <option key={logicalOperator} value={logicalOperator}>
//                                         {logicalOperator}
//                                     </option>
//                                 ))}
//                             </select>
//                         )}
//                         <select
//                             className='p-1 mx-2'
//                             value={filter.column}
//                             onChange={(e) => {
//                                 const newFilters = [...filters];
//                                 newFilters[index].column = e.target.value;
//                                 setFilters(newFilters);
//                             }}
//                         >
//                             {columns.map((eachcolumn) => (
//                                 <option key={eachcolumn.key} value={eachcolumn.key}>
//                                     {eachcolumn.prettyName}
//                                 </option>
//                             ))}
//                         </select>
//                         <select
//                             className='p-1 mx-2'
//                             value={filter.operator}
//                             onChange={(e) => {
//                                 const newFilters = [...filters];
//                                 newFilters[index].operator = e.target.value;
//                                 setFilters(newFilters);
//                             }}
//                         >
//                             {operators.map((eachOperator) => (
//                                 <option key={eachOperator.key} value={eachOperator.key}>
//                                     {eachOperator.prettyName}
//                                 </option>
//                             ))}
//                         </select>
//                         <input
//                             className='p-1 m-2'
//                             type='text'
//                             value={filter.value}
//                             onChange={(e) => {
//                                 const newFilters = [...filters];
//                                 newFilters[index].value = e.target.value;
//                                 setFilters(newFilters);
//                             }}
//                         />
//                         <button
//                             className='p-1 mx-2'
//                             onClick={() => {
//                                 const newFilters = [...filters];
//                                 newFilters.splice(index, 1);
//                                 setFilters(newFilters);

//                                 // const newLogicalOperators = [...logicalOperators];
//                                 // newLogicalOperators.splice(index, 1);
//                                 // setLogicalOperators(newLogicalOperators);
//                             }}
//                         >
//                             <FontAwesomeIcon icon={faTrash} />
//                         </button>
//                     </div>
//                 ))}

//             <button className='m-1' onClick={addFilter}>+ Add Filter</button>
//         </div>
//     );
// };

// export default Filters;


