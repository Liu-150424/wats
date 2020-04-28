//黑框
$(document).ready(function(){	
	$('.nav_clik').click(function(){
		$('#down').slideToggle(1000);
		$('#downlanguage').hide()
	})
	$('.aose').click(function(){
		$('#downlanguage').slideToggle(1000);
		$('#down').hide();
	})	
	$('.takesa').mouseover(function(){
		$('#onmos').fadeIn(500);
		$('#servae').hide();
	})
	$('#onmos').mouseleave(function(){
		$('#onmos').fadeOut(500);
		
	})
	
})
$(function(){
	$('#til').mouseover(function(){
		$('#jss').css({'margin-left':'30px'})
	})
	$('#til').mouseleave(function(){
		$('#jss').css({'margin-left':'0px'})
	})
	$('#tile').mouseover(function(){
		$('#jssa').css({'margin-left':'30px'})
	})
	$('#tile').mouseleave(function(){
		$('#jssa').css({'margin-left':'0px'})
	})
	
})
//第二个导航
$(function(){
	$('.areas').mouseover(function(){
		$('#servae').fadeIn(500);
		$('#onmos').fadeOut(1);
	})
	$('#servae').mouseleave(function(){
		$('#servae').fadeOut(500);
	})
	$('.seasr').click(function(){
		$('#serve_max').fadeIn(500);
		$('#scheme').fadeOut(1);
		$('#cloud').fadeOut(1);
	})
	$('.sear').click(function(){
		$('#scheme').fadeIn(500);
		$('#serve_max').fadeOut(1);
		$('#serve_max').fadeOut(1);
		$('#cloud').fadeOut(1);
	})
	$('.searto').click(function(){
		$('#cloud').fadeIn(500);
		$('#serve_max').fadeOut(1);
		$('#scheme').fadeOut(1);
	})
})
//banner
$(function(){
	var index = 0;
	function wir() {
		index++;
		if(index == 2) {
			index = 0;
		}
		$("#banner ul li").eq(index).fadeIn().siblings().hide();
		$("#banner ol li").eq(index).addClass('current').siblings().removeClass('current');
	}
	var yh = setInterval(wir, 2000);
	$('#banner').mouseover(function() {
		$('.uar').show();
		clearInterval(yh);
	});
	$('#banner').mouseleave(function() {
		$('.uar').hide();
		yh = setInterval(wir, 2000);
	});
	$('#putre').click(function() {
		wir()
	})
	$('#asd').click(function() {
		wir()
	})
	
	function wirs() {
		index--;
		if(index == -1) {
			index = 2;
		}
		
		$("#banner ul li").eq(index).fadeIn().siblings().hide();
		$("#banner ol li").eq(index).addClass('current').siblings().removeClass('current');	
		
	}
	$('#putreri').click(function() {
		wirs()
	})
	$('#ase').click(function() {
		wirs()
	})
	
})
$(function(){
	$('.imgse').click(function(){
		$('#sousuo').fadeIn(500);
		$('#sou').show();
		$('#sou').animate({
			width: '300px'
		})
		$('#sdsa').animate({
			width:'300px'
		})
		
		$('#kpes').fadeOut(500);
	})
	$('#no').click(function(){
		$('#sou').fadeOut(500);
		$('#kpes').fadeIn(500);
		$('#sdsa').animate({
			width:'300px'
		})
		$('#sousuo').fadeOut(500);
		$('#sou').animate({
			width: '300px'
		})
	})
})
//手机
$(function(){
	$('#mon_max').mouseover(function(){
		$('#mon_img').css({'margin-top':'-30px'})
		$('#mon_imgs').css({'margin-left':'-30px'})
	})
	$('#mon_max').mouseleave(function(){
		$('#mon_img').css({'margin-top':'0px'})
		$('#mon_imgs').css({'margin-left':'0px'})
	})
})
$(function(){
	$('#mon_texta').mouseover(function(){
		$('#likes').css({'margin-left':'-30px'})
	})
	$('#mon_texta').mouseleave(function(){
		$('#likes').css({'margin-left':'0px'})
	})
})
$(function(){
	$('#peng_cen').children('h3').mouseover(function(){
		$('#topsa').css({'margin-left':'-30px'})
	})
	$('#peng_cen').children('h3').mouseleave(function(){
		$('#topsa').css({'margin-left':'0px'})
	})
})
// bannerto
$(function(){
	var indexs = 0;
	function wir() {
		indexs++;
		if(indexs == 2) {
			indexs = 0;
		}
		$("#bannerto ul li").eq(indexs).fadeIn().siblings().hide();
		$("#bannerto ol li").eq(indexs).addClass('current').siblings().removeClass('current');
	}
	var yh = setInterval(wir, 2000);
	$('#bannerto').mouseover(function() {
		$('.uar').show();
		clearInterval(yh);
	});
	$('#bannerto').mouseleave(function() {
		$('.uar').hide();
		yh = setInterval(wir, 2000);
	});
	$('#left').click(function() {
		wir()
	})
	$('#loe').click(function() {
		wir()
	})
	function wirs() {
		indexs--;
		if(indexs == -1) {
			indexs = 2;
		}
		$("#bannerto ul li").eq(indexs).fadeIn().siblings().hide();
		$("#bannerto ol li").eq(indexs).addClass('current').siblings().removeClass('current');
	}
	$('#right').click(function() {
		wirs()
	})
	$('#lpo').click(function() {
		wirs()
	})
	$('#jiantou').mouseover(function(){
		$('#jiant').css({'margin-left':'80px'})
	})
	$('#jiantou').mouseleave(function(){
		$('#jiant').css({'margin-left':'50px'})
	})
})
// 成功
$(function(){
	$('#tou').mouseover(function(){
		$('#jian').css({'margin-left':'80px'})
	})
	$('#tou').mouseleave(function(){
		$('#jian').css({'margin-left':'50px'})
	})
	$('#success_left').mouseover(function(){
		$('#success_jian').css({'margin-left':'80px'})
		$('#success_img').css({'margin-left':'-20px'})
	})
	$('#success_left').mouseleave(function(){
		$('#success_jian').css({'margin-left':'50px'})
		$('#success_img').css({'margin-left':'0px'})
	})
	$('#success_right').mouseover(function(){
		$('#success_rijian').css({'margin-left':'80px'})
		$('#success_riimg').css({'margin-left':'-20px'})
	})
	$('#success_right').mouseleave(function(){
		$('#success_rijian').css({'margin-left':'50px'})
		$('#success_riimg').css({'margin-left':'0px'})
	})
	$('#success_cen').mouseover(function(){
		$('#success_cenjian').css({'margin-left':'80px'})
		$('#success_cenimg').css({'margin-left':'-20px'})
	})
	$('#success_cen').mouseleave(function(){
		$('#success_cenjian').css({'margin-left':'50px'})
		$('#success_cenimg').css({'margin-left':'0px'})
	})
})
// 近期新闻
$(function(){
	$('#news_jian').mouseover(function(){
			$('#news_jiantou').css({'margin-left':'80px'})
		})
		$('#news_jian').mouseleave(function(){
			$('#news_jiantou').css({'margin-left':'50px'})
		})
		$('#news_left').mouseover(function(){
				$('#news_cenjian').css({'margin-left':'80px'})
			})
			$('#news_left').mouseleave(function(){
				$('#news_cenjian').css({'margin-left':'50px'})
			})
	})
