import { defineField, defineType } from "sanity";

export const residentType = defineType({
  name: 'resident',
  title: 'Resident',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'contact',
      type: 'string'
    })
  ]
});