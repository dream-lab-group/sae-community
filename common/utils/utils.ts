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

  public static readonly uploadCourses = [
    'film',
    'gameart',
    'gamesprogramming',
    'webdesign',
    'audio',
    'visualeffects',
    'contentcreation',
  ];

  public static readonly mobileMenuProfileElements = [
    'profile',
    'projects',
    'likes',
    'collections',
    'profileSettings'
  ];

  public static readonly pageNavigationElements = [
    'film',
    'gameArts',
    'gamesProgramming',
    'web',
    'audio',
    'animation',
    'crossMedia',
  ];

  public static readonly userContactInformation = [
    'E-Mail',
    'Webseite',
    'Youtube',
    'Instagram',
    'LinkedIn',
    'Vimeo',
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
