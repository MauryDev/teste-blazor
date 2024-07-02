export default {
    InitLabel: function (label, fontsize, color) {
        if (label != null) {
            label.style.color = color
            label.style.fontSize = fontsize
            label.style.fontFamily = "system-ui"
        }
        
    },
    UpdateStyle: function (label,stylename, value) {
        
        if (label != null) {
            label.style[stylename] = value
        }
    }
};