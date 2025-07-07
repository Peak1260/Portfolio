import { Metadata } from "next";
import { Section } from "../components/sections";

export const metadata: Metadata = {
  title: "Experience | Your Name",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Work Experience
        </h1>
      </div>

      <div className="flex flex-col gap-16">
        <Section>
          <h2 className="text-xl font-bold">Data Engineer Intern</h2>
          <p className="text-secondary">Forsys · Milpitas, CA</p>
          <p className="text-tertiary">July 2024 - Sept 2024</p>
          <ul className="list-disc list-inside space-y-2 text-secondary mt-4">
            <li>Converted customers&apos; legacy codebases to modern database platforms using the Flodata ETL tool. Designed data pipelines to ensure seamless migration, enhance workflow, and minimize manual efforts by 80%.</li>
            <li>Performed data integration for 15 SAP tables into Oracle database using REST API calls, converting data to XML, parsing values, and executing nightly full loads by truncating and reloading SQL tables.</li>
          </ul>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Frontend Developer</h2>
          <p className="text-secondary">EZessence · Redwood City, CA</p>
          <p className="text-tertiary">June 2023 - June 2024</p>
          <ul className="list-disc list-inside space-y-2 text-secondary mt-4">
            <li>Developed a responsive e-commerce website with ReactJS, HTML, CSS, and JavaScript to improve user experience, foster customer relationships, and drive sustained business growth.</li>
            <li>Created innovative spreadsheets for pricing and profitability analysis, enabling data-driven procurement. Executed daily purchases to replenish inventory, resulting in a 20% revenue increase on Amazon Seller Central.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}