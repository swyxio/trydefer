import helloWorld from '$defer/helloWorld';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	await helloWorld();
	return new Response(String('ok'));
}
