/**
 * Taking request and providing response
 */

$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        // Get form
        var form = $('#csvForm')[0];

		// Create an FormData object
        var data = new FormData(form);

		// If you want to add an extra field for the FormData
        data.append("CustomField", "This is some extra data, testing");

		// disabled the submit button
        $("#btnSubmit").prop("disabled", true);
    $("#copy").click(function () {
      $("#HiddenJsonOutput").val().select();
      document.execCommand("copy");
      $("#copy").html("Copied");

    });
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/pepcuscapability-showcase/csv",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,

            success: function (data) {
            	$(".json-data").css("display","inline-block");
            	console.log("SUCCESS : ", data);
            	var json = JSON.stringify(data);
              $("#HiddenJsonOutput").html(json);
            	$(".container").html(json);
              $(".container").beautifyJSON({
                hoverable: true,
                collapsible: true
              });

                $("#btnSubmit").prop("disabled", false);
            },
            error: function (e) {
                $("#result").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmit").prop("disabled", false);
            }
        });

    });

});
