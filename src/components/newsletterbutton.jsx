import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewsletterButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full px-6 shadow-lg bg-[#5C00B3] hover:bg-[#4a0091] text-white"
      >
        <Link href="/newsletter">
          <Mail className="mr-2 h-5 w-5" />
          Newsletter
        </Link>
      </Button>
    </div>
  );
}
