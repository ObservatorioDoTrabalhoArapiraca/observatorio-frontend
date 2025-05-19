import React, { useState } from 'react';
import PdfList from '../components/PdfList';
import '../pages/DataPage.css';

const RelatoriosPage = () => {
  const [tab, setTab] = useState<'conjuntural' | 'tematico'>('conjuntural');

  return (
    <main>
      <div className="tab-selector">
        <button
          className={tab === 'conjuntural' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setTab('conjuntural')}
        >
          Boletins Conjunturais
        </button>
        <button
          className={tab === 'tematico' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setTab('tematico')}
        >
          Temático
        </button>
      </div>
      <PdfList tipo={tab} />
    </main>
  );
};

export default RelatoriosPage;