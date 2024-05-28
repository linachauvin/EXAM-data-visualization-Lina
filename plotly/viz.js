fetch('data.json')
    .then(response => response.json())
    .then(data => runVisualization(data))
    .catch(error => console.error('Error loading data:', error));

function runVisualization(data) {
    sortByCountryPopulation(data);
    const top30Countries = data.slice(0, 30);
    const countryNames = top30Countries.map(country => country.country);
    const countryPopulations = top30Countries.map(country => country.population);

    const plotData = [{
        x: countryNames,
        y: countryPopulations,
        type: 'bar'
    }];

    const layout = {
        title: 'Data distribution of countries population',
        xaxis: {
            tickangle: -40, 
            tickfont: {
                size: 10
            }
        }
    };

    Plotly.newPlot('data-viz', plotData, layout);
}

function sortByCountryPopulation(data) {
    data.sort((a, b) => a.population - b.population);
}
