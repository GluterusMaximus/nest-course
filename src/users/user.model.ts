import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  banReason: string;
}
