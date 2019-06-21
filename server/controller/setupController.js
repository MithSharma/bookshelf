var bookshelfModel = require("../model/bookshelfModel");

module.exports = function(app){

    app.get('/api/setupBookshelf',function(req,res){

        // seed database
       var initialBookshelf = [
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Sophia Conrad",
          "author": "Deleon Coffey",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Kathrine Sweeney",
          "author": "Reba Johns",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Eula May",
          "author": "Isabella Bernard",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Everett Anderson",
          "author": "Angelique Lindsay",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Mcmahon Salas",
          "author": "Orr Oneill",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Diana Dodson",
          "author": "Jeanette Howell",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Frankie Rojas",
          "author": "Lina Stanton",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Juarez Puckett",
          "author": "Melton Romero",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Melva Long",
          "author": "Mcgowan Franks",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Albert Snow",
          "author": "Evans Noel",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Jessie Nash",
          "author": "Mia Vazquez",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Coleman Conner",
          "author": "Debra Chen",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Wise Mayer",
          "author": "Diann Hill",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Frost Oneil",
          "author": "Payne Nicholson",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Montgomery Holloway",
          "author": "Mayo Miller",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Conley Stafford",
          "author": "Holmes Banks",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Georgia Fitzpatrick",
          "author": "Parker Winters",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Latoya Terrell",
          "author": "Savage Duffy",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Serrano Bush",
          "author": "Anne Randall",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Norma Garner",
          "author": "Carey Clemons",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Greene Griffith",
          "author": "Hunt Frazier",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Rhea Velazquez",
          "author": "Evelyn Oliver",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Helene Pace",
          "author": "Millie Bowers",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Wanda Byrd",
          "author": "Calderon Valenzuela",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Shelly Melendez",
          "author": "Doyle Trujillo",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Ross Torres",
          "author": "Nina Bowman",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Marci Prince",
          "author": "Lorrie Henderson",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Gilmore Hyde",
          "author": "Natasha Lane",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Rosemary Zimmerman",
          "author": "Wilcox House",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Blair Meyer",
          "author": "Hancock Mercer",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Beach Lowe",
          "author": "Amie Snider",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Bradshaw Ortiz",
          "author": "Cooley Raymond",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Park Moran",
          "author": "Franks Gregory",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Helena Le",
          "author": "Rasmussen Mullen",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Dena Young",
          "author": "Hillary Cortez",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Clements Galloway",
          "author": "Stone Mcneil",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Elaine Morin",
          "author": "Armstrong Ingram",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Lynne Donaldson",
          "author": "Shawn Solis",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Whitley Lynch",
          "author": "Ramona Thompson",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Tricia Hawkins",
          "author": "Strong Cherry",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Lucile Bray",
          "author": "Marcy King",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Velma Camacho",
          "author": "Ford White",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Pugh Brennan",
          "author": "Corrine Pugh",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Figueroa Scott",
          "author": "Amanda Padilla",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Craig Lowery",
          "author": "Owen Bruce",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Salazar Allison",
          "author": "Davidson Dillon",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Jewell Williams",
          "author": "Nicole Irwin",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Janell Montgomery",
          "author": "Eleanor Baldwin",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Odonnell Donovan",
          "author": "Patrica Wiggins",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Torres Norman",
          "author": "Sondra Pratt",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Ray Clarke",
          "author": "Green Franco",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Nadine Gibson",
          "author": "Britney Poole",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Clarice Walter",
          "author": "Virginia Burton",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Glenda Gaines",
          "author": "Marquita Burnett",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Benjamin Coleman",
          "author": "Kelly Cooke",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Garrison Justice",
          "author": "Newman Steele",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Humphrey Hayes",
          "author": "Luella Koch",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Francisca Thomas",
          "author": "Staci Delacruz",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Hilda Reyes",
          "author": "Jodi Pitts",
          "ReadState": "Want to Read",
          "genre": "fitness"
        },
        {
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51GiQxbGd%2BL._SX332_BO1,204,203,200_.jpg",
          "name": "Juana Haley",
          "author": "Moody Carr",
          "ReadState": "Want to Read",
          "genre": "fitness"
        }
      ];
      bookshelfModel.create(initialBookshelf, function(err,results){
        res.send(results);
    })

    })
}