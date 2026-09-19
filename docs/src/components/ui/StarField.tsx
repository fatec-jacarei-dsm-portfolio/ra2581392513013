import "./StarField.css";

export function StarField() {
  return (
    <div className="starfield" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="starfield__layer" />
      ))}
    </div>
  );
}
