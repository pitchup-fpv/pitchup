import { Box, Typography } from '@mui/joy'
import type { MDXComponents } from 'mdx/types'
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

type CustomLinkProps = Omit<LinkProps, 'href'> & { href?: string, children: React.ReactNode }

const CustomLink: FC<CustomLinkProps> = (props) => {
  const { href, ...rest } = props;

  if (href === undefined) {
    return <a {...props} />
  }

  if (href.toString().startsWith('/')) {
    return (
      <Link href={href} {...rest}>
        {props.children}
      </Link>
    );
  }

  if (href.toString().startsWith('#')) {
    const newProps = {
      ...rest,
      href: href.toString()
    }
    return <a {...newProps} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...rest} />;
};

type CustomHeadingProps = {
  id?: string,
  level: 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode
}

const CustomHeading: FC<CustomHeadingProps> = (props) => {
  const { id, level, children, ...rest } = props;

  if (id) {
    return (
      <Link className="heading" href={`#${id}`}>
        <Typography id={id} level={level}>{children}</Typography>
      </Link>
    );
  }
  return <Typography level={level}>{children}</Typography>
}

const CustomImg: FC = (props) => {
  return <Box border="1px solid white">
    <img {...props} />
  </Box>
}

export const Img = ({src}: {src: string}) => (
  <div style={{ border: "1px solid white", marginBottom: "32px"}} >
      <img src={src} />
  </div>
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...rest }) => <CustomHeading level="h1" {...rest}>{children}</CustomHeading>,
    h2: ({ children, ...rest }) => <CustomHeading level="h2" {...rest}>{children}</CustomHeading>,
    h3: ({ children, ...rest }) => <CustomHeading level="h3" {...rest}>{children}</CustomHeading>,
    h4: ({ children, ...rest }) => <CustomHeading level="h4" {...rest}>{children}</CustomHeading>,
    a: ({ children, ...rest }) => <CustomLink {...rest}>{children}</CustomLink>,
    Img: ({ src }) => <Img src={src!} />,
  }
}