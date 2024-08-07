import React ,{useState}from 'react'
import './EmployeeAdd.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'


function EmployeeAdd() {

  // const [profilepicture, setProfilepicture] = useState(false)
  // const [application, setApplication] = useState(false)
  // const [passport, setPassport] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [data,setData] = useState({
    name:"",
    age:"",
    birthday:"",
    email:"",
    address:"",
    phonenumber:"",
    passportnumber:"",
    citizen:"",
    religion:"",
    qualification:"",
    videolink:""

  })

  const handleInputFields = async (e)=>{
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setData((data)=>({...data,[name]:value}))
    console.log(data)
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
    let finalData = {...data,
      // profilepicture,
      // application,
      // passport
    }
    setUploading(true)
    const response = await axios.post(`${assets.URL}employee/add`,finalData)
    try {
      if(response.data.success){
        window.alert(response.data.message)
        setData({
          name:"",
          age:"",
          birthday:"",
          email:"",
          address:"",
          phonenumber:"",
          passportnumber:"",
          citizen:"",
          religion:"",
          qualification:"",
          videolink:""
      
        })
        // setApplication(false)
        // setProfilepicture(false)
        // setPassport(false)
        // setUploading(false)
      }else{
        window.alert("Oops...!! Something went wrong")
      }
    } catch (error) {
      window.alert("Oops...!! Something went wrong - Error..")
    }finally{
      setUploading(false);
    }
    
  }

  return (
    <div>
      <h2 className='title'>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
      <div className='employeeAdd'>
        <div className='input-field'><label>Name *</label><input type="text" name="name" required onChange={(e)=>handleInputFields(e)} value={data.name}></input></div>
        <div className='input-field'><label>Age *</label><input type="number" name="age" required onChange={(e)=>handleInputFields(e)} value={data.age}></input></div>
        <div className='input-field'><label>Birthday *</label><input type="date" name="birthday" required onChange={(e)=>handleInputFields(e)} value={data.birthday}></input></div>
        <div className='input-field'><label>Email</label><input type="email" name="email" onChange={(e)=>handleInputFields(e)} value={data.email}></input></div>
        <div className='input-field'><label>Address *</label><input type="text" name="address" required onChange={(e)=>handleInputFields(e)} value={data.address}></input></div>
        <div className='input-field'><label>Phone Number *</label><input type="number" name="phonenumber" required onChange={(e)=>handleInputFields(e)} value={data.phonenumber}></input></div>
        <div className='input-field'><label>Qulification</label><textarea rows ="4" cols="20" name="qualification" onChange={(e)=>handleInputFields(e)} value={data.qualification}></textarea></div>
        <div className='input-field'><label>Passport Number </label><input className='input-height' type="text" name="passportnumber"  onChange={(e)=>handleInputFields(e)} value={data.passportnumber}></input></div>
        <div className='input-field'><label>Citizen</label><input type="text" name="citizen" onChange={(e)=>handleInputFields(e)} value={data.citizen}></input></div>
        <div className='input-field'><label>Religion</label><input type="text" name="religion" onChange={(e)=>handleInputFields(e)} value={data.religion}></input></div>
        <div className='input-field'><label>File Link</label><input type="text" className='input-height' name="videolink" onChange={(e)=>handleInputFields(e)} value={data.videolink}></input></div>
      </div>
      
      <div className='btn'>
        
        {
          !uploading? <button type="submit">Add</button> :<p>Uploading....</p>
        }
        </div>
      </form>
    </div>
  )
}

export default EmployeeAdd