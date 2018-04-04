$(document).ready(function () {

    $("#btnSubmit").click(function (event) {
    var password = document.getElementById('key').value;
    
    var formData = new FormData();
    
    $.each($("input[type=file]"), function (i, obj) {                
        $.each(obj.files, function (j, file) {
            formData.append('file',file);
        	console.log(file);
        });
    });
    formData.append('key', password);
    console.log(formData);
        $.ajax({
            type: 'POST',
            url: "/pepcuscapability-showcase/zip",  // our controller
            data: formData,
            processData: false,                     // tell jQuery not to process the data
            contentType: false,                     // tell jQuery not to set contentType
            
            success : function(data) {
                alert('Protected Zip successfully created !!!');
                $("#btnDownload").css("display", "block");
                console.log(data);
            },
            error : function(err) {
                console.log(err);
            }
        });
        
    });
    
    $("#btnDownload").click(function (event) {
    	window.location.href = "http://localhost:8383/pepcuscapability-showcase/zip";
    	$('#form-div').trigger("reset");
    	$("#btnDownload").css("display", "none");
    });
});