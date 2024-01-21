
const addPuppy=async function (newPup){
try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newPup.name,
            breed: newPup.breed,
            imageUrl: newPup.imageUrl
        }),
    }
    );
    const result = await response.json();
    console.log(result);
    } catch (err) {
    console.error(err);
    }
}

export default addPuppy;