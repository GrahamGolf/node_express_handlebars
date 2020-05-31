$( document ).ready(function() {


$(".devour").on( "click", function() {
    console.log($(this).data("id"));
    const id = $(this).data("id");
    location.reload();
    $.ajax({
        url: "/burger/" + id,
        method: "PUT"
      })
      .then(function(){
          console.log("devoured")
      })
  })
})

//text box is burger name and send that to create the id and set decour to 0
