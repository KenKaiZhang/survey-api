import mongoose from "mongoose";

const surveySchema = mongoose.Schema({
  code: {
    type: String,
    unique: true,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    // required: true,
  },
  cover: {
    type: String,
  },
  question: {
    type: String,
    required: true,
  },
  items: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item",
    },
  ],
  date_created: {
    type: Date,
    default: Date.now,
  },
  public: {
    type: Boolean,
    default: true,
  },
  responses: {
    type: Number,
    default: 0,
  },
  allowed: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

surveySchema.pre("save", async function (next) {
  const survey = this;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let uniqueCode = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueCode += characters.charAt(randomIndex);
  }

  const checkCode = await mongoose.model("Survey").findOne({ uniqueCode });
  if (checkCode) {
    return this.pre("save", next);
  }
  survey.code = uniqueCode;
  next();
});

export const Survey = mongoose.model("Survey", surveySchema);
