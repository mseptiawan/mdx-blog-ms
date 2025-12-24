export type TocItem = {
  id: string;
  text: string;
};

export function getTocFromMdx(source: string): TocItem[] {
  const toc: TocItem[] = [];

  // ambil <h2 id="xxx">Judul</h2>
  const regex = /<h2\s+id="([^"]+)">(.+?)<\/h2>/g;

  let match;
  while ((match = regex.exec(source))) {
    toc.push({
      id: match[1],
      text: match[2],
    });
  }

  return toc;
}
