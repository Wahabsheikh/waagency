// fetch("https://fakestoreapi.com/products").then((prod) => {
//     if (!prod.ok) {
//         throw Error(res.statusText)
//     }
//     console.log(prod)

//     return prod.json()
// }).then((datas) => {
//     console.log(datas)
//     var productContain = document.querySelector("#your-work")

//     datas.forEach(element => {
//         productContain.append` 
//         <div class="container-fluid">
//             <div class="row">
//                 <div class="col-12 project-house">
//                     <div class="owl-carousel owl-theme">
//                         <div class="item">
//                             <div class="project-wrapper">
//                                 <img src="./assets/icon/project/89666-1.jpg" alt="project images">
//                                 <div class="project-title " id="website">
//                                     <h3>${element.title}
//                                         website creation
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
      
//    `
//     });

  

// })
//     .catch((error) => {
//         console.log(error)
//     })