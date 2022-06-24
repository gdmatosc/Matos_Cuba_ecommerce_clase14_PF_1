const express=require('express');
const http=require('http');
const productosRouter=require('./routes/productosRouter');

const app=express();
const server=http.createServer(app)

const PORT=8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))
app.use('/api',productosRouter);

app.set('views','./views')
app.set('view engine','pug')
app.set('view engine','ejs')

const messages=[
    {author:'Juan',text:'Hola Que tal'},
    {author:'Pedro',text:'Muy bien'},
    {author:'Ana',text:'Genial'}
];

server.listen(PORT,()=>{
    console.log('Listening on port: '+PORT);
})