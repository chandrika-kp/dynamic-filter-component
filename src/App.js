import React, { useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import DataTable from './components/DataTable';

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

const App = () => {
  const [tableData, setTableData] = useState([]);

  const updateTableData = (filteredData) => {
    setTableData(filteredData);
  };

  return (
    <>
      <Filters updateTableData={updateTableData} sampleData={sampleData} />
      <DataTable data={tableData} />
    </>
  );
}

export default App;
