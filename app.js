/* ==============================================================================
   FOOD DEVELOPER — Complete Swiggy-Style Single-Page Application
   A premium food discovery and ordering experience for Erode, Tamil Nadu
   ============================================================================== */

"use strict";

/* ==================== DATA STORE ==================== */

const restaurants = [
  {
    id: 1,
    name: "Junior Kuppanna",
    cuisine: "Kongunadu Non-Veg",
    category: "nonveg",
    rating: 4.3,
    priceRange: "₹400–600",
    priceForTwo: 500,
    location: "Karungalpalayam",
    description:
      "Legendary Kongunadu restaurant famous for authentic Seeraga Samba biryani and traditional non-veg meals.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Seeraga Samba Chicken Biryani",
        price: 320,
        rating: 4.5,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=150&h=150&fit=crop",
      },
      {
        name: "Kovai Special Mutton Biryani",
        price: 469,
        rating: 4.6,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=150&h=150&fit=crop",
      },
      {
        name: "JK Chettinad Chicken Gravy",
        price: 340,
        rating: 4.3,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=150&h=150&fit=crop",
      },
      {
        name: "Pallipalayam Chicken",
        price: 350,
        rating: 4.7,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-161005709943-fde6c99db9e1?w=150&h=150&fit=crop",
      },
      {
        name: "Kovai Chicken Curry",
        price: 330,
        rating: 4.2,
        category: "main",
        isVeg: false,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=150&h=150&fit=crop",
      },
      {
        name: "Non-Veg Meals",
        price: 280,
        rating: 4.4,
        category: "meals",
        isVeg: false,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=150&fit=crop",
      },
      {
        name: "Veg Meals",
        price: 200,
        rating: 4.0,
        category: "meals",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Chukka",
        price: 380,
        rating: 4.5,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 2,
    name: "Erode Amman Mess",
    cuisine: "Traditional Kongunadu",
    category: "nonveg",
    rating: 4.4,
    priceRange: "₹300–500",
    priceForTwo: 400,
    location: "Erode Town",
    description:
      "The quintessential Kongunadu mess — rustic, no-frills, and packed with bold flavors.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Chicken Kaatu Varuval",
        price: 260,
        rating: 4.7,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Chukka Boneless",
        price: 270,
        rating: 4.6,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=150&h=150&fit=crop",
      },
      {
        name: "Nallampatti Chicken Rice",
        price: 260,
        rating: 4.5,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1603133872878-6967b6829a20?w=150&h=150&fit=crop",
      },
      {
        name: "Nallampatti Egg Rice",
        price: 235,
        rating: 4.3,
        category: "main",
        isVeg: false,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=150&h=150&fit=crop",
      },
      {
        name: "Nattu Kozhi Kuzhambu",
        price: 290,
        rating: 4.8,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=150&h=150&fit=crop",
      },
      {
        name: "Mushroom Nallampatti Rice",
        price: 250,
        rating: 4.2,
        category: "main",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=150&h=150&fit=crop",
      },
      {
        name: "Parotta (2 pcs)",
        price: 60,
        rating: 4.0,
        category: "sides",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Kola Urundai",
        price: 280,
        rating: 4.4,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 3,
    name: "Maya Bazaar",
    cuisine: "Multi-Cuisine & Grill",
    category: "multicuisine",
    rating: 4.1,
    priceRange: "₹350–500",
    priceForTwo: 450,
    location: "EVN Road, Surampatti",
    description:
      "Clean, AC multi-cuisine restaurant known for grill chicken and tandoori specialties.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Grill Chicken (Full)",
        price: 450,
        rating: 4.3,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=150&h=150&fit=crop",
      },
      {
        name: "Tandoori Chicken (Full)",
        price: 600,
        rating: 4.2,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=150&h=150&fit=crop",
      },
      {
        name: "Nattu Kozhi Masala",
        price: 320,
        rating: 4.4,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Chettinad Soup",
        price: 120,
        rating: 4.0,
        category: "soup",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Kothu Parotta",
        price: 200,
        rating: 4.1,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Egg Kothu Parotta",
        price: 140,
        rating: 3.9,
        category: "main",
        isVeg: false,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=150&h=150&fit=crop",
      },
      {
        name: "Crab Soup",
        price: 125,
        rating: 4.3,
        category: "soup",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Leg Soup",
        price: 125,
        rating: 4.2,
        category: "soup",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 4,
    name: "Barbequeen",
    cuisine: "BBQ, Grill & Biryani",
    category: "biryani",
    rating: 4.2,
    priceRange: "₹400–600",
    priceForTwo: 500,
    location: "Collectorate Area",
    description:
      "Erode's go-to for smoky grills and aromatic mandi biryani with Al Faham chicken.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Chicken Mandi Biryani",
        price: 280,
        rating: 4.3,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Mandi Biryani",
        price: 540,
        rating: 4.4,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=150&h=150&fit=crop",
      },
      {
        name: "Grill Al Faham Chicken",
        price: 300,
        rating: 4.5,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=150&h=150&fit=crop",
      },
      {
        name: "Grill Pepper Fry",
        price: 290,
        rating: 4.2,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=150&h=150&fit=crop",
      },
      {
        name: "Tandoori Chicken",
        price: 189,
        rating: 4.1,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Kebab",
        price: 229,
        rating: 4.0,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=150&h=150&fit=crop",
      },
      {
        name: "Gobi Manchurian",
        price: 190,
        rating: 3.9,
        category: "starter",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Classic Roll",
        price: 120,
        rating: 4.0,
        category: "snack",
        isVeg: false,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 5,
    name: "Kongu Parotta Center",
    cuisine: "Street Food & Parotta",
    category: "streetfood",
    rating: 4.0,
    priceRange: "₹150–300",
    priceForTwo: 225,
    location: "Sathy Road",
    description:
      "The heartbeat of Erode's street food scene — flaky parottas and spicy kothu.",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Veg Kothu Parotta",
        price: 100,
        rating: 4.0,
        category: "main",
        isVeg: true,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Kothu Parotta",
        price: 130,
        rating: 4.2,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Egg Laba",
        price: 85,
        rating: 3.9,
        category: "snack",
        isVeg: false,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=150&h=150&fit=crop",
      },
      {
        name: "Plain Parotta (1 pc)",
        price: 35,
        rating: 4.0,
        category: "sides",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Chilli Parotta",
        price: 120,
        rating: 4.3,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Fry",
        price: 160,
        rating: 4.1,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-161005709943-fde6c99db9e1?w=150&h=150&fit=crop",
      },
      {
        name: "Egg Roast",
        price: 105,
        rating: 4.0,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Curry Veechu Parotta",
        price: 130,
        rating: 4.4,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 6,
    name: "Olive N Basil",
    cuisine: "Italian & Continental",
    category: "multicuisine",
    rating: 4.1,
    priceRange: "₹500–800",
    priceForTwo: 650,
    location: "Perundurai Road",
    description:
      "Erode's first olive-oil restaurant bringing Italian flavors to Kongunadu.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Margherita Pizza",
        price: 250,
        rating: 4.2,
        category: "main",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop",
      },
      {
        name: "Farmhouse Pizza",
        price: 320,
        rating: 4.3,
        category: "main",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=150&h=150&fit=crop",
      },
      {
        name: "Penne Arrabiata",
        price: 280,
        rating: 4.0,
        category: "main",
        isVeg: true,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=150&h=150&fit=crop",
      },
      {
        name: "Classic Caesar Salad",
        price: 220,
        rating: 4.1,
        category: "salad",
        isVeg: false,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=150&h=150&fit=crop",
      },
      {
        name: "Grilled Chicken Sandwich",
        price: 200,
        rating: 4.2,
        category: "snack",
        isVeg: false,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1567234669013-2167de01f705?w=150&h=150&fit=crop",
      },
      {
        name: "Mushroom Soup",
        price: 150,
        rating: 4.0,
        category: "soup",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=150&h=150&fit=crop",
      },
      {
        name: "Chocolate Brownie",
        price: 180,
        rating: 4.4,
        category: "dessert",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=150&h=150&fit=crop",
      },
      {
        name: "Cold Coffee",
        price: 120,
        rating: 4.1,
        category: "beverage",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 7,
    name: "Adyar Ananda Bhavan",
    cuisine: "Pure Vegetarian",
    category: "veg",
    rating: 4.0,
    priceRange: "₹250–400",
    priceForTwo: 325,
    location: "Erode Fort, Mettur Road",
    description:
      "Trusted name in South Indian vegetarian dining — crispy dosas, fluffy idlis, legendary coffee.",
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop",
    menu: [
      {
        name: "South Indian Thali Meals",
        price: 180,
        rating: 4.2,
        category: "meals",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=150&fit=crop",
      },
      {
        name: "Rava Masala Dosa",
        price: 95,
        rating: 4.3,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1668236543090-82bbe735b0d0?w=150&h=150&fit=crop",
      },
      {
        name: "Onion Rava Dosa",
        price: 100,
        rating: 4.1,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1668236543090-82bbe735b0d0?w=150&h=150&fit=crop",
      },
      {
        name: "Mini Tiffin Combo",
        price: 130,
        rating: 4.0,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?w=150&h=150&fit=crop",
      },
      {
        name: "Assorted Sweets (250g)",
        price: 195,
        rating: 4.4,
        category: "sweets",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop",
      },
      {
        name: "Chilli Bajji (6 pcs)",
        price: 65,
        rating: 3.9,
        category: "snack",
        isVeg: true,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Filter Coffee",
        price: 40,
        rating: 4.5,
        category: "beverage",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=150&h=150&fit=crop",
      },
      {
        name: "Pongal Vada Combo",
        price: 90,
        rating: 4.2,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 8,
    name: "Khalids Biriyani",
    cuisine: "Biryani Specialist",
    category: "biryani",
    rating: 4.0,
    priceRange: "₹300–450",
    priceForTwo: 375,
    location: "Perundurai Road",
    description:
      "A biryani purist's paradise — every grain of rice infused with dum-style flavor.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Chicken Dum Biriyani (Reg)",
        price: 230,
        rating: 4.2,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Dum Biriyani (Lrg)",
        price: 260,
        rating: 4.3,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Dum Biriyani (Reg)",
        price: 330,
        rating: 4.4,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Dum Biriyani (Lrg)",
        price: 360,
        rating: 4.5,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Mughal Biriyani",
        price: 260,
        rating: 4.1,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Mughal Biriyani",
        price: 360,
        rating: 4.3,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken 65 Biriyani",
        price: 270,
        rating: 4.2,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=150&h=150&fit=crop",
      },
      {
        name: "Raita",
        price: 40,
        rating: 3.8,
        category: "sides",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 9,
    name: "Anjappar Chettinad",
    cuisine: "Chettinad Non-Veg",
    category: "nonveg",
    rating: 4.1,
    priceRange: "₹400–600",
    priceForTwo: 500,
    location: "Chidambaram Colony",
    description:
      "Fiery Chettinad spices meet premium meats — bold statement of flavor.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Chettinad Chicken Masala",
        price: 320,
        rating: 4.3,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken 65",
        price: 250,
        rating: 4.2,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Pepper Chicken Dry",
        price: 300,
        rating: 4.4,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Sukka Varuval",
        price: 350,
        rating: 4.5,
        category: "starter",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=150&h=150&fit=crop",
      },
      {
        name: "Mutton Kulambu",
        price: 330,
        rating: 4.3,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=150&h=150&fit=crop",
      },
      {
        name: "Chicken Biryani",
        price: 280,
        rating: 4.1,
        category: "biryani",
        isVeg: false,
        isSpicy: true,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=150&h=150&fit=crop",
      },
      {
        name: "Crab Masala",
        price: 380,
        rating: 4.6,
        category: "main",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=150&h=150&fit=crop",
      },
      {
        name: "Nandu Rasam",
        price: 150,
        rating: 4.4,
        category: "soup",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=150&h=150&fit=crop",
      },
    ],
  },
  {
    id: 10,
    name: "Karuppusamy Hotel",
    cuisine: "South Indian Tiffin",
    category: "veg",
    rating: 4.2,
    priceRange: "₹100–250",
    priceForTwo: 175,
    location: "Erode Town",
    description:
      "Where Erode wakes up every morning — crispy dosas, soft idlis, best filter coffee.",
    image:
      "https://images.unsplash.com/photo-1668236543090-82bbe735b0d0?w=600&h=400&fit=crop",
    menu: [
      {
        name: "Masala Dosa",
        price: 70,
        rating: 4.4,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1668236543090-82bbe735b0d0?w=150&h=150&fit=crop",
      },
      {
        name: "Ghee Roast Dosa",
        price: 85,
        rating: 4.5,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1668236543090-82bbe735b0d0?w=150&h=150&fit=crop",
      },
      {
        name: "Onion Uttapam",
        price: 75,
        rating: 4.2,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1668236543090-82bbe735b0d0?w=150&h=150&fit=crop",
      },
      {
        name: "Idli (3 pcs) with Sambar",
        price: 50,
        rating: 4.3,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?w=150&h=150&fit=crop",
      },
      {
        name: "Pongal",
        price: 65,
        rating: 4.1,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?w=150&h=150&fit=crop",
      },
      {
        name: "Vada (2 pcs)",
        price: 50,
        rating: 4.2,
        category: "snack",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150&h=150&fit=crop",
      },
      {
        name: "Filter Coffee",
        price: 30,
        rating: 4.6,
        category: "beverage",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        image:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=150&h=150&fit=crop",
      },
      {
        name: "Set Dosa (3 pcs)",
        price: 80,
        rating: 4.3,
        category: "tiffin",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        image:
          "https://images.unsplash.com/photo-1668236543090-82bbe735b0d0?w=150&h=150&fit=crop",
      },
    ],
  },
];

