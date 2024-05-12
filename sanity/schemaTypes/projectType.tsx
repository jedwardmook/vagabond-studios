import { defineField, defineType } from "sanity";

export const projectType = defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string'
		}),
		defineField({
			name: 'artist',
			type: 'string'
		}),
		defineField({
			name: 'year',
			type: 'string'
		}),
		defineField({
			name: 'description',
			type: 'string'
		}),
		defineField({
			name: 'mediums',
			type: 'array',
			of: [
				{
					type: 'string'
				}
			]
		}),
		defineField({
			name: 'images',
			type: 'array',
			of: [
				{
					type: 'image',
					fields: [
						{
							name: 'isLandscape',
							title: 'Is Landscape',
							type: 'boolean',
							initialValue: false,
						}
					]
				}
			]
		})
	]
});