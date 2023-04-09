const newss = [
    {
        id: 1,
        img: './assets/icon/recent news/demo26-007-600x400.jpg',
        date: '27,feb,23',
        name: 'abdul wahab',
    }, {
        id: 2,
        img: './assets/icon/recent news/Single_post-002-compressor-600x400.jpg',
        date: '30,apr,23',
        name: 'Rahul',
    }, {
        id: 3,
        img: './assets/icon/recent news/download.jpg',
        date: '25,dec,22',
        name: 'abdullah',
    }, {
        id: 4,
        img: './assets/icon/recent news/istockphoto-1148918504-170667a.jpg',
        date: '17,jan,23',
        name: 'neha',
    }, {
        id: 5,
        img: './assets/icon/recent news/istockphoto-615823282-612x612.jpg',

        date: '12,mar,23',
        name: 'wahaj',
    }, {
        id: 6,
        img: './assets/icon/recent news/build_a_website_for_free_-_article_image.jpg',
        date: '10,apr,23',
        name: 'bahadur',
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

