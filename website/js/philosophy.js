function openCity(evt, cityName){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for( i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active-tab";
}

document.getElementById("defaultOpen").click();

$(".london-div").click(function(){
  $(".fa-minus-circle").hide();
  $(".fa-plus-circle").show();
  $(".london-div .fa-minus-circle").show();
  $(".london-div .fa-plus-circle").hide();
  $(".tablinks").hide();
  $(".london").toggle();
});

$(".paris-div").click(function(){
  $(".fa-minus-circle").hide();
  $(".fa-plus-circle").show();
  $(".paris-div .fa-minus-circle").show();
  $(".paris-div .fa-plus-circle").hide();
  $(".tablinks").hide();
  $(".paris").toggle();
});

$(".china-div").click(function(){
	$(".fa-minus-circle").hide();
  $(".fa-plus-circle").show();
  $(".china-div .fa-minus-circle").show();
  $(".china-div .fa-plus-circle").hide();
	$(".tablinks").hide();
  $(".china").toggle();
});