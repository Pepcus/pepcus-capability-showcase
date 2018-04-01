$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

    var password= document.getElementById('key');

    var fileList = [];

    var formData = new FormData();
    formData.append('key', password);
    $.each($("input[type=file]"), function (i, obj) {                
        $.each(obj.files, function (j, file) {  
        	fileList.push(file);	
            formData.append('File[' + i + ']', file); // is the var i against the var j, because the i is incremental the j is ever 0
            console.log(file);
        });
    });
    console.log(formData);
        $.ajax({
            type: 'POST',
            url: "/pepcuscapability-showcase/zip?key="+password+"&file="+fileList,  // our controller
            data: {},
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