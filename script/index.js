const imgUrl = "https://johnvegagit.github.io/portfolio/images/";


const userData = {
    name: "john vega",
    alt: "john vega photo",
    url: "https://avatars.githubusercontent.com/u/162820808?s=400&u=2148e58b6935ba2104ebf98f1d5385011543f090&v=4",
};

function checkWindow() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1000) {
        showHeaderMobile();
        document.querySelector("body").style.padding = "10px";
        document.querySelector("main").style.paddingTop = "10px";
        
    } else {
        showHeaderDesktop();
        document.querySelector("body").style.padding = "40px";
        document.querySelector("main").style.paddingTop = "40px";
    }
}

checkWindow(addEventListener("resize", checkWindow));

function showHeaderMobile() {
    const urlProfile = "https://avatars.githubusercontent.com/u/162820808?s=400&u=2148e58b6935ba2104ebf98f1d5385011543f090&v=4";
    document.querySelector("header").innerHTML = `
    <div class="profile">
        <a class="profile-img" href="${urlProfile}" target="_blank" rel="noopener noreferrer"><img src="${userData.url}" alt="${userData.alt}" sizes="50w" width="50"></a>
        <h2>${userData.name}</h2>
    </div>
    <div class="status-cvc">
        <span class="current-status" title="Disponible para la chamba"> <span class="status-dot"></span> <i class="bi bi-briefcase-fill"></i> </span>
        <a href="http://localhost/public_html/portfolio/pdf/john-vega-cv.pdf" class="download-cvc" download="john-vega-cv.pdf" title="descargar mi cvc"><i class="bi bi-file-text"></i> cv</a> 
    </div>
    `;
}

function showHeaderDesktop() {
    const urlProfile = "https://avatars.githubusercontent.com/u/162820808?s=400&u=2148e58b6935ba2104ebf98f1d5385011543f090&v=4";
    document.querySelector("header").innerHTML = `
    <div class="profile">
        <a class="profile-img" href="${urlProfile}" target="_blank" rel="noopener noreferrer"><img src="${userData.url}" alt="${userData.alt}" sizes="50w" width="50"></a>
        <h2>${userData.name}</h2>
    </div>
    <ul id="nav-link-menu">
        <li><a class="header-menu-link" href="https://github.com/johnvegagit" ><i class="bi bi-github"></i></a></li>
        <li><a class="header-menu-link" href="https://www.linkedin.com/in/johnvegadev/" ><i class="bi bi-linkedin"></i></a></li>
        <li><a class="header-menu-link" href="mailto:johnvegauser@gmail.com"><i class="bi bi-envelope-at-fill"></i></a>
        </li>
    </ul>
    <div class="status-cvc">
        <span class="current-status" title="Disponible para la chamba"> <span class="status-dot"></span> <i class="bi bi-briefcase-fill"></i> </span>
        <a href="http://localhost/public_html/portfolio/pdf/john-vega-cv.pdf" class="download-cvc" download="john-vega-cv.pdf" title="descargar mi cvc"><i class="bi bi-file-text"></i> cv</a> 
    </div>
    `;
}

// About me...
document.querySelector(".about-main").innerHTML = `
<p>
¡Hola! Soy John Wesley López Vega, desarrollador de aplicaciones web (Web App Dev) autodidacta con más de cuatro años de experiencia. Desde 2021, he estado inmerso en el mundo del desarrollador de aplicaciones web (Web App Dev) , explorando tecnologías como JavaScript y PHP.
</p>
<p>
Durante mi trayectoria, he trabajado en una variedad de proyectos personales que han sido fundamentales para mi desarrollo profesional. Estos proyectos no solo han consolidado mis habilidades técnicas, sino que también han demostrado mi capacidad para crear aplicaciones web funcionales.
</p>
<p>
Actualmente, mi enfoque se centra en mejorar mis habilidades en la gestión de dependencias mediante el uso de Composer. Estoy convencido de que una gestión de dependencias eficiente es esencial para la productividad y el mantenimiento de proyectos a largo plazo.
</p>
<p>
Además, me encuentro inmerso en el aprendizaje de la programación orientada a objetos en PHP. Reconozco la importancia de escribir código estructurado y reutilizable, y estoy comprometido en profundizar mis conocimientos en este ámbito.
</p>
<p>
Por último, me encanta explorar el mundo de Linux y su potencial en el desarrollador de aplicaciones web (Web App Dev). Actualmente, estoy familiarizándome con herramientas como BASH y NANO, las cuales me permiten trabajar de manera más eficiente y potenciar mis habilidades como desarrollador.
</p>
<p>
Estoy emocionado por las oportunidades de colaboración en la industria del desarrollador de aplicaciones web (Web App Dev) y estoy ansioso por seguir ampliando mis conocimientos y habilidades en este apasionante campo.
</p>
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
        title: "php mvc framework (oop,mvc)",
        url: "https://github.com/johnvegagit/php-mvc-framework",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },
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

// Get year for footer...
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;