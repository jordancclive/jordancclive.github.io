/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import replaceSlashes from '@devpanther/gatsby-theme-minimal-blog/src/utils/replaceSlashes';
import useSiteMetadata from '@devpanther/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
import useMinimalBlogConfig from '@devpanther/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;

  .big_image,
  .small_image {
    display: none;
  }

  @media only screen and (max-width: 760px) {
    .small_image {
      display: block;
    }
  }

  @media only screen and (min-width: 761px) {
    .big_image {
      display: block;
    }
  }
`;

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      {/* <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>{siteTitle}</div> */}
      <ImageWrapper>
        <img
          className="big_image"
          src="./header-image-big.svg"
          width="100%"
          height="auto"
        />

        <img
          className="small_image"
          src="./header-image-small.svg"
          width="100%"
          height="auto"
        />
      </ImageWrapper>
    </Link>
  );
};

export default HeaderTitle;
