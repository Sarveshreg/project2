import React from 'react'
import { useParams } from 'react-router-dom'
import { Link,useLocation } from 'react-router-dom';
import deleteme from '../deleteme';

function SearchPage() {
    const location=useLocation();
    console.log(location.state);
    let {text}=useParams();
    let result=location.state.filter((p)=>p.name==text);
    console.log(result)
  return (
    <><h2>Search Result fro "{text}"</h2>
            <div key={result[0].id} className="flex flex-row w-auto h-2/5 justify-center mt-3 bg-teal-100">
                <img className='h-40 w-44 mt-4' src={`${result[0].imageUrl}`} alt="a dog" />
                <div className=' flex flex-col m-5 text-lg font-bold p-1'>
                    <p>Name: {result[0].name}</p>
                    <span>
                    <Link to={`/onePupp/${result[0].id}`}><button className='bg-green-300 rounded-lg font-normal p-1 h-auto'>Show More!</button> </Link>
                    </span>
                </div>
            </div>
            </>
  )
}

export default SearchPage