const tools = [
  {
    id: 'color-palette',
    title: 'Generador de Paletas',
    description: 'Crea esquemas de colores armónicos para tus proyectos web. Exporta en HEX, RGB y CSS variables.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    link: '/tools/color-palette.html'
  },
  {
    id: 'code-minifier',
    title: 'Optimizador de Código',
    description: 'Reduce el tamaño de tu HTML, CSS y JSON instantáneamente para que tus webs carguen más rápido.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    link: '/tools/code-minifier.html'
  },
  {
    id: 'box-shadow',
    title: 'Generador de Sombras',
    description: 'Diseña sombras CSS (Box Shadow) complejas visualmente y copia el código al instante.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>',
    link: '/tools/box-shadow.html'
  },
  {
    id: 'regex-tester',
    title: 'Validador de RegEx',
    description: 'Prueba tus Expresiones Regulares en tiempo real. Indispensable para programadores.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    link: '/tools/regex-tester.html'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('toolsContainer');
  
  if (container) {
    tools.forEach(tool => {
      const card = document.createElement('a');
      card.className = 'tool-card';
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
