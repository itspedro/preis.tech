export interface PostData {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  headings: string[];
  content: React.ReactNode;
};

export interface Post {
  slug: string;
  data: PostData;
};