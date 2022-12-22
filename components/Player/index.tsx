import { useEffect, useState } from 'react';
import { Video, VideoContainer } from './style';

export const Player = () => {
  const [mute, setMute] = useState(false);

  useEffect(() => {
    setTimeout(() => setMute(true), 34000);
  }, []);

  useEffect(() => {
    const video = document.querySelector('video');
    video?.play();
  }, []);

  return (
    <VideoContainer>
      <Video autoPlay loop>
        <source src="/Videos/masha-aniversario.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};
