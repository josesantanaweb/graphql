import { Field, ID, ObjectType, InputType } from "type-graphql";
import { IsEmail, MinLength } from "class-validator";

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

  @Field(() => String)
  avatar?: string | null;
}

@InputType()
export class RegisterInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(6, {
    message: "Password must be at least 6 characters long",
  })
  password: string;

  @Field(() => String)
  avatar: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  @MinLength(6, {
    message: "password must be at least 6 characters long",
  })
  password: string;
}
