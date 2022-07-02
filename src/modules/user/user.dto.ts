import { Field, ID, ObjectType, InputType } from "type-graphql";
import { IsEmail, MaxLength, MinLength } from "class-validator";

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id: number;

  @Field(() => ID, { nullable: false })
  username: string;

  @Field(() => ID, { nullable: false })
  email: string;

  @Field(() => ID, { nullable: false })
  password?: string;

  @Field(() => ID, { nullable: false })
  avatar?: string;
}

@InputType()
export class UserInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(6, {
    message: "password must be at least 6 characters long",
  })
  password: string;

  @Field(() => String)
  avatar: string;
}
