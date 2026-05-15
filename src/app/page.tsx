'use client';
import Nav from '@/components/Nav';
import HeroSection from '@/components/sections/HeroSection';
import OverviewSection from '@/components/sections/OverviewSection';
import GameplaySection from '@/components/sections/GameplaySection';
import AiDialogueSection from '@/components/sections/AiDialogueSection';
import RelationshipSection from '@/components/sections/RelationshipSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import TechnologySection from '@/components/sections/TechnologySection';
import TestingSection from '@/components/sections/TestingSection';
import TeamSection from '@/components/sections/TeamSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Nav />
      <HeroSection />
      <OverviewSection />
      <GameplaySection />
      <AiDialogueSection />
      <RelationshipSection />
      <ArchitectureSection />
      <TechnologySection />
      <TestingSection />
      <TeamSection />
      <FooterSection />
    </main>
  );
}
