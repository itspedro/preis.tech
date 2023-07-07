import BlogContent from '@/contents/blog/blog';
import { getSortedPosts } from '@/lib/posts'

export default function Blog() {

  const posts = getSortedPosts();

  return (
   <main>
    <BlogContent posts={posts}/>
   </main>
  )
}
