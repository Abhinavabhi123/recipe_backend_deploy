const jwt = require("jsonwebtoken");

// Creating user authentication middleware using role
module.exports = userAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const decoded = jwt.decode(token);
      if (decoded.role === "user") {
        next();
      }
    }else{
        return res.status(401).send({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.send(500).send({message:"Internal server Error"})
  }
};
