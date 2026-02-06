"use client";

import SectionFormFields from "@/components/dashboard/sections/sectionFormFields";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Section {
  id: string;
  name: string;
  description: string;
  sourceCount: number;
  source_ids?: string[];
  tone: Tone;
  scopeLabel: string;
  allowed_topics?: string;
  blocked_topics?: string;
  status: SectionStatus;
}

interface KnowledgeSource {
  id: string;
  name: string;
  type: string;
  status: string;
}

const INITIAL_FORM_DATA: SectionFormData = {
  name: "",
  description: "",
  tone: "neutral",
  allowedTopics: "",
  blockedTopics: "",
  fallbackBehavior: "escalate",
};

const Page = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [knowledgeSources, setKnowledgeSources] = useState<KnowledgeSource[]>(
    [],
  );
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [isLoadingSources, setIsLoadingSources] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoadingSections, setIsLoadingSections] = useState(true);
  const [formData, setFormData] = useState<SectionFormData>(INITIAL_FORM_DATA);

  useEffect(() => {
    const fetchKnowledgeSources = async () => {
      try {
        const res = await fetch("/api/knowledge/fetch");
        const data = await res.json();
        setKnowledgeSources(data.sources || []);
      } catch (error) {
        console.error("Failed to fetch knowledge sources:", error);
      } finally {
        setIsLoadingSources(false);
      }
    };

    fetchKnowledgeSources();
  }, []);

  const handleCreateSection = async () => {
    setSelectedSection({
      id: "new",
      name: "",
      description: "",
      sourceCount: 0,
      tone: "neutral",
      scopeLabel: "",
      status: "draft",
    });

    setSelectedSources([]);
    setFormData(INITIAL_FORM_DATA);
    setIsSheetOpen(true);
  };

  const isPreviewMode = selectedSection?.id !== "new";

  const handleSaveSection = async () => {};

  const handleDeleteSection = async () => {};

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Sections</h1>
          <p className="text-zinc-400 mt-1">
            Define behavior and tone for different topics.
          </p>
        </div>

        <Button
          onClick={handleCreateSection}
          className="bg-white text-black hover:bg-zinc-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Section
        </Button>
      </div>

      <Card className="border-white/5 bg-[#0A0A0E]">
        <CardContent className="p-0" />
      </Card>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-lg border-l border-white/10 bg-[#0A0A0E] p-0 shadow-2xl flex flex-col h-full">
          {selectedSection && (
            <>
              <SheetHeader className="p-6 border-b border-white/5">
                <SheetTitle className="text-xl text-white font-normal">
                  {selectedSection?.id === "new"
                    ? "Create Section"
                    : "View Section"}
                </SheetTitle>

                <SheetDescription className="text-zinc-500 text-xs">
                  {selectedSection?.id === "new"
                    ? "Configure how the AI behaves for this specific topic."
                    : "Review section configuration and data sources."}
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 items-center overflow-y-auto px-6  py-0 space-y-8">
                <SectionFormFields
                  formData={formData}
                  setFormData={setFormData}
                  selectedSources={selectedSources}
                  setSelectedSources={setSelectedSources}
                  knowledgeSources={knowledgeSources}
                  isLoadingSources={isLoadingSources}
                  isDisabled={isPreviewMode}
                />
              </div>
              {selectedSection.id === "new" && (
                <div className="p-6 border-t border-white/5">
                  <Button
                    className="w-full bg-white text-black hover:bg-zinc-200"
                    onClick={handleSaveSection}
                    disabled={isSaving}
                  >
                    {isSaving ? "Creating..." : "Create Section"}
                  </Button>
                </div>
              )}

              {selectedSection.id !== "new" && (
                <div className="p-6 bg-red-500/5 border-t border-red-500/10">
                  <h5 className="text-sm font-medium text-red-400 mb-1">
                    Danger Zone
                  </h5>
                  <p className="text-xs text-red-500/70 mb-3">
                    Deleting this section will remove all associated routing
                    rules.
                  </p>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="w-full bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 shadow-none"
                    onClick={handleDeleteSection}
                    disabled={isSaving}
                  >
                    {isSaving ? "Deleting..." : "Delete Section"}
                  </Button>
                </div>
              )}
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Page;
