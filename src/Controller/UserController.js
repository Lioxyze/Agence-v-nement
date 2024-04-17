const { User } = require("../Model/User");
const client = require("../Services/Connexion");

const register = async (request, response) => {
  try {
    let user = new User(
      request.body.email,
      request.body.firstname,
      request.body.lastname,
      request.body.password,
      false,
      new Date()
    );
    let result = await client.db("World").collection("user").insertOne(user);
    response.status(200).json(result);
  } catch (e) {
    console.log(e);
    response.status(500).json(e);
  }
};

const getAllUsers = async (request, response) => {
  try {
    let apiRequest = client.db("World").collection("user").find();
    let users = await apiRequest.toArray();
    if (users && users.length > 0) {
      response.status(200).json(users);
    } else {
      response.status(204).json({ msg: "No content" });
    }
  } catch (error) {
    response.status(500).json({ error });
  }
};

module.exports = { register, getAllUsers };
