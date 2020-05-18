import api from '../../services/api';

var options = [];     

api.get('/data').then(
    response => response.data.map( optionsObjects => {
        return options.push({ value: optionsObjects.model, label: optionsObjects.model})
    })
);  

export default options;