import React from 'react'
import './Employee.css'
import { assets } from '../../assets/assets'
import axios from 'axios'


function Employee({fetchdata,id,name,age,birthday,email,address,phonenumber,qualification,passportnumber,citizen,religion,videolink,profilepicture,application,passport,selected}) {
   
  const confirmDelete = async () =>{
    const userConfirmed = window.confirm("Do you want to delete?");
    if(userConfirmed){
      const response = await axios.post(`${assets.URL}employee/delete/`,{id:id})
      if(response.data.success){
        alert("Deleted successfully...!");
        fetchdata()
      }else{
        alert("Ooops..!! Something went wrong",id)
      }
      
    }else{
      alert("Cancelled...!");
    }
  }

  const handleSelectedStatus = async ()=>{
    try {
      const response = await axios.post(`${assets.URL}employee/update/`,{id:id,selected:!selected})
      if(response.data.success){
        alert("Updated...!");
        fetchdata()
      }else{
        alert("Ooops..!! Something went wrong",id)
      }
    } catch (error) {
      alert("Ooops..!! Something went wrong-error")
    }
  }
  return (
    <div className='employee'>
    {/* <img  className="profile-image" src={`${assets.URL}images/${profilepicture}`}/> */}
    <div className='employee-grid'>
        <div className='single-field'><span className='field-title'>Name: </span><span>{name}</span></div>
        <div className='single-field'><span className='field-title'>Age :</span><span>{age}</span></div>
        <div className='single-field'><span className='field-title'>Birthday :</span><span>{birthday.split("T")[0] }</span></div>
        <div className='single-field'><span className='field-title'>Email :</span><span>{email}</span></div>
        <div className='single-field'><span className='field-title'>Address :</span><span>{address}</span></div>
        <div className='single-field'><span className='field-title'>Phone Number :</span><span>{phonenumber}</span></div>
        <div className='single-field'><span className='field-title'>Qualification :</span>{qualification}</div>
        <div className='single-field'><span className='field-title'>Passport Number :</span><span>{passportnumber}</span></div>
        <div className='single-field'><span className='field-title'>Citizen :</span><span>{citizen}</span></div>
        <div className='single-field'><span className='field-title'>Religion :</span><span>{religion}</span></div>
        <div className='single-field'><span className='field-title'>File Link :</span><span><a href={videolink} target="_blank">Click here</a></span></div>
        {/* <div className='single-field'><span className='field-title'>Application :</span><span><img  className="application-image" src={`${assets.URL}images/${application}`}/></span></div>
        <div className='single-field'><span className='field-title'>Passport :</span><span><img  className="passport-image" src={`${assets.URL}images/${passport}`}/></span></div> */}
        <div className='single-field'><span className='field-title'>Selected :</span><span>
            <div className='select-form'>
              <input type='checkbox' checked={selected} name="selected"/>
              <button type="submit" onClick={handleSelectedStatus}>Change Selected Status</button>
            </div>

          </span></div>
          <div className='single-field'><span className='field-title'>Actions :</span><span><button  className="action-btn" onClick={confirmDelete}>Delete</button></span></div>
    </div>
    </div>
  )
}

export default Employee