$(document).ready(function(){

    $("#FormSubmit").click(function(event){

      // Serialize the data in the form
      var serializedData = $("#fee_form").serialize();
      
      console.log(serializedData);
  
    //   $inputs.prop("disabled", true);
  
      // Fire off the request to /form.php
       $.ajax({
          url: "https://script.google.com/macros/s/AKfycbw0oV3r5M2lr936kNhP3SgRtdCHdoGxh6bUCvC3E9n3AYJ3V7g/exec",
          type: "post",
          data: serializedData
      });
    });
  
  });