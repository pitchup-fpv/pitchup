import rehypeSlug from 'rehype-slug';
import createMDX from '@next/mdx'
import rehypeToc from "rehype-toc";
import { rehypeSection } from './plugins/rehypeSections.mjs';


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  output: "export",
  images: {
    unoptimized: true,
  }
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