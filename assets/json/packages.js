const packages = [
    {
        id: 1,
        title: 'landing page',
        price: 599,
        termsValidation: 3,
        packagesValidation: '5 - 15',
        socialLink: 'social link',
        gallery: 'video photo gallery',
        fasilities: 'SEO'

    },
    {
        id: 2,
        title: 'web designing',
        price: 1009,
        termsValidation: 7,
        packagesValidation: '3 - 10',
        socialLink: 'social link',
        gallery: 'video photo gallery',

    },
    {
        id: 3,
        title: 'full stack developer',
        price: 2000,
        termsValidation: 1,
        years: 1,
        packagesValidation: '5 - 15',
        socialLink: 'social link',
        gallery: 'video photo gallery',
        fasilities: 'SEO'

    },
    {
        id: 4,
        title: 'arts',
        price: 799,
        termsValidation: 3,
        packagesValidation: '5 - 15',
        socialLink: 'social link',
        gallery: 'video photo gallery',
        fasilities: 'SEO'

    },
    {
        id: 5,
        title: 'creativity',
        price: 720,
        termsValidation: 7,
        packagesValidation: '3 - 10',
        socialLink: 'social link',
        gallery: 'video photo gallery',

    },
    {
        id: 6,
        title: 'room service',
        price: 1550,
        termsValidation: 1,
        years: 1,
        packagesValidation: '5 - 15',
        socialLink: 'social link',
        gallery: 'video photo gallery',
        fasilities: 'SEO'

    },
];

packages.forEach(element => {
    let packagess=document.getElementById('pacages-card');
  

    packagess.innerHTML += ` 
            <div class="packages-card">
            <h1>
                ${element.title}
            </h1>
            <span class="price">
                <h1>
                    $${element.price}.<sup>99</sup>
                </h1>
            </span>
            <div class="packages-list">
                <p> <span class="check"><i class="fas fa-check"></i></span> terms ${element.termsValidation} days</p>
                <p> <span class="check"><i class="fas fa-check"></i></span> ${element.packagesValidation} days</p>
                <p> <span class="check"><i class="fas fa-check"></i></span> ${element.socialLink} </p>
                <p> <span class="check"><i class="fas fa-check"></i></span> ${element.gallery} </p>
                <p> <span class="check"><i class="fas fa-check"></i></span> contact form <span>CTA</span>
                </p>
                <p> <span class="check"><i class="fas fa-check"></i></span> <span> ${element.fasilities} </span> packages</p>
            </div>
            <div class="mb-3">
                <button class="wa-dark-btn" type="submit">submit</button>
            </div>
        </div>
          
       `
});

