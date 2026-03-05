"use client"

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import HomeDesign01 from "@/components/home-design01";
import HomeDesign02 from "@/components/home-design02";
import HomeDesign03 from "@/components/home-design03";
import HomeDesign04 from "@/components/home-design04";

export default function Home() {
  const [selectedDesign, setSelectedDesign] = useState("01");

  const designs = [
    { id: "01", name: "Design 01", component: HomeDesign01 },
    { id: "02", name: "Design 02", component: HomeDesign02 },
    { id: "03", name: "Design 03", component: HomeDesign03 },
    { id: "04", name: "Design 04", component: HomeDesign04 }
  ];

  const SelectedComponent = designs.find((d) => d.id === selectedDesign)?.component || HomeDesign01;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toggle Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                B
              </div>
              <span className="font-semibold text-lg text-gray-900">Burdens Home Designs</span>
            </div>
            
            <ToggleGroup type="single" value={selectedDesign} onValueChange={setSelectedDesign}>
              {designs.map((design) => (
                <ToggleGroupItem 
                  key={design.id}
                  value={design.id}
                  aria-label={design.name}
                  className="font-medium"
                >
                  {design.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
      </div>

      {/* Selected Design */}
      <div className="w-full">
        <SelectedComponent />
      </div>
    </div>
  )
}
