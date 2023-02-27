const form = document.querySelector('#form');
const Cname = document.querySelector('#name');
const getter = document.querySelector('#getter');
const formSubmit = document.querySelector('#formSubmit');

formSubmit.addEventListener('click', postName);

function postName(e){
    e.preventDefault();
    let nameValue = Cname.value;
    console.log(nameValue);
    axios.post('http://localhost:3000/',{name:nameValue})
    .then(result => console.log(result))
    .catch(err => console.log(err));
}

getter.addEventListener('click',getValue);

function getValue(e){
    e.preventDefault();
    axios.get('http://localhost:3000/')
    .then(result => console.log(result))
    .catch(err => console.log(err));
}