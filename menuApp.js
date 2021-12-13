

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
const headingItems = document.querySelectorAll('.hd');
const filterBtns = document.querySelectorAll('.filter-btn');


filterBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();

    const filterFood = e.target.dataset.filter;
    
    // Delete/add the items
    foodItems.forEach((item)=>{
        if(item.dataset.filter == filterFood){
            item.style.display = "flex";
        }else{
            item.style.display = "none";
        }
    })

    // Delete//add the headings
    headingItems.forEach((item)=>{
        if(item.dataset.filter == filterFood){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
    window.scrollTo(0,4) // Elements appear when user clicks a filter, without a little scroll the user won't see anything.

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

    //This way support all browsers (IE not include)
    window.scrollTo({
        top: 20,
        behavior: 'smooth'
    })
})

// Scroll reveal functionality

window.scrollTo(0,2)


window.addEventListener('scroll', ()=>{
    let content = document.querySelectorAll('.menu-item');

    content.forEach(content => {
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 0.8;
    
        if(contentPosition < screenPosition){
            content.classList.add('active');
        }else{
            content.classList.remove('active');
        }
    })
})

//Scroll behavior smooth for all browsers
