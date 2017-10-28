
var config = {
    '.chosen-one': {},
    '.chosen-one-deselect': {
      allow_single_deselect: true
    },
    '.chosen-one-no-single': {
      disable_search_threshold: 10
    },
    '.chosen-one-no-results': {
      no_results_text: 'Oops, nothing found!'
    },
    '.chosen-one-width': {
      width: "80%"
    }
  }
//   for (var config) {
//       $('.chosen-one').chosen(config['.chosen-one']);
//     };

  $("#submit").on("click", function() {

    function validateForm() {
      var isValid = true;
      $('.form-control').each(function() {
        if ($(this).val() === '')
          isValid = false;
      });
      $('.chosen-one').each(function() {
        if ($(this).val() === "")
          isValid = false
      })
      return isValid;
    }
  });

    if (validateForm() == true) {
    
      var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
        };
      }

      var currentURL = window.location.origin;
       $.post(currentURL + "/api/friends", userData, function(data) {
    
        $("#").text(data.name);
        $("friendFace").attr("src", data.photo);

        $("#resultsModal").modal('toggle');
      
    // } else {
    //   alert("Fill out all fields before submitting!")
    //   return false;
    // };
