const express = require('express');
const mongoose = require('mongoose');   
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/biblioteca', {});
const User=require('./Models/UserModel')
app.use(cors());
const auth=require('./middleware/auth')



app.use(express.json());
app.post('/login', async(req, res) => {
    try{
        const { mail, password } = req.body;
    const user= await User.findOne({mail});
    if (!user) {
        return res.status(401).json({ error: 'mail' });
    }
    if (user.password !== password) {
        return res.status(401).json({ error: 'password' });
    }
    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ token });
    }catch(error){
        res.send(error)
        return res.status(401).json({ error: 'nothing' });
    }
    

})
app.use(auth)
app.use(require('./Routes/routes'))

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
export default app;