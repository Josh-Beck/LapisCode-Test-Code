import json

def lambda_handler(event, context):
   message = 'Hello {} !'.format(event['key1'])
   
   #Use an import
   j = "{'x' : 'jsonString'}
   json.loads(j)
   
   #Test parameters
   body = event.get("body")
   queryParams = event["queryStringParameters"]
   auth = event["headers"]["authorization"]
   
   return {
       'message' : message
   }
