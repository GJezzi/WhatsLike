describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the E-mail field', async () => {
    await expect(element(by.id('inputEmail'))).toBeVisible();
  });

  it('should show the password field', async () => {
    await expect(element(by.id('inputSenha'))).toBeVisible();
  });

  it('should show the create user link', async () => {
    await expect(element(by.id('formCadastro'))).toBeVisible();
  });

  it('should show the acessar button', async () => {
    await expect(element(by.id('btnAcessar'))).toBeVisible();
  });
  
  it('should show form cadastro after tap', async () => {
    await element(by.id('formCadastro')).tap();
    //await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
