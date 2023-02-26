const form = document.querySelector('#form');
const Cname = document.querySelector('#name');
const getter = document.querySelector('#getter');

form.addEventListener('submit', postName);

function postName(e){
    e.preventDefault();
    let nameValue = Cname.value;
    console.log(nameValue);
/*     axios.get('localhost:3000/')
    .then()
    .catch(); */
}

getter.addEventListener('click',getValue);

function getValue(e){
    e.preventDefault();
    axios.get('localhost:3000/')
    .then()
    .catch();
}