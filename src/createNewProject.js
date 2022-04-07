let id = 1;

export function createNewProject(){
    const allProjectsDiv = document.getElementById('allProjectsDiv');
    allProjectsDiv.appendChild(createCard(id));
    id++;
    const allCards = document.querySelectorAll('.card');
}

export function createCard(id){
    
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
