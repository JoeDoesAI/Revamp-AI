"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { analyzeWebsite } from "@/lib/revamp";

import { useState } from 'react'; 

export default function UrlForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
        setLoading(true);

        const report = await analyzeWebsite(url);

        console.log(report);

    } catch (error) {
        console.log(error)
        // console.error(error);
    } finally {
        setLoading(false);
    }
  };


  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://yourwebsite.com"
          className="h-14 rounded-xl border-input bg-background text-foreground placeholder:text-muted-foreground"
        />

        <Button
          onClick={handleSubmit}
          size="lg"
          className="ring h-14 rounded-xl px-8"
        >
          {loading ? "Generating..." : "Get Report"}
        </Button>
      </div>
    </div>
  );
}