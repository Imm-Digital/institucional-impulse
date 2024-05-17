// components/VideoPlayer.tsx
import React from 'react';

type VideoPlayerType = {
    vslId: string;
    isHorizontal: boolean;
}

const VideoPlayer= ({vslId, isHorizontal}: VideoPlayerType ) => {
  return (
    <div className="mx-auto w-full">
      <div className="relative" style={{ paddingTop: isHorizontal ? '56.666666666666664%' : '180%' }}>
        <iframe
          allowFullScreen
          src={`https://scripts.converteai.net/817bd58d-9ef6-4339-97a6-a374233fe748/players/${vslId}/embed.html`}
          id={`ifr_${vslId}`}
          className="absolute top-0 left-0 w-full h-full"
          referrerPolicy="origin"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
