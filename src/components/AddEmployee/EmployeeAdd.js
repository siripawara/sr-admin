import React ,{useState}from 'react'
import './EmployeeAdd.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'


function EmployeeAdd() {

  const [profilepicture, setProfilepicture] = useState(false)
  const [application, setApplication] = useState(false)
  const [passport, setPassport] = useState(false)
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

  const handleSubmit = async()=>{
    
    let finalData = {...data,
      profilepicture,
      application,
      passport
    }
    setUploading(true)
    const response = await axios.post(`${assets.URL}employee/add`,finalData,{headers: { "Content-Type": "multipart/form-data" }})
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
        setApplication(false)
        setProfilepicture(false)
        setPassport(false)
        setUploading(false)
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
      <>
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
        <div className='input-field'><label>Video Link</label><input type="text" className='input-height' name="videolink" onChange={(e)=>handleInputFields(e)} value={data.videolink}></input></div>
        <div className='input-field'>
          <p>Profile Picture *</p>
          <label htmlFor='profilepicture'>
              <img className='image' src={profilepicture?URL.createObjectURL(profilepicture):assets.uploadArea}/>
          </label>
          <input onChange={(e)=>setProfilepicture(e.target.files[0])} name="profilepicture" type='file' id="profilepicture" hidden required/>
        </div>
        <div className='input-field'>
          <p>application *</p>
          <label htmlFor='application'>
              <img className='image' src={application?URL.createObjectURL(application):assets.uploadArea}/>
          </label>
          <input onChange={(e)=>setApplication(e.target.files[0])} name="application" type='file' id="application" hidden required/>
        </div>
        <div className='input-field'>
          <p>Passport *</p>
          <label htmlFor='passport'>
              <img className='image' src={passport?URL.createObjectURL(passport):assets.uploadArea}/>
          </label>
          <input onChange={(e)=>setPassport(e.target.files[0])} name="passport" type='file' id="passport" hidden required/>
        </div>
      </div>
      
      <div className='btn'>
        
        {
          !uploading? <button onClick={handleSubmit}>Add</button> :<p>Uploading....</p>
        }
        </div>
      </>
    </div>
  )
}

export default EmployeeAdd