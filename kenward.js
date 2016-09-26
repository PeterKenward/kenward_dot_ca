$(document).ready(function() {

  $(function() {
    var navbarcollapse = $("#navbarcollapse");
    navbarcollapse.on("click", "a", null, function() {
      navbarcollapse.collapse('hide');
    });
  });

  

});