// LOADING SCREEN
const onReady = (callback) => {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}
  
const setVisible = (selector, visible) => {
    if (visible) {
        document.querySelector(selector).style.opacity = "1"
        
    }
    else {
        document.querySelector(selector).style.opacity = "0"
        setTimeout(() =>{
            document.querySelector(selector).style.display = "none"
        },500)
    }
}

onReady(function() {
    setVisible('#main', true);
    setVisible('#loading', false);
});
// END OF LOADING

console.log("Hi stranger :)")