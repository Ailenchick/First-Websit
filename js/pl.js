var count = 0;
document.getElementById("myButton").onclick = function () {
    count++;
	if (count % 2 == 0) { 
        document.getElementById("demo").innerHTML = "";
	} else {
		var img = document.createElement("img");
        img.src = "https://polotnos.cdnbro.com/posts/5525495-sfu-logotip-18.jpg";
        document.getElementById("demo").appendChild(img);
	}
}