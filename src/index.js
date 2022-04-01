import './styles.css';
import Logo from './todoLogo.png';

function addHeader(){
    const header = document.createElement('header');
    header.id = 'header';
    header.appendChild(addLogo());
    header.appendChild(addAppName());
    return header;
}

function addLogo(){
    const logo = new Image();
    logo.id = 'logo';
    logo.src = Logo;
    return logo;
}

function addAppName(){
    const name = document.createElement('span');
    name.id = 'appName';
    name.innerHTML = 'My Todo App'.toUpperCase();
    return name;
}

function addProjectTabs(){
    const nav = document.createElement('nav');
    nav.id = 'nav';
    const allProjects = document.createElement('div');
    allProjects.id = 'allNav';
    allProjects.innerHTML = 'All Projects';
    nav.appendChild(allProjects);
    const project1 = document.createElement('div');
    project1.id = 'project1Nav';
    project1.innerHTML = 'Project 1';
    nav.appendChild(project1);
    const project2 = document.createElement('div');
    project2.id = 'project2Nav';
    project2.innerHTML = 'Project 2';
    nav.appendChild(project2);
    const newProject = document.createElement('div');
    newProject.id = 'newProject';
    newProject.innerHTML = 'New Project';
    nav.appendChild(newProject);
    return nav;
}

function displayAllProjects(){
    const allProjectsDiv = document.createElement('div');
    allProjectsDiv.id = 'allProjectsDiv';

    const project1 = document.createElement('div');
    project1.id = 'project1card';
    project1.className = 'card';
    allProjectsDiv.appendChild(project1);

    const project2 = document.createElement('div');
    project2.id = 'project2card';
    project2.className = 'card';
    allProjectsDiv.appendChild(project2);

    return allProjectsDiv;
}


document.getElementById('content').appendChild(addHeader());
document.getElementById('content').appendChild(addProjectTabs());
document.getElementById('content').appendChild(displayAllProjects());