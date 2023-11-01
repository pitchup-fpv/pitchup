import { h } from 'hastscript'
import { heading as isHeading } from 'hast-util-heading'

function parseDepth(str) {
  return parseInt(str[1], 10)
}

function wDepth(div) {
  const divClassNames = div.properties.className
  const divDepth = parseDepth(divClassNames[0])
  return divDepth
}

function w(depth, children) {
  return h(`section.h${depth}Wrapper.headingWrapper`, children)
}

function transformer(tree, _) {
  const rootChildren = tree.children

  let currentWrapper = null;
  let result = [];

  for (let elem of rootChildren) {
    if (isHeading(elem)) {
      // If a wrapper already exists, push it to the result array
      if (currentWrapper) {
        result.push(currentWrapper);
      }

      // Start a new wrapper for the new heading
      const elemDepth = parseDepth(elem.tagName);
      currentWrapper = w(elemDepth, [elem]);
    } else {
      // If a wrapper doesn't exist, create a new one
      if (!currentWrapper) {
        currentWrapper = w(0, []);
      }

      // Add the non-heading element to the current wrapper
      currentWrapper.children.push(elem);
    }
  }

  // Add the last wrapper to the result if it exists
  if (currentWrapper) {
    result.push(currentWrapper);
  }

  // Replace the tree's children with the result array
  tree.children = result;

  return tree;
}

export function rehypeSection() {
  return transformer
}
