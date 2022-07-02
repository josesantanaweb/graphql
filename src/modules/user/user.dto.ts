import { Field, ID, ObjectType, InputType } from "type-graphql";

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
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  avatar: string;
}
