/**
 * Taking request and providing response
 */

$(document).ready(function () {

    $("#password").keyup(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();
        var myObj = { "algorithm":pwdEncForm.algorithm.value, "password":pwdEncForm.password.value };
        var myJSON = JSON.stringify(myObj);
        console.log(pwdEncForm.algorithm.value+" : "+pwdEncForm.password.value);
        $.ajax({
            type: "POST",
            contentType:"application/json",
            url: "/pepcuscapability-showcase/encrypt",
            data: myJSON,
            timeout: 600000,
            success: function (data) {
            	$("#pwdResponse").val(data.user.password);
            	  console.log("SUCCESS : ", data);
            },
            error: function (e) {
                $("#pwdResponse").text(e.responseText);
                console.log("ERROR : ", e);
            }
        });

    });

});