/* ==================== SUGGESTIONS DATA ==================== */

const suggestions = [
  {
    id: "best-biryani",
    title: "Best Biryani in Erode",
    icon: "🔥",
    description: "Highest-rated biryani dishes across all restaurants",
  },
  {
    id: "budget-friendly",
    title: "Budget Friendly",
    icon: "💰",
    description: "Great food without breaking the bank",
  },
  {
    id: "top-rated",
    title: "Top Rated",
    icon: "⭐",
    description: "Restaurants loved by locals",
  },
  {
    id: "must-try",
    title: "Must Try Kongunadu",
    icon: "🍗",
    description: "Signature regional dishes you cannot miss",
  },
  {
    id: "best-veg",
    title: "Best Vegetarian",
    icon: "🥬",
    description: "Top-rated vegetarian picks",
  },
  {
    id: "spice-lovers",
    title: "Spice Lovers",
    icon: "🌶️",
    description: "For those who like it hot",
  },
];

/* ==================== APPLICATION STATE ==================== */

let state = {
  activeFilter: "all",
  searchQuery: "",
  activeSuggestion: "best-biryani",
  modalRestaurantId: null,
  comments: JSON.parse(localStorage.getItem("foodDevComments")) || {},
  cart: JSON.parse(localStorage.getItem("foodDevCart")) || [],
  appliedPromo: "",
  promoDiscount: 0,
};

