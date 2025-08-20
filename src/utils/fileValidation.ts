export const validateFile = (file: File): boolean => {
  const maxSize = 888 * 1024;
  return file.size <= maxSize
}