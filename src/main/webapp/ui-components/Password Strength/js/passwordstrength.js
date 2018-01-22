$(document).ready(function(){
	/**************pass strength feature***********/
    $('#passSignup').keyup(function() {
            var offsetValue = 143;
            offsetValue = offsetValue - 4;
            var passenter=$('#passSignup').val();
            checkStrength(passenter,offsetValue);  
    });
});

/****************password strength checker************************/
function checkStrength(password,offset) {
    if(password === ''){
        $('.circle-front').css({"stroke-dashoffset":144 });
        $('#emoji')[0].src = "";
    }
    else{
        var strength = 0;
    if (password.length < 4) {
			console.log(offset);
            $('.circle-front').css({"stroke-dashoffset":offset ,"stroke":"#E23E57"});
            $('#emoji')[0].src = "./images/emo1.png";
    }
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;   
    }

    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        strength += 1;
    }

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
    }

    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
    }
    if (password.length > 4 && strength < 2) {
		console.log(offset);
        $('.circle-front').css({"stroke-dashoffset":60 ,"stroke":"#FF9A00"});
        $('#emoji')[0].src = "./images/emo2.png";
    }
        else if (password.length > 4 && strength === 2) {
		console.log(offset);
        $('.circle-front').css({"stroke-dashoffset":20 ,"stroke":"#46CDCF"});
            $('#emoji')[0].src = "./images/emo3.png";
        }
         else if(password.length > 4 && strength > 2){
			console.log(offset);
        	$('.circle-front').css({"stroke-dashoffset":0 ,"stroke":"#54EA56"});
            $('#emoji')[0].src = "./images/emo4.png";
         } 
    }
    }
