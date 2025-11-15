export function getModuleTextContent(
  moduleClassName: string,
  moduleCommit: string,
  moduleCommitPath: string,
  moduleContent: string,
) {
  return `
    ${moduleContent}

    function setDeepGlobalValue(root, keys, value) {
      let obj = root;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) {
          obj[keys[i]] = {};
        }

        obj = obj[keys[i]];
      }

      obj[keys[keys.length - 1]] = value;
    }

    setDeepGlobalValue(
      globalThis,
      [
        'spriteGarden',
        'refs',
        '${moduleCommit}',
        '${moduleCommitPath.replaceAll('/', ',').replaceAll(',', "','")}'
      ],
      ${moduleClassName}
    );
  `;
}

export function getDeepGlobalValue(root: any, keys: any) {
  let obj = root;

  for (const key of keys) {
    if (!obj) return undefined;

    obj = obj[key];
  }

  return obj;
}

export function getModuleId(moduleSrc: string) {
  return moduleSrc.replaceAll('/', ':');
}
