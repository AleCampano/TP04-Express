function devolverFecha()
{
const fechaLocal = new Date().toLocaleDateString('es-ES');
return fechaLocal; 
}

function devolverHora()
{
const horaActual = new Date().toLocaleTimeString();
return horaActual; 
}
export {devolverFecha, devolverHora}