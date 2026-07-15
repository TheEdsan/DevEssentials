const regexInput = document.getElementById('regexInput');
const flagsInput = document.getElementById('flagsInput');
const testString = document.getElementById('testString');
const resultArea = document.getElementById('resultArea');

function updateRegex() {
  const pattern = regexInput.value;
  const flags = flagsInput.value;
  const text = testString.value;

  if (!pattern) {
    resultArea.innerHTML = text; // Just show raw text if no pattern
    return;
  }

  try {
    const regex = new RegExp(pattern, flags);
    
    // Si no es global, matchAll fallaría, así que hacemos un pequeño apaño visual
    // Lo ideal es que el usuario use 'g' para múltiples matches, pero aquí
    // reemplazaremos para resaltar el match.
    
    // Para evitar XSS en text content, escapamos HTML básico
    let safeText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // highlight matches
    // Necesitamos asegurarnos de que la regex sea segura para replace (sin capturas conflictivas en este caso básico)
    // Una forma más robusta es iterar, pero el replace es simple:
    const regexGlobal = new RegExp(pattern, flags.includes('g') ? flags : flags + 'g');
    
    const highlightedText = safeText.replace(regexGlobal, (match) => {
      return `<span class="match">${match}</span>`;
    });

    resultArea.innerHTML = highlightedText || '<span style="color:var(--text-muted)">Sin coincidencias.</span>';
  } catch (e) {
    resultArea.innerHTML = `<span style="color: #ef4444;">Error de Sintaxis RegEx: ${e.message}</span>`;
  }
}

regexInput.addEventListener('input', updateRegex);
flagsInput.addEventListener('input', updateRegex);
testString.addEventListener('input', updateRegex);

// Init
updateRegex();
