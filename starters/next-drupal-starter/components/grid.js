export default function Grid({ gap = "5", cols = "3", children }) {
  return (
    <div
      className={`mt-12 grid gap-${gap.toString()} max-w-content mx-auto lg:grid-cols-${cols.toString()} lg:max-w-screen-lg`}
    >
      {children}
    </div>
  );
}
