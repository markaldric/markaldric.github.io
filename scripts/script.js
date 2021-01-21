var checker = false,
    images,
    loadedImage = 0,
    limit = 3,
    isFallback = false,
    imageError = 0,
    countError = 0;

function preload() {
    
    try {
        images = new Array(
            "scripts/sample.jpg"
        );
        for (var i=0; i < images.length; i++) {
            imageObj = new Image();
            imageObj.src=images[i];
            imageObj.addEventListener("load", iLoad, false);
            imageObj.addEventListener("error", function () {
                imageError++;
                if (imageError>0) {
                    console.log("Error on preload")
                }
            }, false);
        }
        console.log('Entering preload');
    } 
    catch (err) {
        console.error("%cError: " + err.message + " on function preload");
    }
}

function iLoad() {
    
    loadedImage++;
    
    if (images.length==loadedImage) {
        home.style.backgroundImage = "url('"+images[0]+"')";
        init();
    }
}

function init() {
    
    home.style.visibility = "visible";

}