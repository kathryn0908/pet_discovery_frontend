


let dogUrl;
    const queryParams = new URLSearchParams(window.location.search);
    const search = queryParams.get('search');
    
    if(search) {
        dogUrl = `http://localhost:3000/dogs?search=${search}`
    }
    else { 
        dogUrl = "http://localhost:3000/dogs"
    }

fetch(dogUrl)
    .then(response => response.json())
    .then(displayDogs)

function displayDogs(dogs){
    dogs.forEach(dog => {displayDogCard(dog)})
}

function displayDogCard(dog){
    const dogContainer = document.querySelector('#dog-container')
    const dogCard = document.createElement('div');
    dogCard.className = 'dog-cards'

    const dogImage = document.createElement('img');
    dogImage.src = dog.image;

    const dogName = document.createElement('h1');
    dogName.textContent = "Breed: " + dog.name;
    
    const dogTemperament = document.createElement('p');
    dogTemperament.textContent = "Temperament: " + dog.temperament;
    

    const dogWeight = document.createElement('p');
    dogWeight.textContent = "Weight: " + dog.weight + "lbs.";

    const dogLifeSpan = document.createElement('p');
    dogLifeSpan.textContent = "Life Span: " + dog.life_span;

    const likeButton = document.createElement('button')
    likeButton.textContent = "Like"
    

    dogCard.append(dogImage, dogName, dogTemperament, dogWeight, dogLifeSpan, likeButton);
    
    dogContainer.append(dogCard);
    document.body.append(dogContainer);
    

}

function searchDogs(dog) { 
    const $li = createElement("li")
    $li.innerHTML = `<a href=show.html?id=${dog.id}>${dog.name}</a>`
    dog.append($li)
}  

