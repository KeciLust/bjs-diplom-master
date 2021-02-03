"use strict";

const userForm = new UserForm();
userForm.loginFormCallback = data => {
  ApiConnector.login(data, result => {
  
    return result.success ? location.reload() : userForm.setLoginErrorMessage(`Неправильный логин или пароль`);

  });
}
userForm.registerFormCallback = data => {
  ApiConnector.register(data, result => {
    return result.success ? location.reload() : userForm.setRegisterErrorMessage(`Не все поля заполнены`);
  });
}