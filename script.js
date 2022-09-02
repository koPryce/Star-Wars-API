const homeworlds = []
let idx = 1
//Retrieves the persons from the API
async function getPeople(){
    for (let i = 1; i <= 82; i++){
        if (i == 17){
            continue
        }
        const res = await fetch(`https://swapi.dev/api/people/${i}`)
        const data = await res.json()

        setPeople(data.name, data.birth_year, data.gender, data.homeworld, data.species, data.starships, data.vehicles)
    }
    displayHomeworlds()
}

//Adds the persons to the web page
async function setPeople(name, birth_year, gender, homeworld, species, starships, vehicles){
    const newCard = document.createElement('section')
    newCard.classList.add('card')

    const newTop = document.createElement('section')
    newTop.classList.add('top')

    const topImg = document.createElement('img')
    topImg.src = "Card_white.svg"
    newTop.appendChild(topImg)

    const topHeading = document.createElement('h2')
    topHeading.classList.add('character')
    topHeading.innerText = name
    topHeading.id = "name"+idx.toString()
    newTop.appendChild(topHeading)

    const newDetail = document.createElement('section')
    newDetail.classList.add('details')
    newDetail.id = "detail" + idx.toString()
    idx += 1

    const newSpecies = document.createElement('section')
    newSpecies.classList.add('species')

    const genderImg = document.createElement('img')
    if (gender == 'female'){
        genderImg.src = "Gender-Female.svg"
    }else{
        genderImg.src = "Gender-Male.svg"
    }
    newSpecies.appendChild(genderImg)

    const newYear = document.createElement('p')
    newYear.classList.add('birth-year')
    newYear.innerText = birth_year
    newSpecies.appendChild(newYear)

    const newSpeciesName = document.createElement('p')
    newSpeciesName.classList.add('species-name')
    if (species.length == 0) {
        newSpeciesName.innerText = "Human"
    }else{
        const speciesRes = await fetch(species)
        const speciesData = await speciesRes.json()
        newSpeciesName.innerText = speciesData.name
    }
    newSpecies.appendChild(newSpeciesName)

    const newLine = document.createElement('hr')

    const newHomeworld = document.createElement('section')
    newHomeworld.classList.add('homeworld')

    const homeworldImg = document.createElement('img')
    homeworldImg.src = "Homeworld.svg"
    newHomeworld.appendChild(homeworldImg)

    const newHomeworldLabel = document.createElement('p')
    newHomeworldLabel.classList.add('homeworld-label')
    newHomeworldLabel.innerText = "HOMEWORLD"
    newHomeworld.appendChild(newHomeworldLabel)

    const newPlanet = document.createElement('p')
    newPlanet.classList.add('planet')
    const homeworldRes = await fetch(homeworld)
    const homeworldData = await homeworldRes.json()
    newPlanet.innerText = homeworldData.name
    if (!homeworlds.includes(homeworldData.name)){
        homeworlds.push(homeworldData.name)
    } 
    newHomeworld.appendChild(newPlanet)


    newDetail.appendChild(newSpecies)
    newDetail.appendChild(newLine)
    newDetail.appendChild(newHomeworld)

    const newVehicles = document.createElement('section')
    newVehicles.classList.add('vehicles')

    const vehicleImg = document.createElement('img')
    vehicleImg.src = "Vehicle.svg"
    newVehicles.appendChild(vehicleImg)

    const newVehiclesLabel = document.createElement('p')
    newVehiclesLabel.classList.add('vehicles-label')
    if (vehicles.length == 0) {
        newVehiclesLabel.innerText = "VEHICLES"
        newVehicles.appendChild(newVehiclesLabel)

        const vehicleNumber = document.createElement('p')
        vehicleNumber.classList.add('number-vehicles')
        vehicleNumber.innerText = "0"
        newVehicles.appendChild(vehicleNumber)

        newDetail.appendChild(newVehicles)
    }else if (vehicles.length == 1){
        newVehiclesLabel.innerText = "VEHICLE"
        newVehicles.appendChild(newVehiclesLabel)

        const vehicleNumber = document.createElement('p')
        vehicleNumber.classList.add('number-vehicles')
        const vehicleRes = await fetch(vehicles)
        const vehicleData = await vehicleRes.json()
        vehicleNumber.innerText = vehicleData.name
        newVehicles.appendChild(vehicleNumber)

        newDetail.appendChild(newVehicles)
    }else{
        vehicles.forEach(async(veh, j = 0) =>{
            if (j == 0){
                newVehiclesLabel.innerText = "VEHICLE"
                newVehicles.appendChild(newVehiclesLabel)

                const vehicleNumber = document.createElement('p')
                vehicleNumber.classList.add('number-vehicles')
                const vehicleRes = await fetch(veh)
                const vehicleData = await vehicleRes.json()
                vehicleNumber.innerText = vehicleData.name
                newVehicles.appendChild(vehicleNumber)

                newDetail.appendChild(newVehicles)
            }else{
                const newVehicle = document.createElement('section')
                newVehicle.classList.add('vehicles')

                const vehiclesImg = document.createElement('img')
                vehiclesImg.src = "Vehicle.svg"
                newVehicle.appendChild(vehiclesImg)

                const newVehicleLabel = document.createElement('p')
                newVehicleLabel.classList.add('vehicles-label')
                newVehicleLabel.innerText = "VEHICLE"
                newVehicle.appendChild(newVehicleLabel)

                const vehicleNumber = document.createElement('p')
                vehicleNumber.classList.add('number-vehicles')
                const vehicleRes = await fetch(veh)
                const vehicleData = await vehicleRes.json()
                vehicleNumber.innerText = vehicleData.name
                newVehicle.appendChild(vehicleNumber)

                newDetail.appendChild(newVehicle)
            }
            j += 1
        })
    }

    const newStarships = document.createElement('section')
    newStarships.classList.add('starships')

    const starshipImg = document.createElement('img')
    starshipImg.src = "Starship.svg"
    newStarships.appendChild(starshipImg)

    const newStarshipsLabel = document.createElement('p')
    newStarshipsLabel.classList.add('starships-label')
    if (starships.length == 0) {
        newStarshipsLabel.innerText = "STARSHIPS"
        newStarships.appendChild(newStarshipsLabel)

        const starshipNumber = document.createElement('p')
        starshipNumber.classList.add('number-starships')
        starshipNumber.innerText = "0"
        newStarships.appendChild(starshipNumber)

        newDetail.appendChild(newStarships)
    }else if (starships.length == 1){
        newStarshipsLabel.innerText = "STARSHIP"
        newStarships.appendChild(newStarshipsLabel)

        const starshipNumber = document.createElement('p')
        starshipNumber.classList.add('number-starships')
        const starshipRes = await fetch(starships)
        const starshipData = await starshipRes.json()
        starshipNumber.innerText = starshipData.name
        newStarships.appendChild(starshipNumber)

        newDetail.appendChild(newStarships)
    }else{
        starships.forEach(async(ship, j = 0) =>{
            if (j == 0){
                newStarshipsLabel.innerText = "STARSHIP"
                newStarships.appendChild(newStarshipsLabel)

                const starshipNumber = document.createElement('p')
                starshipNumber.classList.add('number-starships')
                const starshipRes = await fetch(ship)
                const starshipData = await starshipRes.json()
                starshipNumber.innerText = starshipData.name
                newStarships.appendChild(starshipNumber)

                newDetail.appendChild(newStarships)
            }else{
                const newStarship = document.createElement('section')
                newStarship.classList.add('starships')

                const starshipsImg = document.createElement('img')
                starshipsImg.src = "Starship.svg"
                newStarship.appendChild(starshipsImg)

                const newStarshipLabel = document.createElement('p')
                newStarshipLabel.classList.add('starships-label')
                newStarshipLabel.innerText = "STARSHIP"
                newStarship.appendChild(newStarshipLabel)

                const starshipNumber = document.createElement('p')
                starshipNumber.classList.add('number-starships')
                const starshipRes = await fetch(ship)
                const starshipData = await starshipRes.json()
                starshipNumber.innerText = starshipData.name
                newStarship.appendChild(starshipNumber)

                newDetail.appendChild(newStarship)
            }
            j += 1
        })
    }



    newCard.appendChild(newTop)
    newCard.appendChild(newDetail)
    document.getElementById("main-content").appendChild(newCard)

}

