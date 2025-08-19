import React, { useEffect, useState } from 'react';

// Adiciona prop tipo
interface PdfListProps {
  tipo?: 'conjuntural' | 'tematico';
}

type PdfFile = {
  name: string;
  url: string;
};

const PdfList: React.FC<PdfListProps> = ({ tipo }) => {
  const [pdfFiles, setPdfFiles] = useState<PdfFile[]>([]);

  const filtered = tipo
    ? pdfFiles.filter(pdf => {
        if (tipo === 'conjuntural') return pdf.url.toLowerCase().includes('conjuntural');
        if (tipo === 'tematico') return pdf.url.toLowerCase().includes('tematico');
        return true;
      })
    : pdfFiles;

  // Função para extrair o ano e mês do nome do arquivo
  function extractYearMonth(name: string): { year: string, month: string } {
    const yearMatch = name.match(/(20\d{2})/);
    const year = yearMatch ? yearMatch[1] : 'Outros';
    // Procura mês por nome (em português)
    const monthNames = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    let month = 'Outros';
    for (const m of monthNames) {
      if (name.toLowerCase().includes(m)) {
        month = m.charAt(0).toUpperCase() + m.slice(1);
        break;
      }
    }
    return { year, month };
  }

  // Agrupa os PDFs por ano e mês
  const grouped: { [year: string]: { [month: string]: PdfFile[] } } = {};
  filtered.forEach(pdf => {
    const { year, month } = extractYearMonth(pdf.name);
    if (!grouped[year]) grouped[year] = {};
    if (!grouped[year][month]) grouped[year][month] = [];
    grouped[year][month].push(pdf);
  });

  // Ordena os anos do mais recente para o mais antigo
  const sortedYears = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
  // Ordem dos meses decrescente
  const monthOrder = [
    'Dezembro', 'Novembro', 'Outubro', 'Setembro', 'Agosto', 'Julho',
    'Junho', 'Maio', 'Abril', 'Março', 'Fevereiro', 'Janeiro', 'Outros'
  ];

  // Se for tematico, apenas lista simples
  if (tipo === 'tematico') {
    return (
      <div className="documentos-container">
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
    );
  }

  return (
    <div className="documentos-container">
      <h2>Documentos Disponíveis</h2>

      {filtered.length === 0 && <p>Nenhum PDF disponível.</p>}

      {sortedYears.map(year => (
        <div key={year} style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#003d98', marginBottom: '1rem' }}>{year}</h3>
          {monthOrder.filter(month => grouped[year][month]).map(month => (
            <div key={month} style={{ marginBottom: '1.2rem' }}>
              <h4 style={{ color: '#0050c7', margin: '0 0 0.5rem 0' }}>{month}</h4>
              <ul className="pdf-list">
                {grouped[year][month].map((pdf) => (
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
          ))}
        </div>
      ))}
    </div>
  );
};

export default PdfList;