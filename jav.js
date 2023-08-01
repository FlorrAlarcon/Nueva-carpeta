

function anto(){
    const invers= document.formulario.inversion.value;
    const tnanual= document.formulario.tna.value/100;
    document.formulario.ganual.value = invers* tnanual;
}

function metagan(){
    const VALOR = document.formulario.gani.value / document.formulario.tna.value;
    const capital = VALOR * 100;

    document.formulario.inversion.value = capital;
}