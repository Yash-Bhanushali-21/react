import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    /*since we are handling asynchronous 
    request, thus asynchorous data is to be rendered
    as such ,t is called once in the component life cycle and it signals that the component and all its sub-components have rendered properly. This is the best place to make API calls since, at this point, the component has been mounted and is available to the DOM. */

  async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
        /*what we did here, is we stored the fetched data,
          and stored it in the data object of state. */
    }
    /*now that we have data in our state,
    we can manipulate it in cards and other
    components */
    state = {
        data: {},
        country: '',
    }
    handleCountryChange = async (country) => {
        //fetch the data and set the state later.
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country})

    }
    render() {
        const {data,country} = this.state;
        /*creating a varible of data
        so that we can impilicitly pass
        a reference of data. */
        return (
        <div className={styles.container}>
            <h1>Corona Tracker</h1>
            <Cards data={data}></Cards>
            <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
            <Chart data={data} country={country}></Chart>
            
        </div>
        )
    }
}
export default App;
