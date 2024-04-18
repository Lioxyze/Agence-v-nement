const express = require("express");
const { connect } = require("./src/Services/Connexion");
const user = require("./src/Controller/routes/user");
const listing = require("./src/Controller/routes/listing");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/", user);
app.use("/", listing);

connect("mongodb://127.0.0.1:27017", (error) => {
  if (error) {
    console.log("Failed to connect");
    process.exit(-1);
  } else {
    console.log("successfully connected");
  }
});
app.listen(PORT);
console.log("Le serveur viens de ce lancer en", PORT);
