const axios = require('axios');

class DataSource {
    static searchMeal (keyword) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
            return response.data;
        })
        .then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${keyword} doesn't exist`);
            }
        })
    };
}

export default DataSource;