import {datos} from './data.js';

 var animales = datos;
console.log(animales)

var dat = document.getElementById("agregar-item");
console.log(dat);


for (var i=0; i < animales.length; i++){
    
     dat.innerHTML+=`<div class="card">
                         <div class="card-header text-center">
                              <p class="fs-1 fw-bold nombre-card">${animales[i].nombre}</p>
                         </div>
                              <div class="card-body">
                                   <div class="container d-flex justify-content-between"> 
                                        <div class="contenedor-foto">
                                             <img src="${animales[i].img}" alt="Imagen-mascota">
                                        </div>
                                   <div class="card align-items-center ms-5">
                                        
                                   <div class="d-flex flex-column">
                                        <p class="text-center texto-card">
                                             Mi nombre es ${animales[i].nombre}, y soy ${animales[i].tipo}, me gusta mucho comer ${animales[i].comida.map((alimento)=>{return alimento})}. 
                                             tengo el pelo ${animales[i].pelaje} y mi edad es de aproximadamente ${animales[i].edad_aprox}. 
                                             Soy de caracter ${animales[i].caracter.map((carac)=>{return carac})} y mis caracteristicas son ${animales[i].cualidades.map((cuali)=>{return cuali})}.
                                             Me gusta ${animales[i].actividades.map((act)=>{return act})}

                                        </p>
                                             <table class="table">                                        
                                                  <tbody>
                                                       <tr>                                            
                                                            <td>VACUNAS</td>
                                                            <td>${animales[i].vacunas}</td>                                             
                                                       </tr>
                                                       <tr>                                             
                                                            <td>RAZA</td>
                                                        <td>${animales[i].raza}</td>                                             
                                                       </tr>
                                                       <tr>                                             
                                                            <td>GENERO</td>
                                                            <td>${(animales[i].genero == "M")? "Macho":"Hembra"}</td>                                             
                                                       </tr>
                                                       <tr>                                             
                                                            <td>TAMAÑO</td>
                                                            <td>${animales[i].tamaño}</td>                                             
                                                       </tr>
                                                       <tr>                                             
                                                            <td>CASTRADO</td>
                                                            <td>${(animales[i].castrado)? "Esta Castrado":"No esta Castrado"}</td>                                             
                                                       </tr>
                                                       <tr>                                             
                                                            <td>DISCAPACIDAD</td>
                                                            <td>${animales[i].discapacidad}</td>                                             
                                                       </tr>
                                             
                                                  </tbody>
                                             </table> 
                                        </div>     
                                   </div>
                              </div>
                         </div>
                    </div>`;
}
