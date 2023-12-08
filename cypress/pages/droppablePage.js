export class DroppablePage {
    constructor() {
        this.selectors = {
            draggableBox: "div#draggable>p",
            droppableBox: "div#droppable>p"
        }
    }

    validateBeforeDrag() {
        cy.get('div#example-1-tab-1 iframe.demo-frame').its('0.contentDocument.body')
        .find(this.selectors.droppableBox).contains('Drop here')
    }

    dragDrop() {
        cy.get('div#example-1-tab-1 iframe.demo-frame').its('0.contentDocument.body').find(this.selectors.draggableBox)
        .trigger("mousedown", {which: 1})
        cy.get('div#example-1-tab-1 iframe.demo-frame').its('0.contentDocument.body').find(this.selectors.droppableBox)
        .trigger("mousemove").trigger("mouseup", {force: true})
    }

    validateAfterDrop() {
        cy.get('div#example-1-tab-1 iframe.demo-frame').its('0.contentDocument.body')
        .find(this.selectors.droppableBox).contains('Dropped!')
    }
}