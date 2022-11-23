var btnAbrirPopup=document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btncerrarPopup = document.getElementById('btncerrar-popup')

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btncerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

var btnAbrirPopupSalir=document.getElementById('btn-abrir-popupSalir'),
    overlaySalir = document.getElementById('overlaySalir'),
    popupSalir = document.getElementById('popupSalir'),
    btncerrarPopupSalir = document.getElementById('btncerrar-popupSalir')

btnAbrirPopupSalir.addEventListener('click', function(){
    overlaySalir.classList.add('active');
    popupSalir.classList.add('active');
});

btncerrarPopupSalir.addEventListener('click', function(){
    overlaySalir.classList.remove('active');
    popupSalir.classList.remove('active');
});