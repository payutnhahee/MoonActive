function getRandomValue() {
    return Math.floor(Math.random() * 100) + 1
}

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

const hardcoded_promotions = [
    {
        name: "Christmas",
        type: "Common",
        startDate: getRandomDate(),
        endDate: getRandomDate(),
        userGroupName: "A",
    },
    {
        name: "Black Friday",
        type: "Common",
        startDate: getRandomDate(),
        endDate: getRandomDate(),
        userGroupName: "B",
    },
    {
        name: "Hannukah",
        type: "Basic",
        startDate: getRandomDate(),
        endDate: getRandomDate(),
        userGroupName: "A",
    },
    {
        name: "Rosh Hashana",
        type: "Basic",
        startDate: getRandomDate(),
        endDate: getRandomDate(),
        userGroupName: "C",
    },
    {
        name: "Passover",
        type: "Epic",
        startDate: getRandomDate(),
        endDate: getRandomDate(),
        userGroupName: "C",
    },
    {
        name: "Easter",
        type: "Epic",
        startDate: getRandomDate(),
        endDate: getRandomDate(),
        userGroupName: "B",
    },
    {
        name: "Thanksgiving",
        type: "Basic",
        startDate: getRandomDate(),
        endDate: getRandomDate(),
        userGroupName: "A",
    },
];

const promoNames = ['Thanksgiving', 'Christmas', 'Hannukah', 'Easter', 'Rosh Hashana', 'Purim', 'Halloween', 'Passover'];
const types = ['Basic', 'Epic', 'Common'];
const userGroups = ['A', 'B', 'C', 'D'];
const promotions = [];

for (let i = 0; i<100; i++) {
    promotions.push({
        name: promoNames[i%8] + getRandomValue(),
        type: types[i%3],
        startDate: getRandomDate(),
        endDate: getRandomDate(),
        userGroupName: userGroups[i%4],
    })
}

db.promotions.deleteMany({});
db.columns.deleteMany({});

// Manual init
db.getCollection("promotions").insertMany(promotions);


db.getCollection("columns").insertMany([
    {
        label: "Name",
        dataKey: "name",
        width: 350,
        type: 'string'
    }, {
        label: "Type",
        dataKey: "type",
        width: 150,
        type: 'select'
    }, {
        label: "Start Date",
        dataKey: "startDate",
        width: 400,
        type: 'date'
    }, {
        label: "End Date",
        dataKey: "endDate",
        width: 400,
        type: 'date'
    }, {
        label: "User Group",
        dataKey: "userGroupName",
        width: 140,
        type: 'select'
    }
]);