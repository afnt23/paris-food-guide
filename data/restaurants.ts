export type RestaurantStatus = "DRAFT" | "PUBLISHED";

export type Restaurant = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  status: RestaurantStatus;
};

export const restaurants: Restaurant[] = [
  {
    slug: "bistrot-pauline",
    name: "Bistrot Pauline",
    category: "bistro",
    status: "PUBLISHED",
    shortDescription:
      "Slate menus, copper pans, butter-heavy sauces, the sound of cutlery on porcelain.",
    longDescription:
      "Counter-led bistrot with a burnished zinc bar and tight tables. Expect leeks swimming in vinaigrette, veal blanquette with ridiculous amounts of cream, and a tarte fine that arrives still sizzling. Service is brisk but warm; the wine list is short and honest.",
  },
  {
    slug: "bar-des-eclats",
    name: "Bar des Éclats",
    category: "wine_bar",
    status: "PUBLISHED",
    shortDescription:
      "Natural-leaning list, dim light, small plates meant for sharing with strangers at the counter.",
    longDescription:
      "A narrow wine bar hiding behind frosted glass in the Marais. The chalkboard list is mostly Loire and Jura; ask for whatever is drinking with snap that night. Plates are simple—razor clams with fennel, anchovy toast with good butter, a bowl of marinated olives you’ll actually remember.",
  },
  {
    slug: "kumo-ramen",
    name: "Kumo Ramen",
    category: "ramen",
    status: "PUBLISHED",
    shortDescription:
      "Steam on the windows, silky tonkotsu, chashu that falls apart when you look at it.",
    longDescription:
      "Compact, always-packed ramen shop near République. Broths are long-simmered and clean, with noodles that still have bite. The bowl to order is the black garlic tonkotsu with a jammy egg and a side of crisp gyoza. Go early, queue, eat, leave happy.",
  },
  {
    slug: "left-bank-fermentation",
    name: "Left Bank Fermentation",
    category: "bakery",
    status: "PUBLISHED",
    shortDescription:
      "Morning-only pastry window with impeccable viennoiseries and a rotating savory tart.",
    longDescription:
      "A tiny stone-front bakery on a sleepy Left Bank street. Croissants are laminated to the edge of reason, kouign-amann are burnished and salty, and there’s always a seasonal tart (think leek-mimolette or tomato-confit). Coffee is served in enamel cups outside on the curb.",
  },
  {
    slug: "canal-negroni-lab",
    name: "Canal Negroni Lab",
    category: "cocktail_bar",
    status: "DRAFT",
    shortDescription:
      "Low-lit bar built for bitter drinks and vinyl; the staff calibrates your Negroni to mood.",
    longDescription:
      "Hidden upstairs from a record shop along Canal Saint-Martin. The menu is six drinks long, with small riffs on the Negroni using local vermouths and bitters. Expect candlelight, leather stools, and conversation-friendly volume. Currently soft-opening with limited nights.",
  },
  {
    slug: "seabird",
    name: "Seabird",
    category: "seafood",
    status: "DRAFT",
    shortDescription:
      "Raw bar energy with a Parisian accent; towers of shellfish and sharp white wines.",
    longDescription:
      "Polished seafood room near Opéra focused on pristine shellfish. Think towering platters, hand-cut tartares, and a rotating list of grower Champagnes. Still in preview mode with a trimmed-down menu while the team trains.",
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
