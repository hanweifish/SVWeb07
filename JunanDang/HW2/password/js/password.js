$(document).ready(function() {
  $(".masked").on('input', function() {
    var oldPlainText = $(".plain").val();
    var inputText = $(this).val();
    for (var newPlainText = '', i = 0; i < inputText.length; i++) {
      if (inputText.charAt(i) == '\u25CF') {
        newPlainText += oldPlainText.charAt(i);
      } else {
        newPlainText += inputText.charAt(i);
      }
    }

    $(".plain").val(newPlainText);

    for(var maskedText = '', i = 0; i < newPlainText.length; i++) {
      if(i < newPlainText.length - 1) {
        maskedText += '\u25CF';
      } else {
        maskedText += newPlainText.charAt(i);
      }
    }

    $(this).val(maskedText);
  });

  $(".masked").blur(function() {
    var length = $(this).val().length;
    for(var maskedText = '', i = 0; i < length; i++) {
        maskedText += '\u25CF';
    }

    $(this).val(maskedText);
  });
});