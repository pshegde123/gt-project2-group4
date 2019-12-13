// Wait for the HTML document to be loaded completely
$(document).ready(function() {
    // Retrieve DOM elements and store them
    var updateForm = $('#updateForm');
    var url = location.href;
    var cur_id = 0;
    var cur_city='';
    var cur_address='';
    var cur_notes='';

    if (url.indexOf(":") !== -1) {
      cur_id = url.split("?")[1];
      cur_city = url.split("?")[2];
      cur_address = url.split("?")[3];
      cur_notes = url.split("?")[4];
    }

    $("#bcity").val(cur_city);
    $("#baddress").val(decodeURI(cur_address));
    $("#notes").val(decodeURI(cur_notes));

    updateForm.submit(function (e) {
      e.preventDefault();
  
      // Make sure to preventDefault on a submit event.
      event.preventDefault();  

      var updatedEntry = {
        id:cur_id,
        city: $("#bcity").val().trim(),
        address: $("#baddress").val().trim(),
        notes: $("#notes").val().trim()
      };
      // Send the POST request.
      $.ajax("/api/bookmarks/", {
        type: "PUT",
        data: updatedEntry
      }).then(
        function () {
          console.log("updated bookmark entry");
          // Reload the page to get the updated list
          location.href = '/Bookmarks';
        }
      );
    });
  });    