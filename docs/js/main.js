$(function(){
	$(".rate .item").click(function() {
	$('#plan-select-form [name="plan"]').val(3 - $(this).index());
	$(".rate .item").removeClass("item--green").eq($(this).index()).addClass("item--green");
}).eq(0).addClass("active");
});


function timer(f) {
	let date = new Date(f.attr("data-finish").replace(' ', 'T'));
  
	let f_time = Date.parse(date);

	function timer_go(obj) {
		let n_time = Date.now();
		let diff = f_time - n_time;
		if(diff <= 0) return false;
		let left = diff % 1000;

		//секунды
		diff = Math.floor(diff / 1000);
		let s = diff % 60;
		if(s < 10) {
			$(".seconds_1",obj).html(0);
			$(".seconds_2",obj).html(s);
		}else {
			$(".seconds_1",obj).html(Math.floor(s / 10));
			$(".seconds_2",obj).html(s % 10);
		}
		//минуты
		diff = Math.floor(diff / 60);
		let m = diff % 60;
		if(m < 10) {
			$(".minutes_1",obj).html(0);
			$(".minutes_2",obj).html(m);
		}else {
			$(".minutes_1",obj).html(Math.floor(m / 10));
			$(".minutes_2",obj).html(m % 10);
		}
		//часы
		diff = Math.floor(diff / 60);
		let h = diff % 24;
		if(h < 10) {
			$(".hours_1",obj).html(0);
			$(".hours_2",obj).html(h);
		}else {
			$(".hours_1",obj).html(Math.floor(h / 10));
			$(".hours_2",obj).html(h % 10);
		}
		//дни
		
		  var d = Math.floor(diff / 24);
	  if(d < 10) {
		  $(".days_1",obj).html(0);
		  $(".days_2",obj).html(d);
	  }else {
		  $(".days_1",obj).html(Math.floor(d / 10));
		  $(".days_2",obj).html(d % 10);
	  }
	   
		setTimeout(timer_go, left,obj);
	}
	setTimeout(timer_go, 0,f);
}

$(".timer").each(function() {
  
	timer($(this))
});
