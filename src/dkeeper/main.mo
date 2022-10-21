import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper {

  public type Note = {
    title: Text;
    content: Text;
  };

  var notes: List.List<Note> = List.nil<Note>();

  public func createNote(title: Text, content: Text) {
    let newNote: Note = { title = title; content = content };
    notes := List.push(newNote, notes);

    Debug.print(debug_show(notes));
  };
};