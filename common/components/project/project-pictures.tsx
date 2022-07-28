import { useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
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
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const [files, setFiles] = useState<any>([thumbnailId]);

  useEffect(() => {
    relationNumbers.map(async (relationNumber) => {
      const singleFileIdresponse = await apiClient.get(
        `items/projects_files/${relationNumber}`,
      );
      if (singleFileIdresponse.status === 200) {
        const fileTypeResponse = await apiClient.get(
          `files/${singleFileIdresponse.data.data.directus_files_id}`,
        );

        if (
          fileTypeResponse.status === 200 &&
          fileTypeResponse.data.data.type.split('/')[0] === 'image'
        ) {
          setFiles((files: []) => [...files, fileTypeResponse.data.data.id]);
        }
      }
    });
  }, []);

  // @ts-expect-error: todo
  const uniqueFileIds = [...new Set(files)];

  return (
    <Carousel
      navButtonsAlwaysVisible
      autoPlay={false}
      stopAutoPlayOnHover
      sx={{
        marginTop: '35px',
        width: '100%',
        height: `${
          smBreakpointDown
            ? '250px'
            : mdBreakpointDown
            ? '350px'
            : lgBreakpointDown
            ? '450px'
            : '450px'
        }`,
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      {uniqueFileIds.map((fileId) => (
        <Pictures key={fileId} filedId={fileId} />
      ))}
    </Carousel>
  );
};
