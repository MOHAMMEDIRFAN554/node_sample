const http = require('http')

let users=[{"id":1,"first_name":"Verene","address":"45 Portage Point"},
{"id":2,"first_name":"Wylie","address":"5 Utah Junction"},
{"id":3,"first_name":"Elenore","address":"94 Shasta Junction"},
{"id":4,"first_name":"Darcey","address":"54 Fairview Parkway"},
{"id":5,"first_name":"Travis","address":"42490 Service Road"},
{"id":6,"first_name":"Petronia","address":"349 Bowman Hill"},
{"id":7,"first_name":"Davida","address":"19100 Mockingbird Street"},
{"id":8,"first_name":"Cristiano","address":"264 American Ash Place"},
{"id":9,"first_name":"Delaney","address":"4719 Kedzie Terrace"},
{"id":10,"first_name":"Rudolfo","address":"05644 Independence Park"},
{"id":11,"first_name":"Garek","address":"59 Daystar Park"},
{"id":12,"first_name":"Stacia","address":"2 Jenna Alley"},
{"id":13,"first_name":"Honey","address":"52 Carey Drive"},
{"id":14,"first_name":"Cortney","address":"5158 Cody Parkway"},
{"id":15,"first_name":"Vladamir","address":"26 Merchant Road"},
{"id":16,"first_name":"Livy","address":"92 Clove Parkway"},
{"id":17,"first_name":"Ezequiel","address":"9851 Reinke Circle"},
{"id":18,"first_name":"Hilly","address":"5 Novick Point"},
{"id":19,"first_name":"Clayton","address":"983 Ramsey Road"},
{"id":20,"first_name":"Bernadene","address":"1 Bunker Hill Drive"},
{"id":21,"first_name":"Karleen","address":"187 Steensland Drive"},
{"id":22,"first_name":"Hettie","address":"779 Glacier Hill Court"},
{"id":23,"first_name":"Archer","address":"38 Sherman Pass"},
{"id":24,"first_name":"Yevette","address":"4326 Utah Parkway"},
{"id":25,"first_name":"August","address":"36123 American Ash Center"},
{"id":26,"first_name":"Rickey","address":"77 New Castle Court"},
{"id":27,"first_name":"Isak","address":"74 Talisman Hill"},
{"id":28,"first_name":"Clare","address":"1414 School Road"},
{"id":29,"first_name":"Leandra","address":"2637 Bowman Drive"},
{"id":30,"first_name":"Chauncey","address":"1130 Heath Center"},
{"id":31,"first_name":"Brendis","address":"83784 Arizona Pass"},
{"id":32,"first_name":"Claybourne","address":"1 Prairieview Drive"},
{"id":33,"first_name":"Fee","address":"61 Shoshone Parkway"},
{"id":34,"first_name":"Fidel","address":"6 Dorton Circle"},
{"id":35,"first_name":"Maurene","address":"5470 Londonderry Avenue"},
{"id":36,"first_name":"Prentiss","address":"94338 Hooker Avenue"},
{"id":37,"first_name":"Jay","address":"0 Pierstorff Alley"},
{"id":38,"first_name":"Carlen","address":"498 Ludington Junction"},
{"id":39,"first_name":"Alfons","address":"0209 Larry Hill"},
{"id":40,"first_name":"Iormina","address":"01590 Mariners Cove Drive"},
{"id":41,"first_name":"Trumann","address":"39719 Vera Place"},
{"id":42,"first_name":"Tami","address":"93 Helena Drive"},
{"id":43,"first_name":"Nichole","address":"66 Gina Point"},
{"id":44,"first_name":"Maiga","address":"993 Cordelia Parkway"},
{"id":45,"first_name":"Calypso","address":"551 Huxley Lane"},
{"id":46,"first_name":"Joletta","address":"5535 Nelson Avenue"},
{"id":47,"first_name":"Charita","address":"0928 Cambridge Circle"},
{"id":48,"first_name":"Carrie","address":"273 Hazelcrest Point"},
{"id":49,"first_name":"Annecorinne","address":"724 Anzinger Circle"},
{"id":50,"first_name":"Mirelle","address":"440 Buena Vista Lane"},
{"id":51,"first_name":"Reidar","address":"13307 Fairfield Avenue"},
{"id":52,"first_name":"Omero","address":"7 Petterle Trail"},
{"id":53,"first_name":"Chrissie","address":"4019 Dexter Plaza"},
{"id":54,"first_name":"Cozmo","address":"2 Clyde Gallagher Park"},
{"id":55,"first_name":"Erin","address":"040 Clyde Gallagher Terrace"},
{"id":56,"first_name":"Laverne","address":"281 Warner Drive"},
{"id":57,"first_name":"Adrienne","address":"02 Waubesa Terrace"},
{"id":58,"first_name":"Ebonee","address":"931 Fairview Point"},
{"id":59,"first_name":"Lucia","address":"64 Elka Terrace"},
{"id":60,"first_name":"Alena","address":"7719 Cherokee Point"},
{"id":61,"first_name":"Regan","address":"5651 Fallview Place"},
{"id":62,"first_name":"Nicolas","address":"1 Buhler Lane"},
{"id":63,"first_name":"Ursa","address":"33 Bay Court"},
{"id":64,"first_name":"Sandy","address":"0508 Carey Trail"},
{"id":65,"first_name":"Wilie","address":"074 Melby Center"},
{"id":66,"first_name":"Odelinda","address":"53929 Blaine Alley"},
{"id":67,"first_name":"Charissa","address":"87 Rusk Hill"},
{"id":68,"first_name":"Merill","address":"9965 Declaration Place"},
{"id":69,"first_name":"Fiorenze","address":"95864 Columbus Avenue"},
{"id":70,"first_name":"Maurizio","address":"102 Commercial Street"},
{"id":71,"first_name":"Dulci","address":"20606 Talmadge Hill"},
{"id":72,"first_name":"Carly","address":"66 Prairie Rose Hill"},
{"id":73,"first_name":"Artie","address":"0595 Anthes Lane"},
{"id":74,"first_name":"Katerina","address":"31 Carberry Park"},
{"id":75,"first_name":"Kira","address":"7424 Columbus Hill"},
{"id":76,"first_name":"Luce","address":"392 Fallview Crossing"},
{"id":77,"first_name":"Jasen","address":"703 Delladonna Place"},
{"id":78,"first_name":"Hulda","address":"6749 Drewry Point"},
{"id":79,"first_name":"Florian","address":"6 Bluejay Avenue"},
{"id":80,"first_name":"Joyann","address":"1 Dixon Way"},
{"id":81,"first_name":"Kali","address":"481 Wayridge Parkway"},
{"id":82,"first_name":"Hatty","address":"6 Brentwood Drive"},
{"id":83,"first_name":"Dorotea","address":"1 Daystar Junction"},
{"id":84,"first_name":"Jolynn","address":"384 Northport Way"},
{"id":85,"first_name":"Francine","address":"345 Dexter Way"},
{"id":86,"first_name":"Armando","address":"49653 Quincy Street"},
{"id":87,"first_name":"Kailey","address":"849 Schmedeman Way"},
{"id":88,"first_name":"Vanya","address":"7926 Columbus Drive"},
{"id":89,"first_name":"Moise","address":"8 Sachtjen Road"},
{"id":90,"first_name":"Cleon","address":"3 Duke Crossing"},
{"id":91,"first_name":"Kip","address":"95955 Twin Pines Plaza"},
{"id":92,"first_name":"Brent","address":"27909 Harbort Junction"},
{"id":93,"first_name":"Rhianon","address":"50 Golden Leaf Junction"},
{"id":94,"first_name":"Thornton","address":"18 Michigan Park"},
{"id":95,"first_name":"Sofie","address":"4500 Sycamore Court"},
{"id":96,"first_name":"Stanislas","address":"07 Leroy Place"},
{"id":97,"first_name":"Jasmin","address":"631 North Junction"},
{"id":98,"first_name":"Bernardine","address":"2 Nancy Junction"},
{"id":99,"first_name":"Zorine","address":"76 Linden Trail"}]

const PORT = 4000

let server = http.createServer((req,res)=>{

    let url = req.url
    // /getPaginatedUsers? pageNumber=1&count=10

    if (url.includes("getPaginatedUsers")){

        let str = url.split("?")[1]
        // pageNumber=1&count=10

        let pageNumber = parseInt(str.split('&')[0].split("=")[1])
        let count = parseInt(str.split('&')[1].split("=")[1])

        let startIndex = (pageNumber -1) * count//10
        let endIndex = startIndex+count//10




        console.log(startIndex,endIndex)
    }



    // console.log(url)

})

server.listen(PORT, (err)=>{
    if(err){
        console.log("error" , err)
    }
    else{
        console.log("Server started successfully")
    }
})

