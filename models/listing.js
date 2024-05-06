const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  user: String,
  title: {
    type: String,
    required: true,
  },
  type: String,
  code: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
