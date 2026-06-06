export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Nexus-Corp KBDSS</h1>

      <p>
        Sistema de soporte a decisiones basado en conocimiento.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#e5e7eb",
          }}
        >
          Adopción: 72%
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#e5e7eb",
          }}
        >
          Precisión: 87%
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#e5e7eb",
          }}
        >
          Reglas: 6
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#e5e7eb",
          }}
        >
          Calificación: 4.6/5
        </div>
      </div>
    </main>
  );
}
