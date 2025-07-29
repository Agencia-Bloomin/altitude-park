interface BackgroundElementsProps {
  firstElementPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  secondElementPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  firstElementColor?: string;
  secondElementColor?: string;
  firstElementClass?: string;
  secondElementClass?: string;
}

export function BackgroundElements({ 
  firstElementPosition = 'top-left',
  secondElementPosition = 'bottom-right',
  firstElementColor = 'quinary-400',
  secondElementColor = 'tertiary-400',
  firstElementClass = '',
  secondElementClass = ''
}: BackgroundElementsProps) {
  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-64 -left-6';
      case 'top-right':
        return 'top-56 -right-6';
      case 'bottom-left':
        return 'bottom-10 -left-6';
      case 'bottom-right':
        return 'bottom-10 -right-6';
      default:
        return 'top-56 -left-6';
    }
  };

  const getBorderRadius = (position: string) => {
    switch (position) {
      case 'top-left':
        return { borderRadius: '0 200px 200px 0' };
      case 'top-right':
        return { borderRadius: '200px 0 0 200px' };
      case 'bottom-left':
        return { borderRadius: '0 200px 200px 0' };
      case 'bottom-right':
        return { borderRadius: '200px 0 0 200px' };
      default:
        return { borderRadius: '0 200px 200px 0' };
    }
  };

  const getColorValue = (colorClass: string) => {
    const colorMap: { [key: string]: string } = {
      'primary-400': '#ea258e',
      'secondary-400': '#00b4f5',
      'tertiary-400': '#fe8d35',
      'quaternary-400': '#f0e410',
      'quinary-400': '#a1da00',
    };
    return colorMap[colorClass] || '#a1da00';
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Primeiro elemento */}
      <div 
        className={`absolute w-1/2 h-64 border-2 opacity-70 ${getPositionClasses(firstElementPosition)} ${firstElementClass} animate-float-left`}
        style={{
          ...getBorderRadius(firstElementPosition),
          borderColor: getColorValue(firstElementColor)
        }}
      ></div>
      
      {/* Segundo elemento */}
      <div 
        className={`absolute w-1/2 h-64 border-2 opacity-70 ${getPositionClasses(secondElementPosition)} ${secondElementClass} animate-float-right`}
        style={{
          ...getBorderRadius(secondElementPosition),
          borderColor: getColorValue(secondElementColor)
        }}
      ></div>
    </div>
  );
} 