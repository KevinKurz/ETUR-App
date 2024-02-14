import { getReport } from "../../services/customer-number-server/report-list.js";
const reports = getReport("Developer");
console.log(reports);