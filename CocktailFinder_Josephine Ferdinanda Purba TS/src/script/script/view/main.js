const main = () => {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const cocktailListElement = document.querySelector('#cocktailList');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCocktail(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    cocktailListElement.innerHTML = '';

    results.forEach(cocktail => {
      const {strDrink, strDrinkThumb, idDrink} = cocktail;
      const cocktailElement = document.createElement('div');
      cocktailElement.setAttribute('class', 'cocktail');

      cocktailElement.innerHTML = `
        <img class="str-drink-thumb-cocktail" src="${strDrinkThumb}" alt="str Drink Thumb">
        <div class="cocktail-info">
          <h2>${strDrink}</h2>
          <p>${idDrink}</p>
        </div>
      `;

      cocktailListElement.appendChild(cocktailElement);
    });
  };

  const fallbackResult = message => {
    cocktailListElement.innerHTML = '';
    cocktailListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};


