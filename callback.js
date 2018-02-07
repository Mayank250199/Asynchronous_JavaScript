window.onload = function(){
var anime = ["Naruto","Black Clover","Erased"];
// //Synchronous callback
// function callback(val){
//   console.log(val);
// }
//
// anime.forEach(callback);
// console.log(done);

function cb(data){
  console.log(data);
}

$.get("data/data.json",cb);
};
