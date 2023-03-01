const getStarWarsPerson = async (id) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
    console.log(res)
};

starWarsPerson(5)