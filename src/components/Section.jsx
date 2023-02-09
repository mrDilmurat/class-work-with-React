import React from "react";
import Table from "react-bootstrap/Table";

const Section = ({ users }) => {
  let obj = { name: "jake", age: 15 };
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let newArr = arr.map((item) => {
    return item + 20;
  });
  console.log(newArr);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
      {users.map((item,index) => (
        <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.age}</td>
      </tr>
      ))
      
      }
    </tbody>
    </Table>
  );
};

export default Section;
