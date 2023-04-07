

fetch("https://fakestoreapi.com/products").then((prod) => {
    if (!prod.ok) {
        throw Error(res.statusText)
    }
    console.log(prod)

    return prod.json()
}).then((datas) => {
    var productContain = document.querySelector("#work_show")
    setTimeout(function () {
        datas.forEach(element => {
            productContain.innerHTML += ` 
        <div class="item">
            <div class="project-wrapper">
                <img src="${element.image}">
                <div class="project-title " id="website">
                    <h3>
                    ${element.category}
                    </h3>
                </div>
            </div>
        </div>
      
      
   `
        });
    }, 1000)

})
    .catch((error) => {
        console.log(error)
    })

    // services-contant-wrapper

fetch("https://jsonplaceholder.typicode.com/posts").then((prod) => {
    if (!prod.ok) {
        throw Error(res.statusText)
    }
    // console.log(prod)

    return prod.json()
}).then((datas) => {
    var productContain = document.querySelector("#services-contant-wrapper")
    setTimeout(function () {
        datas.forEach(element => {
            productContain.innerHTML += ` 
                <div class="service-text-contant mb-5">
                <span class="servic-icon">
                    <i class="fas fa-cloud-rain"></i>
                </span>
                <h4>${element.title}</h4>
                <p id="service_p">${element.body}
                </p>
                <a href="#" class="read-more"> <span> read more</span> <img src="./assets/icon/ar.png" alt="">
                </a>
            </div>
          
          
       `
        });
    }, 1000)

})

    .catch((error) => {
        console.log(error)
    })

    // #services2-contant-wrapper 

    fetch("https://jsonplaceholder.typicode.com/posts").then((prod) => {
    if (!prod.ok) {
        throw Error(res.statusText)
    }
    // console.log(prod)

    return prod.json()
}).then((datas) => {
    var productContain = document.querySelector("#services2-contant-wrapper")
    setTimeout(function () {
        datas.forEach(element => {
            productContain.innerHTML += ` 
                <div class="service-text-contant mb-5">
                <span class="servic-icon">
                    <i class="fas fa-cloud-rain"></i>
                </span>
                <h4>${element.title}</h4>
                <p id="service_p">${element.body}
                </p>
                <a href="#" class="read-more"> <span> read more</span> <img src="./assets/icon/ar.png" alt="">
                </a>
            </div>
          
          
       `
        });
    }, 1000)

})
    .catch((error) => {
        console.log(error)
    })