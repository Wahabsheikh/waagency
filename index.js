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
    // document.getElementById("h_h1").innerHTML = data[1].title



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
// form
// input variable
let userName = document.querySelector("#contact #userName");
let userNumb = document.querySelector("#contact #userNum");
let textareas = document.querySelector("#contact #aboutYours");
// error holder vriable
let error = document.querySelector("#errorHolders .error")
let done = document.querySelector("#errorHolders .done")

// message variable
let nameErrors = document.getElementById("nameErrors");
let nameDone = document.getElementById("nameDone");

let numErrors = document.getElementById("numErrors");
let numDone = document.getElementById("numDone");

let textErrors = document.getElementById("textErrors");
let textDone = document.getElementById("textDone");


// validation variable
let flag = 1;


function validateForm() {
    if (userName.value == "") {

        nameErrors.innerHTML = "Plase Enter Your Name"
        error.style.visibility = 'visible';
        flag = 0
    }
    else if (userName.value.length <= 3) {
        nameErrors.innerHTML = "Name Value Is Too Short"

        error.style.visibility = 'visible';

        flag = 0
    }

    else {
        nameDone.innerHTML = "Done"
        done.style.visibility = 'visible';

        flag = 1
    }

    if (userNumb.value == "") {
        numErrors.innerHTML = "Plase Enter Your Number"
        error.style.visibility = 'visible';

        flag = 0
    }
    else if (userNumb.value.length <= 10) {
        numErrors.innerHTML = "Sorry! Your Num Is Less Then 10"
        error.style.visibility = 'visible';

        flag = 0

    }
    else {
        numDone.innerHTML = "Done"
        done.style.visibility = 'visible';

        flag = 1
    }

    if (textareas.value == "") {
        textErrors.innerHTML = "Please Say Some Thing About Yours Skills"
        error.style.visibility = 'visible';

        flag = 0
    }

    else {
        textDone.innerHTML = "Done"
        done.style.visibility = 'visible';

        flag = 1
    }


    if (flag) {
        return true
    } else {
        return false

    }
    ;
}

