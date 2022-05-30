import { useEffect, useState } from 'react';
import { ProjectProperties } from '../../types/types';
import { getProjects } from './request';

export function useProjects() {
  const [data, setData] = useState<ProjectProperties[]>([]);

  useEffect(() => {
    getProjects().then(setData);
  }, [setData]);

  return data;
}
