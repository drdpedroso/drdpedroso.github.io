import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";

const Blog = props => {
  const { posts, theme, onChangeLocale = () => {} } = props;

  return (
    <React.Fragment>
      <main className="main">

        <ul>
          <div className="flags-containers">
              <button onClick={() => onChangeLocale('pt')}>🇧🇷</button>
              <button onClick={() => onChangeLocale('en')}>🇬🇧</button>
          </div>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </ul>
      </main>

      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }
        
        .flags-containers {
          display: flex;
          flex-direction: row;
          margin-top: -11px;
          margin-bottom: -43px;
          button {
            padding: 8px;
            background: transparent;
            margin-right: 10px;
            border: none;
            font-size: 31px;
          }
        }
        
        ul {
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
