'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    ocean: DataTypes.STRING,
    preference: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      list: function () {
        User.findAll({
          order: [['id', 'ASC']]
        }).then(function (user) {
          user.forEach(function(val){
            console.log(val.dataValues);
          })
        })
      },
      addUser: function(name, password, birthdate, ocean, preference) {
        User.create({
          name: name,
          password: password,
          birthdate: birthdate,
          ocean: ocean,
          preference: preference
        }). then(function (){
          console.log("User Added");
        })
      },
      updateUserName: function(id, value){
        User.findById(id).then(function(val){
          val.update({
            name: value
          }).then(function(val){
            if (val.dataValues.id == id){
              console.log(`User ${id} Updated`);
            } else {
              console.log(`User ${id} Not Found`);
            }
          })
        })
      },
      updateUserOCEAN: function(id, value){
        User.findById(id).then(function(err, val){
          val.update({
            ocean: value
          }).then(function(err){
            console.log(`User OCEAN ${id} Updated`);
          })
        })
      },
      deleteUser: function(id){
        User.destroy({where: {id: id}}).then(function(){
          console.log('user deleted');
        })
      },
      updateUserBirthdate: function(id, value){
        User.findById(id).then(function(val){
          val.update({
            birthdate: value
          }).then(function(val){
            if (val.dataValues.id == id){
              console.log(`User ${id} Updated`);
            } else {
              console.log(`User ${id} Not Found`);
            }
          })
        })
      }
    }
  });
  return User;
};
