

const fetchGitData = async ()=>{
let response = await fetch("https://api.github.com/users/sahityawebdev");
let data = await response.json();
return data;
}

export default fetchGitData;