window.onload = function(){


  function handlerror(jqXHR,textStatus,error){
    console.log(error);
  }

$.ajax({
  type:"GET",
  url:"data/data.json",
  success: data,
      error: handlerror
    });
    function data(data){
      console.log(data);
    }
$.ajax({
  type:"GET",
  url:"data/rank.json",
  success: rank,
error: handlerror
});
function rank(data){
  console.log(data);
}

  $.ajax({
    type:"GET",
    url:"data/anime.json",
    success: function (data){
      console.log(data);
    },
    error: handlerror
  });
};
