import React from 'react'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function Create() {

    const {register,control,handleSubmit} = useForm();

    const navigate = useNavigate();
    
    const registerUser = async (soso)=>{
    const response = await axios.post(`${import.meta.env.VITE_BURL}/users`,soso);
    
    
    if (response.status === 201){
    
    navigate('/users');
    }

    }

  return (
    <>
   <form onSubmit={handleSubmit(registerUser)}>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="userName" placeholder="" {...register("userName")} />
    <label  htmlFor="userName">User Name</label>
  </div>

  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="email" placeholder="" {...register("email")} />
    <label  htmlFor="email">Email address</label>
  </div>

  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="password" placeholder="" {...register("password")} />
    <label htmlFor="password">Password</label>
  </div>

  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="phone" placeholder="" {...register("phone")} />
    <label  htmlFor="phone">Phone</label>
  </div>
  
  <button type="submit" className="btn btn-outline-primary">Add</button>
</form>

 <DevTool control={control} />
    </>
  )
}
