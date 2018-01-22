$("document").ready(function () {

function CSVToArray(strData, strDelimiter) {
    
    strDelimiter = (strDelimiter || ",");
    var objPattern = new RegExp((
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    var arrData = [[]];
   
    var arrMatches = null;
       while (arrMatches = objPattern.exec(strData)) {
        var strMatchedDelimiter = arrMatches[1];
             if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            arrData.push([]);
        }
              if (arrMatches[2]) {
           
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            var strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
}

function CSV2JSON(csv) {
    var array = CSVToArray(csv);
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            objArray[i - 1][key] = array[i][k]
        }
    }

    var json = JSON.stringify(objArray, null, 4);
    console.log("string"+json);
   // var str = json.replace(/},/g, "},\r\n");

    return json;
}

$("#convert").click(function() {
    var csv = $("#csv").val();
    var json = CSV2JSON(csv);
    $("#json").val(json);
});

$("#download").click(function() {
    var csv = $("#csv").val();
    var json = CSV2JSON(csv);
    window.open("data:text/json;charset=utf-8," + escape(json))
});


});