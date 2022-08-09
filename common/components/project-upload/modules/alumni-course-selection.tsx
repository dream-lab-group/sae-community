import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Globals } from '../../../utils/utils';

type AlumniCourseSelectionProps = {
  formik: any;
};

export const AlumniCourseSelection = ({
  formik,
}: AlumniCourseSelectionProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FormControl
      fullWidth
      sx={{
        marginTop: `${smBreakpointDown ? '15px' : '20px'}`,
      }}
    >
      <InputLabel id="selectedCourse">
        {t('loginRegistration.course')}
      </InputLabel>
      <Select
        labelId="course"
        id="course"
        name="course"
        label="Fachrictung"
        sx={{
          display: `${smBreakpointDown && 'flex'}`,
          alignItems: `${smBreakpointDown && 'center'}`,
        }}
        value={formik.values.course}
        onChange={formik.handleChange}
        error={formik.touched.course && Boolean(formik.errors.course)}
      >
        {Globals.uploadCourses.map((course) => (
          <MenuItem key={course} value={course}>
            {/* @ts-expect-error Translation keys only exist during runtime */}
            {t(`courses.${course}.label`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
