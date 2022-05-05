
export class Project {
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = 'March 2023';
        this.priority = 'Low';
        this.tasks = [];
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getDescription(){
        return this.description;
    }
    getTasks(){
        return this.tasks;
    }
}

let index = 0;
const allProjects = [];
const projectCreated = localStorage.getItem('projectCreated');
if(projectCreated){
    const numberOfProjects = localStorage.getItem('numberOfProjects');
    index = Number(numberOfProjects)+1;
    for(let i=0; i<=numberOfProjects; i++){
        const projectId = localStorage.getItem(`id${i}`);
        const projectTitle = localStorage.getItem(`title${i}`);
        const projectDescription = localStorage.getItem(`description${i}`);
        if(projectId){
            const newProject = new Project(projectId, projectTitle, projectDescription);
            allProjects.push(newProject);
        }
    }
    
}
let currentProjectOpen = undefined;

export function createNewProject(id, title, description){
    const newProject = new Project(id, title, description);
    if(!localStorage.getItem('projectCreated')){
        localStorage.setItem('projectCreated', true);
    }
    allProjects.push(newProject);
    localStorage.setItem(`id${id}`, newProject.id);
    localStorage.setItem(`title${id}`, newProject.title);
    localStorage.setItem(`description${id}`, newProject.description);
    localStorage.setItem('numberOfProjects', id);
    
    
    displayProjects();
}

export function displayProjects(){
    const allProjectsDiv = document.getElementById('allProjectsDiv');
    if(allProjectsDiv!==null){
        while(allProjectsDiv.firstChild){
            allProjectsDiv.removeChild(allProjectsDiv.firstChild);
        }
    }
    for(let project in allProjects){
        if(allProjects[project]!=='projectDeleted'){
            const projectId = localStorage.getItem(`id${project}`);
            const projectTitle = localStorage.getItem(`title${project}`);
            const projectDescription = localStorage.getItem(`description${project}`);
            allProjectsDiv.appendChild(createCard(projectId, projectTitle, projectDescription));
        }   
    }
}

