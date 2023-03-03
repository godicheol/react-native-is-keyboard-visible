```js
import isKeyboardVisible from 'react-native-is-keyboard-visible';
```

```js
function App(props) {
    const [isTyping, setTyping] = React.useState(Keyboard.isVisible());

    ...
    useEffect(function() {
        // mount
        const removeEvent = isKeyboardVisible(function(e) {
            setTyping(e.isVisible);
        });

        return function() {
            // unmount
            removeEvent();
        }
    }, []);
    ...
    
}
```