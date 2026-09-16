import type { ReactNode } from "react";

export function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n{2,}/);
  return (
    <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
      {blocks.map((block, i) => (
        <Block key={i} text={block.trim()} />
      ))}
    </div>
  );
}

function isTableBlock(text: string) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return false;
  if (!lines[0].includes("|")) return false;
  return /^\|?\s*:?-{3,}/.test(lines[1].replace(/\|/g, "|")) || lines[1].includes("---");
}

function parseTable(text: string) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const split = (line: string) =>
    line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
  const header = split(lines[0]);
  const body = lines.slice(2).map(split).filter((r) => r.some(Boolean));
  return { header, body };
}

function Block({ text }: { text: string }) {
  if (text.startsWith("## ")) {
    return (
      <h2 className="pt-4 font-display text-2xl font-semibold tracking-tight text-ink">
        {inline(text.slice(3))}
      </h2>
    );
  }
  if (text.startsWith("### ")) {
    return (
      <h3 className="pt-2 font-display text-xl font-semibold text-ink">{inline(text.slice(4))}</h3>
    );
  }
  if (isTableBlock(text)) {
    const { header, body } = parseTable(text);
    return (
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-cream">
            <tr>
              {header.map((h) => (
                <th key={h} className="border-b border-line px-3 py-2 font-semibold text-ink">
                  {inline(h)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} className="odd:bg-paper even:bg-cream/40">
                {row.map((cell, ci) => (
                  <td key={ci} className="border-b border-line px-3 py-2 align-top">
                    {inline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (text.startsWith("- ") || text.startsWith("* ")) {
    const items = text.split("\n").filter((l) => /^[-*]\s+/.test(l));
    return (
      <ul className="list-disc space-y-1 pl-5">
        {items.map((item) => (
          <li key={item}>{inline(item.replace(/^[-*]\s+/, ""))}</li>
        ))}
      </ul>
    );
  }
  if (/^\d+[.)]\s+/.test(text)) {
    const items = text.split("\n").filter((l) => /^\d+[.)]\s+/.test(l));
    return (
      <ol className="list-decimal space-y-1 pl-5">
        {items.map((item) => (
          <li key={item}>{inline(item.replace(/^\d+[.)]\s+/, ""))}</li>
        ))}
      </ol>
    );
  }
  return <p>{inline(text)}</p>;
}

function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let k = 0;
  while ((match = re.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(
        <strong key={k} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      const m = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (m) {
        const href = m[2];
        const label = m[1];
        parts.push(
          <a
            key={k}
            href={href}
            className="font-semibold text-mint underline-offset-2 hover:underline"
            {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {label}
          </a>,
        );
      }
    }
    k += 1;
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
