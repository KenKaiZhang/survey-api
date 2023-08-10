import config from "../config/config";
import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

export const getPresignedUrl = async (key) => {
  console.log(config.s3.region);
  const s3Client = new S3Client({
    region: config.s3.region,
    credentials: config.s3.credentials,
  });

  const { url, fields } = await createPresignedPost(s3Client, {
    Bucket: config.s3.bucket,
    Key: key,
    Fields: {
      success_action_status: "201",
      "Content-Type": "image/jpeg",
    },
    Expires: 60,
  });

  return { url, fields };
};
