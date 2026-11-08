/**
 * Turn labelled Markdown blockquotes into semantic, styled callouts.
 *
 * Supported syntax:
 * > [!NOTE]
 * > Message
 *
 * Also accepts the blog's original **Note** / **Tip** heading style.
 */
const TYPES = new Set(["NOTE", "TIP", "WARNING", "SUCCESS", "DANGER", "IMPORTANT"]);

function textOf(node) {
  if (!node) return "";
  if (node.type === "text") return node.value || "";
  return (node.children || []).map(textOf).join("");
}

function remarkCallouts() {
  return (tree) => {
    for (const node of tree.children || []) {
      if (node.type !== "blockquote" || !node.children?.length) continue;

      const first = node.children[0];
      if (first.type !== "paragraph" || !first.children?.length) continue;

      let type = "";
      const firstChild = first.children[0];

      if (firstChild.type === "text") {
        const match = firstChild.value.match(/^\s*\[!(NOTE|TIP|WARNING|SUCCESS|DANGER|IMPORTANT)\]\s*/i);
        if (match) {
          type = match[1].toUpperCase();
          firstChild.value = firstChild.value.slice(match[0].length);
          if (!firstChild.value) first.children.shift();
          if (!first.children.length) node.children.shift();
        }
      }

      if (!type && firstChild.type === "strong") {
        const label = textOf(firstChild).trim().replace(/:$/, "").toUpperCase();
        if (TYPES.has(label)) {
          type = label;
          node.children.shift();
        }
      }

      if (!type) continue;

      const normalized = type.toLowerCase();
      node.data = {
        ...(node.data || {}),
        hName: "aside",
        hProperties: {
          ...(node.data?.hProperties || {}),
          className: ["callout", `callout-${normalized}`],
          "data-callout": normalized,
          role: "note",
        },
      };

      const title = {
        type: "paragraph",
        data: { hProperties: { className: ["callout-title"] } },
        children: [{ type: "text", value: type.charAt(0) + type.slice(1).toLowerCase() }],
      };
      node.children.unshift(title);
    }
  };
}

export default remarkCallouts;
