window.onload = function(){


function get(url){
  return new Promise(function(resolve,reject){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",url,true);
    xhttp.onload = function(){
    if(xhttp.status == 200){
      resolve(JSON.parse(xhttp.response));
    }
      else{
        reject(xhttp.statustext);
      }
    };
      xhttp.onerror = function(){
        reject(xhttp.statustext);
      };
      xhttp.send();
});
}

var promise = get("data/anime.json");
promise.then(function(anime){
  console.log(anime);
  return get("data/data.json");
}).then(function(data){
console.log(data);
return get("data/rank.json");
}).then(function(rank){
console.log(rank);
}).catch(function(error){
  console.log(error);
});


}
