const { Listing } = require("../Model/Listing");
const client = require("../Services/Connexion");
const { ObjectId } = require("bson");

const Createlisting = async (request, response) => {
  try {
    let listing = new Listing(
      request.body.title,
      request.body.description,
      request.body.image,
      request.body.price,
      false,
      new Date()
    );
    let result = await client
      .db("World")
      .collection("listing")
      .insertOne(listing);
    response.status(200).json(result);
  } catch (e) {
    console.log(e);
    response.status(500).json(e);
  }
};

const updatelisting = async (request, response) => {
  console.log("played");
  try {
    let id = new ObjectId(request.params.id);
    let title = request.body.title;
    let description = request.body.description;
    let price = request.body.price;
    let result = await client
      .db("World")
      .collection("listing")
      .updateOne({ _id: id }, { $set: { title, description, price } });

    if (result.modifiedCount === 1) {
      response.status(200).json({ msg: "Modification réussie" });
    } else {
      response.status(404).json({ msg: "Ce listing  n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    response.status(501).json(error);
  }
};

const getAlllisting = async (request, response) => {
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

const deleteListing = async (request, response) => {
  try {
    let id = new ObjectId(request.params.id);
    let result = await client
      .db("express-api")
      .collection("user")
      .deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      response.status(200).json({ msg: "Suppression réussie" });
    } else {
      response.status(404).json({ msg: "Cet utilisateur n'existe pas" });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json(error);
  }
};

module.exports = { Createlisting, updatelisting, getAlllisting, deleteListing };
