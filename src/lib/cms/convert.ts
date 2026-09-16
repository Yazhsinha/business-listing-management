/** Markdown (existing posts) → HTML for the desk editor. */
export function markdownToHtml(source: string) {
  const blocks = source.trim().split(/\n{2,}/);
  return blocks
    .map((raw) => {
      const text = raw.trim();
      if (text.startsWith("## ")) return `<h2>${inline(text.slice(3))}</h2>`;
      if (text.startsWith("### ")) return `<h3>${inline(text.slice(4))}</h3>`;
      if (isTableBlock(text)) return tableHtml(text);
      if (text.startsWith("- ") || text.startsWith("* ")) {
        const items = text.split(/\n/).filter((l) => /^[-*]\s+/.test(l));
        return `<ul>${items.map((i) => `<li>${inline(i.replace(/^[-*]\s+/, ""))}</li>`).join("")}</ul>`;
      }
      if (/^\d+[.)]\s+/.test(text)) {
        const items = text.split(/\n/).filter((l) => /^\d+[.)]\s+/.test(l));
        return `<ol>${items.map((i) => `<li>${inline(i.replace(/^\d+[.)]\s+/, ""))}</li>`).join("")}</ol>`;
      }
      return `<p>${inline(text)}</p>`;
    })
    .join("");
}

function isTableBlock(text: string) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return false;
  if (!lines[0].includes("|")) return false;
  return lines[1].includes("---");
}

function splitRow(line: string) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

function tableHtml(text: string) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const header = splitRow(lines[0]);
  const body = lines.slice(2).map(splitRow).filter((r) => r.some(Boolean));
  const th = header.map((h) => `<th>${inline(h)}</th>`).join("");
  const tr = body
    .map((row) => `<tr>${row.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
    .join("");
  return `<table><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table>`;
}

function inline(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function estimateMinutes(html: string) {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 220));
}
