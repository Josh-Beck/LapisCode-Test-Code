module.exports.handler = (event, context, callback) => {
  let objectId = event.queryStringParameters.objectId;
  let objectKey = `${objectId}.png`;
  let data = "test";
  let bucket = event.headers.bucketName;
  
  uploadToS3(data, objectKey, bucket);
}

function uploadToS3(data, key, bucket) {
    return s3
        .putObject({
            Bucket: bucket,
            Key: key,
            Body: data,
            ContentType: "application/json"
        })
        .promise();
}
