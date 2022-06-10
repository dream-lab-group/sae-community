import { Icon, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type embedUrlProps = {
  embedUrlsList: {}[];
  setEmbedUrlsList: React.Dispatch<React.SetStateAction<any>>;
};

export const EmbedUrl = ({
  embedUrlsList,
  setEmbedUrlsList,
}: embedUrlProps) => {
  const addEmbedUrlField = () => {
    setEmbedUrlsList([...embedUrlsList, { embedUrl: '' }]);
  };

  const removeEmbedUrlField = (index: any) => {
    const list = [...embedUrlsList];
    embedUrlsList.splice(index, 1);
    setEmbedUrlsList(list);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        height: '57px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '30px',
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
            id="embedUrl"
            name="embedUrld"
            label="Embed URL"
            variant="outlined"
            sx={{ fontSize: '8px' }}
          />
        </Box>
        <Box
          component="button"
          className="project-add-button"
          sx={{
            height: '40px',
            width: '40px',
            border: 'none',
            borderRadius: '5px',
          }}
          onClick={addEmbedUrlField}
          type="button"
        >
          <AddIcon fontSize="large" sx={{ color: '#fff' }} />
        </Box>
      </Box>
    </Box>
  );
};
