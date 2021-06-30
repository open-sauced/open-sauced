import React from "react";
import emojiRegex from 'emoji-regex';
import { SocialEditor } from '@remirror/editor-social';
const onChange = function(){
  console.log(arguments);
}
const NoteEditor = props => (
  <SocialEditor
    {...props}
    attributes={{ 'data-testid': 'editor-social' }}
    userData={[]}
    tagData={[]}
    onMentionChange={onChange}
    atMatcherOptions={{
      // Adds emoji characters the the valid prefix characters.
      validPrefixCharacters: `^([\\s\\0]|${emojiRegex().source})?$`,
    }}
  />
);
export default NoteEditor;