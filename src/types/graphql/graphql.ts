/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  hello?: Maybe<Scalars['String']['output']>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GetHelloAndUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetHelloAndUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, name: string, email: string } | null };


export const GetHelloAndUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHelloAndUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetHelloAndUserQuery, GetHelloAndUserQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  hello?: Maybe<Scalars['String']['output']>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GetHelloAndUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetHelloAndUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, name: string, email: string } | null };


export const GetHelloAndUserDocument = gql`
    query GetHelloAndUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
  }
}
    `;

/**
 * __useGetHelloAndUserQuery__
 *
 * To run a query within a React component, call `useGetHelloAndUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHelloAndUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHelloAndUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetHelloAndUserQuery(baseOptions: Apollo.QueryHookOptions<GetHelloAndUserQuery, GetHelloAndUserQueryVariables> & ({ variables: GetHelloAndUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHelloAndUserQuery, GetHelloAndUserQueryVariables>(GetHelloAndUserDocument, options);
      }
export function useGetHelloAndUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHelloAndUserQuery, GetHelloAndUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHelloAndUserQuery, GetHelloAndUserQueryVariables>(GetHelloAndUserDocument, options);
        }
export function useGetHelloAndUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHelloAndUserQuery, GetHelloAndUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHelloAndUserQuery, GetHelloAndUserQueryVariables>(GetHelloAndUserDocument, options);
        }
export type GetHelloAndUserQueryHookResult = ReturnType<typeof useGetHelloAndUserQuery>;
export type GetHelloAndUserLazyQueryHookResult = ReturnType<typeof useGetHelloAndUserLazyQuery>;
export type GetHelloAndUserSuspenseQueryHookResult = ReturnType<typeof useGetHelloAndUserSuspenseQuery>;
export type GetHelloAndUserQueryResult = Apollo.QueryResult<GetHelloAndUserQuery, GetHelloAndUserQueryVariables>;