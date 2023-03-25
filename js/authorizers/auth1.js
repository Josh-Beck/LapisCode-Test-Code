
export const handler =  function(event, context, callback) {
    var bucket = event.headers.bucketName;
    if (bucket === "userBucket") {
        callback(null, allow);
    } else {
        callback("Unauthorized");
    }
};
