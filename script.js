// toggle icon navbar
let menu =document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll selections active link
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove togggle icon and navbar when clcked navbar
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.homepage, .heading, .aboutcontent h3', { origin: 'top' });
ScrollReveal().reveal('.homeimg, .servicescontainer, .portfoliobox, .aboutimg, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homepage h1', { origin: 'left' });

//disable rightclick in image
document.getElementById('disableRightClick').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.getElementById('disableRightClick1').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

//multiple text 
const typed = new Typed('.multipletext', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Graphics Designer', 'Photographer'],
    typeSpeed: 100,  
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//about multiple texts
const typeds = new Typed('.aboutmultitext', {
    strings: ['Passionate', 'Creative', 'Solution-driven', 'Adaptable', 'Technically Skilled', 'Enthusiastic', 'Collaborative'
    , 'Artistic', 'Imaginative', 'Experimental', 'Curious', 'Expressive', 'Constantly learning'],
    typeSpeed: 80,  
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});