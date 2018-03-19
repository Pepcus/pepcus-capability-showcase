$(document).ready(function () {

    $("#btnSubmitVerify").click(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();
        var myObj = { "otp":verifyForm.otp.value,"email":myform.email.value };
        var myJSON = JSON.stringify(myObj);
        console.log(verifyForm.otp.value+" : "+myform.email.value);
        $.ajax({
            type: "POST",
            contentType:"application/json",
            url: "/pepcuscapability-showcase/mail/verify",
            data: myJSON,
            timeout: 600000,
            success: function (data) {
              alert(data);
              console.log("SUCCESS : ", data);
            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
        });

    });

});