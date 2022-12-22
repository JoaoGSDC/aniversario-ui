import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: brightness(0.25);
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
