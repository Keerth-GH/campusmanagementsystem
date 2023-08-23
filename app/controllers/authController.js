const User = require('../models/user');


exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    if(!username || !password){
      res.send(500).json({error: 'Enter both username and password'})
    }
    const user = await User.create({ username, password });
    console.log('user',user)
    res.status(201).json({message:'REGISTRATION SUCCESSFULL', user});
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      try{
        req.session.user = user; // Store user data in session
      }
      catch(error){
        console.log('error',error)
      }
      console.log('req.session.user',req.session.user)
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

exports.logout = (req, res) => {
  if (req.session.user) {
    req.session.destroy(); // Destroy the session to log out the user
    res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(401).json({ error: 'You are not logged in' });
  }
};
