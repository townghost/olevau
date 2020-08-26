// Original
// function change_picture() {
//  var picture_variable = document.getElementById("picture");
//  picture_variable.src = `https://moodyf.neocities.org/moodys_project/void_2.png`
// }

// var right_arrow = document.getElementById("right_arrow");
// right_arrow.addEventListener("click", change_picture);

// Version 2
//var pic_num = 0;
// // Changes picture when called.
//function change_picture(change_by) {
//    pic_num += change_by;
//    if (pic_num < 1) {
//        pic_num = 1
//    }
//    if (pic_num > 5) {
//        pic_num = 5
//    }
//    var picture_variable = document.getElementById("picture");
//    picture_variable.src = 'void_' + pic_num + '.png';
//}

// //Event listeners

//var left_arrow = document.getElementById("left_arrow");
//left_arrow.addEventListener("click", function() {change_picture(-1);});

//var right_arrow = document.getElementById("right_arrow");
//right_arrow.addEventListener("click", function() {change_picture(1);});

console.log("hlsdkaklfjklafsdljkasf");
// Constants
const MIN_PAGE_NUMBER = 1;
const MAX_PAGE_NUMBER = 5;

// Global variables
var pic_num = 1;

// Event listeners
var left_arrow = document.getElementById("left_arrow");
left_arrow.addEventListener("click",
    function() {change_picture(-1);});

var right_arrow = document.getElementById("right_arrow");
right_arrow.addEventListener("click",
    function() {change_picture(1);});

var first_page = document.getElementById("first_page");
first_page.addEventListener("click",
    function() {change_picture(-MAX_PAGE_NUMBER);});

var last_page = document.getElementById("last_page");
last_page.addEventListener("click",
    function() {change_picture(MAX_PAGE_NUMBER);});

// Changes picture when called.
function change_picture(change_by) {
    pic_num += change_by;
    if (pic_num <= MIN_PAGE_NUMBER) {
        pic_num = MIN_PAGE_NUMBER;
        left_arrow.hidden = true;
        first_page.hidden = true;
    } else {
        left_arrow.hidden = false;
        first_page.hidden = false;
    }
    if (pic_num >= MAX_PAGE_NUMBER) {
        pic_num = MAX_PAGE_NUMBER;
        right_arrow.hidden = true;
        last_page.hidden = true;
    } else {
        right_arrow.hidden = false;
        last_page.hidden = false;
    }
    var picture_variable = document.getElementById("picture");
    picture_variable.src = 'void_' + pic_num + '.gif';
}
