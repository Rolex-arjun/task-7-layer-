// controllers/login.js
const userService = require('../services/userService');

exports.signup = async (req, res) => {
  try {
    const user = await userService.signup(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
