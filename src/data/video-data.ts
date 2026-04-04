export interface VideoEntry {
  youtubeId: string;
  name: string;
  description: string;
  uploadDate: string;
}

export const videoData: Record<string, VideoEntry[]> = {
  "/": [
    {
      youtubeId: "6x9IQq6h9Rk",
      name: "Desert Recovery Centers Overview",
      description:
        "An overview of Desert Recovery Centers luxury addiction and mental health treatment facilities in Arizona.",
      uploadDate: "2024-10-01",
    },
    {
      youtubeId: "5SPU81P8iko",
      name: "Desert Recovery Centers Patient Stories",
      description:
        "Hear from clients who have recovered at Desert Recovery Centers in Arizona.",
      uploadDate: "2024-10-01",
    },
    {
      youtubeId: "LjK58DeWTSY",
      name: "Desert Recovery Centers Treatment Programs",
      description:
        "Learn about addiction and mental health treatment programs at Desert Recovery Centers.",
      uploadDate: "2024-10-01",
    },
  ],
  "/about-us/": [
    {
      youtubeId: "bqDzL4O3WDE",
      name: "About Desert Recovery Centers",
      description:
        "Learn about the mission, team, and philosophy of Desert Recovery Centers in Arizona.",
      uploadDate: "2024-10-01",
    },
  ],
  "/locations/glendale/": [
    {
      youtubeId: "00ZDcQjXoE8",
      name: "Desert Recovery Centers Glendale Facility Tour",
      description:
        "Tour the Desert Recovery Centers Glendale Arizona luxury residential treatment facility.",
      uploadDate: "2024-10-01",
    },
  ],
  "/locations/scottsdale/": [
    {
      youtubeId: "7qvyphmKNxg",
      name: "Desert Recovery Centers Scottsdale Facility Tour",
      description:
        "Tour the Desert Recovery Centers North Scottsdale Arizona luxury residential treatment facility.",
      uploadDate: "2024-10-01",
    },
  ],
  "/locations/phoenix/": [
    {
      youtubeId: "rMkEYhoW-kE",
      name: "Desert Recovery Centers Phoenix Facility Tour",
      description:
        "Tour the Desert Recovery Centers Phoenix Arizona residential treatment facility.",
      uploadDate: "2024-10-01",
    },
  ],
  "/addiction-treatment/": [
    {
      youtubeId: "THSeLEff0I4",
      name: "Addiction Treatment Programs at Desert Recovery Centers",
      description:
        "Overview of drug and alcohol addiction treatment programs at Desert Recovery Centers Arizona.",
      uploadDate: "2024-10-01",
    },
  ],
  "/mental-health/": [
    {
      youtubeId: "s5Xb6AyDNS4",
      name: "Mental Health Treatment at Desert Recovery Centers",
      description:
        "Overview of mental health treatment programs at Desert Recovery Centers Arizona.",
      uploadDate: "2024-10-01",
    },
    {
      youtubeId: "NEGnf9I1K2E",
      name: "Desert Recovery Centers Mental Health Approach",
      description:
        "Learn about the holistic mental health treatment approach at Desert Recovery Centers.",
      uploadDate: "2024-10-01",
    },
    {
      youtubeId: "Q7hykWDiBSk",
      name: "Desert Recovery Centers Dual Diagnosis Treatment",
      description:
        "How Desert Recovery Centers treats co-occurring mental health and addiction disorders.",
      uploadDate: "2024-10-01",
    },
  ],
  "/treatments/": [
    {
      youtubeId: "SEZcflDyGOU",
      name: "Treatment Programs at Desert Recovery Centers",
      description:
        "Overview of clinical and holistic treatment programs offered at Desert Recovery Centers Arizona.",
      uploadDate: "2024-10-01",
    },
  ],
};
