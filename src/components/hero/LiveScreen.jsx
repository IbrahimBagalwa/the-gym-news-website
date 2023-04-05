const LiveScreen = () => {
  return (
    <div className="overflow-hidden pb-[56.25%] relative h-0">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=1&controls=0"
        title="🔴 Al Jazeera English | Live"
        frameborder="0"
        allowfullscreen
        className="let-0 top-0 h-full w-full absolute"
      />
    </div>
  );
};

export default LiveScreen;
