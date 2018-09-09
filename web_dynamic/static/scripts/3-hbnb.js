$( document ).ready(function () {

  /*****************************************************
    display list of checkboxes clicked
   *****************************************************/
  let ls_amen = [];
  $("input[type='checkbox']").change (function () {
    let checked = $(this).attr('data-name');
      if ($(this).is(':checked')) {
	ls_amen.push(" " + checked);
      } else {
	ls_amen.splice(checked, 1);
      }
    $('.amenities h4').text(ls_amen);
  });

  /*******************************************************
    display red circle on top right of page if status ok
   *******************************************************/
  $.get('http://127.0.0.1:5002/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  /*******************************************************
    populate Places from frontend, instead of backend jinja
   *******************************************************/
/*  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: 'http://127.0.0.1:5002/api/v1/places_search/',
    data: '{}',
    success: function(data) {
      for (let i = 0; i < data.length - 1; i++) {
	console.log(data[i]);
	$('section.places').append('<article>' + data[i] + '</article>');
      }
    },
    error: function(err) {
      alert('error' + JSON.stringify(err));
    }
  });
*/

  $.post('http://127.0.0.0:5002/api/v1/places_search/',
	 {
	   contentType: 'application/json',
	   data: '{}'
	 },
	 function(data, textStatus) {
	   for (let i = 0; i < data.length - 1; i++) {
	     $('section.places').append('<article>' + data[i] + '</article>');
	   }
	 }
	);

});