/* ==================== UTILITY FUNCTIONS ==================== */

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function formatPrice(price) {
  return "₹" + price;
}

function renderStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      html += `
        <svg class="star-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:12px; height:12px; fill:#f7ea48; display:inline-block; margin-right:1px; vertical-align:middle;">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      `;
    } else if (rating >= i - 0.5) {
      const gradId = "grad-" + Math.random().toString(36).substr(2, 5);
      html += `
        <svg class="star-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:12px; height:12px; display:inline-block; margin-right:1px; vertical-align:middle;">
          <defs>
            <linearGradient id="${gradId}">
              <stop offset="50%" stop-color="#f7ea48"/>
              <stop offset="50%" stop-color="rgba(128, 128, 128, 0.25)"/>
            </linearGradient>
          </defs>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#${gradId})"/>
        </svg>
      `;
    } else {
      html += `
        <svg class="star-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:12px; height:12px; fill:rgba(128, 128, 128, 0.25); display:inline-block; margin-right:1px; vertical-align:middle;">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      `;
    }
  }
  return html;
}

function getCommentCount(restaurantId) {
  return (state.comments[restaurantId] || []).length;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("toast--visible");
  setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 3000);
}

/* ==================== RENDER RESTAURANT CARDS ==================== */

function renderRestaurantCards(restaurantList) {
  const grid = document.getElementById("restaurant-grid");
  if (!grid) return;

  if (restaurantList.length === 0) {
    grid.innerHTML = `
      <div class="no-results reveal reveal--visible" style="grid-column: 1 / -1;">
        <i class="fas fa-search no-results__icon"></i>
        <h3 class="no-results__text">No Restaurants Found</h3>
        <p class="no-results__hint">Try refining your search keyword or changing filters.</p>
      </div>
    `;
    return;
  }

  const cardsHTML = restaurantList
    .map((r) => {
      const commentCount = getCommentCount(r.id);
      return `
      <article class="restaurant-card reveal" data-id="${r.id}">
        <div class="restaurant-card__image-wrap">
          <img class="restaurant-card__image" src="${r.image}" alt="${r.name}" loading="lazy">
          <span class="restaurant-card__cuisine">${r.cuisine}</span>
        </div>
        <div class="restaurant-card__body">
          <h3 class="restaurant-card__name">${r.name}</h3>
          <div class="restaurant-card__meta">
            <span class="restaurant-card__rating">
              <svg class="icon-svg icon-svg--star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:12px; height:12px; fill:#1d0b0d; display:inline-block; vertical-align:middle; margin-right:4px;">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              ${r.rating}
            </span>
            <span class="restaurant-card__price">${r.priceRange} for two</span>
          </div>
          <p class="restaurant-card__location"><i class="fas fa-map-marker-alt"></i> ${r.location}</p>
          <div class="restaurant-card__footer">
            <span class="restaurant-card__comments"><i class="far fa-comment"></i> ${commentCount} reviews</span>
            <button class="btn-ghost">EXPLORE 
              <svg class="icon-svg icon-svg--arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:14px; height:14px; fill:currentColor; display:inline-block; vertical-align:middle; margin-left:4px; transition: transform 0.3s;">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  grid.innerHTML = cardsHTML;

  grid.querySelectorAll(".restaurant-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id, 10);
      openModal(id);
    });
  });

  observeRevealElements();
}

/* ==================== FILTER & SEARCH ==================== */

function filterRestaurants() {
  let filtered = [...restaurants];

  if (state.activeFilter !== "all") {
    filtered = filtered.filter((r) => {
      if (r.category === state.activeFilter) return true;
      if (state.activeFilter === "veg") {
        const vegCount = r.menu.filter((item) => item.isVeg).length;
        return vegCount > r.menu.length / 2;
      }
      return false;
    });
  }

  if (state.searchQuery) {
    const q = state.searchQuery;
    filtered = filtered.filter((r) => {
      if (r.name.toLowerCase().includes(q)) return true;
      if (r.cuisine.toLowerCase().includes(q)) return true;
      if (r.location.toLowerCase().includes(q)) return true;
      if (r.menu.some((item) => item.name.toLowerCase().includes(q)))
        return true;
      return false;
    });
  }

  renderRestaurantCards(filtered);
}

function setupFilters() {
  document.querySelectorAll(".filter__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter__btn")
        .forEach((b) => b.classList.remove("filter__btn--active"));
      btn.classList.add("filter__btn--active");
      state.activeFilter = btn.dataset.filter;
      filterRestaurants();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  const handleSearch = debounce(() => {
    state.searchQuery = searchInput.value.trim().toLowerCase();
    filterRestaurants();
  }, 300);

  searchInput.addEventListener("input", handleSearch);
}

/* ==================== CART SYSTEM MODULE ==================== */

function saveCart() {
  localStorage.setItem("foodDevCart", JSON.stringify(state.cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalQty;
  badge.dataset.count = totalQty;
}

function addToCart(restaurantId, itemName, price) {
  const rest = restaurants.find((r) => r.id === restaurantId);
  const restName = rest ? rest.name : "Restaurant";
  const existing = state.cart.find(
    (item) => item.restaurantId === restaurantId && item.itemName === itemName,
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: Date.now() + Math.random().toString(36).substr(2, 5),
      restaurantId,
      restaurantName: restName,
      itemName,
      price,
      quantity: 1,
    });
  }
  saveCart();
  showToast(`${itemName} added to cart!`);
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter((item) => item.id !== itemId);
  saveCart();
  renderCart();
}

function updateCartQuantity(itemId, delta) {
  const item = state.cart.find((i) => i.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((i) => i.id !== itemId);
  }
  saveCart();
  renderCart();
}

function clearCart() {
  state.cart = [];
  state.appliedPromo = "";
  state.promoDiscount = 0;
  const promoInput = document.getElementById("promo-code");
  if (promoInput) promoInput.value = "";
  saveCart();
  renderCart();
}

function openCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("cart-overlay");
  if (sidebar) sidebar.classList.add("cart-sidebar--active");
  if (overlay) overlay.classList.add("cart-overlay--active");
  document.body.style.overflow = "hidden";
  renderCart();
}

function closeCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("cart-overlay");
  if (sidebar) sidebar.classList.remove("cart-sidebar--active");
  if (overlay) overlay.classList.remove("cart-overlay--active");
  document.body.style.overflow = "";
}

function renderCart() {
  const itemsContainer = document.getElementById("cart-items");
  const footer = document.getElementById("cart-footer");
  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-sidebar__empty">
        <svg style="width:64px; height:64px; fill:none; stroke:#dbe2dc; stroke-width:1.5; margin-bottom:16px;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>Your shopping cart is empty.</p>
        <button class="btn-primary" style="margin-top:20px;" onclick="closeCart()">Start Ordering</button>
      </div>
    `;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "block";

  itemsContainer.innerHTML = state.cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__info">
        <div class="cart-item__restaurant">${item.restaurantName}</div>
        <div class="cart-item__name">${item.itemName}</div>
        <div class="cart-item__controls">
          <button class="cart-item__qty-btn" onclick="updateCartQuantity('${item.id}', -1)">−</button>
          <span class="cart-item__qty">${item.quantity}</span>
          <button class="cart-item__qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
          <button class="cart-item__remove" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      <div class="cart-item__price">₹${item.price * item.quantity}</div>
    </div>
  `,
    )
    .join("");

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  let discountVal = 0;
  const discountRow = document.getElementById("discount-row");
  const discountText = document.getElementById("cart-discount");

  if (state.promoDiscount > 0) {
    discountVal = Math.round(subtotal * (state.promoDiscount / 100));
    if (discountRow) discountRow.style.display = "flex";
    if (discountText) discountText.textContent = `-₹${discountVal}`;
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const subtotalAfterDiscount = Math.max(0, subtotal - discountVal);
  const tax = Math.round(subtotalAfterDiscount * 0.05);
  const total = subtotalAfterDiscount + tax;

  document.getElementById("cart-subtotal").textContent = `₹${subtotal}`;
  document.getElementById("cart-tax").textContent = `₹${tax}`;
  document.getElementById("cart-total").textContent = `₹${total}`;
}

function proceedToPayment() {
  if (state.cart.length === 0) return;

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discountVal =
    state.promoDiscount > 0
      ? Math.round(subtotal * (state.promoDiscount / 100))
      : 0;
  const subtotalAfterDiscount = Math.max(0, subtotal - discountVal);
  const tax = Math.round(subtotalAfterDiscount * 0.05);
  const total = subtotalAfterDiscount + tax;
  const itemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const itemsContainer = document.getElementById("cart-items");
  const footer = document.getElementById("cart-footer");

  if (footer) footer.style.display = "none";

  itemsContainer.innerHTML = `
    <div class="order-success">
      <div class="order-success__icon" style="background:#fc8019;">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
      <h3>Processing Payment</h3>
      <p>Simulating secure Swiggy-Pay transaction for ₹${total}...</p>
    </div>
  `;

  setTimeout(() => {
    itemsContainer.innerHTML = `
      <div class="order-success">
        <div class="order-success__icon" style="background:#103b15;">
          <svg style="width:32px; height:32px; fill:none; stroke:#f7ea48; stroke-width:3;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3>Order Placed!</h3>
        <p>Your payment of ₹${total} was successful. Your order for ${itemCount} food items has been sent to the kitchen.</p>
        <button class="btn-primary" onclick="closeCart()">Continue Browsing</button>
      </div>
    `;
    state.cart = [];
    state.appliedPromo = "";
    state.promoDiscount = 0;
    const promoInput = document.getElementById("promo-code");
    if (promoInput) promoInput.value = "";
    saveCart();
    showToast("Payment Successful! Order Confirmed.");
  }, 2000);
}

function setupPromoCodes() {
  const applyBtn = document.getElementById("apply-promo-btn");
  const promoInput = document.getElementById("promo-code");

  if (applyBtn && promoInput) {
    applyBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) {
        showToast("Please enter a coupon code.");
        return;
      }

      if (code === "SWIGGY50") {
        state.appliedPromo = "SWIGGY50";
        state.promoDiscount = 50;
        showToast("Success! 50% discount applied to your order.");
        renderCart();
      } else if (code === "WELCOME10") {
        state.appliedPromo = "WELCOME10";
        state.promoDiscount = 10;
        showToast("Success! 10% discount applied to your order.");
        renderCart();
      } else {
        showToast("Invalid coupon code.");
      }
    });
  }
}

/* ==================== TABLE RESERVATION SYSTEM ==================== */

function openTableModal() {
  const overlay = document.getElementById("table-modal-overlay");
  if (overlay) overlay.classList.add("table-modal-overlay--active");
  document.body.style.overflow = "hidden";
}

function closeTableModal() {
  const overlay = document.getElementById("table-modal-overlay");
  if (overlay) overlay.classList.remove("table-modal-overlay--active");
  document.body.style.overflow = "";
}

function setupTableReservation() {
  const openBtn = document.getElementById("book-table-btn");
  const closeBtn = document.getElementById("table-modal-close");
  const overlay = document.getElementById("table-modal-overlay");
  const form = document.getElementById("table-form");

  if (openBtn) openBtn.addEventListener("click", openTableModal);
  if (closeBtn) closeBtn.addEventListener("click", closeTableModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeTableModal();
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("table-name").value.trim();
      const count = document.getElementById("table-guests").value;
      const date = document.getElementById("table-date").value;
      const time = document.getElementById("table-time").value;

      if (!name || !count || !date || !time) {
        showToast("Please fill all reservation details.");
        return;
      }

      showToast(
        `Success! Table booked for ${count} guests on ${date} at ${time}.`,
      );
      form.reset();
      closeTableModal();
    });
  }
}

/* ==================== MODAL SYSTEM ==================== */

function openModal(restaurantId) {
  const r = restaurants.find((rest) => rest.id === restaurantId);
  if (!r) return;

  state.modalRestaurantId = restaurantId;

  const menuHTML = r.menu
    .map((item) => {
      let badges = "";
      if (item.isVeg)
        badges +=
          '<span class="menu__item-badge menu__item-badge--veg">VEG</span>';
      if (item.isSpicy)
        badges +=
          '<span class="menu__item-badge menu__item-badge--spicy">🌶 SPICY</span>';
      if (item.isPopular)
        badges +=
          '<span class="menu__item-badge menu__item-badge--popular">★ POPULAR</span>';

      return `
      <div class="menu__item" data-veg="${item.isVeg}" style="display:flex; gap:16px; align-items:center; padding: 16px 0;">
        <img src="${item.image}" alt="${item.name}" style="width:70px; height:70px; object-fit:cover; border-radius:1px;" loading="lazy">
        <div class="menu__item-info" style="flex:1;">
          <div class="menu__item-name" style="font-weight: 500; font-size: 16px; margin-bottom:2px;">${item.name}</div>
          <div class="menu__item-badges" style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom: 8px;">
            ${badges}
          </div>
          <button class="menu__item-add" onclick="addToCart(${r.id}, '${item.name.replace(/'/g, "\\'")}', ${item.price})">
            <i class="fas fa-plus"></i> ADD TO CART
          </button>
        </div>
        <div class="menu__item-right" style="text-align:right;">
          <div class="menu__item-price" style="font-weight: 600;">₹${item.price}</div>
          <div class="menu__item-rating" style="display:flex; align-items:center; gap:3px; justify-content:flex-end; font-size:12px; color:#f7ea48; margin-top:4px;">
            ${renderStars(item.rating)}
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  let starButtons = "";
  for (let i = 1; i <= 5; i++) {
    starButtons += `<button type="button" class="comments__star" data-value="${i}"><i class="far fa-star"></i></button>`;
  }

  const commentsListHTML = buildCommentsHTML(restaurantId);

  const modalHTML = `
    <div class="modal">
      <button class="modal__close" id="modal-close">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2.5; display:block;"><path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <img class="modal__hero" src="${r.image}" alt="${r.name}">
      <div class="modal__header">
        <h2 class="modal__name">${r.name}</h2>
        <div class="modal__meta">
          <span class="modal__badge modal__badge--rating">
            <svg class="icon-svg icon-svg--star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:12px; height:12px; fill:#1d0b0d; display:inline-block; vertical-align:middle; margin-right:4px;">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            ${r.rating}
          </span>
          <span class="modal__badge">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:14px; height:14px; fill:none; stroke:currentColor; stroke-width:2; margin-right:4px; display:inline-block; vertical-align:middle;"><path d="M12 2v20M17 5H7a2 2 0 00-2 2v3a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${r.cuisine}
          </span>
          <span class="modal__badge">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:14px; height:14px; fill:none; stroke:currentColor; stroke-width:2; margin-right:4px; display:inline-block; vertical-align:middle;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${r.location}
          </span>
          <span class="modal__badge">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:12px; height:12px; fill:none; stroke:currentColor; stroke-width:2.5; margin-right:4px; display:inline-block; vertical-align:middle;"><path d="M6 4h12M6 10h12M6 4c0 6 8 6 8 6H6v8l6 4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${r.priceRange}
          </span>
        </div>
      </div>
      <p class="modal__desc">${r.description}</p>
      <div class="menu">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #103b15; padding:24px 0 12px; margin-bottom:12px;">
          <h3 class="menu__title" style="margin:0; border:none; padding:0; text-transform:uppercase;">Full Menu</h3>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:12px; font-weight:600; letter-spacing:0.84px; text-transform:uppercase; color:#103b15; opacity:0.7;">Veg Only</span>
            <label class="switch">
              <input type="checkbox" id="modal-veg-toggle">
              <span class="slider"></span>
            </label>
          </div>
        </div>
        <div id="modal-menu-list">
          ${menuHTML}
        </div>
      </div>
      <div class="comments">
        <h3 class="comments__title">Reviews & Comments</h3>
        <form class="comments__form" id="comment-form">
          <div class="comments__row">
            <input class="comments__input" type="text" id="comment-name" placeholder="Your name" required>
            <div class="comments__stars" id="star-rating">
              <span class="comments__stars-label">Rate:</span>
              ${starButtons}
            </div>
          </div>
          <textarea class="comments__textarea" id="comment-text" placeholder="Share your experience..." required></textarea>
          <button type="submit" class="btn-primary comments__submit">Submit Review <i class="fas fa-paper-plane"></i></button>
        </form>
        <div class="comments__list" id="comments-list">
          ${commentsListHTML}
        </div>
      </div>
    </div>
  `;

  const modalContent = document.getElementById("modal-content");
  if (modalContent) modalContent.innerHTML = modalHTML;

  const vegToggle = document.getElementById("modal-veg-toggle");
  if (vegToggle) {
    vegToggle.addEventListener("change", (e) => {
      const isVegOnly = e.target.checked;
      const menuItems = document.querySelectorAll(".menu__item");
      menuItems.forEach((item) => {
        const isVeg = item.getAttribute("data-veg") === "true";
        if (isVegOnly && !isVeg) {
          item.style.display = "none";
        } else {
          item.style.display = "flex";
        }
      });
    });
  }

  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.add("modal-overlay--active");
  document.body.style.overflow = "hidden";

  const closeBtn = document.getElementById("modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeModal();
    });
  }

  const ratingGetter = setupStarRating();

  const commentForm = document.getElementById("comment-form");
  if (commentForm) {
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("comment-name");
      const textInput = document.getElementById("comment-text");
      const name = nameInput.value.trim();
      const text = textInput.value.trim();
      const rating = ratingGetter();

      if (!name || !text) {
        showToast("Please fill in all fields.");
        return;
      }
      if (rating === 0) {
        showToast("Please select a star rating.");
        return;
      }

      addComment(restaurantId, name, rating, text);
      nameInput.value = "";
      textInput.value = "";
      document.querySelectorAll(".comments__star").forEach((star) => {
        star.classList.remove("comments__star--filled");
        star.querySelector("i").className = "far fa-star";
      });
    });
  }
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.remove("modal-overlay--active");
  document.body.style.overflow = "";
  state.modalRestaurantId = null;
}

