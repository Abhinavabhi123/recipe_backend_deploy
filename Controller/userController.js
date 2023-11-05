const client = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.USER_JWT_SECRET;

module.exports = {
  // Function for user login with google authentication 
  userLogin: async (req, res) => {
    try {
      const { name, email, image } = req.body;
      console.log(req.body);
      const existingRecord = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      console.log(existingRecord,"here");
      console.log(secretKey,"secret");
      if (existingRecord.rows.length > 0) {
        const jwtToken = jwt.sign(
          {
            _id: existingRecord?.rows[0]?.id,
            name:existingRecord?.rows[0]?.name,
            email: existingRecord?.rows[0]?.email,
            image: existingRecord?.rows[0]?.image,
            role:"user"
          },
          secretKey,
          { expiresIn: "15d" }
          );
        return res
        .status(200)
        .json({ userData: existingRecord.rows[0], message: "Login success",jwtToken });
      } else {
        console.log("ivide");
        const result = await client.query(
          "INSERT INTO users (name, email, image) VALUES ($1, $2, $3) RETURNING *",
          [name, email, image]
        );
        const jwtToken = jwt.sign(
          {
            _id: result?.rows[0]?.id,
            name: result?.rows[0]?.name,
            email: result?.rows[0]?.email,
            image: result?.rows[0]?.image,
            role:"user"
          },
          secretKey,
          { expiresIn: "15d" }
        );
        res
          .status(200)
          .send({ userData: result.rows, message: "Login success",jwtToken});
      }
    } catch (error) {
      res.status(500).send({message:"Internal server Error"})
    }
  },
};
