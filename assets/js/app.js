const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name');//nombre de las variables y el punto es una clase
const $blog = document.querySelector('#blog');
const $location = document.querySelector('#location');//falta agregarlo en el html y lo puse como id

//async
async function displayUser(username) {
  $name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data=await response.json();//falta convertirlo en json
  console.log(data);
  $name.textContent = `${data.name}`;//platillas literales
  $blog.textContent = `${data.blog}`;
  $location.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);