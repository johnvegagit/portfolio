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
        title: "PHP framework",
        url: "https://github.com/johnvegagit/framework-v1",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },
    {
        title: "Search ajax php",
        url: "https://github.com/johnvegagit/search-ajax-php",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },
    {
        title: "Dinamic slide gallery js/php",
        url: "https://github.com/johnvegagit/dinamic-slide-gallery",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },
    {
        title: "Data validation ajax/php",
        url: "https://github.com/johnvegagit/ajax-data-valid",
        urlname: "<i class='bi bi-github'></i> view project <i class='bi bi-arrow-up-right'></i>",
    },
    {
        title: "Password generator python",
        url: "https://github.com/johnvegagit/python-pwd-generator",
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

    {
        name: "COMPOSER",
        alt: "COMPOSER",
        url: imgUrl + "icon/composer.png",
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
        name: "NANO",
        alt: "NANO",
        url: imgUrl + "icon/nano.png",
    },

    {
        name: "LINUX",
        alt: "LINUX",
        url: imgUrl + "icon/linux.png",
    },

    {
        name: "PYTHON",
        alt: "PYTHON",
        url: imgUrl + "icon/python.png",
    },
];

let learningHTML = "";
for (let i = 0; i < learningObj.length; i++) {
    const learn = learningObj[i];
    learningHTML += ` 
        <span class="icon-span"><img src="${learn.url}" alt="${learn.alt}" sizes="20w">${learn.name}</span>
    `;
}
document.getElementById("my-learn").innerHTML = learningHTML;

// I'm intres to learn...
const intresLearnObj = [
    {
        name: "VUEJS",
        alt: "VUEJS",
        url: imgUrl + "icon/vuejs.png",
    },

    {
        name: "SYMFONY",
        alt: "SYMFONY",
        url: imgUrl + "icon/symfony.png",
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
    Hello! I'm John Wesley López Vega, a passionate web application developer with over four years of experience.
    Since 2021, I have been dedicated to mastering the art of web development, focusing primarily on technologies like JavaScript and PHP.
</p>
<p>
    I chose to learn PHP due to its user-friendly nature and the convenience it offers for hosting web applications.
    This decision has allowed me to build a solid foundation in web development, making the process both effective and enjoyable.
</p>
<p>
    Throughout my journey, I have worked on a variety of personal projects that have significantly enhanced my skills.
    These projects reflect my ability to create functional and efficient web applications, which are key to my professional development.
</p>
<p>
    Currently, I'm expanding my horizons by learning Python, driven by my interest in cybersecurity.
    I believe Python is a versatile and powerful language, making it an ideal gateway into the exciting world of cybersecurity.
</p>
<p>
    In addition to web development, I have a strong interest in Linux and its potential.
    I am exploring tools like BASH and NANO, which help me work more efficiently and enhance my development capabilities.
</p>
<p>
    I am also eager to deepen my knowledge in advanced technologies such as Symfony, Vue.js, Docker, and Kubernetes. 
    I believe that mastering these tools is essential for developing large-scale, robust web applications.
    Symfony provides a powerful framework for building complex applications, Vue.js offers flexibility and ease for creating dynamic user interfaces,
    while Docker and Kubernetes facilitate seamless deployment and management of applications in diverse environments.
</p>
<p>
    I am excited about the opportunity to collaborate with others in the web development industry and continually expand my knowledge and skills.
    The world of technology is ever-evolving, and I am enthusiastic about being an active part of this dynamic field.
</p>
`;