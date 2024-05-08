import { defineField, defineType } from "sanity";

export const equipmentType = defineType({
	name: 'equipment',
	title: 'Equipment',
	type: 'document',
	fields: [
        defineField({
            name: 'equipment',
            type: 'string'
        }),
        defineField({
            name: 'description',
            type: 'string'
        })
    ]
});