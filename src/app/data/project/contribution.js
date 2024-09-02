import html from "../../../../public/project/pr-po/html-pdf.png";
import pdf from "../../../../public/project/pr-po/pdf-export.png";
import excelData from "../../../../public/project/pr-po/excel-data.png";
import excelResult from "../../../../public/project/pr-po/excel-result.png";
import signature from "../../../../public/project/pr-po/signature.png";
import signatureBase64 from "../../../../public/project/pr-po/signature-base64.png";
import graph from "../../../../public/project/pr-po/summary.png";

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

export const labContribution = [
  {
    name: "Developing laboratory workflow",
    detail: `I developed a complex laboratory workflow that includes several key processes. This involved adding laboratory tests to patient records, updating the status when specimens are collected, and managing status changes after specimens are analyzed.`,
  },
  {
    name: "Handling complex forms and intricate UI workflows",
    detail: `I was responsible for handling complex forms and UI workflows. Some forms contained over 50 fields and required extensive validation. Additionally, many field values were interconnected with various database tables, necessitating precise data handling and validation to ensure accuracy and consistency throughout the system.`,
  },
  {
    name: "Integrating barcode device",
    detail: `I integrated a barcode reader device to efficiently capture lab IDs. This task involved extensive research and experimentation with various libraries to find the best solution for seamless integration.`,
  },
  {
    name: "Developing and managing the item master module",
    detail: `I was responsible for developing and managing the item master module, which holds values from various tables such as lab and radiology. This role involved handling complex relationships between items in the system.`,
  },
  {
    name: "Creating seed data",
    detail: `I was tasked with creating seed data by reading from Excel files and applying specific logic to the data. The challenge was significant due to the large volume of data and the complex relationships between tables.`,
  },
];

export const clinicContribution = [
  {
    name: "Fixing bugs",
    detail: `I have been tasked with reviewing and understanding code written by other developers, identifying and diagnosing bugs, and implementing fixes. One notable challenge was pinpointing the root cause of issues in the existing codebase. For example, I addressed a problem where adding a new appointment would alter existing appointment information. This issue was traced back to the code not resetting every field in the form and erroneously using the same patient ID for multiple appointments. My role involved analyzing these problems, understanding their underlying causes, and making the necessary code improvements.`,
  },
  {
    name: "Improving code",
    detail: `I created a new API to consolidate a series of related tasks that were previously handled by separate APIs. Specifically, in the payment process workflow, it was essential to update the OPD status to inactive (indicating that the treatment is complete), update the payment, and chain it with the OPD ID while performing additional tasks. The original issue arose because these steps were fragmented across different APIs. This fragmentation led to problems, such as when a user double-clicked a button, causing the API call to be sent multiple times. If the first API call hadn't completed before the second call was made, the OPD ID would already be used from the first call, causing errors in chaining with the payment. My solution involved integrating these steps into a single API to ensure that the workflow is executed consistently and correctly, even in the case of multiple API calls.`,
  },
];

export const trackingContribution = [
  {
    name: "Creating CRUD APIs and entities",
    detail: `I created CRUD APIs and corresponding entities for every table using NestJS and TypeORM. This involved designing and implementing the data models and API endpoints to perform Create, Read, Update, and Delete operations efficiently.`,
  },
  {
    name: "Creating API documentation",
    detail: `I created API documentation using OpenAPI, which involved defining and structuring the API endpoints, request and response formats, and overall service specifications.`,
  },
  {
    name: "Involvement in user acceptance testing",
    detail: `I participated in a customer company visit alongside the business and technical teams to provide support during the User Acceptance Testing (UAT) phase. My role involved assisting users with the testing process, addressing any issues that arose.`,
  },
];
