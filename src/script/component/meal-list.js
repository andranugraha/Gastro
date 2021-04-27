class MealList extends HTMLElement {
  
    set meals(meals) {
        this._meals = meals;
        this.render();
    }
  
    renderError(message) {
        this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                background-color: white;
                padding: 5px 10px;
                border-radius: 10px;
                color: black;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this.innerHTML += `<h4 class="placeholder">${message}</h4>`;
    }
  
    render() {
        this.innerHTML = "";
        this._meals.forEach(meal => {
            this.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img class="card-img-top" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="card-body">
                        <h2 class="card-title">${meal.strMeal}</h2>
                        <p class="card-text">${meal.strCategory}, ${meal.strArea}</p>
                        <a class="detail" href="${meal.strSource}" target="_blank">Read Article</a>
                        |
                        <a class="detail" href="${meal.strYoutube}" target="_blank">Tutorial Video</a>
                    </div>
                </div>
            </div>`;
        })
    }
 }
  
 customElements.define("meal-list", MealList);