//Adds the homeworlds to the dropdown menu
function displayHomeworlds(){
    if(homeworlds.length > 0){
        if(homeworlds.includes('unknown')){
            let index = homeworlds.indexOf('unknown')
            homeworlds.splice(index, 1)
        }
        const selectElement = document.getElementById('homeworld')
        for (let i = 0; i < homeworlds.length; i++){
            let option = new Option(homeworlds[i], homeworlds[i] + (i+1).toString())
            selectElement.appendChild(option)
        }
    }
}

//Hides all the cards that are not displaying characters from the specified homeworld
function getHomeworld(e){
    const dropdown = document.getElementById('homeworld')
    const option = dropdown.options[e.selectedIndex].text;
    const planets = document.querySelectorAll('p.planet').forEach((planet, i = 0) => {
        if (option == 'All'){
            planet.closest('.card').style.display = 'block'
        }else if (planet.innerText != option){
            planet.closest('.card').style.display = 'none'
        }else if (planet.innerText == option){
            planet.closest('.card').style.display = 'block'
        }
        i += 1
    })    
}

//Searches for a person that is entered at the searchbar
function searchPerson(){
    const search = document.getElementById('search').value
    const person = search.charAt(0).toUpperCase() + search.slice(1)
    let names = document.querySelectorAll('h2.character').forEach(name =>{
        if (name.innerText.includes(person)){
            name.closest('.card').scrollIntoView()
        }
    })
}

//If the header tag containing the name of the character is clicked, then the detailed card view is opened
const nameClicked = (event) => {
    if (event.target.nodeName === 'H2'){
        const person = document.getElementById(event.target.id).innerText
        localStorage.setItem("NAME", person)
        window.location.replace("Card Detail Layout.html")
    }
}

window.addEventListener('click', nameClicked)

getPeople()
