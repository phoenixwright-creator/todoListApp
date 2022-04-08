import './styles.css';
import Logo from './todoLogo.png';
import {createNewProject} from './createNewProject.js';

function createTemplate(){
    const content = document.getElementById('content');

    const header = document.createElement('header');
    header.id = 'header';

    const logo = new Image();
    logo.id = 'logo';
    logo.src = Logo;
    header.appendChild(logo);

    const name = document.createElement('span');
    name.id = 'appName';
    name.innerHTML = 'My Todo App'.toUpperCase();
    header.appendChild(name);

    content.appendChild(header);

    const nav = document.createElement('nav');
    nav.id = 'nav';
    const allProjects = document.createElement('div');
    allProjects.id = 'allNav';
    allProjects.innerHTML = 'All Projects';
    nav.appendChild(allProjects);

    content.appendChild(nav);

    const newProjectDiv = document.createElement('div');
    newProjectDiv.id = 'newProjectDiv';

    const newProjectButton = document.createElement('button');
    newProjectButton.id = 'newProjectButton';
    newProjectButton.innerHTML = 'New Project';
    newProjectDiv.appendChild(newProjectButton);

    content.appendChild(newProjectDiv);

    const allProjectsDiv = document.createElement('div');
    allProjectsDiv.id = 'allProjectsDiv';

    content.appendChild(allProjectsDiv);

    return content;
}

document.body.appendChild(createTemplate());
document.getElementById('newProjectButton').addEventListener('click', createNewProject);