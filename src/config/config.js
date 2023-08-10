import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  mongoose: {
    url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  bcrypt: {
    salt: process.env.BCRYPT_SALT,
  },
  s3: {
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_ID,
      secretAccessKey: process.env.S3_ACCESS_SECRET,
    },
  },
};
