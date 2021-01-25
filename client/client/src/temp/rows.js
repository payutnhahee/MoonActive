export function getRandomDate(minDate, maxDate) {
    function randomValueBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    var date1 = minDate || new Date(2015, 1, 1, 0, 0, 0, 0).getTime();
    var date2 = maxDate || new Date().getTime();
    var x1 = date1 = new Date(date1).getTime();
    var x2 = date2 = new Date(date2).getTime();
    if (x1 > x2) {
        return new Date(randomValueBetween(x2, x1));
    } else {
        return new Date(randomValueBetween(x1, x2));
    }
};

const rows = [{
    id: 1,
    name: "Christmas",
    type: "common",
    startDate: getRandomDate(),
    endDate: getRandomDate(),
    userGroupName: "A",
},
{
    id: 2,
    name: "Black Friday",
    type: "common",
    startDate: getRandomDate(),
    endDate: getRandomDate(),
    userGroupName: "B",
},
{
    id: 3,
    name: "Hannukah",
    type: "basic",
    startDate: getRandomDate(),
    endDate: getRandomDate(),
    userGroupName: "A",
},
{
    id: 4,
    name: "Rosh Hashana",
    type: "basic",
    startDate: getRandomDate(),
    endDate: getRandomDate(),
    userGroupName: "C",
},
{
    id: 5,
    name: "Passover",
    type: "epic",
    startDate: getRandomDate(),
    endDate: getRandomDate(),
    userGroupName: "C",
},
{
    id: 6,
    name: "Easter",
    type: "epic",
    startDate: getRandomDate(),
    endDate: getRandomDate(),
    userGroupName: "B",
},
{
    id: 7,
    name: "Thanksgiving",
    type: "basic",
    startDate: getRandomDate(),
    endDate: getRandomDate(),
    userGroupName: "A",
}]

export default rows;