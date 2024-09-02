import prPoWorkFlow from "../../../../public/project/pr-po/pr-po-workflow.png";
import html from "../../../../public/project/pr-po/html-pdf.png";
import pdf from "../../../../public/project/pr-po/pdf-export.png";
import excelData from "../../../../public/project/pr-po/excel-data.png";
import excelResult from "../../../../public/project/pr-po/excel-result.png";
import signature from "../../../../public/project/pr-po/signature.png";
import signatureBase64 from "../../../../public/project/pr-po/signature-base64.png";
import graph from "../../../../public/project/pr-po/summary.png";
import { Grid2 } from "@mui/material";

export const prPoContributions = [
  {
    name: "Purchase Request - Purchase Order workflow",
    detail: `Handling complex business logic for purchase requests (PR) and
            purchase orders (PO), which includes functionalities such as
            forwarding, reversing, skipping, and approving PRs/POs. Given that
            PRs/POs contain multiple items, it’s crucial to maintain the
            relationship between PRs/POs and their items. Additionally, the
            process involves integrating information from other tables, such as
            departments and users, to ensure comprehensive and accurate
            management.`,
  },
  {
    name: "Generating PDF file",
    detail: `Launches a headless browser using Puppeteer, opens a new page, and
            sets its content to an HTML file. It then emulates screen media for
            accurate styling, generates a PDF with specified margins and
            settings, and saves the PDF to a file.`,
    exampleImages: [html, pdf],
  },
  {
    name: "Import and export spreadsheet data",
    detail: `Write code to read data from Excel files, process it according to
            specific requirements, and export the results. This includes using
            relevant libraries to handle Excel data, performing necessary
            transformations or analyses, and generating the output in the
            required format.`,
    exampleImages: [excelData, excelResult],
  },
  {
    name: "Signature capture",
    detail: `Implementing a signature capture feature using
            react-signature-canvas, including the ability to convert the
            signature into a base64-encoded image.`,
    exampleImages: [signature, signatureBase64],
  },
  {
    name: "Data representation",
    detail: `Implementing MUI (Material-UI) Chart components to effectively
            represent and visualize data in my applications.`,
    exampleImages: [graph],
  },
];
