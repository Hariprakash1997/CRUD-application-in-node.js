const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
    describe: 'Title of the note to read',
    demand: true,
    alias: 't'
};

const bodyOption = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption
})
.command('list', 'List all notes')
.command('read', 'Read specific notes', {
    title: titleOption
})
.command('delete', 'Delete a note', {
    title: titleOption
})
.help()
.argv;

var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if(note === undefined) {
        console.log(`Notes already exists with title ${argv.title}`);
    } else {
        console.log(`Notes created successfully with title ${argv.title}`);
        notes.logNote(note);
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if(note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'delete') {

    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Note removed with title ${argv.title}` : `Note with title ${argv.title} doesn't exists`;
    console.log(message);

} else {
    console.log(`${command} : Command not found`);
}