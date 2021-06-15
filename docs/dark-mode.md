# Dark Mode Feature
This project supports "dark mode" styling, and by default it will follow the color preference on your device. It also allows for overriding this using buttons at the top right of the screen, which will persist the preference to local storage on your device. More info about color preference web API's can be found here: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

## Implementation Approach
The implementation is done in 4 steps.
- The functional component in `src/containers/App.js` has a `useEffect` hook that checks the user's `localStorage` for a stored entry of `theme`.  This value should be either "dark", "light", no entry at all. The hook runs only on initial page load, and if no local storage entry is found, it uses a default value of "system". It applies this value to the `ThemeContext` defined in `src/ThemeContext.js`.
- Also found in `src/containers/App.js` is a function called `systemIsDark` that can look at the user's device color preference to determine whether or not the system would prefer dark mode.
- Also found in `src/containers/App.js` is a function called `applyTheme` that checks the theme value and decides whether to include or remove the CSS classname "dark" to the `document.body` element. This determination would be made according to this table.

| Value of `theme`  | Result of `systemIsDark` | Apply `body.dark`? |
| --- | --- | --- |
| system | true | include |
| system | false | remove |
| dark | N/A | include |
| light | N/A | remove |

- Found in `src/components/ThemeButtonGroup.js` is a component with three buttons, each of which can be used to change the `ThemeContext` value.

## Theme Context Use
At this time, the `ThemeContext` only affects the `ThemeButtonGroup` component from a logic standpoint, but the `body.dark` CSS class declaration affects many places in the codebase. The broad effects of the `body.dark` CSS class declaration are found in `src/index.css`.
There are more specific impacts for components that extend `styled-components` (found in `src/styles/`) and the style declarations for these refer to descendants of `body.dark`. These impacts are found in overrides of color-related properties such as `color`, `background-color`, `fill`, and `filter`.

## SVG Images
SVG images can have their coloring controlled by a few different means, depending on the way they're rendered. This project has some mix in its use of SVG files for icons/images. 
- In the case of its use of the library `@primer/octicons-react`, these SVG files are rendered directly into markup rather than as the `src` attribute of an `<img>` tag, and so the `fill` CSS property is controlled by `src/index.css`.
- In the case of its use of SVG files in the repository, these are rendered as the `src` attribute of an `<img>` tag, and therefore the `filter` CSS property is controlled by `src/index.css`.
- In the case of an SVG used as a background-image for a form element (`src/styles/Search.js`), we use an alternate SVG file for dark mode whose `fill` property has been adjusted, since this use case doesn't allow for controlling the SVG colors separately from the form element's background colors.

## Loading Skeletons
This project uses components from the library `react-loading-skeleton`, and these are addressed in `src/index.css` based on a reading of [the source](https://github.com/dvtng/react-loading-skeleton/blob/master/src/skeleton.js)

## Best Practices Moving Forward
For future work, components with coloring aspects should make use of the `styled-components` library and should include CSS style declarations to handle the case of `body.dark`. For example, below is a component definition used in `src/styles/TextArea.js`:
```js
import styled from "styled-components";
import {margin, size, borderRadius, colors, fontSize} from "./variables";
const Container = styled.textarea`
  margin-bottom: 12px;
  border-radius: ${borderRadius};
  border: 1px solid ${colors.lightestGrey};
  box-sizing: border-box;
  box-shadow: none;
  font-size: ${fontSize.default};
  margin-bottom: ${size.tiny};
  outline: none;
  padding: ${size.tiny};
  width: 100%;
  body.dark & {
    background-color: ${colors.darkestGrey};
    color: ${colors.lightestGrey};
  }
`;
```

## References
- [Dark Mode at Stack Overflow](https://stackoverflow.blog/2020/03/31/building-dark-mode-on-stack-overflow/)
- [Color Control of SVGs](https://medium.com/@union_io/swapping-fill-color-on-image-tag-svgs-using-css-filters-fa4818bf7ec6)
- [React Context Docs](https://reactjs.org/docs/context.html#consuming-multiple-contexts)
