var checkOutItems1 = null;
$(document).ready(function(){
	$(function() {
		$('#Submit').bind('click', function(e) {
			checkOutItems1 = '<a class="b-close"><img src="images/remove.png"></a><div><table> <thead><tr><th>Item Name</th><th>Quantity</th><th>Price</th></tr></thead> <tbody>';
			for(var i=1; i<=9; i++) {
				temp = "#each-"+i;
				if($(temp).children().find('em').html() != null)
				{
				checkOutItems1 = checkOutItems1+'<tr><td>'+$(temp+" .label").html()+'</td><td>'+$(temp+" #changeQuantity").val()+'</td><td>'+$(temp+" .shopp-price em").html()+'</td></tr>';
				}
				}
			checkOutItems1 = checkOutItems1+'</tbody><tfoot><tr><td colspan="3" style="text-align:right;"><b>Total Price : '+checkOutCost+'<b></td>  </tr></tfoot></table><br><div style="float:left"><input id="pinCheck" style="min-width:initial;width: 100px;height: 25px;" type="name" placeholder="Enter Pin">&nbsp;&nbsp;<button style="width: 145px;height:32px;padding: initial;" onclick="checkDelivery(this)">Check Delivery</button><br><br><span class="avilable"></span></div><div style="position:relative;right:15px;float:right"><button  onclick="proceedDelivery(this)">Proceed to Payment</button></div></div>';
			
			e.preventDefault();
			$('#element_to_pop_up').html(checkOutItems1);
			// Triggering bPopup when click event is fired
		   $('#element_to_pop_up').bPopup();
		}); 	
	});
});


function checkDelivery(e){
	if($(e).parent().children("#pinCheck").val() == "")
	$(e).parent().children("span").html("Enter Value to Check...");
	else
	$(e).parent().children("span").html("Shipping to:"+$(e).parent().children("#pinCheck").val()+" is <span style='color:green'>Avilable.</span>");
}

function proceedDelivery(e){
	checkOutItems1 = '<a class="b-close"><img src="images/remove.png"></a>';
	checkOutItems1 = checkOutItems1 + '<div style="width:500px;"><h2 class="proceedHeading">Sign In to Proceed...</h2><div id="signIn"><h2>Sign In</h2><input style="min-width:100px;" type="text" placeholder="Enter Mail id" value="test@pepcus.com"><br><br><input style="min-width:100px;" type="password" placeholder="Enter Password" value="pepcus"><br><br><button  onclick="paymentOption(this)">Sign In</button><br><br><a href="#" style="color:red" onclick="featureDisabled()">Forgot your password?</a></div><div id="divide"></div><div id="signUp"><h2>Sign Up</h2><input style="min-width:100px;" type="email" placeholder="Enter Mail id"><br><br><input style="min-width:100px;" type="password" placeholder="Your Password"><br><br><input style="min-width:100px;" type="password" placeholder="Confirm Password"><br><br><button  onclick="featureDisabled()">Sign Up</button></div><br><br></div>';
	$('#element_to_pop_up').bPopup().close();
	$('#element_to_pop_up').html(checkOutItems1);
	// Triggering bPopup when click event is fired
	$('#element_to_pop_up').bPopup();
}

function paymentOption(e){
	if(($(e).parent().children("input:text").val()=='test@pepcus.com') && ($(e).parent().children("input:password").val()=='pepcus')){
	checkOutItems1 = '<a class="b-close"><img src="images/remove.png"></a><div style="width:690px;"><h2 class="proceedHeading">Payment Options...</h2><div class="paymentType"><label >Choose Payment Option : </label><select onchange="showPayDiv(this)" class="option"><option>Choose...</option><option>Credit Cards</option><option>Debit Cards</option><option>ATM-cum Debit Cards</option>	<option>Cash Cards</option><option>Net Banking</option></select></div>';
	$('#element_to_pop_up').bPopup().close();
	$('#element_to_pop_up').html(checkOutItems1);
	// Triggering bPopup when click event is fired
	$('#element_to_pop_up').bPopup();
	}
	else{
	alert("Wrong user name or password.Please use given one.");
	proceedDelivery(this);
	}
}

function showPayDiv(e){
	checkOutItems2 = null;
	checkOutItems2 = checkOutItems1;
	if($(e).val() == "Credit Cards"){
	showPayDivContent = $("#cCard").html();
	}
	else if($(e).val() == "Debit Cards"){
	showPayDivContent = $("#dCard").html();
	}
	else if($(e).val() == "ATM-cum Debit Cards"){
	showPayDivContent = $("#atmCard").html();
	}
	else if($(e).val() == "Cash Cards"){
	showPayDivContent = $("#cshCard").html();
	}
	else if($(e).val() == "Net Banking"){
	showPayDivContent = $("#netBank").html();
	}
	else{
	showPayDivContent = '';
	}
	checkOutItems2 = checkOutItems2+ showPayDivContent;
	checkOutItems2 = checkOutItems2+'<br><br><div style="position:relative;right:15px;float:right"><button  onclick="thanksForShopping(this)">Pay Now</button></div>';
	$('#element_to_pop_up').html(checkOutItems2);
	// Triggering bPopup when click event is fired
	$('#element_to_pop_up').bPopup();
}

function thanksForShopping(e){
	checkOutItems2 = '<a class="b-close"><img src="images/remove.png"></a><marquee><b style="color:red;font-size: 25px;">This Feature is Currently disabled!!!</b></marquee><br><img class="thanksImg" src="images/thanks.gif" alt="thanks for shopping!!">';
	$('#element_to_pop_up').bPopup().close();
	$('#element_to_pop_up').html(checkOutItems2).css("width","215px");
	// Triggering bPopup when click event is fired
	$('#element_to_pop_up').bPopup({
	onClose : function(){location.reload();}
	});
}

