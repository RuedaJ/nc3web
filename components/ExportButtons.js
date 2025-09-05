'use client';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default function ExportButtons() {
  async function exportExcel() {
    const rows = [['Variable','Score'],['Hídrico',82],['Suelo',74],['Biodiversidad',88],['Clima',79]];
    const ws = XLSX.utils.aoa_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Resultados');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'resultados_regenerativos.xlsx');
  }
  async function exportPDF() {
    const input = document.getElementById('map-card');
    const input2 = document.getElementById('dashboard-card');
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    let y = 40;
    async function addSection(el, title) {
      if (!el) return;
      const canvas = await html2canvas(el, { useCORS: true, scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pageWidth = doc.internal.pageSize.getWidth() - 80;
      const ratio = pageWidth / canvas.width;
      const imgHeight = canvas.height * ratio;
      doc.setFont('helvetica', 'bold'); doc.text(title, 40, y); y += 10;
      doc.addImage(imgData, 'PNG', 40, y, pageWidth, imgHeight); y += imgHeight + 24;
    }
    doc.setFontSize(14); doc.text('Informe de Evaluación de Capital Natural (mock)', 40, y); y += 24;
    await addSection(input, 'Mapa'); await addSection(input2, 'Dashboard'); doc.save('informe_regenerativo.pdf');
  }
  return (
    <div className="flex flex-wrap gap-3">
      <button onClick={exportPDF} className="px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Exportar PDF</button>
      <button onClick={exportExcel} className="px-4 py-2 rounded-lg border border-emerald-300 text-emerald-800 hover:bg-emerald-50">Exportar Excel</button>
    </div>
  );
}