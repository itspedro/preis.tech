import fs from 'fs';
import path from 'path';
import frontMatter from 'front-matter';
import type { TProjectFrontMatter } from '@/types/types';

const projectsDirectory = path.join(process.cwd(), 'src', 'contents', 'index', 'Projects', 'content');

export function getProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''))
};

export function getProjectFrontMatter(project: string) {

  const fullPath = path.join(projectsDirectory, `${project}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { attributes } = frontMatter<TProjectFrontMatter>(fileContents);

  return attributes;
};


export function getSortedProjects() {

  const projects = getProjects();
  
  const allProjectsData = projects.map((project) => {
    const data = getProjectFrontMatter(project);

    return {
      project,
      frontMatter: data,
    };
});


  return allProjectsData.sort(
    ({ frontMatter: { date: a } }, {frontMatter: { date: b } }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1
      } else {
        return 0;
      }
    }
  );
};