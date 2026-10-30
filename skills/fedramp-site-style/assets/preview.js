/* Specimen behavior only. No persistence, remote calls, or project data. */
(() => {
  const specimen = document.getElementById('specimen');
  const variant = document.getElementById('variant');
  const mode = document.getElementById('mode');
  const descriptions = {
    project: ['Project foundation', 'Plum identity, a warm action color, and a quiet reading surface bring the FedRAMP references into a flexible project site.'],
    reference: ['Rules and reference', 'Compact structure, serif headings, and indigo links support documentation, stable identifiers, and useful reference tables.'],
    research: ['Research and evidence', 'Editorial serif headings, warm paper, and restrained color keep findings, evidence, and methodology close together.'],
    reader: ['Publication reader', 'A quiet green palette and clear sans-serif hierarchy support sustained reading, source links, and navigable reports.'],
    workbook: ['Working paper', 'Cream paper, serif text, and blue links create a measured setting for analysis, source quotations, and decisions.'],
    radiance: ['Radiance / Open House', 'Plum, violet, and spacious typography establish an expressive foundation for clear audience paths and community participation.']
  };
  function updateVariant() {
    const key = variant.value;
    specimen.dataset.frTheme = key;
    mode.disabled = !['reader', 'radiance'].includes(key);
    if (mode.disabled) mode.value = 'light';
    specimen.dataset.frMode = mode.value;
    document.getElementById('variant-label').textContent = descriptions[key][0];
    document.getElementById('direction').textContent = descriptions[key][1];
  }
  variant.addEventListener('change', updateVariant);
  mode.addEventListener('change', updateVariant);
  const query = document.getElementById('evidence-query');
  const rows = [...document.querySelectorAll('#evidence-rows tr')];
  function filterRows() {
    const value = query.value.trim().toLocaleLowerCase();
    let count = 0;
    rows.forEach(row => {
      row.hidden = !row.dataset.search.includes(value);
      if (!row.hidden) count++;
    });
    document.getElementById('result-count').textContent = `${count} example record${count === 1 ? '' : 's'}`;
    document.getElementById('empty-state').hidden = count !== 0;
  }
  query.addEventListener('input', filterRows);
  document.getElementById('reset-filter').addEventListener('click', () => {
    query.value = '';
    filterRows();
    query.focus();
  });
  updateVariant();
  filterRows();
})();
