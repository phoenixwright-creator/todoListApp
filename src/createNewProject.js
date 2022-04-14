let id = 0;
const allProjects = [];

class Project {
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = 'March 2023';
        this.priority = 'Low';
    }
}

export function createNewProject(id, title, description){
    const newProject = new Project(id, title, description);
    id++;
    allProjects.push(newProject);
    displayProjects();
}

function displayProjects(){
    const allProjectsDiv = document.getElementById('allProjectsDiv');
    if(allProjectsDiv){
        while(allProjectsDiv.firstChild){
            allProjectsDiv.removeChild(allProjectsDiv.firstChild);
        }
    }
    for(let project in allProjects){
        allProjectsDiv.appendChild(createCard(allProjects[project].id, allProjects[project].title, allProjects[project].description));
    }
}

function createCard(projectId, projectTitle, projectDescription){

    const projectDiv = document.createElement('div');
    projectDiv.id = projectId;
    projectDiv.className = 'card';

    const title = document.createElement('h3');
    title.innerHTML = projectTitle;
    projectDiv.appendChild(title);

    const description = document.createElement('p');
    description.innerHTML = projectDescription;
    projectDiv.appendChild(description);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttonsDiv';

    const goToBtn = document.createElement('button');
    goToBtn.id = projectId;
    goToBtn.className = 'goTo';
    goToBtn.innerHTML = 'Go to project';
    buttonsDiv.appendChild(goToBtn);

    const modifyBtn = document.createElement('button');
    modifyBtn.id = projectId;
    modifyBtn.className = 'modify';
    modifyBtn.innerHTML = 'Modify details';
    buttonsDiv.appendChild(modifyBtn);
    modifyBtn.onclick = modifyCard;

    const deleteBtn = document.createElement('button');
    deleteBtn.id = projectId;
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = 'Delete project';
    buttonsDiv.appendChild(deleteBtn);
    deleteBtn.onclick = deleteCard;

    projectDiv.appendChild(buttonsDiv);

    return projectDiv;
}

function deleteCard(event){
    for(let project in allProjects){
        if(allProjects[project].id == event.target.id){
            allProjects.splice(project, 1);
            break;
        }
    }
    displayProjects();
}

function modifyCard(event){
    const modificationDiv = document.getElementById('modificationDiv');
    modificationDiv.style.display = 'flex';
}

export function cancelCreation(){
    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');
    newProjectInfoDiv.style.display = 'none';
}

export function validateCreation(){
    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');
    newProjectInfoDiv.style.display = 'none';
    const titleInput = document.getElementById('titleInput').value;
    const descriptionArea = document.getElementById('description').value;
    createNewProject(id, titleInput, descriptionArea);
}

export function displayCreationForm(){
    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');
    newProjectInfoDiv.style.display = 'flex';
    const titleInput = document.getElementById('titleInput');
    titleInput.value = '';
    const descriptionArea = document.getElementById('description');
    descriptionArea.value = '';
}