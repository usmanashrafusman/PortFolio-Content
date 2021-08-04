// Code For Nav Toggle Button

var nav = false;

$("#navbtn").click(function () {
  if (nav == false) {
    nav = true;
   
    $("ul").animate(
      {
        opacity: "1",
        left: "0",
      },
      500
    );
  } else if (nav == true) {
    nav = false;
    
    $("ul").animate(
      {
        opacity: "0.5",
        left: "-100%",
      },
      500
    );
  }
});

// Code For Toggle in Nav Ends Here


// Code For Nav When Scroll & Reach Certain Div Change Styles

window.addEventListener('scroll', function () {
  let home = document.querySelector('#homenav');
  let about = document.querySelector('#aboutnav');
  let course = document.querySelector('#coursenav');
  let teacher = document.querySelector('#teachersnav');
  let activities = document.querySelector('#activitiesnav');
  let price= document.querySelector('#pricenav');
  let contact = document.querySelector('#contactnav');


  let navbar = document.querySelector('#nav');
  let header = document.querySelector('.header');
  let currrentPosition =  window.scrollY;
  let windowPosition = window.scrollY > 80;

  navbar.classList.toggle('navreal', windowPosition);
 
  var aboutPos = $("#about").offset().top;
  var coursePos = $("#courses").offset().top;
  var teachersPos = $("#teachers").offset().top;
  var activitiesPos = $("#activities").offset().top;
  var pricesPos = $("#prices").offset().top;
  var contactPos = $("#contact").offset().top;




  let conditionHome = currrentPosition < aboutPos; 
  home.classList.toggle('activediv' , conditionHome);

  let conditonAbout = currrentPosition >= aboutPos && currrentPosition < coursePos;
  about.classList.toggle('activediv' , conditonAbout);

  let conditonCourse = currrentPosition >= coursePos && currrentPosition < teachersPos;
  course.classList.toggle('activediv' , conditonCourse);

  let conditonTeacher = currrentPosition >= teachersPos && currrentPosition < activitiesPos;
  teacher.classList.toggle('activediv' , conditonTeacher);

  let conditionActivities = currrentPosition >= activitiesPos && currrentPosition < pricesPos;
  activities .classList.toggle('activediv' , conditionActivities );

  let conditionPrices = currrentPosition >= pricesPos && currrentPosition < contactPos;
  price.classList.toggle('activediv' , conditionPrices );

  let conditionContact = currrentPosition >= contactPos;
  contact.classList.toggle('activediv' , conditionContact );
})


// Code For Nav When Scroll & Reach Certain Div Change Styles Ends Here

// // Image Gallery Buttons Code

// $("#allpicn").click(function(){
// $("#6").css(
//   {
//     width: "60%",
//   });
//   $(".fit").css(
//     {
    
//       display: "none",
  
//     });

//     $(".picnic").css(
//       {
      
//         display: "block",
    
//       });


// });

// $("#allfit").click(function(){

//   $(".picnic").css(
//     {
    
//       display: "none",
  
//     });

//     $(".fit").css(
//       {
      
//         display: "block",
    
//       });
//     $("#1").css({
//       display: "block"
//     });
//     document.getElementById("1").src="images/download-6.jpg"

//     $("#9").css({
//       display: "none",
//     });

//   });


//   $("#allimg").click(function(){
//     $("#6").css(
//       {
//         width: "65%",
//       });

//     $(".picnic").css(
//       {
      
//         display: "block",
    
//       });
  
//       $(".fit").css(
//         {
        
//           display: "block",
      
//         });
  
//     });


//   // Image Gallery Buttons Code Ends Here




// Image Gallery Buttons Code

$("#allpicn").click(function(){
 
  $(".picnic").show(1000);
    $(".fit").hide(1000)
  
    
  
  
  });
  
  $("#allfit").click(function(){

    
    $(".picnic").hide(1000);
   
    $(".fit").show(1000);
  
  
    });
  
  
    $("#allimg").click(function(){
      $(".fit").show(1000);
      $(".picnic").show(1000);
    
      });
  
  
    // Image Gallery Buttons Code Ends Here


    
    
  // var place = document.getElementsByClassName("place")

  // var showPlace = document.getElementsByClassName("image")
  // function visiblePlace(e){
  //   place[e].style.display="flex"
  //   place[e].style.transition="0.5s"
  // }
  // // for (var i=0; i<showPlace.length; i++){
  //   showPlace[e].addEventListener("mouseover",function(e){
  //    console.log(showPlace(e))

  //   })
  //   console.log(showPlace[i])
  // }
// var allImages = document.querySelectorAll(".galleryimg");
// console.log(allImages)
// console.log(zoomIn)

// for (var i=0; i<allImages.length; i++){
  
//   var zoomIn = document.querySelector( );
//   zoomIn(i).click(function(){
//     console.log(zoomIn[i])
//   })

// }




// var dom = $(".bi-zoom-in").parent().prev('.galleryimg');
// console.log(dom[2])

var zoomIn = document.querySelectorAll(".bi-zoom-in");
var zoomOut = document.querySelectorAll(".bi-arrow-left-circle");
     
zoomIn[0].addEventListener('click',function(){
  var now =  zoomIn[0].parentElement.previousSibling.previousSibling.src
    console.log(now);
    
    document.getElementsByClassName("viewer")[0].style.display="flex"
    document.getElementsByClassName("viewer")[0].style.opacity="1"
    document.getElementsByClassName("viewer")[0].style.transition="1s"
    // document.getElementsByClassName("viewer")[0].classList.add("viewervisible")
    // document.getElementsByClassName("viewer")[0].classList.remove("viewer")
    
    
    document.getElementsByClassName("mainimg")[0].src=now;
})

zoomOut[0].addEventListener("click", function(){
     document.getElementsByClassName("viewer")[0].style.display="none"
})


zoomIn[1].addEventListener('click',function(){
  var now =  zoomIn[1].parentElement.previousSibling.previousSibling.src
    console.log(now);
    
    document.getElementsByClassName("viewer")[0].style.display="flex"
    document.getElementsByClassName("viewer")[0].style.opacity="1"
    document.getElementsByClassName("viewer")[0].style.transition="1s"
    // document.getElementsByClassName("viewer")[0].classList.add("viewervisible")
    // document.getElementsByClassName("viewer")[0].classList.remove("viewer")
    
    
    document.getElementsByClassName("mainimg")[0].src=now;
})



zoomIn[2].addEventListener('click',function(){
  var now =  zoomIn[2].parentElement.previousSibling.previousSibling.src
    console.log(now);
    
    document.getElementsByClassName("viewer")[0].style.display="flex"
    document.getElementsByClassName("viewer")[0].style.opacity="1"
    document.getElementsByClassName("viewer")[0].style.transition="1s"
    // document.getElementsByClassName("viewer")[0].classList.add("viewervisible")
    // document.getElementsByClassName("viewer")[0].classList.remove("viewer")
    
    
    document.getElementsByClassName("mainimg")[0].src=now;
})




