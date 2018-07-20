function changeImage()
{
var img = document.getElementById("myImage");
img.src="https://floydms.github.io/SchoolProjectVWWangara/img/ArtR.jpg"
return false;
}
            function changeImage2()
{
var img = document.getElementById("myImage");
img.src="https://floydms.github.io/SchoolProjectVWWangara/img/ArtBl.jpg";
return false;
}
            function changeImage3(){
         var img = document.getElementById("myImage");
          img.src="https://floydms.github.io/SchoolProjectVWWangara/img/ArtB.jpg";
          return false;
}

function postcode() {
    var x, text;

    // Get the value of the input field with id="PCNum" ie the postcode input
    x = document.getElementById("PCnum").value;

   // If a number between 1000-9999 is entered it is valid
    if (isNaN(x) || x < 999 || x > 10000) {
        text = "Invalid Postcode";
    } else {
        text = "Information valid for your area will be displayed";
    }
    document.getElementById("demo").innerHTML = text;
}
