const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async function(event, context) {
  let body;
  let statusCode = 200;
  const headers = {
	"Content-Type": "application/json"
  };

  try {
	switch (event.httpMethod) {
  	case "GET":
    	body = await dynamo
      	.get({
        	TableName: "http-crud-tutorial-items",
        	Key: {
          	id: event.pathParameters.id
        	}
      	})
      	.promise();
    	break;
  	case "PUT":
    	let requestJSON = JSON.parse(event.body);
    	await dynamo
      	.put({
        	TableName: "http-crud-tutorial-items",
        	Item: {
          	id: requestJSON.id,
          	price: requestJSON.price,
          	name: requestJSON.name
        	}
      	})
      	.promise();
    	body = `Put item ${requestJSON.id}`;
    	break;
  	default:
    	throw new Error(`Unsupported method: "${event.httpMethod}"`);
	}
  } catch (err) {
	statusCode = 400;
	body = err.message;
  } finally {
	body = JSON.stringify(body);
  }

  return {
	statusCode,
	body,
	headers
  };
};
