let menuData = {
  Lunch: {
    Starters: [
      {
        name: "Chicken Gumbo",
        description:
          "Chicken, Andouille Sausage, Tomatoes, Okra, Jasmine Rice, Green Onions",
        price: "$7.00",
      },
      {
        name: "Gumbo Fries",
        description: "Cajun-spiced fries, Chicken Gumbo, Cajun Cheese",
        price: "$10.00",
      },
      {
        name: "House Salad",
        description:
          "Baby Greens, Blue Cheese Crumbles, Candied Pecans, Dried Fruit, Onions, Cherry Tomatoes, Sherry Viniagrette",
        price: "$7.00",
      },
    ],
    Entrées: [
      {
        name: "Flat Iron Steak",
        description:
          "with Country Mashed Potatoes, Market Vegetables, Charred Onion-Bourbon Demi",
        price: "$34.00",
      },
      {
        name: "Monte Cristo Sandwich",
        description:
          "Turkey, Ham and Swiss served with Seasonal Preserve and Seasonal Fruit",
        price: "$29.00",
      },
      {
        name: "Cajun Cauliflower",
        description:
          "Romanesco Sauce, Mushroom Chips, Cajun Cheddar, Wilted Greens, and Shishito Chimichurri",
        price: "$29.00",
      },
      {
        name: "Chicken & Kale Rice",
        description:
          "Roasted Spanish Vegetables, House Herb Mixture and Natural Jus",
        price: "$35.00",
      },
      {
        name: "Jambalaya",
        description:
          "Jumbo Shrimp, Andouille Sausage, Chicken, Tasso Ham, Creole Rice, Spiced Tomato Jus",
        price: "$36.00",
      },
      {
        name: "Sustainable Market Fish",
        description: "Chef's Choice of Sides",
        price: "$43.00",
      },
    ],
    Desserts: [
      {
        name: "Vanilla-Bourbon Crème Brûlée",
        description: "Macerated Fresh Berries and Pecan Cookie",
        price: "$9.00",
      },
      {
        name: "Sparkling Cider Celebration Finale",
        description:
          "Two glasses of Martinelli's Sparkling Cider, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        price: "$50.00",
      },
      {
        name: "8-Layer Chocolate and Hazelnut Cake",
        description: "Raspberry Sauce and Vanilla Bean Chantilly",
        price: "$10.00",
      },
      {
        name: "Sparkling Wine Celebration Finale",
        description:
          "Two glasses of Le Grand Courtâge Grand Cuvée Blanc de Blancs Brut, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        price: "$65.00",
      },
    ],
    Kids: [
      {
        name: "Pasta with Marinara Sauce",
        description:
          "served with Choice of Two (2) Selections and choice of Small Low-fat Milk or Small DASANI® Water. Meets Disney Nutrition Guidelines for Complete Meals without substitutions",
        price: "$10.00",
      },
      {
        name: "Chef's Beef Specialty",
        description:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        price: "$13.00",
      },
      {
        name: "Chicken Breast",
        description:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        price: "$10.00",
      },
    ],
    "Featured Wine By the Glass": [
      {
        name: "Miner Family Winery, Chardonnay, Napa Valley",
        description: "5oz",
        price: "$11.00",
      },
      {
        name: "J. Wilkes, Cabernet Sauvignon, Paso Robles Highlands District, CA",
        description: "5oz",
        price: "$11.00",
      },
    ],
    "Sparkling Wine": [
      {
        name: "Le Grand Courtâge, Blanc de Blancs Brut Grand Cuvée, France",
        description: "Glass",
        price: "$10.00",
      },
    ],
    "Wine Tasting Selection": [
      {
        name: "Duckhorn Vineyards, Sauvignon Blanc, Napa Valley",
        description: "3oz | 5oz",
        price: "$7 | $13",
      },
      {
        name: "Flowers Vineyards, Pinot Noir, Sonoma Coast",
        description: "3oz | 5oz",
        price: "$11 | $21",
      },
      {
        name: "Inniskillin, Cabernet Franc Icewine, Canada",
        description: "3oz",
        price: "$36.00",
      },
      {
        name: "Sterling Vineyards, Merlot, Napa Valley",
        description: "3oz | 5oz",
        price: "$7 | $13",
      },
      {
        name: "Far Niente, Chardonnay, Napa Valley",
        description: "3oz | 5oz",
        price: "$12.50 | $24",
      },
      {
        name: "Silver Oak, Cabernet Sauvignon, Alexander Valley",
        description: "3oz | 5oz",
        price: "$21 | $41",
      },
      {
        name: "Frank Family Vineyards, Chardonnay, Napa Valley",
        description: "3oz | 5oz",
        price: "$9 | $17",
      },
      {
        name: "Flambeaux, Zinfandel, Dry Creek Valley",
        description: "3oz | 5oz",
        price: "$9.50 | $18",
      },
    ],
    "Alcoholic Beverages": [
      {
        name: "Hurricane Cocktail",
        description:
          "Bacardi Reserva Ocho Rum, Myers’s Original Dark Rum, Simply® Orange Juice, Passion Fruit Purée, Grenadine and Lime Juice, Luxardo Maraschino Cherry and Orange garnish",
        price: "$16.00",
      },
      {
        name: "Karl Strauss® Boat Shoes Hazy IPA",
        description: "San Diego, CA (ABV 7.2%)",
        price: "$12.50",
      },
      {
        name: "Abita Amber Lager",
        description: "Covington, LA (ABV 4.5%)",
        price: "$12.50",
      },
    ],
    "Non-Alcoholic Beverages": [
      {
        name: "31 Royal Street Signature Julep",
        description: "Ask about our Seasonal Julep",
        price: "$6.00",
      },
      {
        name: "Louisiana Lemonade",
        description: "Minute Maid® Lemonade, Sprite®, Mango, Raspberry",
        price: "$5.50",
      },
      {
        name: "Mint Julep",
        description: "",
        price: "$5.50",
      },
      {
        name: "Louisiana Lemonade",
        description:
          "Minute Maid® Lemonade, Sprite®, Mango, Raspberry, served with a souvenir glow cube",
        price: "$8.50",
      },
      {
        name: "Mint Julep",
        description: "served with a souvenir glow cube",
        price: "$8.50",
      },
      {
        name: "Assorted Fountain Beverages",
        description:
          "Coca-Cola®, Diet Coke®, Sprite®, Fanta® Orange, Barq's® Root Beer, and Iced Tea",
        price: "",
      },
      {
        name: "Freshly Brewed Joffrey's Coffee®",
        description: "",
        price: "",
      },
      {
        name: "Assorted Twinings of London® Teas",
        description: "",
        price: "",
      },
      {
        name: "Hot Chocolate",
        description: "",
        price: "",
      },
    ],
    "Allergy-friendly Offerings": [
      {
        name: "Allergy-friendly menus available upon request",
        description: "",
        price: "",
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
      },
      {
        name: "Gumbo Fries",
        description: "Cajun-spiced fries, Chicken Gumbo, Cajun Cheese",
        price: "$10.00",
      },
      {
        name: "House Salad",
        description:
          "Baby Greens, Blue Cheese Crumbles, Candied Pecans, Dried Fruit, Onions, Cherry Tomatoes, Sherry Viniagrette",
        price: "$7.00",
      },
    ],
    Entrées: [
      {
        name: "Jambalaya",
        description:
          "Jumbo Shrimp, Andouille Sausage, Chicken, Tasso Ham, Creole Rice, Spiced Tomato Jus",
        price: "$36.00",
      },
      {
        name: "Sustainable Market Fish",
        description: "Chef's Choice of Sides",
        price: "$43.00",
      },
      {
        name: "Filet Mignon",
        description:
          "with Country Mashed Potatoes, Market Vegetables, Charred Onion-Bourbon Demi",
        price: "$52.00",
      },
      {
        name: "Cajun Cauliflower",
        description:
          "Romanesco Sauce, Mushroom Chips, Cajun Cheddar, Wilted Greens, and Shishito Chimichurri",
        price: "$29.00",
      },
      {
        name: "Chicken & Kale Rice",
        description:
          "Roasted Spanish Vegetables, House Herb Mixture and Natural Jus",
        price: "$35.00",
      },
    ],
    Desserts: [
      {
        name: "Vanilla-Bourbon Crème Brûlée",
        description: "Macerated Fresh Berries and Pecan Cookie",
        price: "$9.00",
      },
      {
        name: "Sparkling Cider Celebration Finale",
        description:
          "Two glasses of Martinelli's Sparkling Cider, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        price: "$50.00",
      },
      {
        name: "8-Layer Chocolate and Hazelnut Cake",
        description: "Raspberry Sauce and Vanilla Bean Chantilly",
        price: "$10.00",
      },
      {
        name: "Sparkling Wine Celebration Finale",
        description:
          "Two glasses of Le Grand Courtâge Grand Cuvée Blanc de Blancs Brut, served with a Crème Brûlée Duo of Vanilla-Bourbon and Café Au Lait with Chocolate-dipped Madeleines.",
        price: "$65.00",
      },
    ],
    Kids: [
      {
        name: "Pasta with Marinara Sauce",
        description:
          "served with Choice of Two (2) Selections and choice of Small Low-fat Milk or Small DASANI® Water. Meets Disney Nutrition Guidelines for Complete Meals without substitutions",
        price: "$10.00",
      },
      {
        name: "Chef's Beef Specialty",
        description:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        price: "$13.00",
      },
      {
        name: "Chicken Breast",
        description:
          "served with choice of two (2) Selections and choice of Small Lowfat Milk or Small DASANI® Water",
        price: "$10.00",
      },
    ],
    "Featured Wine By the Glass": [
      {
        name: "Miner Family Winery, Chardonnay, Napa Valley",
        description: "5oz",
        price: "$11.00",
      },
      {
        name: "J. Wilkes, Cabernet Sauvignon, Paso Robles Highlands District, CA",
        description: "5oz",
        price: "$11.00",
      },
    ],
    "Sparkling Wine": [
      {
        name: "Le Grand Courtâge, Blanc de Blancs Brut Grand Cuvée, France",
        description: "Glass",
        price: "$10.00",
      },
    ],
    "Wine Tasting Selection": [
      {
        name: "Duckhorn Vineyards, Sauvignon Blanc, Napa Valley",
        description: "3oz | 5oz",
        price: "$7 | $13",
      },
      {
        name: "Flowers Vineyards, Pinot Noir, Sonoma Coast",
        description: "3oz | 5oz",
        price: "$11 | $21",
      },
      {
        name: "Inniskillin, Cabernet Franc Icewine, Canada",
        description: "3oz",
        price: "$36.00",
      },
      {
        name: "Sterling Vineyards, Merlot, Napa Valley",
        description: "3oz | 5oz",
        price: "$7 | $13",
      },
      {
        name: "Far Niente, Chardonnay, Napa Valley",
        description: "3oz | 5oz",
        price: "$12.50 | $24",
      },
      {
        name: "Silver Oak, Cabernet Sauvignon, Alexander Valley",
        description: "3oz | 5oz",
        price: "$21 | $41",
      },
      {
        name: "Frank Family Vineyards, Chardonnay, Napa Valley",
        description: "3oz | 5oz",
        price: "$9 | $17",
      },
      {
        name: "Flambeaux, Zinfandel, Dry Creek Valley",
        description: "3oz | 5oz",
        price: "$9.50 | $18",
      },
    ],
    "Alcoholic Beverages": [
      {
        name: "Hurricane Cocktail",
        description:
          "Bacardi Reserva Ocho Rum, Myers’s Original Dark Rum, Simply® Orange Juice, Passion Fruit Purée, Grenadine and Lime Juice, Luxardo Maraschino Cherry and Orange garnish",
        price: "$16.00",
      },
      {
        name: "Karl Strauss® Boat Shoes Hazy IPA",
        description: "San Diego, CA (ABV 7.2%)",
        price: "$12.50",
      },
      {
        name: "Abita Amber Lager",
        description: "Covington, LA (ABV 4.5%)",
        price: "$12.50",
      },
    ],
    "Non-Alcoholic Beverages": [
      {
        name: "31 Royal Street Signature Julep",
        description: "Ask about our Seasonal Julep",
        price: "$6.00",
      },
      {
        name: "Louisiana Lemonade",
        description: "Minute Maid® Lemonade, Sprite®, Mango, Raspberry",
        price: "$5.50",
      },
      {
        name: "Mint Julep",
        description: "",
        price: "$5.50",
      },
      {
        name: "Louisiana Lemonade",
        description:
          "Minute Maid® Lemonade, Sprite®, Mango, Raspberry, served with a souvenir glow cube",
        price: "$8.50",
      },
      {
        name: "Mint Julep",
        description: "served with a souvenir glow cube",
        price: "$8.50",
      },
      {
        name: "Assorted Fountain Beverages",
        description:
          "Coca-Cola®, Diet Coke®, Sprite®, Fanta® Orange, Barq's® Root Beer, and Iced Tea",
        price: "",
      },
      {
        name: "Freshly Brewed Joffrey's Coffee®",
        description: "",
        price: "",
      },
      {
        name: "Assorted Twinings of London® Teas",
        description: "",
        price: "",
      },
      {
        name: "Hot Chocolate",
        description: "",
        price: "",
      },
    ],
    "Allergy-friendly Offerings": [
      {
        name: "Allergy-friendly menus available upon request",
        description: "",
        price: "",
      },
    ],
  },
};

export default menuData;
