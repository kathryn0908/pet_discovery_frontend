fetch('http://localhost:3000/favorites')
    .then(response => response.json())
    .then(displayFavorites)

    function displayFavorites(favorite){
        favorites.forEach(favorite => {addLikedDogCard(dog)})
    }

function addLikedDogCard(favorite){
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

    dogCard.append(dogImage, dogName, dogTemperament, dogWeight, dogLifeSpan, likeButton);
    
    document.body.append(dogContainer);
       
   
}