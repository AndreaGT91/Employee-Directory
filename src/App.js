import React from 'react';
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import Table from "./components/Table";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import THead from './components/THead';
import TBody from './components/TBody';


function App() {
  return (
    <Wrapper>
      <Heading>Company-Name Employee Directory</Heading>
      <Table>
        <THead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Office Number</TableHeader>
            <TableHeader>Extension</TableHeader>
            <TableHeader>Email</TableHeader>
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
