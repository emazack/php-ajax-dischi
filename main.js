$(document).ready(function{

  $.ajax({
    url: "demo_test.txt",
    success: function(data){
      $("#div1").html(result);
    },
    error: function(request, state, errors){
      console.log("Errore chiamata ajax non riuscita");
    }

  });

});
