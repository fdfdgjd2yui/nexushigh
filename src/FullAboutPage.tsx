import React from 'react';
import { 
  ArrowLeft, 
  Target, 
  Compass, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  FlaskConical, 
  Users, 
  Building2, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';
import heroImg from './assets/images/hero_nexus_campus_1791524078585.jpg';
import labImg from './assets/images/slideshow_science_lab_1791537875458.jpg';
import libraryImg from './assets/images/slideshow_library_students_1791537866279.jpg';

interface FullAboutPageProps {
  onBack: () => void;
  onApply: () => void;
}

export default function FullAboutPage({ onBack, onApply }: FullAboutPageProps) {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1a1a1a]">
      {/* =========================================================================
          TOP STICKY HEADER WITH RETURN BUTTON
          ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-xs border-b-2 border-[#1a1a1a]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 p-2 sm:px-3 sm:py-2 border-2 border-[#1a1a1a] bg-white text-[#7a0c0c] hover:bg-[#7a0c0c] hover:text-white transition-colors cursor-pointer font-bold text-xs uppercase"
              title="Return to Main Website"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Overview</span>
            </button>

            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#1a1a1a] uppercase whitespace-nowrap">
                Nexus High School
              </span>
              <span className="text-[10px] font-bold text-[#7a0c0c] tracking-widest uppercase">
                Institutional Profile & Charter
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onApply}
              className="brutalist-btn-primary text-xs font-bold py-2 px-5 whitespace-nowrap cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          HERO BANNER: INSTITUTIONAL HERITAGE & IDENTITY
          ========================================================================= */}
      <section className="relative bg-[#1a1a1a] text-white py-20 px-6 lg:px-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7a0c0c] text-white text-xs font-bold uppercase tracking-widest border border-white/20">
            <span>Official Institutional Profile</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            About Nexus High School, Bushenyi
          </h1>

          <p className="text-base sm:text-xl text-white/90 max-w-3xl leading-relaxed font-light">
            An accredited UNEB centre in Western Uganda dedicated to academic distinction, Christian moral character, and scientific mastery for the modern generation.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-white/70">
            <span className="px-3 py-1.5 bg-white/10 border border-white/20">Centre No. U3284</span>
            <span className="px-3 py-1.5 bg-white/10 border border-white/20">O & A-Level Programs</span>
            <span className="px-3 py-1.5 bg-white/10 border border-white/20">Bushenyi Municipality, Uganda</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: THE THREE FOUNDATION CORNERSTONES
          (MOTTO, MISSION, VISION)
          ========================================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#7a0c0c] uppercase tracking-widest">
              Institutional Foundation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1a1a1a]">
              Motto, Mission & Vision
            </h2>
            <p className="text-sm text-[#666666]">
              The guiding principles that steer every academic lesson, co-curricular endeavor, and student interaction at Nexus High School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: School Motto */}
            <div className="bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#7a0c0c] text-white flex items-center justify-center mb-6 border-2 border-[#1a1a1a]">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#7a0c0c] uppercase tracking-widest block mb-1">
                  School Motto
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#1a1a1a] mb-4 uppercase tracking-wide leading-snug">
                  "Excellence Through Character & Knowledge"
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Knowledge without moral character is hazardous, and character without scholastic competence is ineffectual. At Nexus, we nurture both in equal measure, forging scholars with unshakeable integrity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-bold text-[#7a0c0c]">
                Our Guiding Creed
              </div>
            </div>

            {/* Card 2: School Mission */}
            <div className="bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#7a0c0c] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#1a1a1a] text-white flex items-center justify-center mb-6 border-2 border-[#1a1a1a]">
                  <Target className="w-6 h-6 text-[#f87171]" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#7a0c0c] uppercase tracking-widest block mb-1">
                  School Mission
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#1a1a1a] mb-4 leading-snug">
                  Holistic Transformation & Intellectual Rigor
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  To provide rigorous, holistic secondary education grounded in Christian moral integrity, critical inquiry, and modern scientific competence, empowering young men and women to lead transformative lives in Uganda and the global community.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-bold text-[#1a1a1a]">
                Our Daily Purpose
              </div>
            </div>

            {/* Card 3: School Vision */}
            <div className="bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#7a0c0c] text-white flex items-center justify-center mb-6 border-2 border-[#1a1a1a]">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#7a0c0c] uppercase tracking-widest block mb-1">
                  School Vision
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#1a1a1a] mb-4 leading-snug">
                  Leading Secondary Education in East Africa
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  To be East Africa’s premier center of secondary education, recognized nationally and internationally for outstanding academic distinction, moral rectitude, technological innovation, and holistic child development.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-bold text-[#7a0c0c]">
                Our Future Horizon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SCHOOL BACKGROUND & FOUNDING HERITAGE
          ========================================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#7a0c0c] uppercase tracking-widest">
                Our History & Roots
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
                Background & Historical Milestones
              </h2>

              <p className="text-base text-[#444444] leading-relaxed">
                Nexus High School was established in Bushenyi Municipality with a visionary mandate: to cultivate an educational sanctuary where high academic standards thrive side-by-side with genuine Christian moral integrity and modern scientific literacy.
              </p>

              <p className="text-base text-[#444444] leading-relaxed">
                Recognizing the growing demand for secondary schools in Western Uganda that bridge the divide between theoretical textbook memorization and hands-on laboratory investigation, our founders invested heavily in dedicated STEM laboratories, digital ICT suites, and a comprehensive boarding infrastructure.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#f8f9fa] border-l-4 border-[#7a0c0c] border-y border-r border-[#1a1a1a]">
                  <h4 className="font-heading font-bold text-sm text-[#1a1a1a]">Accredited UNEB National Centre</h4>
                  <p className="text-xs text-[#555555] mt-1">
                    Awarded official Uganda National Examinations Board (UNEB) Centre status (No. U3284), Nexus High School conducts both Uganda Certificate of Education (UCE) and Uganda Advanced Certificate of Education (UACE) examinations.
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border-l-4 border-[#1a1a1a] border-y border-r border-[#1a1a1a]">
                  <h4 className="font-heading font-bold text-sm text-[#1a1a1a]">Holistic Boarding Community</h4>
                  <p className="text-xs text-[#555555] mt-1">
                    Situated amidst the tranquil green hills of Bushenyi, our secure residential campus provides students with nutritious meals, professional 24/7 infirmary health support, and pastoral care that builds lifelong camaraderie.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photographic Feature */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-2 border-[#1a1a1a] shadow-[8px_8px_0_#1a1a1a] overflow-hidden">
                <img 
                  src={labImg} 
                  alt="Nexus Science Laboratory" 
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="p-4 bg-[#1a1a1a] text-white">
                  <span className="text-xs font-mono text-[#f87171] uppercase tracking-wider block">Practical STEM Pedagogy</span>
                  <p className="text-xs text-white/80 mt-1">State-of-the-art laboratory practical sessions guided by experienced national examiners.</p>
                </div>
              </div>

              <div className="border-2 border-[#1a1a1a] shadow-[6px_6px_0_#7a0c0c] overflow-hidden">
                <img 
                  src={libraryImg} 
                  alt="Nexus High School Library" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-white text-[#1a1a1a]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7a0c0c] block">Scholastic Resource Centre</span>
                  <p className="text-xs text-[#555555]">Extensive academic text collection, digital research terminals, and quiet study bays.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE INSTITUTIONAL VALUES
          ========================================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#7a0c0c] uppercase tracking-widest">
              Ethical Pillars
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1a1a1a]">
              Core Institutional Values
            </h2>
            <p className="text-sm text-[#666666]">
              Every Nexus student is expected to internalize and embody these six pillars of character and discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#1a1a1a] p-6 shadow-[4px_4px_0_#1a1a1a]">
              <div className="w-10 h-10 bg-[#7a0c0c] text-white flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1a1a1a] mb-2">Scholastic Diligence</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Commitment to intellectual rigor, thorough revision, active classroom participation, and a continuous thirst for mastery in arts and sciences.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1a1a1a] p-6 shadow-[4px_4px_0_#1a1a1a]">
              <div className="w-10 h-10 bg-[#1a1a1a] text-white flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1a1a1a] mb-2">Christian Moral Integrity</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Truthfulness, moral uprightness, accountability, and ethical action in examinations, personal relationships, and public leadership.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1a1a1a] p-6 shadow-[4px_4px_0_#1a1a1a]">
              <div className="w-10 h-10 bg-[#7a0c0c] text-white flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1a1a1a] mb-2">Scientific Innovation</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Hands-on practical exploration in Physics, Chemistry, Biology, and ICT, encouraging students to develop real-world problem-solving skills.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1a1a1a] p-6 shadow-[4px_4px_0_#1a1a1a]">
              <div className="w-10 h-10 bg-[#1a1a1a] text-white flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1a1a1a] mb-2">Discipline & Mutual Respect</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Punctuality, polite comportment, adherence to campus regulations, and profound respect for faculty, fellow students, and community members.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1a1a1a] p-6 shadow-[4px_4px_0_#1a1a1a]">
              <div className="w-10 h-10 bg-[#7a0c0c] text-white flex items-center justify-center font-bold mb-4">
                5
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1a1a1a] mb-2">Co-Curricular Vitality</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Active engagement in competitive athletics, football, basketball, music, drama, debate guilds, and brass band to nurture all-round talent.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1a1a1a] p-6 shadow-[4px_4px_0_#1a1a1a]">
              <div className="w-10 h-10 bg-[#1a1a1a] text-white flex items-center justify-center font-bold mb-4">
                6
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1a1a1a] mb-2">Civic Stewardship</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Developing leaders conscious of their duty to uplift society, conserve our environment in Bushenyi, and serve Uganda with patriotism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ACADEMIC CURRICULAR STRUCTURE
          ========================================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="border-b-2 border-[#1a1a1a] pb-6">
            <span className="text-xs font-bold text-[#7a0c0c] uppercase tracking-widest">
              Curricular Pathways
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] mt-1">
              Academic Organization & Departments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-[#1a1a1a] p-6 sm:p-8 bg-[#f8f9fa] shadow-[6px_6px_0_#1a1a1a]">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#7a0c0c] text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                  Lower Secondary
                </span>
                <span className="text-xs font-mono text-[#666666]">Senior 1 to Senior 4</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1a1a1a] mb-3">
                Uganda Certificate of Education (UCE)
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                Our O-Level curriculum follows the updated competence-based UNEB syllabus emphasizing practical project work, science experiments, digital ICT literacy, entrepreneurship, and languages.
              </p>
              <ul className="space-y-2 text-xs text-[#444444]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7a0c0c]" />
                  <span>Compulsory Sciences: Physics, Chemistry, Biology, Mathematics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7a0c0c]" />
                  <span>Humanities: Geography, History & Political Education, CRE</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7a0c0c]" />
                  <span>Vocational: ICT, Agriculture, Physical Education, Fine Art</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#1a1a1a] p-6 sm:p-8 bg-[#f8f9fa] shadow-[6px_6px_0_#1a1a1a]">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                  Upper Secondary
                </span>
                <span className="text-xs font-mono text-[#666666]">Senior 5 to Senior 6</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1a1a1a] mb-3">
                Uganda Advanced Certificate of Education (UACE)
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                Our A-Level wing prepares scholars for direct competitive university admissions into Medicine, Engineering, Law, Economics, and Computer Science.
              </p>
              <ul className="space-y-2 text-xs text-[#444444]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7a0c0c]" />
                  <span>Science Combinations: PCM, PCB, BCM, PEM, MEG with Subsidiary ICT</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7a0c0c]" />
                  <span>Arts Combinations: HEG, HEL, DEG, HED with Subsidiary Math/ICT</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7a0c0c]" />
                  <span>Senior Examiners mentoring each candidate individually</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION & FOOTER RETURN
          ========================================================================= */}
      <section className="py-16 px-6 lg:px-12 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f87171]">
            Intake Open 2026 / 2027
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black">
            Join the Nexus High School Tradition of Excellence
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Admissions for Senior 1 (PLE leavers) and Senior 5 (UCE leavers) are currently open. Experience an elite secondary boarding education in Bushenyi.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={onApply}
              className="bg-[#7a0c0c] hover:bg-white hover:text-[#1a1a1a] text-white border-2 border-white px-8 py-3 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Apply for Admission
            </button>
            <button
              onClick={onBack}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 px-8 py-3 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Main Website</span>
            </button>
          </div>
        </div>
      </section>

      {/* Profile Footer */}
      <footer className="bg-[#121212] text-white py-10 px-6 lg:px-12 border-t-2 border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/70">
          <div>
            <span className="font-bold text-white uppercase tracking-wider block sm:inline mr-2">
              Plot 14 Nexus Avenue, Bushenyi Municipality, Western Uganda
            </span>
            <span className="text-white/50">Centre No. U3284</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Nexus High School, Bushenyi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
