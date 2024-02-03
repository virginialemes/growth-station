describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://growth-station-client-git-processo-qa-growthmachine.vercel.app/login')
  });

  it('Login com credenciais válidas ', () => {
    cy.get('input[type="email"]').type('usuariodaempresa3@gmail.com');
    cy.get('input[type="password"]').type('Senha.123');
    cy.get('.bg-orange-500').click();

    cy.url().should('eq', 'https://growth-station-client-git-processo-qa-growthmachine.vercel.app/materials');
    cy.contains('MANUAIS PARA CONSULTA').should('be.visible');
  })

    it('Login com usuario inválido', () => {
      cy.get('input[type="email"]').type('usuariodaempresa4@gmail.com ');
      cy.get('input[type="password"]').type('Senha.123');
      cy.get('.bg-orange-500').click();
  
      cy.contains('E-mail ou senha inválidos').should('be.visible');
      cy.url().should('not.eq', 'https://growth-station-client-git-processo-qa-growthmachine.vercel.app/');
    });

    it('Login com senha inválida', () => {
      cy.get('input[type="email"]').type('usuariodaempresa3@gmail.com ');
      cy.get('input[type="password"]').type('Senha.1234');
      cy.get('.bg-orange-500').click();
  
      cy.contains('E-mail ou senha inválidos').should('be.visible');
      cy.url().should('not.eq', 'https://growth-station-client-git-processo-qa-growthmachine.vercel.app/');
    });

    it('Tentativa de login com campos em branco', () => {
      cy.get('.bg-orange-500').click();
  
      cy.contains('E-mail ou senha inválidos').should('be.visible');
      cy.url().should('not.eq', 'https://growth-station-client-git-processo-qa-growthmachine.vercel.app/');
    });

    it('Acesso a página de recuperação de senha ao clicar em "Esqueceu a senha?"', () => {
      cy.contains('Esqueceu a senha?').click();
      cy.url().should('eq', 'https://growth-station-client-git-processo-qa-growthmachine.vercel.app/forgotPass');
  
      cy.get('input[type="email"]').should('be.visible');
      cy.contains('Enviar E-mail').should('be.visible');
    });
  
    it('Deve enviar um e-mail de recuperação após fornecer um e-mail válido', () => {
      cy.contains('Esqueceu a senha?').click();
      cy.get('input[type="email"]').type('usuariodaempresa3@gmail.com');
      cy.contains('Enviar E-mail').click();
      cy.contains('Email enviado com sucesso!').should('be.visible');;
    });
    
    it('Tentativa de recuperação de senha com e-mail inválido', () => {
      cy.contains('Esqueceu a senha?').click();
      cy.url().should('eq', 'https://growth-station-client-git-processo-qa-growthmachine.vercel.app/forgotPass');

      cy.get('input[type="email"]').type('teste@teste.com');
      cy.contains('Enviar E-mail').click();
      cy.contains('Usuário não encontrado').should('be.visible');
    });

    it('Acesso a página quando não é cliente', () => {
      cy.contains('Não é cliente?').click();
    });

    it('Deve redirecionar para o LinkedIn', () => {
    cy.get('a[href="https://www.linkedin.com/company/growthmachine').click();
    cy.window().then((win) => {
      win.open('about:blank');
      win.location.href = 'about:blank'; 
      win.close(); 
      cy.window().then((win) => {
        win.focus(); 
      });
    });
    cy.wait(2000);
    cy.url().should('include', 'linkedin.com/company/growthmachine');
  });
    it('Deve redirecionar para o Facebook', () => {
      cy.get('a[href="https://www.facebook.com/growthmachineMC').click();
      cy.window().then((win) => {
        win.open('about:blank');
        win.location.href = 'about:blank'; 
        win.close(); 
        cy.window().then((win) => {
          win.focus(); 
        });
      });
      cy.wait(2000);
      cy.url().should('include', 'facebook.com/growthmachineMC');
    });
    it('Deve redirecionar para o YoutTube', () => {
      cy.get('a[href="https://www.youtube.com/@thiago.reis.gm.').click();
      cy.window().then((win) => {
        win.open('about:blank');
        win.location.href = 'about:blank'; 
        win.close(); 
        cy.window().then((win) => {
          win.focus(); 
        });
      });
      cy.wait(2000);
      cy.url().should('include', 'youtube.com/@thiago.reis.gm.');
    });
    it('Deve redirecionar para Spotify', () => {
      cy.get('a[href="href="https://open.spotify.com/show/7lKcTLsJg6BOXta99u1FzW/').click();
      cy.window().then((win) => {
        win.open('about:blank');
        win.location.href = 'about:blank'; 
        win.close(); 
        cy.window().then((win) => {
          win.focus(); 
        });
      });
      cy.wait(2000);
      cy.url().should('include', 'open.spotify.com/show/7lKcTLsJg6BOXta99u1FzW');
    });
    it('Deve redirecionar para Instagran', () => {
      cy.get('a[href="https://www.instagram.com/growthmachinebr/').click();
      cy.window().then((win) => {
        win.open('about:blank');
        win.location.href = 'about:blank'; 
        win.close(); 
        cy.window().then((win) => {
          win.focus(); 
        });
      });
      cy.wait(2000);
      cy.url().should('include', 'instagram.com/growthmachinebr/');
    });
  });