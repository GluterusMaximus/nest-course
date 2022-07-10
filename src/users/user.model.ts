import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
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
    example: 'example@gmail.com',
    description: 'User email',
  })
  @Column({
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: '12345678',
    description: 'User password',
  })
  @Column({
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: 'true',
    description: 'Is the user banned',
  })
  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'Posting explicit content',
    description: 'Ban reason',
  })
  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  banReason: string;
}
