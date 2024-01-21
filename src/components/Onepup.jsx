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

        {delFlag && <p>Player Deleted</p>}
        
        {puppy.map((p)=>{
            if(p.id==id){
            return(
        <>
        <div key={p.id} className="flex flex-row w-auto h-2/5 justify-center mt-3 bg-teal-100">
                <img className='h-40 w-44 mt-4' src={`${p.imageUrl}`} alt="a dog" />
                <div className=' flex flex-col m-5 text-lg font-bold p-1'>
                    <p>Name: {p.name}</p>
                    <p>Breed: {p.breed}</p>
                    <p>ID: {p.id}</p>
                    <p>Status: {p.status}</p>
                    <span>
                    <Link to={`/`}><button className='bg-green-300 rounded-lg font-normal p-1 h-auto'>Go back!</button> </Link>
                    <button onClick={()=>{deleteme1(p.id)}} className='bg-amber-600 rounded-lg p-1'>Delete</button>
                    </span>
                </div>
            </div>
        </>
    )}})}
    </>
    )
        
}

export default Onepup