$(document).ready(function () {

    $("#btnSubmit").click(function (event) {
    var password = document.getElementById('key').value;
    
    var formData = new FormData();
    var f = 0;
    $.each($("input[type=file]"), function (i, obj) {                
        $.each(obj.files, function (j, file) {
            formData.append('file',file);
        	console.log(file);
        	f++;
        });
    });
    if(password.length === 0 || f === 0) {
    	if(password.length === 0) {
    		alert("Please provide Password for the zip");
    	} else {
    		alert("There are no files for creating zip");
    	}
    } else {
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
                    alert(err.responseJSON.message);
                }
            });
    }
        
    });
    
    $("#btnDownload").click(function (event) {
    	window.location.href = "/pepcuscapability-showcase/zip";
    	$('#form-div').trigger("reset");
    	$("#btnDownload").css("display", "none");
    });
});