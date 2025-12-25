export function getModuleId(moduleSrc: string) {
  return moduleSrc.replaceAll('/', ':');
}
