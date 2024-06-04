import { useEffect, useState } from "react";
import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function User() {

  const [Data , SetData] = useState([]);

 useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(Data => SetData(Data))
  
  });

 
  return(
    <>
    <Table striped hover size="sm">
        <thead>
            <td>NAME</td>
            <td>UserName</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Company</td>
        </thead>
      <tbody>
    {Data.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
        
      <Table striped hover size="sm">
       <thead>
           <td>street</td>
           <td>suite</td>
           <td>city</td>
           <td>zipcode</td>
       </thead>
           <tbody>
               <td>{user.address.street}</td>
               <td>{user.address.suite}</td>
               <td>{user.address.city}</td>
               <td>{user.address.zipcode}</td>
           </tbody>
       </Table>
        </td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        <td>{user.company.name}</td>
      </tr>
    ))}
    </tbody>
    </Table>
    </>
  ) ;
}

export default User;
