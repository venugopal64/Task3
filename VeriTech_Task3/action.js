
    const input=document.getElementById("input-text");
    const adding=document.querySelector("#list-task");
    const form=document.getElementById("task-form");
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const data=document.createElement("div");
        data.classList.add('main')
        const data_input=document.createElement('div');
        data_input.classList.add('text');
       data.appendChild(data_input);

       const task_input=document.createElement('input');
       task_input.classList.add('editing_data');
       task_input.type='text';
       task_input.value=input.value;
       task_input.setAttribute('readonly','readonly');
       
       data_input.appendChild(task_input);

       const modification=document.createElement('div');
       modification.classList.add('action');
       const task_edit=document.createElement('button')
       task_edit.classList.add('editing');
       task_edit.innerText='Edit';
       const task_delet=document.createElement('button');
       task_delet.classList.add('deleting')
       task_delet.innerText='Delete';

       modification.appendChild(task_edit);
       modification.appendChild(task_delet);
       data_input.appendChild(modification);
       data.appendChild(data_input);
       adding.appendChild(data)
       task_edit.addEventListener('click',(e)=>{
        if(task_edit.innerText.toLowerCase()=='edit') {
            task_edit.innerText='Save';
            task_input.removeAttribute('readonly');
            task_input.focus();
        }else{
            task_edit.innerText='Edit';
            task_input.setAttribute('readoly','reaonly');
        }
       });
       task_delet.addEventListener('click',(e) =>{
        adding.removeChild(data);
       });
    });
