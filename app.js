

// Code For Nav Toggle Button

var nav = false;


$("#navbtn").click(function() {


    if (nav == false) {

        nav = true;
        var classOn = "bi bi-x";
        document.querySelector("#navbtn").className = classOn;

        $("ul").animate({
                opacity: "1",
                left: "0",
            },
            500
        );
    } else if (nav == true) {
        nav = false;
        var classOff = "bi bi-list";
        document.querySelector("#navbtn").className = classOff;

        $("ul").animate({
                opacity: "0.5",
                left: "-100%",
            },
            500
        );
    }
});

// Code For Toggle in Nav Ends Here


// Code For Nav When Scroll & Reach Certain Div Change Styles

window.addEventListener('scroll', scroll)
function scroll() {
    let home = document.querySelector('#homenav');
    let about = document.querySelector('#aboutnav');
    let course = document.querySelector('#coursenav');
    let teacher = document.querySelector('#teachersnav');
    let activities = document.querySelector('#activitiesnav');
    let price = document.querySelector('#pricenav');
    let contact = document.querySelector('#contactnav');


    let navbar = document.querySelector('#nav');
    let header = document.querySelector('.header');
    let currrentPosition = window.scrollY;
    let windowPosition = window.scrollY > 80;

    if (windowPosition) {
        navbar.className = "navreal"
    }
    if (!windowPosition) {
        navbar.className = "navhei"
    }

 

    var aboutPos = $("#about").offset().top-5;
    var coursePos = $("#courses").offset().top-5;
    var teachersPos = $("#teachers").offset().top-5;
    var activitiesPos = $("#activities").offset().top-5;
    var pricesPos = $("#prices").offset().top-5;
    var contactPos = $("#contact").offset().top-5;
    var navLength = $("#nav").outerHeight();

$("ul").css({
    top:navLength,
})

if(currrentPosition >= aboutPos){
    $(".ontop").css({
        display:"inline-block"
    })
}
else{
    $(".ontop").css({
        display:"none"
    })
}



    let conditionHome = currrentPosition < aboutPos;
    home.classList.toggle('activediv', conditionHome);

    let conditonAbout = currrentPosition >= aboutPos && currrentPosition < coursePos;
    about.classList.toggle('activediv', conditonAbout);

    let conditonCourse = currrentPosition >= coursePos && currrentPosition < teachersPos;
    course.classList.toggle('activediv', conditonCourse);

    let conditonTeacher = currrentPosition >= teachersPos && currrentPosition < activitiesPos;
    teacher.classList.toggle('activediv', conditonTeacher);

    let conditionActivities = currrentPosition >= activitiesPos && currrentPosition < pricesPos;
    activities.classList.toggle('activediv', conditionActivities);

    let conditionPrices = currrentPosition >= pricesPos && currrentPosition < contactPos;
    price.classList.toggle('activediv', conditionPrices);

    let conditionContact = currrentPosition >= contactPos;
    contact.classList.toggle('activediv', conditionContact);
}

$("#allpicn").click(function() {

    $(".picnic").show(1000);
    $(".fit").hide(1000)




});

$("#allfit").click(function() {


    $(".picnic").hide(1000);

    $(".fit").show(1000);


});


$("#allimg").click(function() {
    $(".fit").show(1000);
    $(".picnic").show(1000);

});

// Code For Image Galley Picture View
var zoomIn = document.querySelectorAll(".bi-zoom-in");
var zoomOut = document.querySelectorAll(".bi-arrow-left-circle");

zoomIn[0].addEventListener('click', function(){
    showingPic(0);
}
);
zoomIn[1].addEventListener('click', function(){
    showingPic(1);
}
);
zoomIn[2].addEventListener('click', function(){
    showingPic(2);
}
);
zoomIn[3].addEventListener('click', function(){
    showingPic(3);
}
);
zoomIn[4].addEventListener('click', function(){
    showingPic(4);
}
);
zoomIn[5].addEventListener('click', function(){
    showingPic(5);
}
);
zoomIn[6].addEventListener('click', function(){
    showingPic(6);
}
);
zoomIn[7].addEventListener('click', function(){
    showingPic(7);
}
);
zoomIn[8].addEventListener('click', function(){
    showingPic(8);
}
);


function showingPic(e){
    var now = zoomIn[e].parentElement.previousSibling.previousSibling.src
    document.getElementsByClassName("viewer")[0].style.display = "flex"
    document.getElementsByClassName("viewer")[0].style.opacity = "1"
    document.getElementsByClassName("viewer")[0].style.transition = "1s"
    document.getElementsByClassName("mainimg")[0].src = now;
}

zoomOut[0].addEventListener("click", function() {
    document.getElementsByClassName("viewer")[0].style.display = "none"
})

$(document).ready(function() {
    $('.counter').counterUp({
        delay: 5,
        time: 600
    });
});