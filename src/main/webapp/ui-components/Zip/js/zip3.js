function submitForm() {

  var form = document.getElementById("form-div");
  var formData = new FormData(form);
  console.log(formData);
  var xhr = getXMLHTTP();
  xhr.open('POST', "/pepcuscapability-showcase/zip");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("Files Uploaded")
    }
  }
  xhr.send(formData);
}