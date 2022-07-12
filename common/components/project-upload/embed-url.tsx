import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent } from 'react';
import { FaMinus } from 'react-icons/fa';

type embedUrlProps = {
  name: string;
  formikProps: any;
  removeEmbedUrl: (index: number) => void;
};

export const EmbedUrl = () => {
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
            border: '1px solid black',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            paddingX: '15px',
          }}
        >
          <Typography>What</Typography>
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
        >
          <FaMinus size={20} />
        </Box>
      </Box>
    </Box>
  );
};
