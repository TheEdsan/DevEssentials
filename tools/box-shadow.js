const previewBox = document.getElementById('previewBox');
const codeOutput = document.getElementById('codeOutput');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');

const inputs = {
  shiftX: document.getElementById('shiftX'),
  shiftY: document.getElementById('shiftY'),
  blur: document.getElementById('blur'),
  spread: document.getElementById('spread'),
  color: document.getElementById('shadowColor'),
  opacity: document.getElementById('opacity')
};

const labels = {
  shiftX: document.getElementById('valX'),
  shiftY: document.getElementById('valY'),
  blur: document.getElementById('valBlur'),
  spread: document.getElementById('valSpread'),
  opacity: document.getElementById('valOpacity')
};

function hexToRGB(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }
  return `${+r}, ${+g}, ${+b}`;
}

function updateShadow() {
  const x = inputs.shiftX.value;
  const y = inputs.shiftY.value;
  const blur = inputs.blur.value;
  const spread = inputs.spread.value;
  const hexColor = inputs.color.value;
  const op = inputs.opacity.value / 100;

  labels.shiftX.textContent = x;
  labels.shiftY.textContent = y;
  labels.blur.textContent = blur;
  labels.spread.textContent = spread;
  labels.opacity.textContent = op.toFixed(2);

  const rgbaColor = `rgba(${hexToRGB(hexColor)}, ${op})`;
  const shadowValue = `${x}px ${y}px ${blur}px ${spread}px ${rgbaColor}`;

  previewBox.style.boxShadow = shadowValue;
  codeOutput.textContent = `box-shadow: ${shadowValue};`;
}

Object.values(inputs).forEach(input => {
  input.addEventListener('input', updateShadow);
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(codeOutput.textContent).then(() => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  });
});

// Init
updateShadow();
