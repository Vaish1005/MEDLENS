import jsPDF from "jspdf";

export const exportPDF = (
  query,

  response,
) => {
  const pdf = new jsPDF();

  pdf.setFontSize(18);

  pdf.text(
    "MedLens Clinical Report",

    20,

    20,
  );

  pdf.setFontSize(12);

  pdf.text(
    `Query:

${query}`,

    20,

    50,
  );

  pdf.text(
    `Response:

${response}`,

    20,

    100,
  );

  pdf.save("clinical-report.pdf");
};
