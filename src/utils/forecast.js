const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8453e810d7240331bdea093a3087d3ad&query=' + 
    latitude + ',' + 
    longitude + 
    '&units=f'
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const data = body.current
            callback(undefined, data.weather_descriptions[0] + 
                '. It is currently ' + data.temperature + 
                ' degrees out. It feels like ' + data.feelslike + 
                ' degrees out.' + 
                'The humidity is ' + data.humidity + '.')
        }
    })
}

module.exports = forecast