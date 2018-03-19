



jQuery(document).ready(function($) {

		$("#myform").progression({
		  tooltipWidth: '200',
		  tooltipPosition: 'right',
		  tooltipOffset: '50',
		  showProgressBar: true,
		  showHelper: true,
		  tooltipFontSize: '14',
		  tooltipFontColor: '030303',
		  progressBarBackground: 'fff',
		  progressBarColor: '6EA5E1',
		  tooltipBackgroundColor:'a2cbfa',
		  tooltipPadding: '10',
		  tooltipAnimate: true
		});
	   $(".body" ).niceScroll({cursorborder:"",cursorcolor:"#C2C2C2"});

	});
	
	function myFun() {
		f1=document.getElementById("f1").value;
		f2=document.getElementById("f2").value;
		f3=document.getElementById("f3").value;
		f4=document.getElementById("f4").value;
		f5=document.getElementById("f5").value;	
		document.getElementById("showValues").innerHTML = "<br><b>Field 1 : </b>"+f1+"<b><br>Field 2 : </b>"+f2+"<b><br>Field 3 : </b>"+f3+"<b><br>Field 4 : </b>"+f4+"<br><b>Field 5 : </b>"+f5+"<br>";
	}
	