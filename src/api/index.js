import axios from 'axios';
/* for accesing api axios is used */
const url = "https://covid19.mathdro.id/api";

export const fetchData = async(country) => {
    let changeableUrl = url;
    if(country) {
        changeableUrl=`${url}/countries/${country}`;

    }
    try {
        /*here,since we only want the specific section of object,
        we modify the object accordingly and data is broken accordingly from
        object it can be given as: */
        const {data: {confirmed , recovered , deaths, lastUpdate}} = await axios.get(changeableUrl);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,

        }
        return modifiedData;
    }
    catch (error) {

    }
}
/*here we are directly returning the
api response to the export section */


export const fetchDailyData = async () => {
    try{
        const {data } = await axios.get(`${url}/daily`);
         /*destructuring and storing the array in data */
        const modifiedData = data.map((dailyData) => ({
             confirmed: dailyData.confirmed.total,
             deaths:dailyData.deaths.total,
             date:dailyData.reportDate,
            }));
      return modifiedData;
    } catch (error) {

    }
}

export const fetchCountries = async() => {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}