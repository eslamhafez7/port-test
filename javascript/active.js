const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const Body = document.querySelector('.main-content');

function PageTransitions() {
    // Button Click Active Class
    for(let i =0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active Class
    Body.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            //remove selected from the other btns
            secBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    // Toggle Theme 
    const themeBtn = document.querySelectorAll(".theme-btn");

themeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
    })
});

// const themeBtn = document.querySelectorAll(".theme-btn");
// const element = document.body;

// // Check if user has previously saved a theme preference
// if (localStorage.getItem('theme')) {
//   const savedTheme = localStorage.getItem('theme');
//   element.classList.add(savedTheme);
// }

// themeBtn.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     const currentTheme = element.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';

//     // Toggle theme on button click
//     element.classList.toggle('light-mode');
//     // element.classList.toggle('dark-mode');

//     // Save theme preference to localStorage
//     localStorage.setItem('theme', currentTheme);
//   })
// });

}
PageTransitions();

