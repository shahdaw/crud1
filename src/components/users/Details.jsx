import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Details() {

const navigate = useNavigate();
const {id} = useParams();
 const {register,handleSubmit,setValue} = useForm();

 const getDetails= async ()=>{
  const data = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
  setValue("userName",data.user.userName);
  setValue("email",data.user.email);
  setValue("phone",data.user.phone);
  console.log(data);
  }

  useEffect( ()=>{
      getDetails();
  } ,[])

  const updateUser= async (value)=>{

    const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,
      {
        userName:value.userName
      }
    );
    
    
    if (response.status === 200){
    
    navigate('/users');

    }
  }


  return (
  
     <>
    <form onSubmit={handleSubmit(updateUser)}>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="userName" placeholder="" {...register("userName")} />
    <label  htmlFor="userName">User Name</label>
  </div>

  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="email" placeholder="" {...register("email")} disabled />
    <label  htmlFor="email">Email address</label>
  </div>

  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="phone" placeholder="" {...register("phone")} disabled />
    <label  htmlFor="phone">Phone</label>
  </div>
  
  <button type="submit" className="btn btn-outline-primary">update</button>
</form>
</>
  )
}
