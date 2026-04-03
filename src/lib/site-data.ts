export const siteData = {
  name: "Desert Recovery Centers",
  email: "contact@desertrecoverycenters.com",
  social: {
    facebook: "https://www.facebook.com/desertrecoverycenters",
    instagram: "https://www.instagram.com/desertrecoverycenter",
    twitter: "https://x.com/desertrecoverycenters",
  },
  locations: [
    {
      name: "Glendale",
      address: "8105 W Frier Dr, Glendale, AZ 85303",
      phone: "(623) 323-1012",
      phoneTel: "+16233231012",
      sqft: "7,500",
      description:
        "Our flagship residential treatment center offering comprehensive mental health and addiction programs in a luxury home-like setting.",
      programs: ["Residential Treatment", "PHP", "IOP"],
      amenities: ["Basketball Court", "Tennis Court", "Pool", "Gym", "Billiards", "Massage Room"],
      image: "/images/glendale/Gelndale-Front-1.jpg",
    },
    {
      name: "Scottsdale",
      address: "23222 N Church Rd, Scottsdale, AZ 85255",
      phone: "(480) 931-3617",
      phoneTel: "+14809313617",
      description:
        "Residential mental health and addiction treatment nestled in north Scottsdale with stunning mountain views and serene desert surroundings.",
      programs: ["Residential Treatment", "PHP", "IOP"],
      amenities: ["Pool", "Tennis Court", "Basketball Court", "Gym", "Massage Room", "Mountain Views"],
      image: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
    },
    {
      name: "Phoenix",
      address: "1623 W Moody Trail, Phoenix, AZ 85041",
      phone: "(623) 257-5384",
      phoneTel: "+16232575384",
      sqft: "5,500",
      description:
        "Residential and outpatient services with expanded holistic programming, featuring a movie theater and pool with waterfall.",
      programs: ["Residential Treatment", "Outpatient"],
      amenities: ["Movie Theater", "Pool with Waterfall", "Gym", "Massage Room"],
      image: "/images/general/accom-backyard.jpg",
    },
  ],
  team: {
    leadership: [
      { name: "Dr. An Nguyen", title: "Licensed Clinical Psychologist, Clinical Director", image: "/images/team/Dr-An-Nguyen.jpg" },
      { name: "Jason Inserra", title: "Director of Operations", image: "/images/team/Jason-Inserra-3.jpg" },
      { name: "Adam Leonard", title: "Admissions Director", image: "/images/team/Adam-Leonard.jpg" },
      { name: "Blayne Archer", title: "Admissions & Business Development", image: "/images/team/Blayne-Archer.jpg" },
      { name: "Jeremy Stewart", title: "Admissions Coordinator & Business Development Liaison", image: "/images/team/Jeremy-Stewart.jpg" },
      { name: "Ashley Inserra", title: "Human Resources", image: "/images/team/Ashley-Inserra.jpg" },
      { name: "Ron Alessi", title: "Director of Compliance", image: "/images/team/Ron-Alessi-2.jpg" },
    ],
    clinical: [
      { name: "Dr. Reyes Topete, MD", title: "Medical Director", image: "/images/team/Dr._Reyes_Topete-cropped.jpg" },
      { name: "Dr. Caitlin Ellis", title: "Licensed Clinical Psychologist", image: "/images/team/Caitlin-Ellis.jpg" },
      { name: "Dr. Jonathan Shelton", title: "Licensed Clinical Psychologist", image: "/images/team/Jonathan-Shelton.jpg" },
      { name: "Dr. Madison Day-Robinson", title: "Licensed Clinical Psychologist", image: "/images/team/dr-madison-day-robinson.jpg" },
      { name: "Erica Tolley", title: "Registered Nurse", image: "/images/team/Erica-Tolley-Photo.jpg" },
      { name: "Craig Huthmacher", title: "Program Supervisor (Glendale), Behavioral Health Professional", image: "/images/team/Craig-Huthmacher.jpg" },
    ],
  },
  mentalHealth: [
    { name: "Anxiety Disorders", href: "/mental-health/anxiety-treatment", description: "Generalized anxiety, panic disorder, social anxiety, and phobias treated with proven therapeutic approaches." },
    { name: "Depression", href: "/mental-health/depression-treatment", description: "Major depressive disorder, persistent depression, and seasonal affective disorder addressed through integrated care." },
    { name: "PTSD & Trauma", href: "/mental-health/ptsd-treatment", description: "Specialized trauma therapy including EMDR, somatic experiencing, and trauma-focused CBT for lasting healing." },
    { name: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment", description: "Mood stabilization, medication management, and psychotherapy for bipolar I and bipolar II disorders." },
    { name: "OCD", href: "/mental-health/ocd-treatment", description: "Exposure and response prevention (ERP) and cognitive therapy for obsessive-compulsive disorder." },
    { name: "Personality Disorders", href: "/mental-health/personality-disorder-treatment", description: "DBT-based treatment for borderline personality disorder and other personality conditions." },
    { name: "ADHD", href: "/mental-health/adhd-add", description: "Comprehensive assessment, medication management, and behavioral strategies for attention-deficit disorders." },
    { name: "Schizophrenia", href: "/mental-health/schizophrenia-treatment", description: "Integrated psychiatric care and therapeutic support for schizophrenia spectrum disorders." },
  ],
  addictionPrograms: [
    { name: "Alcohol", href: "/addiction/alcoholism-treatment", description: "Medical detox and comprehensive alcohol use disorder treatment." },
    { name: "Opioids", href: "/addiction/heroin-addiction-treatment", description: "MAT-supported treatment for heroin, fentanyl, and prescription opioid addiction." },
    { name: "Cocaine", href: "/addiction/cocaine-addiction-treatment", description: "Cocaine and crack cocaine addiction treatment with behavioral therapies." },
    { name: "Meth", href: "/addiction/meth-addiction-treatment", description: "Methamphetamine addiction treatment with evidence-based protocols." },
    { name: "Fentanyl", href: "/addiction/fentanyl-addiction-treatment", description: "Specialized fentanyl addiction treatment with medically supervised detox." },
    { name: "Prescription Drugs", href: "/addiction/prescription-drug-addiction-treatment", description: "Treatment for prescription drug dependencies including opioids, benzos, and stimulants." },
    { name: "Marijuana", href: "/addiction/marijuana-addiction-treatment", description: "Cannabis use disorder treatment addressing psychological dependence." },
    { name: "Gambling", href: "/addiction/understanding-gambling-addiction", description: "Behavioral addiction treatment for compulsive gambling." },
    { name: "Sex Addiction", href: "/addiction/understanding-sex-addiction", description: "Compassionate treatment for compulsive sexual behavior." },
    { name: "Stimulants", href: "/addiction/stimulant-addiction-treatment", description: "Treatment for cocaine, meth, and other stimulant addictions." },
  ],
  testimonials: [
    {
      name: "Leo",
      text: "Desert Recovery Centers changed my life. The clinical staff is 100% caring and helpful. With this care and therapy I am able to go on with life in sobriety and feel confident about my recovery and who I am as a person.",
    },
    {
      name: "Samantha",
      text: "I've been to many treatment centers, yet I've never experienced a place like DRC. Doctors run morning groups and this place truly focuses on dual diagnosis. I've never felt stronger in my recovery. DRC saved my life.",
    },
    {
      name: "Eddy",
      text: "The facilities are like none other — from the wonderful food to all the activities. All the staff were truly caring individuals. If you are struggling with addiction, this would be the rehab I would recommend to anyone.",
    },
  ],
  faqs: [
    {
      q: "What types of insurance do you accept?",
      a: "Desert Recovery Centers is in-network with most major insurance providers, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and many more. Our admissions team will verify your benefits at no cost and walk you through your coverage before you begin treatment.",
    },
    {
      q: "How long does treatment typically last?",
      a: "Treatment duration varies by individual need. Residential programs typically range from 30 to 90 days. PHP runs 4-6 weeks with 5-6 hours of daily programming, and IOP is usually 8-12 weeks meeting 3-4 times per week. Your clinical team will adjust the timeline as needed.",
    },
    {
      q: "Do you treat both mental health and addiction?",
      a: "Yes. Desert Recovery Centers specializes in dual diagnosis treatment — addressing mental health conditions and substance use disorders simultaneously. Research shows that treating both conditions together leads to significantly better long-term outcomes.",
    },
    {
      q: "What does a typical day look like in residential treatment?",
      a: "A typical day includes morning mindfulness or yoga, individual therapy, group therapy sessions, psychoeducation, recreational activities, and evening reflection. Clients enjoy gourmet meals, exercise, and personal downtime. Weekends include family visiting hours and experiential activities.",
    },
    {
      q: "Is the admissions process confidential?",
      a: "Absolutely. Every aspect of your treatment is completely confidential and protected by HIPAA and 42 CFR Part 2 federal regulations. We maintain strict confidentiality protocols, especially for professionals and public figures.",
    },
    {
      q: "Can family members visit during treatment?",
      a: "Yes. We encourage family involvement as part of the healing process. Family members can visit during designated hours and are invited to participate in our family therapy program, including education sessions, joint therapy, and support groups.",
    },
    {
      q: "What happens after I complete treatment?",
      a: "Your clinical team develops a comprehensive aftercare plan before discharge, including referrals for ongoing therapy, support group recommendations, and connection to our alumni network with monthly events, check-in calls, and a private community.",
    },
    {
      q: "How do I know if I need residential vs. outpatient treatment?",
      a: "The right level of care depends on the severity of your condition, your home environment, previous treatment history, and daily responsibilities. During your free clinical assessment, our admissions team will recommend the best level of care — no pressure, no obligation.",
    },
  ],
} as const;
