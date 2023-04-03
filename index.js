$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    if (!res.ok) {
        throw Error(res.statusText)
    }
    console.log(res)

    return res.json()
}).then((data) => {
    document.getElementById("h_h1").innerHTML = data[1].title
    document.getElementById("h_p").innerHTML = data[1].title
    document.getElementById("context_p").innerHTML = data[4].body
    document.getElementById("our_service_p").innerHTML = data[5].body
    document.getElementById("service_p").innerHTML = data[3].title
    document.getElementById("contact_p").innerHTML = data[2].body
    document.getElementById("team_p").innerHTML = data[7].body
    document.getElementById("packages_p").innerHTML = data[6].body
    document.getElementById("update_p").innerHTML = data[10].body
    document.getElementById("about_p").innerHTML = data[12].body
    document.getElementById("about_res_P").innerHTML = data[10].title
    // document.getElementById("recent_p").innerHTML = data[10].body
    // document.getElementById("recent_p").innerHTML = data[10].body


    
    console.log(data);

})
    .catch((error) => {
        console.log(error)
    })

function search_box() {
    document.querySelector("#header .search_box").style.display = "block";

    document.querySelector("#header .navbar").style.display = "none";

}

function search_box() {
    document.querySelector("#header .search_boxx ").style.display = "block";
    document.querySelector("#header .search_box").style.display = "block";
    document.querySelector("#header .navbar").style.display = "none";




}
function search_box_crox() {
    document.querySelector("#header .search_boxx ").style.display = "none";
    document.querySelector("#header .search_box").style.display = "none";
    document.querySelector("#header .navbar").style.display = "block";




}
