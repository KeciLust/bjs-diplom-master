"use strict";

const userForm = new UserForm();
userForm.loginFormCallback = data => {
  ApiConnector.login(data, result => {
    return result.success ? location.reload() : alert ("Ошибка");
  } );
}
userForm.registerFormCallback = data => {
  ApiConnector.register(data, result => {
    return result.success ? location.reload() : alert ("Ошибка");
  })
}