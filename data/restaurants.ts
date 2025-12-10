export type RestaurantStatus = "DRAFT" | "PUBLISHED";

export type RestaurantLocation = {
  lat: number;
  lon: number;
  area?: string;
};

export type Restaurant = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  status: RestaurantStatus;
  location?: RestaurantLocation;
  placeId?: string;
};

export const restaurants: Restaurant[] = [
  {
    "slug": "la-ferme-du-pre-catelan",
    "name": "La Ferme du Pré Catelan",
    "category": "bistro",
    "status": "PUBLISHED",
    "shortDescription": "Garden bistro in a former stable out in Bois de Boulogne; fries come by the bowl.",
    "longDescription": "Countryside escape inside the city. Once a horse stable, now a stunning garden bistro by Frédéric Anton. Lunch is relaxed, not stuffy. Order the towering bowl of fries and settle in.",
    "location": {
      "lat": 48.8639993,
      "lon": 2.2507703,
      "area": "Bois de Boulogne / 16e"
    },
    "placeId": "ChIJXZ9lqzZl5kcRxIInGxIRFaI"
  },
  {
    "slug": "les-enfants-du-marche",
    "name": "Les Enfants du Marché",
    "category": "natural_wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Michelin-level counter hidden in Marché des Enfants Rouges; natural wine and daily plates.",
    "longDescription": "Chef-led counter inside Marché des Enfants Rouges where plates change with the haul. Sit at the bar, drink natural wine, order whatever is fresh—always creative, always hits.",
    "location": {
      "lat": 48.86258549999999,
      "lon": 2.3621245,
      "area": "Haut Marais / 3e"
    },
    "placeId": "ChIJpTwIKARu5kcRUrI2FD8IWmE"
  },
  {
    "slug": "aux-crus-de-bourgogne",
    "name": "Aux Crus de Bourgogne",
    "category": "bistro",
    "status": "PUBLISHED",
    "shortDescription": "Classic Bourguignon bistro in Sentier—white cloths, oeuf mayo, steak frites.",
    "longDescription": "Old-school room that does the Burgundy canon right: oeuf mayo, snails, steak frites, bottles of red. Solid service, zero gimmicks, just a Paris classic.",
    "placeId": "ChIJtdLOGBhu5kcRwPqBdu55yjM",
    "location": {
      "lat": 48.8658261,
      "lon": 2.3465718,
      "area": "3 Rue Bachaumont, 75002 Paris, France"
    }
  },
  {
    "slug": "restaurant-kei",
    "name": "Restaurant Kei",
    "category": "tasting_menu",
    "status": "PUBLISHED",
    "shortDescription": "3-star Franco-Japanese tasting near the Louvre; immaculate, white-glove service.",
    "longDescription": "Kei Kobayashi’s flagship: precise, feather-light tasting menus blending French technique and Japanese clarity. Formal but warm, worth the splurge.",
    "placeId": "ChIJqTnaAiNu5kcRQsRFgf8qeoA",
    "location": {
      "lat": 48.864358,
      "lon": 2.3420827,
      "area": "5 Rue Coq Héron, 75001 Paris, France"
    }
  },
  {
    "slug": "table-bruno-verjus",
    "name": "Table Bruno Verjus",
    "category": "tasting_menu",
    "status": "PUBLISHED",
    "shortDescription": "Hyper-seasonal counter temple on Quai de la Seine; poetic, unforgettable plates.",
    "longDescription": "Bruno Verjus cooks inches from you at the counter. Former food writer, now philosopher-chef obsessed with product. Expensive, singular, and memorable.",
    "placeId": "ChIJoSONvAVy5kcRiFFvBHOUYv8",
    "location": {
      "lat": 48.84880159999999,
      "lon": 2.3758487,
      "area": "3 R. de Prague, 75012 Paris, France"
    }
  },
  {
    "slug": "element-terre",
    "name": "Element Terre",
    "category": "bistro",
    "status": "PUBLISHED",
    "shortDescription": "Plant-forward modern spot near République with calm energy and clean plating.",
    "longDescription": "Under-the-radar restaurant doing sustainable, vegetable-driven cooking with finesse. Beautiful plates, relaxed pace, quietly confident.",
    "placeId": "ChIJEd8ctuNv5kcRIHX7paPxxx8",
    "location": {
      "lat": 48.87298,
      "lon": 2.3504567,
      "area": "32 Rue d'Hauteville, 75010 Paris, France"
    }
  },
  {
    "slug": "le-mermoz",
    "name": "Le Mermoz",
    "category": "bistro",
    "status": "PUBLISHED",
    "shortDescription": "Refined neo-bistro off the Champs; seasonal plates and natural-leaning wines.",
    "longDescription": "Airy room in the 8e serving sharp bistro plates—often seafood-led—with a thoughtful wine list. Friendly, polished, never fussy.",
    "placeId": "ChIJ4denjMVv5kcRAosGrioNpw0",
    "location": {
      "lat": 48.8707341,
      "lon": 2.3115407,
      "area": "16 Rue Jean Mermoz, 75008 Paris, France"
    }
  },
  {
    "slug": "le-collier-de-la-reine",
    "name": "Le Collier de la Reine",
    "category": "bistro",
    "status": "PUBLISHED",
    "shortDescription": "Candlelit North Marais bistro with classic plates and an easygoing vibe.",
    "longDescription": "Neighborhood French spot for comforting mains, good bread, and a glass or two. Casual elegance without the pretense.",
    "placeId": "ChIJU6rPEdJv5kcRKSlOKpXayBM",
    "location": {
      "lat": 48.87379319999999,
      "lon": 2.3500136,
      "area": "39 R. des Petites Écuries, 75010 Paris, France"
    }
  },
  {
    "slug": "le-bon-georges",
    "name": "Le Bon Georges",
    "category": "bistro",
    "status": "PUBLISHED",
    "shortDescription": "Upscale Saint-Georges bistro with a wine list larger than the bible.",
    "longDescription": "Pricey but strong. Serious sourcing, classic French cooking, and a massive, well-curated cellar. Book ahead and bring an appetite.",
    "placeId": "ChIJ8R9ZmEdu5kcRJl7X5mDD2us",
    "location": {
      "lat": 48.8776756,
      "lon": 2.3371619,
      "area": "45 Rue Saint-Georges, 75009 Paris, France"
    }
  },
  {
    "slug": "chez-georges",
    "name": "Chez Georges",
    "category": "bistro",
    "status": "PUBLISHED",
    "shortDescription": "Heavy old-school French on rue du Mail; come hungry, leave full and happy.",
    "longDescription": "A time-capsule Parisian bistro: thick sauces, rich mains, and no shortcuts. Legendary for doing the classics with conviction.",
    "placeId": "ChIJs-Reyzxu5kcRsvCqiM8r90c",
    "location": {
      "lat": 48.8664236,
      "lon": 2.3412876,
      "area": "1 Rue du Mail, 75002 Paris, France"
    }
  },
  {
    "slug": "septime",
    "name": "Septime",
    "category": "tasting_menu",
    "status": "PUBLISHED",
    "shortDescription": "Minimalist 1-star tasting in Charonne; thoughtful, light, hard to book.",
    "longDescription": "Modern tasting menu that feels effortless—produce-led, precise, quietly luxurious. Reservations drop exactly three weeks out at 10 a.m.",
    "placeId": "ChIJE6kCUghy5kcRmWSg3RUHIwM",
    "location": {
      "lat": 48.8535723,
      "lon": 2.3809333,
      "area": "80 Rue de Charonne, 75011 Paris, France"
    }
  },
  {
    "slug": "le-comptoir-canaille",
    "name": "Le Comptoir Canaille",
    "category": "bistro",
    "status": "PUBLISHED",
    "shortDescription": "Family-run comfort bistro: ducky, saucy, buttery, zero ego.",
    "longDescription": "Neighborhood favorite for rich classics and generous plates. Friendly service, great for a no-fuss, feel-good dinner.",
    "placeId": "ChIJUac-q8xv5kcRI3Uc1kPu9Kg",
    "location": {
      "lat": 48.8793196,
      "lon": 2.3340492,
      "area": "31 Rue la Bruyère, 75009 Paris, France"
    }
  },
  {
    "slug": "le-dauphin",
    "name": "Le Dauphin",
    "category": "small_plates",
    "status": "PUBLISHED",
    "shortDescription": "Rem Koolhaas-designed small-plates bar next to Chateaubriand; strong wine.",
    "longDescription": "Marble-and-mirror interior, buzzing bar vibe, and a tight menu of inventive plates. Great bottles, attractive crowd, always lively.",
    "placeId": "ChIJjcveyeNt5kcR5xm7bVyEib0",
    "location": {
      "lat": 48.8694795,
      "lon": 2.3711865,
      "area": "131 Ave Parmentier, 75011 Paris, France"
    }
  },
  {
    "slug": "daroco",
    "name": "Daroco",
    "category": "italian",
    "status": "PUBLISHED",
    "shortDescription": "Grand Italian/pizza brasserie in an old Jean-Paul Gaultier store.",
    "longDescription": "High-ceilinged, dramatic room with solid pasta and pizza. Not for purists, but the vibe and the hidden speakeasy downstairs keep it fun.",
    "placeId": "ChIJP-sdWztu5kcRkRlPefMaauk",
    "location": {
      "lat": 48.8671501,
      "lon": 2.3392434,
      "area": "6 Rue Vivienne, 75002 Paris, France"
    }
  },
  {
    "slug": "ogata",
    "name": "OGATA",
    "category": "tasting_menu",
    "status": "PUBLISHED",
    "shortDescription": "Minimalist Japanese tea house and restaurant; calm, reset energy.",
    "longDescription": "Architectural, serene multi-level space in the Upper Marais. Best at lunch—order the prix fixe and exhale.",
    "location": {
      "lat": 48.8610097,
      "lon": 2.3635511,
      "area": "Upper Marais / 3e"
    },
    "placeId": "ChIJexUJUzFv5kcRcynXsmuxF5o"
  },
  {
    "slug": "abri-soba",
    "name": "Abri Soba",
    "category": "japanese",
    "status": "PUBLISHED",
    "shortDescription": "Minimal soba counter in SoPi; sake bottles everywhere, duck soba is the move.",
    "longDescription": "Fresh buckwheat noodles, beautiful porcelain plates, and a tight menu that over-delivers. Intimate, calm, and addictive.",
    "location": {
      "lat": 48.87493569999999,
      "lon": 2.3445873,
      "area": "South Pigalle / 9e"
    },
    "placeId": "ChIJl2szvj9u5kcRztUQCxoG-Ew"
  },
  {
    "slug": "menkicchi-ramen",
    "name": "Menkicchi Ramen",
    "category": "ramen",
    "status": "PUBLISHED",
    "shortDescription": "Tiny rue Sainte-Anne ramen bar; thick miso broth and Kirin on tap.",
    "longDescription": "Tokyo-level miso bowls with fatty, soulful broth. Ignore the neighbors—this is the one. Cold beer, warm noodles, perfect combo.",
    "location": {
      "lat": 48.8665213,
      "lon": 2.335564,
      "area": "Rue Sainte-Anne / 1e"
    },
    "placeId": "ChIJq99pfklv5kcRm0NDwGCXyjo"
  },
  {
    "slug": "mehmet",
    "name": "Mehmet",
    "category": "kebab",
    "status": "PUBLISHED",
    "shortDescription": "Charcoal-grilled dürüm kebab with crispy bread and natural wine.",
    "longDescription": "Walk-up kebab counter serving smoky, rich wraps on blistered bread. Wine is good, people are chill, flavors are big.",
    "location": {
      "lat": 48.8895801,
      "lon": 2.3458757,
      "area": "Rue Ramey / 18e"
    },
    "placeId": "ChIJ0xni1Ltv5kcRYW_mCKvXjjk"
  },
  {
    "slug": "omar-dhiab",
    "name": "Omar Dhiab",
    "category": "tasting_menu",
    "status": "PUBLISHED",
    "shortDescription": "Egyptian-inflected 1-star tasting menu at a friendly price point.",
    "longDescription": "Creative Franco-Egyptian plates with bright, layered flavors. Lunch deal is a steal for this level; service is warm and generous.",
    "placeId": "ChIJR7fpoO5v5kcRlFje00R0PpI",
    "location": {
      "lat": 48.8651795,
      "lon": 2.3418771,
      "area": "23 Rue Hérold, 75001 Paris, France"
    }
  },
  {
    "slug": "chop-chop-love",
    "name": "Chop Chop Love",
    "category": "small_plates",
    "status": "PUBLISHED",
    "shortDescription": "Chinese-leaning small plates with a natural wine cave; chefs rotate weekly.",
    "longDescription": "Oberkampf hangout mixing playful Chinese-ish dishes with a strong natty list. Constantly changing kitchen keeps it fun and surprising.",
    "placeId": "ChIJk1klDRpv5kcR33yif8z6ctE",
    "location": {
      "lat": 48.8706799,
      "lon": 2.3567059,
      "area": "48 Rue du Faubourg Saint-Martin, 75010 Paris, France"
    }
  },
  {
    "slug": "haikara-izakaya",
    "name": "Haikara Izakaya",
    "category": "izakaya",
    "status": "PUBLISHED",
    "shortDescription": "Low-lit izakaya in the 11e; skewers, fry, cold beer, minimal talking required.",
    "longDescription": "Casual Japanese bar for kushiyaki, fried bites, and a few rounds. Dark, cozy, perfect for a laid-back night.",
    "placeId": "ChIJz5z5x4lt5kcRuvclqjssN4g",
    "location": {
      "lat": 48.8663807,
      "lon": 2.3701875,
      "area": "82 Rue de la Folie Méricourt, 75011 Paris, France"
    }
  },
  {
    "slug": "le-404",
    "name": "Le 404",
    "category": "moroccan",
    "status": "PUBLISHED",
    "shortDescription": "Moody Moroccan spot in the Marais; couscous and tagines done right.",
    "longDescription": "Feels like stepping into a warm Moroccan home—dark wood, steam, spice, and comforting plates. Stick around for drinks afterward.",
    "placeId": "ChIJM9X48Rpu5kcRavKS94RuvzE",
    "location": {
      "lat": 48.8644682,
      "lon": 2.3543194,
      "area": "69 Rue des Gravilliers, 75003 Paris, France"
    }
  },
  {
    "slug": "dersou",
    "name": "Dersou",
    "category": "tasting_menu",
    "status": "PUBLISHED",
    "shortDescription": "French-Japanese tasting with cocktail pairings near Ledru-Rollin.",
    "longDescription": "Serious plates with inventive cocktails to match. Unflashy room, sharp cooking, great for a focused dinner.",
    "placeId": "ChIJ7UU1igZy5kcR8-BrVw9FzmQ",
    "location": {
      "lat": 48.8513995,
      "lon": 2.374616,
      "area": "21 Rue Saint-Nicolas, 75012 Paris, France"
    }
  },
  {
    "slug": "la-boutique-de-yamtcha",
    "name": "La Boutique de Yam'Tcha",
    "category": "fusion",
    "status": "PUBLISHED",
    "shortDescription": "Bao, fusion plates, and tea pairings near Les Halles; tiny and tight.",
    "longDescription": "Daytime-friendly offshoot of Yam'Tcha serving bao and small plates with thoughtful tea pairings. Space is compact—book or go early.",
    "placeId": "ChIJsWggLCJu5kcRdLsT5Rd6Wsw",
    "location": {
      "lat": 48.8617019,
      "lon": 2.3424475,
      "area": "4 Rue Sauval, 75001 Paris, France"
    }
  },
  {
    "slug": "yamtcha",
    "name": "Yam'Tcha",
    "category": "tasting_menu",
    "status": "PUBLISHED",
    "shortDescription": "Serious Franco-Chinese tasting menu from Adeline Grattard.",
    "longDescription": "Elegant, intimate, and layered with tea culture. Expect refined plates, great service, and a splurge-worthy bill.",
    "placeId": "ChIJRzkMLCJu5kcR11DVVaohb8o",
    "location": {
      "lat": 48.8614427,
      "lon": 2.3417022,
      "area": "121 Rue Saint-Honoré, 75001 Paris, France"
    }
  },
  {
    "slug": "junk",
    "name": "Junk",
    "category": "burger",
    "status": "PUBLISHED",
    "shortDescription": "Gooey smash burger near Palais Royal; eat it in the garden.",
    "longDescription": "Best burger in town if you like it messy and rich. Grab, go to Jardin du Palais Royal, and live a little. Size up or down depending on hunger.",
    "placeId": "ChIJJUdTV_hv5kcR9f4kZSrf1_M",
    "location": {
      "lat": 48.8677042,
      "lon": 2.3440285,
      "area": "114 Rue Montmartre, 75002 Paris, France"
    }
  },
  {
    "slug": "dumbo",
    "name": "Dumbo",
    "category": "burger",
    "status": "PUBLISHED",
    "shortDescription": "Cult smash burger window—choose your camp: Dumbo vs Junk.",
    "longDescription": "Short menu, quick turnover, perfectly seared patties. Ideal for a fast, indulgent stop when only a smash burger will do.",
    "placeId": "ChIJSaVI9Y1v5kcReWHxpmyOeT8",
    "location": {
      "lat": 48.8614633,
      "lon": 2.3642848,
      "area": "6 Rue de Poitou, 75003 Paris, France"
    }
  },
  {
    "slug": "cafe-courtial-la-crepe",
    "name": "Cafe Courtial, la crêpe",
    "category": "creperie",
    "status": "PUBLISHED",
    "shortDescription": "Tiny Left Bank crêperie; low-frills, really good crêpes.",
    "longDescription": "A handful of seats, a hot griddle, and simple fillings done right. Great solo lunch stop or quick bite between museums.",
    "placeId": "ChIJadj6W_tv5kcRXkz_rc9ZreU",
    "location": {
      "lat": 48.8615925,
      "lon": 2.342442,
      "area": "2 Rue Sauval, 75001 Paris, France"
    }
  },
  {
    "slug": "soma-sando",
    "name": "Soma Sando",
    "category": "sando",
    "status": "PUBLISHED",
    "shortDescription": "Japanese sandos—egg, pork katsu, all perfectly trimmed and stacked.",
    "longDescription": "Tokyo street-lunch energy in central Paris. Soft milk bread, crisp cutlets, and clean flavors. Easy takeaway, satisfying every time.",
    "placeId": "ChIJc0B4qqdx5kcRZG4gRs1dJz4",
    "location": {
      "lat": 48.8486408,
      "lon": 2.3318359,
      "area": "62 Rue de Vaugirard, 75006 Paris, France"
    }
  },
  {
    "slug": "bagels-and-brownies",
    "name": "Bagels & Brownies",
    "category": "bagel",
    "status": "PUBLISHED",
    "shortDescription": "Reliable bagel shop near Luxembourg; grab and post up in the park.",
    "longDescription": "Long-running Left Bank bagel spot for a quick, filling bite. Perfect pre- or post-walk around Jardin du Luxembourg.",
    "location": {
      "lat": 48.84643699999999,
      "lon": 2.327287,
      "area": "6e / Notre-Dame-des-Champs"
    },
    "placeId": "ChIJtZVrAs5x5kcRDElqqqLr6NY"
  },
  {
    "slug": "stohrer",
    "name": "Stohrer",
    "category": "bakery",
    "status": "PUBLISHED",
    "shortDescription": "Historic pâtisserie on rue Montorgueil; eclairs, flan, morning pastry.",
    "longDescription": "Oldest bakery in Paris. Hit it early for pain au chocolat, eclairs, classic flan, and a pot of vanilla ice cream to take home.",
    "placeId": "ChIJdz7rPhhu5kcRq862GQcM148",
    "location": {
      "lat": 48.8652644,
      "lon": 2.3468149,
      "area": "51 Rue Montorgueil, 75002 Paris, France"
    }
  },
  {
    "slug": "laize-sainte-avoye",
    "name": "Laïzé Sainte-Avoye",
    "category": "cafe",
    "status": "PUBLISHED",
    "shortDescription": "Taiwanese café oasis in the Marais; balanced vibe and gentle service.",
    "longDescription": "Calm corner coffee/tea shop with Taiwanese snacks and a relaxed crowd. Ideal post-walk recharge away from the noise.",
    "location": {
      "lat": 48.8608379,
      "lon": 2.355641700000001,
      "area": "3e / Rue du Temple"
    },
    "placeId": "ChIJk9Fzfhlv5kcR4YLivP9ACLw"
  },
  {
    "slug": "the-coffee",
    "name": "The Coffee",
    "category": "cafe",
    "status": "PUBLISHED",
    "shortDescription": "Minimal specialty coffee bar on Rue Saint-Gilles; no fluff, just good beans.",
    "longDescription": "Clean, tight space focused on well-sourced coffee. Quick counter service, great for a no-brainer morning stop.",
    "location": {
      "lat": 48.8640506,
      "lon": 2.3560902,
      "area": "3e / Rue Saint-Gilles"
    },
    "placeId": "ChIJqy6tbCBv5kcRl1oSrs_DXZk"
  },
  {
    "slug": "dreaming-man",
    "name": "Dreaming Man",
    "category": "cafe",
    "status": "PUBLISHED",
    "shortDescription": "Matcha-forward minimalist café; tiny, peaceful, always delivers.",
    "longDescription": "Known for excellent matcha and quiet vibes. Small, designy, and reliable when you need a calm caffeine fix.",
    "placeId": "ChIJKWg3Cxdv5kcREXbIi08eznc",
    "location": {
      "lat": 48.86529609999999,
      "lon": 2.3664931,
      "area": "140 Rue Amelot, 75011 Paris, France"
    }
  },
  {
    "slug": "partisan-cafe",
    "name": "Partisan Café",
    "category": "cafe",
    "status": "PUBLISHED",
    "shortDescription": "Design-y specialty coffee that leans pretentious—beans and crowd both curated.",
    "longDescription": "Expect good coffee, a styled space, and a selective soundtrack. If you can handle the attitude, the cups are worth it.",
    "placeId": "ChIJoXjzXBpu5kcRxcAyAUf7Oy8",
    "location": {
      "lat": 48.864681,
      "lon": 2.353093,
      "area": "36 R. de Turbigo, 75003 Paris, France"
    }
  },
  {
    "slug": "early-june",
    "name": "Early June",
    "category": "natural_wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Canal-side natural wine bar with rotating chef residencies; daylight hits different.",
    "longDescription": "Tiny, clean design, and constantly changing food thanks to guest chefs. Great for a Scandinavian-feeling wine lunch or casual night.",
    "placeId": "ChIJpRggbu9v5kcRG8MgUOLA89U",
    "location": {
      "lat": 48.8729647,
      "lon": 2.3632777,
      "area": "19 Rue Jean Poulmarch, 75010 Paris, France"
    }
  },
  {
    "slug": "l-avant-comptoir-du-marche",
    "name": "L'Avant Comptoir du Marché",
    "category": "tapas_bar",
    "status": "PUBLISHED",
    "shortDescription": "Peak standing-room apero at Marché St-Germain; loud, fun, endless small bites.",
    "longDescription": "Wall-to-wall people, French bangers on the speakers, bottles flowing before you notice. Order cheese croquetas, pâté, and the bread-and-butter—if you’re eating.",
    "placeId": "ChIJQZrietlx5kcRuJV3PWGPG14",
    "location": {
      "lat": 48.8517684,
      "lon": 2.3354537,
      "area": "14 Rue Lobineau, 75006 Paris, France"
    }
  },
  {
    "slug": "la-cremerie",
    "name": "La Crèmerie",
    "category": "wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Tiny 6e cave à vins with charcuterie and cheese; quiet refuge from the rush.",
    "longDescription": "If Avant Comptoir is slammed, slide here. Old wood shelves, natural-leaning list, and simple plates to snack through a bottle.",
    "placeId": "ChIJU5d_Gwxu5kcRoa4-ENarC5E",
    "location": {
      "lat": 48.871132,
      "lon": 2.361611,
      "area": "41 Rue de Lancry, 75010 Paris, France"
    }
  },
  {
    "slug": "o-chateau",
    "name": "Ô Chateau",
    "category": "wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Polished central wine bar; smooth service, great selection, calm vibe.",
    "longDescription": "Good first stop for wine without chaos. Broad list, knowledgeable staff, and a relaxed room in the 1e.",
    "placeId": "ChIJ0RDnkSJu5kcRKdFqE1EDlxI",
    "location": {
      "lat": 48.8643,
      "lon": 2.3442,
      "area": "68 Rue Jean-Jacques Rousseau, 75001 Paris, France"
    }
  },
  {
    "slug": "freddys",
    "name": "Freddy's",
    "category": "wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Grilled plates, cider, and natty wines on Rue de Seine; controlled chaos.",
    "longDescription": "Stand or squeeze into a stool, order a cider, and work through skewers and grilled bites. Semilla next door is the calmer sibling.",
    "placeId": "ChIJfdVN49hx5kcRuAiELF2j7gI",
    "location": {
      "lat": 48.8540895,
      "lon": 2.3368976,
      "area": "54 Rue de Seine, 75006 Paris, France"
    }
  },
  {
    "slug": "caves-saint-gilles",
    "name": "Caves Saint Gilles",
    "category": "tapas_bar",
    "status": "PUBLISHED",
    "shortDescription": "Loud Spanish tapas cave on Rue Saint-Gilles; sangria jugs mandatory.",
    "longDescription": "Bread flying, locals shouting, plates of jamón and tortilla hitting the counter. Order the sangria and lean into the mess.",
    "placeId": "ChIJ28az1_9t5kcRIf9FerqQCTI",
    "location": {
      "lat": 48.85777780000001,
      "lon": 2.3672222,
      "area": "4 Rue Saint-Gilles, 75003 Paris, France"
    }
  },
  {
    "slug": "la-perle",
    "name": "La Perle",
    "category": "bar",
    "status": "PUBLISHED",
    "shortDescription": "Marais all-day bar that spills into the street; skaters, DJs, fashion kids, old locals.",
    "longDescription": "Iconic hang on Rue Vieille-du-Temple. Come for an apero, stay late, meet everyone. Cool without trying.",
    "placeId": "ChIJdRMs6gNu5kcRcoQEb7XBKDo",
    "location": {
      "lat": 48.859783,
      "lon": 2.3606684,
      "area": "78 Rue Vieille du Temple, 75003 Paris, France"
    }
  },
  {
    "slug": "shana",
    "name": "Shana",
    "category": "small_plates",
    "status": "PUBLISHED",
    "shortDescription": "Candlelit small-plates spot with natural wine; rowdy in the right way.",
    "longDescription": "Cozy tables, fun crowd, and a mix of plates that change often. Bring friends, order broadly, linger.",
    "placeId": "ChIJqe95-NVv5kcRNZ6YHEtKG3Y",
    "location": {
      "lat": 48.8660715,
      "lon": 2.3487204,
      "area": "14 Rue Saint-Sauveur, 75002 Paris, France"
    }
  },
  {
    "slug": "frenchie-bar-a-vins",
    "name": "Frenchie Bar à Vins",
    "category": "wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Intimate Rue du Nil wine bar; low light, serious bottles, soulful dishes.",
    "longDescription": "Fashion Week favorite with a tiny footprint. Expect sharp small plates and a strong, curated list. Go early or wait outside.",
    "placeId": "ChIJ-XV6kWJv5kcRPqLpy2ahu8g",
    "location": {
      "lat": 48.8678076,
      "lon": 2.3479027,
      "area": "6 Rue du Nil, 75002 Paris, France"
    }
  },
  {
    "slug": "deviant",
    "name": "Deviant",
    "category": "natural_wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Standing natty wine bar near Petites Écuries; food blows minds, vibe immaculate.",
    "longDescription": "No bookings, just roll up. Electric energy, great tunes, and inventive bar food to match the natural wine list."
  },
  {
    "slug": "vivant-2",
    "name": "Vivant 2",
    "category": "natural_wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Dim, sexy nat-wine bistro on Faubourg-Poissonnière.",
    "longDescription": "Feels like a secret: low light, tight tables, and excellent plates. Strong wines, intimate atmosphere.",
    "placeId": "ChIJ6Tfl_Lhv5kcRMr5NkAy_pGg",
    "location": {
      "lat": 48.8738226,
      "lon": 2.3497774,
      "area": "43 R. des Petites Écuries, 75010 Paris, France"
    }
  },
  {
    "slug": "terra-bar-a-vins",
    "name": "Terra Bar à Vins",
    "category": "wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Grill-side wine bar on the 10/11e edge; ask not to sit by the heat.",
    "longDescription": "Great bottles and flame-kissed plates. Choose your seat carefully to avoid the grill blast, then enjoy the ride.",
    "placeId": "ChIJuZgZZQNv5kcRoF2B3Hc_-JY",
    "location": {
      "lat": 48.8643396,
      "lon": 2.3545759,
      "area": "63 Rue des Gravilliers, 75003 Paris, France"
    }
  },
  {
    "slug": "chanceux-galande",
    "name": "Chanceux Galande",
    "category": "wine_bar",
    "status": "PUBLISHED",
    "shortDescription": "Hidden wine bar near Notre-Dame; low-key team and great bottles.",
    "longDescription": "Tucked on Rue Galande, perfect for a quiet drink away from the crowds. Friendly staff, thoughtful selections.",
    "placeId": "ChIJZddIWN1x5kcRM7DB8vNDQow",
    "location": {
      "lat": 48.8517658,
      "lon": 2.3467849,
      "area": "63 Rue Galande, 75005 Paris, France"
    }
  },
  {
    "slug": "the-experimental-cocktail-club",
    "name": "The Experimental Cocktail Club",
    "category": "cocktail_bar",
    "status": "PUBLISHED",
    "shortDescription": "OG Paris speakeasy on Rue Saint-Sauveur; still hits.",
    "longDescription": "Behind a black door sits one of Paris's cocktail pioneers. Quality drinks, buzzy crowd, a reliable first or second stop.",
    "placeId": "ChIJY5aj1Rlu5kcRjAbdhqjInIg",
    "location": {
      "lat": 48.86606399999999,
      "lon": 2.348261,
      "area": "37 Rue Saint-Sauveur, 75002 Paris, France"
    }
  },
  {
    "slug": "prescription-cocktail-club",
    "name": "Prescription Cocktail Club",
    "category": "cocktail_bar",
    "status": "PUBLISHED",
    "shortDescription": "Soft-lit Odéon den with strong pours and classic speakeasy mood.",
    "longDescription": "Low ceilings, plush seating, and bartenders who keep the drinks tight. Easy to lose time here.",
    "placeId": "ChIJ7TWlx9hx5kcRFaK9ELNH0Qk",
    "location": {
      "lat": 48.85500039999999,
      "lon": 2.3379507,
      "area": "23 Rue Mazarine, 75006 Paris, France"
    }
  },
  {
    "slug": "le-syndicat",
    "name": "Le Syndicat",
    "category": "cocktail_bar",
    "status": "PUBLISHED",
    "shortDescription": "French-spirits cocktail bar near Strasbourg-Saint-Denis; creative and loud.",
    "longDescription": "Neighborhood is rough around the edges, drinks are inventive and proudly French. Good energy, good music.",
    "placeId": "ChIJ-SUuzhNu5kcRM6mjAa7Rzb4",
    "location": {
      "lat": 48.8718637,
      "lon": 2.3536501,
      "area": "51 Rue du Faubourg Saint-Denis, 75010 Paris, France"
    }
  },
  {
    "slug": "candelaria",
    "name": "Candelaria",
    "category": "cocktail_bar",
    "status": "PUBLISHED",
    "shortDescription": "Taco shop up front, speakeasy cocktail bar out back; worth the hype.",
    "longDescription": "Grab a taco, slip through the door to the back bar, and settle into strong cocktails in a tight, lively room.",
    "placeId": "ChIJ5-Wt8AZu5kcRwI6zQEwdXv4",
    "location": {
      "lat": 48.8629825,
      "lon": 2.3640307,
      "area": "52 Rue de Saintonge, 75003 Paris, France"
    }
  },
  {
    "slug": "le-tres-particulier",
    "name": "Le Très Particulier",
    "category": "cocktail_bar",
    "status": "PUBLISHED",
    "shortDescription": "Velvet-and-plants conservatory bar in Montmartre's Hôtel Particulier.",
    "longDescription": "Feels like stepping into a movie set: lush, moody, and a bit surreal. Ideal for a late, romantic drink.",
    "placeId": "ChIJc0b_cFBu5kcROcUV0fEH8IA",
    "location": {
      "lat": 48.8879064,
      "lon": 2.3353175,
      "area": "Hôtel Particulier Montmartre, 23 Av. Junot Pavillon D, 75018 Paris, France"
    }
  },
  {
    "slug": "au-top",
    "name": "Au Top",
    "category": "rooftop",
    "status": "PUBLISHED",
    "shortDescription": "Hidden-elevator rooftop near Arts et Métiers with big views.",
    "longDescription": "Enter through the unmarked lift behind a trash enclosure, emerge to a sleek rooftop for dinner and drinks with a skyline backdrop.",
    "placeId": "ChIJb_G6n05v5kcRmVjKyahTO6M",
    "location": {
      "lat": 48.8601406,
      "lon": 2.3609193,
      "area": "93 Rue Vieille du Temple, 75003 Paris, France"
    }
  },
  {
    "slug": "spootnik-bar",
    "name": "Spootnik Bar",
    "category": "cocktail_bar",
    "status": "PUBLISHED",
    "shortDescription": "Underground 11e bar with vinyl-only DJs and immersive, futuristic vibe.",
    "longDescription": "Cinematic lighting, great cocktails, and a deep-cut soundtrack. Perfect second or third stop when you want something different.",
    "placeId": "ChIJCW_Wprlv5kcRXP_zxakkVyc",
    "location": {
      "lat": 48.8642954,
      "lon": 2.354811,
      "area": "57 Rue des Gravilliers, 75003 Paris, France"
    }
  },
  {
    "slug": "bambino",
    "name": "BAMBINO",
    "category": "bar",
    "status": "PUBLISHED",
    "shortDescription": "Dinner that turns into a vinyl dance party; gets wild after 11.",
    "longDescription": "All-vinyl sound, good food, and a crowd that shifts from eating to dancing as the night goes on. Expect a line, expect fun.",
    "placeId": "ChIJB0eTdh9t5kcRU5WG-sCo3bs",
    "location": {
      "lat": 48.8613821,
      "lon": 2.3697899,
      "area": "25 Rue Saint-Sébastien, 75011 Paris, France"
    }
  },
  {
    "slug": "bambou",
    "name": "Bambou",
    "category": "thai",
    "status": "PUBLISHED",
    "shortDescription": "Thai restaurant with a hidden basement bar—couches, pool table, smoky vibes.",
    "longDescription": "Sentier spot for comforting Thai dishes upstairs and a secret lounge downstairs. Feels like a late-night hotel bar in Tokyo.",
    "placeId": "ChIJ__8PhT1u5kcR0iPz_AGQoIk",
    "location": {
      "lat": 48.8693146,
      "lon": 2.3449991,
      "area": "23 Rue des Jeuneurs, 75002 Paris, France"
    }
  },
  {
    "slug": "les-bains-paris",
    "name": "Les Bains Paris",
    "category": "bar",
    "status": "PUBLISHED",
    "shortDescription": "Historic 3e hotel bar/terrace—come for a drink, not the club.",
    "longDescription": "Former nightclub turned hotel bar. Sit outside, have a negroni or cigarette, and move on before it turns clubby.",
    "placeId": "ChIJL5GRNhpu5kcRLPpGl3AtSgE",
    "location": {
      "lat": 48.86386539999999,
      "lon": 2.3519431,
      "area": "7 Rue du Bourg l'Abbé, 75003 Paris, France"
    }
  },
  {
    "slug": "frequence",
    "name": "FREQUENCE",
    "category": "bar",
    "status": "PUBLISHED",
    "shortDescription": "Vinyl bar run by music heads; serious sound system and deep grooves.",
    "longDescription": "Low-key, audiophile-focused, all vinyl. Great cocktails, intimate space, ideal for listening more than talking.",
    "placeId": "ChIJAQB8kAdy5kcRHQ08wmA36wU",
    "location": {
      "lat": 48.85481499999999,
      "lon": 2.3759872,
      "area": "20 Rue Keller, 75011 Paris, France"
    }
  }
] as const;

export function getPublishedRestaurants(): Restaurant[] {
  return restaurants.filter((restaurant) => restaurant.status === "PUBLISHED");
}

export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurants.find((restaurant) => restaurant.slug === slug);
}

export function getPublishedRestaurantBySlug(
  slug: string,
): Restaurant | undefined {
  const restaurant = getRestaurantBySlug(slug);
  return restaurant && restaurant.status === "PUBLISHED" ? restaurant : undefined;
}
