import React from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


const Result = ({data}) => {
  const solution=data.solution;

    return (
    <div>
        <h2>Problem: </h2>
        <span className='capitalize'> &#128308; <b>{data.disease[0]}</b> &#128308; </span>

        <h2>Don't Worry Here's the solution !!!</h2>
        <section>
              <Markdown
                remarkPlugins={[remarkGfm]} // Enables GitHub-flavored Markdown
                rehypePlugins={[rehypeRaw]} // Allows raw HTML rendering
              >
                {solution}
              </Markdown>
        </section>
        
        
    </div>
  )
}

export default Result