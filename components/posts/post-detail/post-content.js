import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import PostHeader from './post-header';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import md from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';

import classes from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('md', md);
SyntaxHighlighter.registerLanguage('json', json);

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      //render regular paragraph
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;

      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <div className={classes.code}>
          <SyntaxHighlighter
            style={atomDark}
            language={language}
            children={children}
          />
        </div>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers} remarkPlugins={[]}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
