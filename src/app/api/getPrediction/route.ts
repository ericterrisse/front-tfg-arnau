export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const input = searchParams.get("input");
	if (!input) return Response.json({ status: 500, error: "No input provided" });

	try {
		const res = await fetch(
			`https://fe7e-34-48-98-213.ngrok-free.app/${input}`
		);
		const response = await res.json();
		return Response.json({ response: response });
	} catch (error) {
		console.log(error);
		return Response.json({ error });
	}
}
