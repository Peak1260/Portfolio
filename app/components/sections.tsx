interface SectionProps {
    children: React.ReactNode;
  }
  
  export function Section({ children }: SectionProps) {
    return (
      <section className="flex flex-col gap-2">
        {children}
      </section>
    );
  }