/* ==================== STAR RATING INPUT ==================== */

function setupStarRating() {
  let selectedRating = 0;
  const stars = document.querySelectorAll(".comments__star");

  function fillStarsUpTo(index) {
    stars.forEach((star, i) => {
      if (i < index) {
        star.classList.add("comments__star--filled");
        star.querySelector("i").className = "fas fa-star";
      } else {
        star.classList.remove("comments__star--filled");
        star.querySelector("i").className = "far fa-star";
      }
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.dataset.value, 10);
      fillStarsUpTo(selectedRating);
    });

    star.addEventListener("mouseenter", () => {
      const val = parseInt(star.dataset.value, 10);
      fillStarsUpTo(val);
    });

    star.addEventListener("mouseleave", () => {
      fillStarsUpTo(selectedRating);
    });
  });

  return () => selectedRating;
}

/* ==================== COMMENTS SYSTEM MODULE ==================== */

function buildCommentsHTML(restaurantId) {
  const comments = state.comments[restaurantId] || [];
  if (comments.length === 0) {
    return `<div class="comments__empty">No reviews yet. Be the first to share your experience!</div>`;
  }

  return [...comments]
    .reverse()
    .map(
      (comment) => `
    <div class="comment-item">
      <div class="comment-item__header">
        <span class="comment-item__name">${comment.name}</span>
        <span class="comment-item__date">${comment.date}</span>
      </div>
      <div class="comment-item__rating">${renderStars(comment.rating)}</div>
      <p class="comment-item__text">${comment.text}</p>
    </div>
  `,
    )
    .join("");
}

