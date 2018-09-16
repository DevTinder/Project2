module.exports = function(sequelize, DataTypes) {
  var Developer = sequelize.define("Developer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    portfolio: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    html: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    css: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    javascript: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    java: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    nodeJS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    angular: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    react: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    python: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    avgRating: {
      type: DataTypes.INTEGER
    },
    ratingCount: {
        type: DataTypes.INTEGER
      }
  });

  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js

  // Post.associate = function (models) {
  //   models.Post.belongsTo(models.Author, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false
  //           }
  //   });
  // };
  return Developer;
};