import React from 'react'
import { useParams } from 'react-router-dom'
import { Link,useLocation } from 'react-router-dom';

function SearchPage() {
    const location=useLocation();
    let {text}=useParams();

    
    let p1=location.state.filter((p)=>p.name.toLowerCase()==text.toLowerCase());
    if(p1.length==0){
      return(<h2 className='text-red-600 text-xl font-bold'>No match found for {text}</h2>)
    }
    let p=p1[0];
    
  return (
    <>
      <div key={p.id} className=" flex-wrap flex flex-col p-2 w-fit h-fit m-auto shadow-2xl border-green-400 border-4  hover:border-red-600 rounded-lg">
                <img className='h-72 w-96' src={`${p.imageUrl}`} alt="a dog" />
                <div className='flex flex-col m-auto text-lg font-bold '>
                    <p >Name: {p.name}</p>
                    <p>Breed: {p.breed}</p>
                    <p>ID: {p.id}</p>
                    <p>Status: {p.status}</p>
                    <Link to={`/`}><button >Home Page</button> </Link>
                </div>
            </div>
    </>
  )
}

export default SearchPage