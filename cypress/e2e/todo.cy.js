describe("To-Do List App", () => {
    it("loads the app", () => {
      cy.visit("http://localhost:3000");
      cy.contains("To-Do List").should("be.visible");
    });
  
    it("adds a new to-do item", () => {
      cy.get("input").type("Test Task{enter}");
      cy.contains("Test Task").should("be.visible");
    });
  
    it("deletes a to-do item", () => {
      cy.contains("Test Task").siblings("button").click();
      cy.contains("Test Task").should("not.exist");
    });
  });
  