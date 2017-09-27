$(document).ready(function(){
"use strict";

var banner="";
var url='https://gist.githubusercontent.com/roblos12/151417b9d5bcd444a2351b6d58db3fdc/raw/acc7ed077a9eb0cba0651bf9759d7b58cacc83c3/data.json';
$.ajax({
dataType: "json",
url: url,
success: function(output) {
for(var i=0;i<=output["carouselData"].length;i++){
var image=output["carouselData"][i].productImageUrl;
var link=output["carouselData"][i].url;
var itemPositionOneBased=output["carouselData"][i].itemPositionOneBased;
var productImageAltText=output["carouselData"][i].productImageAltText;
var name=output["carouselData"][i].name;
var saleunit=output["carouselData"][i].salesUnit;
banner="<li>"+
"<a href='"+link+"' target='_blank'>"+
"<img src='"+image+"' alt='"+productImageAltText+"'>"+
"<span>"+name+"</span>"+
"<span>Stock: <span>"+saleunit+"</span></span>"+
"</a></li>";
$('.lstRecommendedProductCarousel').append(banner);
}
}
});

setTimeout(function(){
$('.lstRecommendedProductCarousel').slick({
slidesToShow: 4,
slidesToScroll: 3,
autoplay: false,
arrows:true,
infinite: false,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
},1200);

});