import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  details: {
    type: String,
  },
  male_responses: {
    type: Array,
    default: [0, 0],
  },
  female_responses: {
    type: Array,
    default: [0, 0],
  },
  other_responses: {
    type: Array,
    default: [0, 0],
  },
  age_yes: {
    type: Number,
    default: 0,
  },
  age_no: {
    type: Number,
    default: 0,
  },
  survey: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Survey",
  },
});

export const Item = mongoose.model("Item", itemSchema);
