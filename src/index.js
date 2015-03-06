var isNode = require("is_node");


module.exports = function focusNode(node) {
    if (isNode(node) && node.focus) {
        try {
            node.focus();
        } catch (e) {}
    }
};
