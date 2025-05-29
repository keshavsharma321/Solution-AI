import React, { useEffect, useRef } from 'react';

interface IoTAnimationProps {
  className?: string;
}

const IoTAnimation: React.FC<IoTAnimationProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setDimensions();
    window.addEventListener('resize', setDimensions);
    
    // Define nodes and connections
    const numberOfNodes = 15;
    const nodes: { x: number; y: number; size: number; speed: number; direction: number }[] = [];
    
    // Initialize nodes
    for (let i = 0; i < numberOfNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 2,
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() * Math.PI * 2,
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(149, 97, 226, ${(1 - distance / 150) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      // Draw and update nodes
      nodes.forEach(node => {
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = '#8046E5';
        ctx.fill();
        
        // Pulse effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(149, 97, 226, 0.3)';
        ctx.stroke();
        
        // Move node
        node.x += Math.cos(node.direction) * node.speed;
        node.y += Math.sin(node.direction) * node.speed;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) {
          node.direction = Math.PI - node.direction;
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.direction = -node.direction;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, []);
  
  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
};

export default IoTAnimation;