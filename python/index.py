def lambda_handler(event, context):
   message = 'Hello {} !'.format(event['key1'])
   
   #Test parameters
   body = event.get("body")
   queryParams = event["queryStringParameters"]
   auth = event["headers"]["authorization"]
   
   return {
       'message' : message
   }
