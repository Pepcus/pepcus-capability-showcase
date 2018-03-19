/**
 * Taking request and providing response
 */

$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        // Get form
        var form = $('#logForm')[0];

		// Create an FormData object
        var data = new FormData(form);

		// If you want to add an extra field for the FormData
        data.append("CustomField", "This is some extra data, testing");

		// disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/pepcuscapability-showcase/log",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
            	$("#logResult").css("display","block");
            	$("#debugData").html(data.log.debug);
            	$("#infoData").html(data.log.info);
            	$("#errorData").html(data.log.error);
            	$("#warnData").html(data.log.warn);
            	$("#traceData").html(data.log.trace);
               // $("#result").text(data);
                console.log("SUCCESS : ", data);
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
