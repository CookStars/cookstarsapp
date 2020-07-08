export const users = [
  {
    firstName: "Grace",
    lastName: "Shopper",
    userName: "GShopper",
    email: "Gshopper@gmail.com",
    points: "50",
    vegan: false,
    favoriteRecipes: {},
    recipeHistory: {},
    image: "",
  },
  {
    firstName: "John",
    lastName: "Doe",
    userName: "JDoe",
    email: "JDoe@gmail.com",
    points: "25",
    vegan: true,
    favoriteRecipes: {},
    recipeHistory: {},
    image: "",
  },
];

let recipes = {
  "recipes": [
  {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 2,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 8,
    "spoonacularScore": 89.0,
    "healthScore": 44.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 63.14,
    "extendedIngredients": [
      {
        "id": 11821,
        "aisle": "Produce",
        "image": "red-pepper.jpg",
        "consistency": "solid",
        "name": "red bell pepper",
        "original": "1 Red bell pepper, roasted",
        "originalString": "1 Red bell pepper, roasted",
        "originalName": "Red bell pepper, roasted",
        "amount": 1.0,
        "unit": "",
        "meta": [
          "red"
        ],
        "metaInformation": [
          "red"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 11529,
        "aisle": "Produce",
        "image": "tomato.png",
        "consistency": "solid",
        "name": "tomato",
        "original": "1 ripe tomato",
        "originalString": "1 ripe tomato",
        "originalName": "ripe tomato",
        "amount": 1.0,
        "unit": "",
        "meta": [
          "ripe"
        ],
        "metaInformation": [
          "ripe"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 10011282,
        "aisle": "Produce",
        "image": "red-onion.png",
        "consistency": "solid",
        "name": "red onion",
        "original": "Red onion, peeled and thinly sliced",
        "originalString": "Red onion, peeled and thinly sliced",
        "originalName": "Red onion, peeled and thinly sliced",
        "amount": 1.0,
        "unit": "serving",
        "meta": [
          "red",
          "peeled",
          "thinly sliced"
        ],
        "metaInformation": [
          "red",
          "peeled",
          "thinly sliced"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      },
      {
        "id": 2054,
        "aisle": "Canned and Jarred",
        "image": "capers.jpg",
        "consistency": "solid",
        "name": "capers",
        "original": "Capers",
        "originalString": "Capers",
        "originalName": "Capers",
        "amount": 1.0,
        "unit": "serving",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consistency": "liquid",
        "name": "olive oil",
        "original": "Olive oil",
        "originalString": "Olive oil",
        "originalName": "Olive oil",
        "amount": 1.0,
        "unit": "serving",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      },
      {
        "id": 1002047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "solid",
        "name": "coarse salt",
        "original": "Coarse Salt",
        "originalString": "Coarse Salt",
        "originalName": "Coarse Salt",
        "amount": 1.0,
        "unit": "serving",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      },
      {
        "id": 1002030,
        "aisle": "Spices and Seasonings",
        "image": "pepper.jpg",
        "consistency": "solid",
        "name": "pepper",
        "original": "Cracked black pepper",
        "originalString": "Cracked black pepper",
        "originalName": "Cracked black pepper",
        "amount": 1.0,
        "unit": "serving",
        "meta": [
          "black"
        ],
        "metaInformation": [
          "black"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      },
      {
        "id": 2049,
        "aisle": "Produce",
        "image": "thyme.jpg",
        "consistency": "solid",
        "name": "fresh thyme",
        "original": "Fresh thyme",
        "originalString": "Fresh thyme",
        "originalName": "Fresh thyme",
        "amount": 1.0,
        "unit": "serving",
        "meta": [
          "fresh"
        ],
        "metaInformation": [
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      }
    ],
    "id": 658655,
    "title": "Roasted red peppers and tomatoes salad",
    "readyInMinutes": 45,
    "servings": 2,
    "sourceUrl": "https://www.foodista.com/recipe/8BP5H3MS/roasted-red-peppers-and-tomatoes-salad",
    "image": "https://spoonacular.com/recipeImages/658655-556x370.jpg",
    "imageType": "jpg",
    "summary": "If you have approximately <b>approximately 45 minutes</b> to spend in the kitchen, Roasted red peppers and tomatoes salad might be a great <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe to try. This recipe serves 2 and costs 63 cents per serving. This side dish has <b>92 calories</b>, <b>1g of protein</b>, and <b>7g of fat</b> per serving. This recipe from Foodista requires bell pepper, tomato, coarse salt, and capers. 8 people were glad they tried this recipe. Overall, this recipe earns a <b>great spoonacular score of 90%</b>. Try <a href=\"https://spoonacular.com/recipes/chicken-breasts-stuffed-with-asiago-cheese-tomatoes-and-roasted-red-peppers-560255\">Chicken Breasts Stuffed with Asiago Cheese, Tomatoes and Roasted Red Peppers</a>, <a href=\"https://spoonacular.com/recipes/chopped-mexican-salad-with-roasted-peppers-corn-tomatoes-and-95943\">Chopped Mexican Salad With Roasted Peppers, Corn, Tomatoes, And</a>, and <a href=\"https://spoonacular.com/recipes/roasted-red-peppers-and-almond-salad-509604\">Roasted Red Peppers And Almond Salad</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
      "side dish",
      "salad"
    ],
    "diets": [
      "gluten free",
      "dairy free",
      "paleolithic",
      "lacto ovo vegetarian",
      "primal",
      "vegan"
    ],
    "occasions": [],
    "winePairing": {
      "pairedWines": [
        "chardonnay",
        "gruener veltliner",
        "sauvignon blanc"
      ],
      "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are my top picks for Salad. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. One wine you could try is Chateau Ste. Michelle Chardonnay (Anniversary Label). It has 4.1 out of 5 stars and a bottle costs about 11 dollars.",
      "productMatches": [
        {
          "id": 481110,
          "title": "Chateau Ste. Michelle Chardonnay (Anniversary Label)",
          "description": "Chateau Ste. Michelle Chardonnay is a pleasurable, food-friendly wine. It is crafted in a fresh, soft style with bright apple and sweet citrus fruit character with subtle spice and oak nuances. This special 50th Anniversary bottling celebrates five decades of Chateau Ste. Michelle’s commitment to tradition, innovation and the future.\nPairs well with crab, poultry, salmon, and scallops. Try seasoning with ginger, lemon zest, tarragon, or thyme.",
          "price": "$10.99",
          "imageUrl": "https://spoonacular.com/productImages/481110-312x231.jpg",
          "averageRating": 0.82,
          "ratingCount": 64.0,
          "score": 0.8148186528497409,
          "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fchateau-ste-michelle-chardonnay-anniversary-label-2016%2F312664"
        }
      ]
    },
    "instructions": "Char the red bell pepper over a grill or gas flame, or on a cookie sheet under the broiler. Turn the peppers as their skin blisters and chars on all sides. Transfer to a bowl and cover.\nWhen peppers are cool to the touch, peel off the skin with your fingers, pull off stems, then tear them open and remove and discard seeds. Cut into large pieces\nArrange 1 thickly sliced ripe tomato and the large bell peppers pieces.\nScatter with thinly sliced red onion and capers.\nDrizzle with olive oil, season to taste with coarse salt and cracked black pepper and garnish with thyme.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Char the red bell pepper over a grill or gas flame, or on a cookie sheet under the broiler. Turn the peppers as their skin blisters and chars on all sides.",
            "ingredients": [
              {
                "id": 11821,
                "name": "red pepper",
                "localizedName": "red pepper",
                "image": "red-pepper.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404727,
                "name": "baking sheet",
                "localizedName": "baking sheet",
                "image": "baking-sheet.jpg"
              },
              {
                "id": 405914,
                "name": "broiler",
                "localizedName": "broiler",
                "image": "oven.jpg"
              },
              {
                "id": 404706,
                "name": "grill",
                "localizedName": "grill",
                "image": "grill.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Transfer to a bowl and cover.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 3,
            "step": "When peppers are cool to the touch, peel off the skin with your fingers, pull off stems, then tear them open and remove and discard seeds.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Cut into large pieces",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Arrange 1 thickly sliced ripe tomato and the large bell peppers pieces.",
            "ingredients": [
              {
                "id": 10211821,
                "name": "bell pepper",
                "localizedName": "bell pepper",
                "image": "bell-pepper-orange.png"
              },
              {
                "id": 11529,
                "name": "tomato",
                "localizedName": "tomato",
                "image": "tomato.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Scatter with thinly sliced red onion and capers.",
            "ingredients": [
              {
                "id": 10011282,
                "name": "red onion",
                "localizedName": "red onion",
                "image": "red-onion.png"
              },
              {
                "id": 2054,
                "name": "capers",
                "localizedName": "capers",
                "image": "capers.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 7,
            "step": "Drizzle with olive oil, season to taste with coarse salt and cracked black pepper and garnish with thyme.",
            "ingredients": [
              {
                "id": 1002047,
                "name": "coarse salt",
                "localizedName": "coarse salt",
                "image": "salt.jpg"
              },
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              },
              {
                "id": 2049,
                "name": "thyme",
                "localizedName": "thyme",
                "image": "thyme.jpg"
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/roasted-red-peppers-and-tomatoes-salad-658655"
  },

  {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 22,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 11,
    "spoonacularScore": 78.0,
    "healthScore": 25.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 196.38,
    "extendedIngredients": [
      {
        "id": 2004,
        "aisle": "Produce;Spices and Seasonings",
        "image": "bay-leaves.jpg",
        "consistency": "solid",
        "name": "bay leaves",
        "original": "2 bay leaves",
        "originalString": "2 bay leaves",
        "originalName": "bay leaves",
        "amount": 2.0,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 10011090,
        "aisle": "Produce",
        "image": "broccoli.jpg",
        "consistency": "solid",
        "name": "broccoli florets",
        "original": "4 cups broccoli florets (about 1 head)",
        "originalString": "4 cups broccoli florets (about 1 head)",
        "originalName": "broccoli florets (about 1 head)",
        "amount": 4.0,
        "unit": "cups",
        "meta": [
          "( 1 head)"
        ],
        "metaInformation": [
          "( 1 head)"
        ],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 946.352,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 1001,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "solid",
        "name": "butter",
        "original": "1/4 cup butter",
        "originalString": "1/4 cup butter",
        "originalName": "butter",
        "amount": 0.25,
        "unit": "cup",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 59.147,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 11124,
        "aisle": "Produce",
        "image": "sliced-carrot.png",
        "consistency": "solid",
        "name": "carrot",
        "original": "1 large carrot, diced",
        "originalString": "1 large carrot, diced",
        "originalName": "carrot, diced",
        "amount": 1.0,
        "unit": "large",
        "meta": [
          "diced"
        ],
        "metaInformation": [
          "diced"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "large",
            "unitLong": "large"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "large",
            "unitLong": "large"
          }
        }
      },
      {
        "id": 20081,
        "aisle": "Baking",
        "image": "flour.png",
        "consistency": "solid",
        "name": "flour",
        "original": "1/4 cup flour",
        "originalString": "1/4 cup flour",
        "originalName": "flour",
        "amount": 0.25,
        "unit": "cup",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 59.147,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 1049,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "fluid-cream.jpg",
        "consistency": "solid",
        "name": "half n half",
        "original": "2 cups half-and-half",
        "originalString": "2 cups half-and-half",
        "originalName": "half-and-half",
        "amount": 2.0,
        "unit": "cups",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 473.176,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 1082047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "solid",
        "name": "kosher salt",
        "original": "Kosher salt and freshly ground pepper",
        "originalString": "Kosher salt and freshly ground pepper",
        "originalName": "Kosher salt and freshly ground pepper",
        "amount": 4.0,
        "unit": "servings",
        "meta": [
          "freshly ground"
        ],
        "metaInformation": [
          "freshly ground"
        ],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 4.0,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 6970,
        "aisle": "Canned and Jarred",
        "image": "chicken-broth.png",
        "consistency": "liquid",
        "name": "low sodium chicken broth",
        "original": "3 cups low-sodium chicken broth",
        "originalString": "3 cups low-sodium chicken broth",
        "originalName": "low-sodium chicken broth",
        "amount": 3.0,
        "unit": "cups",
        "meta": [
          "low-sodium"
        ],
        "metaInformation": [
          "low-sodium"
        ],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 709.764,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 2025,
        "aisle": "Spices and Seasonings",
        "image": "ground-nutmeg.jpg",
        "consistency": "solid",
        "name": "nutmeg",
        "original": "1/4 teaspoon nutmeg",
        "originalString": "1/4 teaspoon nutmeg",
        "originalName": "nutmeg",
        "amount": 0.25,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 11282,
        "aisle": "Produce",
        "image": "brown-onion.png",
        "consistency": "solid",
        "name": "onion",
        "original": "1 onion, chopped",
        "originalString": "1 onion, chopped",
        "originalName": "onion, chopped",
        "amount": 1.0,
        "unit": "",
        "meta": [
          "chopped"
        ],
        "metaInformation": [
          "chopped"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1031009,
        "aisle": "Cheese",
        "image": "cheddar-cheese.png",
        "consistency": "solid",
        "name": "sharp cheddar cheese",
        "original": "2 1/2 cups (about 8 ounces) grated sharp white and yellow cheddar cheese, plus more for garnish",
        "originalString": "2 1/2 cups (about 8 ounces) grated sharp white and yellow cheddar cheese, plus more for garnish",
        "originalName": "1/2 cups (about grated sharp white and yellow cheddar cheese, plus more for garnish",
        "amount": 8.0,
        "unit": "ounces",
        "meta": [
          "white",
          "yellow",
          "grated",
          "plus more for garnish"
        ],
        "metaInformation": [
          "white",
          "yellow",
          "grated",
          "plus more for garnish"
        ],
        "measures": {
          "us": {
            "amount": 8.0,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 226.796,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 10118029,
        "aisle": "Bakery/Bread",
        "image": "sourdough-bread.jpg",
        "consistency": "solid",
        "name": "sourdough bread",
        "original": "7 inches sourdough bread boules (round loaves)",
        "originalString": "7 inches sourdough bread boules (round loaves)",
        "originalName": "sourdough bread boules (round loaves)",
        "amount": 7.0,
        "unit": "inches",
        "meta": [
          "(round loaves)"
        ],
        "metaInformation": [
          "(round loaves)"
        ],
        "measures": {
          "us": {
            "amount": 7.0,
            "unitShort": "inches",
            "unitLong": "inches"
          },
          "metric": {
            "amount": 7.0,
            "unitShort": "inches",
            "unitLong": "inches"
          }
        }
      }
    ],
    "id": 636178,
    "title": "Broccoli Cheddar Soup, A Panera Bread Co. Copycat",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://www.foodista.com/recipe/N3TSHPQV/broccoli-cheddar-soup-a-panera-bread-co-copycat",
    "image": "https://spoonacular.com/recipeImages/636178-556x370.jpg",
    "imageType": "jpg",
    "summary": "You can never have too many main course recipes, so give Broccoli Cheddar Soup, A Panera Bread Co. Copycat a try. One serving contains <b>606 calories</b>, <b>26g of protein</b>, and <b>46g of fat</b>. This recipe serves 4 and costs $1.96 per serving. A mixture of chicken broth, kosher salt and pepper, half-and-half, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the half & half you could follow this main course with the <a href=\"https://spoonacular.com/recipes/coconut-cream-pie-made-with-half-half-157893\">Coconut Cream Pie Made With Half & Half</a> as a dessert. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>vegetarian</b> diet. Not a lot of people made this recipe, and 9 would say it hit the spot. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 78%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/copycat-panera-broccoli-cheddar-cheese-soup-640038\">Copycat Panera Broccoli Cheddar Cheese Soup</a>, <a href=\"https://spoonacular.com/recipes/copycat-panera-broccoli-cheese-soup-627790\">Copycat Panera Broccoli Cheese Soup</a>, and <a href=\"https://spoonacular.com/recipes/the-best-broccoli-cheese-soup-better-than-panera-copycat-626154\">The Best Broccoli Cheese Soup (Better-Than-Panera Copycat)</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
      "bread"
    ],
    "diets": [
      "lacto ovo vegetarian"
    ],
    "occasions": [
      "fall",
      "winter"
    ],
    "winePairing": {
      "pairedWines": [],
      "pairingText": "",
      "productMatches": []
    },
    "instructions": "<ol><li>Melt the butter in a large Dutch oven or pot over medium heat. Add the onion and cook until tender, about 5 minutes.</li><li>Whisk in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth.</li><li>Add the chicken broth, bay leaves and nutmeg, then season with salt and pepper and bring to a simmer.</li><li>Reduce the heat to medium-low and cook, uncovered, until thickened, about 20 minutes.</li><li>Meanwhile, prepare the bread bowls: Using a sharp knife, cut a circle into the top of each loaf, leaving a 1-inch border all around.</li><li>Remove the bread top, then hollow out the middle with a fork or your fingers, leaving a thick bread shell.</li><li>Add the broccoli and carrot to the broth mixture and simmer until tender, about 20 minutes.</li><li>Discard the bay leaves.</li><li>Puree the soup in batches in a blender until smooth; you'll still have flecks of carrot and broccoli.</li><li>Return to the pot. (Or puree the soup in the pot with an immersion blender.)</li><li>Add the cheese to the soup and whisk over medium heat until melted.</li><li>Add up to 3/4 cup water if the soup is too thick.</li><li>Ladle into the bread bowls and garnish with cheese.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Melt the butter in a large Dutch oven or pot over medium heat.",
            "ingredients": [
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404667,
                "name": "dutch oven",
                "localizedName": "dutch oven",
                "image": "dutch-oven.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Add the onion and cook until tender, about 5 minutes.",
            "ingredients": [
              {
                "id": 11282,
                "name": "onion",
                "localizedName": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": [],
            "length": {
              "number": 5,
              "unit": "minutes"
            }
          },
          {
            "number": 3,
            "step": "Whisk in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth.",
            "ingredients": [
              {
                "id": 20081,
                "name": "all purpose flour",
                "localizedName": "all purpose flour",
                "image": "flour.png"
              }
            ],
            "equipment": [
              {
                "id": 404661,
                "name": "whisk",
                "localizedName": "whisk",
                "image": "whisk.png"
              }
            ],
            "length": {
              "number": 3,
              "unit": "minutes"
            }
          },
          {
            "number": 4,
            "step": "Add the chicken broth, bay leaves and nutmeg, then season with salt and pepper and bring to a simmer.Reduce the heat to medium-low and cook, uncovered, until thickened, about 20 minutes.Meanwhile, prepare the bread bowls: Using a sharp knife, cut a circle into the top of each loaf, leaving a 1-inch border all around.",
            "ingredients": [
              {
                "id": 1102047,
                "name": "salt and pepper",
                "localizedName": "salt and pepper",
                "image": "salt-and-pepper.jpg"
              },
              {
                "id": 2004,
                "name": "bay leaves",
                "localizedName": "bay leaves",
                "image": "bay-leaves.jpg"
              },
              {
                "id": 2025,
                "name": "nutmeg",
                "localizedName": "nutmeg",
                "image": "ground-nutmeg.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              },
              {
                "id": 404745,
                "name": "knife",
                "localizedName": "knife",
                "image": "chefs-knife.jpg"
              }
            ],
            "length": {
              "number": 20,
              "unit": "minutes"
            }
          },
          {
            "number": 5,
            "step": "Remove the bread top, then hollow out the middle with a fork or your fingers, leaving a thick bread shell.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Add the broccoli and carrot to the broth mixture and simmer until tender, about 20 minutes.Discard the bay leaves.Puree the soup in batches in a blender until smooth; you'll still have flecks of carrot and broccoli.Return to the pot. (Or puree the soup in the pot with an immersion blender.)",
            "ingredients": [
              {
                "id": 2004,
                "name": "bay leaves",
                "localizedName": "bay leaves",
                "image": "bay-leaves.jpg"
              },
              {
                "id": 11090,
                "name": "broccoli",
                "localizedName": "broccoli",
                "image": "broccoli.jpg"
              },
              {
                "id": 11124,
                "name": "carrot",
                "localizedName": "carrot",
                "image": "sliced-carrot.png"
              }
            ],
            "equipment": [
              {
                "id": 404776,
                "name": "immersion blender",
                "localizedName": "immersion blender",
                "image": "immersion-blender.png"
              },
              {
                "id": 404726,
                "name": "blender",
                "localizedName": "blender",
                "image": "blender.png"
              },
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ],
            "length": {
              "number": 20,
              "unit": "minutes"
            }
          },
          {
            "number": 7,
            "step": "Add the cheese to the soup and whisk over medium heat until melted.",
            "ingredients": [
              {
                "id": 1041009,
                "name": "cheese",
                "localizedName": "cheese",
                "image": "cheddar-cheese.png"
              }
            ],
            "equipment": [
              {
                "id": 404661,
                "name": "whisk",
                "localizedName": "whisk",
                "image": "whisk.png"
              }
            ]
          },
          {
            "number": 8,
            "step": "Add up to 3/4 cup water if the soup is too thick.Ladle into the bread bowls and garnish with cheese.",
            "ingredients": [
              {
                "id": 1041009,
                "name": "cheese",
                "localizedName": "cheese",
                "image": "cheddar-cheese.png"
              }
            ],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              },
              {
                "id": 404630,
                "name": "ladle",
                "localizedName": "ladle",
                "image": "ladle.jpg"
              }
            ]
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/broccoli-cheddar-soup-a-panera-bread-co-copycat-636178"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 20,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 32,
    "spoonacularScore": 63.0,
    "healthScore": 13.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 372.72,
    "extendedIngredients": [
      {
        "id": 10123,
        "aisle": "Meat",
        "image": "raw-bacon.png",
        "consistency": "solid",
        "name": "bacon",
        "original": "1/2 lb bacon slices",
        "originalString": "1/2 lb bacon slices",
        "originalName": "bacon slices",
        "amount": 0.5,
        "unit": "lb",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "lb",
            "unitLong": "pounds"
          },
          "metric": {
            "amount": 226.796,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 2004,
        "aisle": "Produce;Spices and Seasonings",
        "image": "bay-leaves.jpg",
        "consistency": "solid",
        "name": "bay leaves",
        "original": "2 bay leaves",
        "originalString": "2 bay leaves",
        "originalName": "bay leaves",
        "amount": 2.0,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1001,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "solid",
        "name": "butter",
        "original": "2 Tbsp butter",
        "originalString": "2 Tbsp butter",
        "originalName": "butter",
        "amount": 2.0,
        "unit": "Tbsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 11260,
        "aisle": "Produce",
        "image": "mushrooms.png",
        "consistency": "solid",
        "name": "button mushrooms",
        "original": "1/2 lb button mushrooms, trimmed and roughly chopped",
        "originalString": "1/2 lb button mushrooms, trimmed and roughly chopped",
        "originalName": "button mushrooms, trimmed and roughly chopped",
        "amount": 0.5,
        "unit": "lb",
        "meta": [
          "trimmed",
          "roughly chopped"
        ],
        "metaInformation": [
          "trimmed",
          "roughly chopped"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "lb",
            "unitLong": "pounds"
          },
          "metric": {
            "amount": 226.796,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 5075,
        "aisle": "Meat",
        "image": "chicken-drumsticks.jpg",
        "consistency": "solid",
        "name": "chicken legs",
        "original": "3 lbs chicken thighs and legs, excess fat trimmed, skin ON",
        "originalString": "3 lbs chicken thighs and legs, excess fat trimmed, skin ON",
        "originalName": "chicken thighs and legs, excess fat trimmed, skin ON",
        "amount": 3.0,
        "unit": "lbs",
        "meta": [
          "fat trimmed",
          ", skin on"
        ],
        "metaInformation": [
          "fat trimmed",
          ", skin on"
        ],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "lb",
            "unitLong": "pounds"
          },
          "metric": {
            "amount": 1.361,
            "unitShort": "kilogram",
            "unitLong": "kilograms"
          }
        }
      },
      {
        "id": 6172,
        "aisle": "Canned and Jarred",
        "image": "chicken-broth.png",
        "consistency": "liquid",
        "name": "chicken stock",
        "original": "2 cups chicken stock",
        "originalString": "2 cups chicken stock",
        "originalName": "chicken stock",
        "amount": 2.0,
        "unit": "cups",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 473.176,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 11297,
        "aisle": "Produce",
        "image": "parsley.jpg",
        "consistency": "solid",
        "name": "fresh parsley",
        "original": "Chopped fresh parsley for garnish",
        "originalString": "Chopped fresh parsley for garnish",
        "originalName": "Chopped fresh parsley for garnish",
        "amount": 6.0,
        "unit": "servings",
        "meta": [
          "fresh",
          "chopped",
          "for garnish"
        ],
        "metaInformation": [
          "fresh",
          "chopped",
          "for garnish"
        ],
        "measures": {
          "us": {
            "amount": 6.0,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 6.0,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "solid",
        "name": "garlic cloves",
        "original": "6 garlic cloves, peeled",
        "originalString": "6 garlic cloves, peeled",
        "originalName": "garlic cloves, peeled",
        "amount": 6.0,
        "unit": "",
        "meta": [
          "peeled"
        ],
        "metaInformation": [
          "peeled"
        ],
        "measures": {
          "us": {
            "amount": 6.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 6.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 11297,
        "aisle": "Produce",
        "image": "parsley.jpg",
        "consistency": "solid",
        "name": "parsley",
        "original": "Several fresh parsley sprigs",
        "originalString": "Several fresh parsley sprigs",
        "originalName": "Several fresh parsley",
        "amount": 1.0,
        "unit": "sprigs",
        "meta": [
          "fresh"
        ],
        "metaInformation": [
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "sprigs",
            "unitLong": "sprig"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "sprigs",
            "unitLong": "sprig"
          }
        }
      },
      {
        "id": 10111282,
        "aisle": "Produce",
        "image": "pearl-onions.png",
        "consistency": "solid",
        "name": "pearl onions",
        "original": "20 pearl onions, peeled, or 1 large yellow onion, sliced",
        "originalString": "20 pearl onions, peeled, or 1 large yellow onion, sliced",
        "originalName": "20 pearl onions, peeled, or 1 large yellow onion, sliced",
        "amount": 20.0,
        "unit": "large",
        "meta": [
          "yellow",
          "peeled",
          "sliced"
        ],
        "metaInformation": [
          "yellow",
          "peeled",
          "sliced"
        ],
        "measures": {
          "us": {
            "amount": 20.0,
            "unitShort": "large",
            "unitLong": "larges"
          },
          "metric": {
            "amount": 20.0,
            "unitShort": "large",
            "unitLong": "larges"
          }
        }
      },
      {
        "id": 14096,
        "aisle": "Alcoholic Beverages",
        "image": "red-wine.jpg",
        "consistency": "liquid",
        "name": "red wine",
        "original": "2 cups red wine (pinot noir, burgundy, or zinfandel)",
        "originalString": "2 cups red wine (pinot noir, burgundy, or zinfandel)",
        "originalName": "red wine (pinot noir, burgundy, or zinfandel)",
        "amount": 2.0,
        "unit": "cups",
        "meta": [
          "red",
          "(pinot noir, burgundy, or zinfandel)"
        ],
        "metaInformation": [
          "red",
          "(pinot noir, burgundy, or zinfandel)"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 473.176,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 1102047,
        "aisle": "Spices and Seasonings",
        "image": "salt-and-pepper.jpg",
        "consistency": "solid",
        "name": "salt and pepper",
        "original": "salt and pepper to taste",
        "originalString": "salt and pepper to taste",
        "originalName": "salt and pepper to taste",
        "amount": 6.0,
        "unit": "servings",
        "meta": [
          "to taste"
        ],
        "metaInformation": [
          "to taste"
        ],
        "measures": {
          "us": {
            "amount": 6.0,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 6.0,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 2049,
        "aisle": "Produce",
        "image": "thyme.jpg",
        "consistency": "solid",
        "name": "thyme sprigs",
        "original": "Several fresh thyme sprigs",
        "originalString": "Several fresh thyme sprigs",
        "originalName": "Several fresh thyme",
        "amount": 1.0,
        "unit": "sprigs",
        "meta": [
          "fresh"
        ],
        "metaInformation": [
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "sprigs",
            "unitLong": "sprig"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "sprigs",
            "unitLong": "sprig"
          }
        }
      }
    ],
    "id": 648638,
    "title": "Julia Child's Coq au Vin",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://www.foodista.com/recipe/FCQYLDSL/julia-child-s-coq-au-vin",
    "image": "https://spoonacular.com/recipeImages/648638-556x370.jpg",
    "imageType": "jpg",
    "summary": "Julia Child's Coq au Vin might be just the main course you are searching for. For <b>$3.73 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>620 calories</b>, <b>31g of protein</b>, and <b>41g of fat</b> each. 32 people were impressed by this recipe. A mixture of chicken stock, wine, button mushrooms, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free and primal</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 66%</b>. This score is pretty good. Similar recipes include <a href=\"https://spoonacular.com/recipes/julia-childs-coq-au-vin-474447\">Julia Child’s Coq au Vin</a>, <a href=\"https://spoonacular.com/recipes/coq-au-vin-and-the-julia-child-100-502107\">Coq au Vin and the Julia Child 100</a>, and <a href=\"https://spoonacular.com/recipes/julia-childs-vichyssoise-648643\">Julia Child's Vichyssoise</a>.",
    "cuisines": [
      "Mediterranean",
      "French",
      "European"
    ],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [
      "gluten free"
    ],
    "occasions": [],
    "winePairing": {},
    "instructions": "<ol><li>Blanch the bacon to remove some of its saltiness. Drop the bacon into a saucepan of cold water, covered by a couple of inches. Bring to a boil, simmer for 5 minutes, drain. Rinse in cold water, pat dry with paper towels. Cut the bacon into 1 inch by 1/4 inch pieces.</li><li>Brown bacon on medium high heat in a dutch oven big enough to hold the chicken, about 10 minutes. Remove the cooked bacon, set aside. Keep the bacon fat in the pan. Working in batches if necessary, add onions and chicken, skin side down. Brown the chicken well, on all sides, about 10 minutes. Halfway through the browning, add the garlic and sprinkle the chicken with salt and pepper.</li><li>Spoon off any excess fat. Add the chicken stock, wine, and herbs. Add back the bacon. Lower heat to a simmer. Cover and cook for 20 minutes, or until chicken is tender and cooked through. Remove chicken and onions to a separate platter. Remove the bay leaves, herb sprigs, garlic, and discard.</li><li>Add mushrooms to the remaining liquid and turn the heat to high. Boil quickly and reduce the liquid by three fourths until it becomes thick and saucy. Lower the heat, stir in the butter. Return the chicken and onions to the pan to reheat and coat with sauce. Adjust seasoning. Garnish with parsley and serve with potatoes or egg noodles.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Blanch the bacon to remove some of its saltiness. Drop the bacon into a saucepan of cold water, covered by a couple of inches. Bring to a boil, simmer for 5 minutes, drain. Rinse in cold water, pat dry with paper towels.",
            "ingredients": [
              {
                "id": 10123,
                "name": "bacon",
                "localizedName": "bacon",
                "image": "raw-bacon.png"
              }
            ],
            "equipment": [
              {
                "id": 405895,
                "name": "paper towels",
                "localizedName": "paper towels",
                "image": "paper-towels.jpg"
              },
              {
                "id": 404669,
                "name": "sauce pan",
                "localizedName": "sauce pan",
                "image": "sauce-pan.jpg"
              }
            ],
            "length": {
              "number": 5,
              "unit": "minutes"
            }
          },
          {
            "number": 2,
            "step": "Cut the bacon into 1 inch by 1/4 inch pieces.Brown bacon on medium high heat in a dutch oven big enough to hold the chicken, about 10 minutes.",
            "ingredients": [
              {
                "id": 10123,
                "name": "bacon",
                "localizedName": "bacon",
                "image": "raw-bacon.png"
              }
            ],
            "equipment": [
              {
                "id": 404667,
                "name": "dutch oven",
                "localizedName": "dutch oven",
                "image": "dutch-oven.jpg"
              }
            ],
            "length": {
              "number": 10,
              "unit": "minutes"
            }
          },
          {
            "number": 3,
            "step": "Remove the cooked bacon, set aside. Keep the bacon fat in the pan. Working in batches if necessary, add onions and chicken, skin side down. Brown the chicken well, on all sides, about 10 minutes. Halfway through the browning, add the garlic and sprinkle the chicken with salt and pepper.Spoon off any excess fat.",
            "ingredients": [
              {
                "id": 1102047,
                "name": "salt and pepper",
                "localizedName": "salt and pepper",
                "image": "salt-and-pepper.jpg"
              },
              {
                "id": 11215,
                "name": "garlic",
                "localizedName": "garlic",
                "image": "garlic.png"
              },
              {
                "id": 11282,
                "name": "onion",
                "localizedName": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ],
            "length": {
              "number": 10,
              "unit": "minutes"
            }
          },
          {
            "number": 4,
            "step": "Add the chicken stock, wine, and herbs.",
            "ingredients": [
              {
                "id": 6172,
                "name": "chicken stock",
                "localizedName": "chicken stock",
                "image": "chicken-broth.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Add back the bacon. Lower heat to a simmer. Cover and cook for 20 minutes, or until chicken is tender and cooked through.",
            "ingredients": [
              {
                "id": 10123,
                "name": "bacon",
                "localizedName": "bacon",
                "image": "raw-bacon.png"
              }
            ],
            "equipment": [],
            "length": {
              "number": 20,
              "unit": "minutes"
            }
          },
          {
            "number": 6,
            "step": "Remove chicken and onions to a separate platter.",
            "ingredients": [
              {
                "id": 11282,
                "name": "onion",
                "localizedName": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 7,
            "step": "Remove the bay leaves, herb sprigs, garlic, and discard.",
            "ingredients": [
              {
                "id": 2004,
                "name": "bay leaves",
                "localizedName": "bay leaves",
                "image": "bay-leaves.jpg"
              },
              {
                "id": 11215,
                "name": "garlic",
                "localizedName": "garlic",
                "image": "garlic.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 8,
            "step": "Add mushrooms to the remaining liquid and turn the heat to high. Boil quickly and reduce the liquid by three fourths until it becomes thick and saucy. Lower the heat, stir in the butter. Return the chicken and onions to the pan to reheat and coat with sauce. Adjust seasoning.",
            "ingredients": [
              {
                "id": 11260,
                "name": "mushrooms",
                "localizedName": "mushrooms",
                "image": "mushrooms.png"
              },
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              },
              {
                "id": 11282,
                "name": "onion",
                "localizedName": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 9,
            "step": "Garnish with parsley and serve with potatoes or egg noodles.",
            "ingredients": [
              {
                "id": 11297,
                "name": "parsley",
                "localizedName": "parsley",
                "image": "parsley.jpg"
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/julia-childs-coq-au-vin-648638"
  },

  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 33,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 0,
    "cookingMinutes": 30,
    "aggregateLikes": 7,
    "spoonacularScore": 91.0,
    "healthScore": 60.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 360.62,
    "extendedIngredients": [
      {
        "id": 18375,
        "aisle": "Baking",
        "image": "yeast-granules.jpg",
        "consistency": "solid",
        "name": "active yeast",
        "original": "2 teaspoons active dry yeast",
        "originalString": "2 teaspoons active dry yeast",
        "originalName": "active dry yeast",
        "amount": 2.0,
        "unit": "teaspoons",
        "meta": [
          "dry"
        ],
        "metaInformation": [
          "dry"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 20027,
        "aisle": "Baking",
        "image": "white-powder.jpg",
        "consistency": "solid",
        "name": "cornstarch",
        "original": "2 tablespoons tsp cornstarch, mixed with 1 water",
        "originalString": "2 tablespoons tsp cornstarch, mixed with 1 water",
        "originalName": "tsp cornstarch, mixed with 1 water",
        "amount": 2.0,
        "unit": "tablespoons",
        "meta": [
          "mixed",
          "with 1 water"
        ],
        "metaInformation": [
          "mixed",
          "with 1 water"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 1125,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg-yolk.jpg",
        "consistency": "solid",
        "name": "egg yolk",
        "original": "1 egg yolk, lightly beaten",
        "originalString": "1 egg yolk, lightly beaten",
        "originalName": "egg yolk, lightly beaten",
        "amount": 1.0,
        "unit": "",
        "meta": [
          "lightly beaten"
        ],
        "metaInformation": [
          "lightly beaten"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 20081,
        "aisle": "Baking",
        "image": "flour.png",
        "consistency": "solid",
        "name": "flour",
        "original": "3 tablespoons flour (for gravy)",
        "originalString": "3 tablespoons flour (for gravy)",
        "originalName": "flour (for gravy)",
        "amount": 3.0,
        "unit": "tablespoons",
        "meta": [
          "(for gravy)"
        ],
        "metaInformation": [
          "(for gravy)"
        ],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "solid",
        "name": "garlic",
        "original": "2 cloves garlic, minced",
        "originalString": "2 cloves garlic, minced",
        "originalName": "garlic, minced",
        "amount": 2.0,
        "unit": "cloves",
        "meta": [
          "minced"
        ],
        "metaInformation": [
          "minced"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "cloves",
            "unitLong": "cloves"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "cloves",
            "unitLong": "cloves"
          }
        }
      },
      {
        "id": 11291,
        "aisle": "Produce",
        "image": "spring-onions.jpg",
        "consistency": "solid",
        "name": "green onions",
        "original": "1/2 cup minced green onions, (including tops)",
        "originalString": "1/2 cup minced green onions, (including tops)",
        "originalName": "minced green onions, (including tops)",
        "amount": 0.5,
        "unit": "cup",
        "meta": [
          "minced",
          "(including tops)"
        ],
        "metaInformation": [
          "minced",
          "(including tops)"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 118.294,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 6175,
        "aisle": "Ethnic Foods",
        "image": "dark-sauce.jpg",
        "consistency": "solid",
        "name": "hoisin sauce",
        "original": "4 teaspoons hoisin sauce",
        "originalString": "4 teaspoons hoisin sauce",
        "originalName": "hoisin sauce",
        "amount": 4.0,
        "unit": "teaspoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 4.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1077,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "milk.png",
        "consistency": "liquid",
        "name": "milk",
        "original": "1/2 cup warm milk, (110 degrees f)",
        "originalString": "1/2 cup warm milk, (110 degrees f)",
        "originalName": "warm milk, (110 degrees f)",
        "amount": 0.5,
        "unit": "cup",
        "meta": [
          "(110 degrees f)"
        ],
        "metaInformation": [
          "(110 degrees f)"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 118.294,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 11260,
        "aisle": "Produce",
        "image": "mushrooms.png",
        "consistency": "solid",
        "name": "mushrooms",
        "original": "8 dried mushrooms, up to 10",
        "originalString": "8 dried mushrooms, up to 10",
        "originalName": "dried mushrooms, up to 10",
        "amount": 8.0,
        "unit": "",
        "meta": [
          "dried"
        ],
        "metaInformation": [
          "dried"
        ],
        "measures": {
          "us": {
            "amount": 8.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 8.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 6176,
        "aisle": "Ethnic Foods",
        "image": "oyster-sauce.jpg",
        "consistency": "liquid",
        "name": "oyster sauce",
        "original": "4 teaspoons oyster sauce",
        "originalString": "4 teaspoons oyster sauce",
        "originalName": "oyster sauce",
        "amount": 4.0,
        "unit": "teaspoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 4.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 10010219,
        "aisle": "Meat",
        "image": "pork-tenderloin-raw.png",
        "consistency": "solid",
        "name": "pork",
        "original": "1 1/2 cups chinese bbq pork, chopped",
        "originalString": "1 1/2 cups chinese bbq pork, chopped",
        "originalName": "chinese bbq pork, chopped",
        "amount": 1.5,
        "unit": "cups",
        "meta": [
          "chinese",
          "chopped"
        ],
        "metaInformation": [
          "chinese",
          "chopped"
        ],
        "measures": {
          "us": {
            "amount": 1.5,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 354.882,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "solid",
        "name": "salt",
        "original": "1 dsh salt",
        "originalString": "1 dsh salt",
        "originalName": "dsh salt",
        "amount": 1.0,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 19335,
        "aisle": "Baking",
        "image": "sugar-in-bowl.png",
        "consistency": "solid",
        "name": "sugar",
        "original": "1 tablespoon sugar",
        "originalString": "1 tablespoon sugar",
        "originalName": "sugar",
        "amount": 1.0,
        "unit": "tablespoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 4513,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "vegetable-oil.jpg",
        "consistency": "liquid",
        "name": "vegetable oil",
        "original": "2 tablespoons vegetable oil",
        "originalString": "2 tablespoons vegetable oil",
        "originalName": "vegetable oil",
        "amount": 2.0,
        "unit": "tablespoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 14412,
        "aisle": "Beverages",
        "image": "water.png",
        "consistency": "liquid",
        "name": "water",
        "original": "1/4 cup water (for gravy)",
        "originalString": "1/4 cup water (for gravy)",
        "originalName": "water (for gravy)",
        "amount": 0.25,
        "unit": "cup",
        "meta": [
          "(for gravy)"
        ],
        "metaInformation": [
          "(for gravy)"
        ],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 59.147,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 14412,
        "aisle": "Beverages",
        "image": "water.png",
        "consistency": "liquid",
        "name": "water",
        "original": "cup warm water, (110 degrees f)",
        "originalString": "cup warm water, (110 degrees f)",
        "originalName": "warm water, (110 degrees f)",
        "amount": 1.0,
        "unit": "cup",
        "meta": [
          "(110 degrees f)"
        ],
        "metaInformation": [
          "(110 degrees f)"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "cup",
            "unitLong": "cup"
          },
          "metric": {
            "amount": 236.588,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      }
    ],
    "id": 633721,
    "title": "Baked Pork Buns",
    "readyInMinutes": 30,
    "servings": 1,
    "sourceUrl": "http://www.foodista.com/recipe/CMD7WQ3W/baked-pork-buns",
    "image": "https://spoonacular.com/recipeImages/633721-556x370.jpg",
    "imageType": "jpg",
    "summary": "Baked Pork Buns might be just the hor d'oeuvre you are searching for. For <b>$3.61 per serving</b>, this recipe <b>covers 46%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>835 calories</b>, <b>31g of protein</b>, and <b>47g of fat</b> each. 7 people have tried and liked this recipe. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. If you have hoisin sauce, mushrooms, cup warm water, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is awesome. Try <a href=\"https://spoonacular.com/recipes/baked-barbecued-pork-buns-633445\">Baked Barbecued Pork Buns</a>, <a href=\"https://spoonacular.com/recipes/sous-vide-pork-belly-buns-with-pork-braise-mayonnaise-and-quick-pickled-cucumbers-157157\">Sous-Vide Pork Belly Buns With Pork Braise Mayonnaise and Quick-Pickled Cucumbers</a>, and <a href=\"https://spoonacular.com/recipes/homemade-pork-buns-540514\">Homemade Pork Buns</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [],
    "occasions": [],
    "winePairing": {},
    "instructions": "<ol><li>Sweet, soft toasty-brown buns surround a tangy barbecued pork filling.</li><li>Makes 12 buns.</li><li>Cooking Time: 30 minutes.</li><li>Preparation :In a large bowl, dissolve 2 tablespoons of the sugar in milk and water.</li><li>Sprinkle yeast over top of the milk mixture and let stand at room temperature for 10 minutes or until frothy. Gradually mix in remaining 2 tablespoons sugar, flour, and salt. On a lightly floured surface, knead dough for about 5 minutes or until smooth and elastic. Shape into a ball and place in a lightly greased bowl. Cover with a damp cloth and let rise in a warm area for about 1 hour or until doubled. Meanwhile, soak mushrooms in enough warm water to cover for 30 minutes; drain. Cut off and discard stems; coarsely chop caps. Set aside. Cooking</li><li>Place wok or wide frying pan over high heat until hot. Add oil, swirling to coat sides. Add green onions, garlic, and mushrooms; stir-fry for 1 minute. Stir in water, hoisin sauce, and sugar; mix well. Add cornstarch solution and cook, stirring until sauce boils down and thickens. Add pork, mix well. Remove from heat and let cool. Punch down dough, then roll on a lightly floured surface into a 12-inch long cylinder. 7Bake in a 350 degree F oven for 18 to 20 minutes or until golden brown.</li><li>Bake in a 350 degree F oven for 18 to 20 minutes or until golden brown.</li><li>Tips: Traditionally, these buns are steamed over boiling water, pleated side up, for 12 to 15 minutes rather than baked. Follow the same procedure for preparing dough except do not brush tops of buns with egg yolk. Try other fillings, such as minced chicken, pork or shrimp.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Sweet, soft toasty-brown buns surround a tangy barbecued pork filling.Makes 12 buns.Cooking Time: 30 minutes.Preparation :In a large bowl, dissolve 2 tablespoons of the sugar in milk and water.Sprinkle yeast over top of the milk mixture and let stand at room temperature for 10 minutes or until frothy. Gradually mix in remaining 2 tablespoons sugar, flour, and salt. On a lightly floured surface, knead dough for about 5 minutes or until smooth and elastic. Shape into a ball and place in a lightly greased bowl. Cover with a damp cloth and let rise in a warm area for about 1 hour or until doubled. Meanwhile, soak mushrooms in enough warm water to cover for 30 minutes; drain.",
            "ingredients": [
              {
                "id": 11260,
                "name": "mushrooms",
                "localizedName": "mushrooms",
                "image": "mushrooms.png"
              },
              {
                "id": 20081,
                "name": "all purpose flour",
                "localizedName": "all purpose flour",
                "image": "flour.png"
              },
              {
                "id": 19335,
                "name": "sugar",
                "localizedName": "sugar",
                "image": "sugar-in-bowl.png"
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              },
              {
                "id": 18375,
                "name": "yeast",
                "localizedName": "yeast",
                "image": "yeast-granules.jpg"
              },
              {
                "id": 1077,
                "name": "milk",
                "localizedName": "milk",
                "image": "milk.png"
              },
              {
                "id": 10010219,
                "name": "pork",
                "localizedName": "pork",
                "image": "pork-tenderloin-raw.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ],
            "length": {
              "number": 135,
              "unit": "minutes"
            }
          },
          {
            "number": 2,
            "step": "Cut off and discard stems; coarsely chop caps. Set aside. Cooking",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 3,
            "step": "Place wok or wide frying pan over high heat until hot.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              },
              {
                "id": 404666,
                "name": "wok",
                "localizedName": "wok",
                "image": "wok.png"
              }
            ]
          },
          {
            "number": 4,
            "step": "Add oil, swirling to coat sides.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Add green onions, garlic, and mushrooms; stir-fry for 1 minute. Stir in water, hoisin sauce, and sugar; mix well.",
            "ingredients": [
              {
                "id": 11291,
                "name": "green onions",
                "localizedName": "green onions",
                "image": "spring-onions.jpg"
              },
              {
                "id": 6175,
                "name": "hoisin sauce",
                "localizedName": "hoisin sauce",
                "image": "dark-sauce.jpg"
              },
              {
                "id": 11260,
                "name": "mushrooms",
                "localizedName": "mushrooms",
                "image": "mushrooms.png"
              },
              {
                "id": 11215,
                "name": "garlic",
                "localizedName": "garlic",
                "image": "garlic.png"
              },
              {
                "id": 19335,
                "name": "sugar",
                "localizedName": "sugar",
                "image": "sugar-in-bowl.png"
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              }
            ],
            "equipment": [],
            "length": {
              "number": 1,
              "unit": "minutes"
            }
          },
          {
            "number": 6,
            "step": "Add cornstarch solution and cook, stirring until sauce boils down and thickens.",
            "ingredients": [
              {
                "id": 20027,
                "name": "corn starch",
                "localizedName": "corn starch",
                "image": "white-powder.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 7,
            "step": "Add pork, mix well.",
            "ingredients": [
              {
                "id": 10010219,
                "name": "pork",
                "localizedName": "pork",
                "image": "pork-tenderloin-raw.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 8,
            "step": "Remove from heat and let cool. Punch down dough, then roll on a lightly floured surface into a 12-inch long cylinder. 7",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 9,
            "step": "Bake in a 350 degree F oven for 18 to 20 minutes or until golden brown.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              },
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg",
                "temperature": {
                  "number": 350.0,
                  "unit": "Fahrenheit"
                }
              }
            ],
            "length": {
              "number": 18,
              "unit": "minutes"
            }
          },
          {
            "number": 10,
            "step": "Bake in a 350 degree F oven for 18 to 20 minutes or until golden brown.Tips: Traditionally, these buns are steamed over boiling water, pleated side up, for 12 to 15 minutes rather than baked. Follow the same procedure for preparing dough except do not brush tops of buns with egg yolk. Try other fillings, such as minced chicken, pork or shrimp.",
            "ingredients": [
              {
                "id": 1125,
                "name": "egg yolk",
                "localizedName": "egg yolk",
                "image": "egg-yolk.jpg"
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              },
              {
                "id": 10010219,
                "name": "pork",
                "localizedName": "pork",
                "image": "pork-tenderloin-raw.png"
              }
            ],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              },
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg",
                "temperature": {
                  "number": 350.0,
                  "unit": "Fahrenheit"
                }
              }
            ],
            "length": {
              "number": 30,
              "unit": "minutes"
            }
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/baked-pork-buns-633721"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 1,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 10,
    "spoonacularScore": 36.0,
    "healthScore": 4.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 61.73,
    "extendedIngredients": [
      {
        "id": 1055062,
        "aisle": "Meat",
        "image": "chicken-breasts.png",
        "consistency": "solid",
        "name": "boneless skinless chicken breast fillets",
        "original": "1 pound chicken breast fillets trimmed of fat, cut into 2 cm (1\") cubes",
        "originalString": "1 pound chicken breast fillets trimmed of fat, cut into 2 cm (1\") cubes",
        "originalName": "chicken breast fillets trimmed of fat, cut into 2 cm (1\") cubes",
        "amount": 1.0,
        "unit": "pound",
        "meta": [
          "trimmed of fat",
          "cut into 2 cm (1\") cubes"
        ],
        "metaInformation": [
          "trimmed of fat",
          "cut into 2 cm (1\") cubes"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "lb",
            "unitLong": "pound"
          },
          "metric": {
            "amount": 453.592,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 9150,
        "aisle": "Produce",
        "image": "lemon.png",
        "consistency": "solid",
        "name": "lemon",
        "original": "Moroccan lemon marinade",
        "originalString": "Moroccan lemon marinade",
        "originalName": "Moroccan lemon marinade",
        "amount": 1.0,
        "unit": "serving",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      },
      {
        "id": 11297,
        "aisle": "Produce",
        "image": "parsley.jpg",
        "consistency": "solid",
        "name": "parsley",
        "original": "1 teaspoon chopped parsley",
        "originalString": "1 teaspoon chopped parsley",
        "originalName": "chopped parsley",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [
          "chopped"
        ],
        "metaInformation": [
          "chopped"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 2063,
        "aisle": "Produce",
        "image": "rosemary.jpg",
        "consistency": "solid",
        "name": "fresh rosemary leaves",
        "original": "1 teaspoon Fresh rosemary leaves",
        "originalString": "1 teaspoon Fresh rosemary leaves",
        "originalName": "Fresh rosemary leaves",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [
          "fresh"
        ],
        "metaInformation": [
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 2049,
        "aisle": "Produce",
        "image": "thyme.jpg",
        "consistency": "solid",
        "name": "fresh thyme leaves",
        "original": "2 teaspoons fresh thyme leaves",
        "originalString": "2 teaspoons fresh thyme leaves",
        "originalName": "fresh thyme leaves",
        "amount": 2.0,
        "unit": "teaspoons",
        "meta": [
          "fresh"
        ],
        "metaInformation": [
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "solid",
        "name": "garlic",
        "original": "2 cloves garlic, crushed",
        "originalString": "2 cloves garlic, crushed",
        "originalName": "garlic, crushed",
        "amount": 2.0,
        "unit": "cloves",
        "meta": [
          "crushed"
        ],
        "metaInformation": [
          "crushed"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "cloves",
            "unitLong": "cloves"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "cloves",
            "unitLong": "cloves"
          }
        }
      },
      {
        "id": 1022030,
        "aisle": "Spices and Seasonings",
        "image": "black-pepper.png",
        "consistency": "solid",
        "name": "black peppercorns",
        "original": "1 teaspoon black peppercorns, crushed",
        "originalString": "1 teaspoon black peppercorns, crushed",
        "originalName": "black peppercorns, crushed",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [
          "black",
          "crushed"
        ],
        "metaInformation": [
          "black",
          "crushed"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 9152,
        "aisle": "Produce",
        "image": "lemon-juice.jpg",
        "consistency": "liquid",
        "name": "juice of lemon",
        "original": "1 grated rind (zest) and juice of lemon",
        "originalString": "1 grated rind (zest) and juice of lemon",
        "originalName": "grated rind (zest) and juice of lemon",
        "amount": 1.0,
        "unit": "",
        "meta": [
          "grated",
          "(zest)"
        ],
        "metaInformation": [
          "grated",
          "(zest)"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consistency": "liquid",
        "name": "olive oil",
        "original": "2 teaspoons olive oil",
        "originalString": "2 teaspoons olive oil",
        "originalName": "olive oil",
        "amount": 2.0,
        "unit": "teaspoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      }
    ],
    "id": 652433,
    "title": "Moroccan Lemon Shish Kebabs",
    "readyInMinutes": 45,
    "servings": 8,
    "sourceUrl": "https://www.foodista.com/recipe/JH2GSZPF/moroccan-lemon-shish-kebabs",
    "image": "https://spoonacular.com/recipeImages/652433-556x370.jpg",
    "imageType": "jpg",
    "summary": "Moroccan Lemon Shish Kebabs could be just the <b>gluten free, dairy free, paleolithic, and primal</b> recipe you've been looking for. This recipe makes 8 servings with <b>78 calories</b>, <b>12g of protein</b>, and <b>3g of fat</b> each. For <b>62 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. A mixture of olive oil, garlic, thyme leaves, and a handful of other ingredients are all it takes to make this recipe so delicious. 9 people were impressed by this recipe. It works best as a main course, and is done in approximately <b>approximately 45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 35%</b>, this dish is rather bad. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/lamb-shish-kebabs-98177\">Lamb Shish Kebabs</a>, <a href=\"https://spoonacular.com/recipes/summer-shish-kebabs-516259\">Summer Shish Kebabs</a>, and <a href=\"https://spoonacular.com/recipes/classic-beef-shish-kebabs-203897\">Classic Beef Shish Kebabs</a>.",
    "cuisines": [],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [
      "gluten free",
      "dairy free",
      "paleolithic",
      "primal"
    ],
    "occasions": [],
    "winePairing": {
      "pairedWines": [],
      "pairingText": "",
      "productMatches": []
    },
    "instructions": "The chicken breast fillets trimmed of fat, cut into 1\" cubes\nFor Moroccan lemon marinade\nPut everything in a bowl\nAdd this Marinated chicken cubes, mix well, cover with Plastic Wrap and let stand at least 1/2 hour before use ... I like to leave more time in the fridge\nThe time for rest, place the bamboo skewers or metal rods in a tray with water (to cover only), that is to avoid burning\nThread the meat on each rod are more or less as 4 pieces of meat\nShish Kebbab cooking on the grill, skillet or the oven ... I like the first option, you know the smell of charcoal, wood ...\nOnce the Shish Kebab cooked, serve immediately on a bed of Rice, Mediterranean Cous Cous, etc. ... or only with Pita Bread and ready",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "The chicken breast fillets trimmed of fat, cut into 1\" cubes",
            "ingredients": [
              {
                "id": 5062,
                "name": "chicken breast",
                "localizedName": "chicken breast",
                "image": "chicken-breasts.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 2,
            "step": "For Moroccan lemon marinade",
            "ingredients": [
              {
                "id": 9150,
                "name": "lemon",
                "localizedName": "lemon",
                "image": "lemon.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 3,
            "step": "Put everything in a bowl",
            "ingredients": [],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 4,
            "step": "Add this Marinated chicken cubes, mix well, cover with Plastic Wrap and let stand at least 1/2 hour before use ... I like to leave more time in the fridge",
            "ingredients": [],
            "equipment": [
              {
                "id": 404730,
                "name": "plastic wrap",
                "localizedName": "plastic wrap",
                "image": "plastic-wrap.jpg"
              }
            ],
            "length": {
              "number": 120,
              "unit": "minutes"
            }
          },
          {
            "number": 5,
            "step": "The time for rest, place the bamboo skewers or metal rods in a tray with water (to cover only), that is to avoid burning",
            "ingredients": [],
            "equipment": [
              {
                "id": 3065,
                "name": "skewers",
                "localizedName": "skewers",
                "image": "wooden-skewers.jpg"
              }
            ]
          },
          {
            "number": 6,
            "step": "Thread the meat on each rod are more or less as 4 pieces of meat",
            "ingredients": [
              {
                "id": 1065062,
                "name": "meat",
                "localizedName": "meat",
                "image": "whole-chicken.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 7,
            "step": "Shish Kebbab cooking on the grill, skillet or the oven ... I like the first option, you know the smell of charcoal, wood ...",
            "ingredients": [],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              },
              {
                "id": 404706,
                "name": "grill",
                "localizedName": "grill",
                "image": "grill.jpg"
              },
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ]
          },
          {
            "number": 8,
            "step": "Once the Shish Kebab cooked, serve immediately on a bed of Rice, Mediterranean Cous Cous, etc. ... or only with Pita Bread and ready",
            "ingredients": [],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/moroccan-lemon-shish-kebabs-652433"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 16,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 11,
    "spoonacularScore": 64.0,
    "healthScore": 17.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 154.24,
    "extendedIngredients": [
      {
        "id": 1005091,
        "aisle": "Meat",
        "image": "chicken-thighs.png",
        "consistency": "solid",
        "name": "bone in chicken thighs",
        "original": "2 lbs chicken thighs, bone in and skin on",
        "originalString": "2 lbs chicken thighs, bone in and skin on",
        "originalName": "chicken thighs, bone in and skin on",
        "amount": 2.0,
        "unit": "lbs",
        "meta": [
          "bone in"
        ],
        "metaInformation": [
          "bone in"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "lb",
            "unitLong": "pounds"
          },
          "metric": {
            "amount": 907.185,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 10511282,
        "aisle": "Produce",
        "image": "brown-onion.png",
        "consistency": "solid",
        "name": "yellow onion",
        "original": "½ yellow onion, diced",
        "originalString": "½ yellow onion, diced",
        "originalName": "yellow onion, diced",
        "amount": 0.5,
        "unit": "",
        "meta": [
          "diced",
          "yellow"
        ],
        "metaInformation": [
          "diced",
          "yellow"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "solid",
        "name": "garlic cloves",
        "original": "3 garlic cloves, roughly chopped",
        "originalString": "3 garlic cloves, roughly chopped",
        "originalName": "garlic cloves, roughly chopped",
        "amount": 3.0,
        "unit": "",
        "meta": [
          "roughly chopped"
        ],
        "metaInformation": [
          "roughly chopped"
        ],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 3.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 2049,
        "aisle": "Produce",
        "image": "thyme.jpg",
        "consistency": "solid",
        "name": "fresh thyme",
        "original": "1 Tsp. fresh thyme",
        "originalString": "1 Tsp. fresh thyme",
        "originalName": "fresh thyme",
        "amount": 1.0,
        "unit": "Tsp",
        "meta": [
          "fresh"
        ],
        "metaInformation": [
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 10011819,
        "aisle": "Produce;Ethnic Foods",
        "image": "scotch-bonnet-chile.jpg",
        "consistency": "solid",
        "name": "scotch bonnet pepper",
        "original": "1 Tsp. scotch bonnet pepper sauce",
        "originalString": "1 Tsp. scotch bonnet pepper sauce",
        "originalName": "scotch bonnet pepper sauce",
        "amount": 1.0,
        "unit": "Tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 2021,
        "aisle": "Spices and Seasonings",
        "image": "ginger.png",
        "consistency": "solid",
        "name": "powdered ginger",
        "original": "¼ Tsp. powdered ginger",
        "originalString": "¼ Tsp. powdered ginger",
        "originalName": "powdered ginger",
        "amount": 0.25,
        "unit": "Tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 2015,
        "aisle": "Spices and Seasonings",
        "image": "curry-powder.jpg",
        "consistency": "solid",
        "name": "curry powder",
        "original": "¼ tsp. curry powder",
        "originalString": "¼ tsp. curry powder",
        "originalName": "curry powder",
        "amount": 0.25,
        "unit": "tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 4047,
        "aisle": "Health Foods;Baking",
        "image": "oil-coconut.jpg",
        "consistency": "liquid",
        "name": "coconut oil",
        "original": "1 Tsp. coconut oil",
        "originalString": "1 Tsp. coconut oil",
        "originalName": "coconut oil",
        "amount": 1.0,
        "unit": "Tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 11165,
        "aisle": "Produce;Spices and Seasonings",
        "image": "cilantro.png",
        "consistency": "solid",
        "name": "cilantro",
        "original": "1 Tsp. cilantro, finely chopped",
        "originalString": "1 Tsp. cilantro, finely chopped",
        "originalName": "cilantro, finely chopped",
        "amount": 1.0,
        "unit": "Tsp",
        "meta": [
          "finely chopped"
        ],
        "metaInformation": [
          "finely chopped"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 11291,
        "aisle": "Produce",
        "image": "spring-onions.jpg",
        "consistency": "solid",
        "name": "scallion",
        "original": "1 scallion",
        "originalString": "1 scallion",
        "originalName": "scallion",
        "amount": 1.0,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 4513,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "vegetable-oil.jpg",
        "consistency": "liquid",
        "name": "vegetable oil",
        "original": "1 Tbsp. vegetable oil",
        "originalString": "1 Tbsp. vegetable oil",
        "originalName": "vegetable oil",
        "amount": 1.0,
        "unit": "Tbsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 10511282,
        "aisle": "Produce",
        "image": "brown-onion.png",
        "consistency": "solid",
        "name": "yellow onion",
        "original": "½ yellow onion, sliced",
        "originalString": "½ yellow onion, sliced",
        "originalName": "yellow onion, sliced",
        "amount": 0.5,
        "unit": "",
        "meta": [
          "yellow",
          "sliced"
        ],
        "metaInformation": [
          "yellow",
          "sliced"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "solid",
        "name": "garlic cloves",
        "original": "3 garlic cloves, minced",
        "originalString": "3 garlic cloves, minced",
        "originalName": "garlic cloves, minced",
        "amount": 3.0,
        "unit": "",
        "meta": [
          "minced"
        ],
        "metaInformation": [
          "minced"
        ],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 3.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 2015,
        "aisle": "Spices and Seasonings",
        "image": "curry-powder.jpg",
        "consistency": "solid",
        "name": "curry powder",
        "original": "1 ½ Tbsp. curry powder",
        "originalString": "1 ½ Tbsp. curry powder",
        "originalName": "curry powder",
        "amount": 1.5,
        "unit": "Tbsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.5,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 1.5,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 10293663,
        "aisle": "Ethnic Foods;Spices and Seasonings",
        "image": "ground-cumin.jpg",
        "consistency": "solid",
        "name": "amchar masala",
        "original": "1 Tsp. amchar masala",
        "originalString": "1 Tsp. amchar masala",
        "originalName": "amchar masala",
        "amount": 1.0,
        "unit": "Tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 1002014,
        "aisle": "Spices and Seasonings",
        "image": "ground-cumin.jpg",
        "consistency": "solid",
        "name": "cumin",
        "original": "½ Tsp. cumin",
        "originalString": "½ Tsp. cumin",
        "originalName": "cumin",
        "amount": 0.5,
        "unit": "Tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "solid",
        "name": "salt",
        "original": "½ Tsp. salt",
        "originalString": "½ Tsp. salt",
        "originalName": "salt",
        "amount": 0.5,
        "unit": "Tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 14412,
        "aisle": "Beverages",
        "image": "water.png",
        "consistency": "liquid",
        "name": "water",
        "original": "1 cup of water",
        "originalString": "1 cup of water",
        "originalName": "water",
        "amount": 1.0,
        "unit": "cup",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "cup",
            "unitLong": "cup"
          },
          "metric": {
            "amount": 236.588,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 11362,
        "aisle": null,
        "image": null,
        "consistency": null,
        "name": "potatoes",
        "original": "2 potatoes, cut into large cubes",
        "originalString": "2 potatoes, cut into large cubes",
        "originalName": "potatoes, cut into large cubes",
        "amount": 2.0,
        "unit": "",
        "meta": [
          "cut into large cubes"
        ],
        "metaInformation": [
          "cut into large cubes"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      }
    ],
    "id": 663824,
    "title": "Trinidadian Chicken Potato Curry",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "https://www.foodista.com/recipe/DLRB38NQ/trinidadian-chicken-potato-curry",
    "image": "https://spoonacular.com/recipeImages/663824-556x370.jpg",
    "imageType": "jpg",
    "summary": "If you want to add more <b>Indian</b> recipes to your recipe box, Trinidadian Chicken Potato Curry might be a recipe you should try. Watching your figure? This gluten free, dairy free, and whole 30 recipe has <b>554 calories</b>, <b>35g of protein</b>, and <b>37g of fat</b> per serving. For <b>$1.54 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. This recipe from Foodista requires , thyme, coconut oil, and . 11 person have tried and liked this recipe. A few people really liked this main course. From preparation to the plate, this recipe takes about <b>about 45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 64%</b>. This score is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/toms-trinidadian-chicken-curry-17227\">Tom’s Trinidadian Chicken Curry</a>, <a href=\"https://spoonacular.com/recipes/trinidadian-chicken-curry-with-coconut-grits-collard-greens-716731\">Trinidadian Chicken Curry with Coconut Grits & Collard Greens</a>, and <a href=\"https://spoonacular.com/recipes/chicken-sweet-potato-curry-220244\">Chicken & sweet potato curry</a>.",
    "cuisines": [
      "Indian",
      "Asian"
    ],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [
      "gluten free",
      "dairy free"
    ],
    "occasions": [],
    "winePairing": {
      "pairedWines": [
        "chenin blanc",
        "gewurztraminer",
        "riesling"
      ],
      "pairingText": "Chenin Blanc, Gewurztraminer, and Riesling are great choices for Asian. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. You could try Leo Steen Saini Vineyard Chenin Blanc. Reviewers quite like it with a 4.4 out of 5 star rating and a price of about 24 dollars per bottle.",
      "productMatches": [
        {
          "id": 464148,
          "title": "Leo Steen Saini Vineyard Chenin Blanc",
          "description": "Like being transported to a spring meadow, this lovely wine displays enticing aromas of chamomile, lemon verbena, thyme and zesty citrus. On the long, refreshing palate, excellent natural acidity and wet gravel minerality bring beautiful energy to the wine, carrying flavors of green apple and Anjou pear to a bright, focused finish.",
          "price": "$23.99",
          "imageUrl": "https://spoonacular.com/productImages/464148-312x231.jpg",
          "averageRating": 0.8800000000000001,
          "ratingCount": 5.0,
          "score": 0.8175000000000001,
          "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fleo-steen-saini-vineyard-chenin-blanc-2014%2F162565"
        }
      ]
    },
    "instructions": "Wash and pat dry chicken thighs. In a sealable container, combine all marinade ingredients. Toss chicken in marinade, cover and refrigerate for at least 2 hours.\nIn a Dutch oven, heat vegetable oil over medium high heat. Add onions and saut until tender. Add garlic and continue to saut until fragrant.\nSprinkle onions and garlic with curry powder and stir to evenly coat. Add 1 tablespoon of water and cook for one minute, stirring constantly.\nAdd chicken and marinade. Saut until lightly browned, about 5 minutes.\nIf you want a thick curry add potatoes now, otherwise set aside.\nSprinkle chicken with amchar masala, cumin and salt. Toss to coat. Pour in one cup of water and bring to a boil.\nReduce heat, cover pot and simmer for 20 minutes. If you reserved the potatoes for a thinner curry, add them to the pot after twenty minutes.\nContinue to simmer for an additional twenty minutes until chicken reaches an internal temperature of 165 F and potatoes are cooked through.\nServe warm with roti or rice.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Wash and pat dry chicken thighs. In a sealable container, combine all marinade ingredients. Toss chicken in marinade, cover and refrigerate for at least 2 hours.",
            "ingredients": [
              {
                "id": 5091,
                "name": "chicken thighs",
                "localizedName": "chicken thighs",
                "image": "chicken-thigh.jpg"
              }
            ],
            "equipment": [],
            "length": {
              "number": 120,
              "unit": "minutes"
            }
          },
          {
            "number": 2,
            "step": "In a Dutch oven, heat vegetable oil over medium high heat.",
            "ingredients": [
              {
                "id": 4513,
                "name": "vegetable oil",
                "localizedName": "vegetable oil",
                "image": "vegetable-oil.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404667,
                "name": "dutch oven",
                "localizedName": "dutch oven",
                "image": "dutch-oven.jpg"
              }
            ]
          },
          {
            "number": 3,
            "step": "Add onions and saut until tender.",
            "ingredients": [
              {
                "id": 11282,
                "name": "onion",
                "localizedName": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Add garlic and continue to saut until fragrant.",
            "ingredients": [
              {
                "id": 11215,
                "name": "garlic",
                "localizedName": "garlic",
                "image": "garlic.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Sprinkle onions and garlic with curry powder and stir to evenly coat.",
            "ingredients": [
              {
                "id": 2015,
                "name": "curry powder",
                "localizedName": "curry powder",
                "image": "curry-powder.jpg"
              },
              {
                "id": 11215,
                "name": "garlic",
                "localizedName": "garlic",
                "image": "garlic.png"
              },
              {
                "id": 11282,
                "name": "onion",
                "localizedName": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Add 1 tablespoon of water and cook for one minute, stirring constantly.",
            "ingredients": [
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              }
            ],
            "equipment": [],
            "length": {
              "number": 1,
              "unit": "minutes"
            }
          },
          {
            "number": 7,
            "step": "Add chicken and marinade. Saut until lightly browned, about 5 minutes.",
            "ingredients": [],
            "equipment": [],
            "length": {
              "number": 5,
              "unit": "minutes"
            }
          },
          {
            "number": 8,
            "step": "If you want a thick curry add potatoes now, otherwise set aside.",
            "ingredients": [
              {
                "id": 2015,
                "name": "curry powder",
                "localizedName": "curry powder",
                "image": "curry-powder.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 9,
            "step": "Sprinkle chicken with amchar masala, cumin and salt. Toss to coat.",
            "ingredients": [
              {
                "id": 10293663,
                "name": "amchar masala",
                "localizedName": "amchar masala",
                "image": "ground-cumin.jpg"
              },
              {
                "id": 1002014,
                "name": "cumin",
                "localizedName": "cumin",
                "image": "ground-cumin.jpg"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 10,
            "step": "Pour in one cup of water and bring to a boil.",
            "ingredients": [
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 11,
            "step": "Reduce heat, cover pot and simmer for 20 minutes. If you reserved the potatoes for a thinner curry, add them to the pot after twenty minutes.",
            "ingredients": [
              {
                "id": 2015,
                "name": "curry powder",
                "localizedName": "curry powder",
                "image": "curry-powder.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ],
            "length": {
              "number": 40,
              "unit": "minutes"
            }
          },
          {
            "number": 12,
            "step": "Continue to simmer for an additional twenty minutes until chicken reaches an internal temperature of 165 F and potatoes are cooked through.",
            "ingredients": [],
            "equipment": [],
            "length": {
              "number": 20,
              "unit": "minutes"
            }
          },
          {
            "number": 13,
            "step": "Serve warm with roti or rice.",
            "ingredients": [],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/trinidadian-chicken-potato-curry-663824"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 22,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 7,
    "spoonacularScore": 72.0,
    "healthScore": 28.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 635.61,
    "extendedIngredients": [
      {
        "id": 10123,
        "aisle": "Meat",
        "image": "raw-bacon.png",
        "consistency": "solid",
        "name": "bacon",
        "original": "4 strips of Bacon",
        "originalString": "4 strips of Bacon",
        "originalName": "Bacon",
        "amount": 4.0,
        "unit": "strips",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "strips",
            "unitLong": "strips"
          },
          "metric": {
            "amount": 4.0,
            "unitShort": "strips",
            "unitLong": "strips"
          }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consistency": "liquid",
        "name": "olive oil",
        "original": "3 tablespoons Olive Oil",
        "originalString": "3 tablespoons Olive Oil",
        "originalName": "Olive Oil",
        "amount": 3.0,
        "unit": "tablespoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 10013149,
        "aisle": "Meat",
        "image": "beef-short-ribs.jpg",
        "consistency": "solid",
        "name": "beef short ribs",
        "original": "5 pounds Beef Short Ribs",
        "originalString": "5 pounds Beef Short Ribs",
        "originalName": "Beef Short Ribs",
        "amount": 5.0,
        "unit": "pounds",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 5.0,
            "unitShort": "lb",
            "unitLong": "pounds"
          },
          "metric": {
            "amount": 2.268,
            "unitShort": "kilogram",
            "unitLong": "kilograms"
          }
        }
      },
      {
        "id": 1012047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "solid",
        "name": "sea salt",
        "original": "1 teaspoon Sea Salt, fine grain",
        "originalString": "1 teaspoon Sea Salt, fine grain",
        "originalName": "Sea Salt, fine grain",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [
          "fine"
        ],
        "metaInformation": [
          "fine"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 1002030,
        "aisle": "Spices and Seasonings",
        "image": "pepper.jpg",
        "consistency": "solid",
        "name": "ground pepper",
        "original": "1 teaspoon Fresh Ground Pepper",
        "originalString": "1 teaspoon Fresh Ground Pepper",
        "originalName": "Fresh Ground Pepper",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [
          "fresh"
        ],
        "metaInformation": [
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 11260,
        "aisle": "Produce",
        "image": "mushrooms.png",
        "consistency": "solid",
        "name": "white button mushrooms",
        "original": "1 pound White Button Mushrooms, sliced",
        "originalString": "1 pound White Button Mushrooms, sliced",
        "originalName": "White Button Mushrooms, sliced",
        "amount": 1.0,
        "unit": "pound",
        "meta": [
          "white",
          "sliced"
        ],
        "metaInformation": [
          "white",
          "sliced"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "lb",
            "unitLong": "pound"
          },
          "metric": {
            "amount": 453.592,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 10511282,
        "aisle": "Produce",
        "image": "brown-onion.png",
        "consistency": "solid",
        "name": "yellow onions",
        "original": "2 Medium Yellow Onions, diced",
        "originalString": "2 Medium Yellow Onions, diced",
        "originalName": "Medium Yellow Onions, diced",
        "amount": 2.0,
        "unit": "",
        "meta": [
          "diced",
          "yellow"
        ],
        "metaInformation": [
          "diced",
          "yellow"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 11124,
        "aisle": "Produce",
        "image": "sliced-carrot.png",
        "consistency": "solid",
        "name": "carrot",
        "original": "1 Medium Carrot, diced",
        "originalString": "1 Medium Carrot, diced",
        "originalName": "Medium Carrot, diced",
        "amount": 1.0,
        "unit": "",
        "meta": [
          "diced"
        ],
        "metaInformation": [
          "diced"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "solid",
        "name": "garlic",
        "original": "4 cloves Large of Garlic, minced",
        "originalString": "4 cloves Large of Garlic, minced",
        "originalName": "Large of Garlic, minced",
        "amount": 4.0,
        "unit": "cloves",
        "meta": [
          "minced"
        ],
        "metaInformation": [
          "minced"
        ],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "cloves",
            "unitLong": "cloves"
          },
          "metric": {
            "amount": 4.0,
            "unitShort": "cloves",
            "unitLong": "cloves"
          }
        }
      },
      {
        "id": 14097,
        "aisle": "Alcoholic Beverages",
        "image": "red-wine.jpg",
        "consistency": "liquid",
        "name": "cabernet sauvignon",
        "original": "2 cups Cabernet Sauvignon Wine",
        "originalString": "2 cups Cabernet Sauvignon Wine",
        "originalName": "Cabernet Sauvignon Wine",
        "amount": 2.0,
        "unit": "cups",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 473.176,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 6170,
        "aisle": "Canned and Jarred",
        "image": "beef-broth.png",
        "consistency": "liquid",
        "name": "beef stock",
        "original": "2 cups Beef Stock",
        "originalString": "2 cups Beef Stock",
        "originalName": "Beef Stock",
        "amount": 2.0,
        "unit": "cups",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 473.176,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 11887,
        "aisle": "Pasta and Rice",
        "image": "tomato-paste.jpg",
        "consistency": "solid",
        "name": "tomato paste",
        "original": "2 tablespoons Tomato Paste",
        "originalString": "2 tablespoons Tomato Paste",
        "originalName": "Tomato Paste",
        "amount": 2.0,
        "unit": "tablespoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 1016076,
        "aisle": "Canned and Jarred",
        "image": "stock-cube.jpg",
        "consistency": "solid",
        "name": "beef base",
        "original": "2 tablespoons Beef Base",
        "originalString": "2 tablespoons Beef Base",
        "originalName": "Beef Base",
        "amount": 2.0,
        "unit": "tablespoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 2049,
        "aisle": "Produce",
        "image": "thyme.jpg",
        "consistency": "solid",
        "name": "fresh thyme",
        "original": "1 tablespoon Dried Thyme or 6 fresh Sprigs",
        "originalString": "1 tablespoon Dried Thyme or 6 fresh Sprigs",
        "originalName": "Dried Thyme or 6 fresh Sprigs",
        "amount": 1.0,
        "unit": "tablespoon",
        "meta": [
          "dried",
          "fresh"
        ],
        "metaInformation": [
          "dried",
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 2004,
        "aisle": "Produce;Spices and Seasonings",
        "image": "bay-leaves.jpg",
        "consistency": "solid",
        "name": "bay leaves",
        "original": "2 Bay leaves",
        "originalString": "2 Bay leaves",
        "originalName": "Bay leaves",
        "amount": 2.0,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1002030,
        "aisle": "Spices and Seasonings",
        "image": "pepper.jpg",
        "consistency": "solid",
        "name": "ground pepper",
        "original": "1 teaspoon Fresh Ground Black Pepper",
        "originalString": "1 teaspoon Fresh Ground Black Pepper",
        "originalName": "Fresh Ground Black Pepper",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [
          "fresh",
          "black"
        ],
        "metaInformation": [
          "fresh",
          "black"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      }
    ],
    "id": 632299,
    "title": "Amazing Braised Beef Short Ribs",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "https://www.foodista.com/recipe/8VJB2NF5/amazing-braised-beef-short-ribs",
    "image": "https://spoonacular.com/recipeImages/632299-556x370.jpg",
    "imageType": "jpg",
    "summary": "If you have approximately <b>about 45 minutes</b> to spend in the kitchen, Amazing Braised Beef Short Ribs might be a tremendous <b>gluten free and dairy free</b> recipe to try. This recipe serves 6. One serving contains <b>788 calories</b>, <b>60g of protein</b>, and <b>48g of fat</b>. For <b>$6.36 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. 6 people were impressed by this recipe. This recipe from Foodista requires bacon, carrot, ground pepper, and beef stock. It works well as a main course. Overall, this recipe earns a <b>good spoonacular score of 72%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/braised-beef-short-ribs-245460\">Braised Beef Short Ribs</a>, <a href=\"https://spoonacular.com/recipes/braised-beef-short-ribs-570525\">Braised Beef Short Ribs</a>, and <a href=\"https://spoonacular.com/recipes/braised-beef-short-ribs-601461\">Braised Beef Short Ribs</a>.",
    "cuisines": [],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [
      "gluten free",
      "dairy free"
    ],
    "occasions": [],
    "winePairing": {
      "pairedWines": [
        "merlot",
        "cabernet sauvignon",
        "pinot noir"
      ],
      "pairingText": "Beef Short Ribs works really well with Merlot, Cabernet Sauvignon, and Pinot Noir. Beef and red wine are a classic combination. Generally, leaner cuts of beef go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier cuts can handle a bold red, such as cabernet sauvingnon. One wine you could try is Director's Merlot. It has 5 out of 5 stars and a bottle costs about 21 dollars.",
      "productMatches": [
        {
          "id": 428445,
          "title": "Director's Merlot",
          "description": "Our 2014 Director's Merlot offers lushness and a round, full palate. Its fragrance demonstrates red and black fruit with hints of anise and spiced wood. Juicy upon entry, the wine broadens and becomes velvety on the palate with flavors of plum, loganberry and black cherry accentuated by subtle spice notes of espresso bean and toasted vanilla. Medium tannins support the body of this wine, offering sophistication in its finish. Pairs nicely with brisket, grilled pork chops and linguine with pesto.",
          "price": "$21.0",
          "imageUrl": "https://spoonacular.com/productImages/428445-312x231.jpg",
          "averageRating": 1.0,
          "ratingCount": 1.0,
          "score": 0.75,
          "link": "https://www.amazon.com/2014-Directors-Merlot-750-mL/dp/B073XVS4MB?tag=spoonacular-20"
        }
      ]
    },
    "instructions": "Preheat your oven to 300 degrees.  Place a large heavy bottomed pot on the stove top (like a Le Creuset pot).\nOver medium heat cook 4 strips of Bacon in the large heavy bottomed pot until crisp.  Remove from the heat and allow to drain on paper towels.  Later you will crumble the Bacon into the finished Sauce.  Reserve the Bacon Fat in the pot.\nDry off any moisture on your Beef Short Ribs using paper towel.  The meat will brown better and caramelize instead of steam if it is dry.  This browning will produce a lot of flavor in the finished dish.\nCut the Short Ribs into 3-4 inch sections.  Trim some of the excess outer fat, leaving some for flavor.  Season the Short Ribs with Sea Salt and Black Pepper.\nOver medium high add 3 T of Olive Oil to the Bacon Fat and brown all sides of the Short Ribs until they get a good dark brown sear.  Give the Short Ribs room between each other so they do not steam and brown properly.  You will have to do this in 2 to 3 batches to brown all the Short Ribs well.   You will not be cooking through all the way, just browning at this stage.  The Short Ribs will be raw in the middle.\nPlace the first batch after browning in a bowl to catch any drippings.\nAfter all the Short Ribs are browned well, remove them from the pot and set aside in the large bowl to collect any drippings as they sit.  Next remove the used Bacon Fat and Olive Oil from the pot leaving any of the cooked on bits stuck to the bottom of the pot.  Reduce the heat to medium and add 3 T of fresh Olive Oil and saute the sliced Mushrooms until browned and crisp. 7-10 minutes.\nThen over medium heat add the diced Onions and Carrot and saute until soft, 5-7 minutes.  Add the minced Garlic and cook for 1 minute more.\nDeglaze the pot by adding 2 cups of Cabernet Sauvignon.  As soon as you add the Wine increase the heat to high and stir rapidly, scraping the bottom of the pot releasing the cooked on brown bits stuck to the bottom.  Bring to the boil then add 2 cups of Beef Stock and the Tomato Paste, Beef Base, Thyme, Bay Leaves, Sea Salt and Black Pepper.  Allow to boil, stirring continuously for 3 minutes.\nAdd the Beef Short Ribs and any juices that collected in the bowl to the boiling pot.  Put them in snugly against each other and boil for 2 minutes.\nThen place the lid on the pot and place in the center of the oven and cook for 3 hours at 300 degrees undisturbed.  Don't peek and release the moist heat that will make these Short Ribs fall of the bone.\nAfter 3 hours remove from the oven and take off the lid.  Prepare for a steam facial!  Remove the Cooked Beef Short Ribs to a large bowl.  Be gentle, it will be falling off the bone.  Allow the Sauce to sit for 3 minutes so the fat rises to the top.  Skim off the fat using a large spoon and discard it.  Remove as much as you can.  Remove the Bay Leaves and stems from the Thyme if you used fresh Thyme.\nRemember, the pot is HOT, it just came from the oven!!!  Use pot holders and place the pot of defatted Sauce over medium high heat and bring to a boil, stirring frequently, and reduce by a third.  This will concentrate the Sauce into a rich incredible Sauce. Taste the Sauce and add Sea Salt and or Black Pepper is needed at this point.  Crumble the Bacon and add to the Sauce stirring in well.\nAdd the Beef Short Ribs back to the pot of reduced Sauce and remove from the heat.  Coat the Short Ribs in the Sauce well.  Serve Immediately over Yukon Gold Mashed Potatoes or Polenta.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Preheat your oven to 300 degrees.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Place a large heavy bottomed pot on the stove top (like a Le Creuset pot).",
            "ingredients": [],
            "equipment": [
              {
                "id": 404794,
                "name": "stove",
                "localizedName": "stove",
                "image": "oven.jpg"
              },
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ]
          },
          {
            "number": 3,
            "step": "Over medium heat cook 4 strips of Bacon in the large heavy bottomed pot until crisp.",
            "ingredients": [
              {
                "id": 10123,
                "name": "bacon",
                "localizedName": "bacon",
                "image": "raw-bacon.png"
              }
            ],
            "equipment": [
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ]
          },
          {
            "number": 4,
            "step": "Remove from the heat and allow to drain on paper towels.  Later you will crumble the Bacon into the finished Sauce.  Reserve the Bacon Fat in the pot.",
            "ingredients": [
              {
                "id": 10123,
                "name": "bacon",
                "localizedName": "bacon",
                "image": "raw-bacon.png"
              }
            ],
            "equipment": [
              {
                "id": 405895,
                "name": "paper towels",
                "localizedName": "paper towels",
                "image": "paper-towels.jpg"
              },
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ]
          },
          {
            "number": 5,
            "step": "Dry off any moisture on your Beef Short Ribs using paper towel.  The meat will brown better and caramelize instead of steam if it is dry.  This browning will produce a lot of flavor in the finished dish.",
            "ingredients": [
              {
                "id": 10013149,
                "name": "beef short ribs",
                "localizedName": "beef short ribs",
                "image": "beef-short-ribs.jpg"
              }
            ],
            "equipment": [
              {
                "id": 405895,
                "name": "paper towels",
                "localizedName": "paper towels",
                "image": "paper-towels.jpg"
              }
            ]
          },
          {
            "number": 6,
            "step": "Cut the Short Ribs into 3-4 inch sections.  Trim some of the excess outer fat, leaving some for flavor.  Season the Short Ribs with Sea Salt and Black Pepper.",
            "ingredients": [
              {
                "id": 1102047,
                "name": "salt and pepper",
                "localizedName": "salt and pepper",
                "image": "salt-and-pepper.jpg"
              },
              {
                "id": 10013149,
                "name": "beef short ribs",
                "localizedName": "beef short ribs",
                "image": "beef-short-ribs.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 7,
            "step": "Over medium high add 3 T of Olive Oil to the Bacon Fat and brown all sides of the Short Ribs until they get a good dark brown sear.  Give the Short Ribs room between each other so they do not steam and brown properly.  You will have to do this in 2 to 3 batches to brown all the Short Ribs well.   You will not be cooking through all the way, just browning at this stage.  The Short Ribs will be raw in the middle.",
            "ingredients": [
              {
                "id": 10013149,
                "name": "beef short ribs",
                "localizedName": "beef short ribs",
                "image": "beef-short-ribs.jpg"
              },
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 8,
            "step": "Place the first batch after browning in a bowl to catch any drippings.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 9,
            "step": "After all the Short Ribs are browned well, remove them from the pot and set aside in the large bowl to collect any drippings as they sit.  Next remove the used Bacon Fat and Olive Oil from the pot leaving any of the cooked on bits stuck to the bottom of the pot.  Reduce the heat to medium and add 3 T of fresh Olive Oil and saute the sliced Mushrooms until browned and crisp. 7-10 minutes.",
            "ingredients": [
              {
                "id": 10013149,
                "name": "beef short ribs",
                "localizedName": "beef short ribs",
                "image": "beef-short-ribs.jpg"
              },
              {
                "id": 11260,
                "name": "mushrooms",
                "localizedName": "mushrooms",
                "image": "mushrooms.png"
              },
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              },
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ],
            "length": {
              "number": 10,
              "unit": "minutes"
            }
          },
          {
            "number": 10,
            "step": "Then over medium heat add the diced Onions and Carrot and saute until soft, 5-7 minutes.",
            "ingredients": [
              {
                "id": 11124,
                "name": "carrot",
                "localizedName": "carrot",
                "image": "sliced-carrot.png"
              },
              {
                "id": 11282,
                "name": "onion",
                "localizedName": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": [],
            "length": {
              "number": 7,
              "unit": "minutes"
            }
          },
          {
            "number": 11,
            "step": "Add the minced Garlic and cook for 1 minute more.",
            "ingredients": [],
            "equipment": [],
            "length": {
              "number": 1,
              "unit": "minutes"
            }
          },
          {
            "number": 12,
            "step": "Deglaze the pot by adding 2 cups of Cabernet Sauvignon.  As soon as you add the Wine increase the heat to high and stir rapidly, scraping the bottom of the pot releasing the cooked on brown bits stuck to the bottom.  Bring to the boil then add 2 cups of Beef Stock and the Tomato Paste, Beef Base, Thyme, Bay Leaves, Sea Salt and Black Pepper.  Allow to boil, stirring continuously for 3 minutes.",
            "ingredients": [
              {
                "id": 1102047,
                "name": "salt and pepper",
                "localizedName": "salt and pepper",
                "image": "salt-and-pepper.jpg"
              },
              {
                "id": 10014097,
                "name": "cabernet sauvignon",
                "localizedName": "cabernet sauvignon",
                "image": "red-wine.jpg"
              },
              {
                "id": 11887,
                "name": "tomato paste",
                "localizedName": "tomato paste",
                "image": "tomato-paste.jpg"
              },
              {
                "id": 2004,
                "name": "bay leaves",
                "localizedName": "bay leaves",
                "image": "bay-leaves.jpg"
              },
              {
                "id": 6170,
                "name": "beef stock",
                "localizedName": "beef stock",
                "image": "beef-broth.png"
              },
              {
                "id": 1016076,
                "name": "beef base",
                "localizedName": "beef base",
                "image": "stock-cube.jpg"
              },
              {
                "id": 2049,
                "name": "thyme",
                "localizedName": "thyme",
                "image": "thyme.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ],
            "length": {
              "number": 3,
              "unit": "minutes"
            }
          },
          {
            "number": 13,
            "step": "Add the Beef Short Ribs and any juices that collected in the bowl to the boiling pot.",
            "ingredients": [
              {
                "id": 10013149,
                "name": "beef short ribs",
                "localizedName": "beef short ribs",
                "image": "beef-short-ribs.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              },
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ]
          },
          {
            "number": 14,
            "step": "Put them in snugly against each other and boil for 2 minutes.",
            "ingredients": [],
            "equipment": [],
            "length": {
              "number": 2,
              "unit": "minutes"
            }
          },
          {
            "number": 15,
            "step": "Then place the lid on the pot and place in the center of the oven and cook for 3 hours at 300 degrees undisturbed.  Don't peek and release the moist heat that will make these Short Ribs fall of the bone.",
            "ingredients": [
              {
                "id": 10013149,
                "name": "beef short ribs",
                "localizedName": "beef short ribs",
                "image": "beef-short-ribs.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              },
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ],
            "length": {
              "number": 180,
              "unit": "minutes"
            }
          },
          {
            "number": 16,
            "step": "After 3 hours remove from the oven and take off the lid.  Prepare for a steam facial!",
            "ingredients": [],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ],
            "length": {
              "number": 180,
              "unit": "minutes"
            }
          },
          {
            "number": 17,
            "step": "Remove the Cooked Beef Short Ribs to a large bowl.  Be gentle, it will be falling off the bone.  Allow the Sauce to sit for 3 minutes so the fat rises to the top.  Skim off the fat using a large spoon and discard it.",
            "ingredients": [
              {
                "id": 10013149,
                "name": "beef short ribs",
                "localizedName": "beef short ribs",
                "image": "beef-short-ribs.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ],
            "length": {
              "number": 3,
              "unit": "minutes"
            }
          },
          {
            "number": 18,
            "step": "Remove as much as you can.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 19,
            "step": "Remove the Bay Leaves and stems from the Thyme if you used fresh Thyme.",
            "ingredients": [
              {
                "id": 2049,
                "name": "fresh thyme",
                "localizedName": "fresh thyme",
                "image": "thyme.jpg"
              },
              {
                "id": 2004,
                "name": "bay leaves",
                "localizedName": "bay leaves",
                "image": "bay-leaves.jpg"
              },
              {
                "id": 2049,
                "name": "thyme",
                "localizedName": "thyme",
                "image": "thyme.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 20,
            "step": "Remember, the pot is HOT, it just came from the oven!!!  Use pot holders and place the pot of defatted Sauce over medium high heat and bring to a boil, stirring frequently, and reduce by a third.  This will concentrate the Sauce into a rich incredible Sauce. Taste the Sauce and add Sea Salt and or Black Pepper is needed at this point.  Crumble the Bacon and add to the Sauce stirring in well.",
            "ingredients": [
              {
                "id": 1002030,
                "name": "black pepper",
                "localizedName": "black pepper",
                "image": "pepper.jpg"
              },
              {
                "id": 1012047,
                "name": "sea salt",
                "localizedName": "sea salt",
                "image": "salt.jpg"
              },
              {
                "id": 10123,
                "name": "bacon",
                "localizedName": "bacon",
                "image": "raw-bacon.png"
              }
            ],
            "equipment": [
              {
                "id": 221447,
                "name": "pot holder",
                "localizedName": "pot holder",
                "image": "pot-holder.jpg"
              },
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              },
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ]
          },
          {
            "number": 21,
            "step": "Add the Beef Short Ribs back to the pot of reduced Sauce and remove from the heat.  Coat the Short Ribs in the Sauce well.",
            "ingredients": [
              {
                "id": 10013149,
                "name": "beef short ribs",
                "localizedName": "beef short ribs",
                "image": "beef-short-ribs.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404752,
                "name": "pot",
                "localizedName": "pot",
                "image": "stock-pot.jpg"
              }
            ]
          },
          {
            "number": 22,
            "step": "Serve Immediately over Yukon Gold Mashed Potatoes or Polenta.",
            "ingredients": [],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/amazing-braised-beef-short-ribs-632299"
  },
]
}
const extraRecipes = [
  {
    id: 642287,
    title: "Eggplant Fries with Tzatziki Sauce",
    readyInMinutes: 45,
    servings: 2,

    image: "https://spoonacular.com/recipeImages/642287-556x370.jpg",
    ingredients:
      "½ eggplants, 1 cup bread crumbs, ¼ cups low fat plain yogurt, 1 egg",
    summary:
      "Eggplant Fries with Tzatziki Sauce might be just the <b>Mediterranean</b> recipe you are searching for. For <b>85 cents per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe makes 2 servings with <b>294 calories</b>, <b>13g of protein</b>, and <b>6g of fat</b> each. This recipe from Foodista has 49 fans. It works well as a side dish. Head to the store and pick up eggplants, egg, yogurt, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 66%</b>. ",
    instructions:
      "-Preheat oven to 450F\n-Mix salt, garlic powder, italian seasonings, and paprika in a bowl.\n- In another bowl, mix yogurt & egg together.\n-First place the eggplant strips into egg/yogurt mixture then coat them in flour mixture evenly.\n-Place them in a parchment paper or greased baking pan and bake for 10-15 minutes rotating once and until slightly brown.\nFor the tzatziki sauce:\n- In a food processor, put cucumber (seeded, peeled), yogurt, dill, lemon juice, garlic cloves, salt together until smooth.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "-Preheat oven to 450F",
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
                temperature: {
                  number: 450.0,
                  unit: "Fahrenheit",
                },
              },
            ],
          },
          {
            number: 2,
            step:
              "Mix salt, garlic powder, italian seasonings, and paprika in a bowl.",
            ingredients: [
              {
                id: 1022027,
                name: "italian seasoning",
                localizedName: "italian seasoning",
                image: "dried-herbs.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "- In another bowl, mix yogurt & egg together.",
            ingredients: [
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image: "egg.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 4,
            step:
              "-First place the eggplant strips into egg/yogurt mixture then coat them in flour mixture evenly.",
            ingredients: [
              {
                id: 11209,
                name: "eggplant",
                localizedName: "eggplant",
                image: "eggplant.png",
              },
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image: "egg.png",
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step:
              "Place them in a parchment paper or greased baking pan and bake for 10-15 minutes rotating once and until slightly brown.",
            ingredients: [],
            equipment: [
              {
                id: 404770,
                name: "baking paper",
                localizedName: "baking paper",
                image: "baking-paper.jpg",
              },
              {
                id: 404646,
                name: "baking pan",
                localizedName: "baking pan",
                image: "roasting-pan.jpg",
              },
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
            ],
            length: {
              number: 15,
              unit: "minutes",
            },
          },
        ],
      },
      {
        name: "For the tzatziki sauce",
        steps: [
          {
            number: 1,
            step:
              "- In a food processor, put cucumber (seeded, peeled), yogurt, dill, lemon juice, garlic cloves, salt together until smooth.",
            ingredients: [],
            equipment: [
              {
                id: 404771,
                name: "food processor",
                localizedName: "food processor",
                image: "food-processor.png",
              },
            ],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularSourceUrl:
      "https://spoonacular.com/eggplant-fries-with-tzatziki-sauce-642287",
  },
  {
    id: 659907,
    title: "Shrimp & Orzo",
    readyInMinutes: 45,
    servings: 8,
    image: "https://spoonacular.com/recipeImages/659907-556x370.jpg",
    ingredients:
      "28 ounces diced canned tomatoes, ¾ cups dry white wine, 1 fennel bulb, 6 ounces feta cheese, 2 tablespoons fresh parsley, 6 garlic, some lemon wedges, 2 cups low sodium chicken broth, 3 tablespoons olive oil, 1 diced onion, 4 teaspoons canned fresh dried oregano, 1 pound orzo pasta, ¾ teaspoons crushed red pepper flakes, 1.5 pounds dry shrimp",
    summary:
      'Shrimp & Orzo might be just the main course you are searching for. For <b>$3.37 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. One serving contains <b>480 calories</b>, <b>31g of protein</b>, and <b>13g of fat</b>. Only a few people made this recipe, and 4 would say it hit the spot. Head to the store and pick up orzo pasta, chicken broth, parsley, and a few other things to make it today. To use up the lemon wedges you could follow this main course with the <a href="https://spoonacular.com/recipes/rolled-baklava-68365">Rolled Baklava</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 76%</b>. This score is solid. Similar recipes include <a href="https://spoonacular.com/recipes/shrimp-and-orzo-578433">Shrimp and Orzo</a>, <a href="https://spoonacular.com/recipes/shrimp-and-tomato-orzo-479802">Shrimp and Tomato Orzo</a>, and <a href="https://spoonacular.com/recipes/roasted-shrimp-and-orzo-507612">Roasted Shrimp and Orzo</a>.',
    instructions:
      "<ol><li>Preheat oven to 400 degrees f. Season the shrimp with salt &amp; pepper, refrigerate until ready to use. Grease a 13x9-inch baking dish.</li><li>Heat the oil in a large Dutch oven over medium-high heat until the oil is shimmering. Add the onion, fennel bulb and 1/2 t. salt. Cook, stirring frequently until the vegetables are softened and starting to brown around the edges, about 10 minutes. Add the minced garlic and crushed red pepper flakes, cook and stir until the garlic becomes very fragrant, about 30 seconds.</li><li>Add the orzo to the vegetables, stir to coat the orzo with oil, continue cooking, stirring fairly constantly, about 4 minutes, until the orzo has a toasty aroma. Add the wine, cook,stirring constantly, until the liquid evaporates, about 1 minute. Add the chicken broth, water and 1/4 t. salt. Bring to a boil, then reduce heat, simmer, until the orzo is almost completely tender, about 12 minutes, stirring fairly constantly to prevent sticking and adjusting the heat as necessary to maintain a lively simmer.</li><li>After the 12 minutes, remove from heat and stir in the shrimp, tomatoes, oregano and 1 T. of the parsley. Transfer to the prepared baking dish, sprinkle with the feta. Bake for about 20 minutes, until the shrimp is cooked through and the feta is lightly browned. Before serving, sprinkle with the remaining parsley and the reserved fennel fronds. Serve with lemon wedges.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step:
              "Preheat oven to 400 degrees f. Season the shrimp with salt &amp; pepper, refrigerate until ready to use. Grease a 13x9-inch baking dish.",
            ingredients: [
              {
                id: 15152,
                name: "shrimp",
                localizedName: "shrimp",
                image: "shrimp.png",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [
              {
                id: 404646,
                name: "baking pan",
                localizedName: "baking pan",
                image: "roasting-pan.jpg",
              },
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
                temperature: {
                  number: 400.0,
                  unit: "Fahrenheit",
                },
              },
            ],
          },
          {
            number: 2,
            step:
              "Heat the oil in a large Dutch oven over medium-high heat until the oil is shimmering.",
            ingredients: [],
            equipment: [
              {
                id: 404667,
                name: "dutch oven",
                localizedName: "dutch oven",
                image: "dutch-oven.jpg",
              },
            ],
          },
          {
            number: 3,
            step:
              "Add the onion, fennel bulb and 1/2 t. salt. Cook, stirring frequently until the vegetables are softened and starting to brown around the edges, about 10 minutes.",
            ingredients: [
              {
                id: 11957,
                name: "fennel bulb",
                localizedName: "fennel bulb",
                image: "fennel.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 10,
              unit: "minutes",
            },
          },
          {
            number: 4,
            step:
              "Add the minced garlic and crushed red pepper flakes, cook and stir until the garlic becomes very fragrant, about 30 seconds.",
            ingredients: [
              {
                id: 1032009,
                name: "red pepper flakes",
                localizedName: "red pepper flakes",
                image: "red-pepper-flakes.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step:
              "Add the orzo to the vegetables, stir to coat the orzo with oil, continue cooking, stirring fairly constantly, about 4 minutes, until the orzo has a toasty aroma.",
            ingredients: [
              {
                id: 10920420,
                name: "orzo",
                localizedName: "orzo",
                image: "orzo.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 4,
              unit: "minutes",
            },
          },
          {
            number: 6,
            step:
              "Add the wine, cook,stirring constantly, until the liquid evaporates, about 1 minute.",
            ingredients: [],
            equipment: [],
            length: {
              number: 1,
              unit: "minutes",
            },
          },
          {
            number: 7,
            step:
              "Add the chicken broth, water and 1/4 t. salt. Bring to a boil, then reduce heat, simmer, until the orzo is almost completely tender, about 12 minutes, stirring fairly constantly to prevent sticking and adjusting the heat as necessary to maintain a lively simmer.After the 12 minutes, remove from heat and stir in the shrimp, tomatoes, oregano and 1 T. of the parsley.",
            ingredients: [
              {
                id: 2027,
                name: "oregano",
                localizedName: "oregano",
                image: "oregano.jpg",
              },
              {
                id: 11297,
                name: "parsley",
                localizedName: "parsley",
                image: "parsley.jpg",
              },
              {
                id: 15152,
                name: "shrimp",
                localizedName: "shrimp",
                image: "shrimp.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
              {
                id: 10920420,
                name: "orzo",
                localizedName: "orzo",
                image: "orzo.jpg",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 24,
              unit: "minutes",
            },
          },
          {
            number: 8,
            step:
              "Transfer to the prepared baking dish, sprinkle with the feta.",
            ingredients: [
              {
                id: 1019,
                name: "feta cheese",
                localizedName: "feta cheese",
                image: "feta.png",
              },
            ],
            equipment: [
              {
                id: 404646,
                name: "baking pan",
                localizedName: "baking pan",
                image: "roasting-pan.jpg",
              },
            ],
          },
          {
            number: 9,
            step:
              "Bake for about 20 minutes, until the shrimp is cooked through and the feta is lightly browned. Before serving, sprinkle with the remaining parsley and the reserved fennel fronds.",
            ingredients: [
              {
                id: 11297,
                name: "parsley",
                localizedName: "parsley",
                image: "parsley.jpg",
              },
              {
                id: 11957,
                name: "fennel",
                localizedName: "fennel",
                image: "fennel.png",
              },
              {
                id: 15152,
                name: "shrimp",
                localizedName: "shrimp",
                image: "shrimp.png",
              },
              {
                id: 1019,
                name: "feta cheese",
                localizedName: "feta cheese",
                image: "feta.png",
              },
            ],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
            ],
            length: {
              number: 20,
              unit: "minutes",
            },
          },
          {
            number: 10,
            step: "Serve with lemon wedges.",
            ingredients: [
              {
                id: 1029150,
                name: "lemon wedge",
                localizedName: "lemon wedge",
                image: "lemon-wedge.png",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularSourceUrl: "https://spoonacular.com/shrimp-orzo-659907",
  },
];
 let recipesVeganAPI = {
  "recipes": [
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 8,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 11,
      "spoonacularScore": 96.0,
      "healthScore": 100.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 126.27,
      "extendedIngredients": [
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "2 Tbs olive oil",
          "originalString": "2 Tbs olive oil",
          "originalName": "olive oil",
          "amount": 2.0,
          "unit": "Tbs",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbs",
              "unitLong": "Tbs"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbs",
              "unitLong": "Tbs"
            }
          }
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "solid",
          "name": "onion",
          "original": "1 onion, chopped",
          "originalString": "1 onion, chopped",
          "originalName": "onion, chopped",
          "amount": 1.0,
          "unit": "",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "2 cloves garlic, minced",
          "originalString": "2 cloves garlic, minced",
          "originalName": "garlic, minced",
          "amount": 2.0,
          "unit": "cloves",
          "meta": [
            "minced"
          ],
          "metaInformation": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "solid",
          "name": "carrots",
          "original": "3 carrots cut into cubes",
          "originalString": "3 carrots cut into cubes",
          "originalName": "carrots cut into cubes",
          "amount": 3.0,
          "unit": "",
          "meta": [
            "cut into cubes"
          ],
          "metaInformation": [
            "cut into cubes"
          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10011693,
          "aisle": "Canned and Jarred",
          "image": "tomatoes-canned.png",
          "consistency": "solid",
          "name": "canned tomatoes",
          "original": "480g canned chopped tomatoes",
          "originalString": "480g canned chopped tomatoes",
          "originalName": "canned chopped tomatoes",
          "amount": 480.0,
          "unit": "g",
          "meta": [
            "canned",
            "chopped"
          ],
          "metaInformation": [
            "canned",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.058,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 480.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2004,
          "aisle": "Produce;Spices and Seasonings",
          "image": "bay-leaves.jpg",
          "consistency": "solid",
          "name": "bay leaf",
          "original": "1 bay leaf",
          "originalString": "1 bay leaf",
          "originalName": "bay leaf",
          "amount": 1.0,
          "unit": "",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "liquid",
          "name": "water",
          "original": "1.3 l water",
          "originalString": "1.3 l water",
          "originalName": "water",
          "amount": 1.3,
          "unit": "l",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.374,
              "unitShort": "qt",
              "unitLong": "quarts"
            },
            "metric": {
              "amount": 1.3,
              "unitShort": "l",
              "unitLong": "liters"
            }
          }
        },
        {
          "id": 16069,
          "aisle": "Pasta and Rice;Canned and Jarred;Produce",
          "image": "lentils-green.jpg",
          "consistency": "solid",
          "name": "lentils",
          "original": "250 g lentils",
          "originalString": "250 g lentils",
          "originalName": "lentils",
          "amount": 250.0,
          "unit": "g",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 8.818,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 250.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "original": "¼ tsp salt",
          "originalString": "¼ tsp salt",
          "originalName": "salt",
          "amount": 0.25,
          "unit": "tsp",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11297,
          "aisle": "Produce",
          "image": "parsley.jpg",
          "consistency": "solid",
          "name": "parsley",
          "original": "1 bunch chopped parsley",
          "originalString": "1 bunch chopped parsley",
          "originalName": "chopped parsley",
          "amount": 1.0,
          "unit": "bunch",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "bunch",
              "unitLong": "bunch"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "bunch",
              "unitLong": "bunch"
            }
          }
        }
      ],
      "id": 663559,
      "title": "Tomato and lentil soup",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/5V4PTMT2/tomato-and-lentil-soup",
      "image": "https://spoonacular.com/recipeImages/663559-556x370.jpg",
      "imageType": "jpg",
      "summary": "Tomato and lentil soup takes about <b>about 45 minutes</b> from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>358 calories</b>, <b>19g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 4 and costs $1.26 per serving. 11 person were impressed by this recipe. It works well as an affordable main course for <b>Autumn</b>. A mixture of carrots, bay leaf, parsley, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 97%</b>, which is super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-108370\">Lentil & Tomato Soup</a>, <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-398380\">Lentil-Tomato Soup</a>, and <a href=\"https://spoonacular.com/recipes/tomato-and-lentil-soup-482854\">Tomato and Lentil Soup</a>.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "soup",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [
        "fall",
        "winter"
      ],
      "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
      },
      "instructions": "Saut onion and garlic in olive oil for 5 minutes.\nAdd the carrot, saut for another 2 minutes.\nAdd tomatoes, bay leaf and water, stir and bring to the boil.\nStir in lentils, season with salt and cook for 5 minutes.\nBefore serving sprinkle with chopped parsley.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Saut onion and garlic in olive oil for 5 minutes.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Add the carrot, saut for another 2 minutes.",
              "ingredients": [
                {
                  "id": 11124,
                  "name": "carrot",
                  "localizedName": "carrot",
                  "image": "sliced-carrot.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 2,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Add tomatoes, bay leaf and water, stir and bring to the boil.",
              "ingredients": [
                {
                  "id": 2004,
                  "name": "bay leaves",
                  "localizedName": "bay leaves",
                  "image": "bay-leaves.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Stir in lentils, season with salt and cook for 5 minutes.",
              "ingredients": [
                {
                  "id": 10316069,
                  "name": "lentils",
                  "localizedName": "lentils",
                  "image": "lentils-brown.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Before serving sprinkle with chopped parsley.",
              "ingredients": [
                {
                  "id": 11297,
                  "name": "parsley",
                  "localizedName": "parsley",
                  "image": "parsley.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/tomato-and-lentil-soup-663559"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 19,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 11,
      "spoonacularScore": 74.0,
      "healthScore": 26.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 380.23,
      "extendedIngredients": [
        {
          "id": 4582,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "liquid",
          "name": "canola oil",
          "original": "2 tablespoons Organic Canola oil",
          "originalString": "2 tablespoons Organic Canola oil",
          "originalName": "Organic Canola oil",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [
            "organic"
          ],
          "metaInformation": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 20133,
          "aisle": "Pasta and Rice;Gluten Free;Ethnic Foods",
          "image": "rice-noodles.jpg",
          "consistency": "solid",
          "name": "rice noodles",
          "original": "1 ¼ cup (½ lb) fresh wide rice noodles [or, ¼ lb. + ¼ lb. Yam-cake, or Shirataki noodles]",
          "originalString": "1 ¼ cup (½ lb) fresh wide rice noodles [or, ¼ lb. + ¼ lb. Yam-cake, or Shirataki noodles]",
          "originalName": "¼ cup fresh wide rice noodles [or, ¼ lb. + ¼ lb. Yam-cake, or Shirataki noodles]",
          "amount": 0.5,
          "unit": "lb",
          "meta": [
            "fresh"
          ],
          "metaInformation": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 226.796,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11477,
          "aisle": "Produce",
          "image": "zucchini.jpg",
          "consistency": "solid",
          "name": "zucchini",
          "original": "½ cup zucchini (1 medium), sliced",
          "originalString": "½ cup zucchini (1 medium), sliced",
          "originalName": "zucchini (1 medium), sliced",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "sliced",
            "(1 medium)"
          ],
          "metaInformation": [
            "sliced",
            "(1 medium)"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10011209,
          "aisle": "Produce",
          "image": "eggplant.png",
          "consistency": "solid",
          "name": "japanese eggplant",
          "original": "½ cup Japanese eggplant, sliced",
          "originalString": "½ cup Japanese eggplant, sliced",
          "originalName": "Japanese eggplant, sliced",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "sliced"
          ],
          "metaInformation": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10011090,
          "aisle": "Produce",
          "image": "broccoli.jpg",
          "consistency": "solid",
          "name": "broccoli florets",
          "original": "½ cup broccoli florets",
          "originalString": "½ cup broccoli florets",
          "originalName": "broccoli florets",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "solid",
          "name": "carrot",
          "original": "1 carrot, sliced",
          "originalString": "1 carrot, sliced",
          "originalName": "carrot, sliced",
          "amount": 1.0,
          "unit": "",
          "meta": [
            "sliced"
          ],
          "metaInformation": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 16213,
          "aisle": "Refrigerated;Produce;Ethnic Foods",
          "image": "tofu.png",
          "consistency": "solid",
          "name": "tofu",
          "original": "½ cup firm tofu, patted dry and cut into bit-sized pieces (or ½ cup seafood such as squid & shrimp, or chicken)",
          "originalString": "½ cup firm tofu, patted dry and cut into bit-sized pieces (or ½ cup seafood such as squid & shrimp, or chicken)",
          "originalName": "firm tofu, patted dry and cut into bit-sized pieces (or ½ cup seafood such as squid & shrimp, or chicken)",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "dry",
            "firm",
            "cut into bit-sized pieces (or ½ cup seafood such as squid & shrimp, or chicken)"
          ],
          "metaInformation": [
            "dry",
            "firm",
            "cut into bit-sized pieces (or ½ cup seafood such as squid & shrimp, or chicken)"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1022030,
          "aisle": "Spices and Seasonings",
          "image": "black-pepper.png",
          "consistency": "solid",
          "name": "peppercorns",
          "original": "2 tablespoons fresh peppercorns",
          "originalString": "2 tablespoons fresh peppercorns",
          "originalName": "fresh peppercorns",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [
            "fresh"
          ],
          "metaInformation": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "2 tablespoons chopped garlic (2 cloves)",
          "originalString": "2 tablespoons chopped garlic (2 cloves)",
          "originalName": "tablespoons chopped garlic",
          "amount": 2.0,
          "unit": "cloves",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 11819,
          "aisle": "Produce",
          "image": "red-chili.jpg",
          "consistency": "solid",
          "name": "chilies",
          "original": "1 tablespoon smashed small Thai chilies",
          "originalString": "1 tablespoon smashed small Thai chilies",
          "originalName": "smashed small Thai chilies",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [
            "smashed"
          ],
          "metaInformation": [
            "smashed"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11819,
          "aisle": "Produce",
          "image": "red-chili.jpg",
          "consistency": "solid",
          "name": "chili",
          "original": "1 sliced orange chili (about 1 tablespoon)",
          "originalString": "1 sliced orange chili (about 1 tablespoon)",
          "originalName": "sliced orange chili (about",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [
            "sliced"
          ],
          "metaInformation": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 6150,
          "aisle": "Condiments",
          "image": "barbecue-sauce.jpg",
          "consistency": "solid",
          "name": "bbq sauce",
          "original": "1 ½ tablespoons 0yster sauce",
          "originalString": "1 ½ tablespoons 0yster sauce",
          "originalName": "0yster sauce",
          "amount": 1.5,
          "unit": "tablespoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 93767,
          "aisle": "Health Foods;Condiments",
          "image": "dark-sauce.jpg",
          "consistency": "liquid",
          "name": "braggs liquid aminos",
          "original": "1 teaspoon Braggs Amino Acids",
          "originalString": "1 teaspoon Braggs Amino Acids",
          "originalName": "Braggs Amino Acids",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 10116124,
          "aisle": "Ethnic Foods",
          "image": "soy-sauce.jpg",
          "consistency": "liquid",
          "name": "tamari",
          "original": "1 ½ teaspoon Tamari",
          "originalString": "1 ½ teaspoon Tamari",
          "originalName": "Tamari",
          "amount": 1.5,
          "unit": "teaspoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 16124,
          "aisle": "Ethnic Foods;Condiments",
          "image": "soy-sauce.jpg",
          "consistency": "liquid",
          "name": "soy sauce",
          "original": "1 tablespoon fish sauce or white soy sauce (or more to taste)",
          "originalString": "1 tablespoon fish sauce or white soy sauce (or more to taste)",
          "originalName": "fish sauce or white soy sauce (or more to taste)",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [
            "white",
            "to taste",
            "( )"
          ],
          "metaInformation": [
            "white",
            "to taste",
            "( )"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 93628,
          "aisle": "Baking",
          "image": "stevia.png",
          "consistency": "solid",
          "name": "stevia",
          "original": "¼ teaspoon Stevia",
          "originalString": "¼ teaspoon Stevia",
          "originalName": "Stevia",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "liquid",
          "name": "water",
          "original": "about 4 tablespoons water",
          "originalString": "about 4 tablespoons water",
          "originalName": "about water",
          "amount": 4.0,
          "unit": "tablespoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 2044,
          "aisle": "Produce;Spices and Seasonings",
          "image": "basil.jpg",
          "consistency": "solid",
          "name": "basil leaves",
          "original": "½ cup packed holy basil leaves & flowers",
          "originalString": "½ cup packed holy basil leaves & flowers",
          "originalName": "packed holy basil leaves & flowers",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "packed"
          ],
          "metaInformation": [
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vinegar-(white).jpg",
          "consistency": "liquid",
          "name": "vinegar",
          "original": "¼ teaspoon vinegar",
          "originalString": "¼ teaspoon vinegar",
          "originalName": "vinegar",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        }
      ],
      "id": 641671,
      "title": "Drunken Noodles (Pad Kee Mao)",
      "readyInMinutes": 45,
      "servings": 2,
      "sourceUrl": "https://www.foodista.com/recipe/3BKDFD6S/drunken-noodles-pad-kee-mao",
      "summary": "Drunken Noodles (Pad Kee Mao) requires about <b>around 45 minutes</b> from start to finish. This recipe serves 2 and costs $3.8 per serving. This main course has <b>698 calories</b>, <b>15g of protein</b>, and <b>18g of fat</b> per serving. If you have orange chili, braggs amino acids, vinegar, and a few other ingredients on hand, you can make it. This recipe from Foodista has 11 fans. It is a <b>rather pricey</b> recipe for fans of Asian food. It is a good option if you're following a <b>dairy free, lacto ovo vegetarian, and vegan</b> diet. With a spoonacular <b>score of 74%</b>, this dish is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/drunken-noodles-pad-kee-mao-718039\">Drunken Noodles (Pad Kee Mao)</a>, <a href=\"https://spoonacular.com/recipes/pad-kee-mao-470929\">Pad Kee Mao</a>, and <a href=\"https://spoonacular.com/recipes/drunken-noodles-14834\">Drunken Noodles</a>.",
      "cuisines": [
        "Thai",
        "Asian"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "chenin blanc",
          "gewurztraminer",
          "riesling"
        ],
        "pairingText": "Chenin Blanc, Gewurztraminer, and Riesling are my top picks for Drunken Noodles. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. The Essay Chenin Blanc with a 4.2 out of 5 star rating seems like a good match. It costs about 9 dollars per bottle.",
        "productMatches": [
          {
            "id": 439943,
            "title": "Essay Chenin Blanc",
            "description": "The Essay Chenin Blanc is a medium-bodied white blend made from South Africa's white varietal, Chenin Blanc. The Chenin Blanc gives the wines its fruit salad, guava and melon aromas and a refreshing acidity. Some sur lie on the less for a few months adds to the complexity and body. A touch of aromatic Viognier complements the fruit structure with some floral hints. The wine is perfect on its own as an aperitif on the porch on a hot summer's day. Chenin Blanc pairs well with a wide range of foods, especially sushi, oysters, Asian curries, sweet-and-sour dishes, and summer salads.Blend: 87% Chenin Blanc, 13% Viognier",
            "price": "$8.99",
            "image": "https://spoonacular.com/productImages/439943-312x231.jpg",
            "averageRating": 0.8400000000000001,
            "ratingCount": 5.0,
            "score": 0.7775000000000001,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fessay-chenin-blanc-2014%2F139942"
          }
        ]
      },
      "instructions": "Separate the noodles by peeling them apart one at a time. If also using Yam-cake noodles, rinse well. Set aside.\nPrepare your ingredients: Slice the vegetables. Crush the garlic and chilies, and set aside. Pick off the leaves & flowers of the basil, and set aside. Chop the large chili into rings.\nCombine the oyster sauce, Braggs, fish sauce, and Stevia in a small bowl and set aside.\nIf using tofu, pre-fry in a dry, non-stick skillet until browned. Set aside.\nAdd the oil to a Wok (this pan is preferred but not a necessity), and heat on medium until its dancing around.  (Heating oil on too high of heat will cause it to turn into Trans-fat which is not a good thing.)  Then add the garlic, chilies and green peppercorns. Keep stirring so it doesnt burn.\nWhen the garlic turns light brown, add the veggies & meat/seafood if adding. Keep stirring and cook until finished, about 3-5 minutes depending on the ingredients used.\nAdd the tofu (if adding), then the noodles. You may need to add a bit more water if the pan gets too dry. Dont add a lot, or the noodles will get mushy.\nAfter frying for a minute or two, add the sauce mixture.  Stir well to combine.\nAdd the basil & vinegar. Stir to mix. When the basil is wilted its done.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Separate the noodles by peeling them apart one at a time. If also using Yam-cake noodles, rinse well. Set aside.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Prepare your ingredients: Slice the vegetables. Crush the garlic and chilies, and set aside. Pick off the leaves & flowers of the basil, and set aside. Chop the large chili into rings.",
              "ingredients": [
                {
                  "id": 11819,
                  "name": "chili pepper",
                  "localizedName": "chili pepper",
                  "image": "red-chili.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 2044,
                  "name": "basil",
                  "localizedName": "basil",
                  "image": "basil.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Combine the oyster sauce, Braggs, fish sauce, and Stevia in a small bowl and set aside.",
              "ingredients": [
                {
                  "id": 93628,
                  "name": "stevia",
                  "localizedName": "stevia",
                  "image": "stevia.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "If using tofu, pre-fry in a dry, non-stick skillet until browned. Set aside.",
              "ingredients": [
                {
                  "id": 16213,
                  "name": "tofu",
                  "localizedName": "tofu",
                  "image": "tofu.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Add the oil to a Wok (this pan is preferred but not a necessity), and heat on medium until its dancing around.  (",
              "ingredients": [
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                },
                {
                  "id": 404666,
                  "name": "wok",
                  "localizedName": "wok",
                  "image": "wok.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Heating oil on too high of heat will cause it to turn into Trans-fat which is not a good thing.)  Then add the garlic, chilies and green peppercorns. Keep stirring so it doesnt burn.",
              "ingredients": [
                {
                  "id": 11819,
                  "name": "chili pepper",
                  "localizedName": "chili pepper",
                  "image": "red-chili.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 7,
              "step": "When the garlic turns light brown, add the veggies & meat/seafood if adding. Keep stirring and cook until finished, about 3-5 minutes depending on the ingredients used.",
              "ingredients": [
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 8,
              "step": "Add the tofu (if adding), then the noodles. You may need to add a bit more water if the pan gets too dry. Dont add a lot, or the noodles will get mushy.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 16213,
                  "name": "tofu",
                  "localizedName": "tofu",
                  "image": "tofu.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 9,
              "step": "After frying for a minute or two, add the sauce mixture.  Stir well to combine.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 10,
              "step": "Add the basil & vinegar. Stir to mix. When the basil is wilted its done.",
              "ingredients": [
                {
                  "id": 2053,
                  "name": "vinegar",
                  "localizedName": "vinegar",
                  "image": "vinegar-(white).jpg"
                },
                {
                  "id": 2044,
                  "name": "basil",
                  "localizedName": "basil",
                  "image": "basil.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/drunken-noodles-pad-kee-mao-641671"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 23,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 35,
      "spoonacularScore": 98.0,
      "healthScore": 100.0,
      "creditsText": "Lisa's Vegetarian Kitchen",
      "license": "CC BY 2.5 CA",
      "sourceName": "Food and Spice",
      "pricePerServing": 161.03,
      "extendedIngredients": [
        {
          "id": 16056,
          "aisle": "Pasta and Rice;Canned and Jarred;Ethnic Foods",
          "image": "chickpeas.png",
          "consistency": "solid",
          "name": "dried chickpeas",
          "original": "1 cup dried chickpeas (3 cups cooked or 2 14 oz cans)",
          "originalString": "1 cup dried chickpeas (3 cups cooked or 2 14 oz cans)",
          "originalName": "cup dried chickpeas cooked or 2 14 oz cans)",
          "amount": 3.0,
          "unit": "cups",
          "meta": [
            "dried",
            "cooked"
          ],
          "metaInformation": [
            "dried",
            "cooked"
          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 709.764,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "2 cloves garlic, chopped",
          "originalString": "2 cloves garlic, chopped",
          "originalName": "garlic, chopped",
          "amount": 2.0,
          "unit": "cloves",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "juice of lemon",
          "original": "juice from 1 lemon (3 tablespoons)",
          "originalString": "juice from 1 lemon (3 tablespoons)",
          "originalName": "juice from 1 lemon",
          "amount": 3.0,
          "unit": "",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "2 tablespoons olive oil + extra for serving",
          "originalString": "2 tablespoons olive oil + extra for serving",
          "originalName": "olive oil + extra for serving",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [
            "for serving"
          ],
          "metaInformation": [
            "for serving"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 2028,
          "aisle": "Spices and Seasonings",
          "image": "paprika.jpg",
          "consistency": "solid",
          "name": "paprika",
          "original": "paprika",
          "originalString": "paprika",
          "originalName": "paprika",
          "amount": 4.0,
          "unit": "servings",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 12147,
          "aisle": "Produce;Baking",
          "image": "pine-nuts.png",
          "consistency": "solid",
          "name": "pine nuts",
          "original": "2 tablespoons pine nuts",
          "originalString": "2 tablespoons pine nuts",
          "originalName": "pine nuts",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1012047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "sea salt",
          "original": "1 1/2 teaspoons sea salt, or to taste",
          "originalString": "1 1/2 teaspoons sea salt, or to taste",
          "originalName": "sea salt, or to taste",
          "amount": 1.5,
          "unit": "teaspoons",
          "meta": [
            "to taste"
          ],
          "metaInformation": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 12698,
          "aisle": "Ethnic Foods;Health Foods",
          "image": "tahini-paste.png",
          "consistency": "solid",
          "name": "tahini",
          "original": "1/3 cup tahini",
          "originalString": "1/3 cup tahini",
          "originalName": "tahini",
          "amount": 0.3333333333333333,
          "unit": "cup",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.333,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 78.863,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1002042,
          "aisle": "Ethnic Foods;Spices and Seasonings",
          "image": "zaatar.png",
          "consistency": "solid",
          "name": "za'atar",
          "original": "2 tablespoons za'atar, or to taste",
          "originalString": "2 tablespoons za'atar, or to taste",
          "originalName": "za'atar, or to taste",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [
            "to taste"
          ],
          "metaInformation": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "id": 766453,
      "title": "Hummus and Za'atar",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://foodandspice.blogspot.com/2016/03/hummus-with-zaatar.html",
      "image": "https://spoonacular.com/recipeImages/766453-556x370.jpg",
      "imageType": "jpg",
      "summary": "The recipe Hummus and Za'atar is ready <b>in around 45 minutes</b> and is definitely an outstanding <b>gluten free and vegan</b> option for lovers of middl eastern food. For <b>$1.61 per serving</b>, you get a marinade that serves 4. One serving contains <b>778 calories</b>, <b>34g of protein</b>, and <b>31g of fat</b>. This recipe from foodandspice.blogspot.com has 35 fans. If you have sea salt, garlic, juice of lemon, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/chopped-hummus-dip-with-zaatar-180958\">Chopped Hummus Dip with Za'atar</a>, <a href=\"https://spoonacular.com/recipes/hummus-deviled-eggs-with-zaatar-exercise-challenge-626237\">Hummus Deviled Eggs with Za’atar {Exercise Challenge}</a>, and <a href=\"https://spoonacular.com/recipes/zaatar-bread-rolls-manaiesh-bi-zaatar-132855\">Za'atar Bread Rolls (Manaiesh Bi Za'atar)</a>.",
      "cuisines": [
        "Middle Eastern"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {},
      "instructions": "Rinse the chickpeas and soak for 8 hours or overnight in several inches of water. Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft. Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned.Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired.Transfer the hummus to a shallow bowl and drizzle with olive oil. Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Rinse the chickpeas and soak for 8 hours or overnight in several inches of water.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 480,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }
              ],
              "length": {
                "number": 120,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned.",
              "ingredients": [
                {
                  "id": 12147,
                  "name": "pine nuts",
                  "localizedName": "pine nuts",
                  "image": "pine-nuts.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired.",
              "ingredients": [
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 12147,
                  "name": "pine nuts",
                  "localizedName": "pine nuts",
                  "image": "pine-nuts.png"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 12698,
                  "name": "tahini",
                  "localizedName": "tahini",
                  "image": "tahini-paste.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "food-processor.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Transfer the hummus to a shallow bowl and drizzle with olive oil. Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 2028,
                  "name": "paprika",
                  "localizedName": "paprika",
                  "image": "paprika.jpg"
                },
                {
                  "id": 1002042,
                  "name": "zaatar",
                  "localizedName": "zaatar",
                  "image": "zaatar.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/hummus-and-zaatar-766453"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 18,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 9,
      "spoonacularScore": 85.0,
      "healthScore": 44.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 156.3,
      "extendedIngredients": [
        {
          "id": 1034053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "extra virgin olive oil",
          "original": "2 tablespoons extra virgin olive oil",
          "originalString": "2 tablespoons extra virgin olive oil",
          "originalName": "extra virgin olive oil",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic cloves",
          "original": "4 garlic cloves, minced",
          "originalString": "4 garlic cloves, minced",
          "originalName": "garlic cloves, minced",
          "amount": 4.0,
          "unit": "",
          "meta": [
            "minced"
          ],
          "metaInformation": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11962,
          "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
          "image": "dried-arbol-chiles.jpg",
          "consistency": "solid",
          "name": "chili peppers",
          "original": "2 smalls fresh red chili peppers, seeded and finely chopped﻿",
          "originalString": "2 smalls fresh red chili peppers, seeded and finely chopped﻿",
          "originalName": "s fresh red chili peppers, seeded and finely chopped",
          "amount": 2.0,
          "unit": "small",
          "meta": [
            "fresh",
            "red",
            "seeded",
            "finely",
            "chopped"
          ],
          "metaInformation": [
            "fresh",
            "red",
            "seeded",
            "finely",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "small",
              "unitLong": "smalls"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "small",
              "unitLong": "smalls"
            }
          }
        },
        {
          "id": 12087,
          "aisle": "Nuts;Savory Snacks",
          "image": "cashews.jpg",
          "consistency": "solid",
          "name": "cashew nuts",
          "original": "1 cup raw cashew nuts",
          "originalString": "1 cup raw cashew nuts",
          "originalName": "raw cashew nuts",
          "amount": 1.0,
          "unit": "cup",
          "meta": [
            "raw"
          ],
          "metaInformation": [
            "raw"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 12104,
          "aisle": "Produce",
          "image": "coconut.jpg",
          "consistency": "solid",
          "name": "coconut",
          "original": "1 1/4 cups dry unsweetened shredded coconut, lightly toasted",
          "originalString": "1 1/4 cups dry unsweetened shredded coconut, lightly toasted",
          "originalName": "dry unsweetened shredded coconut, lightly toasted",
          "amount": 1.25,
          "unit": "cups",
          "meta": [
            "shredded",
            "unsweetened",
            "dry",
            "lightly toasted"
          ],
          "metaInformation": [
            "shredded",
            "unsweetened",
            "dry",
            "lightly toasted"
          ],
          "measures": {
            "us": {
              "amount": 1.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 295.735,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 93628,
          "aisle": "Baking",
          "image": "stevia.png",
          "consistency": "solid",
          "name": "stevia",
          "original": "1/2 teaspoon stevia powder (or sweetener)",
          "originalString": "1/2 teaspoon stevia powder (or sweetener)",
          "originalName": "stevia powder (or sweetener)",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "(or sweetener)"
          ],
          "metaInformation": [
            "(or sweetener)"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 93767,
          "aisle": "Health Foods;Condiments",
          "image": "dark-sauce.jpg",
          "consistency": "liquid",
          "name": "bragg's liquid aminos",
          "original": "4 tablespoons Nama Shoyu (soy sauce) or Bragg liquid Aminos",
          "originalString": "4 tablespoons Nama Shoyu (soy sauce) or Bragg liquid Aminos",
          "originalName": "Nama Shoyu (soy sauce) or Bragg liquid Aminos",
          "amount": 4.0,
          "unit": "tablespoons",
          "meta": [
            "(soy sauce)"
          ],
          "metaInformation": [
            "(soy sauce)"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 2048,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "apple-cider-vinegar.jpg",
          "consistency": "liquid",
          "name": "apple cider vinegar",
          "original": "2 tablespoons apple cider vinegar (or rice vinegar)",
          "originalString": "2 tablespoons apple cider vinegar (or rice vinegar)",
          "originalName": "apple cider vinegar (or rice vinegar)",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [
            "(or rice vinegar)"
          ],
          "metaInformation": [
            "(or rice vinegar)"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 10112220,
          "aisle": "Health Foods;Baking",
          "image": "no.jpg",
          "consistency": "solid",
          "name": "flax egg",
          "original": "1 flax egg (made with 1 Tbsp. ground flax seed& 3 Tbsp. wa",
          "originalString": "1 flax egg (made with 1 Tbsp. ground flax seed& 3 Tbsp. wa",
          "originalName": "flax egg (made with 1 Tbsp. ground flax seed& 3 Tbsp. wa",
          "amount": 1.0,
          "unit": "",
          "meta": [
            "with 1 tbsp. ground flax seed& 3 tbsp. wa"
          ],
          "metaInformation": [
            "with 1 tbsp. ground flax seed& 3 tbsp. wa"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11052,
          "aisle": "Produce",
          "image": "green-beans-or-string-beans.jpg",
          "consistency": "solid",
          "name": "fresh green beans",
          "original": "2 1/2 cups fresh green beans, cut in half",
          "originalString": "2 1/2 cups fresh green beans, cut in half",
          "originalName": "fresh green beans, cut in half",
          "amount": 2.5,
          "unit": "cups",
          "meta": [
            "fresh",
            "cut in half"
          ],
          "metaInformation": [
            "fresh",
            "cut in half"
          ],
          "measures": {
            "us": {
              "amount": 2.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 591.47,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11116,
          "aisle": "Produce",
          "image": "bok-choy.jpg",
          "consistency": "solid",
          "name": "bok choy",
          "original": "8 ounces baby bok choy or regular bok choy (shredded",
          "originalString": "8 ounces baby bok choy or regular bok choy (shredded",
          "originalName": "baby bok choy or regular bok choy (shredded",
          "amount": 8.0,
          "unit": "ounces",
          "meta": [
            "shredded"
          ],
          "metaInformation": [
            "shredded"
          ],
          "measures": {
            "us": {
              "amount": 8.0,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 226.796,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20040,
          "aisle": "Pasta and Rice",
          "image": "uncooked-brown-rice.png",
          "consistency": "solid",
          "name": "brown rice",
          "original": "1 cup uncooked brown rice (make recipe below)",
          "originalString": "1 cup uncooked brown rice (make recipe below)",
          "originalName": "uncooked brown rice (make recipe below)",
          "amount": 1.0,
          "unit": "cup",
          "meta": [
            "uncooked",
            "(make recipe below)"
          ],
          "metaInformation": [
            "uncooked",
            "(make recipe below)"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1029159,
          "aisle": "Produce",
          "image": "lime-wedge.jpg",
          "consistency": "solid",
          "name": "lime wedges",
          "original": "lime wedges for serving",
          "originalString": "lime wedges for serving",
          "originalName": "lime wedges for serving",
          "amount": 1.0,
          "unit": "serving",
          "meta": [
            "for serving"
          ],
          "metaInformation": [
            "for serving"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "serving",
              "unitLong": "serving"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "serving",
              "unitLong": "serving"
            }
          }
        }
      ],
      "id": 663150,
      "title": "Thai Savory Brown Fried Rice",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/7C3JZV44/thai-savory-brown-fried-rice",
      "image": "https://spoonacular.com/recipeImages/663150-556x370.jpg",
      "imageType": "jpg",
      "summary": "Thai Savory Brown Fried Rice is a Chinese recipe that serves 4. This main course has <b>559 calories</b>, <b>15g of protein</b>, and <b>32g of fat</b> per serving. For <b>$1.56 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. 9 people found this recipe to be scrumptious and satisfying. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. Head to the store and pick up extra virgin olive oil, lime wedges, chili peppers, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/savory-slow-cooker-brown-rice-and-lentils-525366\">Savory Slow Cooker Brown Rice and Lentils</a>, <a href=\"https://spoonacular.com/recipes/thai-star-thai-fried-rice-600245\">Thai Star Thai Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/savory-indian-pancakes-with-lentils-brown-rice-and-cabbage-630342\">Savory Indian Pancakes with Lentils, Brown Rice and Cabbage</a>.",
      "cuisines": [
        "Chinese",
        "Asian"
      ],
      "dishTypes": [
        "side dish",
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "chenin blanc",
          "gewurztraminer",
          "riesling"
        ],
        "pairingText": "Fried Rice on the menu? Try pairing with Chenin Blanc, Gewurztraminer, and Riesling. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. One wine you could try is Lang & Reed Napa Valley Chenin Blanc. It has 4.4 out of 5 stars and a bottle costs about 20 dollars.",
        "productMatches": [
          {
            "id": 451736,
            "title": "Lang & Reed Napa Valley Chenin Blanc",
            "description": "The Lang & Reed Chenin Blanc – Napa Valley has peach and tropical fruit that are immediately on the nose, with the necessary hint of honeycomb (the traditional varietal character), and a lesser expression of apple and citrus. On the palate, the aromas are mirrored and given an even stronger presence with yellow apple exotic citrus notes, which give it anaccurate tartness. The texture is tender, and the flavors broaden with a touch of saline minerality, which leads into bright crisp acidity, adding to the wine’s refreshing character. It will blossom and gain in complexity with additional bottle time.",
            "price": "$19.98",
            "image": "https://spoonacular.com/productImages/451736-312x231.jpg",
            "averageRating": 0.8800000000000001,
            "ratingCount": 8.0,
            "score": 0.8400000000000001,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Flang-and-reed-napa-valley-chenin-blanc-2016%2F256445"
          }
        ]
      },
      "instructions": "Make my Perfect Brown Rice recipe below.  While brown \nrice is cooking prepare rest of meal.\n\nPERFECT BROWN RICE\n1 cup uncooked brown rice\n1 tsp. olive oil\n2 cups filtered water\n2 basil leaves (optional)\n\n\nFix brown rice by cooking in 1 tsp. olive oil until lightly browned. Place 2 basil leaves on top of rice and add 2 cups water all at once. Quickly put on lid and bring to boil. Turn down heat to simmer until all water has evaporated (around 40 minutes).\nHeat oil in a wok or large frying pan.  Add the garlic and cook on medium until lightly golden.  Watch carefully so you do not burn garlic.\nAdd the red chili peppers, cashew nuts and toasted coconut.  Mix together stevia, Nama Shoyu and apple cider vinegar together.  Cook over medium heat for 1 minutes.\nPush stir-fry to one side of pan and add flax on opposite end.  Cook and stir the flax egg for about a minute and then incorporate into stir-fry mixture.\nAdd the green beans, bok choy and brown rice to stir-fry.  Cook and stir on medium for another minute.  Bok Choy will be wilted, but green beans will still be a bit crunchy.\nSpoon into serving dish and add lime wedge on side for squeezing over rice.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Make my Perfect Brown Rice recipe below.  While brown",
              "ingredients": [
                {
                  "id": 20040,
                  "name": "brown rice",
                  "localizedName": "brown rice",
                  "image": "uncooked-brown-rice.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "rice is cooking prepare rest of meal.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 3,
              "step": "PERFECT BROWN RICE",
              "ingredients": [
                {
                  "id": 20040,
                  "name": "brown rice",
                  "localizedName": "brown rice",
                  "image": "uncooked-brown-rice.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "1 cup uncooked brown rice",
              "ingredients": [
                {
                  "id": 20040,
                  "name": "brown rice",
                  "localizedName": "brown rice",
                  "image": "uncooked-brown-rice.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "1 tsp. olive oil",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "2 cups filtered water",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 7,
              "step": "2 basil leaves (optional)",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Fix brown rice by cooking in 1 tsp. olive oil until lightly browned.",
              "ingredients": [
                {
                  "id": 20040,
                  "name": "brown rice",
                  "localizedName": "brown rice",
                  "image": "uncooked-brown-rice.png"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Place 2 basil leaves on top of rice and add 2 cups water all at once. Quickly put on lid and bring to boil. Turn down heat to simmer until all water has evaporated (around 40 minutes).",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 40,
                "unit": "minutes"
              }
            },
            {
              "number": 10,
              "step": "Heat oil in a wok or large frying pan.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                },
                {
                  "id": 404666,
                  "name": "wok",
                  "localizedName": "wok",
                  "image": "wok.png"
                }
              ]
            },
            {
              "number": 11,
              "step": "Add the garlic and cook on medium until lightly golden.  Watch carefully so you do not burn garlic.",
              "ingredients": [
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 12,
              "step": "Add the red chili peppers, cashew nuts and toasted coconut.",
              "ingredients": [
                {
                  "id": 11962,
                  "name": "arbol chile",
                  "localizedName": "arbol chile",
                  "image": "dried-arbol-chiles.jpg"
                },
                {
                  "id": 12087,
                  "name": "cashews",
                  "localizedName": "cashews",
                  "image": "cashews.jpg"
                },
                {
                  "id": 12104,
                  "name": "coconut",
                  "localizedName": "coconut",
                  "image": "coconut.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 13,
              "step": "Mix together stevia, Nama Shoyu and apple cider vinegar together.  Cook over medium heat for 1 minutes.",
              "ingredients": [
                {
                  "id": 2048,
                  "name": "apple cider vinegar",
                  "localizedName": "apple cider vinegar",
                  "image": "apple-cider-vinegar.jpg"
                },
                {
                  "id": 93628,
                  "name": "stevia",
                  "localizedName": "stevia",
                  "image": "stevia.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 1,
                "unit": "minutes"
              }
            },
            {
              "number": 14,
              "step": "Push stir-fry to one side of pan and add flax on opposite end.  Cook and stir the flax egg for about a minute and then incorporate into stir-fry mixture.",
              "ingredients": [
                {
                  "id": 10112220,
                  "name": "flax egg",
                  "localizedName": "flax egg",
                  "image": ""
                },
                {
                  "id": 10012220,
                  "name": "flaxseed",
                  "localizedName": "flaxseed",
                  "image": "flax-seeds.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 15,
              "step": "Add the green beans, bok choy and brown rice to stir-fry.  Cook and stir on medium for another minute.  Bok Choy will be wilted, but green beans will still be a bit crunchy.",
              "ingredients": [
                {
                  "id": 11052,
                  "name": "green beans",
                  "localizedName": "green beans",
                  "image": "green-beans-or-string-beans.jpg"
                },
                {
                  "id": 20040,
                  "name": "brown rice",
                  "localizedName": "brown rice",
                  "image": "uncooked-brown-rice.png"
                },
                {
                  "id": 11116,
                  "name": "bok choy",
                  "localizedName": "bok choy",
                  "image": "bok-choy.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 16,
              "step": "Spoon into serving dish and add lime wedge on side for squeezing over rice.",
              "ingredients": [
                {
                  "id": 1029159,
                  "name": "lime wedge",
                  "localizedName": "lime wedge",
                  "image": "lime-wedge.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/thai-savory-brown-fried-rice-663150"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 17,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 94,
      "spoonacularScore": 98.0,
      "healthScore": 75.0,
      "creditsText": "Pick Fresh Foods",
      "license": "CC BY 3.0",
      "sourceName": "Pick Fresh Foods",
      "pricePerServing": 414.24,
      "extendedIngredients": [
        {
          "id": 98840,
          "aisle": "Produce",
          "image": "broccolini.jpg",
          "consistency": "solid",
          "name": "broccolini",
          "original": "1 bunch broccolini, trimmed",
          "originalString": "1 bunch broccolini, trimmed",
          "originalName": "broccolini, trimmed",
          "amount": 1.0,
          "unit": "bunch",
          "meta": [
            "trimmed"
          ],
          "metaInformation": [
            "trimmed"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "bunch",
              "unitLong": "bunch"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "bunch",
              "unitLong": "bunch"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic clove",
          "original": "1 garlic clove, minced",
          "originalString": "1 garlic clove, minced",
          "originalName": "garlic clove, minced",
          "amount": 1.0,
          "unit": "",
          "meta": [
            "minced"
          ],
          "metaInformation": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "1 tbsp olive oil",
          "originalString": "1 tbsp olive oil",
          "originalName": "olive oil",
          "amount": 1.0,
          "unit": "tbsp",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "solid",
          "name": "onion",
          "original": "½ cup onion",
          "originalString": "½ cup onion",
          "originalName": "onion",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 20035,
          "aisle": "Pasta and Rice;Health Foods",
          "image": "uncooked-quinoa.png",
          "consistency": "solid",
          "name": "quinoa",
          "original": "1 cup quinoa, rinsed",
          "originalString": "1 cup quinoa, rinsed",
          "originalName": "quinoa, rinsed",
          "amount": 1.0,
          "unit": "cup",
          "meta": [
            "rinsed"
          ],
          "metaInformation": [
            "rinsed"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 6615,
          "aisle": "Canned and Jarred",
          "image": "chicken-broth.png",
          "consistency": "liquid",
          "name": "vegetable broth",
          "original": "2 cups vegetable broth",
          "originalString": "2 cups vegetable broth",
          "originalName": "vegetable broth",
          "amount": 2.0,
          "unit": "cups",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 473.176,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 12155,
          "aisle": "Nuts;Baking",
          "image": "walnuts.jpg",
          "consistency": "solid",
          "name": "walnuts",
          "original": "2 oz chopped walnuts",
          "originalString": "2 oz chopped walnuts",
          "originalName": "chopped walnuts",
          "amount": 2.0,
          "unit": "oz",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 56.699,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "id": 715769,
      "title": "Broccolini Quinoa Pilaf",
      "readyInMinutes": 30,
      "servings": 2,
      "sourceUrl": "http://pickfreshfoods.com/broccolini-quinoa-pilaf/",
      "image": "https://spoonacular.com/recipeImages/715769-556x370.jpg",
      "imageType": "jpg",
      "summary": "If you want to add more <b>Mediterranean</b> recipes to your recipe box, Broccolini Quinoa Pilaf might be a recipe you should try. One portion of this dish contains around <b>20g of protein</b>, <b>31g of fat</b>, and a total of <b>625 calories</b>. This recipe serves 2 and costs $4.14 per serving. A few people really liked this main course. 95 people have made this recipe and would make it again. Head to the store and pick up quinoa, garlic clove, olive oil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Pick Fresh Foods. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/spring-broccolini-kale-quinoa-bowls-734866\">Spring Broccolini & Kale Quinoa Bowls</a>, <a href=\"https://spoonacular.com/recipes/orange-sesame-salmon-with-quinoa-broccolini-839832\">Orange-Sesame Salmon with Quinoa & Broccolini</a>, and <a href=\"https://spoonacular.com/recipes/black-pepper-goat-cheese-and-chard-quinoa-with-roasted-broccolini-625829\">Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini</a>.",
      "cuisines": [
        "Mediterranean",
        "Italian",
        "European"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {},
      "instructions": "<ol><li>In a large pan with lid heat olive oil over medium high heat. Add onions and cook for 1 minute. Add garlic and cook until onions are translucent and garlic is fragrant.</li><li>Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.</li><li>Cover and reduce heat to low, cook for 15 minutes.</li><li>In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.</li><li>Uncover and toss broccolini and quinoa together.</li><li>Season to taste with salt and pepper.</li><li>Add walnuts and serve hot.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a large pan with lid heat olive oil over medium high heat.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add onions and cook for 1 minute.",
              "ingredients": [
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 1,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Add garlic and cook until onions are translucent and garlic is fragrant.",
              "ingredients": [
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.Cover and reduce heat to low, cook for 15 minutes.In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.Uncover and toss broccolini and quinoa together.Season to taste with salt and pepper.",
              "ingredients": [
                {
                  "id": 98840,
                  "name": "broccolini",
                  "localizedName": "broccolini",
                  "image": "broccolini.jpg"
                },
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                },
                {
                  "id": 1006615,
                  "name": "broth",
                  "localizedName": "broth",
                  "image": "chicken-broth.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ],
              "length": {
                "number": 18,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Add walnuts and serve hot.",
              "ingredients": [
                {
                  "id": 12155,
                  "name": "walnuts",
                  "localizedName": "walnuts",
                  "image": "walnuts.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/broccolini-quinoa-pilaf-715769"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 53,
      "spoonacularScore": 99.0,
      "healthScore": 100.0,
      "creditsText": "Lisa's Vegetarian Kitchen",
      "license": "CC BY 2.5 CA",
      "sourceName": "Food and Spice",
      "pricePerServing": 185.77,
      "extendedIngredients": [
        {
          "id": 20040,
          "aisle": "Pasta and Rice",
          "image": "uncooked-brown-rice.png",
          "consistency": "solid",
          "name": "brown rice",
          "original": "2/3 cup dried brown rice (2 cups cooked)",
          "originalString": "2/3 cup dried brown rice (2 cups cooked)",
          "originalName": "2/3 cup dried brown rice cooked)",
          "amount": 2.0,
          "unit": "cups",
          "meta": [
            "dried",
            "cooked"
          ],
          "metaInformation": [
            "dried",
            "cooked"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 473.176,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "solid",
          "name": "carrots",
          "original": "2 medium carrots, sliced",
          "originalString": "2 medium carrots, sliced",
          "originalName": "carrots, sliced",
          "amount": 2.0,
          "unit": "medium",
          "meta": [
            "sliced"
          ],
          "metaInformation": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "medium",
              "unitLong": "mediums"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "medium",
              "unitLong": "mediums"
            }
          }
        },
        {
          "id": 11143,
          "aisle": "Produce",
          "image": "celery.jpg",
          "consistency": "solid",
          "name": "celery",
          "original": "2 stalks celery, sliced",
          "originalString": "2 stalks celery, sliced",
          "originalName": "celery, sliced",
          "amount": 2.0,
          "unit": "stalks",
          "meta": [
            "sliced"
          ],
          "metaInformation": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "stalks",
              "unitLong": "stalks"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "stalks",
              "unitLong": "stalks"
            }
          }
        },
        {
          "id": 2007,
          "aisle": "Spices and Seasonings",
          "image": "celery-seed.jpg",
          "consistency": "solid",
          "name": "celery seed",
          "original": "1 teaspoon celery seed",
          "originalString": "1 teaspoon celery seed",
          "originalName": "celery seed",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 16032,
          "aisle": "Pasta and Rice;Canned and Jarred",
          "image": "kidney-beans.jpg",
          "consistency": "solid",
          "name": "dried kidney beans",
          "original": "2/3 cup dried kidney beans (2 cups cooked)",
          "originalString": "2/3 cup dried kidney beans (2 cups cooked)",
          "originalName": "2/3 cup dried kidney beans cooked)",
          "amount": 2.0,
          "unit": "cups",
          "meta": [
            "dried",
            "cooked"
          ],
          "metaInformation": [
            "dried",
            "cooked"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 473.176,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2023,
          "aisle": "Spices and Seasonings",
          "image": "marjoram.jpg",
          "consistency": "solid",
          "name": "dried marjoram",
          "original": "1 teaspoon dried marjoram",
          "originalString": "1 teaspoon dried marjoram",
          "originalName": "dried marjoram",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [
            "dried"
          ],
          "metaInformation": [
            "dried"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2042,
          "aisle": "Spices and Seasonings",
          "image": "thyme.jpg",
          "consistency": "solid",
          "name": "dried thyme",
          "original": "2 teaspoons dried thyme",
          "originalString": "2 teaspoons dried thyme",
          "originalName": "dried thyme",
          "amount": 2.0,
          "unit": "teaspoons",
          "meta": [
            "dried"
          ],
          "metaInformation": [
            "dried"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11209,
          "aisle": "Produce",
          "image": "eggplant.png",
          "consistency": "solid",
          "name": "eggplant",
          "original": "1 medium eggplant, chopped",
          "originalString": "1 medium eggplant, chopped",
          "originalName": "eggplant, chopped",
          "amount": 1.0,
          "unit": "medium",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "medium",
              "unitLong": "medium"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "medium",
              "unitLong": "medium"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "2 cloves garlic, minced or crushed",
          "originalString": "2 cloves garlic, minced or crushed",
          "originalName": "garlic, minced or crushed",
          "amount": 2.0,
          "unit": "cloves",
          "meta": [
            "minced",
            "crushed"
          ],
          "metaInformation": [
            "minced",
            "crushed"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 11052,
          "aisle": "Produce",
          "image": "green-beans-or-string-beans.jpg",
          "consistency": "solid",
          "name": "green beans",
          "original": "3 handfuls of green beans, chopped",
          "originalString": "3 handfuls of green beans, chopped",
          "originalName": "green beans, chopped",
          "amount": 3.0,
          "unit": "handfuls",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "handfuls",
              "unitLong": "handfuls"
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "handfuls",
              "unitLong": "handfuls"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "solid",
          "name": "ground pepper",
          "original": "fresh ground black pepper",
          "originalString": "fresh ground black pepper",
          "originalName": "fresh ground black pepper",
          "amount": 6.0,
          "unit": "servings",
          "meta": [
            "fresh",
            "black"
          ],
          "metaInformation": [
            "fresh",
            "black"
          ],
          "measures": {
            "us": {
              "amount": 6.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 6.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1012038,
          "aisle": "Spices and Seasonings",
          "image": "dried-sage.png",
          "consistency": "solid",
          "name": "ground sage",
          "original": "2 teaspoons ground sage",
          "originalString": "2 teaspoons ground sage",
          "originalName": "ground sage",
          "amount": 2.0,
          "unit": "teaspoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 93627,
          "aisle": "Spices and Seasonings;Condiments",
          "image": "dark-sauce.jpg",
          "consistency": "solid",
          "name": "liquid smoke",
          "original": "1/2 to 1 teaspoon liquid smoke, to taste",
          "originalString": "1/2 to 1 teaspoon liquid smoke, to taste",
          "originalName": "liquid smoke, to taste",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "to taste"
          ],
          "metaInformation": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "2 tablespoons olive oil",
          "originalString": "2 tablespoons olive oil",
          "originalName": "olive oil",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11821,
          "aisle": "Produce",
          "image": "red-pepper.jpg",
          "consistency": "solid",
          "name": "red bell pepper",
          "original": "1 red bell pepper, seeded and chopped",
          "originalString": "1 red bell pepper, seeded and chopped",
          "originalName": "red bell pepper, seeded and chopped",
          "amount": 1.0,
          "unit": "",
          "meta": [
            "red",
            "seeded",
            "chopped"
          ],
          "metaInformation": [
            "red",
            "seeded",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10011282,
          "aisle": "Produce",
          "image": "red-onion.png",
          "consistency": "solid",
          "name": "red onion",
          "original": "1 small white or red onion, diced",
          "originalString": "1 small white or red onion, diced",
          "originalName": "white or red onion, diced",
          "amount": 1.0,
          "unit": "small",
          "meta": [
            "diced",
            "white",
            "red"
          ],
          "metaInformation": [
            "diced",
            "white",
            "red"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "small",
              "unitLong": "small"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "small",
              "unitLong": "small"
            }
          }
        },
        {
          "id": 1012047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "sea salt",
          "original": "1 1/2 teaspoons sea salt, or to taste",
          "originalString": "1 1/2 teaspoons sea salt, or to taste",
          "originalName": "sea salt, or to taste",
          "amount": 1.5,
          "unit": "teaspoons",
          "meta": [
            "to taste"
          ],
          "metaInformation": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1016168,
          "aisle": "Condiments",
          "image": "hot-sauce-or-tabasco.png",
          "consistency": "liquid",
          "name": "sriracha",
          "original": "1 teaspoon sriracha or other hot sauce",
          "originalString": "1 teaspoon sriracha or other hot sauce",
          "originalName": "sriracha or other hot sauce",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 11529,
          "aisle": "Produce",
          "image": "tomato.png",
          "consistency": "solid",
          "name": "tomatoes",
          "original": "2 medium tomatoes, diced",
          "originalString": "2 medium tomatoes, diced",
          "originalName": "tomatoes, diced",
          "amount": 2.0,
          "unit": "medium",
          "meta": [
            "diced"
          ],
          "metaInformation": [
            "diced"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "medium",
              "unitLong": "mediums"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "medium",
              "unitLong": "mediums"
            }
          }
        },
        {
          "id": 6615,
          "aisle": "Canned and Jarred",
          "image": "chicken-broth.png",
          "consistency": "liquid",
          "name": "vegetable stock",
          "original": "3 cups vegetable stock",
          "originalString": "3 cups vegetable stock",
          "originalName": "vegetable stock",
          "amount": 3.0,
          "unit": "cups",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 709.764,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "id": 782601,
      "title": "Red Kidney Bean Jambalaya",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "http://foodandspice.blogspot.com/2016/05/red-kidney-bean-jambalaya.html",
      "image": "https://spoonacular.com/recipeImages/782601-556x370.jpg",
      "imageType": "jpg",
      "summary": "Red Kidney Bean Jambalaya might be just the <b>Creole</b> recipe you are searching for. One serving contains <b>538 calories</b>, <b>21g of protein</b>, and <b>8g of fat</b>. For <b>$1.69 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. This recipe from foodandspice.blogspot.com has 52 fans. A few people really liked this main course. Head to the store and pick up brown rice, vegetable stock, liquid smoke, and a few other things to make it today. To use up the sea salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/raspberry-sea-salt-brownies-494161\">Raspberry Sea Salt Brownies</a> as a dessert. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/red-kidney-bean-dip-148569\">Red Kidney Bean Dip</a>, <a href=\"https://spoonacular.com/recipes/kidney-bean-dip-119992\">Kidney Bean Dip</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a> for similar recipes.",
      "cuisines": [
        "Cajun",
        "Creole"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "albarino",
          "rose wine",
          "sauvignon blanc"
        ],
        "pairingText": "Cajun works really well with Albarino, rosé Wine, and Sauvignon Blanc. These low-tannin, lower alcohol wines will complement the heat in spicy cajun dishes, instead of making your mouth burn more. You could try Bodegas Rectoral do Umia Calazul Albarino. Reviewers quite like it with a 4.1 out of 5 star rating and a price of about 16 dollars per bottle.",
        "productMatches": [
          {
            "id": 481836,
            "title": "Bodegas Rectoral do Umia Calazul Albarino",
            "description": "Lemon yellow with golden reflections, clean and bright. Intense on the nose, with hints of stone fruit and apple, with mineral notes. On the palate, a well-integrated acidity is observed, obtaining a harmonious whole, freshness without edges, leaving a pleasing passage through the mouth persistent.",
            "price": "$15.99",
            "image": "https://spoonacular.com/productImages/481836-312x231.jpg",
            "averageRating": 0.82,
            "ratingCount": 6.0,
            "score": 0.7673684210526315,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fbodegas-rectoral-do-umia-calazul-albarino-2018%2F523770"
          }
        ]
      },
      "instructions": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart. Drain and set aside.Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender. Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
              "ingredients": [
                {
                  "id": 20040,
                  "name": "brown rice",
                  "localizedName": "brown rice",
                  "image": "uncooked-brown-rice.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ],
              "length": {
                "number": 960,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }
              ],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Drain and set aside.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
              "ingredients": [
                {
                  "id": 2007,
                  "name": "celery seed",
                  "localizedName": "celery seed",
                  "image": "celery-seed.jpg"
                },
                {
                  "id": 11052,
                  "name": "green beans",
                  "localizedName": "green beans",
                  "image": "green-beans-or-string-beans.jpg"
                },
                {
                  "id": 11821,
                  "name": "red pepper",
                  "localizedName": "red pepper",
                  "image": "red-pepper.jpg"
                },
                {
                  "id": 11209,
                  "name": "eggplant",
                  "localizedName": "eggplant",
                  "image": "eggplant.png"
                },
                {
                  "id": 2023,
                  "name": "marjoram",
                  "localizedName": "marjoram",
                  "image": "marjoram.jpg"
                },
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                },
                {
                  "id": 11124,
                  "name": "carrot",
                  "localizedName": "carrot",
                  "image": "sliced-carrot.png"
                },
                {
                  "id": 11143,
                  "name": "celery",
                  "localizedName": "celery",
                  "image": "celery.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }
              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
              "ingredients": [
                {
                  "id": 6615,
                  "name": "vegetable stock",
                  "localizedName": "vegetable stock",
                  "image": "chicken-broth.png"
                },
                {
                  "id": 93627,
                  "name": "liquid smoke",
                  "localizedName": "liquid smoke",
                  "image": "dark-sauce.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 45,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 93627,
                  "name": "liquid smoke",
                  "localizedName": "liquid smoke",
                  "image": "dark-sauce.jpg"
                },
                {
                  "id": 1016168,
                  "name": "sriracha",
                  "localizedName": "sriracha",
                  "image": "hot-sauce-or-tabasco.png"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/red-kidney-bean-jambalaya-782601"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 23,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 70,
      "spoonacularScore": 94.0,
      "healthScore": 41.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 190.12,
      "extendedIngredients": [
        {
          "id": 16058,
          "aisle": "Canned and Jarred",
          "image": "chickpeas.png",
          "consistency": "solid",
          "name": "canned garbanzo beans",
          "original": "2 cans garbanzo beans (chickpeas), drained and rinsed",
          "originalString": "2 cans garbanzo beans (chickpeas), drained and rinsed",
          "originalName": "garbanzo beans (chickpeas), drained and rinsed",
          "amount": 2.0,
          "unit": "cans",
          "meta": [
            "drained and rinsed",
            "(chickpeas)"
          ],
          "metaInformation": [
            "drained and rinsed",
            "(chickpeas)"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cans",
              "unitLong": "cans"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "cans",
              "unitLong": "cans"
            }
          }
        },
        {
          "id": 2009,
          "aisle": "Spices and Seasonings",
          "image": "chili-powder.jpg",
          "consistency": "solid",
          "name": "chili powder",
          "original": "1 tablespoon chili powder",
          "originalString": "1 tablespoon chili powder",
          "originalName": "chili powder",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 2012,
          "aisle": "Spices and Seasonings",
          "image": "ground-coriander.jpg",
          "consistency": "solid",
          "name": "coriander",
          "original": "1 tablespoon coriander",
          "originalString": "1 tablespoon coriander",
          "originalName": "coriander",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1002014,
          "aisle": "Spices and Seasonings",
          "image": "ground-cumin.jpg",
          "consistency": "solid",
          "name": "cumin",
          "original": "1 tablespoon cumin",
          "originalString": "1 tablespoon cumin",
          "originalName": "cumin",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "solid",
          "name": "flour",
          "original": "4 tablespoons flour",
          "originalString": "4 tablespoons flour",
          "originalName": "flour",
          "amount": 4.0,
          "unit": "tablespoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11297,
          "aisle": "Produce",
          "image": "parsley.jpg",
          "consistency": "solid",
          "name": "fresh parsley",
          "original": "1 large handful parsley, chopped",
          "originalString": "1 large handful parsley, chopped",
          "originalName": "parsley, chopped",
          "amount": 1.0,
          "unit": "large handful",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "large handful",
              "unitLong": "large handful"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "large handful",
              "unitLong": "large handful"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "2 cloves garlic, grated or finely chopped",
          "originalString": "2 cloves garlic, grated or finely chopped",
          "originalName": "garlic, grated or finely chopped",
          "amount": 2.0,
          "unit": "cloves",
          "meta": [
            "grated",
            "finely chopped"
          ],
          "metaInformation": [
            "grated",
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "juice of lemon",
          "original": "2 Zest and juice of lemons",
          "originalString": "2 Zest and juice of lemons",
          "originalName": "Zest and juice of lemons",
          "amount": 2.0,
          "unit": "",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 18413,
          "aisle": "Bakery/Bread",
          "image": "pita-bread.jpg",
          "consistency": "solid",
          "name": "pita",
          "original": "4 pita pockets",
          "originalString": "4 pita pockets",
          "originalName": "pita pockets",
          "amount": 4.0,
          "unit": "",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10011282,
          "aisle": "Produce",
          "image": "red-onion.png",
          "consistency": "solid",
          "name": "red onion",
          "original": "1 small red onion, chopped",
          "originalString": "1 small red onion, chopped",
          "originalName": "red onion, chopped",
          "amount": 1.0,
          "unit": "small",
          "meta": [
            "red",
            "chopped"
          ],
          "metaInformation": [
            "red",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "small",
              "unitLong": "small"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "small",
              "unitLong": "small"
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "solid",
          "name": "salt and pepper",
          "original": "Salt and pepper, to taste",
          "originalString": "Salt and pepper, to taste",
          "originalName": "Salt and pepper, to taste",
          "amount": 4.0,
          "unit": "servings",
          "meta": [
            "to taste"
          ],
          "metaInformation": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 12698,
          "aisle": "Ethnic Foods;Health Foods",
          "image": "tahini-paste.png",
          "consistency": "solid",
          "name": "tahini",
          "original": "1/2 cup tahini",
          "originalString": "1/2 cup tahini",
          "originalName": "tahini",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2043,
          "aisle": "Spices and Seasonings",
          "image": "turmeric.jpg",
          "consistency": "solid",
          "name": "turmeric",
          "original": "1 1/2 teaspoons turmeric",
          "originalString": "1 1/2 teaspoons turmeric",
          "originalName": "turmeric",
          "amount": 1.5,
          "unit": "teaspoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 4513,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "liquid",
          "name": "vegetable oil",
          "original": "1/4 cup vegetable oil",
          "originalString": "1/4 cup vegetable oil",
          "originalName": "vegetable oil",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "liquid",
          "name": "water",
          "original": "3 tablespoons water",
          "originalString": "3 tablespoons water",
          "originalName": "water",
          "amount": 3.0,
          "unit": "tablespoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "id": 642540,
      "title": "Falafel Burgers",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.foodista.com/recipe/FBWMX8MY/falafel-burgers",
      "image": "https://spoonacular.com/recipeImages/642540-556x370.jpg",
      "imageType": "jpg",
      "summary": "The recipe Falafel Burgers is ready <b>in approximately 45 minutes</b> and is definitely an amazing <b>vegan</b> option for lovers of American food. For <b>$1.9 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. One serving contains <b>708 calories</b>, <b>23g of protein</b>, and <b>35g of fat</b>. This recipe is liked by 69 foodies and cooks. It works well as a main course. Head to the store and pick up tahini, chili powder, coriander, and a few other things to make it today. To use up the flour you could follow this main course with the <a href=\"https://spoonacular.com/recipes/apple-tart-with-caramel-sauce-47961\">Apple Tart with Caramel Sauce</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/falafel-burgers-308498\">Falafel Burgers</a>, <a href=\"https://spoonacular.com/recipes/falafel-burgers-31895\">Falafel Burgers</a>, and <a href=\"https://spoonacular.com/recipes/falafel-burgers-216987\">Falafel burgers</a> for similar recipes.",
      "cuisines": [
        "American"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
      },
      "instructions": "<ol><li>Combine the chickpeas, onion, garlic, parsley, flour, spices, and salt, and pulse until the mixture is well combined. Form the mixture into 4 large patties.</li><li>Heat the oil in a large, nonstick skillet set over medium-high heat. Cook for about 3 minutes per side.</li><li>Make the tahini sauce: Whisk the tahini paste with the water, lemon juice and zest, salt, and freshly ground black pepper in a mixing bowl.</li><li>Serve the burgers in pita pockets or on a bun. Top them with tahini sauce, lettuce, and tomato.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine the chickpeas, onion, garlic, parsley, flour, spices, and salt, and pulse until the mixture is well combined. Form the mixture into 4 large patties.",
              "ingredients": [
                {
                  "id": 11297,
                  "name": "parsley",
                  "localizedName": "parsley",
                  "image": "parsley.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": []
            }
          ]
        },
        {
          "name": "Heat the oil in a large, nonstick skillet set over medium-high heat. Cook for about 3 minutes per side.Make the tahini sauce",
          "steps": [
            {
              "number": 1,
              "step": "Whisk the tahini paste with the water, lemon juice and zest, salt, and freshly ground black pepper in a mixing bowl.",
              "ingredients": [
                {
                  "id": 12698,
                  "name": "tahini",
                  "localizedName": "tahini",
                  "image": "tahini-paste.png"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "mixing-bowl.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "whisk.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Serve the burgers in pita pockets or on a bun. Top them with tahini sauce, lettuce, and tomato.",
              "ingredients": [
                {
                  "id": 12698,
                  "name": "tahini",
                  "localizedName": "tahini",
                  "image": "tahini-paste.png"
                },
                {
                  "id": 18413,
                  "name": "pita",
                  "localizedName": "pita",
                  "image": "pita-bread.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/falafel-burgers-642540"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 14,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 44,
      "spoonacularScore": 99.0,
      "healthScore": 100.0,
      "creditsText": "Lisa's Vegetarian Kitchen",
      "license": "CC BY 2.5 CA",
      "sourceName": "Food and Spice",
      "pricePerServing": 137.57,
      "extendedIngredients": [
        {
          "id": 12061,
          "aisle": "Nuts",
          "image": "almonds.jpg",
          "consistency": "solid",
          "name": "almonds",
          "original": "1/4 cup sliced almonds (lightly toasted if desired)",
          "originalString": "1/4 cup sliced almonds (lightly toasted if desired)",
          "originalName": "sliced almonds (lightly toasted if desired)",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "lightly toasted",
            "sliced",
            "( if desired)"
          ],
          "metaInformation": [
            "lightly toasted",
            "sliced",
            "( if desired)"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10011090,
          "aisle": "Produce",
          "image": "broccoli.jpg",
          "consistency": "solid",
          "name": "broccoli florets",
          "original": "4 cups broccoli florets",
          "originalString": "4 cups broccoli florets",
          "originalName": "broccoli florets",
          "amount": 4.0,
          "unit": "cups",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 946.352,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 20040,
          "aisle": "Pasta and Rice",
          "image": "uncooked-brown-rice.png",
          "consistency": "solid",
          "name": "brown rice",
          "original": "2 cups cooked brown rice (2/3 cup dried rice)",
          "originalString": "2 cups cooked brown rice (2/3 cup dried rice)",
          "originalName": "cooked brown rice (2/3 cup dried rice)",
          "amount": 2.0,
          "unit": "cups",
          "meta": [
            "dried",
            "cooked",
            "()"
          ],
          "metaInformation": [
            "dried",
            "cooked",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 473.176,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1002046,
          "aisle": "Condiments",
          "image": "dijon-mustard.jpg",
          "consistency": "liquid",
          "name": "dijon mustard",
          "original": "2 tablespoons Dijon mustard",
          "originalString": "2 tablespoons Dijon mustard",
          "originalName": "Dijon mustard",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 16056,
          "aisle": "Pasta and Rice;Canned and Jarred;Ethnic Foods",
          "image": "chickpeas.png",
          "consistency": "solid",
          "name": "dried chickpeas",
          "original": "1 1/2 cup cooked chickpeas (1/2 dried chickpeas)",
          "originalString": "1 1/2 cup cooked chickpeas (1/2 dried chickpeas)",
          "originalName": "cooked chickpeas (1/2 dried chickpeas)",
          "amount": 1.5,
          "unit": "cup",
          "meta": [
            "dried",
            "cooked",
            "()"
          ],
          "metaInformation": [
            "dried",
            "cooked",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 354.882,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11297,
          "aisle": "Produce",
          "image": "parsley.jpg",
          "consistency": "solid",
          "name": "fresh parsley",
          "original": "1/4 cup fresh cilantro or parsley, trimmed and chopped",
          "originalString": "1/4 cup fresh cilantro or parsley, trimmed and chopped",
          "originalName": "fresh cilantro or parsley, trimmed and chopped",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "fresh",
            "trimmed",
            "chopped"
          ],
          "metaInformation": [
            "fresh",
            "trimmed",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "1 clove garlic, minced",
          "originalString": "1 clove garlic, minced",
          "originalName": "garlic, minced",
          "amount": 1.0,
          "unit": "clove",
          "meta": [
            "minced"
          ],
          "metaInformation": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "clove",
              "unitLong": "clove"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "clove",
              "unitLong": "clove"
            }
          }
        },
        {
          "id": 11291,
          "aisle": "Produce",
          "image": "spring-onions.jpg",
          "consistency": "solid",
          "name": "green onions",
          "original": "2 to 3 green onions, trimmed and chopped, or 2 shallots finely chopped",
          "originalString": "2 to 3 green onions, trimmed and chopped, or 2 shallots finely chopped",
          "originalName": "to 3 green onions, trimmed and chopped, or 2 shallots finely chopped",
          "amount": 2.0,
          "unit": "",
          "meta": [
            "trimmed",
            "chopped",
            "finely chopped",
            "finely"
          ],
          "metaInformation": [
            "trimmed",
            "chopped",
            "finely chopped",
            "finely"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "solid",
          "name": "ground pepper",
          "original": "fresh ground black pepper",
          "originalString": "fresh ground black pepper",
          "originalName": "fresh ground black pepper",
          "amount": 6.0,
          "unit": "servings",
          "meta": [
            "fresh",
            "black"
          ],
          "metaInformation": [
            "fresh",
            "black"
          ],
          "measures": {
            "us": {
              "amount": 6.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 6.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "juice of lemon",
          "original": "juice from 1/2 lemon (1 1/2 tablespoons)",
          "originalString": "juice from 1/2 lemon (1 1/2 tablespoons)",
          "originalName": "juice from 1/2 lemon",
          "amount": 1.5,
          "unit": "",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "1 tablespoon olive oil",
          "originalString": "1 tablespoon olive oil",
          "originalName": "olive oil",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "2 teaspoons olive oil",
          "originalString": "2 teaspoons olive oil",
          "originalName": "olive oil",
          "amount": 2.0,
          "unit": "teaspoons",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 9273,
          "aisle": "Beverages",
          "image": "pineapple-juice.jpg",
          "consistency": "liquid",
          "name": "pineapple juice",
          "original": "2 tablespoons pineapple juice (juice from canned pineapple)",
          "originalString": "2 tablespoons pineapple juice (juice from canned pineapple)",
          "originalName": "pineapple juice (juice from canned pineapple)",
          "amount": 2.0,
          "unit": "",
          "meta": [
            "canned",
            "(juice from pineapple)"
          ],
          "metaInformation": [
            "canned",
            "(juice from pineapple)"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1032009,
          "aisle": "Spices and Seasonings",
          "image": "red-pepper-flakes.jpg",
          "consistency": "solid",
          "name": "red pepper flakes",
          "original": "1/2 teaspoon red pepper flakes",
          "originalString": "1/2 teaspoon red pepper flakes",
          "originalName": "red pepper flakes",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "red"
          ],
          "metaInformation": [
            "red"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1012047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "sea salt",
          "original": "1 1/2 teaspoons sea salt, or to taste",
          "originalString": "1 1/2 teaspoons sea salt, or to taste",
          "originalName": "sea salt, or to taste",
          "amount": 1.5,
          "unit": "teaspoons",
          "meta": [
            "to taste"
          ],
          "metaInformation": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11955,
          "aisle": "Canned and Jarred;Produce",
          "image": "sundried-tomatoes.jpg",
          "consistency": "solid",
          "name": "sun-dried tomatoes",
          "original": "1/3 cup sun-dried tomatoes, soaked in hot water for 40 minutes, drained and chopped (optional)",
          "originalString": "1/3 cup sun-dried tomatoes, soaked in hot water for 40 minutes, drained and chopped (optional)",
          "originalName": "sun-dried tomatoes, soaked in hot water for 40 minutes, drained and chopped (optional)",
          "amount": 0.3333333333333333,
          "unit": "cup",
          "meta": [
            "hot",
            "drained",
            "chopped",
            "for 40 minutes,  and  "
          ],
          "metaInformation": [
            "hot",
            "drained",
            "chopped",
            "for 40 minutes,  and  "
          ],
          "measures": {
            "us": {
              "amount": 0.333,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 78.863,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10116124,
          "aisle": "Ethnic Foods",
          "image": "soy-sauce.jpg",
          "consistency": "liquid",
          "name": "tamari soy sauce",
          "original": "2 teaspoons tamari (soy) sauce",
          "originalString": "2 teaspoons tamari (soy) sauce",
          "originalName": "tamari (soy) sauce",
          "amount": 2.0,
          "unit": "teaspoons",
          "meta": [
            "(soy)"
          ],
          "metaInformation": [
            "(soy)"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        }
      ],
      "id": 794349,
      "title": "Broccoli and Chickpea Rice Salad",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "http://foodandspice.blogspot.com/2016/07/broccoli-and-chickpea-rice-salad.html",
      "image": "https://spoonacular.com/recipeImages/794349-556x370.jpg",
      "imageType": "jpg",
      "summary": "Need a <b>gluten free and vegan main course</b>? Broccoli and Chickpea Rice Salad could be a spectacular recipe to try. One serving contains <b>524 calories</b>, <b>19g of protein</b>, and <b>12g of fat</b>. For <b>$1.38 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up almonds, olive oil, 2 tablespoons pineapple juice (juice from canned pineapple), and a few other things to make it today. 42 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/easy-balsamic-chickpea-brown-rice-broccoli-salad-101160\">Easy Balsamic Chickpea, Brown Rice & Broccoli Salad</a>, <a href=\"https://spoonacular.com/recipes/super-easy-chickpea-brown-rice-broccoli-crockpot-casserole-584241\">Super Easy Chickpea, Brown Rice & Broccoli Crockpot Casserole</a>, and <a href=\"https://spoonacular.com/recipes/chickpea-and-broccoli-salad-29686\">Chickpean And Broccoli Salad</a>.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {},
      "instructions": "In a large skillet, heat the oil over medium heat. Add the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender. Add the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl. Pour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a large skillet, heat the oil over medium heat.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender.",
              "ingredients": [
                {
                  "id": 11090,
                  "name": "broccoli",
                  "localizedName": "broccoli",
                  "image": "broccoli.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Add the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl.",
              "ingredients": [
                {
                  "id": 11090,
                  "name": "broccoli",
                  "localizedName": "broccoli",
                  "image": "broccoli.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Pour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/broccoli-and-chickpea-rice-salad-794349"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 12,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 9,
      "spoonacularScore": 91.0,
      "healthScore": 93.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 230.43,
      "extendedIngredients": [
        {
          "id": 20035,
          "aisle": "Pasta and Rice;Health Foods",
          "image": "uncooked-quinoa.png",
          "consistency": "solid",
          "name": "quinoa",
          "original": "300g quinoa",
          "originalString": "300g quinoa",
          "originalName": "quinoa",
          "amount": 300.0,
          "unit": "g",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 10.582,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 300.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "liquid",
          "name": "water",
          "original": "1 1/2 liters boiling water",
          "originalString": "1 1/2 liters boiling water",
          "originalName": "boiling water",
          "amount": 1.5,
          "unit": "liters",
          "meta": [
            "boiling"
          ],
          "metaInformation": [
            "boiling"
          ],
          "measures": {
            "us": {
              "amount": 1.585,
              "unitShort": "qt",
              "unitLong": "quarts"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "l",
              "unitLong": "liters"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "original": "1 tsp salt",
          "originalString": "1 tsp salt",
          "originalName": "salt",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "2 tbsp olive oil (not extra-virgin, it will overpower other flavours)",
          "originalString": "2 tbsp olive oil (not extra-virgin, it will overpower other flavours)",
          "originalName": "olive oil (not extra-virgin, it will overpower other flavours)",
          "amount": 2.0,
          "unit": "tbsp",
          "meta": [
            "extra-virgin",
            "(not , it will overpower other flavours)"
          ],
          "metaInformation": [
            "extra-virgin",
            "(not , it will overpower other flavours)"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 99100,
          "aisle": "Online",
          "image": "barberry.jpg",
          "consistency": "solid",
          "name": "dried barberries",
          "original": "50g barberries",
          "originalString": "50g barberries",
          "originalName": "barberries",
          "amount": 50.0,
          "unit": "g",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.764,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 50.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10012061,
          "aisle": "Baking",
          "image": "almonds-slivered.png",
          "consistency": "solid",
          "name": "slivered almonds",
          "original": "4 tbsp slivered almonds",
          "originalString": "4 tbsp slivered almonds",
          "originalName": "slivered almonds",
          "amount": 4.0,
          "unit": "tbsp",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 12151,
          "aisle": "Nuts;Savory Snacks",
          "image": "pistachios.jpg",
          "consistency": "solid",
          "name": "pistachios",
          "original": "2 tbsp slivered pistachios",
          "originalString": "2 tbsp slivered pistachios",
          "originalName": "slivered pistachios",
          "amount": 2.0,
          "unit": "tbsp",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 2012,
          "aisle": "Spices and Seasonings",
          "image": "ground-coriander.jpg",
          "consistency": "solid",
          "name": "coriander",
          "original": "30g chopped coriander, chopped",
          "originalString": "30g chopped coriander, chopped",
          "originalName": "chopped coriander, chopped",
          "amount": 30.0,
          "unit": "g",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.058,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 30.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2064,
          "aisle": "Produce;Spices and Seasonings",
          "image": "mint.jpg",
          "consistency": "solid",
          "name": "mint",
          "original": "A few sprigs of mint, chopped",
          "originalString": "A few sprigs of mint, chopped",
          "originalName": "A few of mint, chopped",
          "amount": 3.0,
          "unit": "sprigs",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "sprigs",
              "unitLong": "sprigs"
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "sprigs",
              "unitLong": "sprigs"
            }
          }
        }
      ],
      "id": 1098387,
      "title": "Quinoa Salad with Barberries & Nuts",
      "readyInMinutes": 30,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/PBQJCDDG/quinoa-salad-with-barberries-nuts",
      "image": "https://spoonacular.com/recipeImages/1098387-556x370.jpg",
      "imageType": "jpg",
      "summary": "Quinoa Salad with Barberries & Nuts requires roughly <b>30 minutes</b> from start to finish. This recipe serves 4 and costs $2.3 per serving. One portion of this dish contains approximately <b>16g of protein</b>, <b>19g of fat</b>, and a total of <b>477 calories</b>. 1 person were glad they tried this recipe. Head to the store and pick up dried barberries, water, mint, and a few other things to make it today. It works well as a reasonably priced main course. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 93%</b>, which is outstanding. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-dried-fruit-and-nuts-484499\">Quinoa Salad with Dried Fruit and Nuts</a>, <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-summer-veggies-and-pine-nuts-677767\">Quinoa Salad with Summer Veggies and Pine Nuts</a>, and <a href=\"https://spoonacular.com/recipes/cold-quinoa-salad-with-chicken-pine-nuts-feta-18956\">Cold Quinoa Salad With Chicken, Pine Nuts & Feta</a>.",
      "cuisines": [],
      "dishTypes": [
        "side dish",
        "lunch",
        "main course",
        "salad",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "chardonnay",
          "gruener veltliner",
          "sauvignon blanc"
        ],
        "pairingText": "Salad on the menu? Try pairing with Chardonnay, Gruener Veltliner, and Sauvignon Blanc. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. You could try Tinga Reserve Chardonnay. Reviewers quite like it with a 4.5 out of 5 star rating and a price of about 9 dollars per bottle.",
        "productMatches": [
          {
            "id": 452589,
            "title": "Tinga Reserve Chardonnay",
            "description": "A rich yellow hay color. On the nose, tropical fruit with hints of sweet spice. It has strong acidity, large volume, and golden delicious apples on the palate.",
            "price": "$8.98",
            "image": "https://spoonacular.com/productImages/452589-312x231.jpg",
            "averageRating": 0.9,
            "ratingCount": 5.0,
            "score": 0.8375,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ftinga-reserve-chardonnay-2014%2F258316"
          }
        ]
      },
      "instructions": "<ol><li>Put the quinoa in a sieve and rinse under running water. Drain. </li><li>Pour the boiling water over quinoa in a medium saucepan. </li><li>Add salt, stir well and cook over medium-low heat until quinoa is cooked through but still has a bite in the center. Drain in a sieve.</li><li>Pick over the barberries, rinse in a sieve and dry on kitchen paper.</li><li>While the quinoa is cooking, heat 1 tablespoon of oil in a saucepan over medium heat and lightly toast the almond slivers. Add the slivered pistachios, then the rest of the oil and the rinsed barberries. Cook briefly until the barberries are shiny and a little puffed.</li><li>Save a tablespoon of the barberry and nut mix and a tablespoon of the chopped herbs for garnishing the finished dish. </li><li>Mix all of the remaining nut and barberry mix, herbs and quinoa. </li><li>Return to the pot and place on low heat. Cover with a lid and cook for ten minutes or until completely heated through and steam is rising. </li><li>Turn into a serving dish and fluff with a fork. </li><li>Add a little extra olive oil and a twist of black pepper if you wish.</li><li>Sprinkle the quinoa with the rest of the berry-nut mix and chopped herbs and serve on its own as a main dish or as a side dish.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Put the quinoa in a sieve and rinse under running water.",
              "ingredients": [
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 405600,
                  "name": "sieve",
                  "localizedName": "sieve",
                  "image": "strainer.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Drain.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Pour the boiling water over quinoa in a medium saucepan.",
              "ingredients": [
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add salt, stir well and cook over medium-low heat until quinoa is cooked through but still has a bite in the center.",
              "ingredients": [
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Drain in a sieve.Pick over the barberries, rinse in a sieve and dry on kitchen paper.While the quinoa is cooking, heat 1 tablespoon of oil in a saucepan over medium heat and lightly toast the almond slivers.",
              "ingredients": [
                {
                  "id": 10012061,
                  "name": "slivered almonds",
                  "localizedName": "slivered almonds",
                  "image": "almonds-slivered.png"
                },
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                },
                {
                  "id": 405600,
                  "name": "sieve",
                  "localizedName": "sieve",
                  "image": "strainer.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Add the slivered pistachios, then the rest of the oil and the rinsed barberries. Cook briefly until the barberries are shiny and a little puffed.Save a tablespoon of the barberry and nut mix and a tablespoon of the chopped herbs for garnishing the finished dish.",
              "ingredients": [
                {
                  "id": 12151,
                  "name": "pistachio nuts",
                  "localizedName": "pistachio nuts",
                  "image": "pistachios.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 7,
              "step": "Mix all of the remaining nut and barberry mix, herbs and quinoa. Return to the pot and place on low heat. Cover with a lid and cook for ten minutes or until completely heated through and steam is rising. Turn into a serving dish and fluff with a fork.",
              "ingredients": [
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "stock-pot.jpg"
                }
              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 8,
              "step": "Add a little extra olive oil and a twist of black pepper if you wish.Sprinkle the quinoa with the rest of the berry-nut mix and chopped herbs and serve on its own as a main dish or as a side dish.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/quinoa-salad-with-barberries-nuts-1098387"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 13,
      "spoonacularScore": 73.0,
      "healthScore": 20.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 105.89,
      "extendedIngredients": [
        {
          "id": 4582,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "liquid",
          "name": "canola oil",
          "original": "2 T. canola oil",
          "originalString": "2 T. canola oil",
          "originalName": "canola oil",
          "amount": 2.0,
          "unit": "T",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11165,
          "aisle": "Produce;Spices and Seasonings",
          "image": "cilantro.png",
          "consistency": "solid",
          "name": "cilantro",
          "original": "1/3 c. coarsely chopped cilantro",
          "originalString": "1/3 c. coarsely chopped cilantro",
          "originalName": "coarsely chopped cilantro",
          "amount": 0.3333333333333333,
          "unit": "c",
          "meta": [
            "coarsely chopped"
          ],
          "metaInformation": [
            "coarsely chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.333,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 78.863,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 12118,
          "aisle": "Canned and Jarred;Milk, Eggs, Other Dairy",
          "image": "coconut-milk.png",
          "consistency": "liquid",
          "name": "coconut milk",
          "original": "1 c. coconut milk",
          "originalString": "1 c. coconut milk",
          "originalName": "coconut milk",
          "amount": 1.0,
          "unit": "c",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11216,
          "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
          "image": "ginger.png",
          "consistency": "solid",
          "name": "fresh ginger",
          "original": "1 T. minced fresh ginger",
          "originalString": "1 T. minced fresh ginger",
          "originalName": "minced fresh ginger",
          "amount": 1.0,
          "unit": "T",
          "meta": [
            "fresh",
            "minced"
          ],
          "metaInformation": [
            "fresh",
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 93663,
          "aisle": "Ethnic Foods;Spices and Seasonings",
          "image": "garam-masala.jpg",
          "consistency": "solid",
          "name": "garam masala",
          "original": "1 t. Garam Masala (can be easily found in the supermarket spice isle)",
          "originalString": "1 t. Garam Masala (can be easily found in the supermarket spice isle)",
          "originalName": "Garam Masala (can be easily found in the supermarket spice isle)",
          "amount": 1.0,
          "unit": "t",
          "meta": [
            "(can be easily found in the supermarket spice isle)"
          ],
          "metaInformation": [
            "(can be easily found in the supermarket spice isle)"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic cloves",
          "original": "4 garlic cloves, minced",
          "originalString": "4 garlic cloves, minced",
          "originalName": "garlic cloves, minced",
          "amount": 4.0,
          "unit": "",
          "meta": [
            "minced"
          ],
          "metaInformation": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9160,
          "aisle": "Produce",
          "image": "lime-juice.png",
          "consistency": "liquid",
          "name": "lime juice",
          "original": "1 T. lime juice",
          "originalString": "1 T. lime juice",
          "originalName": "lime juice",
          "amount": 1.0,
          "unit": "T",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "solid",
          "name": "onion",
          "original": "1 onion, finely chopped",
          "originalString": "1 onion, finely chopped",
          "originalName": "onion, finely chopped",
          "amount": 1.0,
          "unit": "",
          "meta": [
            "finely chopped"
          ],
          "metaInformation": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10411529,
          "aisle": "Produce",
          "image": "plum-tomatoes.png",
          "consistency": "solid",
          "name": "plum tomatoes",
          "original": "3 . plum tomatoes",
          "originalString": "3 . plum tomatoes",
          "originalName": "plum tomatoes",
          "amount": 3.0,
          "unit": "",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10016069,
          "aisle": "Pasta and Rice;Canned and Jarred",
          "image": "red-lentils.png",
          "consistency": "solid",
          "name": "red lentils",
          "original": "1 1/4 c. split red lentils",
          "originalString": "1 1/4 c. split red lentils",
          "originalName": "split red lentils",
          "amount": 1.25,
          "unit": "c",
          "meta": [
            "split",
            "red"
          ],
          "metaInformation": [
            "split",
            "red"
          ],
          "measures": {
            "us": {
              "amount": 1.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 295.735,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "original": "3/4 t. salt",
          "originalString": "3/4 t. salt",
          "originalName": "salt",
          "amount": 0.75,
          "unit": "t",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "liquid",
          "name": "water",
          "original": "3 c. water",
          "originalString": "3 c. water",
          "originalName": "water",
          "amount": 3.0,
          "unit": "c",
          "meta": [],
          "metaInformation": [],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 709.764,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "id": 647830,
      "title": "Indian Lentil Dahl",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.foodista.com/recipe/XMH8PZ48/indian-lentil-dahl",
      "image": "https://spoonacular.com/recipeImages/647830-556x370.jpg",
      "imageType": "jpg",
      "summary": "The recipe Indian Lentil Dahl is ready <b>in approximately 45 minutes</b> and is definitely an amazing <b>gluten free and vegan</b> option for lovers of Indian food. For <b>$1.06 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This main course has <b>400 calories</b>, <b>17g of protein</b>, and <b>20g of fat</b> per serving. 13 people were impressed by this recipe. Head to the store and pick up salt, water, coconut milk, and a few other things to make it today. To use up the onion you could follow this main course with the <a href=\"https://spoonacular.com/recipes/candy-corn-cupcakes-63881\">Candy Corn Cupcakes</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 76%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/indian-spice-52-diet-for-red-lentil-dahl-666725\">Indian Spice – 5:2 Diet for Red Lentil Dahl</a>, <a href=\"https://spoonacular.com/recipes/indian-dahl-719429\">Indian Dahl</a>, and <a href=\"https://spoonacular.com/recipes/spicy-indian-dahl-630312\">Spicy Indian Dahl</a>.",
      "cuisines": [
        "Indian",
        "Asian"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "chenin blanc",
          "gewurztraminer",
          "riesling"
        ],
        "pairingText": "Chenin Blanc, Gewurztraminer, and Riesling are great choices for Asian. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. You could try Essay Chenin Blanc. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 9 dollars per bottle.",
        "productMatches": [
          {
            "id": 439943,
            "title": "Essay Chenin Blanc",
            "description": "The Essay Chenin Blanc is a medium-bodied white blend made from South Africa's white varietal, Chenin Blanc. The Chenin Blanc gives the wines its fruit salad, guava and melon aromas and a refreshing acidity. Some sur lie on the less for a few months adds to the complexity and body. A touch of aromatic Viognier complements the fruit structure with some floral hints. The wine is perfect on its own as an aperitif on the porch on a hot summer's day. Chenin Blanc pairs well with a wide range of foods, especially sushi, oysters, Asian curries, sweet-and-sour dishes, and summer salads.Blend: 87% Chenin Blanc, 13% Viognier",
            "price": "$8.99",
            "image": "https://spoonacular.com/productImages/439943-312x231.jpg",
            "averageRating": 0.8400000000000001,
            "ratingCount": 5.0,
            "score": 0.7775000000000001,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fessay-chenin-blanc-2014%2F139942"
          }
        ]
      },
      "instructions": "<ol><li> In a large saucepan, combine oil, onion and salt at medium-high heat. Cook until onion starts to brown, around 5 minutes or so. Add garlic, ginger and Garam Masala , cook until fragrant, about 1 minute.</li><li>Add lentils, coconut milk and water. Bring to a boil, then reduce heat to low and simmer, partially covered until lentils are fully tender and broken down to an almost paste-like consistency, about 25-30 minutes.</li><li>Add lime juice and cilantro. Check for seasoning. Serve (over rice if you like), topped with the diced tomatoes.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a large saucepan, combine oil, onion and salt at medium-high heat. Cook until onion starts to brown, around 5 minutes or so.",
              "ingredients": [
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }
              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Add garlic, ginger and Garam Masala , cook until fragrant, about 1 minute.",
              "ingredients": [
                {
                  "id": 93663,
                  "name": "garam masala",
                  "localizedName": "garam masala",
                  "image": "garam-masala.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 1,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Add lentils, coconut milk and water. Bring to a boil, then reduce heat to low and simmer, partially covered until lentils are fully tender and broken down to an almost paste-like consistency, about 25-30 minutes.",
              "ingredients": [
                {
                  "id": 12118,
                  "name": "coconut milk",
                  "localizedName": "coconut milk",
                  "image": "coconut-milk.png"
                },
                {
                  "id": 10316069,
                  "name": "lentils",
                  "localizedName": "lentils",
                  "image": "lentils-brown.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 30,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Add lime juice and cilantro. Check for seasoning.",
              "ingredients": [
                {
                  "id": 9160,
                  "name": "lime juice",
                  "localizedName": "lime juice",
                  "image": "lime-juice.png"
                },
                {
                  "id": 11165,
                  "name": "cilantro",
                  "localizedName": "cilantro",
                  "image": "cilantro.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Serve (over rice if you like), topped with the diced tomatoes.",
              "ingredients": [
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/indian-lentil-dahl-647830"
    }
  ]
}

const refactorData = (recipesAPI) => {
  const recipesArr = recipesAPI.recipes;
  let newArr = recipesArr.map((recipe) => {
    const {
      id,
      vegan,
      title,
      extendedIngredients,
      readyInMinutes,
      servings,
      image,
      summary,
      instructions,
      analyzedInstructions,
      spoonacularSourceUrl,
    } = recipe;

      const ingredients = extendedIngredients.map(ingredient => {
        const {id, name, original, image } = ingredient
        return {id, name, original, image}
      }
        )

    return {
      id,
      vegan,
      title,
      ingredients,
      readyInMinutes,
      servings,
      image,
      summary,
      instructions,
      analyzedInstructions,
      spoonacularSourceUrl,
    };
  });
  return newArr;
};
recipes = refactorData(recipes)
recipesVeganAPI = refactorData(recipesVeganAPI)

export {recipesVeganAPI, recipes}