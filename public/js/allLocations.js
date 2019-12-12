var allLocations = [
    {
      name: "Chipotle Boston Street",
      lat: 39.2818348,
      lng: -76.5837981,
      address: "2400 Boston St",
      city: "Baltimore",
      state: "MD",
      zip: "21224",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Campbell Blvd",
      lat: 39.1954722,
      lng: -76.6161568,
      address: "5341 Campbell Blvd",
      city: "Baltimore",
      state: "MD",
      zip: "21236",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Security Blvd",
      lat: 39.3131495,
      lng: -76.7573689,
      address: "7091 Security Blvd #102",
      city: "Windsor Mill",
      state: "MD",
      zip: "21244",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Shawan Road",
      lat: 39.4968089,
      lng: -76.6566791,
      address: "112 Shawan Rd",
      city: "Hunt Valley",
      state: "MD",
      zip: "21031",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Hampden",
      lat: 39.3379131,
      lng: -76.6376987,
      address: "1041 W 41st St",
      city: "Baltimore",
      state: "MD",
      zip: "21211",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Parkville",
      lat: 39.3731967,
      lng: -76.5447898,
      address: "7711 Harford Rd",
      city: "Parkville",
      state: "MD",
      zip: "21234",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Parkville",
      lat: 39.3731967,
      lng: -76.5447898,
      address: "7711 Harford Rd",
      city: "Parkville",
      state: "MD",
      zip: "21234",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Laurel",
      lat: 39.0979316,
      lng: -76.8112019,
      address: "3353 Corridor Marketplace",
      city: "Laurel",
      state: "MD",
      zip: "20724",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Bowie",
      lat: 38.9550682,
      lng: -76.8302716,
      address: "10201 Martin Luther King Jr. Hwy #100",
      city: "Bowie",
      state: "MD",
      zip: "20720",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Ardmore",
      lat: 38.9213972,
      lng: -76.8486775,
      address: "9301 Woodmore Center Dr #514",
      city: "Ardmore",
      state: "MD",
      zip: "20774",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Falls Church",
      lat: 38.870548,
      lng: -77.1552662,
      address: "6299 Seven Corners Center",
      city: "Falls Church",
      state: "VA",
      zip: "22044",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Vienna",
      lat: 38.924832,
      lng: -77.239830,
      address: "8461 Leesburg Pike A",
      city: "Vienna",
      state: "VA",
      zip: "22182",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Georgia Ave",
      lat: 38.9204188,
      lng: -77.0233562,
      address: "2301 Georgia Ave NW",
      city: "Washington",
      state: "DC",
      zip: "20059",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle F St",
      lat: 38.8980058,
      lng: -77.0231909,
      address: "601 F St NW",
      city: "Washington",
      state: "DC",
      zip: "20004",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Pennsylvania Ave NW",
      lat: 38.9016578,
      lng: -77.0497453,
      address: "2000 Pennsylvania Ave NW #15",
      city: "Washington",
      state: "DC",
      zip: "20006",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Arlington",
      lat: 38.8539786,
      lng: -77.0513267,
      address: "2231 Crystal Dr #100",
      city: "Arlington",
      state: "VA",
      zip: "22202",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Fredericksburg",
      lat: 38.3021248,
      lng: -77.4870199,
      address: "1601 Jefferson Davis Hwy",
      city: "Fredericksburg",
      state: "VA",
      zip: "22401",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Jacksonville",
      lat: 30.3159587,
      lng: -81.5528547,
      address: " 9395 Atlantic Blvd.",
      city: "Jacksonville",
      state: "FL",
      zip: "32225",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Destin",
      lat: 30.3899367,
      lng: -86.4251081,
      address: "4281 Legendary Dr J-114",
      city: "Destin",
      state: "FL",
      zip: "32541",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Fort Worth",
      lat: 32.7514217,
      lng: -97.3625804,
      address: "3000 W 7th St",
      city: "Fort Worth",
      state: "TX",
      zip: "76107",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Lubbock",
      lat: 33.5674877,
      lng: -101.9471146,
      address: "2912 W Loop 289",
      city: "Lubbock",
      state: "TX",
      zip: "79407",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Millbrae",
      lat: 37.5965469,
      lng: -122.3884283,
      address: "135 S El Camino Real",
      city: "Millbrae",
      state: "CA",
      zip: "94030",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Chico",
      lat: 39.7343999,
      lng: -121.8378356,
      address: "620 Mangrove Ave",
      city: "Chico",
      state: "CA",
      zip: "95926",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Bozeman",
      lat: 45.6797105,
      lng: -111.0652063,
      address: "1919 W Main St",
      city: "Bozeman",
      state: "MT",
      zip: "59718",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle LA",
      lat: 34.0475871,
      lng: -118.2588657,
      address: "601 W 7th St",
      city: "Los Angeles",
      state: "CA",
      zip: "90017",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Tucson",
      lat: 32.8742141,
      lng: -112.5764995,
      address: "905 E University Blvd #149",
      city: "Tucson",
      state: "AZ",
      zip: "85719",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle NYC",
      lat: 40.7561529,
      lng: -73.9812333,
      address: "25 W 45th St",
      city: "New York",
      state: "NY",
      zip: "10036",
      phone: "(555) 555-5555",
    },
    {
      name: "Chipotle Atlanta",
      lat: 33.7849838,
      lng: -84.5176628,
      address: "718 Ponce De Leon Ave NE",
      city: "Atlanta",
      state: "GA",
      zip: "30306",
      phone: "(555) 555-5555",
    },
    {
      name: "Vineyard of Flat Shoals",
      lat: 34.298771,
      lng: -83.829628,
      address: "200 Vineyard Walk, Atlanta",
      city: "Atlanta",
      state: "GA",
      zip: "30316",
      phone: "(404) 328-0820",
    },
    {
      name: "Freeman's Mill Park",
      lat: 33.981320,
      lng: -83.858970,
      address: "1401 Alcovy Rd SE, Lawrenceville.",
      city: "Lawrenceville",
      state: "GA",
      zip: "30045",
      phone: "(770) 822-8840",
    },
    {
      name: "Georgia Diagnostic and Classification State Prison",
      lat: 32.986270,
      lng: -82.597810,
      address: "2978 GA-36, Jackson.",
      city: "Jackson",
      state: "GA",
      zip: "30233",
      phone: "(770) 504-2000",
    },
    {
      name: "Jekyll Island Club Resort",
      lat: 31.243050,
      lng: -81.532200,
      address: "371 S Riverview Dr",
      city: "Jekyll Island",
      state: "GA",
      zip: "31527",
      phone: "(888) 445-3179",
    },
    {
      name: "Kennesaw State University-Campus Green",
      lat: 34.035690,
      lng: -84.582581,
      address: "1100 South Marietta Pkwy SE.",
      city: "Marietta",
      state: "GA",
      zip: "30060",
      phone: "(770) 218-3704",
    },
    {
      name: "Union Church",
      lat: 31.026560,
      lng: -83.062030,
      address: "217 Brunt Church Rd",
      city: "Lakeland",
      state: "GA",
      zip: "31635",
      phone: "(000) 000-0000",
    },
  ];