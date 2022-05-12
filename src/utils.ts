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
    'webdesign',
    'gameArt',
    'gamesProgramming',
    'film',
    'visualEffects',
    'audio',
    'contentCreation',
  ];
}
