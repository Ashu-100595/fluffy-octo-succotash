$(document).ready(() => {
    $('#slideshow .slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    })
})



const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('ul');
    burger.addEventListener('click', () => {
        nav.classList.toggle('ul-active');
    });
}

navSlide();


function createHomePageProductCard(obj) {

    var mainDiv = document.createElement('div');
    mainDiv.classList.add('product-card');

    var productLink = document.createElement('a');
    productLink.href = 'Product.html?p=' + obj.id;

    var productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = obj.preview;
    productImage.alt = obj.name + ' Pic';

    productLink.appendChild(productImage);

    var innerDiv = document.createElement('div');
    innerDiv.classList.add('product-meta');

    var productName = document.createElement('h4');
    var productNameText = document.createTextNode(obj.name);
    productName.appendChild(productNameText);

    var productBrand = document.createElement('h5');
    var productBrandText = document.createTextNode(obj.brand);
    productBrand.appendChild(productBrandText);

    var productPrice = document.createElement('p');
    var productPriceText = document.createTextNode('Rs ' + obj.price);
    productPrice.appendChild(productPriceText);

    innerDiv.appendChild(productName);
    innerDiv.appendChild(productBrand);
    innerDiv.appendChild(productPrice);

    mainDiv.appendChild(productLink);
    mainDiv.appendChild(innerDiv);

    return mainDiv;
}

$.get('https://5efd74c4dd373900160b3098.mockapi.io/products', function(data, status) {
    var response = data;

    for (var i = 0; i < response.length; i++) {
        if (response[i].isAccessory) {
            $('#accessory-grid').append(createHomePageProductCard(response[i]))
        } else {
            $('#clothing-grid').append(createHomePageProductCard(response[i]))
        }
    }
})