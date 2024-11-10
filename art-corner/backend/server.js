const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/cards', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CardSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  link: Array,
  bookmark: Boolean,
  like: Boolean
});

const Cards = mongoose.model('Card', CardSchema);

app.get('/users', async (req, res) => {
  const users = await Cards.find();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const user = new Cards(req.body);
  await user.save();
  res.json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
