const express = require("express");
const app = express();
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listings = require("../routes/listing.js");
const ExpressError = require("../utils/ExpressErrors.js");
const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner } = require("../middleware.js");

// Validate Function

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// // Index Route
// router.get(
//   "/",
//   isLoggedIn,
//   wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", { allListings, });
//   })
// );

// // Index Route
// router.get(
//   "/",
//   isLoggedIn,
//   wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", { allListings, req });
//   })
// );

// Index Route
router.get(
  "/",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({ owner: req.user._id });
    res.render("listings/index.ejs", { allListings, req });
  })
);

// New Route
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs", { req });
});

// Show route
router.get(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("owner");
    console.log(req.user._id);
    console.log(listing.owner);

    if (!req.user._id.equals(listing.owner.id)) {
      req.flash("error", "CodePlate you requested does not exist!!");
      res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing, req });
  })
);

// Create route

router.post(
  "/",
  validateListing,
  isLoggedIn,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing); //or previous method of let {title , img,...}
    newListing.owner = req.user._id;
    newListing.user = req.user.username;
    await newListing.save();
    req.flash("success", "New CodePlate Created!!");
    res.redirect("/listings");
  })
);

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

// Update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    console.log("HIT HIT");
    console.log("Request params:", req.params);
    console.log("Request body:", req.body);

    const { id } = req.params;
    const { code } = req.body.listing;
    console.log("ID:", id);
    console.log("Code:", code);

    await Listing.findByIdAndUpdate(id, { code });
    req.flash("success", "Code Updated!!");

    res.redirect(`/listings/${id}`);
  })
);

// Delete route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "New CodePlate Deleted!!");
    res.redirect("/listings");
  })
);

module.exports = router;
