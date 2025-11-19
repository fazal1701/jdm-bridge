"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, RotateCw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Vehicle360ViewerProps {
  images: Array<{ id: string; url: string; alt: string }>;
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number;
}

export function Vehicle360Viewer({
  images,
  isOpen,
  onClose,
  initialImageIndex = 0,
}: Vehicle360ViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Generate 360 sequence if we have multiple images
  const totalFrames = images.length;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialImageIndex);
      setZoom(1);
    }
  }, [isOpen, initialImageIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const sensitivity = 2; // Adjust for sensitivity
    const frameChange = Math.round(deltaX / sensitivity);
    const newIndex = (currentIndex + frameChange + totalFrames) % totalFrames;
    setCurrentIndex(newIndex);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 2;
    const frameChange = Math.round(deltaX / sensitivity);
    const newIndex = (currentIndex + frameChange + totalFrames) % totalFrames;
    setCurrentIndex(newIndex);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1;
    const newIndex = (currentIndex + delta + totalFrames) % totalFrames;
    setCurrentIndex(newIndex);
  };

  const rotateLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + totalFrames) % totalFrames);
  };

  const rotateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % totalFrames);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 1));
  };

  const toggleFullscreen = () => {
    if (!isFullscreen && containerRef.current) {
      containerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Controls */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomOut}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomIn}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Image Container */}
            <div
              ref={imageRef}
              className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: zoom }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentImage.url}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  priority
                  quality={90}
                />
              </motion.div>

              {/* Rotation Indicator */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="flex items-center gap-4 text-white text-sm">
                  <button
                    onClick={rotateLeft}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  <span className="font-semibold">
                    {currentIndex + 1} / {totalFrames}
                  </span>
                  <button
                    onClick={rotateRight}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <RotateCw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
                <p>Drag, swipe, or scroll to rotate • Click outside to close</p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto px-4 pb-2">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      idx === currentIndex
                        ? "border-blue-500 scale-110"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

