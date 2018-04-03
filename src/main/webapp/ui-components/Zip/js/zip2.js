$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

    var password= document.getElementById('key').value;
    var fileList = [];

    var form = document.getElementById("form-div");
	var formData = new FormData(form);
    
//    $.each($("input[type=file]"), function (i, obj) {                
//        $.each(obj.files, function (j, file) {  
//        	fileList.push(file);	
//            //formData.append('File[' + i + ']', file); // is the var i against the var j, because the i is incremental the j is ever 0
//            formData.append('file',file);
//        	console.log(file);
//        });
//    });
//    formData.append('key', password);
    //formData.append('file',fileList);
    console.log(formData);
        $.ajax({
            type: 'POST',
            url: "/pepcuscapability-showcase/zip",  // our controller
            data: formData,
            processData: false,                     // tell jQuery not to process the data
//            contentType: false,                     // tell jQuery not to set contentType
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