import { devolverFecha, devolverHora } from "./src/time.js";

import express from "express";  

const app = express();
const port = 3000;

app.get('/', (req, res) => {  
  res.send('holi');
})

app.listen(port, () => {  // Inicio el servidor WEB 
  console.log(`Listening on http://localhost:${port}`)
})

app.get('/hora', (req, res) => {  
  res.send(devolverHora());
})

app.get('/fecha', (req, res) => { 
  res.send(devolverFecha());
})

app.use((req, res) => {
  res.status(404).redirect(`https://http.cat/${404}`);
});