import express from 'express';

const app = express();

app.use(express.json());

app.post('/users',  (req, res) => {
    console.log(req.body);  

   

    return res.json({ok: true})
});

app.listen(3333);