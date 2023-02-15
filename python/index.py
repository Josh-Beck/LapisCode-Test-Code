import json

def lambda_handler(event, context):
   message = 'Hello {} !'.format(event['key1'])
   
   #Use an import
   j = "{'x' : 'jsonString'}"
   json.loads(j)
   
   #Test parameters
   body = event.get("body")
   queryParams = event["queryStringParameters"]
   auth = event["headers"]["authorization"]
   a = 5
   b = 10
   if b > a:
      print("b is greater than a")
   elif a == b:
      print("a and b are equal")
   else:
      print("a is greater than b")
   
   return {
       'message' : message
   }
