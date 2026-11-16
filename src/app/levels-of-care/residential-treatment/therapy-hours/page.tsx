import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaScript from "@/components/SchemaScript";
import Footer from "@/components/Footer";
import MedicalReview from "@/components/MedicalReview";
import { buildMetadata, DRC_REVIEWERS } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";

const SITE_URL = "https://desertrecoverycenters.com";
const PATH = "/levels-of-care/residential-treatment/therapy-hours";
const PAGE_URL = `${SITE_URL}${PATH}`;

// America/Phoenix date this page was built and published. Drives the
// visible "Updated" line, datePublished and dateModified. Set by hand on
// publish so redeploys do not move it.
const PAGE_DATE = "2026-11-15";
const PAGE_DATE_DISPLAY = "Nov 15, 2026";

// Clinical review: Dr. An Nguyen agreed to be listed as reviewer, relayed by
// Thai Nguyen on 2026-11-15.
const REVIEW_DATE = "2026-11-15";

const TITLE =
  "How Many Hours of Therapy in Residential Treatment? | Desert Recovery Centers";
const DESCRIPTION =
  "About 27 therapist-led group hours a week, two scheduled individual sessions, programming seven days a week, all in person. See our schedule next to the ASAM minimums.";

// Sources of record (docs/COMPLIANCE-RULES.md rule 4). Dates are America/Phoenix.
//
// asam: Colorado HCPF "The ASAM Criteria, Fourth Edition" summary PDF, page 2.
//   Levels 2.5 and 3.5: at least 20 hours per week of clinical services.
//   Levels 2.1 and 3.1: 9 to 19 hours of clinical services.
//   Verified outside the build session on 2026-11-15 (automated fetch was
//   blocked with HTTP 403).
// ahcccs: AHCCCS Medical Policy Manual 320-V, Behavioral Health Residential
//   Facilities (effective dates through 10/01/26). III.A.3.a requires
//   "Counseling and therapy (group and individual)". Absence claim: the
//   policy states no minimum number of hours and no session frequency.
//   Retrieved 2026-11-15.
// samhsa: 2023 N-SUMHSS Annual Report PDF, linked from the landing page
//   below. Table A-3: 14,620 substance use facilities; 3,503 (24.0%)
//   residential. Absence claim: the report does not record scheduled hours
//   of treatment per client. Retrieved 2026-11-15.
// jama: McBain et al., JAMA Network Open 2024;7(7):e2420853, published
//   July 10, 2024, abstract. Cohort of 1,001 outpatient mental health
//   treatment facilities; 79.0% offered telehealth in wave 2, Sept to Nov
//   2023. Verified outside the build session on 2026-11-15 (automated fetch
//   was blocked with HTTP 403).
// texas: 26 Tex. Admin. Code 564.903(d). Intensive residential "shall
//   provide an average of at least 30 hours of services per week", including
//   "one hour of which shall be individual counseling". Retrieved 2026-11-15.
// minnesota: Minn. Stat. 254B.19, subd. 1(a)(7), ASAM Level 3.5: "daily
//   skilled treatment services seven days a week". Retrieved 2026-11-15.
//
// DRC figures: "DRC Treatment Intensity Benchmark Report, Nov 11, 2026",
// built from the scheduling-system export for Nov 2 to 9, 2026 (published
// figures computed on the seven days Nov 3 to 9, 2026) and weekly KPI
// reports Oct 5 to Nov 9, 2026. No client data is stored in this repository.
const SOURCES = {
  asam: "https://hcpf.colorado.gov/sites/hcpf/files/ASAM-Fourth-Ed-Disseminate-Summary.pdf",
  ahcccs: "https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320-V.pdf",
  samhsa: "https://www.samhsa.gov/data/report/2023-n-sumhss-annual-report",
  jama: "https://doi.org/10.1001/jamanetworkopen.2024.20853",
  texas: "https://www.law.cornell.edu/regulations/texas/26-Tex-Admin-Code-SS-564-903",
  minnesota: "https://www.revisor.mn.gov/statutes/2024/cite/254B.19/pdf",
} as const;

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  datePublished: PAGE_DATE,
  dateModified: PAGE_DATE,
  lastReviewed: REVIEW_DATE,
  reviewedBy: DRC_REVIEWERS.nguyen,
  publisher: { "@id": `${SITE_URL}/#organization` },
  citation: Object.values(SOURCES),
};

