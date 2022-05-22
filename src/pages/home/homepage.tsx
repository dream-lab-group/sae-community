import { Directus } from '@directus/sdk';
import { Box, Chip, Grid, Typography } from '@mui/material';
import image1 from '../../common/assets/cshong-lGcRWUuD4us-unsplash.jpeg';
import image2 from '../../common/assets/howen-1ZapU2hXhzY-unsplash.jpeg';
import image3 from '../../common/assets/jake-weirick-Oznq9aTQeNs-unsplash.jpeg';
import image4 from '../../common/assets/lennon-cheng-fWziKxOh1I0-unsplash.jpeg';
import image5 from '../../common/assets/siobhan-flannery-FWAb2GFcj1w-unsplash.jpeg';
import image6 from '../../common/assets/tezos-O5fxEDu0S5I-unsplash.jpeg';
import image7 from '../../common/assets/tezos-y8wjQZ9XP4A-unsplash.jpeg';
import image8 from '../../common/assets/pawan-thapa-1Yn4H3RgtJs-unsplash.jpeg';

const directus = new Directus('http://146.190.227.5');
const HomePage = () => {
  const token = directus.auth.token;
  if (token) {
    return (
      <Box sx={{ width: '100%', padding: '20px' }}>
        <Grid
          container
          sx={{
            height: 300,
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            >
              <Box
                component="img"
                src={image1}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  background: '#000',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Typography>username</Typography>
            </Box>
            <Chip
              label="Webdevelopment"
              sx={{ background: '#364156', color: '#fff' }}
            />
          </Grid>
        </Grid>

        {/* here come the sample datas
        here come the sample datas
        here come the sample datas
        here come the sample datas
        here come the sample datas
        here come the sample datas */}
        <Grid
          container
          sx={{
            height: 300,
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            >
              <Box
                component="img"
                src={image7}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  background: '#000',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Typography>username</Typography>
            </Box>
            <Chip
              label="Game Art"
              sx={{ background: '#5398BE', color: '#fff' }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            height: 300,
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            >
              <Box
                component="img"
                src={image2}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  background: '#000',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Typography>username</Typography>
            </Box>
            <Chip
              label="Games Programming"
              sx={{ background: '#20A39E', color: '#fff' }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            height: 300,
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            >
              <Box
                component="img"
                src={image3}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  background: '#000',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Typography>username</Typography>
            </Box>
            <Chip label="Film" sx={{ background: '#57A773', color: '#fff' }} />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            height: 300,
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            >
              <Box
                component="img"
                src={image4}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  background: '#000',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Typography>username</Typography>
            </Box>
            <Chip
              label="Visual Effects"
              sx={{ background: '#3E885B', color: '#fff' }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            height: 300,
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            >
              <Box
                component="img"
                src={image5}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  background: '#000',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Typography>username</Typography>
            </Box>
            <Chip label="Audio" sx={{ background: '#A09CB0', color: '#fff' }} />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            height: 300,
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            >
              <Box
                component="img"
                src={image6}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  background: '#000',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Typography>username</Typography>
            </Box>
            <Chip
              label="Content Creation"
              sx={{ background: '#7D4E57', color: '#fff' }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            height: 300,
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
              }}
            >
              <Box
                component="img"
                src={image8}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  background: '#000',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Typography>username</Typography>
            </Box>
            <Chip
              label="Alumni"
              sx={{ background: '#D66853', color: '#fff' }}
            />
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return <></>;
  }
};

export default HomePage;
