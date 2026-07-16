import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaScript from "@/components/SchemaScript";
import { getPersonSchema, getBreadcrumbSchema } from "@/lib/schema";
import { teamMembers } from "@/data/team-data";
import { buildMetadata, VideoSchemas } from "@/lib/seo";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import VideoTranscript from "@/components/VideoTranscript";

// Per-person video bios. To give a team member a video, add an entry here plus
// a matching "/team/<slug>/" entry in video-data.ts and a transcript in video-transcripts.ts.
const teamVideos: Record<string, { youtubeId: string; title: string; caption: string; shortTitle: string }> = {
  "dr-an-nguyen": {
    youtubeId: "MjuIDXGHwCE",
    title: "Why I Became a Clinical Psychologist | Dr. An Nguyen, Desert Recovery Centers",
    caption: "Dr. An Nguyen shares why she became a clinical psychologist, and why she stands behind the care we give.",
    shortTitle: "Why I Became a Clinical Psychologist",
  },
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return {};
  return buildMetadata({
    title: member.jobTitle
      ? `${member.name} — ${member.jobTitle} | Desert Recovery Centers`
      : `${member.name} | Desert Recovery Centers`,
    description: member.jobTitle
      ? `Meet ${member.name}, ${member.jobTitle.toLowerCase()} at Desert Recovery Centers. Part of Arizona's leading luxury addiction and mental health treatment team.`
      : `Meet ${member.name} at Desert Recovery Centers. Part of Arizona's leading luxury addiction and mental health treatment team.`,
    path: `/team/${member.slug}`,
  });
}

const SITE_URL = "https://desertrecoverycenters.com";

export default function TeamMemberPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) notFound();

  const schemaImage = member.image;
  const personSchema = getPersonSchema({
    name: member.name,
    jobTitle: member.jobTitle,
    description: member.description,
    image: schemaImage,
    url: member.url,
    credentials: member.credentials,
    linkedIn: member.linkedIn,
  });

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Our Team", url: `${SITE_URL}/our-team` },
    { name: member.name, url: member.url },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SchemaScript schema={[personSchema, breadcrumbSchema]} />
      <VideoSchemas path={`/team/${member.slug}/`} />
      <Navigation />

      <div className="bg-white">
        <div className="max-w-container mx-auto px-6 pt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 md:w-56 aspect-[4/5] relative rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={member.image}
                  alt={
                    member.jobTitle
                      ? `${member.name} ${member.jobTitle} at Desert Recovery Centers Arizona`
                      : `${member.name} at Desert Recovery Centers Arizona`
                  }
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>

              <div>
                <h1 className="font-display text-3xl md:text-4xl text-forest font-semibold">
                  {member.name}
                </h1>
                {member.jobTitle && (
                  <h2 className="font-display text-xl text-sage mt-2">
                    {member.jobTitle}
                  </h2>
                )}
                {member.credentials.length > 0 && (
                  <p className="text-gray-500 mt-2 text-sm">
                    {member.credentials.join(", ")}
                  </p>
                )}
                <p className="text-gray-600 leading-relaxed mt-6">
                  {member.description || "Profile coming soon."}
                </p>
              </div>
            </div>
            {teamVideos[member.slug] && (
              <div className="max-w-3xl mx-auto mt-12">
                <div className="md:max-w-[380px]">
                  <YouTubeEmbed
                    youtubeId={teamVideos[member.slug].youtubeId}
                    title={teamVideos[member.slug].title}
                    caption={teamVideos[member.slug].caption}
                    vertical
                  />
                  <VideoTranscript
                    youtubeId={teamVideos[member.slug].youtubeId}
                    title={teamVideos[member.slug].shortTitle}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
