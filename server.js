const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/matchmaking', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    bio: String
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { name, bio } = req.body;
    const user = new User({ name, bio });
    await user.save();
    res.status(201).send(user);
});

app.get('/login', async (req, res) => {
    const { name } = req.query;
    const user = await User.findOne({ name });
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