function addComment(restaurantId, name, rating, text) {
  if (!state.comments[restaurantId]) {
    state.comments[restaurantId] = [];
  }

  state.comments[restaurantId].push({
    id: Date.now(),
    name,
    rating,
    text,
    date: new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  });

  localStorage.setItem("foodDevComments", JSON.stringify(state.comments));

  const list = document.getElementById("comments-list");
  if (list) list.innerHTML = buildCommentsHTML(restaurantId);

  filterRestaurants();
  showToast("Review submitted successfully!");
}

/* ==================== SUGGESTIONS SYSTEM MODULE ==================== */

function setupSuggestionTabs() {
  document.querySelectorAll(".suggestions__tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".suggestions__tab")
        .forEach((t) => t.classList.remove("suggestions__tab--active"));
      tab.classList.add("suggestions__tab--active");
      state.activeSuggestion = tab.dataset.suggestion;
      renderSuggestions();
    });
  });
}

function renderSuggestions() {
  const results = document.getElementById("suggestions-results");
  if (!results) return;

  let contentHTML = "";

  if (state.activeSuggestion === "budget-friendly") {
    const filtered = restaurants
      .filter((r) => r.priceForTwo <= 300)
      .sort((a, b) => b.rating - a.rating);
    contentHTML = `
      <div class="suggestion-grid">
        ${filtered
          .map(
            (r) => `
          <div class="suggestion-item" onclick="openModal(${r.id})">
            <div class="suggestion-item__info">
              <div class="suggestion-item__name">${r.name}</div>
              <div class="suggestion-item__restaurant">${r.cuisine} • ${r.priceRange} for two</div>
            </div>
            <div class="suggestion-item__right">
              <div class="suggestion-item__price">★ ${r.rating}</div>
              <div class="suggestion-item__rating">${r.location}</div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  } else if (state.activeSuggestion === "top-rated") {
    const filtered = restaurants
      .filter((r) => r.rating >= 4.2)
      .sort((a, b) => b.rating - a.rating);
    contentHTML = `
      <div class="suggestion-grid">
        ${filtered
          .map(
            (r) => `
          <div class="suggestion-item" onclick="openModal(${r.id})">
            <div class="suggestion-item__info">
              <div class="suggestion-item__name">${r.name}</div>
              <div class="suggestion-item__restaurant">${r.cuisine} • ${r.priceRange} for two</div>
            </div>
            <div class="suggestion-item__right">
              <div class="suggestion-item__price">★ ${r.rating}</div>
              <div class="suggestion-item__rating">${r.location}</div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  } else {
    let items = [];
    restaurants.forEach((r) => {
      r.menu.forEach((item) => {
        let match = false;
        if (
          state.activeSuggestion === "best-biryani" &&
          item.category === "biryani"
        )
          match = true;
        if (
          state.activeSuggestion === "must-try" &&
          item.isPopular &&
          item.isSpicy &&
          r.category === "nonveg"
        )
          match = true;
        if (state.activeSuggestion === "best-veg" && item.isVeg) match = true;
        if (state.activeSuggestion === "spice-lovers" && item.isSpicy)
          match = true;

        if (match) {
          items.push({
            ...item,
            restaurantId: r.id,
            restaurantName: r.name,
            location: r.location,
          });
        }
      });
    });

    items.sort((a, b) => b.rating - a.rating);
    const topItems = items.slice(0, 8);

    contentHTML = `
      <div class="suggestion-grid">
        ${topItems
          .map(
            (item) => `
          <div class="suggestion-item" onclick="openModal(${item.restaurantId})">
            <div class="suggestion-item__info">
              <div class="suggestion-item__name" style="display:flex; align-items:center; gap:8px;">
                <img src="${item.image}" alt="${item.name}" style="width:36px; height:36px; object-fit:cover; border-radius:1px;">
                <span>${item.name}</span>
              </div>
              <div class="suggestion-item__restaurant">${item.restaurantName} • ${item.location}</div>
            </div>
            <div class="suggestion-item__right">
              <div class="suggestion-item__price">₹${item.price}</div>
              <div class="suggestion-item__rating" style="display:flex; align-items:center; gap:2px; justify-content:flex-end;">
                ${renderStars(item.rating)}
              </div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  }

  results.innerHTML = contentHTML;
}

