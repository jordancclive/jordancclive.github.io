/** @jsx jsx */
import { jsx } from 'theme-ui';
import BlogListItem from '@devpanther/gatsby-theme-minimal-blog/src/components/blog-list-item';
import { StaticQuery, graphql } from 'gatsby';

type ListingProps = {
  className?: string;
  showTags?: boolean;
};

const Listing = ({ className = ``, showTags = true }: ListingProps) => (
  <StaticQuery
    query={graphql`
      query {
        allPost(sort: { fields: date, order: DESC }, limit: 8) {
          nodes {
            slug
            title
            date(formatString: "YYYY.MM.DD")
            excerpt
            timeToRead
            description
            tags {
              name
              slug
            }
          }
        }
      }
    `}
    render={(data) =>
    {
      return (
        <section sx={{ mb: [5, 6, 7] }} className={className}>
          {(data.allPost.nodes ?? []).map((post) => (
            <BlogListItem key={post.slug} post={post} showTags={showTags} />
          ))}
        </section>
      );
    }}
  />
);

export default Listing;
