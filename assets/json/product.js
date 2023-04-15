

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


