export default function (){
    const items = reactive([]);

    const addTask = (name) => {
        console.log('addItem', name);
        items.push({id: generateId(),name, done : false});
    };

    const removeTask = (id) => {
        const indexToRemove = items.findIndex((item) => item.id === id);
        items.splice(indexToRemove, 1);
    };
    return { items, addTask, removeTask };
}
