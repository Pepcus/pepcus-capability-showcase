$(document).ready(function(){
  // $( "#sliderValue" ).val( "$" + 0 );
  $("#slider").slider({
      range: "min",
      value: 1,
      step: 10,
      min: 0,
      max: 500,
      slide: function( event, ui ) {
          $( "#sliderValue" ).val(  ui.value );
      }
  });
  $('#sliderValue').keydown(function(event){
      if((event.which >47 && event.which <58) ||(event.which >95 && event.which <106)||(event.which===8)){
          //console.log(event.which);
          $("#sliderValue").change(function () {
  	    var value = this.value.substring(1);
  	    console.log(value);
  	    $("#slider").slider("value", parseInt(value));
  });

      }else{
          event.preventDefault();
      }
      
  });



    /**********************currency formatter***************************/
    $('#currencyFormatter').keyup(function(){
					
					$('#currencyFormatter').formatCurrency({ 
						roundToDecimalPlace: -2,
						symbol: ''
					});
					
					temp = $('#currencyFormatter').val();
					$('#currencyFormatter').val('$'+check(temp));
					});
    });
					
					function check(e){
						var flag=false;
						for(i=0;i<e.length;i++){
						if(e[i]==0 || e[i]==1 || e[i]==2 || e[i]==3 || e[i]==4 || e[i]==5 || e[i]==6 || e[i]==7 || e[i]==8 || e[i]==9 || e[i]==',' || e[i]=='.'){
						flag=true;
						}
						else
						flag=false;
						}
						
						if(flag)
						{
						if(e[e.length-1] == ',')
						e = '';
						return e;
						}
						else
						{
						e = '';
						return e;
						}
					}

/*
function onInputValueChange() {
	$(".slider").slider({
      animate: true,
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function(event, ui) {
        $(".slide-value").html(ui.value);
        document.getElementById(findElement('sliderInput')).value = ui.value;
      },
      //this updates the hidden form field so we can submit the data using a form
      change: function(event, ui) {
        $('#hidden').attr('value', ui.value);
      }
    });

    setTimeout(function(){
      $(".PLUS").click(function() {
        var value = $(".slide-value").slider("value"),
          step = $(".slide-value").slider("option", "step");
        $(".slide-value").slider("value", value + step);
      });
    },200); // 200 = 0.2 seconds
}*/