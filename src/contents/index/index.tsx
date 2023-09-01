import Header from '@/components/Header/header';
import MainHome from './Main/main';
import ProjectSection from './Projects/projects';
import Footer from '@/components/Footer/footer'
import { getSortedProjects } from '@/lib/projects';

function IndexContents() {

  const projects = getSortedProjects();

  return (
    <>
      <Header />
      <MainHome />
      <ProjectSection projects={projects} />
      <Footer />
    </>
  );
};

export default IndexContents;