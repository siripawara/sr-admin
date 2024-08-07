import React,{useEffect,useState} from 'react'
import './ListEmployee.css'
import Employee from '../Employee/Employee'
import { assets } from '../../assets/assets'
import axios from 'axios'

const ListEmployee = () => {
  const [data,setData] = useState()
  const fetchdata = async()=>{
      try {
        const response = await axios.get(`${assets.URL}employee/`)
        if(response.data.success){
          setData(response.data.data.reverse())
          console.log(response.data.data)
        }
      } catch (error) {
        window.alert("Oops...!! Something went wrong")
      }

  }

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='list-employee'>
      {
        data?
        data.map((item,index)=>{
          return(
            <Employee fetchdata={fetchdata} id={item._id} name={item.name} age={item.age} birthday={item.birthday} email={item.email} address={item.address} phonenumber={item.phonenumber} qualification={item.qualification} passportnumber={item.passportnumber} citizen={item.citizen} religion={item.religion} videolink={item.videolink} profilepicture ={item.profilepicture} passport={item.passport} application={item.application} selected={item.selected} />
          )
        }):
        <p>Loading</p>
      }
    </div>
  )
}

export default ListEmployee