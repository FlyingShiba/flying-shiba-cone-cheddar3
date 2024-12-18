'use client'

import { useEffect } from 'react'

export default function CheddarDroplet() {
  useEffect(() => {
    function createCheddarDroplet(x: number, y: number) {
      const droplet = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const size = Math.random() * 20 + 10;
      
      droplet.setAttribute("class", "cheddar-droplet");
      droplet.setAttribute("width", size.toString());
      droplet.setAttribute("height", size.toString());
      droplet.setAttribute("viewBox", "0 0 100 100");
      droplet.style.position = "fixed";
      droplet.style.left = `${x}px`;
      droplet.style.top = `${y}px`;
      droplet.style.zIndex = "9998";
      
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M50 0 C20 40 0 70 0 85 C0 95 20 100 50 100 C80 100 100 95 100 85 C100 70 80 40 50 0");
      path.setAttribute("fill", "#FFA500");
      
      droplet.appendChild(path);
      document.body.appendChild(droplet);
      
      setTimeout(() => {
        droplet.remove();
      }, 2000);
    }

    function handleMouseMove(e: MouseEvent) {
      if (Math.random() < 0.1) {
        createCheddarDroplet(e.clientX, e.clientY);
      }
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  return null
}

