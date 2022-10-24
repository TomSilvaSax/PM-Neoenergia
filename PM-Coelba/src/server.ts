import express from 'express';

const app = express()

app.get('/pm', (req, res, next) => {
 return res.json([
  
 { id: 'PM Manutencao'},
 { id: 'PM Manutencao'},
 { id: 'PM Manutencao'},
])

});



app.listen(3333)
