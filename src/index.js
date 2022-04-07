import './styles.css';
import Logo from './todoLogo.png';

let id = 1;

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

function addNewProjectButton(){
    const newProjectDiv = document.createElement('div');
    newProjectDiv.id = 'newProjectDiv';

    const newProjectButton = document.createElement('button');
    newProjectButton.id = 'newProjectButton';
    newProjectButton.innerHTML = 'New Project';
    newProjectDiv.appendChild(newProjectButton);
    
    return newProjectDiv;
}

function createNewProject(){
    const allProjectsDiv = document.getElementById('allProjectsDiv');
    allProjectsDiv.appendChild(createCard(id));
    id++;
    const allCards = document.querySelectorAll('.card');
    console.log(allCards);
}

function createCard(id){
    
    const project = document.createElement('div');
    project.id = 'project' + id;
    project.className = 'card';
    
    const title = document.createElement('h3');
    title.id = 'title' + id;
    title.innerHTML = 'Project ' + id;
    project.appendChild(title);

    const summary = document.createElement('p');
    summary.id = 'summary' + id;
    summary.innerHTML = 'This is the description of the project ' + id;
    project.appendChild(summary);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons' + id;
    buttonsDiv.className = 'buttonsDiv';

    const goToBtn = document.createElement('button');
    goToBtn.id = 'goTo' + id;
    goToBtn.className = 'cardButton goTo';
    goToBtn.innerHTML = 'Go to project';
    buttonsDiv.appendChild(goToBtn);

    const modifyBtn = document.createElement('button');
    modifyBtn.id = 'modify' + id;
    modifyBtn.className = 'cardButton modify';
    modifyBtn.innerHTML = 'Modify details';
    buttonsDiv.appendChild(modifyBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete' + id;
    deleteBtn.className = 'cardButton delete';
    deleteBtn.innerHTML = 'Delete project';
    buttonsDiv.appendChild(deleteBtn);

    project.appendChild(buttonsDiv);

    return project;
}

function displayAllProjects(){
    const allProjectsDiv = document.createElement('div');
    allProjectsDiv.id = 'allProjectsDiv';

    allProjectsDiv.appendChild(createCard(id));
    id++;

    allProjectsDiv.appendChild(createCard(id));
    id++;

    return allProjectsDiv;
}

document.getElementById('content').appendChild(addHeader());
document.getElementById('content').appendChild(addProjectTabs());
document.getElementById('content').appendChild(addNewProjectButton());
document.getElementById('content').appendChild(displayAllProjects());
document.getElementById('newProjectButton').addEventListener('click', createNewProject);
