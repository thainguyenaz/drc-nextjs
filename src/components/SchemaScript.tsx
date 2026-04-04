type SchemaObject = Record<string, unknown>;

/**
 * Renders JSON-LD structured data as <script> tags.
 * Safe usage of dangerouslySetInnerHTML: only serializes our own static
 * schema objects via JSON.stringify, no user-supplied HTML content.
 */
export default function SchemaScript({
  schema,
}: {
  schema: SchemaObject | SchemaObject[];
}) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
