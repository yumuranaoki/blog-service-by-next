import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PostProps } from '../../reducers/feed';
import Router from 'next/router'

const Container = styled.section`
  border: black solid 1px; 
`;

export const PostInList: React.FC<PostProps> = ({ id, title, place, detail }) => {
  return (
    <Container>
      <Link href={{ pathname: "/post", query: { id }}} as={`/post/${id}`}>
        <div>
          <span>{ title }</span>
          <p>{ place }</p>
          <p>{ detail }</p>
        </div>
      </Link>
    </Container>
  )
}