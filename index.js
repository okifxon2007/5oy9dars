
const wrap = document.querySelector('.wrap');

const img = document.querySelector('img');
const button = document.getElementById('button')
let loader = document.getElementById('loader')
let bro = document.querySelector('.bro')



  

function createCard(dav){
    return `
    <div class="card">
            <img class="img" src="${dav.flag}" alt="">
            <h2 class="code">code:${dav.code}</h2>
            <h3 class="country">country:${dav.country}</h3>
            <h4 class="id">${dav.id}</h4>
           </div>
    `
} 






document.addEventListener('DOMContentLoaded', function(){
    fetch("https://cars-pagination.onrender.com/all-countries")
    
  
    
    .then(function(response){
        if (response.status < 300) {
            return response.json()
        }
    })

    .then(function(data){
        
        data.length > 0 && data.forEach(element => {
            let card = createCard(element);
            wrap.innerHTML += card;
        }); 
    })

    .catch(error =>{
        
        
        console.log(78, error);
    })
    .finally(function (){
        loader.style.display = 'none'
    })  
})

