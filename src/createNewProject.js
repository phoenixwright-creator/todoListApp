let id = 0;
const allProjects = [];

class Project {
    constructor(id){
        this.id = id;
        this.title = 'Project ' + id;
        this.description = 'This is the description of the Project ' + id;
        this.dueDate = 'March 2023';
        this.priority = 'Low';
    }
}

export function createNewProject(){
    const newProject = new Project(id);
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
    goToBtn.className = 'goTo';
    goToBtn.innerHTML = 'Go to project';
    buttonsDiv.appendChild(goToBtn);

    const modifyBtn = document.createElement('button');
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
    
}