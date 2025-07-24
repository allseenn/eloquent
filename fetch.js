const getUser = async (url) => {
const response = await fetch(url);
return await response.text();
}
const user = await getUser('https://api.github.com/users/allseenn');
console.log(user);
