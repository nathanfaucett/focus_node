var tape = require("tape"),
    blurNode = require("blur_node"),
    getActiveElement = require("get_active_element"),
    focusNode = require("..");


tape("focusNode(node : Node) should focus element without throwing an error in ie", function(assert) {
    var input = document.createElement("input");

    document.body.appendChild(input);

    blurNode(input);
    focusNode(input);

    assert.equal(input, getActiveElement());

    assert.end();
});
