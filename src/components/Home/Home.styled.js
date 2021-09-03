import styled from '@emotion/styled/macro';

export const Section = styled.section`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadTitle = styled.h1`
  font-size: 35px;
  margin: 15px 0;
`;

export const WelcomeMessage = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ListTitle = styled.h3`
  font-size: 16px;
`;

export const ListItem = styled.ol`
  font-size: 14px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const AuthInfo = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
