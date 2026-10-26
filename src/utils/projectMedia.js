export function findProjectMedia(project, asset) {
  return [
    ...(project.media?.screenshots || []),
    ...(project.media?.additionalScreenshots || []),
    ...(project.media?.videos || []),
  ].find((entry) => entry.asset === asset);
}
