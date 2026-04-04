const references = [
  {
    name: "SAMHSA National Survey on Drug Use and Health",
    url: "https://www.samhsa.gov/data/",
  },
  {
    name: "National Institute on Drug Abuse",
    url: "https://nida.nih.gov/",
  },
  {
    name: "National Institute of Mental Health",
    url: "https://www.nimh.nih.gov/",
  },
];

export default function Citations() {
  return (
    <section className="border-t border-gray-200 pt-8 mt-12">
      <h2 className="text-xl font-semibold mb-4">References</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
        {references.map((ref) => (
          <li key={ref.url}>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {ref.name}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
