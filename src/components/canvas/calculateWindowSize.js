export default function calculateWindowSize(resx, resy, containerWidth, containerHeight, padding = 0) {
  const size = Math.min(Math.floor((containerWidth - padding) / resx), 
    Math.floor((containerHeight - padding) / resy))

  return { width: resx * size, height: resy * size }
}