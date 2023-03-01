"use strict";

const AWS = require("aws-sdk");
const s3 = new AWS.S3();

module.exports.handler = (event, context, callback) => {
    let requestBody = JSON.parse(event.body);
    let url = requestBody.url;
    let objectId = event.queryStringParameters.objectId;
    let objectKey = `${objectId}.png`;
    let bucket = event.headers.bucketName;
    
    var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);
    if(url && event.headers.bucketName) {
        if(!valid) {
            url = "http://ip.jsontest.com/";
        }
    }
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => uploadToS3(data, objectKey, bucket));
};

/**
* @param {*} data
* @param {string} key
*/
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
