import { comments } from "../data";

export async function GET(_req, { params }) {
  const { id } = await params;
  const comment = comments.find((com) => com.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  const { text } = await req.json();
  const index = comments.findIndex((com) => com.id === parseInt(id));
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(_req, { params }) {
  const { id } = await params;
  const index = comments.findIndex((com) => com.id === parseInt(id));
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}
