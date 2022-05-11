export type Delimeter =
  | 'none'
  | 'space'
  | 'comma'
  | 'comma-space'
  | 'space-hypen-space';

export const delimeterMap: Record<Delimeter, string> = {
  none: '',
  space: ' ',
  comma: ',',
  'comma-space': ', ',
  'space-hypen-space': ' - ',
};

export class Globals {
  public static readonly noneValue = 'none';

  public static readonly allCourses = [
    'Webdesign & Development',
    'Game Art & 3D Animation',
    'Games Programming',
    'Film Production',
    'Visual Effects & 3D Animation',
    'Audio Engineering / Music Production',
    'Content Creation & Online Marketing',
  ];
}
