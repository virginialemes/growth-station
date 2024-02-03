describe('Playbook', () => {
  beforeEach(() => {
    cy.visit('https://growth-station-client-git-processo-qa-growthmachine.vercel.app/login')
    cy.get('input[type="email"]').type('usuariodaempresa3@gmail.com');
    cy.get('input[type="password"]').type('Senha.123');
    cy.get('.bg-orange-500').click();
    cy.contains('Conteúdos').click();
    cy.contains('Playbook').click();
 });

  it('Acesso ao playbook Introdução', () => {
    cy.contains('Introdução').should('be.visible');
    cy.contains('Manifesto').should('be.visible');
    cy.contains('O que é um Playbook').should('be.visible');
    cy.contains('Principais objetivos do Playbook').should('be.visible');
  })

  it('Acesso ao playbook Glossário ', () => {
    cy.contains('Glossário').click().should('be.visible');
  })

  it('Acesso ao playbook A Empresa ', () => {
    cy.contains('A Empresa Exemplo 3').click().should('be.visible');
    cy.contains('Nossa história').should('be.visible');
    cy.contains('Nossa cultura, missão, visão e valores').should('be.visible');
    cy.contains('Entendendo sobre as áreas da empresa').should('be.visible');
    cy.contains('Nossas soluções').should('be.visible');
    cy.contains('Nossos diferenciais').should('be.visible');
    cy.contains('Nossos clientes').should('be.visible');
  })

  it('Acesso ao playbook O processo da Máquina de Vendas', () => {
    cy.contains(' O processo da Máquina de Vendas').click().should('be.visible');
    cy.contains('Vendas consultivas').should('be.visible');
  })

  it('Acesso ao playbook Atribuições, capacitação e desenvolvimento ', () => {
    cy.contains('Atribuições, capacitação e desenvolvimento').click().should('be.visible');
    cy.contains('Atribuições').should('be.visible');
    cy.contains('Rotina').should('be.visible');
  })

  it('Acesso ao playbook Canais de aquisição de clientes', () => {
    cy.contains('Canais de aquisição de clientes').click().should('be.visible');
    cy.contains('O que são canais de aquisição de clientes').should('be.visible');
    cy.contains('Tipos de canais de geração de demanda').should('be.visible');
  })

  it('Acesso ao playbook Estratégia', () => {
    cy.contains('Estratégia').click().should('be.visible');
  })

  it('Inteligência comercial (IC)', () => {
    cy.contains('Inteligência comercial (IC)').click().should('be.visible');
    cy.contains('Etapas da inteligência comercial').should('be.visible');
    cy.contains('Matriz de inteligência comercial').should('be.visible');
    cy.contains('Softwares de inteligência comercial').should('be.visible');
    cy.contains('Construção e armazenamento da lista de prospecção').should('be.visible');
  })
  
  it('Acesso ao playbook Processo de prospecção', () => {
    cy.contains('Processo de prospecção').click().should('be.visible');
    cy.contains('Cadência de prospecção').should('be.visible');
    cy.contains('Pesquisa de Ativação').should('be.visible');
    cy.contains('Cold Mail').should('be.visible');
    cy.contains('Social Points').should('be.visible');
    cy.contains('SPIN Selling na prospecção').should('be.visible');
    cy.contains('Contorno de Gatekeeper').should('be.visible');
  })
  it('Processo de Vendas', () => {
    cy.contains('Processo de Vendas').click().should('be.visible');
  })
    });