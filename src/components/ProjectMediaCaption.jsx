import { findProjectMedia } from '../utils/projectMedia';

export default function ProjectMediaCaption({ project, asset, dark = false }) {
  const media = findProjectMedia(project, asset);
  if (!media) return null;
  return (
    <div className={`project-media-caption${dark ? ' project-media-caption-dark' : ''}`} aria-live="polite">
      <h3>{media.title}</h3>
      <p>{media.description}</p>
    </div>
  );
}
