//funcion mostrar cantidad del carrito
const mostarcantidad=()=>{

    var cantidad =parseFloat(document.getElementsByTagName('span')[0].innerHTML)
    
    cantidad=cantidad+1;
    
    document.getElementsByTagName('span')[0].innerHTML=cantidad;
 
    
      
   } 
 //boton que agrega productos al carrito
    const clickbutton = document.querySelectorAll('.btn2')
    const tbody = document.querySelector('.tbody')
    let carrito =[]

    clickbutton.forEach(button=>{
      button.addEventListener('click', addToCarritoItem)
    })
    //funcion agregar al carrito
    function addToCarritoItem(e) {
      const button = e.target
      const item = button.closest('.card')
      const itemTitle = item.querySelector('.card-title').textContent;
      const itemPrice = item.querySelector('.precio').textContent;
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
      // agrega contenido al div con clase  "tbody",productos comprados 
      function renderCarrito(){
        tbody.innerHTML = ''
        carrito.map(item => {
          const tr = document.createElement('tr')
          tr.classList.add('ItemCarrito')
          const Content = `
          
          <th scope="row" class="tbody">1</th>
                  <td class="table__productos">
                    <img src=${item.img} class="imgCards" alt="">
                    <h6 class="title">${item.title}</h6>
                  </td>
                  <td class="table__price"><p>${item.precio}</p></td>
                  <td class="table__cantidad" class="cantidad">
                    <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                    <button class="delete btn btn-danger">x</button>
                  </td>
          
          `
          tr.innerHTML = Content;
          tbody.append(tr) *

          tr.querySelector('.delete').addEventListener('click',removeItemCarrito)
          tr.querySelector(".input__elemento").addEventListener('change',sumaCantidad)
        })
        CarritoTotal()
      }
    


 //funcion total compra
 function CarritoTotal() {
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item)=> {
    const precio = Number(item.precio.replace('$', ''))
    Total = Total+ precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage() 
}
//funcion remover item carrito 
function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for (let  i= 0;  i< carrito.length; i++) {
  
  if(carrito[i].title.trim() ===title.trim()){
    carrito.splice(i, 1)
  }
}
 tr.remove()
 CarritoTotal()
}
//funcion suma la cantidad
function sumaCantidad(e) {
  const sumaInput = e.target
  const tr =sumaInput.closest(".itemCarrito")
  const title = tr.querySelector('title').textContent;
  carrito.forEach(item=>{
    if(item.title.trim() === title){
      sumaInput.value < 1 ? (sumaInput.value = 1): sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()

    }
  })
console.log(carrito)
  
}
//funcion guardar en el local storage
function addLocalStorage() {
  localStorage.setItem('carrito',JSON.stringify(carrito))
  
}
window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }

}
 //animacion del titulo
 $("body").click(function(){
 
  $("#titulop").css("color","darkgoldenrod", "height", )
                .slideUp(2000)
                .delay(2000) 
                .slideDown(2000)
                .animate ({
               transform:'360(deg)',
               height:'200px',
               opacity:'1',
     
    
  })
                                    
              })   
              $(".btn1").click(function(){
  
        $("span").css("color","darkgoldenrod")    
               
              });
  
            
                        
  // utilizo AJAX funciona con el boton comprar que se encuntra en el nav bar.
        const URLJSON="productos.json";
        $("#btn").click(()=>{
          $.getJSON(URLJSON,function(respuesta){
          console.log('respuesta',respuesta);
          let productos= respuesta;
          for(const prod of productos){
          $("#ajax").prepend(`<div>
          <h3>${prod.id} -${prod.precio}</h3>
          <p>${prod.descripcion}</p>
          </div>
             `);
          
         }
  
      });
  
     });
 

//formulario hecho con jquery
$("#formulario").prepend (`<form id=formu>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Por favor ayudanos a mejorar dejanos tus opiniones</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> 
<h5>Una vez que nos dejaste tu opinion por favor ingresa tu email y  presiona enter</h5>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Dirreccion de Email</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<form/>
`
)

$("#formu").submit(function (e){
 
let formulario= $("#exampleFormControlInput1").val();

let formulario2= $("#exampleFormControlTextarea1").val()

e.preventDefault(e)

console.log(formulario,formulario2)

})


