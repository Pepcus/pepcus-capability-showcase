$('document').ready(function(){


  $('body').niceScroll({cursorborder:"",cursorcolor:"#D2D2D2",boxzoom:true}); 

     $('#uploadedFiles').html('<p> Please upload a file by clicking the Upload Files button or Dragging the files in the upload section.</p>');
    $(document).on('change','.file0',function(e){
        //we are using function(e) because events are not defined in firefox
        upload(e);
    });

/*****************************on file delete*******************************/
    $(document).on('click','.delete-file',function(){
            var fileid = $(this).parent().parent().attr('data-id');
            var cardid = $(this).parent().parent().parent();
            cardid.remove();
    
    });
    $('#fetchdata').click(function(){
        $('#uploadedFiles').empty();
        $('#showFiles').hide();
        getDataFromLocal();
        $('#uploadedFiles').fadeIn(500);
    });
 $("#showFiles").hover(function(){
 $("body").getNiceScroll().resize();
 });

});
/*****************upload file details on page***************************/

function upload(event) {
   

    if (window.File && window.FileList && window.FileReader) {
        var files = event.target.files; //FileList object
        
        for (var i = 0; i < files.length; i++) {
            uploadData(i,files);       
        } 
    }
}
/*******************Drag and drop*************************/
(function(){
    var dropzone = $('#dropzone')[0];
    var uploadDroppedFiles = function(files){
        var file_details = event.dataTransfer.files; 
         for(i=0; i<file_details.length; i++){
            uploadData(i,file_details);
         }      
    }

/***********On drag and drop event handling***********************/    
    dropzone.ondrop = function(event){
        event.preventDefault();
        this.className = 'drop-zone';
        uploadDroppedFiles(event.dataTransfer.files);;
    }

    dropzone.ondragover = function(){
        $('.drop-zone').addClass('drag-over');
        return false;
    }   
   dropzone.ondragleave =function(){
       $('.drop-zone').removeClass('drag-over');
       return false;
   }       
}());


/************Handling file events for uploading*****************************/
function uploadData(i,files){
    $('#showFiles').fadeIn();
    var filename,filesize,filetype,binfile;
    var countbar = $.now(); 
    filename = files[i].name;
    filesize = Math.ceil(parseInt(files[i].size)/1024);
    filetype = files[i].type;
    countbar = countbar + i;
     /*$('#showFiles').append(    
        '<div class = "cardview">'+
        '<div data-id = "35654'+countbar+'">'+
            '<div class = "file-view">'+
                '<div class="image-thumbnail"><img src=""></div>'+
                '<div class="file-name">'+filename+'</div>'+
                '<div class="file-size">'+filesize+' kb</div>'+
                '<div class="progressBar">'+
                '<div class="progress" id="progress'+countbar+'"></div>'+
                '</div>'+
        '</div>');  
        moveProgressBar($('#progress'+countbar));  */ 

    var reader = new FileReader();
    reader.addEventListener("load", function (event) {
        binfile = event.target.result;
        if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(filename)){ 
            $('#showFiles').append(    
                '<div class = "cardview">'+
                '<div data-id = "35654'+countbar+'">'+
                    '<div class = "file-view">'+
                        '<div class="image-thumbnail"><img src="'+binfile+'"></div>'+
                        '<div class="file-name">'+filename+'</div>'+
                        '<div class="file-size">'+filesize+' kb</div>'+
                        '<div class="progressBar">'+
                        '<div class="progress" id="progress'+countbar+'"></div>'+
                        '</div>'+
                        '<button class="btn preview" data-name="'+binfile+'" id="previewBtn" onclick="preview(event)">Preview</button>'+
                        '<a href="'+binfile+'" download><button class="btn">Download</button></a>'+'</div>');
           
		}
        else{
            $('#showFiles').append(    
                '<div class = "cardview">'+
                '<div data-id = "35654'+countbar+'">'+
                    '<div class = "file-view">'+
                        '<div class="image-thumbnail"><i class="fa fa-file" aria-hidden="true"></i></div>'+
                        '<div class="file-name">'+filename+'</div>'+
                        '<div class="file-size">'+filesize+' kb</div>'+
                        '<div class="progressBar">'+
                        '<div class="progress" id="progress'+countbar+'"></div>'+
                        '</div>'+
                        '<button class="disabled-btn" id="previewBtn" >Preview</button>'+
                        '<a href="'+binfile+'" download><button class="btn">Download</button></a>'+'</div>');
        }  
        moveProgressBar($('#progress'+countbar));  
        // console.log("inside render method",filename,filesize,filetype,binfile);
        setDataToLocal(filename,filesize,filetype,binfile);
        
    });

    reader.readAsDataURL(files[i]);
}
function preview(event){
    var target = $(event.currentTarget);
    var src = target.attr('data-name');
   //   $(".preview-div").fadeOut();
    $(".preview-div").fadeIn();  
    $(".preview-div").css({"display":"flex"});  
    $(".preview-image").css({"background-image":"url("+src+")","display":"flex"});  
}           
 $(".close-preview").click(function(){
    $(".preview-div").css({"cursor":"pointer", "display":"none"});  

 });
    /********************move the progress bar****************/
