// ARRAY FOR COURSE CARDS

const courses = [
    {
        image: './assets/iOSdevelopment.webp',
        courseName: 'iOS Development',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/ios-development'
    },
    {
        image: './assets/react.webp',
        courseName: 'React',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/react'
    },
    {
        image: './assets/python.webp',
        courseName: 'Python',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/python-basic'
    },
    {
        image: './assets/advancedPython.webp',
        courseName: 'Advanced Python',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/python-advance'
    },
    {
        image: './assets/cybersecurity.webp',
        courseName: 'Advanced Cybersecurity Course',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/information-security-advance'
    },
    {
        image: './assets/ToT.webp',
        courseName: 'ToT - Training of Trainers',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/training-of-trainers'
    },
    {
        image: './assets/blockchain.webp',
        courseName: 'Blockchain',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/blockchain'
    },
    {
        image: './assets/devOps.webp',
        courseName: 'DevOps',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/devops'
    },
    {
        image: './assets/informationSecurity.webp',
        courseName: 'Information Security Governance',
        status: 'რეგისტრაცია დასრულებულია',
        details: 'https://www.tbcacademy.ge/usaid/information-security-basic'
    }
]

// GENERATING COURSE CARDS

const gridContainer = document.querySelector('.grid_container');

courses.forEach((course) => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course_card');
    gridContainer.appendChild(courseCard);
    
    const image = document.createElement('img');
    image.classList.add('course_card_image');
    image.src = course.image;
    image.alt = course.courseName;
    courseCard.appendChild(image);

    const mutualDiv = document.createElement('div');
    mutualDiv.classList.add('mutual_div');

    const infoTextDiv = document.createElement('div');
    infoTextDiv.classList.add('course_info_txt');
    const courseName = document.createElement('h5');
    courseName.innerText = course.courseName;
    const registration = document.createElement('p');
    registration.innerText = course.status;

    courseCard.appendChild(mutualDiv);
    mutualDiv.appendChild(infoTextDiv);
    infoTextDiv.appendChild(courseName);
    infoTextDiv.appendChild(registration);

    const courseDetail = document.createElement('div');
    courseDetail.classList.add('more_course_details');

    const arrowIcon = document.createElement('i');
    arrowIcon.className ='fa-solid fa-arrow-right';

    const detailAhref = document.createElement('a');
    detailAhref.href = course.details;
    detailAhref.innerText = 'კურსის დეტალები';

    courseCard.appendChild(courseDetail);
    courseDetail.appendChild(arrowIcon);
    courseDetail.appendChild(detailAhref);

    
    mutualDiv.appendChild(courseDetail);
})

// SLIDER FOR PROJECT PARTNERS

let activeSliderIndex = 0;
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slider_element');

const changeSlide = (activeIndex) => {
    slides.forEach((slide, index) => {
        if(activeIndex === index) {
            slide.style.display = 'flex';
            dots[index].classList.add('active_mark');
        }
        else {
            slide.style.display = 'none';
            dots[index].classList.remove('active_mark');
        }
    })
}

const nextSlide = () => {
    activeSliderIndex = activeSliderIndex < 2 ? activeSliderIndex + 1 : 0;
    changeSlide(activeSliderIndex);
}

const prevSlide = () => {
    activeSliderIndex = activeSliderIndex > 0 ? activeSliderIndex - 1 : 2;
    changeSlide(activeSliderIndex);
}

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

dots.forEach((mark, index) => {
    mark.addEventListener('click', () => {
        activeSliderIndex = index;
        changeSlide(activeSliderIndex);
    })
})

setInterval(nextSlide, 5000);


// JS for FAQ accordion 
const acc = document.querySelectorAll('.accordion_btn');
const faqPanel = document.querySelectorAll('.questions_content');
acc.forEach((accordion, index) => {
    accordion.addEventListener('click', () => {
        faqPanel[index].classList.toggle('active_faq_btn');
        faqPanel[index].classList.toggle('show');
        const svg = accordion.querySelector('svg');

        svg.classList.toggle('svg_rotate')

    })
})


// header
const header = document.querySelector('.header');
document.addEventListener('scroll', (e) => {
    if (scrollY > 0) {
        header.style.backgroundColor = 'rgba(26, 30, 31, 0.9)';
    };
});

const checkViewPort = () => {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 769) {
        return handlescroll();
    }
}

let lastScrollTop = 0;

const handlescroll = () => {
    currentScrollTop = window.scrollY || document.documentElement.scrollTop;


    if(currentScrollTop > lastScrollTop) {
        header.classList.add('hidden');
    }
    else {
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop;
}

window.addEventListener('scroll', checkViewPort);





// burger menu
const burgerMenu = document.querySelector('.burger_menu');
const bars = document.querySelectorAll('.burger_bar');
const menu = document.querySelector('.header_unordered_list')
const points = document.querySelector('.navigation_lists');
const navigationContainer = document.querySelector('.navigation_container');

burgerMenu.addEventListener('click', () => {
    bars[0].classList.toggle('rotate_bar1')
    bars[1].classList.toggle('rotate_bar2')
    bars[2].classList.toggle('rotate_bar3')

    menu.classList.toggle('switch');

    navigationContainer.classList.toggle('active_ul');
    
    if (navigationContainer.classList.contains('active_ul'))  {
        document.body.style.overflow = 'hidden';
        header.style.backgroundColor = 'rgba(26, 30, 31, 1);';
        setTimeout(() => {
            navigationContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        },500)
    }
    else {
        document.body.style.overflow = 'visible';
        header.style.backgroundColor = 'rgba(26, 30, 31, 0.9)';
        navigationContainer.style.backgroundColor = 'transparent';
    }

    window.addEventListener("click", (event) => {    
        if (event.target === navigationContainer) {
            navigationContainer.classList.toggle('active_ul');
            bars[0].classList.toggle('rotate_bar1');
            bars[1].classList.toggle('rotate_bar2');
            bars[2].classList.toggle('rotate_bar3');
            document.body.style.overflow = 'visible';
        }
    })
});


// TERMS AND POLICY MODAL 
const rules = document.querySelectorAll('.terms_policy');
rules.forEach((rule) => {
    rule.addEventListener('click', () => {
        const exampleDiv = document.querySelector('.overlay_modal')
        exampleDiv.classList.toggle('reveal');
        const closeModalButton = document.querySelector('.close_modal');
    
        closeModalButton.addEventListener('click', () => {
            exampleDiv.classList.remove('reveal');
    
            if(exampleDiv.classList.contains('reveal')) {
                setTimeout(() => {
                    exampleDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                },500)
            }
            
        })  
    
        window.addEventListener("click", (event) => {    
            if (event.target === exampleDiv) {
                exampleDiv.classList.remove('reveal');
            }
        })
    })
})



