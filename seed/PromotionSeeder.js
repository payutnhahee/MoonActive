const Promotion = require('../models/Promotion');

const promotion = new Promotion({
    name: "", // randomize some name
    type: "", // randomize some enum string 
        // Object.values(promotionTypes)
    startDate: new Date(), // randomize some date
    endDate: new Date(), // randomize some date after startDate
    userGroupName: "", // randomize some enum string 
    // Object.values({"A", "B", "C", "D"})
});
