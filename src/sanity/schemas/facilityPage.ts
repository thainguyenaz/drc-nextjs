import { defineType, defineField } from "sanity";

export default defineType({
  name: "facilityPage",
  title: "Facility Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroHeading", title: "Hero Heading", type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text" }),
    defineField({ name: "bodyContent", title: "Body Content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } }),
  ],
});
