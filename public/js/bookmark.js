// Wait for the HTML document to be loaded completely
$(function () {
  // Retrieve DOM elements and store them
  var contactForm = $('#bookMarkEntryForm');

  contactForm.submit(function (e) {
    e.preventDefault();

    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newEntry = {
      city: $("#bcity").val().trim(),
      address: $("#baddress").val().trim(),
      notes: $("#notes").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/bookmarks/add", {
      type: "POST",
      data: newEntry
    }).then(
      function () {
        console.log("created new bookmark entry");
        // Reload the page to get the updated list
        //location.href = '/Bookmarks';
        location.href = '/';
      }
    );
  });

// DELETE route for deleting bookmark
  $(".deleteBookmark").on("click", function (event) {
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/bookmark/" + id, {
      type: "DELETE"
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // PUT route for updating bookmark
  $(".editBookmark").on("click", function (event) {    
    var id = $(this).data("id");
    var city=$(this).data("city");
    var address=$(this).data("address");
    var notes=$(this).data("notes");
    //location.href = "/Bookmarks/Update?mark_id="+id;
    location.href = "/Bookmarks/Update?"+id+"?"+city+"?"+address+"?"+notes;
    });
});    