import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

function SaveAllStaff() {
  const savemsg = () => {
    toast.success('Save Successfully !', {
    });
};
  const [formData, setFormData] = useState({
    code: '',
    empname: '',
    empadd: '',
    nic: '',
    salary: '',
    age: '',
    occupation: '',
    email: '',
  });

  const handleSubmit = (e) => {
    console.log(formData);
    postDatatoServer(formData);
    e.preventDefault();
  };

  //creating function to post data on server
  const postDatatoServer = (data)=>{
    axios.post('http://localhost:8080/staffMembers',data).then(
        (response) => {
            console.log(response);
            console.log("success");
            toast.success("Staff member added successfully");
        },
        (error)=>{
            console.log(error);
            console.log("error")
            toast.error("Something went wroge");
        }
    );
  };

  return (
    <div className="margin">
    <div style={{backgroundColor:"ButtonHighlight"}}>
    <h2 className='text-center' >Add Staff form</h2>
    <Container className="border border-primary">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="code">
        <Form.Label>Code</Form.Label>
        <Form.Control
          type="text"
          name="code"
          value={formData.code}
          onChange={(e)=>{
            setFormData({...formData,code:e.target.value});
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="empname">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
          type="text"
          name="empname"
          value={formData.empname}
          onChange={(e)=>{
            setFormData({...formData,empname:e.target.value});
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="empadd">
        <Form.Label>Employee Address</Form.Label>
        <Form.Control
          type="text"
          name="empadd"
          value={formData.empadd}
          onChange={(e)=>{
            setFormData({...formData,empadd:e.target.value});
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="nic">
        <Form.Label>NIC</Form.Label>
        <Form.Control
          type="text"
          name="nic"
          value={formData.nic}
          onChange={(e)=>{
            setFormData({...formData,nic:e.target.value});
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="salary">
        <Form.Label>Salary</Form.Label>
        <Form.Control
          type="text"
          name="salary"
          value={formData.salary}
          onChange={(e)=>{
            setFormData({...formData,salary:e.target.value});
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          name="age"
          value={formData.age}
          onChange={(e)=>{
            setFormData({...formData,age:e.target.value});
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="occupation">
        <Form.Label>Occupation</Form.Label>
        <Form.Control
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={(e)=>{
            setFormData({...formData,occupation:e.target.value});
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={(e)=>{
            setFormData({...formData,email:e.target.value});
          }}
          required
        />
      </Form.Group>
         <br>
         </br>

      <Button onClick = {savemsg} type="submit">Save</Button>
      
      <ToastContainer/>
      <br>
      </br>
      {<a href="http://localhost:3000/user/manager/add/staff">Back to Staff list</a>}
    </Form>
   
    </Container>
    </div>
    </div>
  );
}

export default SaveAllStaff