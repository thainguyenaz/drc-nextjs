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
    jobTitle: "Co-Founder and Director of Operations",
    credentials: ["Certified Addiction Professional"],
    description:
      "Jason Inserra is a Co-Founder and Director of Operations of Desert Recovery Centers with personal experience in recovery. He brings deep operational expertise and a mission-driven approach to building one of Arizona's leading luxury behavioral health organizations.",
    image: "/images/team/Jason-Inserra-3.jpg",
    url: "https://desertrecoverycenters.com/team/jason-inserra",
  },
  {
    slug: "dr-greg-carr-md",
    name: "Dr. Greg Carr, MD",
    jobTitle: "Medical Director",
    credentials: ["MD"],
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
    slug: "adam-leonard",
    name: "Adam Leonard",
    jobTitle: "Admissions Director",
    credentials: [],
    description:
      "Adam Leonard is the Admissions Director at Desert Recovery Centers, guiding prospective clients and their families through the admissions process with compassion and efficiency.",
    image: "/images/team/Adam-Leonard.jpg",
    url: "https://desertrecoverycenters.com/team/adam-leonard",
  },
  {
    slug: "blayne-archer",
    name: "Blayne Archer",
    jobTitle: "Admissions & Business Development",
    credentials: [],
    description:
      "Blayne Archer works on the admissions and business development team at Desert Recovery Centers, helping individuals and families begin treatment.",
    image: "/images/team/Blayne-Archer.jpg",
    url: "https://desertrecoverycenters.com/team/blayne-archer",
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
    description:
      "Christopher Kenyon is the Program Supervisor at Desert Recovery Centers. For many years, Christopher self-medicated unprocessed trauma, a particular and unfamiliar weight that many people quietly carry, and he understands the reasons behind the need to hide it. Through his own healing, Christopher decided to dedicate his life to helping others lay down that weight and find a different way of living. He believes recovery is about more than overcoming addiction. It is about reestablishing identity, building resilience, and creating a life rooted in purpose. Today, Christopher walks alongside others with compassion, accountability, and hope, helping them believe that healing is possible and that lasting change begins with a choice. You don't need to see the whole staircase; you only have to take the first step.",
    image: "/images/team/Christopher-Kenyon.jpg",
    url: "https://desertrecoverycenters.com/team/christopher-kenyon",
  },
  {
    slug: "avery-booth",
    name: "Avery Booth",
    jobTitle: "Psychiatric Nurse Practitioner",
    // Title and credential per Thai Nguyen, 2026-11-16. Arizona Board of
    // Nursing license verification still pending. PLACEHOLDER BIO pending
    // Avery's own bio: no experience, education, or certification claims
    // until he supplies them.
    credentials: ["PMHNP"],
    description:
      "Avery Booth, PMHNP, is a Psychiatric Nurse Practitioner at Desert Recovery Centers.",
    image: "/images/team/Avery-Booth.jpg",
    url: "https://desertrecoverycenters.com/team/avery-booth",
  },
  {
    slug: "dr-reyes-topete-md",
    name: "Dr. Reyes Topete, MD, FASAM",
    jobTitle: "Attending Physician",
    credentials: ["MD", "FASAM"],
    description:
      "Dr. Reyes Topete, MD, FASAM, serves as Attending Physician at Desert Recovery Centers, where he conducts admission physical examinations, ongoing health assessments, and general medical care for patients across our programs. Born and raised in Phoenix, Dr. Topete obtained his B.S. in Biology from Arizona State University before earning his M.D. from the University of Arizona College of Medicine in 1992. He completed his Internal Medicine Residency at Saint Joseph Hospital and Medical Center in Phoenix in 1995. Dr. Topete has worked in addiction medicine since 1994. He is a DATA-waived physician (Subutex/Suboxone certified) with expertise in Medical Stabilization, Ambulatory Care, and Urgent Care. With over three decades of medical experience, Dr. Topete is committed to open communication with referring professionals and the clinical team to ensure coordinated care throughout each patient's healing process. Bilingual in English and Spanish.",
    image: "/images/team/Dr._Reyes_Topete-cropped.jpg",
    url: "https://desertrecoverycenters.com/team/dr-reyes-topete-md",
  },
  {
    slug: "amanda-werner",
    name: "Amanda Werner",
    jobTitle: "Registered Nurse",
    credentials: ["RN", "BSN"],
    description:
      "Amanda is a Registered Nurse dedicated to providing compassionate, patient-centered care to individuals on their journey toward recovery and wellness. She earned her Bachelor of Science in Nursing and cared for patients across a variety of acute care specialties before finding passion in mental health and substance use. Dedicated to treating every client with dignity, empathy, and respect, she believes healing begins with building trust and fostering meaningful therapeutic relationships. In collaboration with the team of professionals at Desert Recovery Centers, Amanda strives to make a positive impact through kindness and advocacy, while ensuring clients receive safe, high-quality medical care as they navigate recovery.",
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
];
