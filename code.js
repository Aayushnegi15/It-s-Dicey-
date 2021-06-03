onEvent("Button1", "click", function( ) {
  setNumber("digit", randomNumber(1, 6));
  if (getNumber("digit") == 1) {
    setImageURL("image1", "assets/1.PNG");
  } else if ((getNumber("digit") == 2)) {
    setImageURL("image1", "assets/2.PNG");
   } else if ((getNumber("digit") == 3)) {
    setImageURL("image1", "assets/3.PNG");
   } else if ((getNumber("digit") == 4)) {
    setImageURL("image1", "assets/4.PNG");
   } else if ((getNumber("digit") == 5)) {
    setImageURL("image1", "assets/5.PNG");
   } else if ((getNumber("digit") == 6)) {
    setImageURL("image1", "assets/6.PNG");
  }
});
