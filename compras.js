
 const clickbutton = document.querySelectorAll('.btn2')
 const tbody = document.querySelector('.tbody')
 let carrito =[]

 clickbutton.forEach(button=>{
   button.addEventListener('click', addToCarritoItem)
 })
 
 function addToCarritoItem(e) {
   const button = e.target
   const item = button.closest('.card')
   const itemTitle = item.querySelector('.card-title').textContent;
   const itemPrice = item.querySelector('.precio')
   const itemImg = item.querySelector('.card-img-top').src;

   const newItem = {
     title: itemTitle,
     precio: itemPrice,
     img : itemImg,
     cantidad:1
   }
   console.log(item)

   additemCarrito(newItem)
 }

function additemCarrito(newItem){

 const InputElemento = tbody.getElementsByClassName('input__elemento')
 for ( let i  = 0 ;  i  <  carrito . length  ;  i ++ ) {
   if ( carrito [ i ] . title . trim ( )  ===  newItem . title . trim ( ) ) {
     carrito [ i ] . cantidad  ++ ;
     const inputValue = InputElemento[i]
     inputValue.value++;
     console.log(carrito)
     CarritoTotal()
     return null ;
   }
 }


       carrito.push(newItem)

       renderCarrito()
   }

   function renderCarrito(){
     console.log(carrito)
   }
   function renderCarrito(){
     tbody.innerHTML = ''
     carrito.map(item => {
       const tr = document.createElement('tr')
       tr.classList.add('ItemCarrito')
       const Content = `
       
       <th scope="row" class="tbody">1</th>
               <td class="table__productos">
                 <img src=${item.img}  alt="">
                 <h6 class="title">${item.title}</h6>
               </td>
               <td class="table__price"><p>${item.precio}</p></td>
               <td class="table__cantidad">
                 <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                 <button class="delete btn btn-danger">x</button>
               </td>
       
       `
       tr.innerHTML = Content;
       tbody.append(tr) 

       tr.querySelector('.delete').addEventListener('click',removeItemCarrito)
       tr.querySelector(".input__elemento").addEventListener('change',sumaCantidad)
     })
     CarritoTotal()
   }
 
 localStorage.setItem('carrito',JSON.stringify(carrito))
 const verCarrito=()=>{
    let compras = JSON.parse(localStorage.getItem('carrito'));
    
    for(const prod of compras  ){
    let contenedor = document.createElement('tr');
    contenedor.innerHTML= 
   
    `
           
    <th scope="row" class="tbody">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    document.getElementById('tarjeta').appendChild(contenedor)
  }
 }
 
 function renderCarrito(){
    console.log(carrito)
  }
  function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
      const tr = document.createElement('tr')
      tr.classList.add('ItemCarrito')
      const Content = `
      
      <th scope="row" class="tbody">1</th>
              <td class="table__productos">
                <img src=${item.img}  alt="">
                <h6 class="title">${item.title}</h6>
              </td>
              <td class="table__price"><p>${item.precio}</p></td>
              <td class="table__cantidad">
                <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                <button class="delete btn btn-danger">x</button>
              </td>
      
      `
      tr.innerHTML = Content;
      tbody.append(tr) 

      tr.querySelector('.delete').addEventListener('click',removeItemCarrito)
      tr.querySelector(".input__elemento").addEventListener('change',sumaCantidad)
    })
    CarritoTotal()
  }

