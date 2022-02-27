'use strict';
(() => {
   const api = {
      id: 360,
      uid: "s:600~t:360",
      location: "Manchester, England",
      name: "Manchester United",
      abbreviation: "MAN",
      displayName: "Manchester United",
      shortDisplayName: "Man United",
      isActive: true,
      logos: [
        {
          href: "https://a.espncdn.com/i/teamlogos/soccer/500/360.png",
          width: 500,
          height: 500,
          alt: "",
          rel: [
            "full",
            "default"
          ],
          lastUpdated: "2019-05-08T16:07Z"
        }
      ],
      note: {
        "color": "#81D6AC",
        "description": "Champions League",
        "rank": 2
      },
      squad: [
        {
            id: 1001,
            first_name: "Eric",
            last_name: "Bailly",
            position: "Defender",
            image: "ericbailly.jpg"
        },
        {
            id: 1017,
            first_name: "David",
            last_name: "De Gea",
            position: "Goalkeeper",
            image: "daviddegea.jpg"
        },
        {
            id: 1706,
            first_name: "Ander",
            last_name: "Herrera",
            position: "Midfielder",
            image: "anderherrera.jpg"
        },
        {
            id: 1044,
            first_name: "Zlatan",
            last_name: "Ibrahimovic",
            position: "Striker",
            image: "zlatanibrahimovic.jpg"
        },
        {
            id: 1705,
            first_name: "Phil",
            last_name: "Jones",
            position: "Defender",
            image: "philjones.jpg"
        },
        {
            id: 1031,
            first_name: "Juan",
            last_name: "Mata",
            position: "Midfielder",
            image: "juanmata.jpg"
        },
        {
            id: 2202,
            first_name: "Henrikh",
            last_name: "Mkhitaryan",
            position: "Midfielder",
            image: "henrikhmkhitaryan.jpg"
        },
        {
            id: 1034,
            first_name: "Paul",
            last_name: "Pogba",
            position: "Midfielder",
            image: "paulpogba.jpg"
        },
        {
            id: 1204,
            first_name: "Marcus",
            last_name: "Rashford",
            position: "Striker",
            image: "marcusrashford.jpg"
        },
        {
            id: 1704,
            first_name: "Antonio",
            last_name: "Valencia",
            position: "Defender",
            image: "antoniovalencia.jpg"
        },
        {
            id: 1723,
            first_name: "Luke",
            last_name: "Shaw",
            position: "Defender",
            image: "lukeshaw.jpg"
        },
      ]
    }

    console.log("Exercise 1");
    console.log(api)
    
    /*
    *       Instructions:
    * 
    *       1. Create and output to console an array of all defenders.
    *       2. Create and output to console an array of all players sorted by id
    *       3. Create and output to console this statement with appropriate information for each [variable] below: 
    *               "[TeamName] of [Location] remains in [rank] place in the [league]." 
    * 
    */

})()