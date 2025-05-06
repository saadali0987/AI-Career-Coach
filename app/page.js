import HeroSection from "@/components/HeroSection";
import { features } from "@/data/features";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { howItWorks } from "@/data/howitworks";
import { testimonial } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="grid-background h-full min-h-screen w-full top-0 left-0 z-[-1] fixed pointer-events-none"></div>

      <HeroSection />

      </div>
  )}