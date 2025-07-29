import React from 'react'

export default function NameTag({name,description,email,position}) {
  return (
    <div className='w-fit '>
        <div style={{padding:" 0 54px",display:"flex",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{fontWeight:"bold",textTransform:"capitalize",textAlign:'center'}}> {name}</h1>
            <p style={{textAlign:"center"}}>{position}</p>
            <p style={{textAlign:"center",margin:"5px 0"}}>{description}</p>
            <button style={{padding:"0 23px",color:"white",backgroundColor:"blue",textAlign:"center",borderRadius:"5px"}}>{email}</button>
        </div>
    </div>
  )
}
