
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);

fetch("https://fakestoreapi.com/users").then((prod) => {
    if (!prod.ok) {
        throw Error(res.statusText)
    }
    console.log(prod)

    return prod.json()
}).then((datas) => {
    console.log(datas)
    var productContain = document.querySelector("#work_show")
    setTimeout(function () {
        datas.forEach(element => {
            productContain.innerHTML += ` 
        <div class="item">
            <div class="project-wrapper">
                <img src="./assets/icon/project/89666-1.jpg" alt="project images">
                <div class="project-title " id="website">
                    <h3>
                    ${element.username}
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

  