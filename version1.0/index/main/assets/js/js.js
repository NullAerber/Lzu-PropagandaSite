function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').hide();
	}
}
$(document).ready(function(e) {
	
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
});

$(window).scroll(function(e){
			
})
