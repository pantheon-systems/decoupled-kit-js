export default function Grid({ cols = "3", children }) {
  return (
    <div
      className={`mt-12 grid gap-5 max-w-content mx-auto lg:grid-cols-${String(cols)} lg:max-w-screen-lg`}
    >
      {children}
    </div>
  );
}
