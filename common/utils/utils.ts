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
    'audio',
    'contentcreation',
    'film',
    'gameart',
    'gamesprogramming',
    'webdesign',
    'visualeffects',
    'alumni',
  ];

  public static readonly uploadCourses = [
    'audio',
    'contentcreation',
    'film',
    'gameart',
    'gamesprogramming',
    'webdesign',
    'visualeffects',
  ];

  public static readonly mobileMenuProfileElements = [
    'profile',
    'projects',
    'likes',
    'collections',
  ];

  public static readonly pageNavigationElements = [
    'audio',
    'contentcreation',
    'film',
    'gameart',
    'gamesprogramming',
    'webdesign',
    'visualeffects',
  ];

  public static readonly userSkills = [
    'Photoshop',
    'Illustrator',
    'InDesign',
    'HTML',
    'CSS',
    'TypeScript',
    'React',
    'Lightroom',
  ];

  public static readonly userInterests = [
    'Fotografie',
    'Nachhaltigkeit',
    'Gutes Essen',
    'Ethical Programming',
    'Webdevelopment',
    'Neue Technologien',
  ];
}
