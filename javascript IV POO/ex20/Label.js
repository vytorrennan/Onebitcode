import Component from "./Component.js";

export default class Label extends Component{
    constructor(content, parent, options) {
        super("label", parent, Object.assign({}, options, { textContent: content}));
    }
}

