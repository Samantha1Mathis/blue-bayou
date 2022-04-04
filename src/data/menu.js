let menuData = {
  Lunch: {
    Starters: [
      {
        name: "Chicken Gumbo",
        description:
          "Chicken, Andouille Sausage, Tomatoes, Okra, Jasmine Rice, Green Onions",
        price: "$7.00",
        ingredients:
          "Andouille sausage, chicken thighs, tasso ham, celery, onion, green bell pepper, garlic, tomato, okra, chicken stock, olive oil, salt, pepper, onion powder, oregano, thyme, bay leaf, flour, rice, green onion",
        picture: "chicken_gumbo.jpg",
      },
      {
        name: "Gumbo Fries",
        description: "Cajun-spiced fries, Chicken Gumbo, Cajun Cheese",
        price: "$10.00",
        ingredients:
          "Andouille sausage, chicken thighs, tasso ham, celery, onion, green bell pepper, garlic, tomato, okra, chicken stock, olive oil, salt, pepper, onion powder, oregano, thyme, bay leaf, flour, rice, green onion, potato, vegetable oil, sugar, paprika, garlic powder, red pepper flakes, cheddar cheese, pepper jack cheese",
        picture: "gumbo_fries.jpg",
      },
      {
        name: "House Salad",
        description:
          "Baby Greens, Blue Cheese Crumbles, Candied Pecans, Dried Fruit, Onions, Cherry Tomatoes, Sherry Viniagrette",
        price: "$7.00",
        ingredients:
          "Baby Greens, Blue Cheese Crumbles, Candied Pecans, Dried Fruit, Onions, Cherry Tomatoes, Sherry Viniagrette",
        picture: "house_salad.jpg",
      },
    ],
    Entrées: [
      {
        name: "Flat Iron Steak",
        description:
          "with Country Mashed Potatoes, Market Vegetables, Charred Onion-Bourbon Demi",
        price: "$34.00",
        ingredients:
          "with Country Mashed Potatoes, Market Vegetables, Charred Onion-Bourbon Demi",
        picture: "flat_iron_steak.jpg",
      },
      {
        name: "Monte Cristo Sandwich",
        description:
          "Turkey, Ham and Swiss served with Seasonal Preserve and Seasonal Fruit",
        price: "$29.00",
        ingredients:
          "Turkey, Ham and Swiss served with Seasonal Preserve and Seasonal Fruit",
        picture: "monte_cristo.jpg",
      },
      {
        name: "Cajun Cauliflower",
        description:
          "Romanesco Sauce, Mushroom Chips, Cajun Cheddar, Wilted Greens, and Shishito Chimichurri",
        price: "$29.00",
        ingredients:
          "Romanesco Sauce, Mushroom Chips, Cajun Cheddar, Wilted Greens, and Shishito Chimichurri",
        picture: "cajun_cauliflower.jpg",
      },
      {
        name: "Chicken & Kale Rice",
        description:
          "Roasted Spanish Vegetables, House Herb Mixture and Natural Jus",
        price: "$35.00",
        ingredients:
          "Roasted Spanish Vegetables, House Herb Mixture and Natural Jus",
        picture: "chicken_and_kale_rice.jpg",
      },
      {
        name: "Jambalaya",
        description:
          "Jumbo Shrimp, Andouille Sausage, Chicken, Tasso Ham, Creole Rice, Spiced Tomato Jus",
        price: "$36.00",
        ingredients:
          "Jumbo Shrimp, Andouille Sausage, Chicken, Tasso Ham, Creole Rice, Spiced Tomato Jus",
        picture: "jambalaya.jpg",
      },
      {
        name: "Sustainable Market Fish",
        description: "Chef's Choice of Sides",
        price: "$43.00",
        ingredients: "Chef's Choice of Sides",
        picture: "sustainable_market_fish.jpg",
      },
    ],
    Desserts: [
      {
        name: "Vanilla-Bourbon Crème Brûlée",
        description: "Macerated Fresh Berries and Pecan Cookie",
        price: "$9.00",
        ingredients: "acerated Fresh Berries and Pecan Cookie",
        picture: "vanilla_bourbon_creme_brulee.jpg",
      },
      {
        name: "Sparkling Cider Celebration Finale",
        description:
          "Two glasses of Martinelli's Sparkling Cider, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        price: "$50.00",
        ingredients:
          "Two glasses of Martinelli's Sparkling Cider, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        picture: "sparkling_cider_celebration_finale.jpg",
      },
      {
        name: "8-Layer Chocolate and Hazelnut Cake",
        description: "Raspberry Sauce and Vanilla Bean Chantilly",
        price: "$10.00",
        ingredients: "Raspberry Sauce and Vanilla Bean Chantilly",
        picture: "8_layer_chocolate_hazelnut_cake.jpg",
      },
      {
        name: "Sparkling Wine Celebration Finale",
        description:
          "Two glasses of Le Grand Courtâge Grand Cuvée Blanc de Blancs Brut, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        price: "$65.00",
        ingredients:
          "Two glasses of Le Grand Courtâge Grand Cuvée Blanc de Blancs Brut, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        picture: "sparkling_cider_celebration_finale.jpg",
      },
    ],
    Kids: [
      {
        name: "Pasta with Marinara Sauce",
        description:
          "served with Choice of Two (2) Selections and choice of Small Low-fat Milk or Small DASANI® Water. Meets Disney Nutrition Guidelines for Complete Meals without substitutions",
        price: "$10.00",
        ingredients:
          "served with Choice of Two (2) Selections and choice of Small Low-fat Milk or Small DASANI® Water. Meets Disney Nutrition Guidelines for Complete Meals without substitutions",
        picture: "kids_chicken_and_pasta.jpg",
      },
      {
        name: "Chef's Beef Specialty",
        description:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        price: "$13.00",
        ingredients:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        picture: "kids_beef_special.jpg",
      },
      {
        name: "Chicken Breast",
        description:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        price: "$10.00",
        ingredients:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        picture: "kids_chicken_breast.jpg",
      },
    ],
    "Featured Wine By the Glass": [
      {
        name: "Miner Family Winery, Chardonnay, Napa Valley",
        description: "5oz",
        price: "$11.00",
        ingredients: "",
        picture: "miner_family_winery_wines.jpg",
      },
      {
        name: "J. Wilkes, Cabernet Sauvignon, Paso Robles Highlands District, CA",
        description: "5oz",
        price: "$11.00",
        ingredients: "",
        picture: "j_wilkes_wine.png",
      },
    ],
    "Sparkling Wine": [
      {
        name: "Le Grand Courtâge, Blanc de Blancs Brut Grand Cuvée, France",
        description: "Glass",
        price: "$10.00",
        ingredients: "",
        picture: "courtage_wine.png",
      },
    ],
    "Wine Tasting Selection": [
      {
        name: "Duckhorn Vineyards, Sauvignon Blanc, Napa Valley",
        description: "3oz | 5oz",
        price: "$7 | $13",
        ingredients: "",
        picture: "duckhorn_wine.jpg",
      },
      {
        name: "Flowers Vineyards, Pinot Noir, Sonoma Coast",
        description: "3oz | 5oz",
        price: "$11 | $21",
        ingredients: "",
        picture: "flower_wine.png",
      },
      {
        name: "Inniskillin, Cabernet Franc Icewine, Canada",
        description: "3oz",
        price: "$36.00",
        ingredients: "",
        picture: "inniskilin_wine.png",
      },
      {
        name: "Sterling Vineyards, Merlot, Napa Valley",
        description: "3oz | 5oz",
        price: "$7 | $13",
        ingredients: "",
        picture: "sterling_wine.png",
      },
      {
        name: "Far Niente, Chardonnay, Napa Valley",
        description: "3oz | 5oz",
        price: "$12.50 | $24",
        ingredients: "",
        picture: "far_niente_wine.png",
      },
      {
        name: "Silver Oak, Cabernet Sauvignon, Alexander Valley",
        description: "3oz | 5oz",
        price: "$21 | $41",
        ingredients: "",
        picture: "silver_oak_wine.png",
      },
      {
        name: "Frank Family Vineyards, Chardonnay, Napa Valley",
        description: "3oz | 5oz",
        price: "$9 | $17",
        ingredients: "",
        picture: "frank_wine.png",
      },
      {
        name: "Flambeaux, Zinfandel, Dry Creek Valley",
        description: "3oz | 5oz",
        price: "$9.50 | $18",
        ingredients: "",
        picture: "flambeaux_wine.jpg",
      },
    ],
    "Alcoholic Beverages": [
      {
        name: "Hurricane Cocktail",
        description:
          "Bacardi Reserva Ocho Rum, Myers’s Original Dark Rum, Simply® Orange Juice, Passion Fruit Purée, Grenadine and Lime Juice, Luxardo Maraschino Cherry and Orange garnish",
        price: "$16.00",
        ingredients:
          "Bacardi Reserva Ocho Rum, Myers’s Original Dark Rum, Simply® Orange Juice, Passion Fruit Purée, Grenadine and Lime Juice, Luxardo Maraschino Cherry and Orange garnish",
        picture: "hurricane_cocktail.jpg",
      },
      {
        name: "Karl Strauss® Boat Shoes Hazy IPA",
        description: "San Diego, CA (ABV 7.2%)",
        price: "$12.50",
        ingredients: "",
        picture: "karl_strauss.png",
      },
      {
        name: "Abita Amber Lager",
        description: "Covington, LA (ABV 4.5%)",
        price: "$12.50",
        ingredients: "",
        picture: "abita_amber.png",
      },
    ],
    "Non-Alcoholic Beverages": [
      {
        name: "31 Royal Street Signature Julep",
        description: "Ask about our Seasonal Julep",
        price: "$6.00",
        ingredients: "Ask about our Seasonal Julep",
        picture: "31_royal_julep.jpg",
      },
      {
        name: "Louisiana Lemonade",
        description: "Minute Maid® Lemonade, Sprite®, Mango, Raspberry",
        price: "$5.50",
        ingredients: "Minute Maid® Lemonade, Sprite®, Mango, Raspberry",
        picture: "louisiana_lemonade.jpg",
      },
      {
        name: "Mint Julep",
        description: "",
        price: "$5.50",
        ingredients: "",
        picture: "mint_julep.jpg",
      },
      {
        name: "Louisiana Lemonade",
        description:
          "Minute Maid® Lemonade, Sprite®, Mango, Raspberry, served with a souvenir glow cube",
        price: "$8.50",
        ingredients:
          "Minute Maid® Lemonade, Sprite®, Mango, Raspberry, served with a souvenir glow cube",
        picture: "louisiana_lemonade.jpg",
      },
      {
        name: "Mint Julep",
        description: "served with a souvenir glow cube",
        price: "$8.50",
        ingredients: "served with a souvenir glow cube",
        picture: "mint_julep.jpg",
      },
      {
        name: "Assorted Fountain Beverages",
        description:
          "Coca-Cola®, Diet Coke®, Sprite®, Fanta® Orange, Barq's® Root Beer, and Iced Tea",
        price: "",
        ingredients:
          "Coca-Cola®, Diet Coke®, Sprite®, Fanta® Orange, Barq's® Root Beer, and Iced Tea",
      },
      {
        name: "Freshly Brewed Joffrey's Coffee®",
        description: "",
        price: "",
        ingredients: "",
      },
      {
        name: "Assorted Twinings of London® Teas",
        description: "",
        price: "",
        ingredients: "",
      },
      {
        name: "Hot Chocolate",
        description: "",
        price: "",
        ingredients: "",
      },
    ],
    "Allergy-friendly Offerings": [
      {
        name: "Allergy-friendly menus available upon request",
        description: "",
        price: "",
        ingredients: "",
      },
    ],
  },
  Dinner: {
    Starters: [
      {
        name: "Chicken Gumbo",
        description:
          "Chicken, Andouille Sausage, Tomatoes, Okra, Jasmine Rice, Green Onions",
        price: "$7.00",
        ingredients:
          "Andouille sausage, chicken thighs, tasso ham, celery, onion, green bell pepper, garlic, tomato, okra, chicken stock, olive oil, salt, pepper, onion powder, oregano, thyme, bay leaf, flour, rice, green onion",
        picture: "chicken_gumbo.jpg",
      },
      {
        name: "Gumbo Fries",
        description: "Cajun-spiced fries, Chicken Gumbo, Cajun Cheese",
        price: "$10.00",
        ingredients:
          "Andouille sausage, chicken thighs, tasso ham, celery, onion, green bell pepper, garlic, tomato, okra, chicken stock, olive oil, salt, pepper, onion powder, oregano, thyme, bay leaf, flour, rice, green onion, potato, vegetable oil, sugar, paprika, garlic powder, red pepper flakes, cheddar cheese, pepper jack cheese",
        picture: "gumbo_fries.jpg",
      },
      {
        name: "House Salad",
        description:
          "Baby Greens, Blue Cheese Crumbles, Candied Pecans, Dried Fruit, Onions, Cherry Tomatoes, Sherry Viniagrette",
        price: "$7.00",
        ingredients:
          "Baby Greens, Blue Cheese Crumbles, Candied Pecans, Dried Fruit, Onions, Cherry Tomatoes, Sherry Viniagrette",
        picture: "house_salad.jpg",
      },
    ],
    Entrées: [
      {
        name: "Jambalaya",
        description:
          "Jumbo Shrimp, Andouille Sausage, Chicken, Tasso Ham, Creole Rice, Spiced Tomato Jus",
        price: "$36.00",
        ingredients:
          "Jumbo Shrimp, Andouille Sausage, Chicken, Tasso Ham, Creole Rice, Spiced Tomato Jus",
        picture: "jambalaya.jpg",
      },
      {
        name: "Sustainable Market Fish",
        description: "Chef's Choice of Sides",
        price: "$43.00",
        ingredients: "Chef's Choice of Sides",
        picture: "sustainable_market_fish.jpg",
      },
      {
        name: "Filet Mignon",
        description:
          "with Country Mashed Potatoes, Market Vegetables, Charred Onion-Bourbon Demi",
        price: "$52.00",
        ingredients:
          "with Country Mashed Potatoes, Market Vegetables, Charred Onion-Bourbon Demi",
        picture: "flat_iron_steak.jpg",
      },
      {
        name: "Cajun Cauliflower",
        description:
          "Romanesco Sauce, Mushroom Chips, Cajun Cheddar, Wilted Greens, and Shishito Chimichurri",
        price: "$29.00",
        ingredients:
          "Romanesco Sauce, Mushroom Chips, Cajun Cheddar, Wilted Greens, and Shishito Chimichurri",
        picture: "cajun_cauliflower.jpg",
      },
      {
        name: "Chicken & Kale Rice",
        description:
          "Roasted Spanish Vegetables, House Herb Mixture and Natural Jus",
        price: "$35.00",
        ingredients:
          "Roasted Spanish Vegetables, House Herb Mixture and Natural Jus",
        picture: "chicken_and_kale_rice.jpg",
      },
    ],
    Desserts: [
      {
        name: "Vanilla-Bourbon Crème Brûlée",
        description: "Macerated Fresh Berries and Pecan Cookie",
        price: "$9.00",
        ingredients: "acerated Fresh Berries and Pecan Cookie",
        picture: "vanilla_bourbon_creme_brulee.jpg",
      },
      {
        name: "Sparkling Cider Celebration Finale",
        description:
          "Two glasses of Martinelli's Sparkling Cider, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        price: "$50.00",
        ingredients:
          "Two glasses of Martinelli's Sparkling Cider, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        picture: "sparkling_cider_celebration_finale.jpg",
      },
      {
        name: "8-Layer Chocolate and Hazelnut Cake",
        description: "Raspberry Sauce and Vanilla Bean Chantilly",
        price: "$10.00",
        ingredients: "Raspberry Sauce and Vanilla Bean Chantilly",
        picture: "8_layer_chocolate_hazelnut_cake.jpg",
      },
      {
        name: "Sparkling Wine Celebration Finale",
        description:
          "Two glasses of Le Grand Courtâge Grand Cuvée Blanc de Blancs Brut, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        price: "$65.00",
        ingredients:
          "Two glasses of Le Grand Courtâge Grand Cuvée Blanc de Blancs Brut, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        picture: "sparkling_cider_celebration_finale.jpg",
      },
    ],
    Kids: [
      {
        name: "Pasta with Marinara Sauce",
        description:
          "served with Choice of Two (2) Selections and choice of Small Low-fat Milk or Small DASANI® Water. Meets Disney Nutrition Guidelines for Complete Meals without substitutions",
        price: "$10.00",
        ingredients:
          "served with Choice of Two (2) Selections and choice of Small Low-fat Milk or Small DASANI® Water. Meets Disney Nutrition Guidelines for Complete Meals without substitutions",
        picture: "kids_chicken_and_pasta.jpg",
      },
      {
        name: "Chef's Beef Specialty",
        description:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        price: "$13.00",
        ingredients:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        picture: "kids_beef_special.jpg",
      },
      {
        name: "Chicken Breast",
        description:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        price: "$10.00",
        ingredients:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        picture: "kids_chicken_breast.jpg",
      },
    ],
    "Featured Wine By the Glass": [
      {
        name: "Miner Family Winery, Chardonnay, Napa Valley",
        description: "5oz",
        price: "$11.00",
        ingredients: "",
        picture: "miner_family_winery_wines.jpg",
      },
      {
        name: "J. Wilkes, Cabernet Sauvignon, Paso Robles Highlands District, CA",
        description: "5oz",
        price: "$11.00",
        ingredients: "",
        picture: "j_wilkes_wine.png",
      },
    ],
    "Sparkling Wine": [
      {
        name: "Le Grand Courtâge, Blanc de Blancs Brut Grand Cuvée, France",
        description: "Glass",
        price: "$10.00",
        ingredients: "",
        picture: "courtage_wine.png",
      },
    ],
    "Wine Tasting Selection": [
      {
        name: "Duckhorn Vineyards, Sauvignon Blanc, Napa Valley",
        description: "3oz | 5oz",
        price: "$7 | $13",
        ingredients: "",
        picture: "duckhorn_wine.jpg",
      },
      {
        name: "Flowers Vineyards, Pinot Noir, Sonoma Coast",
        description: "3oz | 5oz",
        price: "$11 | $21",
        ingredients: "",
        picture: "flower_wine.png",
      },
      {
        name: "Inniskillin, Cabernet Franc Icewine, Canada",
        description: "3oz",
        price: "$36.00",
        ingredients: "",
        picture: "inniskilin_wine.png",
      },
      {
        name: "Sterling Vineyards, Merlot, Napa Valley",
        description: "3oz | 5oz",
        price: "$7 | $13",
        ingredients: "",
        picture: "sterling_wine.png",
      },
      {
        name: "Far Niente, Chardonnay, Napa Valley",
        description: "3oz | 5oz",
        price: "$12.50 | $24",
        ingredients: "",
        picture: "far_niente_wine.png",
      },
      {
        name: "Silver Oak, Cabernet Sauvignon, Alexander Valley",
        description: "3oz | 5oz",
        price: "$21 | $41",
        ingredients: "",
        picture: "silver_oak_wine.png",
      },
      {
        name: "Frank Family Vineyards, Chardonnay, Napa Valley",
        description: "3oz | 5oz",
        price: "$9 | $17",
        ingredients: "",
        picture: "frank_wine.png",
      },
      {
        name: "Flambeaux, Zinfandel, Dry Creek Valley",
        description: "3oz | 5oz",
        price: "$9.50 | $18",
        ingredients: "",
        picture: "flambeaux_wine.jpg",
      },
    ],
    "Alcoholic Beverages": [
      {
        name: "Hurricane Cocktail",
        description:
          "Bacardi Reserva Ocho Rum, Myers’s Original Dark Rum, Simply® Orange Juice, Passion Fruit Purée, Grenadine and Lime Juice, Luxardo Maraschino Cherry and Orange garnish",
        price: "$16.00",
        ingredients:
          "Bacardi Reserva Ocho Rum, Myers’s Original Dark Rum, Simply® Orange Juice, Passion Fruit Purée, Grenadine and Lime Juice, Luxardo Maraschino Cherry and Orange garnish",
        picture: "hurricane_cocktail.jpg",
      },
      {
        name: "Karl Strauss® Boat Shoes Hazy IPA",
        description: "San Diego, CA (ABV 7.2%)",
        price: "$12.50",
        ingredients: "",
        picture: "karl_strauss.png",
      },
      {
        name: "Abita Amber Lager",
        description: "Covington, LA (ABV 4.5%)",
        price: "$12.50",
        ingredients: "",
        picture: "abita_amber.png",
      },
    ],
    "Non-Alcoholic Beverages": [
      {
        name: "31 Royal Street Signature Julep",
        description: "Ask about our Seasonal Julep",
        price: "$6.00",
        ingredients: "Ask about our Seasonal Julep",
        picture: "31_royal_julep.jpg",
      },
      {
        name: "Louisiana Lemonade",
        description: "Minute Maid® Lemonade, Sprite®, Mango, Raspberry",
        price: "$5.50",
        ingredients: "Minute Maid® Lemonade, Sprite®, Mango, Raspberry",
        picture: "louisiana_lemonade.jpg",
      },
      {
        name: "Mint Julep",
        description: "",
        price: "$5.50",
        ingredients: "",
        picture: "mint_julep.jpg",
      },
      {
        name: "Louisiana Lemonade",
        description:
          "Minute Maid® Lemonade, Sprite®, Mango, Raspberry, served with a souvenir glow cube",
        price: "$8.50",
        ingredients:
          "Minute Maid® Lemonade, Sprite®, Mango, Raspberry, served with a souvenir glow cube",
        picture: "louisiana_lemonade.jpg",
      },
      {
        name: "Mint Julep",
        description: "served with a souvenir glow cube",
        price: "$8.50",
        ingredients: "served with a souvenir glow cube",
        picture: "mint_julep.jpg",
      },
      {
        name: "Assorted Fountain Beverages",
        description:
          "Coca-Cola®, Diet Coke®, Sprite®, Fanta® Orange, Barq's® Root Beer, and Iced Tea",
        price: "",
        ingredients:
          "Coca-Cola®, Diet Coke®, Sprite®, Fanta® Orange, Barq's® Root Beer, and Iced Tea",
      },
      {
        name: "Freshly Brewed Joffrey's Coffee®",
        description: "",
        price: "",
        ingredients: "",
      },
      {
        name: "Assorted Twinings of London® Teas",
        description: "",
        price: "",
        ingredients: "",
      },
      {
        name: "Hot Chocolate",
        description: "",
        price: "",
        ingredients: "",
      },
    ],
    "Allergy-friendly Offerings": [
      {
        name: "Allergy-friendly menus available upon request",
        description: "",
        price: "",
        ingredients: "",
      },
    ],
  },
};

export default menuData;
