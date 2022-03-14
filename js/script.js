// toggle


$(document).ready(function(){
    $(".service-provided1").click(function() {
        $("#designImg").toggle();
        $("#designText").toggle();
    });
});

$(document).ready(function(){
    $(".service-provided2").click(function() {
        $("#developmentImg").toggle();
        $("#developmentText").toggle();
    });
});

$(document).ready(function(){
    $(".service-provided3").click(function() {
        $("#productImg").toggle();
        $("#productText").toggle();
    });
});




$(document).ready(function(){
  $(".btn").submit(function(event){
    var name =$("input#name").val()
    var email =$("input#email").val()
    var message =$("input#message").val()
    if ($("input#name").val() && $("input#email").val()){
      alert(`${name}we have received your message/ Thank you for reaching out to us.`);
    } else {
      alert("please enter your name and email");
    }
    event.preventDefault();
  });
});
