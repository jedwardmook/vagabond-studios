import { type SchemaTypeDefinition } from 'sanity';
import { projectType } from './schemaTypes/projectType';
import { residentType } from './schemaTypes/residentType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [projectType, residentType]
};
