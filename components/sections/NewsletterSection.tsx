"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Beehiiv API
    setEmail("");
  };

  return (
    <section className="py-24 bg-black/50">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Stay Ahead of the <span className="text-yellow-400">Game!</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive deals, latest updates, and premium tool insights.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary/50"
              required
            />
            <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}