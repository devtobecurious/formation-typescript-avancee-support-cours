class CharacterCustomElement extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name: unknown, oldValue: unknown, newValue: unknown) {
        console.log(`Attribute ${name} has changed. ${oldValue} => ${newValue}`);
    }
}

customElements.define("dtbc-character", CharacterCustomElement);