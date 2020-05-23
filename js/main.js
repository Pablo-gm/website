
(function(){

    // Image lazy loading
    var lazyImages = document.querySelectorAll('.lazy-image');
    var options = {
        //root: document.querySelector('null'),
        rootMargin: '0px 0px 240px 0px',
        threshold: 0.1
    }

    // Add image observer
    var imageObserver = new IntersectionObserver(lazyHandler, options);
    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });

    // Load image
    function lazyHandler(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                imageObserver.unobserve(entry.target);
                entry.target.src = entry.target.dataset.src;
                entry.target.classList.remove('lazy-image');
            }
        });
    }

    // Add shadow to header if exists
    var headerTrigger = document.querySelector(".header__trigger");
    var header = document.querySelector(".header");
    if (!header) return;

    // Add header observer
    var observer = new IntersectionObserver(headerHandler, {});
    observer.observe(headerTrigger);

    //  Handler function to add/remove shadow
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
        header.classList.remove('header--shadow');
    }

    function addShadow() {
        header.classList.add('header--shadow');
    }

})();