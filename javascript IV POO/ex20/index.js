import Component from "./Component.js";
import Input from "./Input.js";
import Label from "./Label.js";
import Form from "./Form.js";

const br = new Component("br", document.getElementsByTagName("div")[0], { className: "br1" })
br.render();

const form = new Form(document.getElementsByTagName("div")[0], {})
const input = new Input(document.getElementsByTagName("div")[0], { className: "newInput", id: "newInput", name: "newInput" });
const label = new Label(`Label of ${input.getElement().className}`, document.getElementsByTagName("div")[0], { id: "newLabel", htmlFor: "newInput" })

form.addChild(label, input)
form.render();