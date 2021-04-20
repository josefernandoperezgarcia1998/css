window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.contenedorBoton').classList.add('mostrar');
    }
    else{
        document.querySelector('.contenedorBoton').classList.remove('mostrar');
    }
}

document.querySelector('.contenedorBoton').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});