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
  let[searchtext,setSearchText]=useState(" ");
  let[err,setErr]=useState(false)
 
 
  useEffect(()=>{
    getPuppy().then(setPuppy); 
    setErr(false);
  },[addFlag,delFlag,c]);

  if(puppy.length==0){
    return(<h1>Loading</h1>)
  }
  
  // eslint-disable-next-line no-undef
  const deleteme1= (a)=>deleteme(a).then(()=>{if(!delFlag)setDelFlag(true);setC(!c) ;setAddFlag(false)});
  const addPuppy1=(a)=>addPuppy(a).then(()=>{if(!addFlag)setAddFlag(true);setDelFlag(false);setC(!c);setNameN("");setBreedN(""),setImageUrlN("")});

  return (
    <div className=' flex flex-col justify-center flex-wrap place-content-center gap-6'>
      
      <div className='flex flex-row h-fit w-auto mt-6  items-end flex-nowrap justify-center '>
        <div className=' flex flex-col gap-2 px-52 justify-stretch sm:justify-start' >
          <h3 className='font-bold text-xl'>Add a New Player</h3>
          <form className='flex flex-col gap-2 mb-auto  '>
              <label>Name <br /></label><input  type="text"  placeholder='Name' value={nameN} onChange={(e)=>setNameN(e.target.value) }required />
              <label>Breed <br /></label><input type="text" placeholder='Breed' value={breedN} onChange={(e)=>setBreedN(e.target.value)} required />
              <label>URL <br /></label><input type="text" placeholder='URL' value={imageUrlN} onChange={(e)=>setImageUrlN(e.target.value)} required />
              <button className='bg-purple-400 hover:bg-purple-500 active:bg-purple-700 active:text-white p-1 w-fit'  onClick={(e)=>{
                e.preventDefault();
                if(nameN!="" && breedN!="" && imageUrlN!=""){
                addPuppy1({name:nameN, breed: breedN, imageUrl: imageUrlN});}
                else{
                    setErr(true);
                }
              }}>Add Player</button> {err && <p className='text-red-600  font-bold'>Input Field empty</p>}
          </form>
        </div>  
      </div>
      
      <div >
        {delFlag && <p className='font-bold text-red-600 text-xl'>Player Deleted</p>}
        {addFlag && <p className='font-bold text-green-600 text-xl  w-fit'>Player Added</p>}   
      </div>
      <span className='flex flex-row flex-wrap lg:justify-start md:justify-center sm:justify-center'>
              <input className="w-fit" type="text"  onChange={(e)=>setSearchText(e.target.value)} placeholder="search players"/>
              <Link state={puppy} to={`/search/${searchtext}`}>Search</Link>
      </span>
      <div className=' flex flex-row flex-wrap m-auto border-black border-2 justify-evenly w-3/5'>

      {puppy.map((p)=>(
        <>
        <div key={p.id} className=" m-6 flex-wrap flex flex-col w-auto md:w-fit h-fit shadow-2xl border-green-400 border-4 hover:border-red-600 rounded-lg">
                <img className='h-48 w-auto m-1' src={`${p.imageUrl}`} alt="a dog" />
                <div className='flex flex-col m-5  flex-wrap text-lg font-bold p-1'>
                    <p >Name: {p.name}</p>
                    <span className='flex flex-row gap-3 flex-wrap'>
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
