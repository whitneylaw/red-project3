
$('#message-type').on('change', function() {
  $selected = $(this).val();
  // If user chooses Events, the options will display
  if($selected == 'event') {
    $('#event-extra').show();
    $('#group-extra, #club-extra').hide();
  }
  // If user chooses Group Visits, the options will display
  else if($selected == 'group-visits') {
    $('#event-extra, #club-extra').hide();
    $('#group-extra').show();
  }
  // If user chooses Wine Club, the options will display
  else if($selected == 'club') {
    $('#event-extra, #group-extra').hide();
    $('#club-extra').show();
  }
  // If user chooses General Inquiry, no options will display
  else {
    $('#event-extra, #group-extra, #club-extra').hide();
  }
});

// Confirmation of form submitted
$(document).ready(function(){
    $("form").submit(function(){
        alert("Thank you for contacting us! We will reply shortly.");
    });
});
