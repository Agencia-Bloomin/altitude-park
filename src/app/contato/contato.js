// JavaScript específico para a página de Contato

document.addEventListener('DOMContentLoaded', function() {
  // Referências aos elementos do formulário
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input, select, textarea');
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // Validação em tempo real
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearError);
  });
  
  // Validação do formulário
  form.addEventListener('submit', handleSubmit);
  
  // Máscara para telefone
  const telefoneInput = document.getElementById('telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        e.target.value = value;
      }
    });
  }
  
  // Validação de campos
  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.name;
    const inputGroup = field.closest('.input-group') || field.parentElement;
    
    // Remover classes de erro anteriores
    inputGroup.classList.remove('error');
    field.classList.remove('error');
    
    // Validações específicas
    let isValid = true;
    let errorMessage = '';
    
    switch (fieldName) {
      case 'nome':
        if (value.length < 2) {
          isValid = false;
          errorMessage = 'Nome deve ter pelo menos 2 caracteres';
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Email inválido';
        }
        break;
        
      case 'telefone':
        const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (value && !phoneRegex.test(value)) {
          isValid = false;
          errorMessage = 'Telefone inválido';
        }
        break;
        
      case 'empresa':
        if (value.length < 2) {
          isValid = false;
          errorMessage = 'Nome da empresa deve ter pelo menos 2 caracteres';
        }
        break;
        
      case 'servico':
        if (!value) {
          isValid = false;
          errorMessage = 'Selecione um serviço';
        }
        break;
        
      case 'mensagem':
        if (value.length < 10) {
          isValid = false;
          errorMessage = 'Mensagem deve ter pelo menos 10 caracteres';
        }
        break;
    }
    
    // Aplicar erro se necessário
    if (!isValid) {
      inputGroup.classList.add('error');
      field.classList.add('error');
      
      // Criar ou atualizar mensagem de erro
      let errorElement = inputGroup.querySelector('.input-error');
      if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'input-error';
        inputGroup.appendChild(errorElement);
      }
      errorElement.textContent = errorMessage;
      
      // Animação de shake
      field.classList.add('shake');
      setTimeout(() => {
        field.classList.remove('shake');
      }, 500);
    }
    
    return isValid;
  }
  
  // Limpar erro ao digitar
  function clearError(e) {
    const field = e.target;
    const inputGroup = field.closest('.input-group') || field.parentElement;
    
    inputGroup.classList.remove('error');
    field.classList.remove('error');
    
    const errorElement = inputGroup.querySelector('.input-error');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // Validação completa do formulário
  function validateForm() {
    let isValid = true;
    
    inputs.forEach(input => {
      if (!validateField({ target: input })) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  // Envio do formulário
  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return false;
    }
    
    // Estado de loading
    setFormLoading(true);
    
    try {
      // Simular envio para API
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Aqui você faria a chamada real para sua API
      await simulateApiCall(data);
      
      // Sucesso
      showSuccessMessage();
      form.reset();
      
    } catch (error) {
      // Erro
      showErrorMessage(error.message);
    } finally {
      setFormLoading(false);
    }
  }
  
  // Simular chamada de API
  function simulateApiCall(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simular sucesso 90% das vezes
        if (Math.random() > 0.1) {
          resolve({ success: true, message: 'Mensagem enviada com sucesso!' });
        } else {
          reject(new Error('Erro ao enviar mensagem. Tente novamente.'));
        }
      }, 2000);
    });
  }
  
  // Estados do formulário
  function setFormLoading(loading) {
    if (loading) {
      form.classList.add('form-loading');
      submitBtn.classList.add('loading');
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
    } else {
      form.classList.remove('form-loading');
      submitBtn.classList.remove('loading');
      submitBtn.textContent = 'Enviar Mensagem';
      submitBtn.disabled = false;
    }
  }
  
  // Mensagens de feedback
  function showSuccessMessage() {
    submitBtn.classList.add('success');
    submitBtn.textContent = 'Mensagem Enviada!';
    
    // Criar notificação de sucesso
    createNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    
    setTimeout(() => {
      submitBtn.classList.remove('success');
      submitBtn.textContent = 'Enviar Mensagem';
    }, 3000);
  }
  
  function showErrorMessage(message) {
    createNotification(message, 'error');
  }
  
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
    
    // Estilos da notificação
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
    
    // Animar entrada
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Fechar notificação
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    });
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          notification.remove();
        }, 300);
      }
    }, 5000);
  }
  
  // Animações de entrada
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-left');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar elementos para animação
  const animatedElements = document.querySelectorAll('.contato-info-card');
  animatedElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
  });
  
  // Efeitos de hover para cards de contato
  const contactCards = document.querySelectorAll('.contato-info-card');
  contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Copiar informações de contato
  const contactInfo = document.querySelectorAll('.contato-info-card p');
  contactInfo.forEach(info => {
    if (info.textContent.includes('@') || info.textContent.includes('(')) {
      info.style.cursor = 'pointer';
      info.title = 'Clique para copiar';
      
      info.addEventListener('click', function() {
        const text = this.textContent;
        navigator.clipboard.writeText(text).then(() => {
          createNotification(`${text} copiado para a área de transferência!`, 'success');
        }).catch(() => {
          createNotification('Erro ao copiar. Tente selecionar e copiar manualmente.', 'error');
        });
      });
    }
  });
  
  // Geolocalização para o mapa
  const mapContainer = document.querySelector('.mapa-container');
  if (mapContainer && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      // Aqui você poderia integrar com Google Maps ou outra API de mapas
      // console.log(`Localização: ${latitude}, ${longitude}`);
    }, (error) => {
      // console.log('Erro ao obter localização:', error.message);
    });
  }
  
  // Preenchimento automático de campos baseado em cookies/localStorage
  const savedData = JSON.parse(localStorage.getItem('contactFormData') || '{}');
  Object.keys(savedData).forEach(key => {
    const field = form.querySelector(`[name="${key}"]`);
    if (field) {
      field.value = savedData[key];
    }
  });
  
  // Salvar dados do formulário
  form.addEventListener('input', function() {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    localStorage.setItem('contactFormData', JSON.stringify(data));
  });
  
  // Limpar dados salvos após envio bem-sucedido
  form.addEventListener('submit', function() {
    localStorage.removeItem('contactFormData');
  });
});

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

// Aplicar debounce à validação
const debouncedValidate = debounce(validateField, 300); 