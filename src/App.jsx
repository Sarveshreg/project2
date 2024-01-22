import { useState,useEffect,useRef } from 'react'
import './App.css'
import getPuppy from './getPuppy'
import deleteme from './deleteme'
import addPuppy from './addPuppy'
import { NavLink,Link, useLocation } from 'react-router-dom'

function App() {
  
  const [puppy,setPuppy]=useState([]);
  let [c,setC]=useState(false);
  let [searchFlag,setSearchFlag]=useState(false);
  let [delFlag,setDelFlag]=useState(false);
  let [addFlag,setAddFlag]=useState(false);
  let[nameN,setNameN]=useState("");
  let[breedN,setBreedN]=useState("");
  let[imageUrlN,setImageUrlN]=useState("");
  let[searchtext,setSearchText]=useState("");
  
 
 
  useEffect(()=>{
    getPuppy().then(setPuppy); 
    if(searchFlag){setSearchFlag(!searchFlag)}; 
  },[addFlag,c]);

  if(puppy.length==0){
    return(<h1>Loading</h1>)
  }
  
  // eslint-disable-next-line no-undef
  const deleteme1= (a)=>deleteme(a).then(()=>setC(!c));
  const addPuppy1=(a)=>addPuppy(a).then(()=>{setAddFlag(!addFlag);setNameN("");setBreedN(""),setImageUrlN("")});

  return (
    <div className=' flex flex-col justify-center flex-wrap place-content-center gap-6'>
    
      <div>
        <input onChange={(e)=>setSearchText(e.target.value)} placeholder='Search Players'/><Link  state={puppy} to={`/search/${searchtext}`}>Search</Link>
      </div>
      
      <div >
      <form className='flex flex-col gap-2'>
          <label>Name <input  type="text" placeholder='Name' value={nameN} onChange={(e)=>setNameN(e.target.value)}/></label>
          <label>Breed <input type="text" placeholder='Breed' value={breedN} onChange={(e)=>setBreedN(e.target.value)} /></label>
          <label>URL <input type="text" placeholder='URL' value={imageUrlN} onChange={(e)=>setImageUrlN(e.target.value)} /></label>
          <button className='bg-green-300 hover:bg-green-400 active:bg-green-500 p-1' type='submit' onClick={(e)=>{
            e.preventDefault(); addPuppy1({name:nameN, breed: breedN, imageUrl: imageUrlN});
          }}>Add Player</button>
      </form>
      </div>
      
      <div className='font-bold'>
        {delFlag && <p>Player Deleted</p>}
        {addFlag && <p>Player Added</p>}
        {searchFlag && <h1>No Match Found!</h1>}    
      </div>

      <div className=' flex flex-row flex-wrap border-black border-2 justify-evenly w-3/4'>
      {puppy.map((p)=>(
        <>
        <div key={p.id} className=" m-6 flex-wrap flex flex-col w-auto h-auto shadow-2xl border-green-400 border-4 hover:border-red-600 rounded-lg">
                <img className='h-48 w-auto m-1' src={`${p.imageUrl}`} alt="a dog" />
                <div className='flex flex-col m-5 text-lg font-bold p-1'>
                    <p >Name: {p.name}</p>
                    <span className='flex flex-row gap-3'>
                    <Link to={`/onePupp/${p.id}`}><button >Show More!</button> </Link>
                    <button onClick={()=>{deleteme1(p.id)}} className='bg-red-400 rounded-lg p-1 hover:bg-red-500 active:bg-red-700'>Delete</button>
                    </span>
                </div>
            </div>
        </>
      ))}
      </div>
    </div>
  )
}

export default App
