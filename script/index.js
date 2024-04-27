const imgUrl = "https://johnvegagit.github.io/portfolio/images/";
//const imgUrl = "http://localhost/public_html/portfolio/images/";


function showContent(evt, content) {
    
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(content).style.display = "grid";
    evt.currentTarget.className += " active";

};

document.getElementById("defaultOpen").click();

// project...
const projects = [
    {
        title: "php mvc framework (oop,mvc)",
        url: "https://github.com/johnvegagit/php-mvc-framework",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },
    {
        title: "php framework new version",
        url: "https://github.com/johnvegagit/framework-v1",
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
document.getElementById("countPro").innerHTML = "(" + projects.length + ")";

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

document.getElementById("my-skills").innerHTML = skillsHTML;

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
document.getElementById("my-learn").innerHTML = learningHTML;

// I'm learning...
const intresLearnObj = [
    {
        name: "PYTHON",
        alt: "PYTHON",
        url: imgUrl + "icon/python.png",
    },

    {
        name: "MONGODB",
        alt: "MONGODB",
        url: imgUrl + "icon/mongodb.png",
    },

    {
        name: "GRAHPQL",
        alt: "GRAHPQL",
        url: imgUrl + "icon/grahpql.png",
    },

    {
        name: "DOCTRINE",
        alt: "DOCTRINE",
        url: imgUrl + "icon/doctrine.png",
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
    }
];

let intresLearnHTML = "";
for (let i = 0; i < intresLearnObj.length; i++) {
    const learn = intresLearnObj[i];
    intresLearnHTML += ` 
        <span class="icon-span"><img src="${learn.url}" alt="${learn.alt}" sizes="20w">${learn.name}</span>
    `;
}
document.getElementById("my-exper").innerHTML = intresLearnHTML;

// About me...
document.getElementById("about").innerHTML = `
<p>
    ¡Hola! Soy John Wesley López Vega, desarrollador de aplicaciones web (Web App Dev) autodidacta con más de cuatro años
    de experiencia. Desde 2021, he estado inmerso en el mundo del desarrollador de aplicaciones web (Web App Dev) , explorando tecnologías como JavaScript y PHP.
</p>
<p>
    Durante mi trayectoria, he trabajado en una variedad de proyectos personales que han sido fundamentales para mi desarrollo profesional.
    Estos proyectos no solo han consolidado mis habilidades técnicas, sino que también han demostrado mi capacidad para crear aplicaciones web funcionales.
</p>
<p>
    Actualmente, mi enfoque se centra en mejorar mis habilidades en la gestión de dependencias mediante el uso de Composer.
    Estoy convencido de que una gestión de dependencias eficiente es esencial para la productividad y el mantenimiento de proyectos a largo plazo.
</p>
<p>
    Además, me encuentro inmerso en el aprendizaje de la programación orientada a objetos en PHP.
    Reconozco la importancia de escribir código estructurado y reutilizable, y estoy comprometido en profundizar mis conocimientos en este ámbito.
</p>
<p>
    Por último, me encanta explorar el mundo de Linux y su potencial en el desarrollador de aplicaciones web (Web App Dev).
    Actualmente, estoy familiarizándome con herramientas como BASH y NANO, las cuales me permiten trabajar de manera más eficiente y potenciar mis habilidades como desarrollador.
</p>
<p>
    Estoy emocionado por las oportunidades de colaboración en la industria del desarrollador de aplicaciones web (Web App Dev) y estoy ansioso por seguir ampliando mis
    conocimientos y habilidades en este apasionante campo.
</p>
`;