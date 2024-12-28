import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


export default function Contact() {
console.log(":process.env.URL",process.env.REACT_APP_URL)
    const [userName, setUserName] = useState("")
    const [Password,serPassword] = useState("")
    const [data,setData] = useState([])
    const getData  = async() =>{
     const user =    await axios.get(`${process.env.REACT_APP_URL}/users/get`)
     console.log("sss",user)
     setData(user.data.sucess)
    }
    useEffect(()=>{
        getData() 
    },[]) 

const add  = async() =>{
    const data  = {firstName:userName, lastName:Password}
    await axios.post(`${process.env.REACT_APP_URL}/users/get`,data)
    getData();
    setUserName('')
    serPassword('')
    
}


    return (
        <div style={{ backgroundColor: 'blue', height: '100vh', display:'flex', alignItems:'center', justifyContent: 'center' }}>
            <div style={{ background: 'pink', padding: '40px',display:'flex', flexDirection:'column', alignItems:'center' }}>
                <div>
                    Contact US
                </div>
                <div  style={{marginTop:'20px'}}>
                    <label htmlFor="">Username</label>
                    <input type="text"  style={{marginLeft:'20px'}}value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div style={{marginTop:'20px'}}>
                <label htmlFor="">Password</label>

                    <input type="text" style={{marginLeft:'20px'}} value={Password} onChange={(e) => { serPassword(e.target.value) }} />
 
                </div>
                <div  style={{marginTop:'20px'}}>
                <button onClick={add}>Click</button>

                </div>

            </div>
            

{
    data.map((value)=>{
        return (
            <>
            <div>
            <label htmlFor="">userName:</label>
{value.firstName}
            </div>
            <div>
            <label htmlFor="">password:</label>
            {value.lastName}

            </div>

            </>
        ) 
    })

}
        </div>
    )
}
