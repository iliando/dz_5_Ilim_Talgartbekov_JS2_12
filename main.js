const URL = 'https://jsonplaceholder.typicode.com/users'
const getUser = document.getElementById('getUser')
function getUsers(){
    console.log(`${URL}`)
    fetch(`${URL}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }else {
                return `Error ${response.status}`
            }
        }).then(data => {
            const div = document.getElementById('list')
            console.log(data)
            data.forEach(e => {
                div.innerHTML += `
                <ul>
                <p>Name:${e.name}</p>
                <li>Id: ${e.id}</li>
                <li>Username: ${e.username}</li>
                <li>Email: ${e.email}</li>
                <li>Username: ${e.phone}</li>
                </ul>
                `
            })

    })
}
getUser.addEventListener('click', getUsers)

//Второе задание

const secURL  = 'https://jsonplaceholder.typicode.com/users'
const postBtn = document.getElementById('postBtn')
const data = {
    name: 'Ilim',
    username: 'Talgartbekov',
    email: 'abq05@gmail.com'
}
let post = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
}

function postUser(){
    fetch(secURL, post)
        .then(response => {
            if (response.ok === true){
                return response.json()
            }else  if (response.ok === false){
                return 'Ошибка ' + response.status
            }
        })
        .then(data => JSON.stringify(data))
}
postBtn.addEventListener('click',postUser)