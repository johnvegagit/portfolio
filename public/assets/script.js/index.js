const imgUrl = "http://localhost/public_html/portfolio/public/assets/images/";

const userData = {
    name: "john vega",
    alt: "john vega photo",
    url: imgUrl + "profile/photo.jpg",
};

function checkWindow() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 360) {
        showHeaderMobile();
        document.querySelector("main").style.paddingTop = "40px ";
        document.querySelector("body").style.padding = "0px 10px";
        
    } else {
        showHeaderDesktop();
        document.querySelector("body").style.padding = "0px 40px";
        document.querySelector("main").style.paddingTop = "40px";
        // document.querySelector('.works-js').style.Width = "290px";
    }
}

checkWindow(addEventListener("resize", checkWindow));

function showHeaderMobile() {
    const urlProfile = "http://localhost/public_html/portfolio/public/assets/images/profile/photo.jpg";
    document.querySelector("header").innerHTML = `
    <div class="profile">
        <a href="${urlProfile}" target="_blank" rel="noopener noreferrer"><img src="${userData.url}" alt="${userData.alt}" sizes="50w" width="50"></a>
        <h2>${userData.name}</h2>
    </div>
    <div class="status-cvc">
        <span class="current-status" title="Disponible para la chamba"> <span class="status-dot"></span> <i class="bi bi-briefcase"></i></span>
        <a href="#" class="download-cvc" download="" title="descargar mi cvc"><i class="bi bi-cloud-arrow-down"></i> cvc</a> 
    </div>
    `;
}

function showHeaderDesktop() {
    const urlProfile = "http://localhost/public_html/portfolio/public/assets/images/profile/photo.jpg";
    document.querySelector("header").innerHTML = `
    <div class="profile">
        <a href="${urlProfile}" target="_blank" rel="noopener noreferrer"><img src="${userData.url}" alt="${userData.alt}" sizes="50w" width="50"></a>
        <div>
            <h2>${userData.name}</h2>
            <span class="current-status"> <span class="status-dot"></span> Available for work</span>
        </div>
    </div>
    <a href="#" class="download-cvc" download >download cvc</a>
    `;
}

// About me...
document.getElementById("about").innerHTML = `
    <ul>
        <li>Hello, my name John Wesley Lopez Vega a full-stack web developer & ux ui designer with 3 years of experience. Born in 1997 Bluefields Nicaragua.</li>
        <li>Bachelor as a Full-Stack web Developer & ux/ui Designer University of the Internet 2020 - Present</li>
    </ul>
`;

// My skills...
const skillsObj = [
    {
        name: "HTML",
        alt: "HTML",
        url: imgUrl + "icon/html.png",
    },

    {
        name: "CSS",
        alt: "CSS",
        url: imgUrl + "icon/css.png",
    },

    {
        name: "JAVASCRIPT",
        alt: "JAVASCRIPT",
        url: imgUrl + "icon/javascript.png",
    },

    {
        name: "PHP",
        alt: "PHP",
        url: imgUrl + "icon/php.png",
    },

    {
        name: "SQL",
        alt: "SQL",
        url: imgUrl + "icon/sql.png",
    },

    {
        name: "GIT",
        alt: "GIT",
        url: imgUrl + "icon/git.png",
    },

    {
        name: "GITHUB",
        alt: "GITHUB",
        url: imgUrl + "icon/github.png",
    },

    {
        name: "FIGMA",
        alt: "FIGMA",
        url: imgUrl + "icon/figma.png",
    },

    {
        name: "VS CODE",
        alt: "VS CODE",
        url: imgUrl + "icon/vscode.png",
    },
];

let skillsHTML = "";
for (let i = 0; i < skillsObj.length; i++) {
    const skills = skillsObj[i];
    skillsHTML += ` 
        <span class="icon-span"><img src="${skills.url}" alt="${skills.alt}" sizes="20w">${skills.name}</span>
    `;
}
document.getElementById("skills").innerHTML = skillsHTML;

// I'm learning...
const learningObj = [
    {
        name: "GRAPHQL",
        alt: "GRAPHQL",
        url: imgUrl + "icon/graphql.png",
    },

    {
        name: "BASH SCRIPT",
        alt: "BASH SCRIPT",
        url: imgUrl + "icon/bash.png",
    },

    {
        name: "REDIS",
        alt: "REDIS",
        url: imgUrl + "icon/redis.png",
    },

    {
        name: "PHP OOP",
        alt: "PHP OOP",
        url: imgUrl + "icon/php.png",
    },

    {
        name: "COMPOSER",
        alt: "COMPOSER",
        url: imgUrl + "icon/composer.png",
    },

    {
        name: "MONGODB",
        alt: "MONGODB",
        url: imgUrl + "icon/mongodb.png",
    },

    {
        name: "DOCKER",
        alt: "DOCKER",
        url: imgUrl + "icon/docker.png",
    },

    {
        name: "KUBERNETES",
        alt: "KUBERNETES",
        url: imgUrl + "icon/kubernetes.png",
    },

    {
        name: "DOCTRINE ORM",
        alt: "DOCTRINE ORM",
        url: imgUrl + "icon/doctrine.png",
    },
];

let learningHTML = "";
for (let i = 0; i < learningObj.length; i++) {
    const learn = learningObj[i];
    learningHTML += ` 
        <span class="icon-span"><img src="${learn.url}" alt="${learn.alt}" sizes="20w">${learn.name}</span>
    `;
}
document.getElementById("learning").innerHTML = learningHTML;