const proofTiles = [
  { value: "27 hours", label: "of therapist-led clinical group a week" },
  { value: "54 to 56 hours", label: "of scheduled programming a week in total" },
  { value: "2 sessions", label: "of individual therapy scheduled a week, plus BridgeWork™" },
  { value: "7 days", label: "of groups every week, weekends included" },
  { value: "In person", label: "every group and individual session in our adult programs" },
];

const tableRows = [
  {
    what: "Therapist-led clinical group, residential",
    minimum: "ASAM Level 3.5: 20 hours of clinical services a week",
    drc: "About 27 hours a week",
  },
  {
    what: "All scheduled programming, residential",
    minimum:
      "Arizona Medicaid policy: none stated. Texas rule, for reference: an average of at least 30 hours a week",
    drc: "54 to 56 hours a week",
  },
  {
    what: "Individual therapy, residential",
    minimum:
      "ASAM and Arizona Medicaid policy: no frequency set. Texas rule, for reference: 1 hour a week",
    drc: "2 sessions a week scheduled, plus BridgeWork™",
  },
  {
    what: "Days with programming, residential",
    minimum: "Minnesota law, for reference: services every day",
    drc: "7 days a week, weekend clinical groups included",
  },
  {
    what: "Partial hospitalization (PHP), Phoenix",
    minimum: "ASAM Level 2.5: 20 hours a week",
    drc: "30 hours a week",
  },
  {
    what: "Intensive outpatient (IOP), Phoenix",
    minimum: "ASAM Level 2.1: 9 to 19 hours a week",
    drc: "Above the 9-hour minimum",
  },
];

const questions = [
  "How many hours of group will I have each week, and how many of those are led by a licensed therapist?",
  "How many individual sessions am I scheduled for, and what happens to them when my therapist is out?",
  "Between sessions, who checks in with me: a clinician or a technician?",
  "Are those hours in person or on a screen?",
  "Do you track any of this, and can you show me what you ran last week?",
];

const linkClass = "text-gold hover:text-gold-dark font-semibold underline";
const h2Class = "font-display text-2xl md:text-3xl text-forest font-semibold mb-6";
const h3Class = "font-display text-xl text-forest font-semibold mt-8 mb-3";
const pClass = "text-gray-600 leading-relaxed text-lg mb-4";

