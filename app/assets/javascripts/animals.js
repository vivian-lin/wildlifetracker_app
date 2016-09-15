$("document").ready(function() {
  $("#create_animal").on(
    "click",
    function() {
      var common_name = $("#common_name").val();
      var latin_name = $("#latin_name").val();
      var kingdom = $("#kingdom").val();

      var new_animal = {
        "animal": {
         "common_name": common_name,
         "latin_name": latin_name,
         "kingdom": kingdom
       }
      }//closes new animal hash table

      alert("Sending message: " + JSON.stringify(new_animal));

      $.ajax({
        dataType: 'json',
        url: '/animals',
        method: 'POST',
        data: new_animal,
        success: function(data) {
          add_to_animal_list(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new animal failed: " + errorThrown);
        }
      });
    });// closes onclick function

}); //closes document ready

function add_to_animal_list(data){
  $("#animal_list").append(
    "<tr>" +
      "<td>"+data.common_name+"</td>"+
      "<td>"+data.latin_name+"</td>"+
      "<td>"+data.kingdom+"</td>"+
      '<td><a href="/animals/' + data.id + '">Show</a></td>'+
      '<td><a href="/animals/' + data.id + '/edit">Edit</a></td>'+
      '<td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/animals/' + data.id + '">Destroy</a></td>'+
    "</tr>"
  )
};
