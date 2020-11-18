const search = document.querySelector(".input-box");
const button = document.querySelector("button");
let heading = document.querySelector("h4");
let results = document.querySelector(".results");

// Find Meal
function searchForMeal() {
    let searchTerm = search.value;
    let term = searchTerm.toUpperCase();

    let apiKey = "&apiKey=f89363e7e50540e888165790faf997ad";
    let spoonacularURL = 
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}`
        + apiKey;
    
    fetch(spoonacularURL)
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                console.log(item)
                results.innerHTML += `
                    <div style="
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                                margin: 10px 10px;
                                padding-bottom: 10px;
                                background: #F5F5F5;
                                ">
                        <h3 style="padding: 10px 0px 10px 0px; background: #F5F5F5;">${item.title}</h3>
                        <img src="${item.image}" style="
                                                        // border-radius: 5px;
                                                        border: solid light-grey 1px;
                                                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                                                        width: 200px;
                                                        ">
                        </img>
                        <div style="font-size: 10px; 
                                    background: #F5F5F5"> 
                            <i class="fas fa-heart" style="background: white"></i>
                            ${item.likes}
                        </div>
                    </div>
                `
            })
        })
    
    // Add Search Result to Heading
    heading.innerHTML = `Search Results for '${term}'`

    // Clear Search Box
    search.value =''
}




button.addEventListener("click", function (e) {
  e.preventDefault();
  searchForMeal();
})