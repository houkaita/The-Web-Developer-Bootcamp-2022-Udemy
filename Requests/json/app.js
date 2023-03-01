/*fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("RESOLVED", res);
        res.json().then((data) => console.log("JSON DONE", data))
    })
    .catch((err) => {
        console.log('ERROR', err)
    })*/

const localStarWarsPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/1/")
    const data = await res.json();
    console.log(data)
}