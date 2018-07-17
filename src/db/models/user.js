import Sequelize from "sequelize";
import Model from "../../utils/Model";
import config from "../../config";
import jwt from "jsonwebtoken";

class User extends Model {
  static get fields() {
    return {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      avatarUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    }
  }

  static get params() {
    return {
      tableName: "Users",
      timestamps: true,
      freezeTableName: true
    };
  }

  getAccessToken() {
    return jwt.sign({ id: this.id }, config.jwt.secret, {
      expiresIn: config.jwt.tokenExpireTime
    });
  }
}

export default User;