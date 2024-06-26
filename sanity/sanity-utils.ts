import { createClient, groq } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env";


export async function getProjects() {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
	});

	return client.fetch(
		groq`*[_type == 'project']{
			_id,
			_createdAt,
			title,
			artist,
			year,
			mediums,
			images[] {
				"url": asset->url
			},
			description
		}`
	);
}

export async function getResidents() {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
	});

	return client.fetch(
		groq`*[_type == 'resident']{
			_id,
			_createdAt,
			name,
			title,
			contact
		}`
	);
}

export async function getEquipment() {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
	});

	return client.fetch(
		groq`*[_type == 'equipment']{
			_id,
			_createdAt,
			equipment,
			description,
		}`
	);
}