// grab the file input and bind a change event onto it
    
$(document).ready(function () {

    $("#btnSubmit").click(function (event) {
		var form = document.getElementById("form-div");
    	var formData = new FormData(form);

        console.log(formData);
        //send formdata to server-side
        $.ajax({
            type: 'POST',
            enctype: 'multipart/form-data',
            url: "/pepcuscapability-showcase/zip", // our controller
            data: formData,
            async: true,
            processData: false,  // tell jQuery not to process the data
            contentType: false,   // tell jQuery not to set contentType
            cache: false,
            success : function(data) {
                $('#upload-result').append('<div class="alert alert-success"><p>File(s) uploaded successfully!</p><br />');
                $('#upload-result .alert').append(data);
                console.log(data);
            },
            error : function(error) {
                console.log(error);
            }
        });
    });
});