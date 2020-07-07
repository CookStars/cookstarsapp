export const users = [
  {
    firstName: 'Grace',
    lastName: 'Shopper',
    userName: 'GShopper',
    email: 'Gshopper@gmail.com',
    points: '50',
    vegan: false,
    favoriteRecipes: {},
    recipeHistory: {},
    imageURL: '',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    userName: 'JDoe',
    email: 'JDoe@gmail.com',
    points: '25',
    vegan: true,
    favoriteRecipes: {},
    recipeHistory: {},
    imageURL: '',
  },
];

export const recipes = [
  {
    recipeId: 648638,
    title: "Julia Child's Coq au Vin",

    summary:
      "Julia Child's Coq au Vin might be just the main course you are searching for. For <b>$3.73 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>620 calories</b>, <b>31g of protein</b>, and <b>41g of fat</b> each. 32 people were impressed by this recipe. A mixture of chicken stock, wine, button mushrooms, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free and primal</b> diet.",
    imageURL: 'https://spoonacular.com/recipeImages/648638-556x370.jpg',

    ingredients:
      '1 pound sweet Italian sausage, ¾ pound lean ground beef, ½ cup minced onion, 2 cloves garlic crushed, 1 (28 ounce) can crushed tomatoes, 2 (6 ounce) cans tomato paste, 2 cans canned tomato sauce, ½ cup water, 2 tablespoons white sugar, 1 1/2 teaspoons dried basil leaves, 1 teaspoon fennel seeds, 1 teaspoon italian seasoning,',

    analyzedInstructions: [
      {
        name: '',
        steps: [
          {
            number: 1,
            step:
              'Blanch the bacon to remove some of its saltiness. Drop the bacon into a saucepan of cold water, covered by a couple of inches. Bring to a boil, simmer for 5 minutes, drain. Rinse in cold water, pat dry with paper towels.',
            ingredients: [
              {
                id: 10123,
                name: 'bacon',
                localizedName: 'bacon',
                image: 'raw-bacon.png',
              },
            ],
            equipment: [
              {
                id: 405895,
                name: 'paper towels',
                localizedName: 'paper towels',
                image: 'paper-towels.jpg',
              },
              {
                id: 404669,
                name: 'sauce pan',
                localizedName: 'sauce pan',
                image: 'sauce-pan.jpg',
              },
            ],
            length: {
              number: 5,
              unit: 'minutes',
            },
          },
          {
            number: 2,
            step:
              'Cut the bacon into 1 inch by 1/4 inch pieces.Brown bacon on medium high heat in a dutch oven big enough to hold the chicken, about 10 minutes.',
            ingredients: [
              {
                id: 10123,
                name: 'bacon',
                localizedName: 'bacon',
                image: 'raw-bacon.png',
              },
            ],
            equipment: [
              {
                id: 404667,
                name: 'dutch oven',
                localizedName: 'dutch oven',
                image: 'dutch-oven.jpg',
              },
            ],
            length: {
              number: 10,
              unit: 'minutes',
            },
          },
          {
            number: 3,
            step:
              'Remove the cooked bacon, set aside. Keep the bacon fat in the pan. Working in batches if necessary, add onions and chicken, skin side down. Brown the chicken well, on all sides, about 10 minutes. Halfway through the browning, add the garlic and sprinkle the chicken with salt and pepper.Spoon off any excess fat.',
            ingredients: [
              {
                id: 1102047,
                name: 'salt and pepper',
                localizedName: 'salt and pepper',
                image: 'salt-and-pepper.jpg',
              },
              {
                id: 11215,
                name: 'garlic',
                localizedName: 'garlic',
                image: 'garlic.png',
              },
              {
                id: 11282,
                name: 'onion',
                localizedName: 'onion',
                image: 'brown-onion.png',
              },
            ],
            equipment: [
              {
                id: 404645,
                name: 'frying pan',
                localizedName: 'frying pan',
                image: 'pan.png',
              },
            ],
            length: {
              number: 10,
              unit: 'minutes',
            },
          },
          {
            number: 4,
            step: 'Add the chicken stock, wine, and herbs.',
            ingredients: [
              {
                id: 6172,
                name: 'chicken stock',
                localizedName: 'chicken stock',
                image: 'chicken-broth.png',
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step:
              'Add back the bacon. Lower heat to a simmer. Cover and cook for 20 minutes, or until chicken is tender and cooked through.',
            ingredients: [
              {
                id: 10123,
                name: 'bacon',
                localizedName: 'bacon',
                image: 'raw-bacon.png',
              },
            ],
            equipment: [],
            length: {
              number: 20,
              unit: 'minutes',
            },
          },
          {
            number: 6,
            step: 'Remove chicken and onions to a separate platter.',
            ingredients: [
              {
                id: 11282,
                name: 'onion',
                localizedName: 'onion',
                image: 'brown-onion.png',
              },
            ],
            equipment: [],
          },
          {
            number: 7,
            step: 'Remove the bay leaves, herb sprigs, garlic, and discard.',
            ingredients: [
              {
                id: 2004,
                name: 'bay leaves',
                localizedName: 'bay leaves',
                image: 'bay-leaves.jpg',
              },
              {
                id: 11215,
                name: 'garlic',
                localizedName: 'garlic',
                image: 'garlic.png',
              },
            ],
            equipment: [],
          },
          {
            number: 8,
            step:
              'Add mushrooms to the remaining liquid and turn the heat to high. Boil quickly and reduce the liquid by three fourths until it becomes thick and saucy. Lower the heat, stir in the butter. Return the chicken and onions to the pan to reheat and coat with sauce. Adjust seasoning.',
            ingredients: [
              {
                id: 11260,
                name: 'mushrooms',
                localizedName: 'mushrooms',
                image: 'mushrooms.png',
              },
              {
                id: 1001,
                name: 'butter',
                localizedName: 'butter',
                image: 'butter-sliced.jpg',
              },
              {
                id: 11282,
                name: 'onion',
                localizedName: 'onion',
                image: 'brown-onion.png',
              },
            ],
            equipment: [
              {
                id: 404645,
                name: 'frying pan',
                localizedName: 'frying pan',
                image: 'pan.png',
              },
            ],
          },
          {
            number: 9,
            step:
              'Garnish with parsley and serve with potatoes or egg noodles.',
            ingredients: [
              {
                id: 11297,
                name: 'parsley',
                localizedName: 'parsley',
                image: 'parsley.jpg',
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    vegan: false,
  },

  { recipeId: 636178,
    title: 'Broccoli Cheddar Soup, A Panera Bread Co. Copycat',

    summary:
      'You can never have too many main course recipes, so give Broccoli Cheddar Soup, A Panera Bread Co. Copycat a try. One serving contains <b>606 calories</b>, <b>26g of protein</b>, and <b>46g of fat</b>. This recipe serves 4 and costs $1.96 per serving. A mixture of chicken broth, kosher salt and pepper, half-and-half, and a handful of other ingredients are all it takes to make this recipe so flavorful',

    imageURL: 'https://spoonacular.com/recipeImages/636178-556x370.jpg',

    ingredients:
      '2 bay leaves, 4 cups broccoli florets (about 1 head), 1/4 cup butter, 1 large carrot, diced, 1/4 cup flour, 2 cups half-and-half, Kosher salt and freshly ground pepper, 3 cups low-sodium chicken broth, 1/4 teaspoon nutmeg, 1 onion, chopped, 2 1/2 cups (about 8 ounces) grated sharp white and yellow cheddar cheese, plus more for garnish, 7 inches sourdough bread boules (round loaves), ',

    analyzedInstructions: [
      {
        name: '',
        steps: [
          {
            number: 1,
            step:
              'Melt the butter in a large Dutch oven or pot over medium heat.',
            ingredients: [
              {
                id: 1001,
                name: 'butter',
                localizedName: 'butter',
                image: 'butter-sliced.jpg',
              },
            ],
            equipment: [
              {
                id: 404667,
                name: 'dutch oven',
                localizedName: 'dutch oven',
                image: 'dutch-oven.jpg',
              },
            ],
          },
          {
            number: 2,
            step: 'Add the onion and cook until tender, about 5 minutes.',
            ingredients: [
              {
                id: 11282,
                name: 'onion',
                localizedName: 'onion',
                image: 'brown-onion.png',
              },
            ],
            equipment: [],
            length: {
              number: 5,
              unit: 'minutes',
            },
          },
          {
            number: 3,
            step:
              'Whisk in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth.',
            ingredients: [
              {
                id: 20081,
                name: 'all purpose flour',
                localizedName: 'all purpose flour',
                image: 'flour.png',
              },
            ],
            equipment: [
              {
                id: 404661,
                name: 'whisk',
                localizedName: 'whisk',
                image: 'whisk.png',
              },
            ],
            length: {
              number: 3,
              unit: 'minutes',
            },
          },
          {
            number: 4,
            step:
              'Add the chicken broth, bay leaves and nutmeg, then season with salt and pepper and bring to a simmer.Reduce the heat to medium-low and cook, uncovered, until thickened, about 20 minutes.Meanwhile, prepare the bread bowls: Using a sharp knife, cut a circle into the top of each loaf, leaving a 1-inch border all around.',
            ingredients: [
              {
                id: 1102047,
                name: 'salt and pepper',
                localizedName: 'salt and pepper',
                image: 'salt-and-pepper.jpg',
              },
              {
                id: 2004,
                name: 'bay leaves',
                localizedName: 'bay leaves',
                image: 'bay-leaves.jpg',
              },
              {
                id: 2025,
                name: 'nutmeg',
                localizedName: 'nutmeg',
                image: 'ground-nutmeg.jpg',
              },
            ],
            equipment: [
              {
                id: 404783,
                name: 'bowl',
                localizedName: 'bowl',
                image: 'bowl.jpg',
              },
              {
                id: 404745,
                name: 'knife',
                localizedName: 'knife',
                image: 'chefs-knife.jpg',
              },
            ],
            length: {
              number: 20,
              unit: 'minutes',
            },
          },
          {
            number: 5,
            step:
              'Remove the bread top, then hollow out the middle with a fork or your fingers, leaving a thick bread shell.',
            ingredients: [],
            equipment: [],
          },
          {
            number: 6,
            step:
              "Add the broccoli and carrot to the broth mixture and simmer until tender, about 20 minutes.Discard the bay leaves.Puree the soup in batches in a blender until smooth; you'll still have flecks of carrot and broccoli.Return to the pot. (Or puree the soup in the pot with an immersion blender.)",
            ingredients: [
              {
                id: 2004,
                name: 'bay leaves',
                localizedName: 'bay leaves',
                image: 'bay-leaves.jpg',
              },
              {
                id: 11090,
                name: 'broccoli',
                localizedName: 'broccoli',
                image: 'broccoli.jpg',
              },
              {
                id: 11124,
                name: 'carrot',
                localizedName: 'carrot',
                image: 'sliced-carrot.png',
              },
            ],
            equipment: [
              {
                id: 404776,
                name: 'immersion blender',
                localizedName: 'immersion blender',
                image: 'immersion-blender.png',
              },
              {
                id: 404726,
                name: 'blender',
                localizedName: 'blender',
                image: 'blender.png',
              },
              {
                id: 404752,
                name: 'pot',
                localizedName: 'pot',
                image: 'stock-pot.jpg',
              },
            ],
            length: {
              number: 20,
              unit: 'minutes',
            },
          },
          {
            number: 7,
            step:
              'Add the cheese to the soup and whisk over medium heat until melted.',
            ingredients: [
              {
                id: 1041009,
                name: 'cheese',
                localizedName: 'cheese',
                image: 'cheddar-cheese.png',
              },
            ],
            equipment: [
              {
                id: 404661,
                name: 'whisk',
                localizedName: 'whisk',
                image: 'whisk.png',
              },
            ],
          },
          {
            number: 8,
            step:
              'Add up to 3/4 cup water if the soup is too thick.Ladle into the bread bowls and garnish with cheese.',
            ingredients: [
              {
                id: 1041009,
                name: 'cheese',
                localizedName: 'cheese',
                image: 'cheddar-cheese.png',
              },
            ],
            equipment: [
              {
                id: 404783,
                name: 'bowl',
                localizedName: 'bowl',
                image: 'bowl.jpg',
              },
              {
                id: 404630,
                name: 'ladle',
                localizedName: 'ladle',
                image: 'ladle.jpg',
              },
            ],
          },
        ],
      },
    ],
    vegan: false,
  },

    {
      "recipeId": 633721,
      "title": "Baked Pork Buns",
      "readyInMinutes": 30,
      "servings": 1,
      "image": "https://spoonacular.com/recipeImages/633721-556x370.jpg",
      "summary": "Baked Pork Buns might be just the hor d'oeuvre you are searching for. For <b>$3.61 per serving</b>, this recipe <b>covers 46%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>835 calories</b>, <b>31g of protein</b>, and <b>47g of fat</b> each. 7 people have tried and liked this recipe. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. If you have hoisin sauce, mushrooms, cup warm water, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is awesome. Try <a href=\"https://spoonacular.com/recipes/baked-barbecued-pork-buns-633445\">Baked Barbecued Pork Buns</a>, <a href=\"https://spoonacular.com/recipes/sous-vide-pork-belly-buns-with-pork-braise-mayonnaise-and-quick-pickled-cucumbers-157157\">Sous-Vide Pork Belly Buns With Pork Braise Mayonnaise and Quick-Pickled Cucumbers</a>, and <a href=\"https://spoonacular.com/recipes/homemade-pork-buns-540514\">Homemade Pork Buns</a> for similar recipes.",
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
      "recipeId": 715573,
      "title": "Simple Skillet Lasagna",
      "readyInMinutes": 35,
      "servings": 5,
      "image": "https://spoonacular.com/recipeImages/715573-556x370.jpg",
      "summary": "Simple Skillet Lasagna might be just the main course you are searching for. This recipe makes 5 servings with <b>814 calories</b>, <b>34g of protein</b>, and <b>46g of fat</b> each. For <b>$2.47 per serving</b>, this recipe <b>covers 35%</b> of your daily requirements of vitamins and minerals. 231 person have tried and liked this recipe. If you have pepper flakes, onion, oregano flakes, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>35 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/simple-vegetarian-skillet-lasagna-714495\">Simple Vegetarian Skillet Lasagna</a>, <a href=\"https://spoonacular.com/recipes/quick-and-simple-springtime-skillet-lasagna-with-a-mediterranean-kick-549476\">Quick and Simple Springtime Skillet Lasagna with a Mediterranean Kick</a>, and <a href=\"https://spoonacular.com/recipes/simple-lasagna-383790\">Simple Lasagna</a> for similar recipes.",
      "instructions": "In a large saute pan, heat oil on high. Add sausage and cook until browned, about 3-5 minutes. Transfer to a side bowl and set aside.Reduce the heat to medium low and add your onion, garlic, and pepper flakes. Cook until onions are softened, about 8 minutes. Add your oregano, tomatoes and their juices (crushing the whole tomatoes with your hands or a mixer if you prefer), the basil sprig, and the cooked sausage. Add salt and pepper and simmer for about 5 minutes.Break half of the lasagna noodles in half and place into the meat mixture under the sausage. Distribute them evenly throughout. Take the other half of the noodles and use a spoon to submerge them down into the pan.Dollop Ricotta over lasagna and mix in with the sauce. Top with Mozzarella and bake in the oven on 325 degrees for 15 minutes. Top with basil, then remove from heat and allow to cool before serving.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a large saute pan, heat oil on high.",
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
              "step": "Add sausage and cook until browned, about 3-5 minutes.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Transfer to a side bowl and set aside.Reduce the heat to medium low and add your onion, garlic, and pepper flakes. Cook until onions are softened, about 8 minutes.",
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
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ],
              "length": {
                "number": 8,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Add your oregano, tomatoes and their juices (crushing the whole tomatoes with your hands or a mixer if you prefer), the basil sprig, and the cooked sausage.",
              "ingredients": [
                {
                  "id": 2027,
                  "name": "oregano",
                  "localizedName": "oregano",
                  "image": "oregano.jpg"
                },
                {
                  "id": 2044,
                  "name": "basil",
                  "localizedName": "basil",
                  "image": "basil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "blender.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Add salt and pepper and simmer for about 5 minutes.Break half of the lasagna noodles in half and place into the meat mixture under the sausage. Distribute them evenly throughout. Take the other half of the noodles and use a spoon to submerge them down into the pan.Dollop Ricotta over lasagna and mix in with the sauce. Top with Mozzarella and bake in the oven on 325 degrees for 15 minutes. Top with basil, then remove from heat and allow to cool before serving.",
              "ingredients": [
                {
                  "id": 10620420,
                  "name": "lasagne noodles",
                  "localizedName": "lasagne noodles",
                  "image": "lasagna-noodles.jpg"
                },
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 1026,
                  "name": "mozzarella",
                  "localizedName": "mozzarella",
                  "image": "mozzarella.png"
                },
                {
                  "id": 20420,
                  "name": "pasta",
                  "localizedName": "pasta",
                  "image": "fusilli.jpg"
                },
                {
                  "id": 1036,
                  "name": "ricotta cheese",
                  "localizedName": "ricotta cheese",
                  "image": "ricotta.png"
                },
                {
                  "id": 2044,
                  "name": "basil",
                  "localizedName": "basil",
                  "image": "basil.jpg"
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
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/simple-skillet-lasagna-715573"
    },
    {
      "recipeId": 649502,
      "title": "Lemon and pepper veal cutlets",
      "readyInMinutes": 45,
      "servings": 4,
      "image": "https://spoonacular.com/recipeImages/649502-556x370.jpg",
      "summary": "Lemon and pepper veal cutlets might be just the main course you are searching for. This gluten free and ketogenic recipe serves 4 and costs <b>$5.74 per serving</b>. One serving contains <b>665 calories</b>, <b>38g of protein</b>, and <b>53g of fat</b>. Only a few people made this recipe, and 7 would say it hit the spot. If you have lemon rind, salt, lemon juice, and a few other ingredients on hand, you can make it. To use up the fresh rosemary you could follow this main course with the <a href=\"https://spoonacular.com/recipes/vanilla-yogurt-with-grape-and-blueberry-compote-with-honey-and-fresh-rosemary-an-easy-breakfast-or-dessert-801305\">Vanilla Yogurt with Grape and Blueberry Compote with Honey and Fresh Rosemary: An Easy Breakfast or Dessert</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 59%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/veal-cutlets-with-lemon-caper-sauce-736\">Veal Cutlets With Lemon Caper Sauce</a>, <a href=\"https://spoonacular.com/recipes/grilled-chicken-cutlets-with-lemon-and-black-pepper-and-arugula-tomato-salad-357481\">Grilled Chicken Cutlets with Lemon and Black Pepper and Arugula-Tomato Salad</a>, and <a href=\"https://spoonacular.com/recipes/sauteed-veal-cutlets-saltimbocca-598869\">Sauteed Veal Cutlets | Saltimbocca</a> for similar recipes.",
      "instructions": "<ol><li>Slightly flatten the cutlets with a meat mallet.</li><li>Combine corn flour, salt and pepper, dredge the cutlets through the mixture.</li><li>Cook veal in butter and olive oil in a large pan for 3 minutes on each side or until browned and cooked as desired.</li><li>Remove veal from the pan and set aside. Cover to keep warm.</li><li>Mix and combine cream, sour cream, lemon rind, lemon juice, rosemary, pepper and salt.</li><li>Add the mix to the same pan, bring to the boil. Reduce flame and simmer, uncovered, for 5 minutes until sauce thickens slightly.</li><li>Return the chops to the pan, coat with sauce.</li><li>Serve with pilaf and green salad.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Slightly flatten the cutlets with a meat mallet.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 3846,
                  "name": "meat tenderizer",
                  "localizedName": "meat tenderizer",
                  "image": "meat-mallet.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Combine corn flour, salt and pepper, dredge the cutlets through the mixture.Cook veal in butter and olive oil in a large pan for 3 minutes on each side or until browned and cooked as desired.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 20019,
                  "name": "corn flour",
                  "localizedName": "corn flour",
                  "image": "corn-flour.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
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
                "number": 3,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Remove veal from the pan and set aside. Cover to keep warm.",
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
              "number": 4,
              "step": "Mix and combine cream, sour cream, lemon rind, lemon juice, rosemary, pepper and salt.",
              "ingredients": [
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 9156,
                  "name": "lemon peel",
                  "localizedName": "lemon peel",
                  "image": "zest-lemon.jpg"
                },
                {
                  "id": 1056,
                  "name": "sour cream",
                  "localizedName": "sour cream",
                  "image": "sour-cream.jpg"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 1053,
                  "name": "cream",
                  "localizedName": "cream",
                  "image": "fluid-cream.jpg"
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
              "step": "Add the mix to the same pan, bring to the boil. Reduce flame and simmer, uncovered, for 5 minutes until sauce thickens slightly.Return the chops to the pan, coat with sauce.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Serve with pilaf and green salad.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/lemon-and-pepper-veal-cutlets-649502"
    },
   {
    "recipeId": 663824,
      "title": "Trinidadian Chicken Potato Curry",
      "readyInMinutes": 45,
      "servings": 4,

      "image": "https://spoonacular.com/recipeImages/663824-556x370.jpg",
   
      "summary": "If you want to add more <b>Indian</b> recipes to your recipe box, Trinidadian Chicken Potato Curry might be a recipe you should try. Watching your figure? This gluten free, dairy free, and whole 30 recipe has <b>554 calories</b>, <b>35g of protein</b>, and <b>37g of fat</b> per serving. For <b>$1.54 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. This recipe from Foodista requires , thyme, coconut oil, and . 11 person have tried and liked this recipe. A few people really liked this main course. From preparation to the plate, this recipe takes about <b>about 45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 64%</b>. This score is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/toms-trinidadian-chicken-curry-17227\">Tom’s Trinidadian Chicken Curry</a>, <a href=\"https://spoonacular.com/recipes/trinidadian-chicken-curry-with-coconut-grits-collard-greens-716731\">Trinidadian Chicken Curry with Coconut Grits & Collard Greens</a>, and <a href=\"https://spoonacular.com/recipes/chicken-sweet-potato-curry-220244\">Chicken & sweet potato curry</a>.",
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
      "recipeId": 632299,
      "title": "Amazing Braised Beef Short Ribs",
      "readyInMinutes": 45,
      "servings": 6,
      "image": "https://spoonacular.com/recipeImages/632299-556x370.jpg",
      "summary": "If you have approximately <b>about 45 minutes</b> to spend in the kitchen, Amazing Braised Beef Short Ribs might be a tremendous <b>gluten free and dairy free</b> recipe to try. This recipe serves 6. One serving contains <b>788 calories</b>, <b>60g of protein</b>, and <b>48g of fat</b>. For <b>$6.36 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. 6 people were impressed by this recipe. This recipe from Foodista requires bacon, carrot, ground pepper, and beef stock. It works well as a main course. Overall, this recipe earns a <b>good spoonacular score of 72%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/braised-beef-short-ribs-245460\">Braised Beef Short Ribs</a>, <a href=\"https://spoonacular.com/recipes/braised-beef-short-ribs-570525\">Braised Beef Short Ribs</a>, and <a href=\"https://spoonacular.com/recipes/braised-beef-short-ribs-601461\">Braised Beef Short Ribs</a>.",
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
    {
      "recipeId": 642287,
      "title": "Eggplant Fries with Tzatziki Sauce",
      "readyInMinutes": 45,
      "servings": 2,

      "image": "https://spoonacular.com/recipeImages/642287-556x370.jpg",

      "summary": "Eggplant Fries with Tzatziki Sauce might be just the <b>Mediterranean</b> recipe you are searching for. For <b>85 cents per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe makes 2 servings with <b>294 calories</b>, <b>13g of protein</b>, and <b>6g of fat</b> each. This recipe from Foodista has 49 fans. It works well as a side dish. Head to the store and pick up eggplants, egg, yogurt, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 66%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/crispy-baked-eggplant-fries-with-marinara-dipping-sauce-aka-eggplant-parmesan-fries-249194\">Crispy Baked Eggplant Fries with Marinara Dipping Sauce (akan Eggplant Parmesan Fries!)</a>, <a href=\"https://spoonacular.com/recipes/sunnys-beer-battered-eggplant-fries-with-nunya-business-tzatziki-dip-772904\">Sunny's Beer-Battered Eggplant Fries with Nunya Business Tzatziki Dip</a>, and <a href=\"https://spoonacular.com/recipes/eggplant-fries-with-marinara-sauce-677261\">Eggplant Fries with Marinara Sauce</a>.",
      "instructions": "-Preheat oven to 450F\n-Mix salt, garlic powder, italian seasonings, and paprika in a bowl.\n- In another bowl, mix yogurt & egg together.\n-First place the eggplant strips into egg/yogurt mixture then coat them in flour mixture evenly.\n-Place them in a parchment paper or greased baking pan and bake for 10-15 minutes rotating once and until slightly brown.\nFor the tzatziki sauce:\n- In a food processor, put cucumber (seeded, peeled), yogurt, dill, lemon juice, garlic cloves, salt together until smooth.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "-Preheat oven to 450F",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg",
                  "temperature": {
                    "number": 450.0,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Mix salt, garlic powder, italian seasonings, and paprika in a bowl.",
              "ingredients": [
                {
                  "id": 1022027,
                  "name": "italian seasoning",
                  "localizedName": "italian seasoning",
                  "image": "dried-herbs.png"
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
              "number": 3,
              "step": "- In another bowl, mix yogurt & egg together.",
              "ingredients": [
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
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
              "step": "-First place the eggplant strips into egg/yogurt mixture then coat them in flour mixture evenly.",
              "ingredients": [
                {
                  "id": 11209,
                  "name": "eggplant",
                  "localizedName": "eggplant",
                  "image": "eggplant.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Place them in a parchment paper or greased baking pan and bake for 10-15 minutes rotating once and until slightly brown.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "baking-paper.jpg"
                },
                {
                  "id": 404646,
                  "name": "baking pan",
                  "localizedName": "baking pan",
                  "image": "roasting-pan.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                }
              ],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            }
          ]
        },
        {
          "name": "For the tzatziki sauce",
          "steps": [
            {
              "number": 1,
              "step": "- In a food processor, put cucumber (seeded, peeled), yogurt, dill, lemon juice, garlic cloves, salt together until smooth.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "food-processor.png"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/eggplant-fries-with-tzatziki-sauce-642287"
    },
   {
    "recipeId": 659907,
      "title": "Shrimp & Orzo",
      "readyInMinutes": 45,
      "servings": 8,
      "image": "https://spoonacular.com/recipeImages/659907-556x370.jpg",
      "summary": "Shrimp & Orzo might be just the main course you are searching for. For <b>$3.37 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. One serving contains <b>480 calories</b>, <b>31g of protein</b>, and <b>13g of fat</b>. Only a few people made this recipe, and 4 would say it hit the spot. Head to the store and pick up orzo pasta, chicken broth, parsley, and a few other things to make it today. To use up the lemon wedges you could follow this main course with the <a href=\"https://spoonacular.com/recipes/rolled-baklava-68365\">Rolled Baklava</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 76%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/shrimp-and-orzo-578433\">Shrimp and Orzo</a>, <a href=\"https://spoonacular.com/recipes/shrimp-and-tomato-orzo-479802\">Shrimp and Tomato Orzo</a>, and <a href=\"https://spoonacular.com/recipes/roasted-shrimp-and-orzo-507612\">Roasted Shrimp and Orzo</a>.",
      "instructions": "<ol><li>Preheat oven to 400 degrees f. Season the shrimp with salt &amp; pepper, refrigerate until ready to use. Grease a 13x9-inch baking dish.</li><li>Heat the oil in a large Dutch oven over medium-high heat until the oil is shimmering. Add the onion, fennel bulb and 1/2 t. salt. Cook, stirring frequently until the vegetables are softened and starting to brown around the edges, about 10 minutes. Add the minced garlic and crushed red pepper flakes, cook and stir until the garlic becomes very fragrant, about 30 seconds.</li><li>Add the orzo to the vegetables, stir to coat the orzo with oil, continue cooking, stirring fairly constantly, about 4 minutes, until the orzo has a toasty aroma. Add the wine, cook,stirring constantly, until the liquid evaporates, about 1 minute. Add the chicken broth, water and 1/4 t. salt. Bring to a boil, then reduce heat, simmer, until the orzo is almost completely tender, about 12 minutes, stirring fairly constantly to prevent sticking and adjusting the heat as necessary to maintain a lively simmer.</li><li>After the 12 minutes, remove from heat and stir in the shrimp, tomatoes, oregano and 1 T. of the parsley. Transfer to the prepared baking dish, sprinkle with the feta. Bake for about 20 minutes, until the shrimp is cooked through and the feta is lightly browned. Before serving, sprinkle with the remaining parsley and the reserved fennel fronds. Serve with lemon wedges.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 400 degrees f. Season the shrimp with salt &amp; pepper, refrigerate until ready to use. Grease a 13x9-inch baking dish.",
              "ingredients": [
                {
                  "id": 15152,
                  "name": "shrimp",
                  "localizedName": "shrimp",
                  "image": "shrimp.png"
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
                  "id": 404646,
                  "name": "baking pan",
                  "localizedName": "baking pan",
                  "image": "roasting-pan.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg",
                  "temperature": {
                    "number": 400.0,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Heat the oil in a large Dutch oven over medium-high heat until the oil is shimmering.",
              "ingredients": [],
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
              "step": "Add the onion, fennel bulb and 1/2 t. salt. Cook, stirring frequently until the vegetables are softened and starting to brown around the edges, about 10 minutes.",
              "ingredients": [
                {
                  "id": 11957,
                  "name": "fennel bulb",
                  "localizedName": "fennel bulb",
                  "image": "fennel.png"
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
              "equipment": [],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Add the minced garlic and crushed red pepper flakes, cook and stir until the garlic becomes very fragrant, about 30 seconds.",
              "ingredients": [
                {
                  "id": 1032009,
                  "name": "red pepper flakes",
                  "localizedName": "red pepper flakes",
                  "image": "red-pepper-flakes.jpg"
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
              "number": 5,
              "step": "Add the orzo to the vegetables, stir to coat the orzo with oil, continue cooking, stirring fairly constantly, about 4 minutes, until the orzo has a toasty aroma.",
              "ingredients": [
                {
                  "id": 10920420,
                  "name": "orzo",
                  "localizedName": "orzo",
                  "image": "orzo.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 4,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Add the wine, cook,stirring constantly, until the liquid evaporates, about 1 minute.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 1,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Add the chicken broth, water and 1/4 t. salt. Bring to a boil, then reduce heat, simmer, until the orzo is almost completely tender, about 12 minutes, stirring fairly constantly to prevent sticking and adjusting the heat as necessary to maintain a lively simmer.After the 12 minutes, remove from heat and stir in the shrimp, tomatoes, oregano and 1 T. of the parsley.",
              "ingredients": [
                {
                  "id": 2027,
                  "name": "oregano",
                  "localizedName": "oregano",
                  "image": "oregano.jpg"
                },
                {
                  "id": 11297,
                  "name": "parsley",
                  "localizedName": "parsley",
                  "image": "parsley.jpg"
                },
                {
                  "id": 15152,
                  "name": "shrimp",
                  "localizedName": "shrimp",
                  "image": "shrimp.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 10920420,
                  "name": "orzo",
                  "localizedName": "orzo",
                  "image": "orzo.jpg"
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
                "number": 24,
                "unit": "minutes"
              }
            },
            {
              "number": 8,
              "step": "Transfer to the prepared baking dish, sprinkle with the feta.",
              "ingredients": [
                {
                  "id": 1019,
                  "name": "feta cheese",
                  "localizedName": "feta cheese",
                  "image": "feta.png"
                }
              ],
              "equipment": [
                {
                  "id": 404646,
                  "name": "baking pan",
                  "localizedName": "baking pan",
                  "image": "roasting-pan.jpg"
                }
              ]
            },
            {
              "number": 9,
              "step": "Bake for about 20 minutes, until the shrimp is cooked through and the feta is lightly browned. Before serving, sprinkle with the remaining parsley and the reserved fennel fronds.",
              "ingredients": [
                {
                  "id": 11297,
                  "name": "parsley",
                  "localizedName": "parsley",
                  "image": "parsley.jpg"
                },
                {
                  "id": 11957,
                  "name": "fennel",
                  "localizedName": "fennel",
                  "image": "fennel.png"
                },
                {
                  "id": 15152,
                  "name": "shrimp",
                  "localizedName": "shrimp",
                  "image": "shrimp.png"
                },
                {
                  "id": 1019,
                  "name": "feta cheese",
                  "localizedName": "feta cheese",
                  "image": "feta.png"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 10,
              "step": "Serve with lemon wedges.",
              "ingredients": [
                {
                  "id": 1029150,
                  "name": "lemon wedge",
                  "localizedName": "lemon wedge",
                  "image": "lemon-wedge.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/shrimp-orzo-659907"
    },
    {
      "recipeId": 658655,
      "title": "Roasted red peppers and tomatoes salad",
      "readyInMinutes": 45,
      "servings": 2,
      "image": "https://spoonacular.com/recipeImages/658655-556x370.jpg",
      "summary": "If you have approximately <b>approximately 45 minutes</b> to spend in the kitchen, Roasted red peppers and tomatoes salad might be a great <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe to try. This recipe serves 2 and costs 63 cents per serving. This side dish has <b>92 calories</b>, <b>1g of protein</b>, and <b>7g of fat</b> per serving. This recipe from Foodista requires bell pepper, tomato, coarse salt, and capers. 8 people were glad they tried this recipe. Overall, this recipe earns a <b>great spoonacular score of 90%</b>. Try <a href=\"https://spoonacular.com/recipes/chicken-breasts-stuffed-with-asiago-cheese-tomatoes-and-roasted-red-peppers-560255\">Chicken Breasts Stuffed with Asiago Cheese, Tomatoes and Roasted Red Peppers</a>, <a href=\"https://spoonacular.com/recipes/chopped-mexican-salad-with-roasted-peppers-corn-tomatoes-and-95943\">Chopped Mexican Salad With Roasted Peppers, Corn, Tomatoes, And</a>, and <a href=\"https://spoonacular.com/recipes/roasted-red-peppers-and-almond-salad-509604\">Roasted Red Peppers And Almond Salad</a> for similar recipes.",
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
    }
  ]