export default function ResidentialTherapyHoursPage() {
  return (
    <>
      <SchemaScript
        schema={[webPageSchema, getBreadcrumbSchema(getBreadcrumbsFromPathname(PATH))]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname(PATH)} />
      <PageHero
        eyebrow="Residential treatment in Glendale and Scottsdale, Arizona"
        title="Most programs will not tell you how many hours of therapy you get. Here are ours."
        description="About 27 hours of therapist-led group every week. Two individual sessions on your schedule. Programming seven days a week. Every hour in person."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />

      {/* CTA and data line */}
      <section className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+16233050496"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center"
            >
              Call (623) 305-0496
            </a>
            <Link href="/insurance" className={linkClass}>
              Check my insurance
            </Link>
          </div>
          <p className="text-xs text-sage font-body tracking-wide mt-4">
            Data: week of Nov 3 to 9, 2026. Updated{" "}
            <time dateTime={PAGE_DATE}>{PAGE_DATE_DISPLAY}</time>
          </p>
        </div>
      </section>

      {/* Proof strip */}
      <section className="py-12 bg-white">
        <div className="max-w-container mx-auto px-6">
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 list-none p-0 m-0">
            {proofTiles.map((t) => (
              <li
                key={t.value}
                className="bg-cream rounded-xl p-5 border border-gold/20 text-center"
              >
                <p className="font-display text-2xl text-forest font-semibold">{t.value}</p>
                <p className="text-gray-600 text-sm leading-snug mt-1">{t.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The missing number */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className={h2Class}>
            You are being asked to choose a program without the one number that matters
          </h2>
          <p className={pClass}>
            Every treatment website says the same things. Individualized care.
            Evidence-based therapy. A personalized plan. None of that tells you
            how you will spend a Tuesday.
          </p>
          <p className={pClass}>
            There is a national standard,{" "}
            <a href={SOURCES.asam} rel="noopener" className={linkClass}>
              the ASAM Criteria
            </a>
            , and for residential care at this level it asks for 20 hours of
            clinical services a week. That is a minimum.{" "}
            <a href={SOURCES.ahcccs} rel="noopener" className={linkClass}>
              Arizona&apos;s Medicaid policy for residential facilities
            </a>{" "}
            requires individual and group therapy and names no number of hours.
            A program can run 20 hours or 55, and the brochure reads the same.
          </p>
          <p className={pClass}>
            You cannot look it up, either.{" "}
            <a href={SOURCES.samhsa} rel="noopener" className={linkClass}>
              SAMHSA&apos;s national survey
            </a>{" "}
            counted 14,620 substance use treatment facilities in 2023 and
            recorded what each one offers. It did not record how many hours of
            treatment a client is scheduled for, and we have not found a public
            database that does. So families end up comparing photos.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={h2Class}>Our schedule, next to the published minimums</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm text-left border-collapse">
              <caption className="text-left text-gray-600 text-sm mb-4">
                Scheduled weekly hours at Desert Recovery Centers compared with
                published minimums
              </caption>
              <thead>
                <tr className="border-b-2 border-gold/40">
                  <th scope="col" className="py-4 pr-4 text-forest font-semibold font-display">
                    What you are comparing
                  </th>
                  <th scope="col" className="py-4 px-4 text-forest font-semibold font-display">
                    Published minimum
                  </th>
                  <th scope="col" className="py-4 pl-4 text-forest font-semibold font-display">
                    What DRC schedules
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {tableRows.map((r) => (
                  <tr key={r.what} className="border-b border-gray-200 align-top">
                    <th scope="row" className="py-4 pr-4 font-medium text-forest">
                      {r.what}
                    </th>
                    <td className="py-4 px-4">{r.minimum}</td>
                    <td className="py-4 pl-4">{r.drc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-forest text-lg leading-relaxed mt-8 mb-4">
            <strong>
              Our therapist-led groups alone clear the national floor. Count
              everything on the schedule and it comes to about 2.7 times that
              floor.
            </strong>
          </p>
          <p className={pClass}>
            Texas and Minnesota are two of the few states that put a number in
            writing (
            <a href={SOURCES.texas} rel="noopener" className={linkClass}>
              26 Tex. Admin. Code 564.903
            </a>
            ,{" "}
            <a href={SOURCES.minnesota} rel="noopener" className={linkClass}>
              Minn. Stat. 254B.19
            </a>
            ). Their rules do not apply here. We show them because Arizona
            gives you nothing to measure against.
          </p>
        </div>
      </section>

      {/* In person */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className={h2Class}>Every hour is in the room</h2>
          <p className={pClass}>
            Every group and every individual therapy session in our adult
            residential, PHP and IOP programs happens in person, with the
            clinician in the room. In outpatient care you can no longer assume
            that.{" "}
            <a href={SOURCES.jama} rel="noopener" className={linkClass}>
              A national study in JAMA Network Open
            </a>{" "}
            of 1,001 outpatient mental health treatment facilities found that
            79% offered telehealth in late 2023.
          </p>
          <p className={pClass}>
            Telehealth is real care, and for someone who cannot travel it can
            be the right care. But an hour on a screen and an hour in a room
            are different things, and a program&apos;s advertised hours rarely
            say which one you are buying. Ask. Ours are in the room.
          </p>
        </div>
      </section>

      {/* BridgeWork */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className={h2Class}>
            BridgeWork&trade;: the part of treatment no schedule shows
          </h2>
          <p className={pClass}>
            Dr. An Nguyen, PsyD, built{" "}
            <Link href="/treatments/bridgework" className={linkClass}>
              BridgeWork&trade;
            </Link>{" "}
            after our first year treating high-acuity clients, because we kept
            watching the same thing happen. Someone would walk out of a hard
            group carrying something they could not say in front of the room.
            They would go looking for a person to say it to. And the only staff
            member free in that hour was a behavioral health technician. Our
            techs are good at what they do. They are not clinicians, and that
            moment needed one.
          </p>
          <p className={pClass}>
            So we stopped leaving it to chance and put a clinician in that gap.
          </p>
          <p className={pClass}>
            BridgeWork&trade; is not a second therapy hour and we do not pretend
            it is. It is your therapist catching you after group, usually
            walking you outside, and coaching you through the skill right then,
            while you are still in it. Not assigning it. Not reminding you it
            exists. Breathing with you. Walking you through the grounding step
            by step, in the moment you are activated, using whatever you have
            been building across your sessions and groups.
          </p>
          <p className={pClass}>
            You can talk through a coping skill on Tuesday afternoon and still
            not reach for it at nine o&apos;clock Thursday night when you
            actually need it. BridgeWork&trade; closes that gap by making you
            use the skill while someone trained is standing there with you.
          </p>
          <p className={pClass}>
            The rest of the week is group. About half of those hours are
            therapist-led clinical group. The others are structured programming
            run by our behavioral health team: morning check-in, evening review,
            life skills and wellness. All of it belongs in a recovery day. Only
            the first half is therapy, and we count the two separately.
          </p>
        </div>
      </section>

      {/* Five questions */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className={h2Class}>Five questions to ask every program. Ask us first.</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-600 text-lg leading-relaxed mb-6">
            {questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
          <p className={pClass}>
            We log every group by date, time, facilitator and completion, at
            every location, every week. If a program cannot answer the fifth
            question, you have your answer.
          </p>
        </div>
      </section>

      {/* Quick answers */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className={h2Class}>Quick answers</h2>
          <h3 className={h3Class}>
            How many hours of therapy do you get in residential treatment at
            Desert Recovery Centers?
          </h3>
          <p className={pClass}>
            Residential clients at Desert Recovery Centers are scheduled for
            about 27 hours of therapist-led clinical group a week and two
            individual therapy sessions, inside 54 to 56 hours of total
            scheduled programming. Groups run seven days a week, and all of it
            is in person.
          </p>
          <h3 className={h3Class}>
            What is the minimum number of therapy hours for residential treatment?
          </h3>
          <p className={pClass}>
            The ASAM Criteria, Fourth Edition, sets a floor of 20 hours of
            clinical services a week for high-intensity residential care (Level
            3.5) and for partial hospitalization (Level 2.5). Intensive
            outpatient (Level 2.1) is 9 to 19 hours a week.
          </p>
          <h3 className={h3Class}>
            Does Arizona require a minimum number of therapy hours in
            residential treatment?
          </h3>
          <p className={pClass}>
            Arizona&apos;s Medicaid policy for behavioral health residential
            facilities requires individual and group therapy but states no
            number of hours. A few states do set one. Texas requires an average
            of at least 30 hours of services a week for intensive residential
            programs, including one hour of individual counseling.
          </p>
          <h3 className={h3Class}>
            Is treatment at Desert Recovery Centers in person or telehealth?
          </h3>
          <p className={pClass}>
            Every group and individual therapy session in Desert Recovery
            Centers&apos; adult residential, PHP and IOP programs is in person.
            For comparison, a 2024 study in JAMA Network Open found that 79% of
            outpatient mental health treatment facilities offered telehealth.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-forest text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-white font-semibold mb-6">
            Call and ask us question five
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            One call gets you last week&apos;s numbers and a benefits check. We
            are out-of-network with commercial insurance, and we verify what
            your plan covers before you decide anything.
          </p>
          <a
            href="tel:+16233050496"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25"
          >
            (623) 305-0496
          </a>
        </div>
      </section>

      {/* Footnote */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <MedicalReview
            reviewer="Dr. An Nguyen"
            credentials="Licensed Clinical Psychologist, Clinical Director"
            reviewerUrl="/team/dr-an-nguyen"
            label="Clinically Reviewed by"
          />
          <p className="text-xs text-gray-500 leading-relaxed">
            Hours are scheduled group hours per client from our scheduling
            system for the week of Nov 3 to 9, 2026. Residential totals ran
            between 49 and 56 hours a week across the five weeks from Oct 5 to
            Nov 9, 2026. The hours an individual client receives depend on
            attendance and clinical need. Individual session frequency is the
            scheduled standard. Texas and Minnesota rules are shown for
            reference and do not apply in Arizona.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
