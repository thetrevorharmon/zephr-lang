import React, { useCallback } from "react";
import CodeEditor from "@uiw/react-codemirror";
import { zephyr } from "../../extensions";
import { EditorView } from "@codemirror/view";

import { tailwindConfig } from "../../utilities";

interface Props {
  value: string;
  setValue(value: string): void;
}

export function Editor({ value, setValue }: Props) {
  const handleOnChange = useCallback((value: string) => setValue(value), []);

  const theme = EditorView.theme({
    "&": {
      border: `1px solid ${tailwindConfig.theme.colors.slate["500"]}`,
      borderRadius: tailwindConfig.theme.borderRadius.md,
      overflow: "hidden",
    },
    "&.cm-focused": {
      outline: "none",
      borderColor: tailwindConfig.theme.colors.slate["900"],
    },
    ".cm-scroller": {
      fontFamily: tailwindConfig.theme.fontFamily.mono.join(", "),
      fontSize: tailwindConfig.theme.fontSize.sm[0],
    },
    ".cm-gutter.cm-lineNumbers": {},
    ".cm-gutters": {
      color: tailwindConfig.theme.colors.slate["500"],
      borderColor: tailwindConfig.theme.colors.slate["500"],
      paddingLeft: tailwindConfig.theme.margin["1"],
      backgroundColor: tailwindConfig.theme.colors.slate["200"],
    },
    ".cm-activeLine": {
      backgroundColor: tailwindConfig.theme.colors.slate["100"],
    },
    ".cm-activeLineGutter": {
      backgroundColor: "transparent",
    },
    ".cm-gutterElement.cm-activeLineGutter": {
      color: tailwindConfig.theme.colors.blue["900"],
      fontWeight: "800",
    },
  });

  return (
    <CodeEditor
      value={value}
      extensions={[zephyr, theme]}
      onChange={handleOnChange}
      indentWithTab={false}
    />
  );
}
