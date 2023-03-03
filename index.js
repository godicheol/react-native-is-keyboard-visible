import {
    Keyboard,
} from 'react-native';

const isKeyboardVisible = function(cb) {
    const keybaordDidShow = Keyboard.addListener("keyboardDidShow", function() {
        if (cb) {
            return cb(Object.assign({isVisible: true}, e));
        }
    });
    const keyboardDidHide = Keyboard.addListener("keyboardDidHide", function() {
        if (cb) {
            return cb(Object.assign({isVisible: false}, e));
        }
    });
    return function() {
        if (keybaordDidShow) {
            keybaordDidShow.remove();
        }
        if (keyboardDidHide) {
            keyboardDidHide.remove();
        }
    }
}

export default isKeyboardVisible;