// hooks/useCKEditorSyncedVariables.js
import { useState, useEffect } from "react";

export function useCKEditorSyncedVariables(editor) {
  const [variables, setVariables] = useState({});

  // Extract variables from editor content when editor is ready
  const initVariablesFromEditor = () => {
    if (!editor) return;

    const html = editor.getData();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const spans = doc.querySelectorAll(".variable-placeholder[data-variable]");
    const initialVars = {};
    spans.forEach((el) => {
      const name = el.dataset.variable;
      initialVars[name] = el.innerText.trim();
    });
    setVariables(initialVars);
  };

  // Update CKEditor content when variables state changes
  useEffect(() => {
    if (!editor) return;

    editor.model.change((writer) => {
      const root = editor.model.document.getRoot();
      for (const [varName, value] of Object.entries(variables)) {
        for (const item of editor.model.createRangeIn(root)) {
          if (
            item.item.is("element", "span") &&
            item.item.getAttribute("data-variable") === varName
          ) {
            const oldValue = item.item.getChild(0)?.data;
            if (oldValue !== value) {
              // Remove old text and insert new
              for (const child of item.item.getChildren()) {
                writer.remove(child);
              }
              writer.insertText(value, item.item, 0);
            }
          }
        }
      }
    });
  }, [variables, editor]);

  return { variables, setVariables, initVariablesFromEditor };
}
