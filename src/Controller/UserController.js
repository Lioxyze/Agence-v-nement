const { User } = require("../Model/User");
const client = require("../Services/Connexion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await client.db("World").collection("user").findOne({ email });

    if (!user) {
      return response.status(404).json({ msg: "Utilisateur non trouvé" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return response.status(401).json({ msg: "Mot de passe incorrect" });
    }

    const token = jwt.sign(
      {
        userId: user._id, // ID de l'utilisateur dans la base de données
        email: user.email,
      },
      "secret_key",
      { expiresIn: "1h" }
    );

    response.status(200).json({ token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ msg: "Erreur lors de la connexion" });
  }
};

module.exports = { register, getAllUsers, login };
