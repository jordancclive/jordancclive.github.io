/** @jsx jsx */
import 'typeface-ibm-plex-sans';

import { Global } from '@emotion/core';
import Header from '@lekoarts/gatsby-theme-minimal-blog/src/components/header';
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo';
import SkipNavLink from '@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav';
import CodeStyles from '@lekoarts/gatsby-theme-minimal-blog/src/styles/code';
import React, { useEffect } from 'react';
import { Box, Container, jsx } from 'theme-ui';

import Footer from './footer';

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        '*': {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        '[hidden]': {
          display: `none`,
        },
        '::selection': {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </React.Fragment>
);

export default Layout;
