// JavaScript Document
$(document).ready(function () {
  $("#autoWidth,#autoWidth2,#autoWidth3").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth,#autoWidth2,#autoWidth3").removeClass("cS-hidden");
    },
  });
});
