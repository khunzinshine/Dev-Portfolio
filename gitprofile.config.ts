// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'khunzinshine', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio | Khun Zin Shine',
    description:
      'Passionate about designing and developing innovative solutions while excelling at problem-solving. Proficient in JavaScript and Typescript, with expertise in frameworks like ReactJS, NextJS, and NodeJS. I have accumulated over 4 years of experience in software development, primarily in the digital banking/financial and retail groceries industries. I thrive on embracing new challenges and working with cutting-edge technologies.',
    imageURL: '',
  },
  social: {
    linkedin: 'khunzinshine',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+95 9788926700',
    email: 'khunzinshine@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Redux',
    'Next.js',
    'Node.js',
    'Angular',
    'Tailwind',
    'SASS',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Firebase',
    'AWS',
  ],
  experiences: [
    {
      company: 'Codigo - The Mobile App Company',
      position: 'Frontend Developer',
      from: 'November 2023',
      to: 'Present',
      companyLink: 'https://www.codigo.co/',
    },
    {
      company: 'City Holdings Limited',
      position: 'Full Stack Developer',
      from: 'January 2023',
      to: 'October 2023',
      companyLink: 'https://cityholdings.com.mm/',
    },
    {
      company: 'AYA Bank - AYA Innovation Labs',
      position: 'Frontend Developer',
      from: 'March 2021',
      to: 'December 2022',
      companyLink: 'https://ayabank.com',
    },
    {
      company: 'AYA Bank - AYA Innovation Labs',
      position: 'QA Engineer',
      from: 'March 2020',
      to: 'Feburary 2021',
      companyLink: 'https://ayabank.com',
    },
    {
      company: 'Acroquest Myanmar Technology',
      position: 'Web Developer - Internship',
      from: 'May 2019',
      to: 'July 2019',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'The Complete Node.js Developer',
      body: 'Udemy',
      year: 'Feburary 2022',
      link: 'https://www.udemy.com/certificate/UC-097158d9-a99e-410f-ad09-ac0344c7af02/',
    },
    {
      name: 'React - The Complete Guide',
      body: 'Udemy',
      year: 'Feburary 2022',
      link: 'https://www.udemy.com/certificate/UC-71d157ec-5846-4d1c-a656-5bb146ae269c/',
    },
    {
      name: 'Mastering React',
      body: 'Code with Mosh',
      year: 'April 2021',
      link: 'https://drive.google.com/file/d/1gdJ81DLmciB-zeQQsGzsq82HdiLimVwt/view',
    },
    {
      name: 'The Agile Samurai Bootcamp',
      body: 'Udemy',
      year: 'September 2020',
      link: 'https://www.udemy.com/certificate/UC-d5c43ada-00bd-4feb-b685-e12906115297/',
    },
  ],
  educations: [
    {
      institution: 'University of Computer Studies, Taunggyi',
      degree: 'Bachelor of Computer Science',
      from: '2014',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '5053138',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
