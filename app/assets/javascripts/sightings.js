$("document").ready(function() {
  $("#calendar").fullCalendar({
  header: {
    left: "prev,next today",
    center: "title",
    right: "month,agendaWeek,agendaDay"
  },
  defaultView: "month",
  height: 500,
  slotMinutes: 15,
  events: "/sightings/get_sightings",
  timeFormat: "LT",
  dragOpacity: "0.5",
  eventClick: function(event) {
    if (event.url) {
      window.open(event.url);
      return false;
    }
  }
  });

  $("#create_sighting").on(
    "click",
    function() {
      var animal_id = $("#animal_id").val();
      var date = $("#date").val() + " 00:00:00 UTC";
      var time = "2002-01-01 " + $("#time").val() + ":00 -0500";
      var latitude = $("#latitude").val();
      var longitude = $("#longitude").val();
      var sighting_region = $("#sighting_region").val();
      var new_sighting = {
        "sighting": {
          "animal_id": animal_id,
          "date": date,
          "time": time,
          "latitude": latitude,
          "longitude": longitude,
          "sighting_region": sighting_region
       }
     }//closes new sighting hash table

      alert("Sending message: " + JSON.stringify(new_sighting));

      $.ajax({
        dataType: 'json',
        url: '/sightings',
        method: 'POST',
        data: new_sighting,
        success: function(data) {
          add_to_sighting_list(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new sighting failed: " + errorThrown);
        }
      });
    });// closes onclick function
}); //closes document ready

function add_to_sighting_list(data){
  $("#sighting_list").append(
    '<li><a href="/sightings/'+data.id+'">'+data.date+'</a></li>'
  )
};
