import { useEffect, useState } from 'react';
import { Video, VideoContainer } from './style';

export const Player = () => {
  const [mute, setMute] = useState(true);

  useEffect(() => {
    setTimeout(() => setMute(false), 3000);
    setTimeout(() => setMute(true), 34000);
  }, []);

  return (
    <VideoContainer>
      <Video loop muted={mute} autoPlay>
        <source src="/Videos/masha-aniversario.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};
