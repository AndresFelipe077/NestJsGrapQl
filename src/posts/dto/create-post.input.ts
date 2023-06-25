import { Field, InputType } from "@nestjs/graphql"
import { IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";


@InputType()
export class createPostInput {

  @MinLength(3, {
    message: 'Title is too short',
  })
  @MaxLength(10, {
    message: 'Title is long short',
  })
  @IsNotEmpty({
    message: 'Title is required',
  })
  @Field()
  title: string;

  @MaxLength(10)
  @Field({ nullable: true })
  content?: string;

  @IsInt()
  @Field()
  authorId: number;
  
}