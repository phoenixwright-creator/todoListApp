import './styles.css';
import Logo from './todoLogo.png';
import {cancelCreation, displayProjects, displayCreationForm, validateCreationMouse, validateCreationKeyboard, displayAllProjects} from './createNewProject.js';

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
    allProjects.className = 'links';
    allProjects.innerHTML = 'All Projects';
    allProjects.onclick = displayAllProjects;
    nav.appendChild(allProjects);

    content.appendChild(nav);

    const newProjectDiv = document.createElement('div');
    newProjectDiv.id = 'newProjectDiv';

    const newProjectButton = document.createElement('button');
    newProjectButton.id = 'newProjectButton';
    newProjectButton.innerHTML = 'New Project';
    newProjectButton.onclick = displayCreationForm;
    newProjectDiv.appendChild(newProjectButton);

    content.appendChild(newProjectDiv);

    const allProjectsDiv = document.createElement('div');
    allProjectsDiv.id = 'allProjectsDiv';

    content.appendChild(allProjectsDiv);

    const newProjectInfoDiv = document.createElement('div');
    newProjectInfoDiv.id = 'newProjectInfoDiv';
    const newProjectInfoForm = document.createElement('div');
    newProjectInfoForm.id = 'newProjectInfoForm';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'titleInput';
    const titleLabel = document.createElement('label');
    titleLabel.innerHTML = 'Title';
    titleLabel.htmlFor = 'titletitleInput';
    const descriptionArea = document.createElement('textarea');
    descriptionArea.id = 'description';
    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerHTML = 'Description';
    descriptionLabel.htmlFor = 'description';
    const validate = document.createElement('button');
    validate.id = 'validate';
    validate.innerHTML = 'Validate';
    validate.onclick = validateCreationMouse;
    newProjectInfoForm.onkeyup = validateCreationKeyboard;
    const cancel = document.createElement('button');
    cancel.id = 'cancel';
    cancel.innerHTML = 'Cancel';
    cancel.onclick = cancelCreation;

    content.appendChild(newProjectInfoDiv);
    newProjectInfoDiv.appendChild(newProjectInfoForm);
    newProjectInfoForm.appendChild(titleLabel);
    newProjectInfoForm.appendChild(titleInput);
    newProjectInfoForm.appendChild(descriptionLabel);
    newProjectInfoForm.appendChild(descriptionArea);
    newProjectInfoForm.appendChild(validate);
    newProjectInfoForm.appendChild(cancel);

    return content;
}

document.body.appendChild(createTemplate());

displayProjects();