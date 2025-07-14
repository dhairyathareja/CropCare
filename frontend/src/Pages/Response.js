import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const Response = ({ data }) => {
  // Validate the input data
  const markdownContent = typeof data === 'string' ? data : 'No content available';

  return (
    <section>
      <Markdown
        remarkPlugins={[remarkGfm]} // Enables GitHub-flavored Markdown
        rehypePlugins={[rehypeRaw]} // Allows raw HTML rendering
      >
        {markdownContent}
      </Markdown>
    </section>
  );
};

export default Response;
