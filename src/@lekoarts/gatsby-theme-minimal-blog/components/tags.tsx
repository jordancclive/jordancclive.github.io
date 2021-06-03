/** @jsx jsx */
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo';
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes';
import Title from '@lekoarts/gatsby-theme-minimal-blog/src/components/title';
import { Flex, Grid } from '@theme-ui/components';
import { graphql, Link, StaticQuery } from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import React from 'react';
import { Heading, jsx, Link as TLink } from 'theme-ui';

type PostsProps = {
  list?: {
    fieldValue: string;
    totalCount: number;
  }[];
  withLayout: boolean;
};

const Tags = ({ list = [], withLayout = true }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  if (withLayout) {
    return (
      <Layout>
        <SEO title="Tags" />
        <Title text="Tags">
        </Title>
        <Grid columns={[3]}>
          {list.map((listItem) => (
            <Flex
              key={listItem.fieldValue}
              mb={[1, 1, 2]}
              sx={{ alignItems: `center` }}
            >
              <TLink
                as={Link}
                sx={{ variant: `links.listItem`, mr: 2 }}
                to={replaceSlashes(
                  `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
                )}
              >
                {listItem.fieldValue}{' '}
                <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
              </TLink>
            </Flex>
          ))}
        </Grid>
      </Layout>
    );
  } else {
    return (
      <StaticQuery
        query={graphql`
          query {
            allPost(sort: { fields: tags___name, order: DESC }) {
              group(field: tags___name) {
                fieldValue
                totalCount
              }
            }
          }
        `}
        render={(data) => (
          <React.Fragment>
            <Title text="Tags">
            </Title>
            <br />
            <Grid columns={[3]} gap="0.5rem">
              {(data.allPost.group ?? []).map((listItem) => (
                <Flex
                  key={listItem.fieldValue}
                  mb={[1, 1, 2]}
                  sx={{ alignItems: `center` }}
                >
                  <TLink
                    as={Link}
                    sx={{ variant: `links.listItem`, mr: 2 }}
                    to={replaceSlashes(
                      `/${basePath}/${tagsPath}/${kebabCase(
                        listItem.fieldValue
                      )}`
                    )}
                  >
                    {listItem.fieldValue}{' '}
                    <span sx={{ color: `secondary` }}>
                      ({listItem.totalCount})
                    </span>
                  </TLink>
                </Flex>
              ))}
            </Grid>
          </React.Fragment>
        )}
      />
    );
  }
};

export default Tags;
