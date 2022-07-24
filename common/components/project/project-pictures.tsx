import { useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { apiClient } from '../../data/apiClient';
import { Pictures } from '../common/pictures';

type ProjectPicturesProps = {
  data: any;
};

export const ProjectPictures = ({ data }: ProjectPicturesProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  const [files, setFiles] = useState<any>();

  useEffect(() => {
    const fetchFiles = async () => {
      // TODO: Change to multiple files
      const fileResponse = await apiClient.get(`files/${data.cover_photo}`);
      if (fileResponse.status === 200) {
        setFiles(fileResponse.data.data.id);
      }
    };
    fetchFiles();
  }, [setFiles]);

  return (
    <>
      <Carousel
        navButtonsAlwaysVisible
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
        <Pictures filedId={files} />
      </Carousel>
    </>
  );
};
