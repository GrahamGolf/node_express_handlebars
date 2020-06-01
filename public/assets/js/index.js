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

$(".addBurger").on("submit", function() {
    newBurger.preventDefault();
    let addNewBurger = {
      burger_name: $(".addBurger").val().trim(),
    };
console.log(addNewBurger)
    $.ajax({
      url: "/burger",
      data: addNewBurger,
      type: "POST",
    }).then(
        function() {
            console.log("Created new burger");
            location.reload();
      }
    );
  });
})

