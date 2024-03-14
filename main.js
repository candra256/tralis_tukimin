// shopping cart toggle

const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
     shoppingCart.classList.toggle("active");
     e.preventDefault();
};



// toggle class active hamberger menu


const navbarNav = document.querySelector('.navbar-nav');


document.querySelector('#hamburger-menu').onclick = (e) =>{
     navbarNav.classList.toggle("active");
     e.preventDefault();

};

// toggle class active untuk search form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
     searchForm.classList.toggle("active");
     searchBox.focus();
     e.preventDefault();
};





// klik diluar side bar untuk menghilangkan nav

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sp = document.querySelector("#shopping-cart-button");

document.addEventListener('click', function(e) {
     if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
          navbarNav.classList.remove("active");
     }
     if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
          searchForm.classList.remove("active");
     }

     if (!sp.contains(e.target) && !shoppingCart.contains(e.target)){
          shoppingCart.classList.remove("active");
     }
});


// modal box

const itemDetailModal= document.querySelector("#item-detail-modal");
const itemDetailButtons= document.querySelectorAll(".item-detail-button")


itemDetailButtons.onclick = (e) => {
     itemDetailModal.style.display = 'flex';
     e.preventDefault();
}




// klick tombol close
document.querySelector('.modal .close-icon').onclick = (e)=>{
     itemDetailModal.style.display = 'none';
     e.preventDefault()

}

// klik diluar modal



window.onclick = (e) => {
     if (e.target === itemDetailModal) {
          itemDetailModal.style.display = 'none';
     }
}