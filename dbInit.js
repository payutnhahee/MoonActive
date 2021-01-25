// function getRandomString() {
//     return Math.random().toString(26).substr(2, 5);
// }

// const types = ['basic', 'common', 'epic'];

// console.log(getRandomString());
// console.log(getRandomString());
// console.log(getRandomString());
// console.log(getRandomString());

// function generate_random_load(count, collection_name, array_keys, key_size) {
//     for (var i = 0; i < count; i++) {
//         var document = {};
//         for (var j in array_keys) {
//             document[array_keys[j]] = random_string(key_size);
//         }
//         getDB("test").getCollection(collection_name).insert(document);
//     }
// }

// function random_string(len, charSet) {
//     charSet =
//         charSet ||
//         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     var randomString = "";
//     for (var i = 0; i < len; i++) {
//         var randomPoz = Math.floor(Math.random() * charSet.length);
//         randomString += charSet.substring(randomPoz, randomPoz + 1);
//     }
//     return randomString;
// }

// function getDB(db_name) {
//     return db.getMongo().getDB(db_name);
// }

function getRandomDate(date1, date2) {
    function randomValueBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    var date1 = date1 || new Date(2015, 1, 1, 0, 0, 0, 0).toLocaleDateString();
    var date2 = date2 || new Date().toLocaleDateString();
    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();
    if (date1 > date2) {
        return new Date(randomValueBetween(date2, date1));
    } else {
        return new Date(randomValueBetween(date1, date2));
    }
}

// getRandomDate('02/13/2013', '01/01/2000')
// "1/31/2009"
// getRandomDate()
// "6/14/2001"

db.promotions.deleteMany({});

// Manual init
db.getCollection("promotions").insertMany(
    [
        {
            name: "Christmas",
            type: "common",
            startDate: getRandomDate(),
            endDate: getRandomDate(),
            userGroupName: "A",
        },
        {
            name: "Black Friday",
            type: "common",
            startDate: getRandomDate(),
            endDate: getRandomDate(),
            userGroupName: "B",
        },
        {
            name: "Hannukah",
            type: "basic",
            startDate: getRandomDate(),
            endDate: getRandomDate(),
            userGroupName: "A",
        },
        {
            name: "Rosh Hashana",
            type: "basic",
            startDate: getRandomDate(),
            endDate: getRandomDate(),
            userGroupName: "C",
        },
        {
            name: "Passover",
            type: "epic",
            startDate: getRandomDate(),
            endDate: getRandomDate(),
            userGroupName: "C",
        },
        {
            name: "Easter",
            type: "epic",
            startDate: getRandomDate(),
            endDate: getRandomDate(),
            userGroupName: "B",
        },
        {
            name: "Thanksgiving",
            type: "basic",
            startDate: getRandomDate(),
            endDate: getRandomDate(),
            userGroupName: "A",
        },
    ],
    { ordered: false }
);