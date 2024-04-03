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
    <p>¡Hola! Soy John Wesley López Vega, un desarrollador web full-stack autodidacta con experiencia desde 2021.</p>
    <p>Durante los últimos cuatro años, he explorado tecnologías como JavaScript y PHP, creando proyectos personales que demuestran mi capacidad para desarrollar aplicaciones web.</p>
    <p>Estoy entusiasmado con la colaboración en la industria del desarrollo web y actualmente estoy ampliando mis habilidades en Composer para una gestión de dependencias más eficiente. Además, estoy profundizando en la programación orientada a objetos en PHP para escribir código más estructurado y reutilizable.</p>
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
    /*{
        name: "PYTHON",
        alt: "PYTHON",
        url: imgUrl + "icon/python.png",
    },*/

    {
        name: "BASH",
        alt: "BASH",
        url: imgUrl + "icon/bash.png",
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
        name: "NANO",
        alt: "NANO",
        url: imgUrl + "icon/nano.png",
    },

    {
        name: "LINUX",
        alt: "LINUX",
        url: imgUrl + "icon/linux.png",
    }
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
        title: "php mvc framework (oop)",
        url: "https://github.com/",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },

    {
        title: "php login system (oop,mvc)",
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

// My contact...
const contactObj = [
    {
        name: "linkedin",
        alt: "linkedin",
        url: imgUrl + "icon/linkedin.png",
        link: "https://www.linkedin.com/in/johnvegadev/"
    },

    {
        name: "github",
        alt: "github",
        url: imgUrl + "icon/github.png",
        link: "https://github.com/johnvegagit"
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
