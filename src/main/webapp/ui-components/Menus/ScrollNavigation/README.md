###How to use

	<script src="js/jquery.js"></script>
	<script src="js/scroll_navi.js"></script>
	<script>
	  $(document).ready(function(){
	    $("#nav").scrollNavigation();
	  });
	</script>

###Options 

- Set scroll speed:
	$("#nav").scrollNavigation({speed:1500});

- Set link for another page, use data-outerpage attribute as 'true' :
  <a href="https://google.com/" 
  		data-outerpage="true">Any External Link
  </a>


