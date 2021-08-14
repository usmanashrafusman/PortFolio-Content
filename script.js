// for (var i = 0; i<10; i++){
     
     //     zoomIn[i].addEventListener("click",function(){
          //         var aa = zoomIn[i].parentElement.previousSibling;
          //         console.log(aa)
          //     })
          
          // 
          // for (var i=0; i<9; i++){
               // var zoomnow = zoomIn[i];
               // console.log(zoomnow);
               //    zoomnow.addEventListener("click",function(){
                    //         var show = zoomnow.parentElement.previousSibling.previousSibling.src;
//              console.log(show)
//      })

// }
// for (var i=0; i>zoomIn.length; i++)
// zoomIn[i].addEventListener("click",function(){
     //      var show = zoomIn[i].parentElement.previousSibling.previousSibling.src;
     //           console.log(show)
     //   })


var zoomIn = document.querySelectorAll(".bi-zoom-in");
var zoomOut = document.querySelectorAll(".bi-arrow-left-circle");
     
zoomIn[0].addEventListener('click',function(){
  var now =  zoomIn[0].parentElement.previousSibling.previousSibling.src
    console.log(now);
    
    document.getElementsByClassName("viewer")[0].style.display="flex"
    document.getElementsByClassName("viewer")[0].style.transition="1s"
    
    document.getElementsByClassName("mainimg")[0].src=now;
})

zoomOut[0].addEventListener("click", function(){
     document.getElementsByClassName("viewer")[0].style.display="none"
})