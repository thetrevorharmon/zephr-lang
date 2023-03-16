import { NodeSet, NodeType } from "@lezer/common";
import { styleTags, tags } from "@lezer/highlight";
import { ZephyrToken } from "./types";

export const zephyrTokenToNodeType: { [key in ZephyrToken]: NodeType } = {
  topNode: NodeType.define({ id: 0, name: "topNode" }),
  const: NodeType.define({ id: 1, name: "const" }),
  let: NodeType.define({ id: 2, name: "let" }),
  semicolon: NodeType.define({ id: 3, name: "semicolon" }),
  assign: NodeType.define({ id: 4, name: "assign" }),
  number: NodeType.define({ id: 5, name: "number" }),
  string: NodeType.define({ id: 6, name: "string" }),
  identifier: NodeType.define({ id: 7, name: "identifier" }),
  unknown: NodeType.define({ id: 8, name: "unknown" }),
};

export const parserAdapterNodeSet = new NodeSet(
  Object.values(zephyrTokenToNodeType)
).extend(
  styleTags({
    const: tags.keyword,
    let: tags.keyword,
    assign: tags.operator,
    number: tags.number,
    string: tags.string,
    identifier: tags.variableName,
  })
);
