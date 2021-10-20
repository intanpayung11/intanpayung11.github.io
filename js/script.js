// JavaScript Document
$(document).ready(function () {
  $("#autoWidth,#autoWidth2,#autoWidth3,#autoWidth5").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth,#autoWidth2,#autoWidth3,#autoWidth5").removeClass("cS-hidden");
    },
  });
});
