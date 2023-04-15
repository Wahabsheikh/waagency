const newss = [
    {
        id: 1,
        img: './assets/icon/recent news/wahab.jpg',
        date: '27,feb,23',
        name: 'abdul wahab',
    }, {
        id: 2,
        img: './assets/icon/recent news/rahul.jpg',
        date: '30,apr,23',
        name: 'Rahul',
    }, {
        id: 3,
        img: './assets/icon/recent news/abdullah.jpg',
        date: '25,dec,22',
        name: 'abdullah',
    }, {
        id: 4,
        img: './assets/icon/recent news/neha.jpg',
        date: '17,jan,23',
        name: 'neha',
    }, {
        id: 5,
        img: './assets/icon/recent news/wahaj.jpg',

        date: '12,mar,23',
        name: 'wahaj',
    }, {
        id: 6,
        img: './assets/icon/recent news/bahadur.jpg',
        date: '10,apr,23',
        name: 'bahadur',
    }, {
        id: 7,
        img: './assets/icon/recent news/rahil.jpg',
        date: '27,feb,23',
        name: 'Rahil',
    }, {
        id: 8,
        img: './assets/icon/recent news/jamshed.jpg',
        date: '30,apr,23',
        name: 'jamshed',
    }, {
        id: 9,
        img: './assets/icon/recent news/lubna.jpg',
        date: '25,dec,22',
        name: 'lubna',
    }, {
        id: 10,
        img: './assets/icon/recent news/kashif.jpg',
        date: '17,jan,23',
        name: 'kashif',
    }, {
        id: 11,
        img: './assets/icon/recent news/asgher.jpg',

        date: '12,mar,23',
        name: 'asgher',
    }, {
        id: 12,
        img: './assets/icon/recent news/ali.jpg',
        date: '10,apr,23',
        name: 'ali',
    }, {
        id: 13,
        img: './assets/icon/recent news/yasir.jpg',

        date: '12,mar,23',
        name: 'yasir',
    }, {
        id: 14,
        img: './assets/icon/recent news/subhan.jpg',
        date: '10,apr,23',
        name: 'subhan',
    }
];

newss.forEach(element => {
    let news = document.getElementById('news-holder');


    news.innerHTML += ` 
    <div class="col-md-6 col-sm-12 ">
    <div class="image">
        <img src="${element.img}" alt="">
    </div>
    <div class="intro">
        <p class="date">${element.date} <span class="slider"></span>

        </p>
        <p class="name"><a href="#">
                ${element.name}<span class="slider"></span>
            </a>
        </p>
        <p>news</p>
    </div>
    <div class="about-news">
        <h3> <a href="#">
                easy ways to incorporate customer feedback
            </a>
        </h3>
        <p>
            The benefits of such a platform include submersing the user <br> in the brand's content.
            Users
            <br>
            will be more likely to…
        </p>
        <p class="continue-reading "><a href="">
                continue reading <span class="slider"></span>

            </a>
        </p>

    </div>

</div>
          
       `
});

