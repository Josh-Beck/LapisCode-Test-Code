
module.exports.handler = (event, context, callback) => {

  var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  if(url && event.headers.bucketName) {
    if(!valid) {
      url = "http://ip.jsontest.com/";
    }
  }
  
  console.log(fetch(url).then((response) => response.json()));
}
