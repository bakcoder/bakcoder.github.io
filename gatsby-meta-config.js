module.exports = {
  title: `bakcoder.github.io`,
  description: `바코더의 하루계산`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://bakcoder.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `bakcoder/bakcoder.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `바코더`,
    bio: {
      role: `하루 계산`,
      description: ['매일매일 찍어내는'],
      thumbnail: '', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/bakcoder`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.09 ~',
        activity: '개인 블로그 시작',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '',
        description:
          '',
        techStack: [''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
