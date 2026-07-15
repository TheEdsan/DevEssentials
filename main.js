const tools = [
  {
    id: 'color-palette',
    title: 'Generador de Paletas',
    description: 'Crea esquemas de colores armónicos para tus proyectos web. Exporta en HEX, RGB y HSL.',
    icon: '🎨',
    link: '/tools/color-palette.html'
  },
  {
    id: 'code-minifier',
    title: 'Minificador de Código',
    description: 'Reduce el tamaño de tu HTML, CSS y JSON instantáneamente para que tus webs carguen más rápido.',
    icon: '⚡',
    link: '/tools/code-minifier.html'
  },
  {
    id: 'box-shadow',
    title: 'Generador de Sombras',
    description: 'Diseña sombras CSS (Box Shadow) complejas visualmente y copia el código al instante.',
    icon: '🔳',
    link: '/tools/box-shadow.html'
  },
  {
    id: 'regex-tester',
    title: 'Validador de RegEx',
    description: 'Prueba tus Expresiones Regulares en tiempo real. Indispensable para programadores.',
    icon: '🔍',
    link: '/tools/regex-tester.html'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('toolsContainer');
  
  if (container) {
    tools.forEach(tool => {
      const card = document.createElement('a');
      card.className = 'tool-card glass';
      card.href = tool.link;
      
      card.innerHTML = `
        <div class="tool-icon">${tool.icon}</div>
        <h3 class="tool-title">${tool.title}</h3>
        <p class="tool-desc">${tool.description}</p>
      `;
      
      container.appendChild(card);
    });
  }
});
