import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type embedUrlProps = {
  name: string;
  formikProps: any;
  removeEmbedUrl: (index: number) => void;
};

export const EmbedUrl = ({ name, removeEmbedUrl }: embedUrlProps) => {
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
        }}
      >
        <Box sx={{ width: '85%' }}>
          <TextField
            fullWidth
            size="small"
            name={name}
            label="Embed URL"
            variant="outlined"
            type="text"
            sx={{ fontSize: '8px' }}
          />
        </Box>
        <Box
          component="button"
          sx={{
            height: '40px',
            width: '40px',
            border: 'none',
            borderRadius: '5px',
            background: '#ef6351',
            color: '#fff',
          }}
          type="button"
          // @ts-expect-error: error only during runtime
          onClick={removeEmbedUrl}
        >
          <FaMinus size={20} />
        </Box>
      </Box>
    </Box>
  );
};
