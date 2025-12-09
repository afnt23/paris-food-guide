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
};

export const restaurants: Restaurant[] = [
  {
    slug: "la-ferme-du-pre-catelan",
    name: "La Ferme du Pré Catelan",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Garden bistro in a former stable out in Bois de Boulogne; fries come by the bowl.",
    longDescription:
      "Countryside escape inside the city. Once a horse stable, now a stunning garden bistro by Frédéric Anton. Lunch is relaxed, not stuffy. Order the towering bowl of fries and settle in.",
    location: { lat: 48.86398, lon: 2.25061, area: "Bois de Boulogne / 16e" },
  },
  {
    slug: "les-enfants-du-marche",
    name: "Les Enfants du Marché",
    category: "natural_wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Michelin-level counter hidden in Marché des Enfants Rouges; natural wine and daily plates.",
    longDescription:
      "Chef-led counter inside Marché des Enfants Rouges where plates change with the haul. Sit at the bar, drink natural wine, order whatever is fresh—always creative, always hits.",
    location: { lat: 48.86295, lon: 2.36217, area: "Haut Marais / 3e" },
  },
  {
    slug: "aux-crus-de-bourgogne",
    name: "Aux Crus de Bourgogne",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Classic Bourguignon bistro in Sentier—white cloths, oeuf mayo, steak frites.",
    longDescription:
      "Old-school room that does the Burgundy canon right: oeuf mayo, snails, steak frites, bottles of red. Solid service, zero gimmicks, just a Paris classic.",
  },
  {
    slug: "restaurant-kei",
    name: "Restaurant Kei",
    category: "tasting_menu",
    status: "PUBLISHED",
    shortDescription:
      "3-star Franco-Japanese tasting near the Louvre; immaculate, white-glove service.",
    longDescription:
      "Kei Kobayashi’s flagship: precise, feather-light tasting menus blending French technique and Japanese clarity. Formal but warm, worth the splurge.",
  },
  {
    slug: "table-bruno-verjus",
    name: "Table Bruno Verjus",
    category: "tasting_menu",
    status: "PUBLISHED",
    shortDescription:
      "Hyper-seasonal counter temple on Quai de la Seine; poetic, unforgettable plates.",
    longDescription:
      "Bruno Verjus cooks inches from you at the counter. Former food writer, now philosopher-chef obsessed with product. Expensive, singular, and memorable.",
  },
  {
    slug: "element-terre",
    name: "Element Terre",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Plant-forward modern spot near République with calm energy and clean plating.",
    longDescription:
      "Under-the-radar restaurant doing sustainable, vegetable-driven cooking with finesse. Beautiful plates, relaxed pace, quietly confident.",
  },
  {
    slug: "le-mermoz",
    name: "Le Mermoz",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Refined neo-bistro off the Champs; seasonal plates and natural-leaning wines.",
    longDescription:
      "Airy room in the 8e serving sharp bistro plates—often seafood-led—with a thoughtful wine list. Friendly, polished, never fussy.",
  },
  {
    slug: "le-collier-de-la-reine",
    name: "Le Collier de la Reine",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Candlelit North Marais bistro with classic plates and an easygoing vibe.",
    longDescription:
      "Neighborhood French spot for comforting mains, good bread, and a glass or two. Casual elegance without the pretense.",
  },
  {
    slug: "le-bon-georges",
    name: "Le Bon Georges",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Upscale Saint-Georges bistro with a wine list larger than the bible.",
    longDescription:
      "Pricey but strong. Serious sourcing, classic French cooking, and a massive, well-curated cellar. Book ahead and bring an appetite.",
  },
  {
    slug: "chez-georges",
    name: "Chez Georges",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Heavy old-school French on rue du Mail; come hungry, leave full and happy.",
    longDescription:
      "A time-capsule Parisian bistro: thick sauces, rich mains, and no shortcuts. Legendary for doing the classics with conviction.",
  },
  {
    slug: "septime",
    name: "Septime",
    category: "tasting_menu",
    status: "PUBLISHED",
    shortDescription:
      "Minimalist 1-star tasting in Charonne; thoughtful, light, hard to book.",
    longDescription:
      "Modern tasting menu that feels effortless—produce-led, precise, quietly luxurious. Reservations drop exactly three weeks out at 10 a.m.",
  },
  {
    slug: "le-comptoir-canaille",
    name: "Le Comptoir Canaille",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Family-run comfort bistro: ducky, saucy, buttery, zero ego.",
    longDescription:
      "Neighborhood favorite for rich classics and generous plates. Friendly service, great for a no-fuss, feel-good dinner.",
  },
  {
    slug: "le-dauphin",
    name: "Le Dauphin",
    category: "small_plates",
    status: "PUBLISHED",
    shortDescription:
      "Rem Koolhaas-designed small-plates bar next to Chateaubriand; strong wine.",
    longDescription:
      "Marble-and-mirror interior, buzzing bar vibe, and a tight menu of inventive plates. Great bottles, attractive crowd, always lively.",
  },
  {
    slug: "daroco",
    name: "Daroco",
    category: "italian",
    status: "PUBLISHED",
    shortDescription:
      "Grand Italian/pizza brasserie in an old Jean-Paul Gaultier store.",
    longDescription:
      "High-ceilinged, dramatic room with solid pasta and pizza. Not for purists, but the vibe and the hidden speakeasy downstairs keep it fun.",
  },
  {
    slug: "ogata",
    name: "OGATA",
    category: "tasting_menu",
    status: "PUBLISHED",
    shortDescription:
      "Minimalist Japanese tea house and restaurant; calm, reset energy.",
    longDescription:
      "Architectural, serene multi-level space in the Upper Marais. Best at lunch—order the prix fixe and exhale.",
    location: { lat: 48.86104, lon: 2.36347, area: "Upper Marais / 3e" },
  },
  {
    slug: "abri-soba",
    name: "Abri Soba",
    category: "japanese",
    status: "PUBLISHED",
    shortDescription:
      "Minimal soba counter in SoPi; sake bottles everywhere, duck soba is the move.",
    longDescription:
      "Fresh buckwheat noodles, beautiful porcelain plates, and a tight menu that over-delivers. Intimate, calm, and addictive.",
    location: { lat: 48.87498, lon: 2.34447, area: "South Pigalle / 9e" },
  },
  {
    slug: "menkicchi-ramen",
    name: "Menkicchi Ramen",
    category: "ramen",
    status: "PUBLISHED",
    shortDescription:
      "Tiny rue Sainte-Anne ramen bar; thick miso broth and Kirin on tap.",
    longDescription:
      "Tokyo-level miso bowls with fatty, soulful broth. Ignore the neighbors—this is the one. Cold beer, warm noodles, perfect combo.",
    location: { lat: 48.86649, lon: 2.33556, area: "Rue Sainte-Anne / 1e" },
  },
  {
    slug: "mehmet",
    name: "Mehmet",
    category: "kebab",
    status: "PUBLISHED",
    shortDescription:
      "Charcoal-grilled dürüm kebab with crispy bread and natural wine.",
    longDescription:
      "Walk-up kebab counter serving smoky, rich wraps on blistered bread. Wine is good, people are chill, flavors are big.",
    location: { lat: 48.88974, lon: 2.35515, area: "Rue Ramey / 18e" },
  },
  {
    slug: "omar-dhiab",
    name: "Omar Dhiab",
    category: "tasting_menu",
    status: "PUBLISHED",
    shortDescription:
      "Egyptian-inflected 1-star tasting menu at a friendly price point.",
    longDescription:
      "Creative Franco-Egyptian plates with bright, layered flavors. Lunch deal is a steal for this level; service is warm and generous.",
  },
  {
    slug: "chop-chop-love",
    name: "Chop Chop Love",
    category: "small_plates",
    status: "PUBLISHED",
    shortDescription:
      "Chinese-leaning small plates with a natural wine cave; chefs rotate weekly.",
    longDescription:
      "Oberkampf hangout mixing playful Chinese-ish dishes with a strong natty list. Constantly changing kitchen keeps it fun and surprising.",
  },
  {
    slug: "haikara-izakaya",
    name: "Haikara Izakaya",
    category: "izakaya",
    status: "PUBLISHED",
    shortDescription:
      "Low-lit izakaya in the 11e; skewers, fry, cold beer, minimal talking required.",
    longDescription:
      "Casual Japanese bar for kushiyaki, fried bites, and a few rounds. Dark, cozy, perfect for a laid-back night.",
  },
  {
    slug: "le-404",
    name: "Le 404",
    category: "moroccan",
    status: "PUBLISHED",
    shortDescription:
      "Moody Moroccan spot in the Marais; couscous and tagines done right.",
    longDescription:
      "Feels like stepping into a warm Moroccan home—dark wood, steam, spice, and comforting plates. Stick around for drinks afterward.",
  },
  {
    slug: "dersou",
    name: "Dersou",
    category: "tasting_menu",
    status: "PUBLISHED",
    shortDescription:
      "French-Japanese tasting with cocktail pairings near Ledru-Rollin.",
    longDescription:
      "Serious plates with inventive cocktails to match. Unflashy room, sharp cooking, great for a focused dinner.",
  },
  {
    slug: "la-boutique-de-yamtcha",
    name: "La Boutique de Yam'Tcha",
    category: "fusion",
    status: "PUBLISHED",
    shortDescription:
      "Bao, fusion plates, and tea pairings near Les Halles; tiny and tight.",
    longDescription:
      "Daytime-friendly offshoot of Yam'Tcha serving bao and small plates with thoughtful tea pairings. Space is compact—book or go early.",
  },
  {
    slug: "yamtcha",
    name: "Yam'Tcha",
    category: "tasting_menu",
    status: "PUBLISHED",
    shortDescription:
      "Serious Franco-Chinese tasting menu from Adeline Grattard.",
    longDescription:
      "Elegant, intimate, and layered with tea culture. Expect refined plates, great service, and a splurge-worthy bill.",
  },
  {
    slug: "junk",
    name: "Junk",
    category: "burger",
    status: "PUBLISHED",
    shortDescription:
      "Gooey smash burger near Palais Royal; eat it in the garden.",
    longDescription:
      "Best burger in town if you like it messy and rich. Grab, go to Jardin du Palais Royal, and live a little. Size up or down depending on hunger.",
  },
  {
    slug: "dumbo",
    name: "Dumbo",
    category: "burger",
    status: "PUBLISHED",
    shortDescription:
      "Cult smash burger window—choose your camp: Dumbo vs Junk.",
    longDescription:
      "Short menu, quick turnover, perfectly seared patties. Ideal for a fast, indulgent stop when only a smash burger will do.",
  },
  {
    slug: "cafe-courtial-la-crepe",
    name: "Cafe Courtial, la crêpe",
    category: "creperie",
    status: "PUBLISHED",
    shortDescription:
      "Tiny Left Bank crêperie; low-frills, really good crêpes.",
    longDescription:
      "A handful of seats, a hot griddle, and simple fillings done right. Great solo lunch stop or quick bite between museums.",
  },
  {
    slug: "soma-sando",
    name: "Soma Sando",
    category: "sando",
    status: "PUBLISHED",
    shortDescription:
      "Japanese sandos—egg, pork katsu, all perfectly trimmed and stacked.",
    longDescription:
      "Tokyo street-lunch energy in central Paris. Soft milk bread, crisp cutlets, and clean flavors. Easy takeaway, satisfying every time.",
  },
  {
    slug: "bagels-and-brownies",
    name: "Bagels & Brownies",
    category: "bagel",
    status: "PUBLISHED",
    shortDescription:
      "Reliable bagel shop near Luxembourg; grab and post up in the park.",
    longDescription:
      "Long-running Left Bank bagel spot for a quick, filling bite. Perfect pre- or post-walk around Jardin du Luxembourg.",
    location: { lat: 48.84635, lon: 2.32697, area: "6e / Notre-Dame-des-Champs" },
  },
  {
    slug: "stohrer",
    name: "Stohrer",
    category: "bakery",
    status: "PUBLISHED",
    shortDescription:
      "Historic pâtisserie on rue Montorgueil; eclairs, flan, morning pastry.",
    longDescription:
      "Oldest bakery in Paris. Hit it early for pain au chocolat, eclairs, classic flan, and a pot of vanilla ice cream to take home.",
  },
  {
    slug: "laize-sainte-avoye",
    name: "Laïzé Sainte-Avoye",
    category: "cafe",
    status: "PUBLISHED",
    shortDescription:
      "Taiwanese café oasis in the Marais; balanced vibe and gentle service.",
    longDescription:
      "Calm corner coffee/tea shop with Taiwanese snacks and a relaxed crowd. Ideal post-walk recharge away from the noise.",
    location: { lat: 48.86084, lon: 2.35576, area: "3e / Rue du Temple" },
  },
  {
    slug: "the-coffee",
    name: "The Coffee",
    category: "cafe",
    status: "PUBLISHED",
    shortDescription:
      "Minimal specialty coffee bar on Rue Saint-Gilles; no fluff, just good beans.",
    longDescription:
      "Clean, tight space focused on well-sourced coffee. Quick counter service, great for a no-brainer morning stop.",
    location: { lat: 48.85771, lon: 2.3676, area: "3e / Rue Saint-Gilles" },
  },
  {
    slug: "dreaming-man",
    name: "Dreaming Man",
    category: "cafe",
    status: "PUBLISHED",
    shortDescription:
      "Matcha-forward minimalist café; tiny, peaceful, always delivers.",
    longDescription:
      "Known for excellent matcha and quiet vibes. Small, designy, and reliable when you need a calm caffeine fix.",
  },
  {
    slug: "partisan-cafe",
    name: "Partisan Café",
    category: "cafe",
    status: "PUBLISHED",
    shortDescription:
      "Design-y specialty coffee that leans pretentious—beans and crowd both curated.",
    longDescription:
      "Expect good coffee, a styled space, and a selective soundtrack. If you can handle the attitude, the cups are worth it.",
  },
  {
    slug: "early-june",
    name: "Early June",
    category: "natural_wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Canal-side natural wine bar with rotating chef residencies; daylight hits different.",
    longDescription:
      "Tiny, clean design, and constantly changing food thanks to guest chefs. Great for a Scandinavian-feeling wine lunch or casual night.",
  },
  {
    slug: "l-avant-comptoir-du-marche",
    name: "L'Avant Comptoir du Marché",
    category: "tapas_bar",
    status: "PUBLISHED",
    shortDescription:
      "Peak standing-room apero at Marché St-Germain; loud, fun, endless small bites.",
    longDescription:
      "Wall-to-wall people, French bangers on the speakers, bottles flowing before you notice. Order cheese croquetas, pâté, and the bread-and-butter—if you’re eating.",
  },
  {
    slug: "la-cremerie",
    name: "La Crèmerie",
    category: "wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Tiny 6e cave à vins with charcuterie and cheese; quiet refuge from the rush.",
    longDescription:
      "If Avant Comptoir is slammed, slide here. Old wood shelves, natural-leaning list, and simple plates to snack through a bottle.",
  },
  {
    slug: "o-chateau",
    name: "Ô Chateau",
    category: "wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Polished central wine bar; smooth service, great selection, calm vibe.",
    longDescription:
      "Good first stop for wine without chaos. Broad list, knowledgeable staff, and a relaxed room in the 1e.",
  },
  {
    slug: "freddys",
    name: "Freddy's",
    category: "wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Grilled plates, cider, and natty wines on Rue de Seine; controlled chaos.",
    longDescription:
      "Stand or squeeze into a stool, order a cider, and work through skewers and grilled bites. Semilla next door is the calmer sibling.",
  },
  {
    slug: "caves-saint-gilles",
    name: "Caves Saint Gilles",
    category: "tapas_bar",
    status: "PUBLISHED",
    shortDescription:
      "Loud Spanish tapas cave on Rue Saint-Gilles; sangria jugs mandatory.",
    longDescription:
      "Bread flying, locals shouting, plates of jamón and tortilla hitting the counter. Order the sangria and lean into the mess.",
  },
  {
    slug: "la-perle",
    name: "La Perle",
    category: "bar",
    status: "PUBLISHED",
    shortDescription:
      "Marais all-day bar that spills into the street; skaters, DJs, fashion kids, old locals.",
    longDescription:
      "Iconic hang on Rue Vieille-du-Temple. Come for an apero, stay late, meet everyone. Cool without trying.",
  },
  {
    slug: "shana",
    name: "Shana",
    category: "small_plates",
    status: "PUBLISHED",
    shortDescription:
      "Candlelit small-plates spot with natural wine; rowdy in the right way.",
    longDescription:
      "Cozy tables, fun crowd, and a mix of plates that change often. Bring friends, order broadly, linger.",
  },
  {
    slug: "frenchie-bar-a-vins",
    name: "Frenchie Bar à Vins",
    category: "wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Intimate Rue du Nil wine bar; low light, serious bottles, soulful dishes.",
    longDescription:
      "Fashion Week favorite with a tiny footprint. Expect sharp small plates and a strong, curated list. Go early or wait outside.",
  },
  {
    slug: "deviant",
    name: "Deviant",
    category: "natural_wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Standing natty wine bar near Petites Écuries; food blows minds, vibe immaculate.",
    longDescription:
      "No bookings, just roll up. Electric energy, great tunes, and inventive bar food to match the natural wine list.",
  },
  {
    slug: "vivant-2",
    name: "Vivant 2",
    category: "natural_wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Dim, sexy nat-wine bistro on Faubourg-Poissonnière.",
    longDescription:
      "Feels like a secret: low light, tight tables, and excellent plates. Strong wines, intimate atmosphere.",
  },
  {
    slug: "terra-bar-a-vins",
    name: "Terra Bar à Vins",
    category: "wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Grill-side wine bar on the 10/11e edge; ask not to sit by the heat.",
    longDescription:
      "Great bottles and flame-kissed plates. Choose your seat carefully to avoid the grill blast, then enjoy the ride.",
  },
  {
    slug: "chanceux-galande",
    name: "Chanceux Galande",
    category: "wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Hidden wine bar near Notre-Dame; low-key team and great bottles.",
    longDescription:
      "Tucked on Rue Galande, perfect for a quiet drink away from the crowds. Friendly staff, thoughtful selections.",
  },
  {
    slug: "the-experimental-cocktail-club",
    name: "The Experimental Cocktail Club",
    category: "cocktail_bar",
    status: "PUBLISHED",
    shortDescription:
      "OG Paris speakeasy on Rue Saint-Sauveur; still hits.",
    longDescription:
      "Behind a black door sits one of Paris's cocktail pioneers. Quality drinks, buzzy crowd, a reliable first or second stop.",
  },
  {
    slug: "prescription-cocktail-club",
    name: "Prescription Cocktail Club",
    category: "cocktail_bar",
    status: "PUBLISHED",
    shortDescription:
      "Soft-lit Odéon den with strong pours and classic speakeasy mood.",
    longDescription:
      "Low ceilings, plush seating, and bartenders who keep the drinks tight. Easy to lose time here.",
  },
  {
    slug: "le-syndicat",
    name: "Le Syndicat",
    category: "cocktail_bar",
    status: "PUBLISHED",
    shortDescription:
      "French-spirits cocktail bar near Strasbourg-Saint-Denis; creative and loud.",
    longDescription:
      "Neighborhood is rough around the edges, drinks are inventive and proudly French. Good energy, good music.",
  },
  {
    slug: "candelaria",
    name: "Candelaria",
    category: "cocktail_bar",
    status: "PUBLISHED",
    shortDescription:
      "Taco shop up front, speakeasy cocktail bar out back; worth the hype.",
    longDescription:
      "Grab a taco, slip through the door to the back bar, and settle into strong cocktails in a tight, lively room.",
  },
  {
    slug: "le-tres-particulier",
    name: "Le Très Particulier",
    category: "cocktail_bar",
    status: "PUBLISHED",
    shortDescription:
      "Velvet-and-plants conservatory bar in Montmartre's Hôtel Particulier.",
    longDescription:
      "Feels like stepping into a movie set: lush, moody, and a bit surreal. Ideal for a late, romantic drink.",
  },
  {
    slug: "au-top",
    name: "Au Top",
    category: "rooftop",
    status: "PUBLISHED",
    shortDescription:
      "Hidden-elevator rooftop near Arts et Métiers with big views.",
    longDescription:
      "Enter through the unmarked lift behind a trash enclosure, emerge to a sleek rooftop for dinner and drinks with a skyline backdrop.",
  },
  {
    slug: "spootnik-bar",
    name: "Spootnik Bar",
    category: "cocktail_bar",
    status: "PUBLISHED",
    shortDescription:
      "Underground 11e bar with vinyl-only DJs and immersive, futuristic vibe.",
    longDescription:
      "Cinematic lighting, great cocktails, and a deep-cut soundtrack. Perfect second or third stop when you want something different.",
  },
  {
    slug: "bambino",
    name: "BAMBINO",
    category: "bar",
    status: "PUBLISHED",
    shortDescription:
      "Dinner that turns into a vinyl dance party; gets wild after 11.",
    longDescription:
      "All-vinyl sound, good food, and a crowd that shifts from eating to dancing as the night goes on. Expect a line, expect fun.",
  },
  {
    slug: "bambou",
    name: "Bambou",
    category: "thai",
    status: "PUBLISHED",
    shortDescription:
      "Thai restaurant with a hidden basement bar—couches, pool table, smoky vibes.",
    longDescription:
      "Sentier spot for comforting Thai dishes upstairs and a secret lounge downstairs. Feels like a late-night hotel bar in Tokyo.",
  },
  {
    slug: "les-bains-paris",
    name: "Les Bains Paris",
    category: "bar",
    status: "PUBLISHED",
    shortDescription:
      "Historic 3e hotel bar/terrace—come for a drink, not the club.",
    longDescription:
      "Former nightclub turned hotel bar. Sit outside, have a negroni or cigarette, and move on before it turns clubby.",
  },
  {
    slug: "frequence",
    name: "FREQUENCE",
    category: "bar",
    status: "PUBLISHED",
    shortDescription:
      "Vinyl bar run by music heads; serious sound system and deep grooves.",
    longDescription:
      "Low-key, audiophile-focused, all vinyl. Great cocktails, intimate space, ideal for listening more than talking.",
  },
];

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
