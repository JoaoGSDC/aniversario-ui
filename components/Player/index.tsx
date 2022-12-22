import { useEffect, useState } from 'react';
import { Video, VideoContainer } from './style';

export const Player = () => {
  const [mute, setMute] = useState(false);

  useEffect(() => {
    setTimeout(() => setMute(true), 34000);
  }, []);

  return (
    <VideoContainer>
      <Video loop muted={true} autoPlay>
        <source src="/Videos/masha-aniversario.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};
