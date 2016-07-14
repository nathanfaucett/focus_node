var tape = require("tape"),
    focusNode = require("..");


tape("focusNode(node : Node) should focus element without throwing an error in ie", function(assert) {
    var input = document.createElement("input");

    document.body.appendChild(input);

    input.blur();
    focusNode(input);

    assert.equal(input, document.activeElement);

    assert.end();
});