function moveProgressBar(barid){
    var bar = $(barid)[0];
    var width = 1;
    var id = setInterval(addProgress,10);
    function addProgress() {
        if(width>100){
            clearInterval(id);
            $(barid).css('background-color','#1EE494');
            $(barid).html('completed');
        }
        else{
            width++;
            $(barid).html(width + '%');
            bar.style.width = width + '%'; 
        }
    }
}


/*****************Setting data to local storage**********************/

function setDataToLocal(name,size,type,bindata){
    $('#uploadedFiles').empty();
   // $('#uploadedFiles').append('<p>Click Fetch Data button to checkout your uploaded files.</p>');
    var dataObj = [];
    var retrievedObject = JSON.parse(localStorage.getItem('DataObject'));
    
    if(retrievedObject !== null) {
        for(i = 0 ; i < retrievedObject.length ; i++){
            dataObj.push(retrievedObject[i]);
        }
    }
        dataObj.push({
        "filename": name,
        "filetype": type,
        "filesize": size,
        "filedata":bindata
        });
 
    localStorage.setItem('DataObject', JSON.stringify(dataObj));
}

/*******************Getting data from local storage**************************/
function getDataFromLocal(){
    
    var retrievedObject = localStorage.getItem('DataObject');
    if(retrievedObject === null){
        $('#uploadedFiles').append('<p>No files uploaded yet.</p>'+
                    '<p>Please upload a file by clicking the Upload Files button or Dragging the files in the upload section.</p>');
            return;
    }
    var datafromlocal = JSON.parse(retrievedObject);
    for(i=0 ; i<datafromlocal.length; i++){
        var nameoffile = datafromlocal[i].filename;
        var dataoffile = datafromlocal[i].filedata;
        // console.log("dataoffile",dataoffile);
        if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(nameoffile)){   
            $('#uploadedFiles').append(
            '<div class="upload-content">'+
            '<div class="uploaded-image">'+
            '<img src="'+dataoffile+'">'+
            '<p class="uploaded-file-name">'+nameoffile+'</p>'+
            '</div></div>');
        }
        else{
           $('#uploadedFiles').append(
            '<div class="upload-content">'+
            '<div class="uploaded-image">'+
            '<img src="./images/fileico.png">'+
            '<div class="uploaded-file-name">'+nameoffile+'</div>'+
            '</div></div>');
        }
    }
}

/*
function sendDataToServer(filedataobject){
//    console.log('filedataobject',filedataobject);
    if(filedataobject !== null){
            $.post(
               // var x = "filedataobject";
                "http://localhost/myproject/postdata.php",      
                {data:filedataobject},
                function(data,status){
                    if(status === 'success'){
                        console.log('status',status);
                        localStorage.setItem('DataObject',null);
                    console.log('localstorage',localStorage.getItem('DataObject'));
                    }
                    else{
                        console.log('status',status);
                        localStorage.setItem('DataObject',filedataobject);
                        console.log('localstorage',localStorage.getItem('DataObject'));
                    }
                }
            );
        
            }
}

function getDataFromServer(){
    $.get('http://localhost/myproject/getdata.php',function(data){
        var datafromserver = JSON.parse(data);
        for(i=0 ; i<datafromserver.length; i++){
            var nameoffile = datafromserver[i].filename;
            var dataoffile = datafromserver[i].filedata;
//            console.log("dataoffile",dataoffile);
            if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(nameoffile)){
//                console.log(nameoffile);
//                var image = document.createElement('image');
//                image.src = dataoffile;
                $('#uploadedFiles').append(
                '<div class="uploaded-image">'+
                '<img src="'+dataoffile+'"></div>');
            }
            else{
               $('#uploadedFiles').append(
                '<div class="uploaded-image">'+
                '<img src="./../images/fileico.png"></div>');
            }
        }
        
    });
    
}

*/
/************************/
//     $("#fileInput").change(function(){
//         readURL(this);
//     });  
//  function readURL(input) {
//        if (input.files && input.files[0]) {
//            var reader = new FileReader();
//            
//            reader.onload = function (e) {
//                $('#dropTarget').attr('src', e.target.result);
//                
//            }
//            
//            reader.readAsDataURL(input.files[0]);
//        }
//   }



/*var imagereg = /\.(jpe?g|png|gif|bmp)$/i;
        var upload = function(files){
        var file_details = files[0];
        console.log(file_details);
         for(i=0; i<file_details.length; i++){
        $('#showFiles').append(
            '<p>name : '+file_details[i].name+'</p>'+
            '<p>size : '+file_details[i].size+' bytes</p>'+
            '<p>type : '+file_details[i].type+'</p>'
       );
             if( /\.(jpe?g|png|gif|bmp)$/i.test(file_details[i].name)){
                alert('image');
            }
             
         }
    }*/