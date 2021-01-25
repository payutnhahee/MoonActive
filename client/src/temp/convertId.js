const addIds = (data) => (data.map((item) => {
    item.id = item._id
    return item;
}));

const removeIds = (data) => (data.map((item) => {
    delete item.id;
    return item;
}));

export { addIds, removeIds };