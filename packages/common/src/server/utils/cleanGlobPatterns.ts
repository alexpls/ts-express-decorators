import * as Path from "path";

export function cleanGlobPatterns(files: string | string[], excludes: string[]): string[] {
  excludes = excludes.map((s: string) => "!" + s.replace(/!/gi, "").replace(/\\/g, "/"));

  return []
    .concat(files as any)
    .map((file: string) => {
      if (!require.extensions[".ts"] && !process.env["TS_TEST"]) {
        file = file.replace(/\.ts$/i, ".js");
      }

      return Path.resolve(file).replace(/\\/g, "/");
    })
    .concat(excludes as any);
}
