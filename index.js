const petSurveyForm = document.querySelector('#survey');
const petSurveyResults = document.querySelector('.results')
const submitButton = document.querySelector('#submit-survey');


dogUrl = 'http://localhost:3000/dogs'
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
    console.log(dog.image)

    const dogWeight = document.createElement('p');
    dogWeight.textContent = "Weight: " + dog.weight + "lbs.";

    const dogLifeSpan = document.createElement('p');
    dogLifeSpan.textContent = "Life Span: " + dog.life_span;

    dogCard.append(dogImage, dogName, dogTemperament, dogWeight, dogLifeSpan);
    dogContainer.append(dogCard);
    document.body.append(dogContainer);

}

function login(){
    const loginForm = document.querySelector('#login-form')
    const submitLoginButton = document.querySelector('.submit')

    submitLoginButton.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData()
    })
}



// function newDogs(dogs){
//     let newDogsTemp = dogs.map(dog => {
//         if (dog.temperment){
//         return {...dog, temperment: dog.temperment.split(', ')}
//         }
//     })
//     survey(newDogsTemp)
//     return newDogsTemp
    
//     }

// function survey(newDogsTemp){
//     console.log(newDogsTemp)
//     console.log(newDogsTemp.filter(dog => dog.temperment != "Wild" || dog.temperment != "Energetic"))
//     const formData = new FormData(petSurveyForm) 
//     let housing = formData.get('housing') 
//     if(housing == 'Apartment') {
//         dogs.filter(dog => dog.temperment != "wild" && dog.temperment != "energetic")
//     }
//     else(housing == 'House')

    // let yard = formData.get('yard')
    // if(yard == 'None'){

    // }
    // else if(yard == 'Small'){

    // }
    // else if(yard == 'Medium'){

    // }
    // else(yard == 'Large'){
    //     dogs.all
    // }

    // let activities = formData.get('activities')
    // if(activities == 'Indoor Play Only'){
    //     dogs.filter( dog => dog.temperment != "Wild" || "Energetic" || "Active" || "Intelligent")
    // }
    // else if(activities == 'Mostly Play in the Backyard'){

    // }
    // else(activities == 'Daily Walks/Jogs'){

    // }

    // let size = formData.get('size')
    // if(size == '15-30lbs'){

    // }
    // else if(size == '30-50lbs'){

    // }
    // else if(size == '50-100lbs'){

    // }

    // let time = formData.get('time')
    // if(time == 'All day'){

    // }
    // else if(time == 'Only after work 5+ hours per day'){

    // }





    // submitButton.addEventListener("submit", (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(petSurveyResults);
        

    //     if (questionnaire == "Apartment" || "None" || "Small" && "Indoor Play Only")
    //     {
            
    //         if (questionnaire == "15-30lbs")
    //         firstResults.filter(dog => parseInt(dog.weight) < 30)

    //         else if (questionnaire == "30-50lbs")
    //         firstResults.filter(dog => parseInt(dog.weight) > 30  < 50)

    //         else (questionnaire == "50-100lbs")
    //         firstResults.filter(dog => parseInt(dog.weight) > 50)

    //     }

    //     else if (questionnaire == "House" || "Medium" || "Large" || "Mostly Play in the Backyard" || "Daily Walks/Jogs")
    //     {
    //         const secondResults =  dogs.filter( dog => dog.temperment == "Active" || "Wild" || "Energetic" || "Playful" || "Intelligent")
    //         if (questionnaire == "15-30lbs")
    //         secondResults.filter(dog => parseInt(dog.weight) < 30)

    //         else if (questionnaire == "30-50lbs")
    //         secondResults.filter(dog => parseInt(dog.weight) > 30 && < 50)

    //         else (questionnaire == "50-100lbs")
    //         secondResults.filter(dog => parseInt(dog.weight) > 50)

    //     } 
        
        
        
    // }

    

// }

