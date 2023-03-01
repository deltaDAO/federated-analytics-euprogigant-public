import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

export function markdownToHtml(markdown: string): string {
  const result = remark()
    .use(remarkGfm)
    .use(remarkHtml) // serializes through remark-rehype and rehype-stringify
    .processSync(markdown);

  return result.toString();
}
