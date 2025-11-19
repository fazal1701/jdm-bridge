"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  FileCheck,
  Receipt,
  Shield,
  Package,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Document {
  id: string;
  name: string;
  type: "auction-sheet" | "export-certificate" | "customs-papers" | "service-history" | "insurance" | "shipping-docs";
  url: string;
  size: string;
  uploadedAt: string;
  status: "available" | "pending" | "processing";
}

interface DocumentCenterProps {
  vehicleId: string;
  documents: Document[];
}

const documentTypes = {
  "auction-sheet": { icon: FileText, label: "Auction Sheet", color: "blue" },
  "export-certificate": { icon: FileCheck, label: "Export Certificate", color: "green" },
  "customs-papers": { icon: Receipt, label: "Customs Papers", color: "purple" },
  "service-history": { icon: Calendar, label: "Service History", color: "orange" },
  "insurance": { icon: Shield, label: "Insurance", color: "red" },
  "shipping-docs": { icon: Package, label: "Shipping Documents", color: "teal" },
};

export function DocumentCenter({ documents }: DocumentCenterProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredDocuments = selectedType
    ? documents.filter((doc) => doc.type === selectedType)
    : documents;

  const handleDownload = (doc: Document) => {
    const link = document.createElement("a");
    link.href = doc.url;
    link.download = doc.name;
    link.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">Document Center</h2>
          <p className="text-gray-600">Download all vehicle documentation</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download All
        </Button>
      </div>

      {/* Type Filters */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedType === null ? "default" : "outline"}
          onClick={() => setSelectedType(null)}
          size="sm"
          className={selectedType === null ? "bg-blue-600" : ""}
        >
          All Documents
        </Button>
        {Object.entries(documentTypes).map(([type, info]) => {
          const Icon = info.icon;
          const count = documents.filter((d) => d.type === type).length;
          return (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(selectedType === type ? null : type)}
              size="sm"
              className={selectedType === type ? "bg-blue-600" : ""}
            >
              <Icon className="w-4 h-4 mr-2" />
              {info.label} ({count})
            </Button>
          );
        })}
      </div>

      {/* Documents Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocuments.map((doc, index) => {
          const typeInfo = documentTypes[doc.type];
          const Icon = typeInfo.icon;
          return (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${typeInfo.color}-100 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${typeInfo.color}-600`} />
                    </div>
                    <Badge
                      variant={
                        doc.status === "available"
                          ? "default"
                          : doc.status === "pending"
                          ? "outline"
                          : "secondary"
                      }
                      className={
                        doc.status === "available"
                          ? "bg-green-600"
                          : doc.status === "pending"
                          ? "border-yellow-500 text-yellow-700"
                          : ""
                      }
                    >
                      {doc.status}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{doc.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{doc.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(doc.uploadedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleDownload(doc)}
                    disabled={doc.status !== "available"}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No documents available</p>
        </div>
      )}
    </div>
  );
}

