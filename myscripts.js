function ArtR()
{
var img = document.getElementById("myImage");
img.src="https://floydms.github.io/SchoolProjectVWWangara/img/ArtR.jpg"
return false;
}
            function ArtBl()
{
var img = document.getElementById("myImage");
img.src="https://floydms.github.io/SchoolProjectVWWangara/img/ArtBl.jpg";
return false;
}
            function ArtB(){
         var img = document.getElementById("myImage");
          img.src="https://floydms.github.io/SchoolProjectVWWangara/img/ArtB.jpg";
          return false;
}
  function ArtW(){
         var img = document.getElementById("myImage");
          img.src="https://floydms.github.io/SchoolProjectVWWangara/img/ArtW.jpg";
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
