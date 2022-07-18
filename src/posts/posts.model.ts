import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from 'src/users/user.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: string;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
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
  title: string;

  @Column({
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  })
  content: string;

  @Column({ type: DataTypes.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.UUID })
  userId: string;

  @BelongsTo(() => User)
  author: User;
}
