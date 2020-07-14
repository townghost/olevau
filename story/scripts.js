var pic_num = 1;
// Changes picture when called.
function change_picture() {
  var picture_variable = document.getElementById("picture");
  picture_variable.src = `https://moodyf.neocities.org/moodys_project/void_` + pic_num + `.png`;
  console.log(pic_num);
    if (pic_num !=?) {
        pic_num += 1;
    }
}

var right_arrow = document.getElementById("right_arrow");
right_arrow.addEventListener("click", change_picture);