export default function Page({ params: { id }}) {
  return <h1>{id}</h1>;
}

export function generateStaticParams() {
  const array = [];

for (let i = 1; i <= 10000; i++) {
  array.push(i.toString());
  // Or using template literals: array.push(`${i}`);
}
  return array.map((id) => ({
    id,
  }))
}