/* ==================== SCROLL & ANIMATION EFFECTS ==================== */

function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("back-to-top--visible");
    } else {
      btn.classList.remove("back-to-top--visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  elements.forEach((el) => observer.observe(el));
}

function setupScrollReveal() {
  observeRevealElements();
}

function setupNavScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
  });
}

function setupHeroParallax() {
  const bg = document.querySelector(".hero__bg");
  if (!bg) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    bg.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
}

/* ==================== MOBILE NAVIGATION ==================== */

function setupMobileNav() {
  const burger = document.getElementById("hamburger-btn");
  const close = document.getElementById("mobile-nav-close");
  const nav = document.getElementById("mobile-nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.add("mobile-nav--active");
    });
  }

  if (close && nav) {
    close.addEventListener("click", () => {
      nav.classList.remove("mobile-nav--active");
    });
  }

  document.querySelectorAll(".mobile-nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("mobile-nav--active");
    });
  });
}

/* ==================== SMOOTH SCROLLING ==================== */

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = anchor.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ==================== INITIALIZATION ==================== */

document.addEventListener("DOMContentLoaded", () => {
  renderRestaurantCards(restaurants);
  setupFilters();
  setupSearch();
  setupSuggestionTabs();
  renderSuggestions();
  setupBackToTop();
  setupScrollReveal();
  setupNavScroll();
  setupMobileNav();
  setupHeroParallax();
  setupSmoothScroll();
  setupTableReservation();
  setupPromoCodes();
  updateCartBadge();

  // Cart open/close triggers
  const cartBtn = document.getElementById("cart-btn");
  const cartClose = document.getElementById("cart-close");
  const cartOverlay = document.getElementById("cart-overlay");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);
  if (checkoutBtn) checkoutBtn.addEventListener("click", proceedToPayment);

  // Modal overlay click-outside to close
  const modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
  }

  // Escape key to close modal/cart/table booking
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (state.modalRestaurantId) closeModal();
      closeCart();
      closeTableModal();
    }
  });
});
