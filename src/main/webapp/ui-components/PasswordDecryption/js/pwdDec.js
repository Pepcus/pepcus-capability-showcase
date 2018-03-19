/**
 * Taking request and providing response
 */

$(document).ready(function () {

    $("#password").keyup(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();
        var myObj = { "algorithm":pwdDecForm.algorithm.value, "password":pwdDecForm.password.value };
        var myJSON = JSON.stringify(myObj);
        console.log(pwdDecForm.algorithm.value+" : "+pwdDecForm.password.value);
        $.ajax({
            type: "POST",
            contentType:"application/json",
            url: "/pepcuscapability-showcase/decrypt",
            data: myJSON,
            timeout: 600000,
            success: function (data) {
            	$("#pwdDecryptResponse").val(data.user.password);
            	  console.log("SUCCESS : ", data);
            },
            error: function (e) {
                $("#pwdDecryptResponse").text(e.responseText);
                console.log("ERROR : ", e);
            }
        });

    });

});
