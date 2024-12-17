// card part strat 
let fiterItem = document.querySelectorAll(".buton");
let fiterImges = document.querySelectorAll(".album-q1");

window.addEventListener('load',()=>{
   fiterItem.addEventListener('click' ,(selectedItem)=>{
      if (selectedItem.terget.classList.contains('list')) {
        document.querySelector('menu-active').classList.remove('menu-active');
        selectedItem.terget.classList.add('menu-active');
        let fiterName =  selectedItem.terget.getAttribute('data-name');
        fiterImges = forEach((image) =>{
            let filterIamges = image.getAttribute('data-name');
            if ((filterIamges == fiterName) || fiterName == 'all' ){
              image.style.display='block'  
            }else{
                image.style.display='none' 
            }
        }) 
      }
   })
});
// card part end 

// Our Clients part strat 

// Our Clients part end
