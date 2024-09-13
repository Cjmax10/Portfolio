const colors = ['green', 'blue', 'pink', 'orange', 'purple', 'black', 'red', 'yellow'];

function randomColor() {
    const randomNumber = Math.floor(Math.random() * 8);
    return colors[randomNumber];
}

const content = [
    [
        {
            img: 'img/projects/timetrackingdashboard.png',
            title: 'Time Tracking Dashboard',
            description: 'A responsive time-tracking dashboard with daily, weekly, and monthly stats, using JSON data and interactive elements.',
            link: 'https://cjmax10.github.io/time-tracking-dashboard/'
        },
        {
            img: 'img/projects/socialmedidashboard.png',
            title: 'Social Media Dashboard',
            description: 'A responsive social media landing page with a color theme toggle, ensuring optimal layout and interactive states',
            link: 'https://cjmax10.github.io/social-media-dashboard/'
        },
        {
            img: 'img/projects/mortgagecalculator.png',
            title: 'Mortgage Calculator',
            description: 'A responsive mortgage calculator with form validation, and interactive elements for monthly and total repayments.',
            link: 'https://cjmax10.github.io/mortgage-repayment-calculator/'
        },
        {
            img: 'img/projects/productlistpage.png',
            title: 'Product List Page',
            description: 'A responsive product list with a cart, using data from a JSON file, featuring order confirmation.',
            link: 'https://cjmax10.github.io/product-list-with-cart/'
        },
        {
            img: 'img/projects/tipcalculator.png',
            title: 'Tip Calculator App',
            description: 'A responsive tip calculator app that calculates tips per person, with interactive elements and optimal layout across devices',
            link: 'https://cjmax10.github.io/tip-calculator-app/'
        },
        {
            img: 'img/projects/sociallinks.png',
            title: 'Social Links Profile',
            description: 'A social links profile with interactive hover and focus states for all elements.',
            link: 'https://cjmax10.github.io/social-links-profile-frontendMentor/'
        },
        {
            img: 'img/projects/blogpreviewvcard.png',
            title: 'Blog Preview Card',
            description: 'A blog preview card with interactive hover and focus states for all elements',
            link: 'https://cjmax10.github.io/blog-preview-card/'
        },
        {
            img: 'img/projects/qrcodecomponent.png',
            title: 'QR Code Component',
            description: 'A QR code component with accurate design and optimal layout using the provided starter code and style guide.',
            link: 'https://cjmax10.github.io/qr-code-component/'
        }
    ],
    [
        {
            img: 'img/projects/flixx-movie-app.png',
            title: 'Flixx Movie App',
            description: 'Flixx Movie App displays current releases and movie details using the TMDB API for search functionality',
            link: 'https://cjs-flixxapp.netlify.app/'
        },
        {
            img: 'img/projects/t-rexgame.png',
            title: 'T-Rex Game',
            description: 'A basic T-Rex game in JavaScript with core gameplay, ready for additional detailing and features.',
            link: 'https://cjmax10.github.io/t-rex-game/'
        },
        {
            img: 'img/projects/calculator.png',
            title: 'Calculator',
            description: 'A calculator built with JavaScript, featuring basic arithmetic operations as well as trigonometric functions (sin, cos, tan) for comprehensive calculations.',
            link: 'https://cjmax10.github.io/calculator/'
        },
        {
            img: 'img/projects/borderanimation.png',
            title: 'Border Animation Card',
            description: 'Border Animation Cards: Two cards with stylish border animations triggered on hover.',
            link: 'https://cjmax10.github.io/border-animations/'
        },
        {
            img: 'img/projects/infinitescrollanimation.png',
            title: 'Infinite Scroll Animation',
            description: 'A simple infinite animation scroller built with CSS and JavaScript, inspired by Kevin Powell\'s design',
            link: 'https://cjmax10.github.io/infinite-scroll-animation/'
        },
        {
            img: 'img/projects/hamburger-menu.jpg',
            title: 'Hamburger Menu',
            description: 'Hamburger menu created with pure CSS for a sleek, interactive navigation experience.',
            link: 'https://cjmax10.github.io/hamburger-menu-overlay/#'
        },
        {
            img: 'img/projects/typewriter.jpg',
            title: 'Typewritter Effect',
            description: 'JavaScript-based typewriter effect for simulating typing animations.',
            link: 'https://cjmax10.github.io/typewritter-effect/'
        },
        {
            img: 'img/projects/company-achiements.jpg',
            title: 'Company Achievement Timeline',
            description: 'A scroll-triggered timeline that reveals achievements as you navigate through the page.',
            link: 'https://cjmax10.github.io/campany-achievements-timeline/'
        },
        {
            img: 'img/projects/typicodetodos.png',
            title: 'Typicode Todos',
            description: 'Basic To-Do app using the Typicode API for task management.',
            link: 'https://cjmax10.github.io/Typicode-todos/'
        },
        {
            img: 'img/projects/shopping-list.png',
            title: 'Shopping List',
            description: 'Shopping List app built with JavaScript and local storage for managing and saving items',
            link: 'https://cjmax10.github.io/shopping-list/'
        },
        {
            img: 'img/projects/randomusergenerator.png',
            title: 'Random User Generator',
            description: 'Random User Generator utilizing the RandomUser API to create and display random user profiles.',
            link: 'https://cjmax10.github.io/random-user-generator/'
        },
        {
            img: 'img/projects/Chucknorrisjokes.png',
            title: 'Chucknorris Joke Generator',
            description: 'Chuck Norris Joke Generator using the api.chucknorris.io API to fetch and display random Chuck Norris jokes.',
            link: 'https://cjmax10.github.io/chucknorris-joke-generator/'
        }
    ],
    [
        {
            img: 'img/projects/capital-edge.jpg',
            title: 'Capital Edge',
            description: 'A demo website for a finance company showcasing financial services and insights.',
            link: 'https://cjmax10.github.io/capital-edge/'
        },
        {
            img: 'img/projects/newsgrid.jpg',
            title: 'News Grid Website',
            description: 'Demo NewsGrid website inspired by Brad Traversy\'s course, featuring a modern grid layout for news articles.',
            link: 'https://cjmax10.github.io/newsgrid_website/'
        },
        {
            img: 'img/projects/mochaaccounting.png',
            title: 'Mocha Accounting',
            description: 'Mocha Accounting website using JavaScript and CSS animations for dynamic financial management features.',
            link: 'https://cjmax10.github.io/mocha-accounting/'
        },
        {
            img: 'img/projects/youfirst.png',
            title: 'You First',
            description: 'A demo website showcasing banking services with user-friendly design and functionality.',
            link: 'https://cjmax10.github.io/you-first/'
        }
    ]
  ];
  
  const frontendmentor = document.getElementById("frontendmentor");
  const miniProjects = document.getElementById("miniProjects");
  const staticWebsites = document.getElementById("staticWebsites");
  const tabContent = document.getElementById("tab-content");
  
  function displayContent(items) {
    let listContent = "";
    for (const item of items) {
      listContent += `
        <div class="card">
            <img src="${item.img}" alt="">
            <div class="badge ${randomColor()}">${item.title}</div>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" class="btn"><i class="fa-solid fa-arrow-right-to-bracket"></i> Live Project</a>
        </div>
      `;
    }
    items.forEach((item) => {

    });

    
    const list = document.createElement("div");
    list.className = 'grid-section projects';
    tabContent.innerHTML = ""; // clear existing content
    list.innerHTML = listContent; // insert new content
    tabContent.append(list);
  }
  
  function highlightButton(btn) {
    // Clear all existing styling / highlights
    frontendmentor.className = "";
    miniProjects.className = "";
    staticWebsites.className = "";
    btn.className = "active"; // set new style / highlight
  }
  
  function handleClick(event) {
    const btnId = event.target.id;
    highlightButton(event.target);
    if (btnId === "frontendmentor") {
      displayContent(content[0]);
    } else if (btnId === "miniProjects") {
      displayContent(content[1]);
    } else {
      displayContent(content[2]);
    }
  }
  
  displayContent(content[0]); // initially show this content
  
  frontendmentor.addEventListener("click", handleClick);
  miniProjects.addEventListener("click", handleClick);
  staticWebsites.addEventListener("click", handleClick);
  