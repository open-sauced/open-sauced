import React, {useEffect, useState} from "react";
import Button from "../styles/Button";
import {RenderedNote} from "../styles/TextArea";
import Card from "./Card";
import {FlexCenter} from "../styles/Grid";
import {PencilIcon} from "@primer/octicons-react";
import ReactMarkdown from "react-markdown";
import "remirror/styles/all.css";
import api from "../lib/apiGraphQL";
import {SuggestExtension} from "@remirror/core";
import {BoldExtension, BulletListExtension, HeadingExtension, ItalicExtension, MarkdownExtension, EmojiExtension} from "remirror/extensions";
import {EditorComponent, Remirror, useRemirror, useCommands} from "@remirror/react";
import emojiData from "svgmoji/emoji";
const extensions = () => [
  new SuggestExtension(),
  new BulletListExtension(),
  new HeadingExtension(),
  new BoldExtension(),
  new ItalicExtension(),
  new MarkdownExtension(),
  new EmojiExtension({
    data: emojiData,
    moji:"noto",
    fallback:":-)",
    suggestionCharacter:":",
    plainText:true
  }),
];

const Menu = () => {
  // Access the commands and the activity status of the editor.
  const commands = useCommands();
  return (
    <div>
      <button
        onClick={() => {commands.insertMarkdown("### Notes for Repo\n- fork the repo\n\n- follow everybody on twitter\n-troll, troll, troll<Cursor>");}}
        style={{fontWeight: "bold"}}
      >
        New
      </button>
      <button
        onClick={() => {commands.insertMarkdown("# Heading 1");}}
        style={{fontWeight: "bold"}}
      >
        H1
      </button>
      <button
        onClick={() => {commands.insertMarkdown("\n\n- item 1\n- item 2");}}
        style={{fontWeight: "bold"}}
      >
        List
      </button>
      <button
        onClick={() => {commands.toggleBold();}}
        style={{fontWeight: "bold"}}
      >
        B
      </button>
    </div>
  );
};

const Editor = (props) => {
  const {state, setState, manager} = useRemirror({
    extensions,
    selection:"end",
    stringHandler:"markdown",
    content:props.input
  });
  const _onChange = (param) => {
    setState(param.state);
    props.onChange(param);
  };
  return <Remirror manager={manager} state={state} onChange={_onChange}>
    <Menu />
    <EditorComponent />
  </Remirror>;
};

function NoteForm({goalId, repoName, note}) {
  const [previouslySavedValue, setPreviouslySavedValue] = useState(note);
  const [input, setInput] = useState(note);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setInput(note);
  }, [note]);

  const _handleNoteUpdate = () => {
    api
      .updateGoal(goalId, repoName, "OPEN", input)
      .then(() => {
        _handleToggleEditing();
        setPreviouslySavedValue(input);
      })
      .catch(err => console.log(err));
  };

  const _handleToggleEditing = () => {
    setEditing(!editing);
  };

  const _handleCancelEditing = () => {
    setEditing(false);
    setInput(previouslySavedValue);
  };

  /*const _handleNotesChange = e => {
    setInput(e.target.value);
  }; */

  return (
    <Card>
      {!editing ? (
        <RenderedNote data-testid="notes-content">
          <ReactMarkdown className="noteContent" children={input} />
        </RenderedNote>
      ) : (
        <div className={"remirror-theme"}>
          <Editor input={input} onChange={(parameter) => {
            const md = parameter.helpers.getMarkdown();
            setInput(md);
          }}/>
        </div>
      )}
      <FlexCenter>
        {editing ? (
          <Button onClick={_handleNoteUpdate}>
            <PencilIcon verticalAlign="middle" />
            Save Notes
          </Button>
        ) : (
          <Button onClick={_handleToggleEditing}>
            <PencilIcon verticalAlign="middle" />
            Edit Notes
          </Button>
        )}
        {editing ? (
          <Button primary onClick={_handleCancelEditing}>
            Cancel
          </Button>
        ) : (
          ""
        )}
      </FlexCenter>
    </Card>
  );
}

export default NoteForm;
