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


function App() {
  // Dummy state, used to force re-render
  const [updateView, setUpdateView] = useState(0);

  // const empList = employees;

  function handleColClick(event) {
    const colName = event.target.dataset.text;

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
        employees.sort((a,b) => {return compareEmps(a.id, b.id)});
        break;
      case "First Name": 
        employees.sort((a,b) => {return compareEmps(a.firstname, b.firstname)});
        break;
      case "Last Name": 
        employees.sort((a,b) => {return compareEmps(a.lastname, b.lastname)});
        break;
      case "Title": 
        employees.sort((a,b) => {return compareEmps(a.title, b.title)});
        break;
      case "Department": 
        employees.sort((a,b) => {return compareEmps(a.department, b.department)});
        break;
      case "Office Number": 
        employees.sort((a,b) => {return compareEmps(a.officenum, b.officenum)});
        break;
      case "Extension": 
        employees.sort((a,b) => {return compareEmps(a.extension, b.extension)});
        break;
      case "Email": 
        employees.sort((a,b) => {return compareEmps(a.email, b.email)});
        break;
      default:
        employees.sort((a,b) => {return compareEmps(a.id, b.id)});
    };
    // Force the DOM to re-render by changing state
    setUpdateView((updateView) => ++updateView);
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
          {employees.map(employee => (
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
    </Wrapper>
  );
}

export default App;