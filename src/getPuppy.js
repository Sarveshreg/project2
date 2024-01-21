const getPuppy=async()=>{
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players');
    const result=await response.json();
    return(result.data.players);
  };

  export default getPuppy;