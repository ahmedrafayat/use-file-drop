# use-file-drop

A simple, zero dependancy hook for implementing drag and drop in react.



## Installation

```
npm install use-file-drop
```

## Example

```javascript
import React from "react";
import { useFileDrop } from "use-file-drop";

export default App() {
    const [fileName, setFileName] = useState("");

    const onDrop = (files) => {
        setFileName(files[0].name);
    }

    const [canDrop, dropRef] = useFileDrop({
        drop: onDrop
    });

    return (
        <div ref={dropRef} className={canDrop ? "drag-over": ""}>
            <div>{fileName}</div>
        </div>
    )
}
```

It is better to wrap your the `DropFunction` in a `useCallback`. This will slightly improve performance in the case above since the React's `Dispatch` function (setFileName) is guaranteed to not change reference.

```javascript
const onDrop = useCallback((files) => {
    setFileName(files[0].name);
}, []);
```

## Build Steps

Prerequisites:

Node 16 or nvm

Steps:

```
nvm install
npm install
npm run build
```

The build is located in /dist directory