// grab the file input and bind a change event onto it
    
$(document).ready(function () {

    $("#btnSubmit").click(function (event) {
        var form = $('#form-div')[0];
        console.log('form', $('#form-div'));
		// new html5 formdata object.
        var formData = new FormData(form);
        //for each entry, add to formdata to later access via $_FILES["file" + i]
        /*
        for (var i = 0, i < document.getElementById('file').files.length; i++) {
            formData.append("file" + i, document.getElementById('file').files[i]);
            console.log(document.getElementById('file').files[i]);
        }
        */
        //var bla = $('#key').val();
        //formData.append("key", bla);
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
            error : function(request) {
                console.log(request);
            }
        });
    });
});