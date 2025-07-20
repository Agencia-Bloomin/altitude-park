import * as fs from 'fs';
import * as path from 'path';

interface Fonts {
  primary: string;
  secondary: string;
}

// Função para extrair as fontes do config.ts
function extractFontsFromConfig(): Fonts {
  const configPath = path.join(__dirname, '../src/data/config.ts');
  const configContent = fs.readFileSync(configPath, 'utf8');
  
  // Regex mais robusto para extrair as fontes do config
  const primaryMatch = configContent.match(/primary:\s*['"`]([^'"`]+)['"`]/);
  const secondaryMatch = configContent.match(/secondary:\s*['"`]([^'"`]+)['"`]/);
  
  if (!primaryMatch || !secondaryMatch) {
    throw new Error('Não foi possível extrair as fontes do config.ts');
  }
  
  return {
    primary: primaryMatch[1],
    secondary: secondaryMatch[1]
  };
}

// Função para atualizar o globals.css
function updateGlobalsCSS(fonts: Fonts): void {
  const globalsPath = path.join(__dirname, '../src/app/globals.css');
  let globalsContent = fs.readFileSync(globalsPath, 'utf8');
  
  // Atualizar as variáveis CSS com regex mais preciso
  globalsContent = globalsContent.replace(
    /--font-primary:\s*['"`][^'"`]*['"`];/g,
    `--font-primary: '${fonts.primary}';`
  );
  
  globalsContent = globalsContent.replace(
    /--font-secondary:\s*['"`][^'"`]*['"`];/g,
    `--font-secondary: '${fonts.secondary}';`
  );
  

  
  fs.writeFileSync(globalsPath, globalsContent);
  console.log('✅ Variáveis CSS atualizadas com sucesso!');
}

// Função para verificar se precisa sincronizar
function needsSync(): boolean {
  try {
    const fonts = extractFontsFromConfig();
    const globalsPath = path.join(__dirname, '../src/app/globals.css');
    const globalsContent = fs.readFileSync(globalsPath, 'utf8');
    
    const currentPrimary = globalsContent.match(/--font-primary:\s*['"`]([^'"`]+)['"`];/);
    const currentSecondary = globalsContent.match(/--font-secondary:\s*['"`]([^'"`]+)['"`];/);
    
    if (!currentPrimary || !currentSecondary) return true;
    
    return currentPrimary[1] !== fonts.primary || 
           currentSecondary[1] !== fonts.secondary;
  } catch (error) {
    return true;
  }
}

// Função para monitorar mudanças no config.ts
function watchConfig(): void {
  const configPath = path.join(__dirname, '../src/data/config.ts');
  
  console.log('👀 Monitorando mudanças em config.ts...');
  
  fs.watch(configPath, (eventType: string, filename: string | null) => {
    if (eventType === 'change') {
      console.log('📝 Arquivo config.ts alterado, sincronizando...');
      setTimeout(() => {
        try {
          const fonts = extractFontsFromConfig();
          updateGlobalsCSS(fonts);
          console.log('✅ Sincronização automática concluída!');
        } catch (error) {
          console.error('❌ Erro na sincronização automática:', error instanceof Error ? error.message : 'Erro desconhecido');
        }
      }, 100); // Pequeno delay para garantir que o arquivo foi salvo
    }
  });
}

// Função principal
function syncFonts(): void {
  try {
    if (!needsSync()) {
      console.log('✅ Fontes já estão sincronizadas!');
      return;
    }
    
    console.log('🔄 Sincronizando fontes...');
    const fonts = extractFontsFromConfig();
    updateGlobalsCSS(fonts);
    console.log('🎉 Sincronização concluída!');
    console.log(`📝 Fontes configuradas:`);
    console.log(`   - Primária: ${fonts.primary}`);
    console.log(`   - Secundária: ${fonts.secondary}`);
  } catch (error) {
    console.error('❌ Erro na sincronização:', error instanceof Error ? error.message : 'Erro desconhecido');
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--watch')) {
    syncFonts(); // Sincroniza primeiro
    watchConfig(); // Depois monitora
  } else {
    syncFonts();
  }
}

export { syncFonts, extractFontsFromConfig, updateGlobalsCSS, needsSync, watchConfig };
export type { Fonts }; 