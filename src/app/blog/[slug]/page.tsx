import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import MDXstyle from '@/components/blog/MDXstyle';
import { getPostMatter } from '@/lib/posts';
import 'highlight.js/styles/base16/monokai.css';
import MetaSection from '@/contents/blog/blog-meta';

async function BlogPost({ params }: { params: { slug: string } }) {

  const props = await getPostMatter(params.slug);

  return (
    <>
      <Header />
      <section>
        <MetaSection 
          title={props.title}
          date={props.date}
          tags={props.tags}
        />
        <MDXstyle>
          {props.content}
        </MDXstyle>
      </section>
      <Footer/>
    </>
  );
};

export default BlogPost;