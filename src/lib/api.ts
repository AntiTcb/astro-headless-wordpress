import { request } from 'graphql-request';

export const queryWordPress = async <T>(query: string) => {
  const uri = "https://ygorganization.com/graphql";
  const results: T = await request(uri, query);
  return results;
}
