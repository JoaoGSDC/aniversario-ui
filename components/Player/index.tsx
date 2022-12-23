import { useEffect, useState } from 'react';
import { Video, VideoContainer } from './style';

export const Player = ({ play }: any) => {
  const [mute, setMute] = useState(false);

  useEffect(() => {
    if (!play) {
      return;
    }

    setTimeout(() => setMute(true), 34000);
  }, [play]);

  return (
    <VideoContainer>
      <Video loop muted={mute} playsInline>
        <source src="/Videos/masha-aniversario.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};
