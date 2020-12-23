const form = document.querySelector('form');
const input = document.querySelector('input');
const wrapper = document.getElementById('todos');



//adding event 

form.addEventListener('submit', function(e){
  e.preventDefault();

  // if(input.value){
  //   console.log(input.value);
  // }
  // if(input.value === ''){
  //   return
  // }else{
  //   console.log(input.value)
  // }

  if (input.value !== ''){
    const div = document.createElement('div');
    const divv = document.createElement('div')
    const p = document.createElement('p');
    const complete = document.createElement('button');
    const delButton = document.createElement('button');
  
    p.textContent = input.value;
    complete.textContent = 'Completed';
    delButton.textContent = 'Delete';

    
    complete.id = 'completed';
    delButton.id = 'Delete';
    div.id = 'section-2';

    divv.appendChild(complete);
    divv.appendChild(delButton);

    div.appendChild(p); 
    div.appendChild(divv);
    

    wrapper.appendChild(div);
    input.value = '';

  }
})

todos.addEventListener('click', function (e){
  if(e.target.id === 'completed') {
    let btn = e.target;
    btn.parentElement.parentElement.style.opacity = '0.5';
  }
});

todos.addEventListener('click', function(e){
  if(e.target.id === 'Delete'){
    let del = e.target;
    del.parentElement.parentElement.remove()
  }
})



