import Image from 'next/image';
import { useEffect, useState } from 'react';
import { apiClient } from '../../data/apiClient';
import { Pictures } from '../common/pictures';

type ProjectPicturesProps = {
  thumbnailId: string;
  relationNumbers: [];
};

export const ProjectPictures = ({
  thumbnailId,
  relationNumbers,
}: ProjectPicturesProps) => {
  const [files, setFiles] = useState<any>([thumbnailId]);

  useEffect(() => {
    relationNumbers.map(async (relationNumber) => {
      const singleFileIdresponse = await apiClient.get(
        `items/projects_files/${relationNumber}`,
      );
      if (singleFileIdresponse.status === 200) {
        const allFiles = [
          ...files,
          ...singleFileIdresponse.data.data.directus_files_id,
        ];
        setFiles(allFiles);
      }
    });
  }, []);

  console.log(files);

  return <Pictures filedId={files} />;
};
