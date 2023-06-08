import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;
  height: 13rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    color: #fff;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.8;
      margin-top: 0.5rem;
    }
  }
`;
