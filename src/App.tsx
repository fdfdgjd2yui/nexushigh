import React, { useState, useEffect } from 'react';
import heroImg from './assets/images/hero_nexus_campus_1791524078585.jpg';
import parallaxImg from './assets/images/parallax_nexus_students_1791524089302.jpg';
import curriculumImg from './assets/images/curriculum_students_laptop_1791535653402.jpg';
import labImg from './assets/images/slideshow_science_lab_1791537875458.jpg';
import libraryImg from './assets/images/slideshow_library_students_1791537866279.jpg';
import sportsImg from './assets/images/slideshow_sports_pitch_1791537886322.jpg';
import FullAboutPage from './FullAboutPage';
import ConstellationBackground from './ConstellationBackground';
import { 
  Home as HomeIcon,
  GraduationCap, 
  FlaskConical, 
  Trophy, 
  Building2, 
  Check, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  UserCheck,
  Send,
  BookOpen
} from 'lucide-react';

interface PillarItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDesc: string;
}

const PILLARS: PillarItem[] = [
  {
    id: 'academic',
    icon: <GraduationCap className="w-8 h-8" strokeWidth={2.2} />,
    title: 'Academic Excellence',
    description: 'The objective of Academic Excellence is to provide comprehensive O & A-Level training that guarantees outstanding UNEB performance and university admission.',
    fullDesc: 'Nexus High School upholds an uncompromising standard of scholarship. Our academic departments emphasize critical reasoning, scientific method, and deep mastery of both arts and sciences, mentored by senior national examiners.'
  },
  {
    id: 'labs',
    icon: <FlaskConical className="w-8 h-8" strokeWidth={2.2} />,
    title: 'Modern Laboratories',
    description: 'The objective of our modern laboratories is to offer practical STEM training and computer literacy relevant to today’s technological and scientific landscape.',
    fullDesc: 'Practical experimentation is central to the Nexus pedagogy. Our laboratories are equipped with modern apparatus, digital microscopes, interactive terminals, and dedicated ICT facilities.'
  },
  {
    id: 'sports',
    icon: <Trophy className="w-8 h-8" strokeWidth={2.2} />,
    title: 'Sports & Talents',
    description: 'The objective of Sports & Talents is to nurture holistic student capabilities through competitive football, basketball, music, drama, and national debate guilds.',
    fullDesc: 'We develop balanced scholars whose character is forged both in the classroom and on the sports pitch. Our teams regularly compete and medal at district and national secondary school championships in Uganda.'
  },
  {
    id: 'boarding',
    icon: <Building2 className="w-8 h-8" strokeWidth={2.2} />,
    title: 'Boarding Facilities',
    description: 'The objective of Boarding Facilities is to deliver safe, modern, and hygienic hostel accommodations with 24/7 infirmary care and pastoral mentorship.',
    fullDesc: 'Our boarding campus provides a tranquil, protected sanctuary where students form lifelong bonds of camaraderie and discipline with round-the-clock professional security and nutritious dining.'
  }
];

// 6 Slideshow Images for the full-bleed About Section background
const ABOUT_SLIDES = [
  heroImg,
  labImg,
  libraryImg,
  sportsImg,
  parallaxImg,
  curriculumImg
];

