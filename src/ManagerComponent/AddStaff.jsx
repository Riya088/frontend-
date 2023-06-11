import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import { Button } from 'reactstrap';

export default function AddStaff() {
  const deleteStaff = (id) => {
    axios.delete(`http://localhost:8080/staffMembers/${id}`)
      .then((response) => {
        toast.success("Staff member deleted successfully");
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };
    const [staff, setstaff] = useState([]);

    useEffect(()=>{
        const getAllStaff = async ()=>{
            const staff = await getAllStaffMember();
            if (staff) {
                setstaff(staff.staff_member);
            }
        };
        getAllStaff();
    }, []);
   
    //function to get all staff
    const getAllStaffMember = ()=>{
        axios.get("http://localhost:8080/staffMembers").then(
            (response)=>{
                console.log(response.data);
                setstaff(response.data);
                toast.success("Success");
            }, (error)=>{
                console.log(error);
                toast.error("error");
            }
        )
    }
return(
 <div className='margin'>
    <br></br>
    <h2>Staff List</h2>
    <div>
        <Link
        to={`/manager/save/all`}
        aria-current="page">
        <b class="btn btn-primary" >Add staff</b>
        </Link>
    </div> 

    <div className="table-responsive">
        <table className="table table-hover text-color text-center">
        <thead className="table-bordered border-color bg-color custom-bg-text">
            <tr>
                <th scope="col">Code</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee Address</th>
                <th scope="col">NIC</th>
                <th scope="col">Salary</th>
                <th scope="col">Age</th>
                <th scope="col">Occupation</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {staff.map((staff_member) => {
                    return (
                        <tr>
                        <td>
                            <b>{staff_member.code}</b>
                        </td>
                        <td>
                            <b>{staff_member.empname}</b>
                        </td>
                        <td>
                            <b>{staff_member.empadd}</b>
                        </td>
                        <td>
                            <b>{staff_member.nic}</b>
                        </td>
                        <td>
                            <b>{staff_member.salary}</b>
                        </td>
                        <td>
                            <b>{staff_member.age}</b>
                        </td>
                        <td>
                            <b>{staff_member.occupation}</b>
                        </td>
                        <td>
                            <b>{staff_member.email}</b>
                        </td>
                        <td>
                        <Link to={`/manager/save/all`} aria-current="page">
                        <b class="btn btn-success" >Update</b>
                       </Link> 
                       <Button className='btn btn-success' onClick={()=>{
                            deleteStaff(staff_member.code);
                       }}
                       >Delete</Button>
                        </td>
                        </tr>
                    );
                    })}
                </tbody>   
            
        </table>
    </div>
</div>
  )
};