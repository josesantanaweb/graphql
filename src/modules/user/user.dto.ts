import { Field, ID, ObjectType, InputType } from "type-graphql";
import { IsEmail, MaxLength, MinLength } from "class-validator";

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  username: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password?: string;

  @Field(() => String, { nullable: false })
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

  @Field(() => String, { nullable: false })
  avatar: string;
}
