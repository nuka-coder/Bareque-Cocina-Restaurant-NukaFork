// Functionality of the navbar
const toggleBtn = document.querySelector('.toggle-container');
const navBar = document.querySelector('.nav-bar');

toggleBtn.addEventListener('click', () => {
    if(navBar.classList.contains('hidden')){
        navBar.classList.remove('hidden');
        navBar.classList.add('show');
    }else{
        navBar.classList.add('hidden');
        navBar.classList.remove('show');
    }
})

// Filters

const foodItems = document.querySelectorAll('.menu-item');
const filterBtns = document.querySelectorAll('.filter-btn');


filterBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();

    const filterFood = e.target.dataset.filter;
    
    foodItems.forEach((item)=>{
        if(item.dataset.filter == filterFood){
            item.style.display = "flex";
        }else{
            item.style.display = "none";
        }
    })
}));


const filterBtns2 = document.querySelectorAll('.filter-btn2');


filterBtns2.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();

    const filterFood = e.target.dataset.filter;
    
    foodItems.forEach((item)=>{
        if(item.dataset.filter == filterFood){
            item.style.display = "flex";
        }else{
            item.style.display = "none";
        }
    })
}));

// Scroll btn

const topBtn = document.querySelector('.to-top-btn');

window.onscroll = scrollFunction;

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.classList.add('show-to-top');
        topBtn.classList.remove('hide-to-top');
    }else{
        topBtn.classList.add('hide-to-top');
        topBtn.classList.remove('show-to-top');
    }
}


topBtn.addEventListener('click', () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})