import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import MDXstyle from '@/components/blog/MDXstyle';
import { getPostMatter } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeComponent from '@/components/blog/CodeComponent';

async function BlogPost({ params }: { params: { slug: string } }) {

  const props = getPostMatter(params.slug);

  return (
    <>
      <div>
        <Header/>
      </div>
      <section>
        <MDXstyle>
          <h1>{props.title}</h1>
          <MDXRemote
            components={{
              CodeComponent: ({ children, language, title }) => 
              <CodeComponent title={title} language={language}>
                {children}
              </CodeComponent>
            }}
            source={props.content}
            />
        </MDXstyle>
      </section>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default BlogPost;