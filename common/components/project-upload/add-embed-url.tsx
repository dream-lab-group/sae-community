import { ButtonBase, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FieldArray, Form, Formik, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { EmbedUrl } from './embed-url';

const AddEmbedUrl = () => {
  const formik = useFormik({
    initialValues: {
      embedUrls: [],
    },
    onSubmit: async (values: any) => {
      console.log(values);
    },
  });

  const [newUrl, setNewUrl] = useState('');

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '56px',
          marginTop: '20px',
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* @ts-expect-error: todo */}
        <FormikProvider value={formik}>
          <TextField
            id="videoUrl"
            name="videoUrl"
            label="Video Url"
            sx={{ width: '75%' }}
            variant="outlined"
            value={newUrl}
            onChange={(event) => {
              setNewUrl(event.target.value);
            }}
          />
          <ButtonBase
            className="project-add-button"
            sx={{
              height: '100%',
              padding: '10px 15px',
              color: '#fff',
              borderRadius: '5px',
              alignSelf: 'flex-end',
            }}
            onClick={() => {
              const newEmbedUrls = [
                ...formik.values.embedUrls,
                {
                  url: newUrl,
                },
              ];
              formik.setFieldValue('embedUrls', newEmbedUrls);
              setNewUrl('');
            }}
          >
            <Typography>URL hinzufügen</Typography>
          </ButtonBase>
        </FormikProvider>
      </Box>
      {/* @ts-expect-error: todo */}
      <FieldArray
        name="embedUrls"
        render={(props) => (
          <>
            {formik.values.embedUrls.length > 0 &&
              formik.values.embedUrls.map(({ url }, index) => (
                <EmbedUrl
                  key={index}
                  index={index}
                  url={url}
                  urlArray={formik.values.embedUrls}
                  formikProps={props}
                />
              ))}
          </>
        )}
      />
    </>
  );
};

export default AddEmbedUrl;
