document.addEventListener("alpine:init", ()=> {
     Alpine.data("products", ()=> ({
          items: [
               {id:1,img:'1.jpg'},
               {id:2, img:'2.jpg'},
               {id:3,img:'2.jpg'},
               {id:4, img:'1.jpg'},
               {id:5,img:'1.jpg'},
               {id:6, img:'2.jpg'},
          ]
     }));

})





