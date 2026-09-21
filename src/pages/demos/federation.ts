import { init, getInstance } from "@module-federation/runtime";
import type { ComponentType } from "react";
import { FEDERATION_NAME, FEDERATION_OPTIONS } from "./constants";

function getRuntime() {
  return (
    getInstance((instance) => instance.options.name === FEDERATION_NAME) ??
    init(FEDERATION_OPTIONS)
  );
}

let demosRuntime: ReturnType<typeof getRuntime> | null = null;

export function getDemosRuntime() {
  if (!demosRuntime) {
    demosRuntime = getRuntime();
  }
  return demosRuntime;
}

export async function loadRemoteModule(id: string) {
  const instance = getDemosRuntime();
  const mod = await instance.loadRemote<{ default: ComponentType }>(id);
  if (!mod?.default) {
    throw new Error(`Remote module '${id}' has no default export.`);
  }
  return mod.default;
}