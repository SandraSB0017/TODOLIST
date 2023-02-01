const form = document.getElementById('form');
const todo = document.getElementById('todo');
const btn = document.getElementById('addButton');
const listItems = document.querySelector('.list-items');


form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('bouton cliqué');
    const todoValue = todo.value;
    

    let item= `
                <div class ="item">
                    <p>${todoValue}</p>
                    <button class="btn-delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button class="btn-archive">
                        <i class="fas fa-check-circle"></i>
                    </button>
                </div>   
             `
    listItems.innerHTML += item; 
   

    const btnDelete = document.querySelectorAll('.btn-delete');
    btnDelete.forEach(i =>{
        i.addEventListener('click', function(){
            i.parentElement.remove();
        })
    });

    const btnArchive = document.querySelectorAll('.btn-archive');
    btnArchive.forEach(i =>{
        i.addEventListener('click', function(){
           const parent = i.parentElement;
           parent.classList.toggle('done');
        });

        form.reset();
    });
   
})

