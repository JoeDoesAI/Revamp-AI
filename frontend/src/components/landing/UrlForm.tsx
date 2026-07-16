import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UrlForm() {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          placeholder="https://yourwebsite.com"
          className="h-14 rounded-xl border-input bg-background text-foreground placeholder:text-muted-foreground"
        />

        <Button
          size="lg"
          className="ring h-14 rounded-xl px-8"
        >
          Get Report
        </Button>
      </div>
    </div>
  );
}