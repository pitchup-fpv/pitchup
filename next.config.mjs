import rehypeSlug from 'rehype-slug';
import createMDX from '@next/mdx'
import rehypeToc from "rehype-toc";


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  output: "export",
  basePath: "/",
  images: {
    unoptimized: true,
  }
}

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

function rehypeSection() {
  return transformer
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeToc, {
        headings: ["h1", "h2", "h3"],     // Only include <h1> and <h2> headings in the TOC
        cssClasses: {
          toc: "page-outline",      // Change the CSS class for the TOC
          link: "page-link",        // Change the CSS class for links in the TOC
        },
      }],
      rehypeSection,
    ],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)