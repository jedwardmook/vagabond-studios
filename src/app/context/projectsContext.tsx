'use client';
import {createContext, useState, useEffect, useCallback } from 'react';
import { createClient, groq } from 'next-sanity';
import { projectId, dataset, apiVersion } from '../../../sanity/env';

type Image = {
  url: string,
  isLandscape: boolean,
};

type Project = {
  title: string,
  artist: string,
  year: string,
  mediums: string[],
  images: Image[],
  description: string,
};

type ProjectsContextProps = {
  projects: Project[];
  fetchProjects: () => void;
};

const ProjectsContext = createContext<ProjectsContextProps>({
  projects: [],
  fetchProjects: () => {},
});

export const ProjectsProvider = ({ children } : {children: React.ReactNode}) => {
  const [projects, setProjects] =  useState([]);

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  const fetchProjects = useCallback(async () => {
    const query = groq`*[_type == 'project'] | order(_createdAt){
      _id,
      _createdAt,
      title,
      artist,
      year,
      mediums,
      images[] {
        "url": asset->url
        },
      description
    }`;

      const data = await client.fetch(query);
        setProjects(data);
      }, [client]);

      useEffect(() => {
        fetchProjects();
      }, []);

    return (
      <ProjectsContext.Provider value={{projects, fetchProjects}}>
        {children}
      </ProjectsContext.Provider>
    );
};

export default ProjectsContext;