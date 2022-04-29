export { useFileDrop } from "./useFileDrop";

export type DropFunction = (files: FileList) => void;

export type UseFileDropHookSpec = {
  drop: DropFunction;
};
