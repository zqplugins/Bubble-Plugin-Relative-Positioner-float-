function(instance, properties) {
    var canvas = instance.canvas[0]; 

    // Create the div element
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.border = '1px solid #f1f1f1';
    div.style.backgroundImage = 'url("//f51b18dfea0e00465aa42b714bbbc54d.cdn.bubble.io/f1713364665851x588975714048553200/DALLE2024-04-1717.36.22-Createa3Dillustrationofaniconshowingananchorpullingasquareintoanothersquareallinbluetones.Thestyleismodernandminimalisticwi-ezgif.com-webp-to-jpg-converter__1_-removebg-preview.png")';
    div.style.backgroundSize = 'contain';
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundPosition = 'center center';
    div.style.borderRadius = '5px';
    div.style.opacity = '0.9';
    div.style.boxSizing = 'border-box';
	
    // Append the div to the canvas element
    canvas.innerHTML = ''; // Clear existing content
    canvas.appendChild(div);
}
