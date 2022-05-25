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
    'film',
    'gameart',
    'gamesprogramming',
    'webdesign',
    'audio',
    'visualeffects',
    'contentcreation',
    'alumni',
  ];

  public static readonly mobileMenuElements = [
    'blog',
    'jobboard',
    'marketplace',
    'uploadproject',
  ];

  public static readonly mobileMenuProfileElements = [
    'myprofile',
    'mylikes',
    'mycollections',
  ];
}