export default function App() {
  const [selectedPillar, setSelectedPillar] = useState<PillarItem | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [isTransitioningToMain, setIsTransitioningToMain] = useState(false);
  const [transitionCountdown, setTransitionCountdown] = useState(5);

  // 5-second transition delay from About page back to Main landing page
  useEffect(() => {
    if (!isTransitioningToMain) return;

    const timer = setInterval(() => {
      setTransitionCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTransitioningToMain(false);
          setShowFullAbout(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTransitioningToMain]);

  const triggerTransitionToMain = () => {
    setIsTransitioningToMain(true);
    setTransitionCountdown(5);
  };

  const skipTransition = () => {
    setIsTransitioningToMain(false);
    setShowFullAbout(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  // About 6-image continuous loop background slideshow state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Application Form State
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    entryClass: 'Senior One (S.1)',
    currentSchool: ''
  });

  // Contact Inquiry Form State
  const [inquiryData, setInquiryData] = useState({
    name: '',
    contact: '',
    subject: 'Admissions Inquiry',
    message: ''
  });

  // Continuous auto loop for the 6-image slideshow in the background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % ABOUT_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryData({
        name: '',
        contact: '',
        subject: 'Admissions Inquiry',
        message: ''
      });
    }, 3500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#1a1a1a]">
      {/* 5-SECOND TRANSITION OVERLAY FROM ABOUT TO MAIN PAGE */}
      {isTransitioningToMain && (
        <div 
          className="fixed inset-0 z-50 bg-[#020408]/95 backdrop-blur-md flex items-center justify-center p-6 text-white text-center"
          role="status"
          aria-live="polite"
        >
          <div className="max-w-md w-full border-2 border-white/60 bg-black/85 p-8 shadow-[8px_8px_0_#7a0c0c] space-y-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#f87171] bg-[#7a0c0c]/40 flex items-center justify-center mx-auto text-2xl font-black font-mono text-white animate-pulse shadow-lg">
              {transitionCountdown}
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-200 block">
                Transitioning to Campus Overview
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Returning to Main Website
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Returning from institutional profile in {transitionCountdown} {transitionCountdown === 1 ? 'second' : 'seconds'}...
              </p>
            </div>

            {/* Visual 5-second progress indicator bar */}
            <div className="w-full bg-white/15 h-2 border border-white/30 overflow-hidden">
              <div 
                className="bg-[#7a0c0c] h-full transition-all duration-1000 ease-linear"
                style={{ width: `${((5 - transitionCountdown + 1) / 5) * 100}%` }}
              />
            </div>

            <div className="pt-2">
              <button
                onClick={skipTransition}
                className="text-xs text-white/80 hover:text-white underline underline-offset-4 font-mono uppercase tracking-wider cursor-pointer"
              >
                Skip wait & return immediately &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {showFullAbout ? (
        <FullAboutPage 
          onBack={triggerTransitionToMain}
          onApply={() => setIsApplyModalOpen(true)}
        />
      ) : (
        <>
          {/* =========================================================================
              TOP NAVIGATION BAR (STICKY WITH HOME ICON)
              ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-xs border-b-2 border-[#1a1a1a]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
          {/* Brand & Home Icon */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="p-2 border-2 border-[#1a1a1a] bg-white text-[#7a0c0c] hover:bg-[#7a0c0c] hover:text-white transition-colors cursor-pointer"
              title="Return to Home Screen"
              aria-label="Home"
            >
              <HomeIcon className="w-5 h-5" />
            </button>

            <a href="#hero" className="flex flex-col text-decoration-none">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#1a1a1a] uppercase whitespace-nowrap">
                Nexus High School
              </span>
              <span className="text-[10px] font-bold text-[#7a0c0c] tracking-widest uppercase">
                Bushenyi, Uganda
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#1a1a1a]">
            <a href="#hero" className="hover:text-[#7a0c0c] transition-colors whitespace-nowrap">Home</a>
            <a href="#services" className="hover:text-[#7a0c0c] transition-colors whitespace-nowrap">Our Pillars</a>
            <a href="#curriculum" className="hover:text-[#7a0c0c] transition-colors whitespace-nowrap">Curriculum</a>
            <a href="#headteacher" className="hover:text-[#7a0c0c] transition-colors whitespace-nowrap">Headteacher's Speech</a>
            <a href="#news" className="hover:text-[#7a0c0c] transition-colors whitespace-nowrap">News & Events</a>
            <a href="#about" className="hover:text-[#7a0c0c] transition-colors whitespace-nowrap">About Us</a>
            <a href="#contact" className="hover:text-[#7a0c0c] transition-colors whitespace-nowrap">Contact</a>
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="brutalist-btn-primary text-xs font-bold py-2 px-5 whitespace-nowrap cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          RELATIVE SCROLLING <main> WITH z-index: 2, OPAQUE WARM-WHITE BACKGROUND,
          AND MARGIN-BOTTOM EQUAL TO FOOTER HEIGHT (CSS-ONLY FOOTER REVEAL SYSTEM)
          ========================================================================= */}
      <main className="reveal-main-container">
        {/* =========================================================================
            SECTION 1: THE TOP SPLIT HERO (White Palette Theme)
            ========================================================================= */}
        <section id="hero" className="hero-split-container">
          <div className="hero-content-col">
            <div className="space-y-6">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-[#1a1a1a] leading-[1.12] tracking-tight">
                Nexus High School, <span className="text-[#7a0c0c]">Bushenyi</span>
              </h1>

              <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl">
                Situated in the lush rolling hills of Bushenyi, Nexus High School delivers an elite secondary education curriculum with state-of-the-art STEM laboratories, comprehensive boarding amenities, and an enduring heritage of top national UNEB performance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="brutalist-btn-primary"
                >
                  Apply Now
                </button>
                <a
                  href="#services"
                  className="brutalist-btn-secondary"
                >
                  Explore Pillars
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Image Container with Horizontal Gradient Mask */}
          <div className="hero-image-col">
            <div className="gradient-overlay" aria-hidden="true"></div>
            <img
              src={heroImg}
              alt="Nexus High School Bushenyi students walking on campus grounds"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTEGRATED PARALLAX SERVICES MATRIX (IMAGE 5 STYLE)
            ========================================================================= */}
        <section 
          id="services" 
          className="parallax-section"
          style={{ backgroundImage: `url(${parallaxImg})` }}
        >
          <div className="parallax-overlay" aria-hidden="true"></div>

          <div className="parallax-content py-4 sm:py-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                Our Services / Pillars
              </h2>
            </div>

            <div className="pillars-horizontal-row">
              {PILLARS.map((pillar) => (
                <div 
                  key={pillar.id}
                  className={`pillar-flip-card ${activeCardId === pillar.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCardId(activeCardId === pillar.id ? null : pillar.id)}
                  tabIndex={0}
                >
                  <div className="pillar-inner">
                    {/* FRONT: Completely transparent, NO border */}
                    <div className="pillar-front">
                      <div className="pillar-circle-badge" aria-hidden="true">
                        {pillar.icon}
                      </div>
                      <h3 className="pillar-front-title">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* BACK: Deep red background, VIEW button */}
                    <div className="pillar-back">
                      <p className="pillar-back-desc">
                        {pillar.description}
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPillar(pillar);
                        }}
                        className="pillar-view-btn"
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: ACADEMIC CURRICULUM BANNER (EXACT MATCH TO IMAGE 2)
            ========================================================================= */}
        <section 
          id="curriculum" 
          className="curriculum-banner-section"
          style={{ backgroundImage: `url(${curriculumImg})` }}
        >
          <div className="curriculum-gradient-scrim" aria-hidden="true"></div>

          <div className="curriculum-content-direct">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7a0c0c] tracking-tight uppercase leading-[1.18] mb-4">
              Academic Curriculum & Science Innovation in Uganda
            </h2>

            <p className="text-[#333333] text-xs sm:text-sm md:text-[0.92rem] leading-relaxed mb-6 font-normal">
              Join scholars, researchers, policymakers, and ambitious students at Nexus High School, Bushenyi for a transformative secondary educational journey. We explore how rigorous science pedagogy, digital ICT innovation, and disciplined scholarship transform students' capabilities through practical learning, collaboration, and actionable research.
            </p>

            <div>
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="btn-register-outline cursor-pointer"
              >
                Register Now
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: HEADTEACHER'S SPEECH (MUHEREZA ELVIS)
            - Featuring animated constellation canvas background
            ========================================================================= */}
        <section id="headteacher" className="relative py-24 px-6 lg:px-12 overflow-hidden bg-[#020408]">
          {/* Animated Constellation Canvas Background */}
          <ConstellationBackground />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Blank placeholder frame for Headteacher portrait */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="w-full aspect-4/5 border-2 border-white/60 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center shadow-[6px_6px_0_#7a0c0c]">
                  <div className="w-16 h-16 rounded-full border-2 border-[#f87171] bg-white/10 flex items-center justify-center text-white mb-3 shadow-inner">
                    <UserCheck className="w-8 h-8 text-[#f87171]" />
                  </div>
                  <div className="font-heading font-bold text-base text-white">
                    Office of the Headteacher
                  </div>
                  <div className="text-[11px] text-[#f87171] uppercase font-bold tracking-wider mt-1">
                    Muhereza Elvis
                  </div>
                  <div className="text-[10px] text-white/50 mt-2 font-mono">
                    [ Official Portrait Pending ]
                  </div>
                </div>
              </div>

              {/* Right Column: Headteacher's Speech */}
              <div className="lg:col-span-8 space-y-6">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                  "Cultivating Academic Distinction, Moral Integrity & Purpose in Western Uganda"
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-white/90 leading-relaxed font-light">
                  <p>
                    "Welcome to Nexus High School, Bushenyi. Education is not merely the accumulation of examination certificates; it is the deliberate formation of intellectual independence, strong moral character, and lifelong civic responsibility."
                  </p>
                  <p>
                    "Nestled in the serene, distraction-free environment of Bushenyi Municipality, our school provides every boy and girl with a sanctuary to explore their academic potential, master STEM technologies, and refine their cultural and sporting gifts under dedicated pastoral care."
                  </p>
                  <p>
                    "As headteacher, I am proud of our faculty’s tireless commitment to top-tier UNEB achievement and value-based upbringing. We invite discerning parents and guardians across Uganda and East Africa to partner with us in shaping tomorrow's transformational leaders."
                  </p>
                </div>

                {/* Signature Block */}
                <div className="pt-5 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-heading font-black text-xl text-[#f87171]">
                      Muhereza Elvis
                    </div>
                    <div className="text-xs text-white/70">
                      Headteacher & Senior Administrator &bull; Nexus High School, Bushenyi
                    </div>
                  </div>
                  <button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#7a0c0c] hover:bg-white hover:text-[#1a1a1a] text-white border-2 border-white px-6 py-2.5 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-[4px_4px_0_#ffffff] hover:shadow-[2px_2px_0_#ffffff] self-start sm:self-auto"
                  >
                    <span>Join Our Community</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: NEWS UPDATES & EVENTS
            ========================================================================= */}
        <section id="news" className="py-20 px-6 lg:px-12 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#1a1a1a] pb-6">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
                  News Updates & Events
                </h2>
              </div>
              <p className="text-sm text-[#666666] max-w-md">
                Stay up to date with admissions deadlines, academic conferences, inter-school competitions, and termly activities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Major Featured News Notice */}
              <div className="lg:col-span-7 bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#7a0c0c] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5">
                      Admissions Notice
                    </span>
                    <span className="text-xs text-[#666666]">
                      October 2026 &bull; Bushenyi Secretariat
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4">
                    Senior 1 & Senior 5 Intake 2026/2027 Admissions Underway
                  </h3>

                  <p className="text-sm text-[#444444] leading-relaxed mb-4">
                    The admissions committee of Nexus High School, Bushenyi announces that applications for Senior 1 (PLE leavers) and Senior 5 (UCE leavers) are officially open. Interviews and document verifications are conducted daily at the main administration building.
                  </p>

                  <div className="p-3 bg-[#f8f9fa] border border-[#1a1a1a] text-xs text-[#555555] space-y-1 mb-6">
                    <div><strong>Requirements:</strong> Authentic UNEB results slip, birth certificate, and two passport photos.</div>
                    <div><strong>Interviews:</strong> Monday to Friday from 8:30 AM to 4:00 PM.</div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#7a0c0c] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                  >
                    <span>Apply for Admission</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Upcoming School Events List */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-heading font-bold text-lg text-[#1a1a1a] border-b-2 border-[#1a1a1a] pb-2">
                  Upcoming Term Events
                </h3>

                <div className="bg-white border-2 border-[#1a1a1a] p-4 flex gap-4 items-start shadow-[3px_3px_0_#1a1a1a]">
                  <div className="bg-[#1a1a1a] text-white p-2.5 text-center shrink-0 min-w-[56px]">
                    <div className="text-xs uppercase font-bold">OCT</div>
                    <div className="text-lg font-black text-[#ffffff]">24</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#7a0c0c] uppercase">Academic Clinic</div>
                    <h4 className="font-heading font-bold text-sm text-[#1a1a1a]">Parents & Teachers Consultative Forum</h4>
                    <p className="text-xs text-[#666666] mt-0.5">Comprehensive review of student performance and mid-term assessments.</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#1a1a1a] p-4 flex gap-4 items-start shadow-[3px_3px_0_#1a1a1a]">
                  <div className="bg-[#7a0c0c] text-white p-2.5 text-center shrink-0 min-w-[56px]">
                    <div className="text-xs uppercase font-bold">NOV</div>
                    <div className="text-lg font-black text-white">12</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#7a0c0c] uppercase">STEM Innovation</div>
                    <h4 className="font-heading font-bold text-sm text-[#1a1a1a]">Annual Science & Robotics Project Fair</h4>
                    <p className="text-xs text-[#666666] mt-0.5">Practical student exhibitions across Physics, Chemistry, Biology, and ICT coding.</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#1a1a1a] p-4 flex gap-4 items-start shadow-[3px_3px_0_#1a1a1a]">
                  <div className="bg-[#1a1a1a] text-white p-2.5 text-center shrink-0 min-w-[56px]">
                    <div className="text-xs uppercase font-bold">DEC</div>
                    <div className="text-lg font-black text-[#ffffff]">04</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#7a0c0c] uppercase">Sports & Culture</div>
                    <h4 className="font-heading font-bold text-sm text-[#1a1a1a]">Inter-House Sports Gala & Music Festival</h4>
                    <p className="text-xs text-[#666666] mt-0.5">Track athletics, championship football finals, brass band, and traditional dance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: ABOUT US SECTION - SLIDESHOW IS THE BACKGROUND HERE!
            ========================================================================= */}
        <section id="about" className="about-slideshow-section">
          {/* Full-bleed background slideshow cross-fading continuously */}
          {ABOUT_SLIDES.map((slideImg, index) => (
            <div
              key={index}
              className="about-slide-bg"
              style={{
                backgroundImage: `url(${slideImg})`,
                opacity: index === currentSlideIndex ? 1 : 0
              }}
              aria-hidden="true"
            />
          ))}

          {/* Dark Scrim overlay */}
          <div className="about-dark-scrim" aria-hidden="true" />

          {/* Content directly on top of the image (NO white boxes) - info on left, button on right */}
          <div className="about-content-wrapper px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl text-left space-y-6">
              {/* Big bold ABOUT title */}
              <h2 className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase drop-shadow-lg leading-none">
                ABOUT
              </h2>

              {/* Summarised lead text directly on the image - no white boxes */}
              <p className="text-white/95 text-base sm:text-lg lg:text-xl font-normal leading-relaxed drop-shadow-md">
                Founded on scholastic rigor and Christian moral integrity, Nexus High School is Western Uganda's premier secondary institution combining first-class science infrastructure with personalized mentorship to empower the total student.
              </p>

              {/* Summarised key highlights directly on the image - no white boxes */}
              <div className="space-y-4 pt-1">
                {/* Highlight 1: Accredited UNEB Centre */}
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 bg-[#7a0c0c] text-white flex items-center justify-center shrink-0 mt-0.5 border border-white/30 shadow-xs">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white drop-shadow-xs">
                      Accredited UNEB Centre
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed drop-shadow-xs">
                      Full examination center status for UCE and UACE national examinations.
                    </p>
                  </div>
                </div>

                {/* Highlight 2: Modern STEM Infrastructure */}
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 bg-[#7a0c0c] text-white flex items-center justify-center shrink-0 mt-0.5 border border-white/30 shadow-xs">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white drop-shadow-xs">
                      Modern STEM Infrastructure
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed drop-shadow-xs">
                      Dedicated Physics, Chemistry, Biology, and ICT computer laboratories.
                    </p>
                  </div>
                </div>

                {/* Highlight 3: Holistic Co-Curriculars */}
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 bg-[#7a0c0c] text-white flex items-center justify-center shrink-0 mt-0.5 border border-white/30 shadow-xs">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white drop-shadow-xs">
                      Holistic Co-Curriculars
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed drop-shadow-xs">
                      Championship athletics, vibrant debate society, choir, and brass band.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Button: Clean 'Learn More' Button */}
            <div className="shrink-0 flex items-center pt-4 lg:pt-0">
              <button
                onClick={() => {
                  setShowFullAbout(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#7a0c0c] hover:bg-[#1a1a1a] text-white font-heading font-bold text-sm tracking-wider uppercase border-2 border-white shadow-[6px_6px_0_#ffffff] hover:shadow-[3px_3px_0_#ffffff] transition-all cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: INTRODUCTION & CONTACT SECTION INSIDE SCROLLING <main>
            - Two-column contact layout on desktop, single-column layout on mobile
            - Preserves all institutional contacts without alteration
            ========================================================================= */}
        <section id="contact" className="py-20 px-6 lg:px-12 bg-[#ffffff]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
                Campus Location & Inquiries
              </h2>
              <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-2 leading-relaxed">
                Situated in the scenic landscape of Bushenyi Municipality, Nexus High School welcomes parents, guardians, and visitors. Reach out directly to our admissions secretariat.
              </p>
            </div>

            {/* Two-Column Contact Layout on Desktop, Single-Column on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Column 1: Institutional Contact Details & Hours */}
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#7a0c0c] text-white flex items-center justify-center shrink-0 border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#7a0c0c]">Campus Address</div>
                      <div className="text-sm font-semibold text-[#1a1a1a] mt-0.5">
                        Plot 14 Nexus Avenue, Bushenyi Municipality
                      </div>
                      <div className="text-xs text-[#666666]">
                        Greater Bushenyi District, Western Uganda &bull; Accessible via Mbarara-Kasese Highway
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#7a0c0c] text-white flex items-center justify-center shrink-0 border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#7a0c0c]">Telephone Hotlines</div>
                      <div className="text-sm font-semibold text-[#1a1a1a] mt-0.5">
                        +256 (0) 772 123 456 &bull; +256 (0) 701 987 654
                      </div>
                      <div className="text-xs text-[#666666]">
                        Direct lines to Headteacher & Admissions Desk
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#7a0c0c] text-white flex items-center justify-center shrink-0 border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#7a0c0c]">Official Email Inquiries</div>
                      <div className="text-sm font-semibold text-[#1a1a1a] mt-0.5">
                        admissions@nexushigh.ac.ug
                      </div>
                      <div className="text-xs text-[#666666]">
                        registry@nexushigh.ac.ug
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visitation Schedule Box */}
                <div className="border-2 border-[#1a1a1a] bg-[#f8f9fa] p-6 shadow-[4px_4px_0_#1a1a1a]">
                  <div className="flex items-center gap-2 mb-3 border-b-2 border-[#1a1a1a] pb-2">
                    <Clock className="w-4 h-4 text-[#7a0c0c]" />
                    <span className="font-heading font-bold text-sm text-[#1a1a1a]">Administrative Office Hours</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-gray-200 pb-1.5">
                      <span className="font-semibold text-[#1a1a1a]">Monday – Friday</span>
                      <span className="text-[#666666]">8:00 AM – 5:00 PM (EAT)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1.5">
                      <span className="font-semibold text-[#1a1a1a]">Saturday (Admissions Only)</span>
                      <span className="text-[#666666]">9:00 AM – 2:00 PM (EAT)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#1a1a1a]">Sunday</span>
                      <span className="text-[#7a0c0c] font-bold">Closed (Chapel & Student Rest)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Interactive Inquiries & Campus Tour Booking Form */}
              <div className="lg:col-span-6">
                <div className="border-2 border-[#1a1a1a] bg-[#ffffff] p-6 sm:p-8 shadow-[6px_6px_0_#1a1a1a]">
                  <h3 className="font-heading font-bold text-xl text-[#1a1a1a] mb-1">
                    Send an Inquiry or Schedule a Visit
                  </h3>
                  <p className="text-xs text-[#666666] mb-5">
                    Our administrative team will respond to your inquiry within 24 business hours.
                  </p>

                  {inquirySubmitted ? (
                    <div className="py-8 text-center space-y-3">
                      <div className="w-12 h-12 bg-[#7a0c0c] text-white flex items-center justify-center mx-auto border-2 border-[#1a1a1a]">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-heading font-bold text-lg text-[#1a1a1a]">Inquiry Message Sent</h4>
                      <p className="text-xs text-[#666666] max-w-xs mx-auto">
                        Thank you for contacting Nexus High School, Bushenyi. Our admissions officer has received your note.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Grace Katushabe"
                          value={inquiryData.name}
                          onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                          className="w-full p-2.5 text-sm bg-white border-2 border-[#1a1a1a] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1">
                          Contact Phone / Email *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="+256 700 000 000 or email@domain.com"
                          value={inquiryData.contact}
                          onChange={(e) => setInquiryData({ ...inquiryData, contact: e.target.value })}
                          className="w-full p-2.5 text-sm bg-white border-2 border-[#1a1a1a] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1">
                          Inquiry Purpose
                        </label>
                        <select
                          value={inquiryData.subject}
                          onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                          className="w-full p-2.5 text-sm bg-white border-2 border-[#1a1a1a] focus:outline-none"
                        >
                          <option>Senior 1 Intake Inquiry</option>
                          <option>Senior 5 Intake Inquiry</option>
                          <option>Campus Tour & Visitation Booking</option>
                          <option>Fee Structure & Circular Request</option>
                          <option>General Administration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1">
                          Message Note *
                        </label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Please specify any particular questions regarding academics, boarding, or transport..."
                          value={inquiryData.message}
                          onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                          className="w-full p-2.5 text-sm bg-white border-2 border-[#1a1a1a] focus:outline-none"
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full brutalist-btn-primary py-3 text-xs flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Campus Inquiry</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          DARK <footer> SIBLING OF <main>, FIXED TO THE BOTTOM (z-index: 1)
          - Layered CSS-only reveal without JavaScript scroll handling
          - Oversized business name "NEXUS HIGH" at the bottom of the footer
          - Supporting location and copyright text at the top
          ========================================================================= */}
      <footer className="reveal-footer-fixed px-6 lg:px-12 pt-7 pb-0">
        {/* Top: Supporting Location, Contact & Copyright Text */}
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/80 border-b border-white/15 pb-4">
          <div>
            <span className="font-bold text-white uppercase tracking-wider block sm:inline mr-2">
              Plot 14 Nexus Avenue, Bushenyi Municipality, Western Uganda
            </span>
            <span className="text-white/60">
              Registered UNEB Center No. U3284
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-white/70">
            <span>+256 (0) 772 123 456</span>
            <span>admissions@nexushigh.ac.ug</span>
            <span className="text-white/50">&copy; {new Date().getFullYear()} Nexus High School</span>
          </div>
        </div>

        {/* Bottom: OVERSIZED BUSINESS NAME AT THE BOTTOM OF THE FOOTER */}
        <div className="w-full overflow-hidden text-center select-none pt-1">
          <div className="oversized-footer-brand">
            NEXUS HIGH
          </div>
        </div>
      </footer>
        </>
      )}

      {/* =========================================================================
          MODAL 1: PILLAR DETAILS VIEWER (Triggered by VIEW button)
          ========================================================================= */}
      {selectedPillar && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setSelectedPillar(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] max-w-lg w-full p-6 sm:p-8 space-y-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 p-1.5 border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 border-b-2 border-[#1a1a1a] pb-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#7a0c0c] bg-white text-[#7a0c0c] flex items-center justify-center">
                {selectedPillar.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a0c0c]">
                  Institutional Pillar
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                  {selectedPillar.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#333333] leading-relaxed">
              {selectedPillar.fullDesc}
            </p>

            <div className="p-3 bg-[#f8f9fa] border border-[#1a1a1a] text-xs text-[#555555]">
              {selectedPillar.description}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedPillar(null)}
                className="py-2 px-4 text-xs font-bold border-2 border-[#1a1a1a] bg-white text-[#1a1a1a] hover:bg-gray-100 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedPillar(null);
                  setIsApplyModalOpen(true);
                }}
                className="brutalist-btn-primary py-2 px-5 text-xs cursor-pointer"
              >
                Apply for Intake
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: APPLICATION FORM
          ========================================================================= */}
      {isApplyModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-xs"
          onClick={() => setIsApplyModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] max-w-md w-full p-6 sm:p-8 space-y-5 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-[#7a0c0c] text-white flex items-center justify-center mx-auto border-2 border-[#1a1a1a]">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1a1a1a]">
                  Intake Application Submitted
                </h3>
                <p className="text-xs text-[#555555] max-w-xs mx-auto leading-relaxed">
                  Thank you! The admissions secretariat for Nexus High School, Bushenyi will contact you shortly regarding <strong>{formData.studentName}</strong> ({formData.entryClass}).
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setIsApplyModalOpen(false);
                    }}
                    className="brutalist-btn-primary py-2 px-6 text-xs cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="border-b-2 border-[#1a1a1a] pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a0c0c]">
                    Nexus High School, Bushenyi
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#1a1a1a]">
                    Student Intake Form 2026/2027
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mugisha Ronald"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full p-2 text-sm bg-white border-2 border-[#1a1a1a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1">
                    Target Entry Class *
                  </label>
                  <select
                    value={formData.entryClass}
                    onChange={(e) => setFormData({ ...formData, entryClass: e.target.value })}
                    className="w-full p-2 text-sm bg-white border-2 border-[#1a1a1a] focus:outline-none"
                  >
                    <option>Senior One (S.1)</option>
                    <option>Senior Two (S.2)</option>
                    <option>Senior Three (S.3)</option>
                    <option>Senior Four (S.4)</option>
                    <option>Senior Five (S.5 - Sciences)</option>
                    <option>Senior Five (S.5 - Arts)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1">
                    Parent / Guardian Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +256 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2 text-sm bg-white border-2 border-[#1a1a1a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1">
                    Previous School Attended *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bushenyi Junior School"
                    value={formData.currentSchool}
                    onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                    className="w-full p-2 text-sm bg-white border-2 border-[#1a1a1a] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t-2 border-[#1a1a1a]">
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="py-2 px-4 text-xs font-bold border-2 border-[#1a1a1a] bg-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="brutalist-btn-primary py-2 px-5 text-xs cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
