const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-node.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-node.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter(note => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
   var notes = fetchNotes();
   var toReadNotes = notes.filter(note => note.title === title);
   return toReadNotes[0];
};
 
var removeNote = (title) => {
    var notes = fetchNotes();
    var toRemoveNote = notes.filter(note => note.title !== title);
    saveNotes(toRemoveNote);

    return notes.length !== toRemoveNote.length;
};

var logNote = (note) => {
    // debugger;
    console.log('-----');
    console.log(`title : ${note.title}`);
    console.log(`body : ${note.body}`)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};