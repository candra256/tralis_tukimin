document.addEventListener("alpine:init", ()=> {
     Alpine.data("products", ()=> ({
          items: [
               {id:1,img:'1.jpg'},
               {id:2, img:'2.jpg'},
               {id:3,img:'2.jpg'},
               {id:4, img:'1.jpg'},
               {id:5,img:'1.jpg'},
               {id:6, img:'1.jpg'},
          ]
     }));

     Alpine.store("cart", {
          items : [],
          total : 0,
          jumlah :0,
          add(newitem) {

               // apakah ada barang yang sama
               const cartItem = this.items.find((item) => item.id === newitem.id);

               if (!cartItem) {
                    this.items.push({...newitem, jumlah:1 , total:newitem.price});
                    this.jumlah++;
                    this.total += newitem.price;

               } else{
                    // jika brang udh ada cek apakah barang beda atau sama
                    this.items = this.items.map((item) => {
                         if(item.id !== newitem.id){
                              return item;
                         } else{
                              item.jumlah++;
                              item.total = item.price * item.jumlah;
                              this.jumlah++;
                              this.total += item.price;
                              return item;
                              
                         }
                    })
               }
 
               

          },

          remove(id) {
               const cartItem = this.items.find((item) => item.id === id);

               if(cartItem.jumlah > 1) {
                    this.items = this.items.map((item) => {
                         if(item.id !=  id){
                              return item;

                         }else{
                              item.jumlah --;
                              item.total = item.price * item.jumlah;
                              this.jumlah --;
                              this.total -= item.price;
                              return item;
                         }

                    })
               }else if(cartItem.jumlah === 1){
                    // jika barang sisa satu
                    this.items = this.items.filter((item) => item.id != id);
                    this.jumlah --;
                    this.total -= cartItem.price;
               }

               
          },
     })
})





// konversi ke rupiah

const rupiah= (number) => {
     return new Intl.NumberFormat('id-ID',{
          style : "currency",
          currency : "IDR",
          minimumFractionDigits: 0
     }).format(number);
}