// experience...
const experiences = [
    {
        title: "Front-End Web Developer ALFANUMERIC S.A.",
        subtitle_1: "<li>Developed responsive websites using HTML, CSS, JavaScript and Bootstrap.</li>",
        subtitle_2: "<li>Worked with Visual Studio, SASS, C#, razor pages and ASP.NET.</li>",
    },

    {
        title: "Full-stack Free-lance web Development",
        subtitle_1: "<li>Developed responsive websites using HTML, CSS, JavaScript and Bootstrap.</li>",
        subtitle_2: "<li>Worked gaspi Studio, SASS, C#, razor pages and ASP.NET.</li>",
    },

    {
        title: "Full-stack Free-lance web Development",
        subtitle_1: "<li>Developed responsive websites using HTML, CSS, JavaScript and Bootstrap.</li>",
        subtitle_2: "<li>Worked gaspi Studio, SASS, C#, razor pages and ASP.NET.</li>",
        subtitle_3: "<li>Worked gaspi Studio, SASS, C#, razor pages and ASP.NET.</li>",
    }
];

let expHTML = "";
let idCount = 0;

for (let i = 0; i < experiences.length; i++) {
    const exp = experiences[i];
    idCount++;
    expHTML += `
        <div class="experience-js" data-id="${idCount}">
            <h2>${exp.title}</h2>
            <ul class="read-more-ul" data-ul="${idCount}" >${exp.subtitle_1}${exp.subtitle_2}${exp.subtitle_3}</ul>
            <button class="read-more-btn" data-id="${idCount}">read more <i class="bi bi-chevron-down"></i></button>
        </div>
    `;
}
document.getElementById("experience").innerHTML = expHTML;

// Read more...
const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const parent = btn.parentNode;
        readMore(parent);
    });
});

function readMore(parent) {
    const parentUl = parent.querySelector('ul').clientHeight;
    console.log(parentUl);
    if (parentUl === 100) {
        parent.querySelector("ul").style.height = "auto";
        parent.querySelector("button").innerHTML = `read more <i class="bi bi-chevron-up"></i>`;
    } else {
        parent.querySelector("ul").style.height = "100px";
        parent.querySelector("button").innerHTML = `read more <i class="bi bi-chevron-down"></i>`;
    }
}

// project...
const projects = [
    {
        title: "Ejercicio simple de una peticion post a través de php con ajax",
        url: "https://github.com/",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },

    {
        title: "Ejercicio simple de una peticion post a través de php con ajax",
        url: "https://github.com/",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },

    {
        title: "Ejercicio simple de una peticion post a través de php con ajax",
        url: "https://github.com/",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    }
];

let projectHTML = "";
for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    projectHTML += `
        <div class="project-js">
            <h2>${project.title}</h2>
            <a href="${project.url}">${project.urlname}</a>
        </div>
    `;
}
document.getElementById("project").innerHTML = projectHTML;

// works...
const worksObj = [
    {
        imgUrl: imgUrl + "works/work-01.png",
        alt: "image alt name",
        title: "jensipiñatas.com",
        url: "https://github.com/",
        caseStudy: "https://github.com/",
        icon_1: "<i class='bi bi-arrow-up-right'></i>",
        icon_2: "<i class='bi bi-eye-fill'></i>",
    },

    {
        imgUrl: imgUrl + "works/work-02.png",
        alt: "image alt name",
        title: "jensipiñatas.com",
        url: "https://github.com/",
        caseStudy: "https://github.com/",
        icon_1: "<i class='bi bi-arrow-up-right'></i>",
        icon_2: "<i class='bi bi-eye-fill'></i>",
    },

    {
        imgUrl: imgUrl + "works/work-03.png",
        alt: "image alt name",
        title: "jensipiñatas.com",
        url: "https://github.com/",
        caseStudy: "https://github.com/",
        icon_1: "<i class='bi bi-arrow-up-right'></i>",
        icon_2: "<i class='bi bi-eye-fill'></i>",
    },

    {
        imgUrl: imgUrl + "works/work-04.png",
        alt: "image alt name",
        title: "jensipiñatas.com",
        url: "https://github.com/",
        caseStudy: "https://github.com/",
        icon_1: "<i class='bi bi-arrow-up-right'></i>",
        icon_2: "<i class='bi bi-eye-fill'></i>",
    },

];

let worksHTML = "";
for (let i = 0; i < worksObj.length; i++) {
    const works = worksObj[i];
    worksHTML += `
        <div class="works-js">
            <img class="works-img-js" src="${works.imgUrl}" alt="${works.alt}" sizes="246w" width="246">
            <div class="works-info">
                <a class="a-works-img-icon" href="${works.url}" ><img class="works-img-icon" src="" alt="" sizes="5w" width="5px"> ${works.title} ${works.icon_1}</a>
                <a class="a-works-img-case-study" href="${works.caseStudy}" >${works.icon_2}</a>
            </div>
        </div>
    `;
}
document.getElementById("works").innerHTML = worksHTML;

// My contact...
const contactObj = [
    {
        name: "dribbble",
        alt: "dribbble",
        url: imgUrl + "icon/dribbble.png",
        link: "https://dribbble.com/"
    },

    {
        name: "linkedin",
        alt: "linkedin",
        url: imgUrl + "icon/linkedin.png",
        link: "https://linkedin.com/"
    },

    {
        name: "github",
        alt: "github",
        url: imgUrl + "icon/github.png",
        link: "https://github.com/"
    },

    /*{
        name: "hello@johnvega.dev",
        alt: "hello@johnvega.dev",
        url:  imgUrl + "icon/email.png"
    },*/
];

let contactHTML = "";
for (let i = 0; i < contactObj.length; i++) {
    const contact = contactObj[i];
    contactHTML += ` 
        <a href="${contact.link}"><span class="contact-item"><img src="${contact.url}" size="20w" > ${contact.name}</span></a> 
    `;
}
document.getElementById("contact").innerHTML = contactHTML;
