import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({
    example: '67505460-3b88-4099-b236-911c0baf6d71',
    description: 'Unique user identifier',
  })
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({
    example: 'ADMIN',
    description: 'Role value',
  })
  @Column({
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({
    example: 'Administrator',
    description: 'Role description',
  })
  @Column({
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
