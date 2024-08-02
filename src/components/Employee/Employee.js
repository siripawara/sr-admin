import React from 'react'
import './Employee.css'
import { assets } from '../../assets/assets'
import axios from 'axios'


function Employee({fetchdata,id,name,age,birthday,email,address,phonenumber,qualification,passportnumber,citizen,religion,videolink,profilepicture,application,passport}) {
   
  const confirmDelete = async () =>{
    const userConfirmed = window.confirm("Do you want to delete?");
    if(userConfirmed){
      const response = await axios.post(`${assets.URL}employee/delete/`,{id:id})
      if(response.data.success){
        alert("Delete...!");
        fetchdata()
      }else{
        alert("Ooops..!! Something went wrong",id)
      }
      
    }else{
      alert("Cancelled...!");
    }
  }
  return (
    <div className='employee'>
    <img  className="profile-image" src={`${assets.URL}images/${profilepicture}`}/>
    <div className='employee-grid'>
        <div className='single-field'><span className='field-title'>Name: </span><span>{name}</span></div>
        <div className='single-field'><span className='field-title'>Age :</span><span>{age}</span></div>
        <div className='single-field'><span className='field-title'>Birthday :</span><span>{birthday.split("T")[0] }</span></div>
        <div className='single-field'><span className='field-title'>Email :</span><span>{email}</span></div>
        <div className='single-field'><span className='field-title'>Address :</span><span>{address}</span></div>
        <div className='single-field'><span className='field-title'>Phone Number :</span><span>{phonenumber}</span></div>
        <div className='single-field'><span className='field-title'>Qualification :</span><span>{qualification}</span></div>
        <div className='single-field'><span className='field-title'>Passport Number :</span><span>{passportnumber}</span></div>
        <div className='single-field'><span className='field-title'>Citizen :</span><span>{citizen}</span></div>
        <div className='single-field'><span className='field-title'>Religion :</span><span>{religion}</span></div>
        <div className='single-field'><span className='field-title'>Video Link :</span><span><a href={videolink} target="_blank">{videolink}</a></span></div>
        <div className='single-field'><span className='field-title'>Application :</span><span><img  className="application-image" src={`${assets.URL}images/${application}`}/></span></div>
        <div className='single-field'><span className='field-title'>Passport :</span><span><img  className="passport-image" src={`${assets.URL}images/${passport}`}/></span></div>
        <div className='single-field'><span className='field-title'>Selected :</span><span>
          <form>
            <div className='select-form'>
              <input type='checkbox' name="selected"/>
              <button type="submit">Update</button>
            </div>
          </form>
          </span></div>
          <div className='single-field'><span className='field-title'>Actions :</span><span><button  className="action-btn" onClick={confirmDelete}>Delete</button></span></div>
    </div>
    </div>
  )
}

export default Employee