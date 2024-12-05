var icon = document.getElementById("i");
icon.onclick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.toggle("dark")){
        icon.src = "sun-line.png";
    }else{
        icon.src = "moon-fill.png";
    }
}