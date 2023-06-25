import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from 'src/authors/entities/author.entity';
import { ManyToOne, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ type:'text', nullable: true })
  @Field({ nullable: true })
  content?: string;

  @Column()
  @Field(() => Int)
  authorId: number;

  @ManyToOne(() => Post, (post) => post.author)
  @Field(() => Author)
  author: Author;

}