(function () {
    let script = document.createElement('script');
    script.type = "tex/javascript";
    script.async = true;
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
})();

setTimeout(() => {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 22)
        $('.world_name')[0].click();
}, 10 * 60 * 1000 + Math.floor((Math.random() * 5 * 60 * 1000)));

