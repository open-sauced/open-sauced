import React, {useEffect, useState} from "react";
import Button from "../styles/Button";
import {RenderedNote} from "../styles/TextArea";
import Card from "./Card";
import {FlexCenter} from "../styles/Grid";
import {PencilIcon} from "@primer/octicons-react";
import ReactMarkdown from "react-markdown";
import api from "../lib/apiGraphQL";
import {AllStyledComponent} from "@remirror/styles/emotion";
import {CodeExtension} from "@remirror/extension-code";
import {BulletListExtension} from "@remirror/extension-list";
import {HeadingExtension} from "@remirror/extension-heading";
import {BoldExtension} from "@remirror/extension-bold";
import {ItalicExtension} from "@remirror/extension-italic";
import {TableExtension} from "@remirror/extension-react-tables";
import {MarkdownExtension} from "@remirror/extension-markdown";
import {EmojiExtension} from "@remirror/extension-emoji";
import {EditorComponent, ThemeProvider, Remirror, useRemirror, useCommands, useEmoji} from "@remirror/react";
import {EmojiPopupComponent} from "@remirror/react-components";
import emojiData from "svgmoji/emoji-github";
const extensions = () => [
  new CodeExtension(),
  new BulletListExtension(),
  new HeadingExtension(),
  new BoldExtension(),
  new ItalicExtension(),
  new TableExtension(),
  new MarkdownExtension(),
  new EmojiExtension({
    data: emojiData,
    moji:"noto",
    fallback:":-)",
    suggestionCharacter:":",
    plainText:true
  }),
];
const EmojiEditor = () => {
  useEmoji();
  return (
    <EditorComponent />
  );
};
const Menu = () => {
  // Access the commands and the activity status of the editor.
  const commands = useCommands();
  const startNewNote = () => {
    commands.insertMarkdown("### Notes for Repo\n- fork the repo\n\n- follow everybody on twitter\n-troll, troll, troll<Cursor>");
  };
  return (
    <div>
      <Button onClick={startNewNote}>
        Basic Template
      </Button>
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
  return <AllStyledComponent>
    <ThemeProvider>
      <Remirror manager={manager} state={state} onChange={_onChange} >
        <EmojiPopupComponent />
        <Menu />
        <EmojiEditor />
      </Remirror>
    </ThemeProvider>
  </AllStyledComponent>;
};

function NoteForm({goalId, repoName, note}) {
  const [previouslySavedValue, setPreviouslySavedValue] = useState(note);
  const [input, setInput] = useState(note);
  const [editing, setEditing] = useState(false);
  const [editorValue, setEditorValue] = useState(note);
  useEffect(() => {
    setInput(note);
  }, [note]);

  const _handleNoteUpdate = () => {
    api
      .updateGoal(goalId, repoName, "OPEN", editorValue)
      .then(() => {
        _handleToggleEditing();
        setInput(editorValue);
        setPreviouslySavedValue(editorValue);
      })
      .catch(err => console.log(err));
  };

  const _handleToggleEditing = () => {
    setEditing(!editing);
  };

  const _handleCancelEditing = () => {
    setEditing(false);
    setInput(previouslySavedValue);
    setEditorValue(previouslySavedValue);
  };

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
            setEditorValue(md);
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
      <img style={{display:"none"}} src="https://cdn.jsdelivr.net/npm/@svgmoji/noto@3.2.0/sprites/all.svg" />
    </Card>
  );
}

export default NoteForm;
