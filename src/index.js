import './styles/styles.css';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries.js'
import debounce from 'lodash.debounce';
import countriesListTemplate from './templates/countriesListTemplate.hbs'
import countryInfoTemplate from './templates/countryInfoTemplate.hbs'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import errorMessage from './js/errorMessage.js';

const dataShow = (countries) => {
    if (countries.length > 10) errorMessage().open();
    else if (countries.length > 1) refs.resultMarkup.innerHTML = countriesListTemplate(countries);
    else if (countries.length === 1) refs.resultMarkup.innerHTML = countryInfoTemplate(...countries);
}

const searchValueHandler = () => {
    if (refs.input.value.length > 0) {
        refs.resultMarkup.innerHTML = '';
        fetchCountries(refs.input.value)
            .then(data => dataShow(data));
    }
}

refs.input.addEventListener('input', debounce(searchValueHandler, 500));