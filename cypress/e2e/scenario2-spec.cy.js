import { DroppablePage } from '../pages/droppablePage'
const droppablePage = new DroppablePage()
const droppableUrl = "https://www.way2automation.com/way2auto_jquery/droppable.php#load_box"

describe('drag and drop spec', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  beforeEach(() => {
    cy.visit(droppableUrl)
  })

  it('should perform the drag and drop', () => {
    droppablePage.validateBeforeDrag()
    droppablePage.dragDrop()
    droppablePage.validateAfterDrop()
  })

  after(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })
})