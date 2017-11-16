$(document).ready(function(){
	$(".menu-icon").click(function(){
		$(".menu-icon").toggleClass("active");
	});


	$(".menu-icon").click(function(){
		$(".sidebar").toggleClass("active");
	});

	$("a.open").click(function(){
		$(".contents").addClass("active");
	});
	$("a.close").click(function(){
		$(".contents").removeClass("active");
	});

	$(".input").focusin(function(){
		$(this).parent().addClass("focus");
	}).focusout(function(){
		if($(this).val()===""){
			$(this).parent().removeClass("focus");
		}
	});


	//FOR POPUP THAT TAKES UP
	$("#upBtn").click(function(){
		$("html,body").animate({scrollTop:0},2000);
	});



	//FOR READ MORE LINKS
	$("#btn").hide();
	$("#para").hide();
	$("#showBtn").click(function(){
		$("#para").show();
		$("#showBtn").hide();
		$("#btn").show();
	});

	$("#btn").click(function(){
		$("#para").hide();
		$("#showBtn").show();
		$("#btn").hide();
	});


	//FOR TABS
	$("#tabs").tabs();

	//FOR ACTIVE CLASS IN NAV
	$(window).scroll(function(){
		if($(window).scrollTop()){
			$("#top,#top span,#logo,.menu-icon,menu-icon span").addClass("black");
		}else{
			$("#top,#top span,#logo,.menu-icon,menu-icon span").removeClass("black");
		}
	})
});