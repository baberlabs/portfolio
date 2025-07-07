import { FaFilePdf } from "react-icons/fa6";

import Section from "../components/Section";

const DownloadCVButton = () => (
  <Section firstSection>
    <div className="flex justify-center">
      <a
        href="/Baber_Khan_FullStack_Developer_CV.pdf"
        download="Baber_Khan_FullStack_Developer_CV.pdf"
        className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-colors hover:from-blue-700 hover:to-blue-500 focus:bg-blue-800 focus:outline-none dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700"
        aria-label="Download CV in PDF format"
      >
        <FaFilePdf className="text-lg" />
        Download CV
      </a>
    </div>
  </Section>
);

export default DownloadCVButton;
