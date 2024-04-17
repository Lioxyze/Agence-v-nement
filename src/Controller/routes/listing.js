const express = require("express");
const {
  Createlisting,
  updatelisting,
  getAlllisting,
  deleteListing,
} = require("../ListingController");

const router = express.Router();

router.route("/Createlisting").post(Createlisting);
router.route("/updatelisting/:id").put(updatelisting);
router.route("/getAlllisting").get(getAlllisting);
router.route("/deleteListing/:id").delete(deleteListing);

module.exports = router;
