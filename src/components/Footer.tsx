export default function Footer() {
  return (
    <footer className="glass py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg text-foreground">
          Sulove<span className="text-coral">.</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sulove Shrestha. All rights reserved.
        </p>
        <div className="flex gap-4">
          {["LinkedIn", "Twitter", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-sm text-muted-foreground hover:text-coral transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
