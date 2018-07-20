function changeImage()
{
var img = document.getElementById("myImage");
img.src="cs/k.png"
return false;
}
            function changeImage2()
{
var img = document.getElementById("myImage");
img.src="green.png";
return false;
}
            function changeImage3(){
         var img = document.getElementById("myImage");
          img.src="white.png";
          return false;
}

        function saveData(){
    var data  = localStorage.getItem("date");

    var dates = data ? JSON.parse(data) : [];

    dates.push( Date.now() );

    localStorage.setItem("date", JSON.stringify(dates));  

    alert("Your data is stored");
}
