function mostrarInformacion(nombreItem,infoItem){
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('ventana-informacion').style.display = 'block';


    document.getElementById('nombre-item').innerHTML=nombreItem;
    document.getElementById('datos-item').innerHTML=infoItem;

    console.log(nombreItem);

}

function mostrarInformacionNoBtn(nombreItem,infoItem){//Mostrar Informacion que no requiere botones
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('ventana-informacion2').style.display = 'block';


    document.getElementById('nombre-item2').innerHTML=nombreItem;
    document.getElementById('datos-item2').innerHTML=infoItem;

    console.log(nombreItem);

}

function ocultarInformacion(){
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('ventana-informacion').style.display = 'none';
    document.getElementById('ventana-informacion2').style.display = 'none';
}