$( document ).ready(function () {

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

});
