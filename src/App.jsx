import { useState,useEffect,useRef } from 'react'
import './App.css'
import getPuppy from './getPuppy'
import deleteme from './deleteme'
import addPuppy from './addPuppy'
import { NavLink,Link, useLocation } from 'react-router-dom'

function App() {
  const location=useLocation();
  console.log(location)
  const [puppy,setPuppy]=useState([]);
  let [c,setC]=useState(false);
  let [searchFlag,setSearchFlag]=useState(false);
  let [delFlag,setDelFlag]=useState(false);
  let [addFlag,setAddFlag]=useState(false);
  let[nameN,setNameN]=useState("");
  let[breedN,setBreedN]=useState("");
  let[imageUrlN,setImageUrlN]=useState("");
  let[searchtext,setSearchText]=useState("");
  const changeC=()=>setC(++c);
  const searchFun=()=>{
    let newpuppy=puppy.filter((p)=>(p.name).toLowerCase()==searchtext.toLowerCase());
    if(newpuppy.length!=0){
    setPuppy(newpuppy);
    }
    else{
      setSearchFlag(true)
    }
  }
 
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
    <>
    
      <div>
        <input onChange={(e)=>setSearchText(e.target.value)} placeholder='Search Players'/><Link state={puppy} to={`/search/${searchtext}`}>Search</Link>
      </div>
      
      <form >
          <label>Name <input type="text" placeholder='Name' value={nameN} onChange={(e)=>setNameN(e.target.value)}/></label>
          <label>Breed <input type="text" placeholder='Breed' value={breedN} onChange={(e)=>setBreedN(e.target.value)} /></label>
          <label>URL <input type="text" placeholder='URL' value={imageUrlN} onChange={(e)=>setImageUrlN(e.target.value)} /></label>
          <button type='submit' onClick={(e)=>{
            e.preventDefault(); addPuppy1({name:nameN, breed: breedN, imageUrl: imageUrlN});
          }}>Add Player</button>
      </form>

      {delFlag && <p>Player Deleted</p>}
      {addFlag && <p>Player Added</p>}
      {searchFlag && <h1>No Match Found!</h1>}    

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
