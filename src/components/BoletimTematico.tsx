import { PdfFile } from "@/core/services/pdfService";

export function BoletimTematico({ filtered }: { filtered: PdfFile[] }) {
  return (
    <div className="w-full mx-auto">
      <h2>Documentos Disponíveis</h2>
      {filtered.length === 0 && <p>Nenhum PDF disponível.</p>}
      <ul className="pdf-list">
        {filtered.map((pdf) => (
          <li key={pdf.url} className="pdf-item">
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              <span className="pdf-icon">📄</span>
              <span className="pdf-title">{pdf.name}</span>
              <span className="pdf-action">Abrir</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
