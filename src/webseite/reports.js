import { getReport } from "../services/customer-number-server/reports.js";
const reports = getReport("Developer");
console.log(reports);