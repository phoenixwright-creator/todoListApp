import './styles.css';
import Logo from './todoLogo.png';
import {createNewProject, cancelModification} from './createNewProject.js';

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

    const modificationDiv = document.createElement('div');
    modificationDiv.id = 'modificationDiv';
    const modificationForm = document.createElement('div');
    modificationForm.id = 'modificationForm';
    const modificationLabel = document.createElement('h3');
    modificationLabel.innerHTML = 'What do you want to modify on this project ?';
    const titleRadio = document.createElement('input');
    titleRadio.type = 'radio';
    titleRadio.id = 'title';
    titleRadio.name = 'modification';
    titleRadio.value = 'title';
    titleRadio.checked = true;
    const titleLabel = document.createElement('label');
    titleLabel.innerHTML = 'Title';
    titleLabel.htmlFor = 'title';
    const descriptionRadio = document.createElement('input');
    descriptionRadio.type = 'radio';
    descriptionRadio.id = 'description';
    descriptionRadio.name = 'modification';
    descriptionRadio.value = 'description';
    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerHTML = 'Description';
    descriptionLabel.htmlFor = 'description';
    const cancel = document.createElement('button');
    cancel.id = 'cancel';
    cancel.innerHTML = 'Cancel';
    cancel.onclick = cancelModification;

    content.appendChild(modificationDiv);
    modificationDiv.appendChild(modificationForm);
    modificationForm.appendChild(modificationLabel);
    modificationForm.appendChild(titleLabel);
    titleLabel.appendChild(titleRadio);
    modificationForm.appendChild(descriptionLabel);
    descriptionLabel.appendChild(descriptionRadio);
    modificationForm.appendChild(cancel);

    return content;
}

document.body.appendChild(createTemplate());
document.getElementById('newProjectButton').addEventListener('click', createNewProject);