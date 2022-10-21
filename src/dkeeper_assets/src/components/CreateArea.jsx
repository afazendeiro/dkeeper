import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function shouldExpand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          onFocus={shouldExpand}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.onCreate(note);
              setNote({
                title: "",
                content: "",
              });

              setExpanded(false);
              // Prevents the page from reloading
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
