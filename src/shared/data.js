import { Call, Email, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import slider_1 from '../images/slider-1.jpg';
import slider_2 from '../images/slider-2.jpg';
import slider_3 from '../images/slider-3.jpg';
import landing_1 from '../images/landing_1.svg';
import landing_2 from '../images/landing_2.svg';
import landing_3 from '../images/landing_3.svg';
import landing_4 from '../images/landing_4.svg';
import services_1 from '../images/services_1.svg';
import services_2 from '../images/services_2.svg';
import services_3 from '../images/services_3.svg';
import services_4 from '../images/services_4.svg';
import services_5 from '../images/services_5.svg';
import services_6 from '../images/services_6.svg';
import services_11 from '../images/services_11.svg';
import services_22 from '../images/services_22.svg';
import services_33 from '../images/services_33.svg';
import services_44 from '../images/services_44.svg';
import services_55 from '../images/services_55.svg';
import services_66 from '../images/services_66.svg';
import testimonial_1 from '../images/testimonial-1.png';
import testimonial_2 from '../images/testimonial-2.png';
import testimonial_3 from '../images/testimonial-3.png';
import testimonial_4 from '../images/testimonial-4.png';
import testimonial_5 from '../images/testimonial-5.png';
import team_1 from '../images/team-1.png';
import team_2 from '../images/team-2.png';
import team_3 from '../images/team-3.png';
import team_4 from '../images/team-4.png';
import blog_1 from '../images/blog-1.png';
import blog_2 from '../images/blog-2.png';
import blog_3 from '../images/blog-3.png';

export const links = [
  {
    id: 'home',
    text: 'Home',
    url: '#home',
  },
  {
    id: 'about',
    text: 'About',
    url: '#about',
  },
  {
    id: 'services',
    text: 'Services',
    url: '#services',
  },
  {
    id: 'doctor',
    text: 'Doctor',
    url: '#doctor',
  },
  {
    id: 'blog',
    text: 'Blog',
    url: '#blog',
  },
  {
    id: 'contact',
    text: 'Contact',
    url: '#contact',
  },
];

export const contactsIcon = [
  {
    left: [
      {
        id: 1,
        icon: <Call />,
        url: '',
        text: '08142407972',
      },
      {
        id: 2,
        icon: <Email />,
        url: '',
        text: 'professorpromise1000@gmail.com',
      },
    ],
    right: [
      {
        id: 1,
        Icon: Facebook,
        url: '',
      },
      {
        id: 2,
        Icon: Twitter,
        url: '',
      },
      {
        id: 3,
        Icon: LinkedIn,
        url: '',
      },
    ],
  },
];

export const sliderContent = [
  {
    id: 1,
    img: slider_1,
    contents: [
      {
        heading: 'Complete Healthcare Solution',
        info: "What are the equipment used by a doctor?  This includes medical ventilators, incubators, anaesthetic machines, heart-lung machines and dialysis machines. Medical monitors that allow medical staff to measure a patient's medical state.",
        btnText: 'Learn More',
        url: '#about',
      },
    ],
  },
  {
    id: 2,
    img: slider_2,
    contents: [
      {
        heading: 'Best Doctors and Equipments in Town',
        info: 'There are only two sorts of doctors: those who practice with their brains, and those who practice with their tongues.',
        btnText: 'Make Appointment',
        url: '#contact',
      },
    ],
  },
  {
    id: 3,
    img: slider_3,
    contents: [
      {
        heading: 'Your Health is Our Top Priority',
        info: 'The most exquisite pleasure in the practice of medicine comes from nudging a layman in the direction of terror, then bringing him back to safety again.',
        btnText: 'Our Services',
        url: '#services',
      },
    ],
  },
];

export const landingIcons = [
  {
    id: 1,
    icon: landing_1,
    text: 'Specialist Doctor',
  },
  {
    id: 2,
    icon: landing_2,
    text: 'Frequent Visit',
  },
  {
    id: 3,
    icon: landing_3,
    text: 'Cordial Administration',
  },
  {
    id: 4,
    icon: landing_4,
    text: 'Specialized Pharmacy',
  },
];

export const serviceIcons = [
  {
    id: 1,
    showIcon: services_1,
    hideIcon: services_11,
    heading: 'Cardiology',
    content:
      'Our Cardiology Department offers a variety of diagnostic cardiology procedures to determine underlying heart diseases and/or abnormalities and problems with the heart. These procedures help your doctor determine the course of treatment to help you maintain a healthy and productive life.',
  },
  {
    id: 2,
    showIcon: services_2,
    hideIcon: services_22,
    heading: 'Neurology',
    content:
      'Our Neurology Department offers the latest in neurological care with innovative therapies, new techniques and clinical trials developed by our world-class experts. Our neurologists help more than 100,000 adults and children each year, including those with complex or rare conditions.',
  },
  {
    id: 3,
    showIcon: services_3,
    hideIcon: services_33,
    heading: 'Gastroenterology',
    content:
      'Delivering quality outpatient care to patients with all types of cancer. Our Services Include: Outpatient Chemotherapy Administration, Treatment of Blood Disorders, Comprehensive Consultation and Follow-up Care by Oncologist/Hematologist.',
  },
  {
    id: 4,
    showIcon: services_4,
    hideIcon: services_44,
    heading: 'Orthopedics',
    content:
      "Havana's orthopaedic department provides a full range of orthopedic services including advanced diagnostic imaging, innovative treatments and rehabilitation services.",
  },
  {
    id: 5,
    showIcon: services_5,
    hideIcon: services_55,
    heading: 'Gynecology',
    content:
      'Women turn to us to help them make sense of the often confusing messages that abound on women’s health. Whether it’s a decision about routine care, birth control, fertility or a gynecologic cancer, our physicians respectfully guide each patient in selecting the best treatment plan',
  },
  {
    id: 6,
    showIcon: services_6,
    hideIcon: services_66,
    heading: 'Burns & Plastic Surgery',
    content:
      'Patients that have had significant burn injuries to the face, scalp, and neck can have severe disfigurements from scarring. We provided modern plastic surgery services that correct dysfunction and deformities related to burn injuries.',
  },
];

export const testimonialIcons = [
  {
    id: 1,
    text: 'Your practice is great. The services you provide are incredible and the patient experience you provide is like nothing else. You know these to be true, but are they known locally, nationally, or globally?',
    name: 'Umeh Promise',
    role: 'Frontend Developer',
    img: testimonial_1,
  },
  {
    id: 2,
    text: 'Sure, your regulars spread the word about your practice to their social circles. But can you provide any evidence about how great your practice is outside of what you and your brand ambassadors say?',
    name: 'Precious Ann',
    role: 'UX/UI Designer',
    img: testimonial_2,
  },
  {
    id: 3,
    text: 'On behalf of my wife, who was a patient in your hospital, I humbly submit my sincere gratitude to the management and staff of Jamaica Hospital, especially to your outstanding nurses and PCAs.',
    name: 'Tola Adanma',
    role: 'Head of Design',
    img: testimonial_3,
  },
  {
    id: 4,
    text: 'I am writing on behalf of my brother who was a patient in your hospital. I would like to thank you on behalf of my entire family for the help and consideration shown to me in what was a very difficult time. ',
    name: 'Tola Adinola',
    role: 'Creative Designer',
    img: testimonial_4,
  },
  {
    id: 5,
    text: 'I recently had a nine day stay at Jamaica Hospital and I wanted to express how impressed I was with the level of care I received from everyone I encountered. The Trauma Center saved my life! ',
    name: 'Joseph Wan',
    role: 'Creative Director',
    img: testimonial_5,
  },
];

export const faqContent = [
  {
    id: 1,
    title: 'What is an academic medical center?',
    text: 'At an academic medical center, education, research, and clinical care are combined to provide the best possible clinical care, that uses cutting-edge technologies, resources and therapies other community hospitals may not have available.',
  },
  {
    id: 2,
    title: 'What are the duties of a medical doctor',
    text: 'Extend primary care and chronic care clinics. Offer emergency or triage care. Classify and reply to emergency situations and offer professional and care.',
  },
  {
    id: 3,
    title: 'Who is a medical student?',
    text: 'Medical student means an individual enrolled in a program culminating in a degree in medicine. Medical student means naturopathic medical student',
  },
  {
    id: 4,
    title: 'How are residents supervised',
    text: 'Residency training is an educational experience designed to offer residents the opportunity to participate in the clinical evaluation and care of patients in a variety of patient care settings. All aspects of patient care rendered by resident physicians must receive close supervision.',
  },
];

export const doctorsContent = [
  {
    id: 1,
    img: team_1,
    posImg: services_11,
    name: 'Dr. David Jun',
    position: 'Orthopedics',
  },
  {
    id: 2,
    img: team_2,
    posImg: services_33,
    name: 'Dr. Gideu Ds',
    position: 'Neurology',
  },
  {
    id: 3,
    img: team_3,
    posImg: services_22,
    name: 'Dr. Huduei Chy',
    position: 'Gastroenterology',
  },
  {
    id: 4,
    img: team_4,
    posImg: services_66,
    name: 'Dr. Marke Ann',
    position: 'Gynecology',
  },
  {
    id: 5,
    img: team_1,
    posImg: services_55,
    name: 'Dr. David Jun',
    position: 'Orthopedics',
  },
  {
    id: 6,
    img: team_2,
    posImg: services_44,
    name: 'Dr. Gideu Ds',
    position: 'Neurology',
  },
  {
    id: 7,
    img: team_3,
    posImg: services_22,
    name: 'Dr. Huduei Chy',
    position: 'Gastroenterology',
  },
  {
    id: 8,
    img: team_4,
    posImg: services_11,
    name: 'Dr. Marke Ann',
    position: 'Gynecology',
  },
];

export const blogContent = [
  {
    id: 1,
    topic: '250+ Medical Tips We Just Had to Share',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditateeaque perspiciatis facere totam quo eos delectus voluptas eum. Ea,magnam.',
    img: blog_1,
  },
  {
    id: 2,
    topic: '100+ Medical Tips We Just Had to Share',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditateeaque perspiciatis facere totam quo eos delectus voluptas eum. Ea,magnam.',
    img: blog_2,
  },
  {
    id: 3,
    topic: '250+ Medical Tips We Just Had to Share',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditateeaque perspiciatis facere totam quo eos delectus voluptas eum. Ea,magnam.',
    img: blog_3,
  },
];