export function createCard(projectId, projectTitle, projectDescription){

    const projectDiv = document.createElement('div');
    projectDiv.id = projectId;
    projectDiv.className = 'card';

    const title = document.createElement('h3');
    title.innerHTML = 'Title : ' + projectTitle;
    projectDiv.appendChild(title);

    const description = document.createElement('p');
    description.innerHTML = 'Description : ' + projectDescription;
    projectDiv.appendChild(description);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttonsDiv';

    const goToBtn = document.createElement('button');
    goToBtn.id = projectId;
    goToBtn.className = 'goTo';
    goToBtn.innerHTML = 'Go to project';
    buttonsDiv.appendChild(goToBtn);
    goToBtn.onclick = goTo;

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

export function deleteCard(event){
    const navLinks = document.getElementById('nav');
    const deleteLink = document.getElementById(`link${event.target.id}`);
    if(deleteLink!==null){
        navLinks.removeChild(deleteLink);
    }
    const content = document.getElementById('content');
    const currentProject = document.getElementById(`currentProject${event.target.id}`);
    if(currentProject!==null){
        content.removeChild(currentProject);
    }
    for(let project in allProjects){
        if(allProjects[project].id == event.target.id){
            allProjects.splice(project, 1);
        }
    }
    const numberOfProjects = localStorage.getItem('numberOfProjects');
    localStorage.setItem('numberOfProjects', numberOfProjects-1);
    localStorage.removeItem(`id${event.target.id}`);
    localStorage.removeItem(`title${event.target.id}`);
    localStorage.removeItem(`description${event.target.id}`);
    if(allProjects.length===0){
        localStorage.removeItem(`projectCreated`);
    }
    displayProjects();
}

export function modifyCard(event){
    const modificationDiv = document.getElementById('modificationDiv');
    modificationDiv.style.display = 'flex';
}

export function cancelCreation(){
    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');
    newProjectInfoDiv.style.display = 'none';
}

export function validateCreationMouse(){
    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');
    newProjectInfoDiv.style.display = 'none';
    const titleInput = document.getElementById('titleInput').value;
    const descriptionArea = document.getElementById('description').value;
    createNewProject(index, titleInput, descriptionArea);
    index++;
}

export function validateCreationKeyboard(event){
    if(event.key === 'Enter'){
        const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');
        newProjectInfoDiv.style.display = 'none';
        const titleInput = document.getElementById('titleInput').value;
        const descriptionArea = document.getElementById('description').value;
        createNewProject(index, titleInput, descriptionArea);
        index++;
    }
}

export function displayCreationForm(){
    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');
    newProjectInfoDiv.style.display = 'flex';
    const titleInput = document.getElementById('titleInput');
    titleInput.value = '';
    const descriptionArea = document.getElementById('description');
    descriptionArea.value = '';
}

export function goTo(event){
    const newProjectDiv = document.getElementById('newProjectDiv');
    newProjectDiv.style.display = 'none';
    const allProjectsDiv = document.getElementById('allProjectsDiv');
    allProjectsDiv.style.display = 'none';
    const projectLink = document.getElementById(`link${event.target.id}`);
    if(projectLink===null){
        createCurrentProjectLink(event.target.id);
    }
    const currentProject = document.getElementById(`currentProject${event.target.id}`);
    if(currentProject===null){
        createCurrentProject(event.target.id);
    }
    else{
        currentProject.style.display = 'grid';
        currentProjectOpen = event.target.id;
    }
}

export function createCurrentProject(projectId){
    const content = document.getElementById('content');
    const currentProject = document.createElement('div');
    currentProject.id = 'currentProject'+projectId;
    currentProject.className = 'projectPages';
    const addTask = document.createElement('button');
    addTask.innerHTML = 'Add a task';
    addTask.onclick = newTask;
    addTask.id = projectId;
    currentProject.appendChild(addTask);
    content.appendChild(currentProject);
    const currentProjectTitle = document.createElement('h3');
    currentProjectTitle.id = projectId;
    currentProjectTitle.innerHTML = 'Title : ' + allProjects[projectId].getTitle();
    const currentProjectDescription = document.createElement('p');
    currentProjectDescription.id = projectId;
    currentProjectDescription.innerHTML = 'Description : ' + allProjects[projectId].getDescription();
    currentProject.appendChild(currentProjectTitle);
    currentProject.appendChild(currentProjectDescription);
    const tasks = allProjects[projectId].getTasks();
    if(tasks.length===0){
        const para = document.createElement('p');
        para.id = 'para'+projectId;
        para.innerHTML = 'No tasks yet.';
        currentProject.appendChild(para);
    }
    else{
        const currentProjectTasks = document.createElement('ol');
        for(let i=0; i<tasks.length; i++){
            const list = document.createElement('li');
            list.innerHTML = tasks[i];
            currentProjectTasks.appendChild(list);
        }
        currentProject.appendChild(currentProjectTasks);
    }
    currentProject.style.display = 'grid';
    currentProjectOpen = projectId;
}

export function newTask(event){
    const projectId = event.target.id;
    const para = document.getElementById(`para${event.target.id}`);
    if(para.innerHTML === 'No tasks yet.'){
        para.innerHTML = '';
        const ol = document.createElement('ol');
        ol.id = 'list'+event.target.id;
        const li = document.createElement('li');
        li.id = 'newTask';
        const text = document.createElement('input');
        text.id = 'newInput';
        text.onkeyup = validateNewTask;
        para.appendChild(ol);
        ol.appendChild(li);
        li.appendChild(text);
    }
    else{
        const ol = document.getElementById(`list${event.target.id}`);
        const li = document.createElement('li');
        li.id = 'newTask';
        const text = document.createElement('input');
        text.id = 'newInput';
        text.onkeyup = validateNewTask;
        ol.appendChild(li);
        li.appendChild(text);
    }
}

export function validateNewTask(event){
    let projectId = event.target.parentElement.parentElement.id;
    projectId = projectId.split('');
    projectId.splice(0, 4);
    projectId = projectId.join('');
    if(event.key==='Enter'){
        const newTask = event.target.value;
        const li = document.getElementById('newTask');
        const input = document.getElementById('newInput');
        li.removeChild(input);
        li.innerHTML = newTask;
        li.id = 'taskValid';
        allProjects[projectId].tasks.push(newTask);
    }
}

export function createCurrentProjectLink(id){
    
    const navLinks = document.getElementById('nav');
    const newLink = document.createElement('div');
    newLink.id = 'link'+id;
    newLink.className = 'links';
    newLink.innerHTML = allProjects[id].getTitle();
    newLink.onclick = returnToProject;
    navLinks.appendChild(newLink);
}

export function displayAllProjects(){
    for(let i=0; i<allProjects.length;i++){
        const currentProject = document.getElementById(`currentProject${i}`);
        if(currentProject!==null){
            currentProject.style.display = 'none';
        }
    }
    const newProjectDiv = document.getElementById('newProjectDiv');
    newProjectDiv.style.display = 'flex';
    const allProjectsDiv = document.getElementById('allProjectsDiv');
    allProjectsDiv.style.display = 'grid';
}

export function returnToProject(event){
    let linkID = event.target.id;
    linkID = linkID.split('');
    linkID.splice(0, 4);
    linkID = linkID.join('');
    if(currentProjectOpen!==undefined){
        const projectToClose = document.getElementById(`currentProject${currentProjectOpen}`);
        projectToClose.style.display = 'none';
    }
    const currentProject = document.getElementById(`currentProject${linkID}`);
    currentProject.style.display = 'grid';
    currentProjectOpen = linkID;
    const newProjectDiv = document.getElementById('newProjectDiv');
    newProjectDiv.style.display = 'none';
    const allProjectsDiv = document.getElementById('allProjectsDiv');
    allProjectsDiv.style.display = 'none';
}
