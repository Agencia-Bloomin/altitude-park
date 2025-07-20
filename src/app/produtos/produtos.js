// JavaScript específico para a página de Produtos

document.addEventListener('DOMContentLoaded', function() {
  // Dados dos produtos (em um projeto real, viriam de uma API)
  const produtos = [
    {
      id: 'marketing-digital',
      titulo: 'Marketing Digital Completo',
      descricao: 'Estratégia completa de marketing digital para aumentar suas vendas e presença online.',
      preco: 'A partir de R$ 2.500/mês',
      caracteristicas: ['SEO', 'Google Ads', 'Redes Sociais', 'Analytics'],
      categoria: 'completo',
      destaque: true
    },
    {
      id: 'seo',
      titulo: 'Otimização SEO',
      descricao: 'Melhore o posicionamento do seu site nos motores de busca e aumente o tráfego orgânico.',
      preco: 'A partir de R$ 1.800/mês',
      caracteristicas: ['Análise de Keywords', 'Otimização On-Page', 'Link Building', 'Relatórios'],
      categoria: 'seo',
      destaque: false
    },
    {
      id: 'google-ads',
      titulo: 'Google Ads',
      descricao: 'Campanhas publicitárias no Google para gerar leads qualificados e aumentar conversões.',
      preco: 'A partir de R$ 1.200/mês',
      caracteristicas: ['Campanhas Search', 'Display Ads', 'Remarketing', 'Otimização'],
      categoria: 'ads',
      destaque: false
    },
    {
      id: 'redes-sociais',
      titulo: 'Gestão de Redes Sociais',
      descricao: 'Presença ativa nas principais redes sociais para engajar sua audiência.',
      preco: 'A partir de R$ 1.500/mês',
      caracteristicas: ['Facebook', 'Instagram', 'LinkedIn', 'Conteúdo'],
      categoria: 'social',
      destaque: false
    },
    {
      id: 'web-design',
      titulo: 'Web Design',
      descricao: 'Sites modernos e responsivos que convertem visitantes em clientes.',
      preco: 'A partir de R$ 3.000',
      caracteristicas: ['Design Responsivo', 'UX/UI', 'Otimização', 'Manutenção'],
      categoria: 'design',
      destaque: false
    },
    {
      id: 'consultoria',
      titulo: 'Consultoria Estratégica',
      descricao: 'Análise e planejamento estratégico para otimizar seus resultados de marketing.',
      preco: 'A partir de R$ 800/hora',
      caracteristicas: ['Auditoria', 'Planejamento', 'Implementação', 'Acompanhamento'],
      categoria: 'consultoria',
      destaque: false
    }
  ];

  // Estado da aplicação
  let produtosFiltrados = [...produtos];
  let categoriaAtiva = 'todos';
  let termoBusca = '';

  // Elementos do DOM
  const produtosContainer = document.querySelector('.produtos-grid');
  const filtrosContainer = document.querySelector('.produtos-filtros');
  const buscaContainer = document.querySelector('.produtos-busca');

  // Inicialização
  initFiltros();
  initBusca();
  renderizarProdutos();
  initAnimações();

  // Inicializar filtros
  function initFiltros() {
    if (!filtrosContainer) return;

    const categorias = [
      { id: 'todos', nome: 'Todos' },
      { id: 'completo', nome: 'Completos' },
      { id: 'seo', nome: 'SEO' },
      { id: 'ads', nome: 'Google Ads' },
      { id: 'social', nome: 'Redes Sociais' },
      { id: 'design', nome: 'Web Design' },
      { id: 'consultoria', nome: 'Consultoria' }
    ];

    filtrosContainer.innerHTML = categorias.map(categoria => `
      <button class="filtro-btn ${categoria.id === 'todos' ? 'ativo' : ''}" 
              data-categoria="${categoria.id}">
        ${categoria.nome}
      </button>
    `).join('');

    // Event listeners para filtros
    filtrosContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('filtro-btn')) {
        const categoria = e.target.dataset.categoria;
        filtrarPorCategoria(categoria);
        
        // Atualizar estado visual dos botões
        filtrosContainer.querySelectorAll('.filtro-btn').forEach(btn => {
          btn.classList.remove('ativo');
        });
        e.target.classList.add('ativo');
      }
    });
  }

  // Inicializar busca
  function initBusca() {
    if (!buscaContainer) return;

    buscaContainer.innerHTML = `
      <input type="text" class="busca-input" placeholder="Buscar produtos...">
      <svg class="busca-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
    `;

    const buscaInput = buscaContainer.querySelector('.busca-input');
    
    // Debounce para busca
    let timeoutBusca;
    buscaInput.addEventListener('input', function() {
      clearTimeout(timeoutBusca);
      timeoutBusca = setTimeout(() => {
        termoBusca = this.value.toLowerCase();
        aplicarFiltros();
      }, 300);
    });
  }

  // Filtrar por categoria
  function filtrarPorCategoria(categoria) {
    categoriaAtiva = categoria;
    aplicarFiltros();
  }

  // Aplicar filtros
  function aplicarFiltros() {
    produtosFiltrados = produtos.filter(produto => {
      const matchCategoria = categoriaAtiva === 'todos' || produto.categoria === categoriaAtiva;
      const matchBusca = !termoBusca || 
        produto.titulo.toLowerCase().includes(termoBusca) ||
        produto.descricao.toLowerCase().includes(termoBusca) ||
        produto.caracteristicas.some(carac => carac.toLowerCase().includes(termoBusca));
      
      return matchCategoria && matchBusca;
    });

    renderizarProdutos();
  }

  // Renderizar produtos
  function renderizarProdutos() {
    if (!produtosContainer) return;

    if (produtosFiltrados.length === 0) {
      produtosContainer.innerHTML = `
        <div class="produto-sem-resultados">
          <h3>Nenhum produto encontrado</h3>
          <p>Tente ajustar os filtros ou termos de busca.</p>
        </div>
      `;
      return;
    }

    produtosContainer.innerHTML = produtosFiltrados.map(produto => `
      <div class="produto-card ${produto.destaque ? 'destaque' : ''}" data-id="${produto.id}">
        <div class="produto-imagem">
          ${produto.titulo.split(' ').slice(0, 2).join(' ')}
        </div>
        <div class="produto-conteudo">
          <h3 class="produto-titulo">${produto.titulo}</h3>
          <p class="produto-descricao">${produto.descricao}</p>
          
          <div class="produto-preco">${produto.preco}</div>
          
          <div class="produto-avaliacao">
            <div class="produto-estrelas">
              ${Array(5).fill().map(() => '<svg viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
            </div>
            <span class="produto-nota">(4.9)</span>
          </div>
          
          <div class="produto-caracteristicas">
            <h4>Inclui:</h4>
            <ul>
              ${produto.caracteristicas.map(carac => `<li>${carac}</li>`).join('')}
            </ul>
          </div>
          
          <div class="produto-botoes">
            <a href="/produtos/${produto.id}" class="produto-btn produto-btn-primario">
              Ver Detalhes
            </a>
            <button class="produto-btn produto-btn-secundario" onclick="solicitarOrcamento('${produto.id}')">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Adicionar event listeners aos cards
    const cards = produtosContainer.querySelectorAll('.produto-card');
    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('produto-btn-secundario')) {
          const produtoId = this.dataset.id;
          window.location.href = `/produtos/${produtoId}`;
        }
      });
    });
  }

  // Inicializar animações
  function initAnimações() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.produto-card, .beneficio-card');
    animatedElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });
  }

  // Função global para solicitar orçamento
  window.solicitarOrcamento = function(produtoId) {
    // Redirecionar para página de contato com produto pré-selecionado
    const url = `/contato?produto=${produtoId}`;
    window.location.href = url;
  };

  // Lazy loading para imagens
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  // Observar imagens para lazy loading
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Contador animado para estatísticas
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-target'));
        const duration = 2000;
        const increment = finalValue / (duration / 16);
        let currentValue = 0;

        const updateCounter = () => {
          currentValue += increment;
          if (currentValue < finalValue) {
            target.textContent = Math.floor(currentValue);
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = finalValue;
          }
        };

        updateCounter();
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // Efeitos de hover para cards
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.produto-card')) {
      const card = e.target.closest('.produto-card');
      card.style.transform = 'translateY(-10px) scale(1.02)';
    }
  });

  document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.produto-card')) {
      const card = e.target.closest('.produto-card');
      card.style.transform = 'translateY(0) scale(1)';
    }
  });

  // Sistema de notificações
  function createNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    });
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          notification.remove();
        }, 300);
      }
    }, 5000);
  }

  // Função para debounce
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Aplicar debounce ao scroll
  const debouncedScroll = debounce(() => {
    // Lógica de scroll otimizada
  }, 16);

  window.addEventListener('scroll', debouncedScroll);
}); 