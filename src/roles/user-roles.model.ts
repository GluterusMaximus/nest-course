import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from 'src/users/user.model';
import { Role } from './role.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.UUID })
  userId: string;

  @ForeignKey(() => Role)
  @Column({ type: DataTypes.UUID })
  roleId: string;
}
