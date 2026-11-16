interface PlaceholderPageProps {
  title: string;
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="placeholder-page">
      <h2>{title}</h2>
      <p>EXPEDIENTE PENDIENTE DE CLASIFICACIÓN</p>
    </div>
  );
}

export default PlaceholderPage;
