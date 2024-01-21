 async function deleteme(id){

    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${id}`,
        {
          method: 'DELETE',
        }
      );
      const result = await response.json();
      return(result);
    } catch (err) {
      console.error(err);
    }
    
  }

  export default deleteme;