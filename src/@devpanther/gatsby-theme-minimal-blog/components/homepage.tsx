/** @jsx jsx */
import Layout from '@devpanther/gatsby-theme-minimal-blog/src/components/layout';
import Title from '@devpanther/gatsby-theme-minimal-blog/src/components/title';
import useMinimalBlogConfig from '@devpanther/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import useSiteMetadata from '@devpanther/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
import { visuallyHidden } from '@devpanther/gatsby-theme-minimal-blog/src/styles/utils';
import replaceSlashes from '@devpanther/gatsby-theme-minimal-blog/src/utils/replaceSlashes';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
// @ts-ignore
import Hero from '../texts/hero';
import Listing from './limit-listing';
import Tags from './tags';

const Homepage = () =>
{
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mb: [5, 6, 7],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`,
        }}
      >
        <Hero />
      </section>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      <Listing />
      {/* <List sx={{ variant: `section_bottom` }}>
        <Bottom />
      </List> */}
      <Tags withLayout={false} />
    </Layout>
  );
};

export default Homepage;
