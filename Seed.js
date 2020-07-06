const users = [
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

  {
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
];
