import { Mutation, Arg, Query } from "type-graphql";
import { Author, AuthorInput } from "./author.dto";

import { getAll, create } from "./author.service";

export class AuthorResolver {
  @Query(() => [Author])
  authors(): Promise<Author[]> {
    return getAll();
  }

  @Mutation(() => Author)
  async addAuthor(@Arg("input") input: AuthorInput) {
    try {
      const user = await create(input);
      return user;
    } catch (e) {
      throw e;
    }
  }
}
