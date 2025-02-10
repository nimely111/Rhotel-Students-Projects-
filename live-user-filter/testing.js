
// let API_URL = fetch("https://randomuser.me/api/0.8/?results=2");
        
//     // API_URL is the promise to resolve
//     // it by using.then() method
//     API_URL.then(response =>
//         response.json()).then(data => {
//             console.log(data)
//         })

        // API_URL.then(function(response){ 
        //     response.json()
        // }).then(function(data){
        //     console.log(data);
        // })

        fetch("https://randomuser.me/api/0.8/?results=10")
        .then(response =>
        response.json())
        .then(data => {
            // console.log(data.results);

            // loop over all the data and dispaly them into the console
            const all_users = data.results
            // console.log(all_users[1].user.name.first);
            // for(let users = 0; users < all_users.length; users++){
            //     console.log(users.user.name);
            // }

            // using the modern higher order function forEach loop
            all_users.forEach(users => {
                console.log(users.user.name.first, users.user.name.last);
                const result = document.querySelector('.result')
                result.innerHTML = `<h2> FirstName:  ${users.user.name.first} LastName:  ${users.user.name.last}</h2>`.toUpperCase()
            })






        })

        // .then(data => {
        //     console.log(data)
        // })

      


