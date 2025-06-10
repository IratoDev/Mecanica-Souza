import { useRef, useState, useEffect } from "react";

const itensGaleria = [
  { id: "1", titulo: "Serviço A", descricao: "Detalhes sobre o serviço A." },
  { id: "2", titulo: "Serviço B", descricao: "Detalhes sobre o serviço B." },
  { id: "3", titulo: "Serviço C", descricao: "Detalhes sobre o serviço C." },
  { id: "4", titulo: "Serviço D", descricao: "Detalhes sobre o serviço D." },
];

const duplicatedItems = [...itensGaleria, ...itensGaleria, ...itensGaleria];

export function CarroselGaleria() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 320;
  const gap = 16;
  const fullItemWidth = itemWidth + gap;
  const [activeIndex, setActiveIndex] = useState(itensGaleria.length);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollToActiveItem = () => {
    const container = containerRef.current;
    if (!container) return;
    const center =
      fullItemWidth * activeIndex - container.offsetWidth / 2 + fullItemWidth / 2;
    container.scrollTo({ left: center, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToActiveItem();
  }, []);

  const detectCenterItem = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollCenter = container.scrollLeft + container.offsetWidth / 2;
    const index = Math.round(scrollCenter / fullItemWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const middleIndex = itensGaleria.length;
    if (
      activeIndex < itensGaleria.length ||
      activeIndex >= itensGaleria.length * 2
    ) {
      const newIndex = middleIndex + (activeIndex % itensGaleria.length);
      setActiveIndex(newIndex);

      const newScroll =
        fullItemWidth * newIndex - container.offsetWidth / 2 + fullItemWidth / 2;
      container.scrollLeft = newScroll;
    }
  }, [activeIndex]);

  // === Mouse Events ===
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!isDragging.current || !container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    detectCenterItem();
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      detectCenterItem();
    }
  };

  // === Touch Events ===
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.touches[0].pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!isDragging.current || !container) return;

    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    detectCenterItem();
  };

  return (
    <div className="w-full relative max-w-4xl mx-auto text-center select-none">
      <div
        className="flex gap-4 scrollbar-hide px-4 cursor-grab overflow-hidden"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-red-500 opacity-50 z-10 pointer-events-none transform -translate-x-1/2"></div>

        {duplicatedItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={`${item.id}-${index}`}
              className={`transition-all duration-300 min-w-[20rem] h-80 flex flex-col items-center justify-center text-center px-4 py-2 rounded-full p-5 border border-red-500 border-solid ${
                isActive
                  ? "bg-blue-200 scale-100 shadow-xl"
                  : "bg-gray-200 scale-90 opacity-60"
              }`}
            >
              <h3 className="font-bold text-lg">{item.titulo}</h3>
              {isActive && (
                <p className="text-sm text-gray-700 mt-2">{item.descricao}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
