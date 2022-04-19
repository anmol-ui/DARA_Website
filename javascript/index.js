$(".postalcode-form button").click(function() {
  var loading = $('<div class="spinner-border text-primary" role="status"></div>');
  $(".postalcode-form .pin").append(loading);
  setTimeout(function() {
    $(".postalcode-form .spinner-border").remove();
    $(".postalcode-form button").removeClass("btn-dark");
    $(".postalcode-form button").addClass("btn-success");
    $(".postalcode-form button").html("Available");
  }, 1000);
});

$(".postalcode-form .pin").click(function(){
  $(".postalcode-form button").addClass("btn-dark");
  $(".postalcode-form button").removeClass("btn-success");
  $(".postalcode-form button").html("Confirm Pincode");
});

function signIn(){
  var email = $(".modal .email").val();
  var password = $(".modal .password").val();
}

var form = $(".signup-form form");
form.onsubmit = function(e){
  alert("form");
}
