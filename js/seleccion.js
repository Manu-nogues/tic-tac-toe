function guardarInput (){
    let input=document.getElementById('pepito1');
    let inputt=document.getElementById('pepito2');
    let inputtt=document.getElementById('pepito3');
    let pepito1=input.value;
    let pepito2=inputt.value;
    let pepito3=inputtt.value;
    sessionStorage.setItem('pepito1',pepito1);
    sessionStorage.setItem('pepito2',pepito2);
    sessionStorage.setItem('pepito3',pepito3);
    window.location.href="index.html";
}

//como obtener el valor del session storage
function obtenerValor (){
    let pepito1=sessionStorage.getItem('pepito1');
    let pepito2=sessionStorage.getItem('pepito2');
    let pepito3=sessionStorage.getItem('pepito3');
    console.log(pepito1,pepito2,pepito3);
}








