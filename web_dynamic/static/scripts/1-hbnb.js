$( document ).ready(function () {

  let ls_amen = [];

  $("input[type='checkbox']").change (function () {
    let checked = $(this).data('data-id');
      if ($(this).is(':checked')) {
	ls_amen.push(checked);
      } else {
	ls_amen.splice($.inArray(checked, ls_amen), 1);
      }
    $('.amenities h4').text(ls_amen);


  });

});
