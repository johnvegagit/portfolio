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

// My Design...
const DesignObj = [
    {   
        imgUrl: imgUrl + "design/work-01.png",
        alt: "The esxpreso company",
        title: "The expreso company",
        url: "https://dribbble.com",
        icon: "<i class='bi bi-arrow-up-right'></i>"
    },

    {
        imgUrl: imgUrl + "design/work-02.png",
        alt: "Jensy piñatas",
        title: "Jensy piñatas",
        url: "https://dribbble.com",
        icon: "<i class='bi bi-arrow-up-right'></i>"
    },

    {
        imgUrl: imgUrl + "design/work-03.png",
        alt: "Redisign Curacao nicaragua",
        title: "Redisign Curacao nicaragua",
        url: "https://dribbble.com",
        icon: "<i class='bi bi-arrow-up-right'></i>"
    },

    {
        imgUrl: imgUrl + "design/work-04.png",
        alt: "Pagina web de Viajes",
        title: "Pagina web de Viajes",
        url: "https://dribbble.com",
        icon: "<i class='bi bi-arrow-up-right'></i>"
    },
];

let designHtml = "";
for (let i = 0; i < DesignObj.length; i++) {
    const designs = DesignObj[i];
    console.log(designs);
    designHtml += `
    <div class="design-js">
        <img class="design-img-js" src="${designs.imgUrl}" alt="${designs.alt}" sizes="246w" width="246">
        <a class="design-link" href="${designs.url}">${designs.title} ${designs.icon}</a>
    </div>
    `;
}
document.getElementById('design').innerHTML = designHtml;

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
];

let contactHTML = "";
for (let i = 0; i < contactObj.length; i++) {
    const contact = contactObj[i];
    contactHTML += ` 
        <a href="${contact.link}"><span class="contact-item"><img src="${contact.url}" size="20w" > ${contact.name}</span></a> 
    `;
}
document.getElementById("contact").innerHTML = contactHTML;
