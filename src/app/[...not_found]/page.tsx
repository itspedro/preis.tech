
import { NotFoundContents } from '@/contents/not-found';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Página não encontrada`
};

function NotFound() {
  return (
    <>
      <NotFoundContents />
    </>
  );
}

export default NotFound;