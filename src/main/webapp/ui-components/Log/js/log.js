/**
 * Taking request and providing response
 */
function useSampleFile() {
  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: "/pepcuscapability-showcase/log?useSample=true",
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function (data) {
      console.log("success",data);
      $("#logResult").css("display", "inline-flex");
      $("#debugData").html(data.log.debug.model.length);
      $("#infoData").html(data.log.info.model.length);
      $("#errorData").html(data.log.error.model.length);
      $("#warnData").html(data.log.warn.model.length);
      $("#traceData").html(data.log.trace.model.length);
      $("#btnSubmit").prop("disabled", false);
    },
    error: function (e) {
      console.log("failed");
      // $("#result").text(e.responseText);
      // $("#btnSubmit").prop("disabled", false);
    }
  });
}
function ajaxReq(data) {
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
    	console.log("success",data);
        $("#logResult").css("display", "inline-flex");
        $("#debugData").html(data.log.debug.model.length);
        $("#infoData").html(data.log.info.model.length);
        $("#errorData").html(data.log.error.model.length);
        $("#warnData").html(data.log.warn.model.length);
        $("#traceData").html(data.log.trace.model.length);
        $("#btnSubmit").prop("disabled", false);
      },
      error: function (e) {
        $("#result").text(e.responseText);
        $("#btnSubmit").prop("disabled", false);
      }
    });
}

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
console.log(data);
		// disabled the submit button
        $("#btnSubmit").prop("disabled", true);
            ajaxReq(data);
    });
});

