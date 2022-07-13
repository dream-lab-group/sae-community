import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FieldArrayRenderProps } from 'formik';
import React, { useState } from 'react';
import { FaMinus } from 'react-icons/fa';

type embedUrlProps = {
  index: number;
  url: string;
  urlArray: never[];
  formikProps: FieldArrayRenderProps;
};

export const EmbedUrl = ({
  index,
  url,
  urlArray,
  formikProps,
}: embedUrlProps) => {
  const [urlList, setUrlList] = useState(urlArray);

  const removeUrl = () => {
    const rows = [...urlArray];
    rows.splice(index, index);
    setUrlList(rows);
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
          onClick={removeUrl}
        >
          <FaMinus size={20} />
        </Box>
      </Box>
    </Box>
  );
};
