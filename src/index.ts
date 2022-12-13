import isFalsy from "./utils/isFalsy";
import zip from "./utils/zip";
import { Return } from "./types";

const EMPTY = "";

export const f = <T>(segmentsOrFallback: T, ...args: unknown[]): Return<T> => {
  const hasFallback = !Array.isArray(segmentsOrFallback);

  const formatter = (segments: string[], ...args: unknown[]) =>
    args.some(isFalsy)
      ? hasFallback
        ? segmentsOrFallback
        : EMPTY
      : zip(segments, args).flat().join(EMPTY);

  return hasFallback
    ? (formatter as Return<T>)
    : (formatter(segmentsOrFallback as string[], ...args) as Return<T>);
};

export default { f };
