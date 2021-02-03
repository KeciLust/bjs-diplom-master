"use strict";

const userForm = new UserForm();
userForm.loginFormCallback = data => {
  ApiConnector.login(data, result => {
  console.log(result)
    return result.success ? location.reload() : userForm.setLoginErrorMessage(result.error);

  });
}
userForm.registerFormCallback = data => {
  ApiConnector.register(data, result => {
    return result.success ? location.reload() : userForm.setRegisterErrorMessage(result.error);
  });
}