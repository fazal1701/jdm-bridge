"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Languages, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AuctionSheetViewerProps {
  originalSheet: {
    url: string;
    alt: string;
  };
  translatedSheet?: {
    url: string;
    alt: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function AuctionSheetViewer({
  originalSheet,
  translatedSheet,
  isOpen,
  onClose,
}: AuctionSheetViewerProps) {
  const [activeTab, setActiveTab] = useState<"original" | "translated">("original");

  if (!isOpen) return null;

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

            <Card className="max-w-5xl w-full max-h-[90vh] overflow-hidden bg-white">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6" />
                      <h2 className="text-2xl font-black">Auction Sheet</h2>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href =
                          activeTab === "original"
                            ? originalSheet.url
                            : translatedSheet?.url || originalSheet.url;
                        link.download = "auction-sheet.pdf";
                        link.click();
                      }}
                      className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Tabs */}
                {translatedSheet && (
                  <div className="flex border-b border-gray-200 bg-gray-50">
                    <button
                      onClick={() => setActiveTab("original")}
                      className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                        activeTab === "original"
                          ? "bg-white text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Languages className="w-4 h-4" />
                        Original (Japanese)
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab("translated")}
                      className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                        activeTab === "translated"
                          ? "bg-white text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Languages className="w-4 h-4" />
                        Translated (English)
                      </div>
                    </button>
                  </div>
                )}

                {/* Sheet Image */}
                <div className="relative w-full h-[70vh] bg-gray-100 overflow-auto">
                  <img
                    src={
                      activeTab === "original"
                        ? originalSheet.url
                        : translatedSheet?.url || originalSheet.url
                    }
                    alt={
                      activeTab === "original"
                        ? originalSheet.alt
                        : translatedSheet?.alt || originalSheet.alt
                    }
                    className="w-full h-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

