const a = document.getElementById('a');
const b = document.getElementById('b');
const button = document.getElementById('button');

function add(a, b){
  return a + b;
}

button.addEventListener('click', () => {
  console.log(add(a.value, b.value));
});
