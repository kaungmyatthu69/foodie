import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "waypoints/lib/noframework.waypoints";
import * as bootstrap from "bootstrap";


new Typed('.element',{
    strings: ['Food ...','Drink ...'],
    startDelay:1000,
    typeSpeed: 40,
    backSpeed:60,
    backDelay:2000,
    loop:true,
})

let  slidedown = {
    distance: '50px',
    origin: 'top',
    duration: 800,
    interval:500,
   
    
};

let  slideleft = {
    distance: '50px',
    origin: 'right',
    duration: 800,
    interval:300,
    delay:500

    
};

let  slideright = {
    distance: '50px',
    origin: 'left',
    duration: 800,
    interval:500,

  
};


var slideUp = {
    distance: '50px',
    origin: 'bottom',
 
    duration: 800,
    interval:300,


};

ScrollReveal().reveal('.slide-up', slideUp);

ScrollReveal().reveal('.slide-down', slidedown);

ScrollReveal().reveal('.slide-left', slideleft);
ScrollReveal().reveal('.slide-right', slideright);





 new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        let oldNavLink=document.querySelector(".nav-link.active");
        if(oldNavLink!=null){

            oldNavLink.classList.remove('active');
        }
        let currentNavLink=document.querySelector(`[href="#home"]`);
        currentNavLink.classList.add('active');
     
    },
    offset:"0%"
  })


let sections =['about','services','menu','contact'];
sections.forEach(function(section){
 
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink=document.querySelector(".nav-link.active");
            if(oldNavLink!=null){
    
                oldNavLink.classList.remove('active');
            }
            let currentNavLink=document.querySelector(`[href="#${section}"]`);
            currentNavLink.classList.add('active');
         
        },
        offset:"50%"
      })
});


let MenuLists=[
    {
        id:1,
        img:'/img/plate1.png',
        title:'Barbecue Salad',
        description: 'Special Delicious Dish',
        price:22.2,
        currency : "$"
    },
    {
        id:2,
        img:'/img/plate2.png',
        title:'Barbecue Salad',
        description: 'Special Delicious Dish',
        price:28.5,
        currency : "$"
    },
    {
        id:3,
        img:'/img/plate3.png',
        title:'Barbecue Salad',
        description: 'Special Delicious Dish',
        price:40,
        currency : "$"
    }
]
let menuRow=document.querySelector('.menu-row');
MenuLists.forEach(function(menulist){
    let div=document.createElement('div');
    div.classList.add('col-12','col-md-3','col-lg-3');
    div.innerHTML=`
    <div class="card menu-card mb-5 ">
    <div class="card-img"><img src="${menulist.img}" class=" w-75 d-block mx-auto my-4" alt=""></div>
    <div class="card-body">
      <p class=" fw-bold ">
        ${menulist.title}
      </p>
      <p class=" text-black-50 small">
       ${menulist.description}
      </p>
      <div class=" d-flex justify-content-between align-items-center">
        <p class=" mb-0">${menulist.currency} ${menulist.price}</p>
        <button class=" btn btn-primary">
          <i class="bi bi-cart-fill"></i>

        </button>
      </div>
    </div>
  </div

    `
    

menuRow.append(div);
})