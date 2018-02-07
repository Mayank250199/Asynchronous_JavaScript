window.onload = function(){

genWrap(function*(){

  var data = yield $.get("data/data.json")
  console.log(data);
  var anime = yield $.get("data/anime.json")
  console.log(anime);
  var rank = yield $.get("data/rank.json")
  console.log(rank);
});

   function genWrap(generator){

     var gen = generator();

     function handle(yielded){
       if(!yielded.done){
         yielded.value.then(function(data){
           return handle(gen.next(data));
         })
       }
     }

     return handle(gen.next());
   }


};
