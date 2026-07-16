// FTC-required disclosure for patient testimonial videos. Must stay clear and
// conspicuous: never move inside a details/summary, never reduce contrast.
export default function TestimonialDisclaimer() {
  return (
    <p className="mt-3 rounded-md border border-gray-200 border-l-4 border-l-gold bg-white px-4 py-3 text-sm font-medium text-gray-700">
      Shared voluntarily and with consent. Individual experiences vary and are not a guarantee of any outcome.
    </p>
  );
}
