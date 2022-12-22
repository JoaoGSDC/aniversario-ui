import { useState } from 'react';
import { Maps } from '../components/Maps';
import { Player } from '../components/Player';
import { ButtonPrimary } from '../styles/globals';
import {
  AvatarContainer,
  BirthdayPersonContent,
  ButtonsContainer,
  ButtonsContainerMap,
  CloseButton,
  Container,
  HeaderContainer,
  InformationsContent,
  InfoTextContainer,
  InfoTextContent,
  LocalizationContainer,
  MainText,
  MashaImage,
  MenuButton,
  PlayerButton,
} from '../styles/Home';

export default function Home() {
  const [giftsList, setGiftList] = useState(false);
  const [localization, setLocalization] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);

  const [openInfos, setOpenInfos] = useState(false);

  return (
    <>
      <Container>
        <nav>
          <MenuButton onClick={() => setOpenInfos((_openInfos) => !_openInfos)}>☰</MenuButton>
        </nav>

        {!(giftsList || localization) ? (
          <MashaImage>
            <img src="/Images/Masha.png" alt="masha" />
          </MashaImage>
        ) : null}

        <InformationsContent backgroundColor={giftsList || localization ? '#f1f3f4' : 'transparent'}>
          {!isPlayed ? (
            <>
              <PlayerButton
                onClick={() => {
                  setIsPlayed(true);
                  document.querySelector('video')?.play();
                }}
              >
                ▶
              </PlayerButton>
            </>
          ) : null}
          {!(giftsList && localization) && isPlayed ? (
            <MainText left={giftsList || localization ? '-1100px' : '64px'}>
              <h3>É aniversário da</h3>
              <h1>Violetta!</h1>

              <p>
                No aniversário da Violetta ficaremos muito felizes com a sua presença! Caso você queira alguma
                recomendação de qual presente comprar você pode conferir aqui no site. Além disso, você também pode
                conferir a localização e demais informações do aniversário dessa princesa linda!
              </p>

              <ButtonsContainer>
                <ButtonPrimary backgroundColor="#c52a93" onClick={() => setGiftList(true)}>
                  Lista de Presentes
                </ButtonPrimary>
                <ButtonPrimary backgroundColor="#781959" onClick={() => setLocalization(true)}>
                  Localização
                </ButtonPrimary>
              </ButtonsContainer>
            </MainText>
          ) : null}

          {localization ? (
            <LocalizationContainer>
              <HeaderContainer>
                <h1>Localização</h1>

                <CloseButton onClick={() => setLocalization(false)}>X</CloseButton>
              </HeaderContainer>

              <Maps />

              <ButtonsContainerMap>
                <ButtonPrimary
                  backgroundColor="#c52a93"
                  onClick={() => {
                    window.location = 'geo:40.765819,-73.975866' as any;
                  }}
                >
                  Abrir GPS
                </ButtonPrimary>
                <ButtonPrimary backgroundColor="#181818">Abrir Uber</ButtonPrimary>
              </ButtonsContainerMap>
            </LocalizationContainer>
          ) : null}
        </InformationsContent>

        <BirthdayPersonContent open={openInfos}>
          <hr />

          <h1>Violetta</h1>

          <AvatarContainer>
            <img src="/Images/violetta.jpg" alt="violetta" />
          </AvatarContainer>

          <InfoTextContainer>
            <InfoTextContent>
              <h4>Idade</h4>
              <h1>2 anos</h1>
            </InfoTextContent>

            <InfoTextContent>
              <h4>Data da festa</h4>
              <h1>19 de março</h1>
            </InfoTextContent>

            <InfoTextContent>
              <h4>Horário</h4>
              <h1>14:00</h1>
            </InfoTextContent>
          </InfoTextContainer>
        </BirthdayPersonContent>
      </Container>

      <Player />
    </>
  );
}
