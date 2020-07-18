import React, { useState } from 'react';
import employees from "./employees.json";

import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Table from "./components/Table";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import THead from './components/THead';
import TBody from './components/TBody';
// import Form from './components/Form';
// import Label from './components/Label';
// import Select from './components/Select';
// import Option from './components/Option';

function App() {
  // Dummy state, used to force re-render
  const [updateView, setUpdateView] = useState(0);

  // Which filter is selected
  const noFilter = "no filter";
  const [filterSelect, setFilterSelect] = useState(noFilter);

  // Make copy of original data so that we can reset filter
  const [empList, setEmpList] = useState(employees);

  function handleColClick(event) {
    const colName = event.target.dataset.text;
    const emps = empList;

    function compareEmps(emp1, emp2) {
      if (emp1 < emp2) {
        return -1;
      }
      else if (emp1 > emp2) {
        return 1;
      }
      else {
        return 0;
      };
    };

    switch (colName) {
      case "ID": 
        emps.sort((a,b) => {return compareEmps(a.id, b.id)});
        break;
      case "First Name": 
        emps.sort((a,b) => {return compareEmps(a.firstname, b.firstname)});
        break;
      case "Last Name": 
        emps.sort((a,b) => {return compareEmps(a.lastname, b.lastname)});
        break;
      case "Title": 
        emps.sort((a,b) => {return compareEmps(a.title, b.title)});
        break;
      case "Department": 
        emps.sort((a,b) => {return compareEmps(a.department, b.department)});
        break;
      case "Office Number": 
        emps.sort((a,b) => {return compareEmps(a.officenum, b.officenum)});
        break;
      case "Extension": 
        emps.sort((a,b) => {return compareEmps(a.extension, b.extension)});
        break;
      case "Email": 
        emps.sort((a,b) => {return compareEmps(a.email, b.email)});
        break;
      default:
        emps.sort((a,b) => {return compareEmps(a.id, b.id)});
    };
    setEmpList(emps);
    setUpdateView(updateView + 1);
  };

  function handleFilterChange(event) {
    const filter = event.target.value;
    setFilterSelect(filter);
    
    if (filter === noFilter) {
      setEmpList(employees);
    }
    else {
      setEmpList(employees.filter(emp => emp.department === filter));
    };
  };

  return (
    <Wrapper>
      <Heading>Company-Name Employee Directory</Heading>
      <span style={{ display: "none" }}>{updateView}</span> 
      <Paragraph>Click on column heading to sort by that column</Paragraph>
      <Table>
        <THead>
          <TableRow>
            <TableHeader handleColClick={handleColClick}>ID</TableHeader>
            <TableHeader handleColClick={handleColClick}>First Name</TableHeader>
            <TableHeader handleColClick={handleColClick}>Last Name</TableHeader>
            <TableHeader handleColClick={handleColClick}>Title</TableHeader>
            <TableHeader handleColClick={handleColClick}>Department</TableHeader>
            <TableHeader handleColClick={handleColClick}>Office Number</TableHeader>
            <TableHeader handleColClick={handleColClick}>Extension</TableHeader>
            <TableHeader handleColClick={handleColClick}>Email</TableHeader>
          </TableRow>
        </THead>
        <TBody>
          {empList.map(employee => (
            <TableRow key={employee.id.toString()}>
              <TableData>{employee.id}</TableData>
              <TableData>{employee.firstname}</TableData>
              <TableData>{employee.lastname}</TableData>
              <TableData>{employee.title}</TableData>
              <TableData>{employee.department}</TableData>
              <TableData>{employee.officenum}</TableData>
              <TableData>{employee.extension}</TableData>
              <TableData>{employee.email}</TableData>
            </TableRow>
          ))}
        </TBody>
      </Table>
      <form>
        <label>
          Filter by Department:
          <select value={filterSelect} onChange={handleFilterChange}>
            <option value="no filter">no filter</option>
            <option value="Development">Development</option>
            <option value="Sales">Sales</option>
          </select>
        </label>
      </form>
    </Wrapper>
  );
}

export default App;