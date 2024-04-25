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