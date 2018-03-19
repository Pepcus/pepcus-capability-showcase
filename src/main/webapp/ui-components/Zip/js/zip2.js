$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

    var formDetail = document.getElementById('form-div');
    console.log(formDetail);
    var fileInput = document.getElementById('file');
    console.log(fileInput.files);

    var password= document.getElementById('key');

    var fileList = [];
    var data = new FormData();

    for (var i = 0; i < fileInput.files.length; i++) {
        fileList.push(fileInput.files[i]);
        console.log(fileInput.files[i]);
        //console.log(localStorage.getItem(localStorage.key(i)));
    }
    console.log(fileList);
        $.ajax({
            type: 'POST',
            url: "/pepcuscapability-showcase/zip",  // our controller
            data: {file : fileList},
            processData: false,                     // tell jQuery not to process the data
            contentType: false,                     // tell jQuery not to set contentType
            cache: false,
            success : function(data) {
                $('#upload-result').append('<div class="alert alert-success"><p>File(s) uploaded successfully!</p><br />');
                $('#upload-result .alert').append(data);
                console.log(data);
            },
            error : function(err) {
                console.log(err);
            }
        });
        
    });

});