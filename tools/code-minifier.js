const inputCode = document.getElementById('inputCode');
const outputCode = document.getElementById('outputCode');
const langSelect = document.getElementById('langSelect');
const formatBtn = document.getElementById('formatBtn');
const minifyBtn = document.getElementById('minifyBtn');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function processCode(action) {
  const code = inputCode.value;
  const lang = langSelect.value;
  
  if (!code.trim()) {
    showToast('Por favor, ingresa código primero');
    return;
  }

  try {
    if (lang === 'json') {
      if (action === 'format') {
        const parsed = JSON.parse(code);
        outputCode.value = JSON.stringify(parsed, null, 2);
      } else {
        const parsed = JSON.parse(code);
        outputCode.value = JSON.stringify(parsed);
      }
    } 
    else if (lang === 'css') {
      if (action === 'minify') {
        // Remover comentarios y espacios extra
        outputCode.value = code.replace(/\/\*[\s\S]*?\*\//g, '')
                               .replace(/\s+/g, ' ')
                               .replace(/\s*([\{\}\:\;\,])\s*/g, '$1')
                               .trim();
      } else {
        // Formateador básico de CSS
        let formatted = code.replace(/\s*([\{\}\:\;\,])\s*/g, '$1')
                            .replace(/\{/g, ' {\n  ')
                            .replace(/\;/g, ';\n  ')
                            .replace(/\}/g, '}\n\n')
                            .replace(/  \}/g, '}');
        outputCode.value = formatted.trim();
      }
    }
    else if (lang === 'html') {
      if (action === 'minify') {
        outputCode.value = code.replace(/<!--[\s\S]*?-->/g, '')
                               .replace(/\s+/g, ' ')
                               .replace(/>\s+</g, '><')
                               .trim();
      } else {
        // Simple HTML formater (muy básico)
        outputCode.value = code.replace(/></g, '>\n<');
      }
    }
  } catch (e) {
    outputCode.value = 'Error al procesar el código: ' + e.message;
  }
}

formatBtn.addEventListener('click', () => processCode('format'));
minifyBtn.addEventListener('click', () => processCode('minify'));

copyBtn.addEventListener('click', () => {
  if (outputCode.value.trim()) {
    navigator.clipboard.writeText(outputCode.value).then(() => {
      showToast('Código copiado al portapapeles');
    });
  }
});
