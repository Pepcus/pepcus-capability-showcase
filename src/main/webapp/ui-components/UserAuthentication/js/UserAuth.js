/**
 * Taking request and providing response
 */

$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();
        var myObj = { "name":myform.name.value, "number":myform.number.value,"email":myform.email.value };
        var myJSON = JSON.stringify(myObj);
        console.log(myform.name.value+" : "+myform.number.value+" : "+myform.email.value);
        $.ajax({
            type: "POST",
            contentType:"application/json",
            url: "/pepcuscapability-showcase/mail",
            data: myJSON,
            timeout: 600000,
            success: function (data) {
              $('#verifyUser').css("display","block");
              console.log("SUCCESS : ", data);
            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
        });

    });

});


/*
// this is the id of the form
$("#myform").submit(function(e) {

    var url = "/pepcuscapability-showcase/mail"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#myform").serialize(), // serializes the form's elements.
           success: function(data)
           {
            console.log(data);
               alert(data); // show response from the php script.
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
*/
