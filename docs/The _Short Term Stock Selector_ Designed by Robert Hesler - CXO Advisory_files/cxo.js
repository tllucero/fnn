$(document).ready(function() {
  
  /* MOMENTUM STRATEGY */
  $(".momentum_portfolio tr:nth-child(even)").addClass("even");
  
  
  /* PAYMENT PAGE */
  $(".payment_submit_button").click(function() {
    $(this).css('color','#888');
	$(".cycle").css('display','block');
  });
  
  /* GURU TABLE */
  $(".guru_page table tr:nth-child(odd)").addClass("odd");
  $(".guru_page table tr:nth-child(even)").addClass("even");
  
  $(".guru_page table").attr("style","width: 100%;");
  
  $(".guru_page table").find("tr:first").addClass("guru_top");
  $(".guru_page table tr:nth-child(2)").addClass("guru_sub");

  $(".guru_page table td").each(function() {
	if ($(this).text() == "+")
	  $(this).addClass("plus");
	else if ($(this).text() == "-")
	  $(this).addClass("minus");
	else if ($(this).text() == "0")
	  $(this).addClass("zero");
	else if ($(this).attr("width") > 200)
	  $(this).addClass("guru_comment");
	$(this).removeAttr("width");
	$(this).removeAttr("height");
  });
  
  $(".guru_page col").each(function() {
	$(this).removeAttr("width");
  });
  
  /* EMAIL SUBSCRIBE */
  $("#email_rss_subscribe").val("Enter Email Address");
  $("#email_rss_subscribe").addClass("input_nofocus");
  $("#email_rss_subscribe").focus(function() {
	if ($(this).val()=="Enter Email Address") {
	  $(this).val("");
	  $(this).removeClass("input_nofocus");
	}
  });
  $("#email_rss_subscribe").blur(function() {
	if ($(this).val()=="") {
	  $(this).val("Enter Email Address");
	  $(this).addClass("input_nofocus");
	}
  });
  
  $("#your-profile .form-table:first, #your-profile h3:first").remove();
  
});