
export const handler =  function(event, context, callback) {
    var token = event.authorizationToken;
    if (token === "eyJBZG1pbiI6InRydWUifQ==") {
        callback(null, allow);
    } else {
        callback("Unauthorized");
    }
};
