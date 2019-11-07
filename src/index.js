const express = require('express');
//framework exprees para hacer un server
const app = express();
//solicitamos express

const path = require('path');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
//paso 11 llamamos al index de routes con el app.use
app.use(require('./routes/index'));
//requerimos path para utilizar rutas del sistema
app.use(express.static(path.join(__dirname,'public')));
//definimos la ruta donde viene nuestro archivo es en static
app.listen(3000, ()=>{
    console.log('Server on port 3000');
});
//creamos el servidor  despues creamos la carpeta public donde va air todo el html

//crearemos un archivo index.html

//paso 6 le decimos a express que en la carpeta publica tenemos un html al cual accesar

