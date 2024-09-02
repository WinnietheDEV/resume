import styles from "./page.module.css";

export default function ClinicProject() {
  return (
    <main className={styles.main}>
      <div className="content-container">
        <h1>Dental Clinic Management</h1>
        <h2>Overview</h2>
        <div
          className="grid-container"
          style={{ gridTemplateColumns: "50% 50%" }}
        >
          <p>
            This project focuses on digitizing the company’s purchase order
            workflow. It includes several modules: user management, supplier
            management, department management, purchase requests, and purchase
            orders, with purchase requests and purchase orders being the core
            features. In addition to these modules, the project also features
            data import from Excel files, PDF generation from HTML and CSS, user
            signature storage, and graphical data display..
          </p>
          {/* <Image src={prPoWorkFlow} width={500} height={150} /> */}
        </div>
      </div>
    </main>
  );
}
