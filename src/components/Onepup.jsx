import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import getPuppy from '../getPuppy';
import { Link } from 'react-router-dom';
import deleteme from '../deleteme';

function Onepup() {
    let {id} =useParams();

    const [puppy,setPuppy]=useState([]);
    let [delFlag,setDelFlag]=useState(false);

    useEffect(()=>{
        getPuppy().then(setPuppy)
    },[delFlag]);
 
    const deleteme1= (a)=>deleteme(a).then(()=>setDelFlag(!delFlag));
    return (
    <>

        {delFlag && <h2 className='text-red-800'>Player Deleted</h2>}
        
        {puppy.map((p)=>{
            if(p.id==id){
            return(
        <>
        <div key={p.id} className=" flex-wrap flex flex-col p-2 w-fit h-fit m-auto shadow-2xl border-green-400 border-4  hover:border-red-600 rounded-lg">
                <img className='h-72 w-96' src={`${p.imageUrl}`} alt="a dog" />
                <div className='flex flex-col m-auto text-lg font-bold '>
                    <p >Name: {p.name}</p>
                    <p>Breed: {p.breed}</p>
                    <p>ID: {p.id}</p>
                    <p>Status: {p.status}</p>
                    <span className='flex flex-row gap-3'>
                    <Link to={`/`}><button >Home Page</button> </Link>
                    <button onClick={()=>{deleteme1(p.id)}} className='bg-red-400 rounded-lg p-1 hover:bg-red-500 active:bg-red-700'>Delete</button>
                    </span>
                </div>
            </div>
        
        </>
    )}})}
    </>
    )
        
}

export default Onepup