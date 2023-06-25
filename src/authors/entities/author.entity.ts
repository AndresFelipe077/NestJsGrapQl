import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';
import { OneToMany, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {
  
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Post, 'Post')
  @Field(() => [Post], { nullable: true } )
  posts: Post[];

}
