//LOGIN
const showPassword = () => {
    var inputSenha = document.querySelector('#senha');

    if(inputSenha.getAttribute('type') === 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
}

function abrirHome(event){
    event.preventDefault();
    window.location.href = "home.html";
}

//HOME
// Rolando com o scroll do mouse
const listasFilmes = document.querySelectorAll('.filmeLista');

listasFilmes.forEach(filmeLista => {
  filmeLista.addEventListener('wheel', (e) => {
    e.preventDefault(); 
    filmeLista.scrollLeft += e.deltaY; // Ajusta a rolagem horizontal
  })
});
