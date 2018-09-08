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
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

});
