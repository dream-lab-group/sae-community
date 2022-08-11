import { Box, Modal } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  height: '100%',
  maxHeight: '80vh',
  width: '100%',
  maxWidth: '80vw',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  outline: 0,
};

export const Pictures = ({ filedId }: { filedId: any }) => {
  const imageUrl = `https://www.whatthebre.com/assets/${filedId}?quality=50`;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
        }}
        onClick={() => handleOpen()}
      >
        <Image
          className="project-image-border-radius image-container"
          src={imageUrl}
          layout="fill"
        />
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Image
            className="project-image-border-radius image-container-big"
            src={imageUrl}
            layout="fill"
          />
        </Box>
      </Modal>
    </>
  );
};
