import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  border-radius: 0.25rem;
  width: 30rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      background: transparent;
      border: none;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      margin-top: 0.25rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      img {
        border-radius: 0.25rem;
      }

      .quantity {
        color: #666;
        font-size: 0.875rem;
        min-width: 1.25rem;
        margin-left: 0.75rem;
        display: block;
      }

      .product-details {
        margin-left: 0.25rem;

        strong {
          margin-bottom: 0.25rem;
          display: block;
        }

        span {
          color: #666;
          font-size: 0.875rem;
        }
      }

      & + .item {
        margin-top: 1rem;
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    span {
      font-size: 0.875rem;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #333;
    color: #fff;
    border: 0;
    border-radius: 3rem;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .secondary {
    background: none;
    border: none;
    color: #D73035;
    font-weight: 600;
    margin-top: 0.5rem;
    padding: 0.75rem 1.5rem;
  }
`;
