jQuery(document).ready(function(){
  jQuery(".add").click(function(){
    var a =jQuery(".value1").val()
    var b =jQuery(".value2").val()
    $.ajax({
      type: "POST",
      url: "function.php",
      data: {
        "val1": a,
        "val2": b,
        "check": "add"
      },
      success: function (response) {
        jQuery(".result").val(response);
      }
    });
  });
  jQuery(".sub").click(function(){
    var a =jQuery(".value1").val()
    var b =jQuery(".value2").val()
    $.ajax({
      type: "POST",
      url: "function.php",
      data: {
        "val1": a,
        "val2": b,
        "check": "sub"
      },
      success: function (response) {
        jQuery(".result").val(response);
      }
    });
  });
  jQuery(".mult").click(function(){
    var a =jQuery(".value1").val()
    var b =jQuery(".value2").val()
    $.ajax({
      type: "POST",
      url: "function.php",
      data: {
        "val1": a,
        "val2": b,
        "check": "mult"
      },
      success: function (response) {
        jQuery(".result").val(response);
      }
    });
  });
  jQuery(".div").click(function(){
    var a =jQuery(".value1").val()
    var b =jQuery(".value2").val()
    $.ajax({
      type: "POST",
      url: "function.php",
      data: {
        "val1": a,
        "val2": b,
        "check": "div"
      },
      success: function (response) {
        jQuery(".result").val(response);
      }
    });
  });
});