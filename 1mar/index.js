const express = require('express');
const app = express();
const sequelize = require('./database');
const User = require('./User');

sequelize.sync({ force: true }).then(() => console.log('banco está rodando'));



app.use(express.json());


app.post('/users', async (req, res) => {
    await User.create(req.body);

    res.send('Usuario cadastrado!');

});


app.get('/users', async (req,res)=>{
    const user = await User.findAll();
    res.send(user);
});

app.get('/users/:id', async (req,res)=>{
    const requestId = req.params.id;
    const user = await User.findOne({ where : {id: requestId}});
    res.send(user);
}

);

app.put('/users/:id', async (req,res)=>{
    const requestId = req.params.id;
    const user = await User.findOne({ where : {id: requestId}});
    user.nomeUsuario = req.body.nomeUsuario;
    await user.save();
    res.send('Cadastro atualizado!');
}

);


app.delete('/users/:id', async(req, res)=>{
    const requestId = req.params.id;
    await User.destroy({ where: {id: requestId}});
    res.send('Cadastro removido');
}
);


app.listen(3200, () => {
    console.log("Servidor rodando");
});