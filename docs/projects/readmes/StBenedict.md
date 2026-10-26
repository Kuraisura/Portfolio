# St. Benedict Hospital Management System

A Windows hospital-administration project for patient records, appointments, prescriptions, and billing.

**Windows** · **School Project** · 2024

[Portfolio](https://kuraisler.xyz)

## Purpose

St. Benedict models administrative workflows for a hospital or clinic. It connects patient and doctor records with appointments, medical-history views, prescriptions, procedure costs, and billing so related information can be managed from a desktop application.

## Intended users

Front-desk staff and doctors in a school-project hospital scenario, with different screens for administrative and doctor-facing work.

## Main capabilities

- Maintain patient and doctor records and appointment schedules.
- Review patient history and clinical encounter information.
- Manage prescription and procedure-cost records.
- Prepare billing output and PDF documents with QR codes.

## How it was built

### Desktop modules

C# Windows Forms on .NET Framework 4.7.2 provides dedicated administrative and doctor-facing screens. The project developed through multiple iterations.

### Database layer

ADO.NET queries and data adapters connect the application to SQL Server LocalDB for patients, appointments, billing, and related records.

### Documents and controls

Guna.UI2 styles the interface; iTextSharp and QRCoder provide PDF and QR generation for supported workflows.

## Technology stack

| Responsibility | Technologies |
| --- | --- |
| Windows application | C#, .NET Framework 4.7.2, Windows Forms |
| Database | SQL Server LocalDB, ADO.NET |
| Interface | Guna.UI2 |
| Documents | iTextSharp, QRCoder |

## Project scope and current state

A school management-system project. Clinical and cost mappings are demonstration logic, and the project has not been established as a validated electronic health record or a production clinical system.

## Source guide

- [`StBenedict/`](StBenedict/)
- [`StBenedict/dbConnect.cs`](StBenedict/dbConnect.cs)
- [`StBenedict/DoctorDashboard.cs`](StBenedict/DoctorDashboard.cs)

## Development setup

Open the project under StBenedict/ in Visual Studio on Windows with the .NET desktop workload and .NET Framework 4.7.2 targeting pack. Restore dependencies and configure the expected SQL Server LocalDB database. Verify the schema and use synthetic records for demonstration workflows.

## Screenshot and module walkthrough

Expand a screen below to see the capture and an explanation of the module, its visible controls, and its role in the application.

<details open>
<summary><strong>01 · Application startup</strong></summary>

A medical icon and loading bar introduce the desktop project before login. This is a startup presentation screen, not a patient or administrative record view.

<p><img src="screenshots/1.png" alt="Application startup" width="960"></p>

</details>

<details>
<summary><strong>02 · Administrator login</strong></summary>

The branded login window accepts a username and password before opening the management modules. It establishes the account-entry flow for the school-project hospital interface.

<p><img src="screenshots/2.png" alt="Administrator login" width="960"></p>

</details>

<details>
<summary><strong>03 · Doctor record management</strong></summary>

Name, contact number, specialization, and account fields sit above a doctor table with record actions. Administrators use this module to maintain the doctor directory for related appointment workflows.

<p><img src="screenshots/3.png" alt="Doctor record management" width="960"></p>

</details>

<details>
<summary><strong>04 · Patient registration</strong></summary>

Demographic fields, diagnosis, and doctor assignment appear above the patient list. The module captures the patient information referenced by appointments and billing in the demonstration system.

<p><img src="screenshots/4.png" alt="Patient registration" width="960"></p>

</details>

<details>
<summary><strong>05 · Appointment scheduling</strong></summary>

Patient and doctor selectors combine with appointment date, status, time fields, floor, and availability. A table below organizes saved appointments for administrative review.

<p><img src="screenshots/5.png" alt="Appointment scheduling" width="960"></p>

</details>

<details>
<summary><strong>06 · Medical billing and receipt actions</strong></summary>

The bill form connects a patient and diagnosis with medication, procedures, treatment costs, payment method, and totals. View Receipt, Pay, and Delete expose the billing actions; the capture does not show a completed payment or receipt.

<p><img src="screenshots/6.png" alt="Medical billing and receipt actions" width="960"></p>

</details>

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
