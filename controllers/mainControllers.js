const controller = {
    getIndex: function(req, res){
        res.send ("estas en Index");
    
    getHome: function(req, res){
        res.send ("estas en HOME");

    getLogin: function(req, res){
        res.send ("estas en login");

    getRegister: function(req, res){
        res.send ("estas en register");

    }
    
}

module.express = controller;