const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

/* 
const url = 'http://api.weatherstack.com/current?access_key=8453e810d7240331bdea093a3087d3ad&query=New%20York&units=f'

request({ url: url, json: true}, (error, response) => {
    
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location!')
    }
     else {
        const data = response.body.current
        console.log(data.weather_descriptions[0])
        console.log('It is currently', data.temperature, 'degrees out. It feels like', data.feelslike, 'degrees out.')
    }
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ny.json?country=US&access_token=pk.eyJ1Ijoic2FhZG1haG1vdWQiLCJhIjoiY2tmbnlhbmx2MGNqbjJ6cGNpYWVpeGo3NSJ9.OjlZ7Msr9a2CX-oniEYMXg'

request({ url: geocodeURL, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to geo service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log('Latitude:', latitude)
        console.log('Longitude:', longitude)
    }
})
 */

const location = process.argv[2]

if (!location) {
    console.log('Please provide an address!')
} else {
    geocode(location, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
    
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    })    
}