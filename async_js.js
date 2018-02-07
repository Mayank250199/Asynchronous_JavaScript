/*
Ready States

0 - Request is not intialized.
1 - Request has been setup.
2 - Request is send.
3 - Request is in progress.
4 - Request is complete.

*/


//Vanilla Javascript Method
window.onload = function(){
var http = new XMLHttpRequest();


http.onreadystatechange = function(){
  if(http.readyState == 4 && http.status == 200){
  //  console.log(JSON.parse(http.response));
  }
};



  http.open("GET","data/data.json", true);
  http.send();



//jquery Method
$.get("data/data.json",function(data){
  console.log(data);
});
console.log("test");
};
