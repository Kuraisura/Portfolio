export default function ProjectVideos({ project }) {
  if (!project.media?.videos?.length) return null;
  return (
    <section className="project-videos" aria-label="Project videos">
      <h3>Watch the project</h3>
      {project.media.videos.map((video) => (
        <figure key={video.asset}>
          <div className="project-video-label"><h4>{video.title}</h4><span>{video.kind} · {video.duration}</span></div>
          <video controls playsInline preload="none" poster={video.poster} aria-label={video.title}>
            <source src={video.asset} type="video/mp4" />
            <a href={video.asset}>Open the video</a>
          </video>
          <figcaption>{video.description}</figcaption>
        </figure>
      ))}
    </section>
  );
}
