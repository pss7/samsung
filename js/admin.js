$(function () {

  $("input[type='file']").on('change', function () {
    var fileInput = $(this);
    var fileName = fileInput.val().split('\\').pop();
    var fileUploadInput = fileInput.siblings('.fileUpload');

    fileUploadInput.val(fileName);
    fileInput.siblings('.fileDel').show();
  });


  $(".fileDel").on('click', function () {
    var fileDelButton = $(this);
    var fileInput = fileDelButton.siblings('input[type="file"]');
    var fileUploadInput = fileDelButton.siblings('.fileUpload');

    fileInput.val('');
    fileUploadInput.val('');

    fileDelButton.hide();
  });

});

