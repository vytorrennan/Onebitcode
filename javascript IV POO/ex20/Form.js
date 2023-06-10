import Component from "./Component.js";

export default class Form extends Component{
    constructor(parent, options) {
        super("form", parent, options);
    }

    addChild(...component) {
        component.forEach(element => {this.getElement().appendChild(element.getElement());})
    }
}


