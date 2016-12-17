
$(document).ready(function(){
	
	

/* $('#productsSortForm select').selectBoxIt({ native: true });
  $('#attributes select').selectBoxIt({ native: true });	


*/



	

		  
  $('#thumbs_list li a').hover(function(){
	  
	 var hover_src = $(this).attr('href');
	 
	  $('.cloud-zoom').attr('href',hover_src);
	  
	  });
  
		
				   

/* ************************************************************************************************
		Navigation
************************************************************************************************ */


$( '#dl-menu' ).dlmenu();
	 	

$(window).scroll(function () { 
						   
				

	    
var scrollPosition = $(document).scrollTop();
 
if( scrollPosition > 125){ 
 $('.fixed-nav-top ').addClass('fixed-nav');


}

else{ 
 $('.fixed-nav-top').removeClass('fixed-nav');
 
}

})



/* ************************************************************************************************
		VIEW MODE
************************************************************************************************ */

	 

		  
	var cookieName = 'level';
	var cookieOptions = {expires: 7, path: '/'};
	

	$("#" + $.cookie(cookieName)).addClass("active");
	if($.cookie(cookieName)==null){ 
		$.cookie(cookieName, 'list', cookieOptions);
	}
    $(".view-mode " ).addClass($.cookie(cookieName));
	
 
	$(".htabs a").click(function(e){
		e.preventDefault();
		$("#" + $.cookie(cookieName)).removeClass("active");
		$(".view-mode " ).removeClass($.cookie(cookieName));
		$.cookie(cookieName, $(this).attr("id"), cookieOptions);
		$("#" + $.cookie(cookieName)).addClass("active");
		console.log(cookieName);
		$(".view-mode " ).addClass($.cookie(cookieName));
		//$("#product_list " ).addClass($.cookie(cookieName)); 
	});
	
	


/* ************************************************************************************************
   input qty
************************************************************************************************ */


$(".input a").click(function(){
   var inputEl = $(this).parent().parent().children().next().children();
   var qty = inputEl.val();
   if ($(this).parent().hasClass("plus"))
       qty++;
   else
       qty--;
if (qty < 0 )
qty = 0;
   inputEl.val(qty);
})

	

	
/* **********************************************************************************************
      Адаптивное меню
************************************************************************************************ */

	

var bodyWidth = $("body").width();







$('#dl-menu ul ul').addClass('dl-submenu');







if(bodyWidth <= 767 ){	 

	
$('body').addClass('adaptive'); /*Добавление класса adaptive в BODY*/


 $(".icon-search-view").click(function(){

	 
	$('#searchbox').toggle();
	
	
	

	});



$(".column .block h4").click(function(){
	$(this).toggleClass('block-open');
	$(this).next('.block_content').toggle();

	})
	
$(".adaptive-fotter	").click(function(){
	$(this).toggleClass('block-open');
	$(this).next('.footer-wrap').toggle();

	})


}

else{
	


$(".column .block h4").click(function(){
	$(this).toggleClass('block-open');
	$(this).next('.block_content').toggle();

	})
	
$(".adaptive-fotter	").click(function(){
	$(this).toggleClass('block-open');
	$(this).next('.footer-wrap').toggle();

	})

	
	
		
	
	 }
	 



  });