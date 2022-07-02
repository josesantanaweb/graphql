import { Field, ID, ObjectType, InputType } from "type-graphql";

@ObjectType()
export class Author {
  @Field(() => ID, { nullable: false })
  id: number;

  @Field(() => ID, { nullable: false })
  firstName: string;

  @Field(() => ID, { nullable: false })
  lastName: string;
}

@InputType()
export class AuthorInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}
