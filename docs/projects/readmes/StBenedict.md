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

## Screenshots

<table>
<tr>
<td align="center"><img src="screenshots/1.png" alt="System initialization" width="440"><br>System initialization</td>
<td align="center"><img src="screenshots/2.png" alt="Secure staff access" width="440"><br>Secure staff access</td>
</tr>
</table>

<details>
<summary>View all 6 screenshots</summary>

### 1. System initialization

![System initialization](screenshots/1.png)

### 2. Secure staff access

![Secure staff access](screenshots/2.png)

### 3. Doctor directory management

![Doctor directory management](screenshots/3.png)

### 4. Patient intake

![Patient intake](screenshots/4.png)

### 5. Appointment scheduler

![Appointment scheduler](screenshots/5.png)

### 6. Billing & payment

![Billing & payment](screenshots/6.png)

</details>

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
