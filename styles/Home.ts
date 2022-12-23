import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
`;

export const InformationsContent = styled.div.attrs((props: { backgroundColor: string }) => props)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  transition: 0.8s;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.backgroundColor};
`;

export const MainText = styled.div.attrs((props: { left: string }) => props)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.left};
  justify-content: center;
  transition: 0.4s;

  h3 {
    margin: 0;
    font-weight: 400;
    font-size: 2rem;
  }

  h1 {
    margin: 0;
    font-size: 8rem;
  }

  p {
    max-width: 50%;
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    left: 16px;
    bottom: auto;
    top: 72px;
    text-align: center;
    width: calc(100% - 32px);

    h1 {
      font-size: 6rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      max-width: 100%;
    }
  }

  @media (max-height: 800px) {
    top: 24px;
  }
`;

export const BirthdayPersonContent = styled.div.attrs((props: { open: boolean }) => props)`
  height: 100%;
  width: 600px;
  background: linear-gradient(90deg, #c52a94f1, #c52a94f1), url(/Images/masha-e-urso.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: sticky;
  right: 0px;

  transition: 0.4s;

  hr {
    width: 80%;
    height: 2px;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 32px;
    border: none;
    background-color: #781959;

    @media (max-width: 600px) {
      display: none;
    }
  }

  h1 {
    color: #fff;

    @media (max-width: 600px) {
      margin-bottom: 0px;
    }
  }

  @media (max-width: 600px) {
    width: 75%;
    position: absolute;

    right: ${(props) => (props.open ? '0px' : '-100%')};
  }
`;

export const MashaImage = styled.figure`
  margin: 0px;
  padding: 0px;
  position: absolute;
  width: 360px;
  bottom: -16%;
  right: 16%;
  z-index: 2;

  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 65%;
    bottom: -16%;
    left: 0;
    right: 0;
    margin: auto;
  }

  @media (max-height: 700px) {
    bottom: -25%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;

  button:first-child {
    margin-right: 16px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonsContainerMap = styled(ButtonsContainer)`
  @media (max-width: 600px) {
    button {
      height: 60px;

      &:first-child {
        margin-right: 0px;
      }
    }
  }
`;

export const AvatarContainer = styled.figure`
  margin: 0;
  padding: 0;
  border-radius: 50%;

  width: 200px;
  height: 200px;

  margin-top: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const InfoTextContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin-top: 32px;
  flex-direction: column;
`;

export const InfoTextContent = styled.div`
  text-align: right;
  color: #fff;

  margin-bottom: 24px;

  h4,
  h1 {
    margin: 0px;
  }
`;

export const LocalizationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  display: flex;

  h1 {
    color: #c52a93;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  z-index: 10;
  right: 24px;
  top: 24px;
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: #c52a93;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
`;

export const MenuButton = styled(CloseButton)`
  background-color: transparent;
  font-size: 2rem;
`;

export const PlayerButton = styled.button`
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: transparent;
  color: #ffffff9e;
  font-size: 100px;
  border: none;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    font-size: 80px;
  }

  @media (max-width: 600px) {
    top: 25%;
  }
`;
