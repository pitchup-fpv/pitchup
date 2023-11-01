import { visit } from 'unist-util-visit'

function transformer(tree) {
  visit(tree, 'element', node => {
    console.log(node.tagName)
    if (node.tagName === 'img') {
      node.properties.dataAttribute = 'value';
    }
  });

  return tree;
}

export function rehypeImageWrapper() {
  return transformer
}