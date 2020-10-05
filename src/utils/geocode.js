const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 
    encodeURIComponent(address) + 
    '.json?country=US&access_token=pk.eyJ1Ijoic2FhZG1haG1vdWQiLCJhIjoiY2tmbnlhbmx2MGNqbjJ6cGNpYWVpeGo3NSJ9.OjlZ7Msr9a2CX-oniEYMXg'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geo service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode