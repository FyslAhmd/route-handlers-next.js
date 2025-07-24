import { comments } from "../data";

export async function GET(req, { params }) {
  const { id } = await params;
  const comment = comments.find((com) => com.id === parseInt(id));
  return Response.json(comment);
}
