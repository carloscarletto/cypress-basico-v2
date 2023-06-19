describe("central de atendimento ao cliente TAT", function () {
  beforeEach(function () {
    cy.visit("./src/index.html");
  });
  it("verifica o itulo da aplicacao", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  /*it.only("preenche os campos obrigatorio e envia formulario", function () {
    const longText =
      "text,text, text, text,text,text, text, text,text,text, text, text";
    cy.get("#firstName").type("carlos");
    cy.get("#lastName").type("carletto");
    cy.get("#email").type("carloscrl2005@hotmail.com");
    cy.get("#phone").type("11972128912");
    cy.get("#email-checkbox").click();
    cy.get("#open-text-area").click().type(longText);
    cy.get('button[type="submit"]').click();
    cy.get(".success").should("be.visible");
  });
  it.only("preenche os campos obrigatorio e envia formulario", function () {
    const longText =
      "text,text, text, text,text,text, text, text,text,text, text, text";
    cy.get("#firstName").type("carlos");
    cy.get("#lastName").type("carletto");
    cy.get("#email").type("carloscrl2005@hotmail,com");
    cy.get("#phone").type("11972128912");
    cy.get("#email-checkbox").check();
    cy.get("#open-text-area").click().type(longText);
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it.only("campo continua vazio quando preenchido com valor nao -numerico", function () {
    cy.get("#phone").type("abcdefgh1").should("have.value", "");
  });

  it.only("exibe mensagem de erro quando o telefone se torna obrigatorio mas nao e preenchido", function () {
    cy.get("#firstName").type("carlos");
    cy.get("#lastName").type("carletto");
    cy.get("#email").type("carloscrl2005@hotmail,com");
    cy.get("#phone-checkbox").click();
    cy.get("#open-text-area").type("teste");
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });

  it.only("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("#firstName")
      .type("carlos")
      .should("have.value", "carlos")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("rodrigues")
      .should("have.value", "rodrigues")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("carlos.carletto@globo.com")
      .should("have.value", "carlos.carletto@globo.com")
      .clear()
      .should("have.value", "");
  });

  it.only("exibe mensagem de erro ao submeter o formulario sem preencher os campo obrigatorio", function () {
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });

  it.only("preenche os campos obrigatorio e envia formulario command", function () {
    cy.fillMandatoryFieldsAndSubmit();
  });

  it.only("selecionar produto pelo select", () => {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });

  it.only("selecionar um produto (mentoria) por seu valor (value)", () => {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });

  it.only("selecione um produto(Blog) por seu indice", () => {
    cy.get("#product").select(1).should("have.value", "blog");
  });

  it.only("marca o tipo de atendimento (feadback)", () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  }); */
  it.only("marca cada tipo de atendimento", () => {
    cy.get('input[type="radio"]')
      .should("have.length", 3)
      .each(function ($radio) {
        cy.wrap($radio).check();
        cy.wrap($radio).should("be.checked");
      });
  });
  it.only("marca ambos checkboxes depois ", () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should("be.checked")
      .last()
      .uncheck()
      .should("not.be.checked");
  });
  it.only("selecione um arquivo da pasta fixtures", () => {
    cy.get('input[type="file"]')
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json")
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });
  it.only("selecione um arquivo simulando um drag-and-dorp", () => {
    cy.get('input[type="file"]')
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json", { action: "drag-drop" })
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });
  it.only("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json").as("sampleFile");
    cy.get('input[type="file"]')
      .selectFile("@sampleFile")
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });
  //testa hiperlink
  it.only("verificar que a politica de privacidade abre em outra aba sem a necessidade de abrir a outra pagina", () => {
    cy.get("#privacy a").should("have.attr", "target", "_blank");
  });

  //usando o invoke e removveATTR para remover o atributo target para nao abrir uma nova aba
  it.only("acessa a pagina da politica de privacidade removendo o target e entao validado o texto", () => {
    cy.get("#privacy a").invoke("removeAttr", "target").click();
    cy.contains("Talking About Testing").should("be.visible");
  });
});
