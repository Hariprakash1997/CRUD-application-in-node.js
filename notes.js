console.log('Starting Notes...');

var addNote = (title, body) => {
    console.log(`Adding note ${title} and ${body}`)
};

var getAll = () => {
    console.log(`Getting all notes`);
}

var getNote = (title) => {
    console.log(`Reading note with title ${title}`)
}

var removeNote = (title) => {
    console.log(`Removed note with title ${title}`)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}