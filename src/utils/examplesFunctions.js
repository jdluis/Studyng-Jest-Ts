
const cities = ["Nueva York", "Londres", "Tokio", "París", "Madrid", "Roma", "Sídney", "Río de Janeiro", "Berlín", "Moscú"]

const randomStringofArray = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
}

//without test for testing the coverage
const reverseString2 = str => {
    return new Promise ((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}

module.exports = randomStringofArray