interface VideoProps {
  id: string;
};

function Video(props: VideoProps) {
  return (
    <iframe
      data-testid="video"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
    >
    </iframe>
  );
};

export default Video;