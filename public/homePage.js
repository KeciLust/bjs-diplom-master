const logout = new LogoutButton();
logout.action = () => {
    ApiConnector.logout(result => {
        if (result.success) {
            return location.reload();
        }
    });
}
ApiConnector.current(result => {
    if (result.success) {
        return ProfileWidget.showProfile(result.data);
    }
});




const ratesBoard = new RatesBoard();

function newRatesBoard() {
    ApiConnector.getStocks(result => {
        if (result.success) {
            ratesBoard.clearTable();
            ratesBoard.fillTable(result.data);
        }
    });
}
newRatesBoard();
setInterval(newRatesBoard, 60000);




const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, (result) => {
        let message;
        if (result.success) {
            ProfileWidget.showProfile(result.data);
            message = `Операция выполнена`;
        } else {
            message = result.error;
        }
        return moneyManager.setMessage(result.success, message);

    })
}
moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, (result) => {
        let message;
        if (result.success) {
            ProfileWidget.showProfile(result.data);
            message = `Операция выполнена`;
        } else {
            message = result.error;
        }
        return moneyManager.setMessage(result.success, message);
    })
}

moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, (result) => {
        let message;
        if (result.success) {
            ProfileWidget.showProfile(result.data);
            message = `Операция выполнена`;
        } else {
            message = result.error;
        }
         moneyManager.setMessage(result.success, message);
    })
}


const favoritesWidget = new FavoritesWidget();
ApiConnector.getFavorites(result => {
    if(result.success) {
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(result.data);
        moneyManager.updateUsersList(result.data);
    }
})
favoritesWidget.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, (result) => {
        let message;
     if(result.success) {
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(result.data);
        moneyManager.updateUsersList(result.data);
        message = `Операция выполнена`;
     } else {
         message = result.error;
     } favoritesWidget.setMessage(result.success, message);
    })
}
favoritesWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, (result) => { 
        let message;
        if(result.success) {
           favoritesWidget.clearTable();
           favoritesWidget.fillTable(result.data);
           moneyManager.updateUsersList(result.data);
           message = `Операция выполнена`;
        } else {
            message = result.error;
        } favoritesWidget.setMessage(result.success, message);
    })

}

