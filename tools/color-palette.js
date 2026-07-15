const paletteContainer = document.getElementById('paletteContainer');
const generateBtn = document.getElementById('generateBtn');
const exportBtn = document.getElementById('exportBtn');
const toast = document.getElementById('toast');

let currentColors = [];

// Función para generar un color hexadecimal aleatorio vibrante (evitando grises muy oscuros)
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function copyToClipboard(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  });
}

function renderPalette() {
  paletteContainer.innerHTML = '';
  currentColors = [];

  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    currentColors.push(color);

    const pane = document.createElement('div');
    pane.className = 'color-pane';
    pane.style.backgroundColor = color;
    
    // Calcular si el color es oscuro o claro para el contraste del texto (opcional, aquí usamos fondo semitransparente)
    
    const hexLabel = document.createElement('div');
    hexLabel.className = 'color-hex';
    hexLabel.textContent = color;

    pane.appendChild(hexLabel);

    pane.addEventListener('click', () => {
      copyToClipboard(color, `¡Copiado ${color}!`);
    });

    paletteContainer.appendChild(pane);
  }
}

function exportCSS() {
  let cssText = `:root {\n`;
  currentColors.forEach((color, index) => {
    cssText += `  --color-${index + 1}: ${color};\n`;
  });
  cssText += `}`;
  
  copyToClipboard(cssText, 'CSS copiado al portapapeles');
}

// Event Listeners
generateBtn.addEventListener('click', renderPalette);
exportBtn.addEventListener('click', exportCSS);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault(); // Evitar scroll
    renderPalette();
  }
});

// Init
renderPalette();
