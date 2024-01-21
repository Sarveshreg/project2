import { useState,useEffect } from 'react'
import './App.css'
import getPuppy from './getPuppy'
import deleteme from './deleteme'
import addPuppy from './addPuppy'
import { NavLink,Link } from 'react-router-dom'

function App() {
  const [puppy,setPuppy]=useState([]);
  let [c,setC]=useState(false);
  let [delFlag,setDelFlag]=useState(false);
  let [addFlag,setAddFlag]=useState(false);
  let newPuppy={name:"",breed:"",imageUrl:""}
  const changeC=()=>setC(++c);
  
  useEffect(()=>{
    getPuppy().then(setPuppy);
  },[addFlag,c]);
  
  // eslint-disable-next-line no-undef
  const deleteme1= (a)=>deleteme(a).then(()=>setC(!c));
  const addPuppy1=(a)=>addPuppy(a).then(()=>{setAddFlag(!addFlag);console.log("player added")});

  return (
    <>
    {delFlag && <p>Player Deleted</p>}
    {addFlag && <p>Player Added</p>}
      <div>
          <label>Name <input type="text" placeholder='Name' onChange={(e)=>newPuppy.name=e.target.value}/></label>
          <label>Breed <input type="text" placeholder='Breed' onChange={(e)=>newPuppy.breed=e.target.value} /></label>
          <label>URL <input type="text" placeholder='URL' onChange={(e)=>newPuppy.imageUrl=e.target.value} /></label>
          <button onClick={(e)=>{
            e.preventDefault();
            addPuppy1(newPuppy);
          }}>Add Player</button>
      </div>
      {puppy.map((p)=>(
        <>
        <div key={p.id} className="flex flex-row w-auto h-2/5 justify-center mt-3 bg-teal-100">
                <img className='h-40 w-44 mt-4' src={`${p.imageUrl}`} alt="a dog" />
                <div className=' flex flex-col m-5 text-lg font-bold p-1'>
                    <p>Name: {p.name}</p>
                    <span>
                    <Link to={`/onePupp/${p.id}`}><button className='bg-green-300 rounded-lg font-normal p-1 h-auto'>Show More!</button> </Link>
                    <button onClick={()=>{deleteme1(p.id)}} className='bg-amber-600 rounded-lg p-1'>Delete</button>
                    </span>
                </div>
            </div>
        </>
      ))}
    </>
  )
}

export default App
