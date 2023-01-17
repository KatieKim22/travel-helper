

const airlapAPI_Key = "0dc92caf-bf87-473f-b889-44489ee3a2c7";

const flight_number = document.querySelector(".flightNumberValue")
const submitBtn = document.querySelector("#airSubmit")
const IATA = document.querySelector('#iataCode')
const airportNameText = document.querySelector('.airport')

const flightNumbersubmitBtn = document.querySelector("#flightNumberSubmit")
const flightNumber = document.querySelector('#flightNumber')
const flightInfoText = document.querySelector('.flightInfo')

submitBtn.addEventListener('click', airportName)

function airportName(e) {
    e.preventDefault();

    console.log(IATA.value)
    var airportInfoUrl = "https://airlabs.co/api/v9/airports?iata_code=" + IATA.value + "&api_key=" + airlapAPI_Key
    fetch(airportInfoUrl)
        .then(response => response.json())
        .then(data => {
            let airportName = data['response'][0]["name"]

            return airportNameText.innerHTML = `<b>${airportName}</b>`
        }
        )
        .catch(error => console.log("error"))

}


flightNumbersubmitBtn.addEventListener('click', flightTrack)

function flightTrack(e) {
    e.preventDefault();

    var flightTrackUrl = "https://airlabs.co/api/v9/flights?_view=array&_fields=status,dep_iata,arr_iata,airline_iata&flight_number" + flightNumber.value + ",&api_key=" + airlapAPI_Key
    fetch(flightTrackUrl)
        .then(response => response.json())
        .then(data => {
            let flightStatus = data[0][0]
            let deparAirport = data[0][1]
            let arrAirport = data[0][2]
            let airline = data[0][3]

            flightInfoText.innerHTML = `<h1>Flight Status: ${flightStatus} </br> Departure:  ${deparAirport} </br> Arrival:  ${arrAirport}</br> Airline:  ${airline} </h1>`


        })

}
