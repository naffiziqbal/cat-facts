console.log('hello');

const loadFacts = () => {
    const url = 'https://catfact.ninja/fact'
    fetch(url)
    .then( res => res.json())
    .then( data => displayFacts(data.fact))
}

const displayFacts = fact => {
    const factDisplay = document.getElementById('facts');
    factDisplay.innerHTML = ` `;
    const factDiv = document.createElement('div');
    factDiv.classList.add('fact');
    factDiv.innerHTML  = `
    <h3>Did you Know this Fact That.....</h3>
    <P>${fact}</P>
    `;
    factDisplay.appendChild(factDiv);

} 

// loadFacts();
