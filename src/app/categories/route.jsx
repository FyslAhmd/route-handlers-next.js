export const dynamic = "force-static";
export async function GET() {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home Goods" },
    { id: 4, name: "Sports" },
  ];

  return Response.json(categories);
}
