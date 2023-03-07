const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth() + 1;
const anio = hoy.getFullYear();

var fecha=`${dia}/${mes}/${anio}`;
var dyt="Direccion: Dr. Moyano 504 Olivia, Cordoba / Telefono: +5493532418532"
const legend = document.querySelector('.dyt');
legend.textContent = dyt+" / "+fecha;