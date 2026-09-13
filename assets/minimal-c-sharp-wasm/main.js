import { dotnet } from "./dotnet.js";

export const createRuntime = async () => await dotnet.create();

export const getAssemblyExports = async () => {
  const runtime = await createRuntime();
  const assemblyExports = await runtime.getAssemblyExports(
    runtime.getConfig().mainAssemblyName
  );

  return assemblyExports;
};
