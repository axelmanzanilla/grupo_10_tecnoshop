const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

var port = process.env.PORT || 3000;

const folderPublicPath = path.resolve(__dirname, './public');

// Establecemos la carpeta publica
app.use( express.static(folderPublicPath));

// Ruteo de direcciones 

app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'));
})

app.get('/productCart',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'));
});

app.get('/register',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

// Levantamos el servidor
app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`));
