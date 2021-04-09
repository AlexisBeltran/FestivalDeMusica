 document.addEventListener('DOMContentLoaded', function(){
    cargarGaleria();
})

function cargarGaleria(){
    const Galeria = document.querySelector('.galeria-imagenes');
    for(let i=1; i<=12;i++){
        const Imagen = document.createElement('img');
        Imagen.src = `build/img/thumb/${i}.webp`;
        Imagen.dataset.imagenId = i; //Añade id a la etiqueta
        //Añadir la funcion de mostrar evento
        Imagen.onclick = mostrarImagen;
        const Lista = document.createElement('li');
        Lista.style.cssText = 'cursor:pointer;';
        Lista.appendChild(Imagen);
        Galeria.appendChild(Lista);
    }
}

function mostrarImagen(e){
    const idImagen = parseInt(e.target.dataset.imagenId);
    //Generar Imagen
    const imagen = document.createElement('img');
    imagen.src = `build/img/grande/${idImagen}.jpg`;
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    const boton = document.createElement('p');
    boton.textContent = 'X';
    boton.classList.add('btn-cerrar');
    boton.onclick = function(){
        overlay.remove();
    }
    overlay.appendChild(boton);
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}