const mongoose = require('mongoose');

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    image: {
      type: String,
      required: true
    },
    badge: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform(doc, object) {
        delete object._id;
      }
    }
  }
);

module.exports = mongoose.model("Product", productSchema);

// The JSON configuration exposes MongoDB’s _id as id, matching your existing product.id cart logic.