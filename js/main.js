
(function(){

    var headerTrigger = document.querySelector(".header__trigger");
    var header = document.querySelector(".header");
    if (!header) return;

    var options = {
        //root: document.querySelector('null'),
        //rootMargin: '0px 0px 400px 0px',
        //threshold: 1.0
    }


    var observer = new IntersectionObserver(headerHandler, options);
    observer.observe(headerTrigger);

    function headerHandler(entries){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                removeShadow();
            } else {
                addShadow();
            }
        });
    }

    function removeShadow() {
        console.log("remove shadow");
        header.classList.remove('header--shadow');
    }

    function addShadow() {
        console.log("add shadow");
        header.classList.add('header--shadow');
    }

})();