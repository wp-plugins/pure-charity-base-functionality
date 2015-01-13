$ = jQuery;
window.setTimeout(function(){
  $(document).ready(function(){
		var main_color = $("#main_color").val();
		$("#main_color").spectrum({
			preferredFormat: "hex",
		  color: main_color
		});
  });
}, 1000)

