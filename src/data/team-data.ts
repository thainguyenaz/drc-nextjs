export interface TeamMember {
  slug: string;
  name: string;
  jobTitle: string;
  credentials: string[];
  description: string;
  image: string;
  url: string;
  linkedIn?: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "dr-an-nguyen",
    name: "Dr. An Nguyen",
    jobTitle: "Licensed Clinical Psychologist, Clinical Director",
    credentials: ["PsyD", "Licensed Clinical Psychologist"],
    description:
      "Dr. An Nguyen is a Licensed Clinical Psychologist and Clinical Director at Desert Recovery Centers. She oversees clinical programming across all three Arizona facilities and specializes in dual-diagnosis treatment, trauma therapy, and evidence-based behavioral health interventions.",
    image: "/images/team/Dr-An-Nguyen.jpg",
    url: "https://desertrecoverycenters.com/team/dr-an-nguyen",
  },
  {
    slug: "jason-inserra",
    name: "Jason Inserra",
    jobTitle: "Co-Founder and CEO",
    credentials: ["Certified Addiction Professional"],
    description:
      "Jason Inserra is a Co-Founder and CEO of Desert Recovery Centers with personal experience in recovery. He brings deep operational expertise and a mission-driven approach to building one of Arizona's leading luxury behavioral health organizations.",
    image: "/images/team/Jason-Inserra-3.jpg",
    url: "https://desertrecoverycenters.com/team/jason-inserra",
  },
  {
    slug: "dr-greg-carr-md",
    name: "Dr. Greg Carr, MD",
    jobTitle: "Medical Director",
    credentials: ["MD", "Board Certified Psychiatrist"],
    description:
      "Dr. Greg Carr serves as Medical Director at Desert Recovery Centers, where he oversees medical care across all DRC programs including residential, PHP, IOP, and outpatient care. A psychiatrist with over 17 years of clinical experience, Dr. Carr brings deep expertise in psychiatric care for adults and geriatric patients, integrating current medical, therapeutic, and interpersonal practices to deliver comprehensive, individualized treatment. Dr. Carr is NeuroStar-certified for Transcranial Magnetic Stimulation (TMS) therapy, providing patients with access to FDA-cleared treatment for major depressive disorder. His clinical interests include addiction medicine, mood disorders, anxiety disorders, and dual diagnosis treatment. His commitment to evidence-based, individualized care helps establish DRC as a leading mental health and addiction treatment provider in Arizona.",
    image: "/images/team/Dr-Greg-Carr.jpg",
    url: "https://desertrecoverycenters.com/team/dr-greg-carr-md",
  },
  {
    slug: "dr-caitlin-ellis",
    name: "Dr. Caitlin Ellis",
    jobTitle: "Licensed Clinical Psychologist",
    credentials: ["PsyD", "Licensed Clinical Psychologist"],
    description:
      "Dr. Caitlin Ellis is a Licensed Clinical Psychologist at Desert Recovery Centers specializing in trauma-focused therapies, EMDR, and evidence-based treatment for co-occurring disorders.",
    image: "/images/team/Caitlin-Ellis.jpg",
    url: "https://desertrecoverycenters.com/team/dr-caitlin-ellis",
  },
  {
    slug: "dr-jonathan-shelton",
    name: "Dr. Jonathan Shelton",
    jobTitle: "Licensed Clinical Psychologist",
    credentials: ["PsyD", "Licensed Clinical Psychologist"],
    description:
      "Dr. Jonathan Shelton is a Licensed Clinical Psychologist at Desert Recovery Centers providing evidence-based therapy including CBT, DBT, and trauma-focused interventions for addiction and mental health clients.",
    image: "/images/team/Jonathan-Shelton.jpg",
    url: "https://desertrecoverycenters.com/team/dr-jonathan-shelton",
  },
  {
    slug: "dr-madison-day-robinson",
    name: "Dr. Madison Day-Robinson",
    jobTitle: "Licensed Clinical Psychologist",
    credentials: ["PsyD", "Licensed Clinical Psychologist"],
    description:
      "Dr. Madison Day-Robinson is a Licensed Clinical Psychologist at Desert Recovery Centers specializing in mental health treatment and evidence-based therapeutic interventions.",
    image: "/images/team/dr-madison-day-robinson.jpg",
    url: "https://desertrecoverycenters.com/team/dr-madison-day-robinson",
  },
  {
    slug: "erica-tolley",
    name: "Erica Tolley",
    jobTitle: "Registered Nurse",
    credentials: ["RN"],
    description:
      "Erica Tolley is a Registered Nurse at Desert Recovery Centers providing medical care and clinical support throughout the residential treatment process and post-detox medical management.",
    image: "/images/team/Erica-Tolley-Photo.jpg",
    url: "https://desertrecoverycenters.com/team/erica-tolley",
  },
  {
    slug: "adam-leonard",
    name: "Adam Leonard",
    jobTitle: "Director of Admissions",
    credentials: [],
    description:
      "Adam Leonard is the Director of Admissions at Desert Recovery Centers, guiding prospective clients and their families through the admissions process with compassion and efficiency.",
    image: "/images/team/Adam-Leonard.jpg",
    url: "https://desertrecoverycenters.com/team/adam-leonard",
  },
  {
    slug: "blayne-archer",
    name: "Blayne Archer",
    jobTitle: "Clinical Staff",
    credentials: [],
    description:
      "Blayne Archer is a member of the clinical team at Desert Recovery Centers, providing personalized support and therapeutic services to clients in residential treatment.",
    image: "/images/team/Blayne-Archer.jpg",
    url: "https://desertrecoverycenters.com/team/blayne-archer",
  },
  {
    slug: "jeremy-stewart",
    name: "Jeremy Stewart",
    jobTitle: "Clinical Staff",
    credentials: [],
    description:
      "Jeremy Stewart brings personal recovery experience and professional clinical training to his role at Desert Recovery Centers, creating meaningful connections with clients.",
    image: "/images/team/Jeremy-Stewart.jpg",
    url: "https://desertrecoverycenters.com/team/jeremy-stewart",
  },
  {
    slug: "ashley-inserra",
    name: "Ashley Inserra",
    jobTitle: "Operations",
    credentials: [],
    description:
      "Ashley Inserra supports operations at Desert Recovery Centers, contributing to the seamless day-to-day functioning of the organization.",
    image: "/images/team/Ashley-Inserra.jpg",
    url: "https://desertrecoverycenters.com/team/ashley-inserra",
  },
  {
    slug: "ron-alessi",
    name: "Ron Alessi",
    jobTitle: "Director of Clinical Operations and Standards",
    credentials: [],
    description:
      "With over a decade of personal recovery and professional experience, Ronald Alessi Jr. serves as the Director of Clinical Operations and Standards at Desert Recovery Centers. As a certified Peer Support Specialist and Peer Support Technician, Ronald combines lived experience with a deep understanding of behavioral health systems to ensure ethical, compassionate, and high-quality care across all programs. Known for his leadership and attention to detail, Ronald oversees documentation, policy development, and staff training to maintain the highest standards of compliance and client safety. Driven by a passion for helping others find freedom through recovery, Ronald leads with empathy, accountability, and purpose, cultivating a culture where both clients and team members can grow, heal, and thrive.",
    image: "/images/team/Ron-Alessi-2.jpg",
    url: "https://desertrecoverycenters.com/team/ron-alessi",
  },
  {
    slug: "craig-huthmacher",
    name: "Craig Huthmacher",
    jobTitle: "Program Supervisor (Glendale)",
    credentials: ["Behavioral Health Professional"],
    // PLACEHOLDER BIO pending Craig's real bio.
    description:
      "Craig Huthmacher is the Program Supervisor at Desert Recovery Centers' Glendale facility, a Behavioral Health Professional supporting clients in residential treatment.",
    image: "/images/team/Craig-Huthmacher.jpg",
    url: "https://desertrecoverycenters.com/team/craig-huthmacher",
  },
  {
    slug: "christopher-kenyon",
    name: "Christopher Kenyon",
    jobTitle: "Program Supervisor (Scottsdale)",
    credentials: ["Behavioral Health Professional"],
    // PLACEHOLDER BIO: facts-only boilerplate pending Christopher's real bio from Thai.
    description:
      "Christopher Kenyon is the Program Supervisor at Desert Recovery Centers' Scottsdale facility, a Behavioral Health Professional supporting clients in residential treatment.",
    image: "/images/team/Christopher-Kenyon.jpg",
    url: "https://desertrecoverycenters.com/team/christopher-kenyon",
  },
  {
    slug: "ian-dy",
    name: "Ian Dy",
    jobTitle: "Psychiatric Nurse Practitioner",
    credentials: ["MSN", "APRN", "FNP-C", "PMHNP-BC"],
    description:
      "Ian P. Dy, MSN, APRN, FNP-C, PMHNP-BC, serves as the Psychiatric Nurse Practitioner at Desert Recovery Centers, where he has provided comprehensive mental health care since March 2024. With over 20 years of nursing experience across medical, psychiatric, and behavioral health settings, Ian plays a vital role in the clinical team by conducting all initial psychiatric evaluations and weekly follow-up sessions for clients at each Desert Recovery Centers location. His dual certification as both a Family Nurse Practitioner and a Psychiatric Mental Health Nurse Practitioner allows him to deliver holistic, evidence-based care that integrates medical and psychological wellness. Ian’s compassionate approach, extensive clinical background, and commitment to patient-centered treatment make him a trusted leader in supporting the recovery and well-being of every client he serves.",
    image: "/images/team/Ian-Dy.jpg",
    url: "https://desertrecoverycenters.com/team/ian-dy",
  },
  {
    slug: "dr-reyes-topete-md",
    name: "Dr. Reyes Topete, MD, FASAM",
    jobTitle: "Attending Physician",
    credentials: ["MD", "FASAM"],
    description:
      "Dr. Reyes Topete, MD, FASAM, serves as Attending Physician at Desert Recovery Centers, where he conducts admission physical examinations, ongoing health assessments, and general medical care for patients across our programs. Born and raised in Phoenix, Dr. Topete obtained his B.S. in Biology from Arizona State University before earning his M.D. from the University of Arizona College of Medicine in 1992. He completed his Internal Medicine Residency at Saint Joseph Hospital and Medical Center in Phoenix in 1995. Dr. Topete has worked in addiction medicine since 1994 and is board-certified in Addiction Medicine through the American Society of Addiction Medicine. He is a DATA-waived physician (Subutex/Suboxone certified) with expertise in Medical Stabilization, Ambulatory Care, and Urgent Care. With over three decades of medical experience, Dr. Topete is committed to open communication with referring professionals and the clinical team to ensure coordinated care throughout each patient's healing process. Bilingual in English and Spanish.",
    image: "/images/team/Dr._Reyes_Topete-cropped.jpg",
    url: "https://desertrecoverycenters.com/team/dr-reyes-topete-md",
  },
  {
    slug: "ajuni-singh",
    name: "Ajuni Singh",
    jobTitle: "",
    credentials: [],
    description: "",
    image: "/images/team/Ajuni-Singh.jpg",
    url: "https://desertrecoverycenters.com/team/ajuni-singh",
  },
  {
    slug: "amanda-werner",
    name: "Amanda Werner",
    jobTitle: "Registered Nurse",
    credentials: ["RN"],
    // PLACEHOLDER BIO pending Amanda's real bio.
    description:
      "Amanda Werner is a Registered Nurse at Desert Recovery Centers, licensed in Arizona since 2020.",
    image: "/images/team/Amanda-Werner.jpg",
    url: "https://desertrecoverycenters.com/team/amanda-werner",
  },
  {
    slug: "celestine-snell",
    name: "Dr. Celestine Snell",
    jobTitle: "Postdoctoral Resident in Clinical Psychology",
    credentials: ["PsyD"],
    description:
      "Celestine Snell, PsyD, is a Postdoctoral Resident in Clinical Psychology at Desert Recovery Centers, providing clinical services under the supervision of Dr. An Nguyen, PsyD, Licensed Clinical Psychologist and Clinical Director. She earned her Doctor of Psychology in Clinical Psychology from the California School of Professional Psychology at Alliant International University. Her clinical experience spans children, adolescents, adults, and families across a range of healthcare settings, supporting people through trauma, adversity, and a broad range of mental health concerns. She works collaboratively with each client to build an individualized treatment approach.",
    image: "/images/team/Celestine-Snell.jpg",
    url: "https://desertrecoverycenters.com/team/celestine-snell",
  },
  {
    slug: "hailey-watson",
    name: "Hailey Watson",
    jobTitle: "Registered Nurse",
    credentials: ["RN", "BSN"],
    // PLACEHOLDER BIO pending Hailey's real bio.
    description:
      "Hailey Watson is a Registered Nurse at Desert Recovery Centers, licensed in Arizona since 2016. She holds a Bachelor of Science in Nursing from Grand Canyon University.",
    image: "/images/team/Hailey-Watson.jpg",
    url: "https://desertrecoverycenters.com/team/hailey-watson",
  },
  {
    slug: "job-elliot",
    name: "Job Elliot",
    jobTitle: "",
    credentials: [],
    description: "",
    image: "/images/team/Job-Elliott.jpg",
    url: "https://desertrecoverycenters.com/team/job-elliot",
  },
  {
    slug: "karson-kolovos",
    name: "Karson Kolovos",
    jobTitle: "",
    credentials: [],
    description: "",
    image: "/images/team/Karson-Kolovos.jpg",
    url: "https://desertrecoverycenters.com/team/karson-kolovos",
  },
  {
    slug: "laurel-fullmer",
    name: "Laurel Fullmer",
    jobTitle: "",
    credentials: [],
    description: "",
    image: "/images/team/Laurel-Fullmer.jpg",
    url: "https://desertrecoverycenters.com/team/laurel-fullmer",
  },
  {
    slug: "moe-daghlawi",
    name: "Moe Daghlawi",
    jobTitle: "",
    credentials: [],
    description: "",
    image: "/images/team/Moe-Daghlawi.jpg",
    url: "https://desertrecoverycenters.com/team/moe-daghlawi",
  },
  {
    slug: "selena-nguyen",
    name: "Selena Nguyen",
    jobTitle: "",
    credentials: [],
    description: "",
    image: "/images/team/Selena-Nguyen.jpg",
    url: "https://desertrecoverycenters.com/team/selena-nguyen",
  },
  {
    slug: "theresa-glasgow",
    name: "Theresa Glasgow",
    jobTitle: "",
    credentials: [],
    description: "",
    image: "/images/team/Theresa-Glasgow.jpg",
    url: "https://desertrecoverycenters.com/team/theresa-glasgow",
  },
];
