import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaMinus } from 'react-icons/fa';

type embedUrlProps = {
  url: string;
  embedUrlList?: any;
  index: number;
  setEmbedUrlList?: React.Dispatch<React.SetStateAction<any>>;
  removeEmbedUrl?: (index: number) => void;
  formikProps?: any;
};

export const EmbedUrl = ({
  url,
  index,
  embedUrlList,
  setEmbedUrlList,
  formikProps,
}: embedUrlProps) => {
  const removeEmbedUrl = (index: number) => {
    if (setEmbedUrlList) {
      const rows = [...embedUrlList];
      rows.splice(index, 1);
      const newEmbedUrlList = rows;
      setEmbedUrlList(newEmbedUrlList);
      formikProps.setFieldValue('embedded_urls', newEmbedUrlList);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        height: '57px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          height: '50px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            border: '1px solid #bdbdbd',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            paddingX: '15px',
          }}
        >
          <Typography>{url}</Typography>
        </Box>
        <Box
          component="button"
          sx={{
            height: '100%',
            width: '60px',
            border: 'none',
            borderRadius: '0 5px 5px 0',
            background: '#ef6351',
            color: '#fff',
            position: 'absolute',
            right: 0,
            cursor: 'pointer',
          }}
          type="button"
          onClick={() => removeEmbedUrl(index)}
        >
          <FaMinus size={20} />
        </Box>
      </Box>
    </Box>
  );
};
