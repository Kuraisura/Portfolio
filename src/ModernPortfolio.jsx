import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { SiTiktok, SiTryhackme } from 'react-icons/si';
import Lenis from 'lenis';
import { createClient } from '@supabase/supabase-js';
import { Filter } from 'bad-words';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/zoom';
import { motion as Motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Facebook,
  Youtube,
  Mail, 
  CheckCircle2, 
  X,
  Zap,
  Globe,
  GraduationCap,
  Award,
  Send,
  AlertCircle,
  Phone,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Link2,
  ArrowDownNarrowWide,
  ArrowDownWideNarrow,
  GalleryHorizontalEnd,
  Grid3X3,
  Eye
} from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || 'https://ovyhqiyiinbbobbwafnf.supabase.co',
  import.meta.env.VITE_SUPABASE_ANON || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92eWhxaXlpaW5iYm9iYndhZm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNzkzNDEsImV4cCI6MjEwNDY1NTM0MX0.QMf2RYeEaEivw1VJvhpHFMRW0uUvCVu9wc1eFRo2rHg'
);

const badWordsFilter = new Filter();
const isVideoMedia = (src = '') => /\.(?:mp4|webm|mov)(?:[?#].*)?$/i.test(src);

function ViewOnlyVideo({ src, onReady }) {
  const playerRef = React.useRef(null);
  const securePlayer = () => {
    const player = playerRef.current;
    player?.setAttribute?.('controlsList', 'nodownload noplaybackrate');
    player?.setAttribute?.('disablePictureInPicture', '');
    player?.setAttribute?.('disableRemotePlayback', '');
    onReady?.();
  };

  return (
    <div className="view-only-player" onContextMenu={(event) => event.preventDefault()}>
      <ReactPlayer
        ref={playerRef}
        src={src}
        controls
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        onReady={securePlayer}
        onLoadStart={securePlayer}
        width="100%"
        height="100%"
      />
    </div>
  );
}
badWordsFilter.addWords(
  'putangina', 'putcha', 'puta', 'gago', 'gagu', 'tanga', 'boboca', 'bobo',
  'leche', 'leching', 'peste', 'punyeta', 'damuho', 'hayop', 'haynako',
  'animal', 'animalsuka', 'suka', 'tortang', 'kupal', 'kupalmo', 'ulol',
  'ululer', 'ogag', 'ttp', 'bwiset', 'pucha', 'yawa', 'damo',
  'coño', 'pendejo', 'cabrón', 'mierda', 'joder', 'carajo', 'chinga',
  'estúpido', 'imbecil', 'idiota', 'basura', 'maldito', 'maldita',
  'hijo de puta', 'hijueputa', 'marica', 'maricon', 'maricón',
  'gringo', 'naco', 'fresa', 'mamon', 'mamón', 'cabron', 'pendeja',
  'fuck', 'shit', 'ass', 'bitch', 'damn', 'hell', 'crap', 'dick',
  'bastard', 'dumbass', 'motherfucker', 'sonofabitch', 'asshole',
  'dumbass', 'jackass', 'douchebag', 'dickhead', 'piss', 'cock',
  'pussy', 'tits', 'whore', 'slut', 'nigger', 'nigga', 'faggot',
  'retard', 'retarded', 'stupid', 'idiot', 'moron', 'dunce',
  'puto', 'puta', 'maricon', 'joto', 'pinche', 'cabron', 'pendejo',
  'estupido', 'idiota', 'maldito', 'maldita', 'concha', 'forro',
  'boludo', 'boluda', 'pelotudo', 'pelotuda', 'garca', 'hijo de mil',
  'malparido', 'gonorrea', 'hptas', 'hp', 'cts', 'mrfk',
  'weon', 'weona', 'hueon', 'huevón', 'wea', 'csm', 'ctm',
  'stfu', 'gtfo', 'wtf', 'af', 'lmao', 'smh'
);

const PROJECT_THUMBNAILS = Object.freeze({
  'Chrono Android': '/Portfolio/OfficialThumbnails/optimized/ChronoAndroid.webp',
  'Chrono Desktop': '/Portfolio/OfficialThumbnails/optimized/ChronoDesktop.webp',
  JournalEase: '/Portfolio/OfficialThumbnails/optimized/JournalEase.webp',
  Musikk: '/Portfolio/OfficialThumbnails/optimized/Musikk.webp',
  'Neural Lens': '/Portfolio/OfficialThumbnails/optimized/NeuralLens.webp',
  'Pet Haven': '/Portfolio/OfficialThumbnails/optimized/PetHaven.webp',
  Raiko: '/Portfolio/OfficialThumbnails/optimized/Raiko.webp',
  'RN Ready': '/Portfolio/OfficialThumbnails/optimized/RNReady.webp',
  SeismicWatch: '/Portfolio/OfficialThumbnails/optimized/SeismicWatch.webp',
  'Silid 1201': '/Portfolio/OfficialThumbnails/optimized/Silid1201.webp',
  'St. Benedict Hospital Management System': '/Portfolio/OfficialThumbnails/optimized/StBenedict.webp',
  'STIRAMS Web': '/Portfolio/OfficialThumbnails/optimized/STIRAMSWeb.webp',
  'STIRAMS WPF': '/Portfolio/OfficialThumbnails/optimized/STIRAMSWPF.webp',
  STITimer: '/Portfolio/OfficialThumbnails/optimized/STITimer.webp',
  Wiz: '/Portfolio/OfficialThumbnails/optimized/Wiz.webp',
  'YT Converter': '/Portfolio/OfficialThumbnails/optimized/YTConverter.webp'
});

const DESKTOP_CAROUSEL_THUMBNAILS = Object.freeze({
  'STIRAMS Web': '/Portfolio/OfficialThumbnails/optimized/carousel-STIRAMSWeb.webp',
  Raiko: '/Portfolio/OfficialThumbnails/optimized/carousel-Raiko.webp',
  'YT Converter': '/Portfolio/OfficialThumbnails/optimized/carousel-YTConverter.webp',
  Wiz: '/Portfolio/OfficialThumbnails/optimized/carousel-Wiz.webp',
  Musikk: '/Portfolio/OfficialThumbnails/optimized/carousel-Musikk.webp',
  'RN Ready': '/Portfolio/OfficialThumbnails/optimized/carousel-RNReady.webp',
  SeismicWatch: '/Portfolio/OfficialThumbnails/optimized/carousel-SeismicWatch.webp',
  'STIRAMS WPF': '/Portfolio/OfficialThumbnails/optimized/carousel-STIRAMSWPF.webp',
  STITimer: '/Portfolio/OfficialThumbnails/optimized/carousel-STITimer.webp',
  'St. Benedict Hospital Management System': '/Portfolio/OfficialThumbnails/optimized/carousel-StBenedict.webp',
  'Pet Haven': '/Portfolio/OfficialThumbnails/optimized/carousel-PetHaven.webp',
  'Silid 1201': '/Portfolio/OfficialThumbnails/optimized/carousel-Silid1201.webp'
});

const getProjectArtwork = (project) => project.logo || PROJECT_THUMBNAILS[project.title] || project.screenshots?.[0] || project.image;

// Stable slug used by shareable deep links: https://kuraisler.xyz/projects/wiz
const projectSlug = (title) => String(title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Canonical URL for a project view (optionally the fullscreen gallery).
const projectSharePath = (project, fullscreen = false) =>
  `/projects/${projectSlug(project?.title)}${fullscreen ? '/fullscreen' : ''}`;

// /projects/wiz · /projects/wiz/fullscreen · legacy #projects/wiz aliases.
const PROJECT_PATH_ROUTE = /^\/projects(?:\/([^/?#]+))?(\/fullscreen)?\/?$/;
const PROJECT_HASH_ROUTE = /^projects(?:\/([^/?#]+))?(\/fullscreen)?$/;

const readProjectRoute = () => {
  const pathMatch = PROJECT_PATH_ROUTE.exec(window.location.pathname);
  if (pathMatch) {
    return { slug: pathMatch[1] ? decodeURIComponent(pathMatch[1]).toLowerCase() : null, fullscreen: Boolean(pathMatch[2]) };
  }
  const hashMatch = PROJECT_HASH_ROUTE.exec(window.location.hash.slice(1));
  if (hashMatch) {
    return { slug: hashMatch[1] ? decodeURIComponent(hashMatch[1]).toLowerCase() : null, fullscreen: Boolean(hashMatch[2]) };
  }
  return null;
};

const absoluteSiteUrl = (path) => {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  return `${window.location.origin}${path.startsWith('/') ? '' : '/'}${path}`;
};
const getDesktopCarouselArtwork = (project) => DESKTOP_CAROUSEL_THUMBNAILS[project.title] || getProjectArtwork(project);

function ProjectArtwork({ project, src = getProjectArtwork(project), className = '', eager = false, compact = false }) {
  if (!src) return <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />;

  return (
    <div className={`project-artwork ${compact ? 'project-artwork--compact' : ''} ${className}`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="project-artwork-mirror"
        decoding="async"
        draggable={false}
      />
      <img
        src={src}
        alt={`${project.title} project thumbnail`}
        className="project-artwork-main"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

function DraggableRow({ category, projects, catColor, reverse, onSelect, externalPaused }) {
  const scrollRef = React.useRef(null);
  const dragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeftStart = React.useRef(0);
  const lastX = React.useRef(0);
  const velocity = React.useRef(0);
  const lastTime = React.useRef(0);
  const didDrag = React.useRef(false);
  const momentumRaf = React.useRef(null);
  const autoRaf = React.useRef(null);
  const hovered = React.useRef(false);
  const pointerCaptureTarget = React.useRef(null);
  const speedDirection = reverse ? 1 : -1;
  const CARD_W = 320;
  const setWidth = React.useMemo(() => projects.length * CARD_W, [projects.length]);

  // Run autoplay only while this row is near the viewport. Updating six hidden
  // scroll containers every display frame was the largest dashboard cost.
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let alive = true;
    let visible = false;
    let lastFrame = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (speedDirection < 0 && el.scrollLeft <= 0) el.scrollLeft = setWidth;

    const tick = (now) => {
      autoRaf.current = null;
      if (!alive || !visible || document.visibilityState === 'hidden') return;
      if (now - lastFrame >= 32 && !dragging.current && !momentumRaf.current && !externalPaused) {
        const frameScale = lastFrame ? Math.min(2.5, (now - lastFrame) / 16.67) : 1;
        const speed = speedDirection * (hovered.current ? 0.12 : 0.46) * frameScale;
        el.scrollLeft += speed;
        if (speedDirection < 0 && el.scrollLeft <= 0) el.scrollLeft += setWidth;
        else if (speedDirection > 0 && el.scrollLeft >= setWidth) el.scrollLeft -= setWidth;
        lastFrame = now;
      }
      autoRaf.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!reduceMotion && visible && document.visibilityState === 'visible' && !autoRaf.current) {
        lastFrame = performance.now();
        autoRaf.current = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      if (autoRaf.current) cancelAnimationFrame(autoRaf.current);
      autoRaf.current = null;
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    }, { rootMargin: '160px 0px', threshold: 0 });
    const onVisibilityChange = () => document.visibilityState === 'visible' ? start() : stop();
    observer.observe(el);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      alive = false;
      stop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [projects.length, setWidth, speedDirection, externalPaused]);

  // Cancel momentum when externally paused or dragging starts
  React.useEffect(() => {
    if ((externalPaused || dragging.current) && momentumRaf.current) {
      cancelAnimationFrame(momentumRaf.current);
      momentumRaf.current = null;
    }
    // A modal can open while the pointer is over a row. In that case no new
    // mouseenter event fires after close, so clear the stale hover pause here.
  }, [externalPaused]);

  const onDown = (e) => {
    // Cancel any in-flight momentum
    if (momentumRaf.current) {
      cancelAnimationFrame(momentumRaf.current);
      momentumRaf.current = null;
    }
    dragging.current = true;
    didDrag.current = false;
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    lastX.current = startX.current;
    lastTime.current = performance.now();
    velocity.current = 0;
    scrollRef.current.style.cursor = 'grabbing';
    // Capture on the card that was actually pressed. Capturing on the row
    // retargets the synthetic click to the scroller and makes cards feel
    // randomly unclickable after autoplay has moved them.
    const card = e.target.closest?.('[data-carousel-card]') || e.currentTarget;
    pointerCaptureTarget.current = card;
    card.setPointerCapture?.(e.pointerId);
  };

  const onMove = (e) => {
    if (!dragging.current) return;
    const x = e.clientX ?? 0;
    const now = performance.now();
    const dt = Math.max(1, now - lastTime.current);
    if (dt > 0) velocity.current = Math.max(-28, Math.min(28, (x - lastX.current) / dt * 16));
    lastX.current = x;
    lastTime.current = now;
    if (Math.abs(startX.current - x) > 5) didDrag.current = true;
    scrollRef.current.scrollLeft = scrollLeftStart.current + (startX.current - x);
    if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += setWidth;
      scrollLeftStart.current += setWidth;
    } else if (scrollRef.current.scrollLeft >= setWidth) {
      scrollRef.current.scrollLeft -= setWidth;
      scrollLeftStart.current -= setWidth;
    }
  };

  const onUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    scrollRef.current.style.cursor = 'grab';
    let vel = velocity.current;
    const wrap = () => {
      if (!scrollRef.current) return;
      const sl = scrollRef.current.scrollLeft;
      if (sl <= 0) scrollRef.current.scrollLeft += setWidth;
      else if (sl >= setWidth) scrollRef.current.scrollLeft -= setWidth;
    };
    const decay = () => {
      if (Math.abs(vel) < 0.3 || !scrollRef.current || dragging.current) {
        momentumRaf.current = null;
        return;
      }
      scrollRef.current.scrollLeft -= vel;
      wrap();
      vel *= 0.965;
      momentumRaf.current = requestAnimationFrame(decay);
    };
    if (Math.abs(vel) > 1) momentumRaf.current = requestAnimationFrame(decay);
    const captureTarget = pointerCaptureTarget.current;
    if (e?.pointerId != null && captureTarget?.hasPointerCapture?.(e.pointerId)) {
      captureTarget.releasePointerCapture(e.pointerId);
    }
    pointerCaptureTarget.current = null;
  };

  // Three sets cover wide desktop viewports without the former five-set DOM and
  // image-paint cost. Single-project groups use the static path below.
  const repeatedProjects = React.useMemo(
    () => Array.from({ length: 3 }, () => projects).flat(),
    [projects]
  );
  // Even a one-project category remains draggable so every category follows
  // the same infinite-carousel interaction.
  const isSingle = projects.length === 1;

  return (
    <div className="carousel-row-shell mb-10 last:mb-0">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={catColor ? { backgroundColor: catColor.bg } : undefined}></span>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">{category}</h3>
        <span className="text-xs text-gray-400 font-medium">{projects.length} project{projects.length !== 1 ? 's' : ''}</span>
      </div>

      {isSingle ? (
        <button type="button" onClick={() => onSelect(projects[0])} className="block w-[300px] h-[200px] cursor-pointer text-left">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-100">
            <ProjectArtwork project={projects[0]} src={getDesktopCarouselArtwork(projects[0])} compact />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
              <div>
                <h4 className="text-white text-lg font-bold tracking-tight mb-0.5 drop-shadow-lg">{projects[0].title}</h4>
                <p className="text-white text-[10px] font-semibold uppercase tracking-wider">{projects[0].date}</p>
              </div>
            </div>
          </div>
        </button>
      ) : (
      <div
        className="overflow-hidden"
      >
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide"
          style={{ cursor: 'grab', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y', overscrollBehaviorInline: 'contain' }}
          onPointerEnter={() => { hovered.current = true; }}
          onPointerLeave={() => { hovered.current = false; }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          {repeatedProjects.map((project, i) => (
            <button
              type="button"
              data-carousel-card
              key={`${project.id}-${i}`}
              onClick={() => { if (!didDrag.current) onSelect(project); }}
              className="flex-shrink-0 w-[300px] h-[200px] cursor-pointer text-left group"
              aria-label={`View ${project.title}`}
            >
              <div className={`relative w-full h-full rounded-2xl overflow-hidden border border-gray-100 bg-gradient-to-br ${project.gradient}`}>
                <ProjectArtwork project={project} src={getDesktopCarouselArtwork(project)} compact />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                  <div>
                    <h4 className="text-white text-lg font-bold tracking-tight mb-0.5 drop-shadow-lg">{project.title}</h4>
                    <p className="text-white text-[10px] font-semibold uppercase tracking-wider">{project.date}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      )}
    </div>
  );
}

const ModernPortfolio = () => {
  const getInitialTheme = () => {
    let savedTheme = null;
    try { savedTheme = window.localStorage.getItem('portfolio-theme'); } catch { /* storage can be blocked on mobile */ }
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return 'light';
  };
  const [activeTab, setActiveTab] = useState('featured');
  const [clickedTab, setClickedTab] = useState(null);
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest'
  const [projectViewMode, setProjectViewMode] = useState('carousel'); // desktop: 'carousel' | 'grid'
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMovedEnough, setHasMovedEnough] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [theme, setTheme] = useState(getInitialTheme);
  const [selectedProject, setSelectedProject] = useState(null);
  const [coverflowIndex, setCoverflowIndex] = useState(0);
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [sheetExpanded, setSheetExpanded] = useState(false);
  const [galleryTab, setGalleryTab] = useState('screenshots'); // 'screenshots' | 'showcase'
  const fullscreenSwiperRef = React.useRef(null);
  const modalSwiperRef = React.useRef(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showDevtoolsEasterEgg, setShowDevtoolsEasterEgg] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [viewCount, setViewCount] = useState(null);
  const dragRef = React.useRef(null);
  const lenisRef = React.useRef(null);
  const projectModalRef = React.useRef(null);
  const achievementModalRef = React.useRef(null);
  const certificateModalRef = React.useRef(null);
  const navScrollActiveRef = React.useRef(false);
  const navigationTargetRef = React.useRef(null);
  const reducedMotionRef = React.useRef(false);

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [formError, setFormError] = useState(''); // server / network failure banner
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const noteRef = React.useRef(null);
  const honeypotRef = React.useRef(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const selectedProjectRef = React.useRef(null);
  const routeSyncReadyRef = React.useRef(false);
  selectedProjectRef.current = selectedProject;

  // Gallery bookkeeping. The slide counter and "is the user dragging" flag live
  // in refs instead of state, so swiping never triggers a re-render of the whole
  // portfolio mid-gesture (that re-render was the stutter on mobile).
  const modalCounterRef = React.useRef(null);
  const fullscreenCounterRef = React.useRef(null);
  const modalDraggingRef = React.useRef(false);
  const modalUpdatePendingRef = React.useRef(false);
  const fsDraggingRef = React.useRef(false);
  const fsUpdatePendingRef = React.useRef(false);

  const writeSlideCounter = (ref, index, total) => {
    const el = ref.current;
    if (el) el.textContent = `${Math.max(0, Number(index) || 0) + 1} / ${total}`;
  };

  const runSwiperUpdate = (kind) => {
    const isModal = kind === 'modal';
    const swiper = isModal ? modalSwiperRef.current : fullscreenSwiperRef.current;
    if (!swiper || swiper.destroyed) return;
    if (isModal ? modalDraggingRef.current : fsDraggingRef.current) {
      (isModal ? modalUpdatePendingRef : fsUpdatePendingRef).current = true;
      return;
    }
    swiper.update();
  };

  const finishSwiperDrag = (kind) => {
    const isModal = kind === 'modal';
    const pendingRef = isModal ? modalUpdatePendingRef : fsUpdatePendingRef;
    if (isModal) modalDraggingRef.current = false;
    else fsDraggingRef.current = false;
    if (pendingRef.current) {
      pendingRef.current = false;
      window.requestAnimationFrame(() => runSwiperUpdate(kind));
    }
  };

  const copyProjectLink = async () => {
    if (!selectedProject) return;
    const url = absoluteSiteUrl(projectSharePath(selectedProject, fullscreenMode));
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      window.prompt('Copy this link', url);
    }
  };

  const handlePrevSlide = () => setCurrentSlide(currentSlide - 1);
  const handleNextSlide = () => setCurrentSlide(currentSlide + 1);
  const handleDragStart = (e) => {
    setIsDragging(true);
    setHasMovedEnough(false);
    setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
    setScrollStart(currentSlide);
    setEnableTransition(false);
  };
  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    if (Math.abs(startX - currentX) > 10) setHasMovedEnough(true);
    if (Math.abs(startX - currentX) > 50) {
      setCurrentSlide(scrollStart + (startX > currentX ? 1 : -1));
      setIsDragging(false);
      setEnableTransition(true);
    }
  };
  const handleDragEnd = () => {
    setIsDragging(false);
    setEnableTransition(true);
    setTimeout(() => setHasMovedEnough(false), 100);
  };

  const sheetRef = React.useRef(null);
  const sheetContentRef = React.useRef(null);

  // Use native scrolling on touch devices and for reduced-motion visitors.
  // This removes a permanent animation loop from phones while keeping Lenis for
  // desktop wheel navigation.
  useEffect(() => {
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const useNativeScrolling = reducedMotionRef.current || window.matchMedia('(pointer: coarse)').matches;

    // Tear down any instance left over from a previous mount (StrictMode runs
    // effects twice: setup -> cleanup -> setup). Destroying here rather than
    // relying solely on cleanup ordering keeps exactly one live instance, so a
    // stale instance can never sit on wheel/touch events with preventDefault.
    lenisRef.current?.destroy();
    lenisRef.current = null;

    if (useNativeScrolling) return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      // Lenis handles eased programmatic section navigation.
      smoothWheel: true,
      syncTouch: false,
      duration: 1.1
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      if (lenisRef.current === lenis) lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Always default to light mode on first visit
    let savedTheme = null;
    try { savedTheme = window.localStorage.getItem('portfolio-theme'); } catch { /* storage may be blocked */ }
    if (!savedTheme) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    document.documentElement.style.backgroundColor = theme === 'dark' ? '#0b1220' : '#f7f8fa';
    document.body.style.backgroundColor = theme === 'dark' ? '#0b1220' : '#f7f8fa';
    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute('content', theme === 'dark' ? '#0b1220' : '#f7f8fa');
  }, [theme]);

  // Fullscreen has its own Swiper. The shared modal effect below owns scroll
  // locking so closing fullscreen cannot unlock the project dialog beneath it.
  // Opening already syncs the index inside the Swiper's onSwiper callback;
  // re-syncing on every index change here used to call slideTo(..., 0) after
  // each swipe, which cancelled the in-flight drag animation and snapped back.
  useEffect(() => {
    if (fullscreenMode) return undefined;
    fullscreenSwiperRef.current?.destroy(true, true);
    fullscreenSwiperRef.current = null;
  }, [fullscreenMode]);

  // Wheel / trackpad paging for both galleries: scrolling down advances
  // (slides travel left), scrolling up goes back (slides travel right), so a
  // client can flick through a project's screenshots without hunting for arrows.
  useEffect(() => {
    const bindings = [];
    const modalSwiper = modalSwiperRef.current;
    const fsSwiper = fullscreenSwiperRef.current;
    if (modalSwiper && !modalSwiper.destroyed && modalSwiper.el) {
      bindings.push([modalSwiper.el, () => modalSwiperRef.current]);
    }
    if (fsSwiper && !fsSwiper.destroyed && fsSwiper.el) {
      bindings.push([fsSwiper.el, () => fullscreenSwiperRef.current]);
    }
    if (!bindings.length) return undefined;

    let lockUntil = 0;
    let pendingDelta = 0;
    const detach = [];

    bindings.forEach(([element, getSwiper]) => {
      const onWheel = (event) => {
        const swiper = getSwiper();
        if (!swiper || swiper.destroyed) return;
        if ((swiper.zoom?.scale || 1) > 1) return; // zoomed in: keep browser zoom behaviour
        const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
        if (!delta) return;
        // The gallery owns the gesture — the page / dialog must not scroll under it.
        event.preventDefault();
        const now = performance.now();
        if (now < lockUntil) return;
        pendingDelta += delta;
        if (Math.abs(pendingDelta) < 24) return; // ignore micro-jitter
        const direction = pendingDelta;
        pendingDelta = 0;
        lockUntil = now + 320;
        if (direction > 0) {
          if (swiper.isEnd) swiper.slideTo(0);
          else swiper.slideNext();
        } else if (swiper.isBeginning) {
          swiper.slideTo(swiper.slides.length - 1);
        } else {
          swiper.slidePrev();
        }
      };
      element.addEventListener('wheel', onWheel, { passive: false });
      detach.push(() => element.removeEventListener('wheel', onWheel));
    });

    return () => detach.forEach((unbind) => unbind());
  }, [selectedProject, galleryTab, fullscreenMode]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = document.documentElement.dataset.theme || theme;
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.classList.add('theme-changing');
    setTheme(nextTheme);
    try { window.localStorage.setItem('portfolio-theme', nextTheme); } catch { /* keep theme usable without storage */ }
    window.setTimeout(() => root.classList.remove('theme-changing'), reducedMotionRef.current ? 0 : 180);
  };

  // Ends a programmatic section navigation. This only clears the nav flags — it
  // deliberately does NOT call lenis.stop(), because stop() sets isStopped and
  // while stopped Lenis calls preventDefault() on every wheel/touch event
  // without scrolling, which killed scrolling permanently. stop() is reserved
  // for the modal scroll lock, which always calls start() again on close.
  const endNavigation = () => {
    navScrollActiveRef.current = false;
    navigationTargetRef.current = null;
  };

  useEffect(() => {
    const cancelNavigation = () => {
      if (!navScrollActiveRef.current || !lenisRef.current) return;
      // stop() + start() cancels the in-flight programmatic scroll and resets
      // velocity, but leaves isStopped false so wheel/touch input keeps working.
      // Calling stop() alone would leave Lenis swallowing every scroll event.
      lenisRef.current.stop();
      lenisRef.current.start();
      endNavigation();
    };

    const handleMotionPreference = (event) => {
      reducedMotionRef.current = event.matches;
      if (event.matches) cancelNavigation();
    };
    const handleKeyNavigation = (event) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
        cancelNavigation();
      }
    };
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Only cancel navigation when user is actively navigating to a section.
    // Do NOT fire on every wheel event — that blocks Lenis smooth scrolling entirely.
    const handleWheel = () => {
      if (navScrollActiveRef.current) {
        cancelNavigation();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', cancelNavigation, { passive: true });
    window.addEventListener('keydown', handleKeyNavigation);
    mediaQuery.addEventListener('change', handleMotionPreference);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', cancelNavigation);
      window.removeEventListener('keydown', handleKeyNavigation);
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, []);

  useEffect(() => {
    // Browsers expose no dependable "DevTools opened" event. This lightweight
    // resize heuristic catches docked tools on desktop without debugger traps,
    // polling loops, blocked shortcuts, or performance penalties.
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 900) return undefined;
    let hideTimer = null;
    const detectDockedDevtools = () => {
      const widthGap = Math.max(0, window.outerWidth - window.innerWidth);
      const heightGap = Math.max(0, window.outerHeight - window.innerHeight);
      let alreadyShown = false;
      try { alreadyShown = window.sessionStorage.getItem('devtools-easter-egg') === 'shown'; } catch { /* optional storage */ }
      if (!alreadyShown && (widthGap > 220 || heightGap > 220)) {
        try { window.sessionStorage.setItem('devtools-easter-egg', 'shown'); } catch { /* optional storage */ }
        setShowDevtoolsEasterEgg(true);
        console.info('KURAI CTF: Reconnaissance noticed. The public portfolio contains clues, never production secrets.');
        hideTimer = window.setTimeout(() => setShowDevtoolsEasterEgg(false), 6500);
      }
    };
    const initialCheck = window.setTimeout(detectDockedDevtools, 400);
    window.addEventListener('resize', detectDockedDevtools, { passive: true });
    return () => {
      window.clearTimeout(initialCheck);
      if (hideTimer) window.clearTimeout(hideTimer);
      window.removeEventListener('resize', detectDockedDevtools);
    };
  }, []);

  // Detect the section crossing the middle of the viewport without a
  // layout-reading scroll handler on every frame.
  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'education', 'achievements', 'seminars', 'certificates', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      if (navScrollActiveRef.current) return;
      const activeEntry = entries.find((entry) => entry.isIntersecting);
      if (activeEntry?.target?.id) setActiveSection(activeEntry.target.id);
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id, { updateHash = true, onComplete } = {}) => {
    const element = document.getElementById(id);
    if (!element) {
      onComplete?.();
      return;
    }
    const navigationOffset = 32;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - navigationOffset;
    const isMobile = window.matchMedia('(max-width: 1023px)').matches;
    const prefersReducedMotion = reducedMotionRef.current;

    if (lenisRef.current && !prefersReducedMotion) {
      // Cancel an in-flight navigation, then immediately start again so Lenis
      // never sits in the stopped state (where it preventDefaults all input).
      if (navScrollActiveRef.current) {
        lenisRef.current.stop();
        lenisRef.current.start();
      }
      navScrollActiveRef.current = true;
      navigationTargetRef.current = id;
      lenisRef.current.scrollTo(element, {
        offset: -navigationOffset,
        duration: isMobile ? 0.9 : 1.15,
        easing: (value) => 1 - Math.pow(1 - value, 3),
        onComplete: () => {
          // A newer navigation may have started; don't clear its flags.
          if (navigationTargetRef.current !== id) return;
          endNavigation();
          if (updateHash) window.history.pushState(null, '', `#${id}`);
          onComplete?.();
        }
      });
    } else {
      endNavigation();
      window.scrollTo({ top: targetPosition, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      if (updateHash) window.history.pushState(null, '', `#${id}`);
      // Native smooth scrolling has no reliable callback here, and opening a
      // dialog mid-scroll would lock the body and cancel it — wait for it.
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        window.removeEventListener('scrollend', finish);
        onComplete?.();
      };
      window.addEventListener('scrollend', finish, { once: true });
      window.setTimeout(finish, prefersReducedMotion ? 0 : 700);
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const handleLocationNavigation = () => {
      // /projects/wiz, /projects/wiz/fullscreen and the legacy #projects/wiz alias
      const route = readProjectRoute();

      if (route) {
        const project = route.slug ? projects.find((p) => projectSlug(p.title) === route.slug) : null;
        if (!project) {
          // Section-level route (/projects) or unknown slug: no dialog.
          setSelectedProject((current) => (current ? null : current));
          scrollToSection('projects', { updateHash: false });
          return;
        }

        const applyRoute = () => {
          setGalleryTab('screenshots');
          setCoverflowIndex(0);
          setSheetExpanded(false);
          setSelectedProject(project);
          setFullscreenMode(Boolean(route.fullscreen));
        };

        // Back/Forward between two views of the project that is already open
        // must not re-scroll — the dialog has the page locked.
        if (selectedProjectRef.current && projectSlug(selectedProjectRef.current.title) === route.slug) {
          setFullscreenMode(Boolean(route.fullscreen));
          return;
        }

        scrollToSection('projects', { updateHash: false, onComplete: applyRoute });
        return;
      }

      // Plain section hash (/#about, /#projects, …): dismiss an open dialog first.
      setSelectedProject((current) => (current ? null : current));
      const sectionId = window.location.hash.slice(1);
      if (sectionId) requestAnimationFrame(() => scrollToSection(sectionId, { updateHash: false }));
    };

    window.addEventListener('popstate', handleLocationNavigation);
    window.addEventListener('hashchange', handleLocationNavigation);
    handleLocationNavigation();
    return () => {
      window.removeEventListener('popstate', handleLocationNavigation);
      window.removeEventListener('hashchange', handleLocationNavigation);
    };
    // scrollToSection intentionally uses the mounted Lenis instance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the address bar shareable and canonical: opening a project writes
  // /projects/<slug> (+ /fullscreen); closing it falls back to /#projects.
  useEffect(() => {
    if (!routeSyncReadyRef.current) {
      // First run happens while a deep link is still scrolling to the section —
      // let the navigation effect own the URL until the dialog actually opens.
      routeSyncReadyRef.current = true;
      return;
    }
    if (selectedProject) {
      const next = projectSharePath(selectedProject, fullscreenMode);
      if (window.location.pathname !== next) window.history.replaceState(null, '', next);
    } else if (PROJECT_PATH_ROUTE.test(window.location.pathname)) {
      window.history.replaceState(null, '', '/#projects');
    }
  }, [selectedProject, fullscreenMode]);

  // Fullscreen is a child view of the dialog — never leave it armed after the
  // dialog is dismissed (Esc, backdrop click, browser Back).
  useEffect(() => {
    if (!selectedProject && fullscreenMode) {
      setFullscreenMode(false);
      setSheetExpanded(false);
    }
  }, [selectedProject, fullscreenMode]);

  // Esc steps back one level: fullscreen first, then the project dialog.
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      if (fullscreenMode) {
        setFullscreenMode(false);
        setSheetExpanded(false);
        return;
      }
      if (selectedProject) setSelectedProject(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [fullscreenMode, selectedProject]);

  // Per-view document metadata. Crawlers that execute JS (Google) index each
  // /projects/<slug> URL with its own title, description, social card and
  // canonical, so every project can rank on its own.
  useEffect(() => {
    const ORIGIN = 'https://kuraisler.xyz';
    const HOME = `${ORIGIN}/`;
    const DEFAULT_TITLE = 'Mark Crysler Baddo (Kuraisler) | Full-Stack Developer';
    const DEFAULT_DESCRIPTION =
      'Mark Crysler Baddo, known online as Kuraisler, is a Filipino full-stack developer building web, Android, desktop, IoT, Windows Forms, and Unity projects.';
    const DEFAULT_IMAGE = `${ORIGIN}/Portfolio/og-cover.jpg`;
    const DEFAULT_IMAGE_ALT = 'Mark Crysler Baddo — Kuraisler';

    const setMeta = (key, value) => {
      const el = document.head.querySelector(`meta[name="${key}"], meta[property="${key}"]`);
      if (el) el.setAttribute('content', value);
    };
    const setCanonical = (href) => {
      const el = document.head.querySelector('link[rel="canonical"]');
      if (el) el.setAttribute('href', href);
    };
    // Only the default 1200×630 card has known dimensions — drop them when the
    // image is swapped for a project screenshot of unknown size.
    const setOgImageSize = (width, height) => {
      const apply = (key, value) => {
        let el = document.head.querySelector(`meta[property="${key}"]`);
        if (!value) {
          if (el) el.remove();
          return;
        }
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', key);
          document.head.appendChild(el);
        }
        el.setAttribute('content', String(value));
      };
      apply('og:image:width', width);
      apply('og:image:height', height);
    };

    if (selectedProject) {
      const description = String(selectedProject.desc || selectedProject.subtitle || DEFAULT_DESCRIPTION).replace(/\s+/g, ' ').trim().slice(0, 300);
      const image = absoluteSiteUrl(selectedProject.screenshots?.[0]) || DEFAULT_IMAGE;
      // Fullscreen is the same document as the project page, so it always
      // canonicalises back to /projects/<slug> to avoid a duplicate URL.
      const canonical = absoluteSiteUrl(projectSharePath(selectedProject, false));
      const shareUrl = absoluteSiteUrl(projectSharePath(selectedProject, fullscreenMode));

      document.title = `${selectedProject.title} | Mark Crysler Baddo (Kuraisler)`;
      setMeta('description', description);
      setCanonical(canonical);
      setMeta('og:title', `${selectedProject.title} | Kuraisler`);
      setMeta('og:description', description);
      setMeta('og:url', shareUrl);
      setMeta('og:image', image);
      setMeta('og:image:alt', `${selectedProject.title} — Kuraisler`);
      setOgImageSize(null, null);
      setMeta('twitter:title', `${selectedProject.title} | Kuraisler`);
      setMeta('twitter:description', description);
      setMeta('twitter:image', image);
    } else {
      document.title = DEFAULT_TITLE;
      setMeta('description', DEFAULT_DESCRIPTION);
      setCanonical(HOME);
      setMeta('og:title', 'Kuraisler - Mark Crysler Baddo');
      setMeta('og:description', "Kurai's developer portfolio: web, mobile, Windows Forms, IoT, and Unity projects by Mark Crysler Baddo.");
      setMeta('og:url', HOME);
      setMeta('og:image', DEFAULT_IMAGE);
      setMeta('og:image:alt', DEFAULT_IMAGE_ALT);
      setOgImageSize(1200, 630);
      setMeta('twitter:title', 'Kuraisler - Full-Stack Developer');
      setMeta('twitter:description', 'Full-Stack Developer Portfolio - C#, .NET, React, Next.js, and more.');
      setMeta('twitter:image', DEFAULT_IMAGE);
    }
  }, [selectedProject, fullscreenMode]);

  // Structured data for the project list — generated from the source of truth
  // so it can never drift out of sync with the portfolio itself.
  useEffect(() => {
    const item = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Projects by Mark Crysler Baddo (Kuraisler)',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: project.title,
          description: String(project.desc || project.subtitle || '').trim(),
          url: absoluteSiteUrl(projectSharePath(project)),
          applicationCategory: project.type || 'WebApplication',
          operatingSystem: project.stats?.platform || 'Cross-platform',
          image: absoluteSiteUrl(project.screenshots?.[0]),
          author: { '@id': 'https://kuraisler.xyz/#mark-crysler-baddo' },
        },
      })),
    };
    const SCRIPT_ID = 'portfolio-projects-jsonld';
    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Blocks rubber-banding / chain-scrolling behind the open dialog so a drag
  // that hits the top or bottom edge never yanks the page underneath.
  useEffect(() => {
    const modalOpen = Boolean(selectedProject || selectedAchievement || selectedCertificate);
    setLinkCopied(false);

    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
      lenisRef.current?.start();
      // A dialog can be unmounted mid-gesture (Esc / hash change); never leave
      // a gallery stuck thinking it is still being dragged.
      modalDraggingRef.current = false;
      modalUpdatePendingRef.current = false;
      fsDraggingRef.current = false;
      fsUpdatePendingRef.current = false;
    }

    // Unmount safety net: never leave the page locked or Lenis stopped.
    return () => {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
      lenisRef.current?.start();
    };
  }, [selectedProject, selectedAchievement, selectedCertificate]);

  useEffect(() => {
    const modal = selectedProject
      ? projectModalRef.current
      : selectedAchievement
        ? achievementModalRef.current
        : selectedCertificate
          ? certificateModalRef.current
          : null;
    if (modal) {
      requestAnimationFrame(() => modal.focus());
    }
  }, [selectedProject, selectedAchievement, selectedCertificate]);

  useEffect(() => {
    if (!selectedCertificate) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [selectedCertificate]);

  // Record this visit once, then refresh the displayed total automatically.
  useEffect(() => {
    let cancelled = false;
    let recordedLocally = false;
    const updateViewCount = async (recordView = false) => {
      try {
        const response = await fetch('/api/views', { method: recordView ? 'POST' : 'GET', cache: 'no-store' });
        if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Views API unavailable');
        const data = await response.json();
        if (!cancelled && Number.isFinite(data.views)) setViewCount(data.views);
      } catch {
        if (recordView && !recordedLocally) {
          recordedLocally = true;
          await supabase.from('portfolio_views').insert({ user_agent: navigator.userAgent || '' });
        }
        const { data, error } = await supabase.rpc('get_portfolio_view_count');
        const count = Number(data);
        if (!cancelled && !error && Number.isFinite(count)) setViewCount(count);
      }
    };
    updateViewCount(true);
    const interval = window.setInterval(() => updateViewCount(false), 5000);
    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') updateViewCount(false);
    };
    document.addEventListener('visibilitychange', refreshWhenVisible);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', refreshWhenVisible);
    };
  }, []);

  const validateForm = () => {
    const name = nameRef.current?.value?.trim() || '';
    const email = emailRef.current?.value?.trim() || '';
    const note = noteRef.current?.value?.trim() || '';
    const errors = {};

    if (!name) errors.name = "Name is required";
    else if (name.length > 30) errors.name = "Name must be 30 characters or less";
    else if (/[^a-zA-Z\s]/.test(name)) errors.name = "Name can only contain letters and spaces";

    if (!email) {
      errors.email = "Email is required";
    } else if (email.length > 40) {
      errors.email = "Email must be 40 characters or less";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!note) {
      errors.note = "Message is required";
    } else if (note.length < 10) {
      errors.note = "Message must be at least 10 characters";
    } else if (note.length > 2000) {
      errors.note = "Message must be 2,000 characters or less";
    } else if (badWordsFilter.isProfane(note)) {
      errors.note = "Message contains inappropriate language. Please keep it professional.";
    }
    return errors;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (honeypotRef.current?.value) {
      setFormStatus('success');
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (noteRef.current) noteRef.current.value = '';
      setTimeout(() => setFormStatus('idle'), 4000);
      return;
    }

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('submitting');
    setFormError('');

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const note = noteRef.current.value.trim();

    try {
      // Preferred path: the Vercel serverless function saves to Supabase AND
      // sends the email through Resend. Outside Vercel (local dev / static
      // hosting) that route does not exist, so fall back to the Supabase
      // insert only — the message is still recorded, just not emailed.
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, note })
      });

      const isJson = (response.headers.get('content-type') || '').includes('application/json');

      if (response.ok && isJson) {
        setFormStatus('success');
      } else if (!isJson || response.status === 404 || response.status === 405) {
        const { error } = await supabase.from('contact_submissions').insert({
          name, email, message: note
        });
        if (error) throw error;
        setFormStatus('success');
      } else {
        const data = isJson ? await response.json().catch(() => ({})) : {};
        throw new Error(data.error || 'Message could not be sent.');
      }

      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (noteRef.current) noteRef.current.value = '';
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (err) {
      console.error('Contact form error', err);
      setFormError(err.message || 'Could not send your message. Please try again or email me directly.');
      setFormStatus('idle');
    }
  };

  const education = [
    {
      degree: "B.S. Information Technology",
      school: "STI College Santa Rosa",
      year: "2022 — 2026",
      desc: "Completed a four-year Information Technology degree focused on software development, databases, systems integration, and practical application projects including RFID attendance, hospital management, and full-stack systems."
    },
    {
      degree: "STEM Strand (Grades 11-12)",
      school: "Lumil Integrated NHS / Apayao Science HS",
      year: "2020 — 2022",
      desc: "Built foundation in science, technology, engineering, and mathematics."
    },
    {
      degree: "Junior High School (Grades 7-10)",
      school: "San Francisco National Agricultural & Trade HS",
      year: "2016 — 2020",
      desc: "San Francisco, Luna, Apayao, Philippines."
    },
    {
      degree: "Elementary (Grades 4-6)",
      school: "Philippine School Oman",
      year: "2012 — 2015",
      desc: "Muscat, Oman."
    },
    {
      degree: "Elementary (Grades 1-3)",
      school: "San Francisco Elementary School",
      year: "2009 — 2012",
      desc: "San Francisco, Luna, Apayao, Philippines."
    }
  ];

  const certificates = [
    {
      name: "Google IT Support Professional Certificate",
      issuer: "Coursera",
      issueDate: "2026",
      expirationDate: "None",
      credentialId: "BS1RNYXX33UX",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/BS1RNYXX33UX",
      pdfFile: "Coursera BS1RNYXX33UX.pdf"
    },
    {
      name: "Cyber Security 101 Certificate",
      issuer: "TryHackMe",
      issueDate: "December 2025",
      expirationDate: "December 2028",
      credentialId: "THM-J9VDC478VD",
      credentialUrl: "https://tryhackme.com/certificate/THM-J9VDC478VD",
      pdfFile: "THM-J9VDC478VD.pdf"
    },
    {
      name: "Advent of Cyber 2025",
      issuer: "TryHackMe",
      issueDate: "December 2025",
      expirationDate: "December 2028",
      credentialId: "THM-LILQEVPEOT",
      credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-LILQEVPEOT.pdf",
      pdfFile: "THM-LILQEVPEOT.pdf"
    },
    {
      name: "Pre Security Certificate",
      issuer: "TryHackMe",
      issueDate: "December 2025",
      expirationDate: "December 2028",
      credentialId: "THM-WG2PKAMX71",
      credentialUrl: "https://tryhackme.com/certificate/THM-WG2PKAMX71",
      pdfFile: "THM-WG2PKAMX71.pdf"
    },
    {
      name: "Systems Administration",
      issuer: "STI College Santa Rosa",
      issueDate: "June 24, 2023",
      expirationDate: "None",
      credentialId: "None",
      credentialUrl: "https://drive.google.com/file/d/1jfXa_wZpDPzYskv8wagWrz9LXVu91knK/view?usp=sharing",
      pdfFile: ""
    },
    {
      name: "First Line Support Certificate",
      issuer: "ServiceDesk Simulator",
      issueDate: "2026",
      expirationDate: "None",
      credentialId: "n378vfbYsjbrlp6WPes7PkOvJ6z1",
      credentialUrl: "https://servicedesk-simulator.com/verify/n378vfbYsjbrlp6WPes7PkOvJ6z1/first_line_support",
      imageFile: "first-line-support-certificate.png"
    },
    {
      name: "Help Desk Technician Certificate",
      issuer: "ServiceDesk Simulator",
      issueDate: "2026",
      expirationDate: "None",
      credentialId: "n378vfbYsjbrlp6WPes7PkOvJ6z1",
      credentialUrl: "https://servicedesk-simulator.com/verify/n378vfbYsjbrlp6WPes7PkOvJ6z1/help_desk_technician",
      imageFile: "help-desk-technician-certificate.png"
    },
    {
      name: "IT Support Foundations Certificate",
      issuer: "ServiceDesk Simulator",
      issueDate: "2026",
      expirationDate: "None",
      credentialId: "n378vfbYsjbrlp6WPes7PkOvJ6z1",
      credentialUrl: "https://servicedesk-simulator.com/verify/n378vfbYsjbrlp6WPes7PkOvJ6z1/it_support_foundations",
      imageFile: "it-support-foundations-certificate.png"
    },
    {
      name: "Love at First Breach",
      issuer: "TryHackMe",
      issueDate: "2026",
      expirationDate: "2029",
      credentialId: "THM-3CKQ2SIEX3",
      credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-3CKQ2SIEX3.pdf",
      pdfFile: "THM-3CKQ2SIEX3.pdf"
    },
    {
      name: "Hacker Holidays Participation",
      issuer: "TryHackMe",
      issueDate: "2026",
      expirationDate: "2029",
      credentialId: "THM-MCQ79KBFWB",
      credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-MCQ79KBFWB.pdf",
      pdfFile: "THM-MCQ79KBFWB.pdf"
    }
  ];

  const achievements = [
    { title: "Codefest 2024 — 3rd Runner Up", school: "STI College Santa Rosa", year: "2024", image: "/Achievements/Codefest.jpg" },
    { title: "Senior High School — With Honors", school: "Lumil Integrated National High School", year: "Grade 12 · 2022", image: "/Achievements/Senior High.jpg" },
    { title: "Grade 10 — With Honors", school: "San Francisco National Agricultural and Trade High School", year: "2020", image: "/Achievements/Grade10.jpg" },
    { title: "Grade 9 — With Honors", school: "San Francisco National Agricultural and Trade High School", year: "2019", image: "/Achievements/Grade9.jpg" },
    { title: "Grade 8 — With Honors", school: "San Francisco National Agricultural and Trade High School", year: "2018", image: "/Achievements/Grade8.jpg" },
    { title: "Grade 8 — 2nd Place, Rational DaMath (District)", school: "San Francisco National Agricultural and Trade High School", year: "2017", image: "/Achievements/DistrictDamath.jpg" },
    { title: "Grade 8 — Participant, Mathematical Investigatory Project (Regional in Benguet)", school: "San Francisco National Agricultural and Trade High School", year: "2017", image: "/Achievements/MIP.jpg" },
    { title: "Grade 8 — 1st Place, Mathematical Investigatory Project (Division)", school: "San Francisco National Agricultural and Trade High School", year: "2017", image: "/Achievements/achievement-placeholder.svg" },
    { title: "Grade 7 — With Honors", school: "San Francisco National Agricultural and Trade High School", year: "2016", image: "/Achievements/Grade7.jpg" },
    { title: "Grade 7 — Participant, Mathematical Investigatory Project (Regional in Abra)", school: "San Francisco National Agricultural and Trade High School", year: "2016", image: "/Achievements/achievement-placeholder.svg" },
    { title: "Grade 7 — 1st Place, Mathematical Investigatory Project (Division)", school: "San Francisco National Agricultural and Trade High School", year: "2016", image: "/Achievements/achievement-placeholder.svg" },
    { title: "Grade 7 — 3rd Place, Integer DaMath (Division)", school: "San Francisco National Agricultural and Trade High School", year: "2016", image: "/Achievements/achievement-placeholder.svg" },
    { title: "Grade 7 — 1st Place, Integer DaMath (District)", school: "San Francisco National Agricultural and Trade High School", year: "2016", image: "/Achievements/achievement-placeholder.svg" }
  ];

  // Category color map for project types.
  // `text` is used on light surfaces, `textDark` on dark surfaces — the light-mode
  // shades don't have enough contrast against the dark card background.
  const categoryColors = {
    'Featured':       { bg: '#F59E0B', text: '#D97706', textDark: '#FCD34D', border: '#F59E0B' },
    'IoT':            { bg: '#3B82F6', text: '#2563EB', textDark: '#93C5FD', border: '#3B82F6' },
    'Game':           { bg: '#EF4444', text: '#DC2626', textDark: '#FCA5A5', border: '#EF4444' },
    'Websites':       { bg: '#F97316', text: '#EA580C', textDark: '#FDBA74', border: '#F97316' },
    'Mobile':         { bg: '#10B981', text: '#059669', textDark: '#6EE7B7', border: '#10B981' },
    'Windows Forms':  { bg: '#8B5CF6', text: '#7C3AED', textDark: '#C4B5FD', border: '#8B5CF6' },
    'Desktop':        { bg: '#06B6D4', text: '#0891B2', textDark: '#67E8F9', border: '#06B6D4' },
  };

  // Dynamically extract unique technologies from all projects
  // Curated tech stack with categories
  const techCategories = [
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Web & Frontend' },
    { id: 'mobile', label: 'Mobile & Desktop' },
    { id: 'backend', label: 'Backend & Databases' },
    { id: 'tools', label: 'Tools & Libraries' },
  ];

  const techStack = [
    // Languages
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'languages' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'languages' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: 'languages' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'languages' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'languages' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', category: 'languages' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', category: 'languages' },
    { name: 'HTML5 / CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'languages' },

    // Frontend & Web
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', darkBg: true, category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', category: 'frontend' },
    { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg', darkBg: true, category: 'frontend' },

    // Mobile & Desktop
    { name: 'Android SDK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', category: 'mobile' },
    { name: 'Jetpack Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg', category: 'mobile' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'mobile' },
    { name: 'Capacitor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/capacitor/capacitor-original.svg', category: 'mobile' },
    { name: 'WPF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', darkBg: true, category: 'mobile' },
    { name: 'Windows Forms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', darkBg: true, category: 'mobile' },
    { name: '.NET Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', category: 'mobile' },
    { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', darkBg: true, category: 'mobile' },

    // Backend & Databases
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', category: 'backend' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', category: 'backend' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'backend' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', category: 'backend' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'backend' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', category: 'backend' },
    { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg', category: 'backend' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'backend' },

    // Tools & Libraries
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'tools' },
    { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', category: 'tools' },
    { name: 'FFmpeg', icon: 'https://cdn.simpleicons.org/ffmpeg', category: 'tools' },
    { name: 'Cloudflare R2', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg', category: 'tools' },
  ];

  const seminars = [
    {
      name: "Hytec Power Inc.",
      description: "Industry seminar experience focused on professional exposure, technology practices, and learning from an established power and engineering company.",
      website: "https://hytecpower.com/",
      image: "/Seminars/Hytec.jpg"
    }
  ];

  const projects = [
    // ── Mobile (newest → oldest) ──
    {
      id: 12,
      title: "SeismicWatch",
      logo: "/Portfolio/OfficialThumbnails/optimized/SeismicWatch.webp",
      subtitle: "Hazard & Emergency Safety App",
      type: "Mobile",
      desc: "Comprehensive Philippine disaster preparedness app with earthquake tracking, family location sharing, SOS, and offline mesh relay.",
      longDesc: "Gising! (Filipino for 'Wake up!') is a free Philippine hazard and emergency safety app. Features real-time earthquake tracking from USGS/PHIVOLCS via Supabase Realtime WebSocket, typhoon/cyclone tracking from GDACS/PAGASA, live weather for 40+ Philippine cities via Open-Meteo, family location sharing (Life360-style circles) with foreground/background GPS, emergency SOS from app/Quick Settings tile/widget/power-button panic gesture, offline P2P mesh relay via Nearby Connections, in-app encrypted chat, emergency contacts with auto-SMS/call, first aid overlay, alarm siren, and 5 switchable launcher icon themes. Built free-tier-first with Firebase + Supabase.",
      tech: ["Kotlin", "Jetpack Compose", "Room + SQLCipher", "Firebase", "Supabase", "MapLibre", "Nearby Connections", "WorkManager", "Glance", "Coil"],
      stats: { platform: "Android", year: "2026", features: "15+", status: "In Development" },
      link: "https://github.com/Kuraisura/SeismicWatch",
      date: "June 11, 2026",
      size: "medium",
      color: "bg-emerald-600",
      gradient: "from-emerald-600/20 to-teal-500/20",
      screenshots: [
        "/Portfolio/SeismicWatch/1.jpg",
        "/Portfolio/SeismicWatch/2.jpg",
        "/Portfolio/SeismicWatch/3.jpg",
        "/Portfolio/SeismicWatch/4.jpg",
        "/Portfolio/SeismicWatch/5.jpg",
        "/Portfolio/SeismicWatch/6.jpg",
        "/Portfolio/SeismicWatch/7.jpg",
        "/Portfolio/SeismicWatch/8.jpg",
        "/Portfolio/SeismicWatch/9.jpg",
        "/Portfolio/SeismicWatch/10.jpg",
        "/Portfolio/SeismicWatch/11.jpg",
        "/Portfolio/SeismicWatch/12.jpg",
        "/Portfolio/SeismicWatch/13.jpg",
        "/Portfolio/SeismicWatch/14.jpg"
      ],
      howMade: "Single-Activity Compose-only UI with MVVM + Repository pattern (13 repositories). Dual backend: Firebase (Auth, Firestore, FCM, App Check) for social/location layer, Supabase (PostgREST, Realtime) for hazard data — all on free tiers. Room + SQLCipher for encrypted local storage. MapLibre for open-source OSM map tiles (no API key). Foreground services for persistent earthquake monitoring, location sharing, and mesh relay. Nearby Connections (BLE + Wi-Fi) for offline P2P SOS relay. Glance for home-screen widgets. 5 launcher icon themes via activity-alias toggling. Supabase Edge Functions (pg_cron) scrape PHIVOLCS + PAGASA data into Supabase Postgres."
    },
    {
      id: 17,
      title: "STIRAMS Web",
      subtitle: "RFID Attendance Dashboard",
      type: "Websites",
      desc: "Real-time web dashboard for RFID attendance monitoring with DTR generation, leave management, and analytics.",
      longDesc: "STI RAMS Web is the dashboard component of the RFID-based employee attendance system built for STI College Santa Rosa. Built with Next.js 14 App Router, it provides real-time monitoring of RFID card tap-ins and tap-outs, DTR (Daily Time Record) generation, leave management with manager approval, substitute scheduling, holiday handling, audit logs, and comprehensive reports. Features include Radix UI/shadcn components, PostgreSQL via pg driver, SWR for data fetching, Recharts for analytics, and a hybrid offline/online architecture with GUID-based conflict resolution. Shares the same Supabase backend as the WPF desktop client.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS 4", "PostgreSQL", "SQLite", "Dapper", "Supabase", "Recharts", "Radix UI", "SWQ"],
      stats: { status: "Featured", year: "2026", commits: "116+", platform: "Web" },
      link: "https://github.com/Kuraisura/STIRAMSWEB",
      date: "May 7, 2026",
      size: "large",
      color: "bg-orange-500",
      gradient: "from-orange-500/20 to-amber-500/20",
      screenshots: [
        "/Portfolio/STIRAMS(WEB)/1.png",
        "/Portfolio/STIRAMS(WEB)/2.png",
        "/Portfolio/STIRAMS(WEB)/3.png",
        "/Portfolio/STIRAMS(WEB)/4.png",
        "/Portfolio/STIRAMS(WEB)/5.png",
        "/Portfolio/STIRAMS(WEB)/6.png",
        "/Portfolio/STIRAMS(WEB)/7.png",
        "/Portfolio/STIRAMS(WEB)/8.png",
        "/Portfolio/STIRAMS(WEB)/9.png",
        "/Portfolio/STIRAMS(WEB)/10.png",
        "/Portfolio/STIRAMS(WEB)/11.png",
        "/Portfolio/STIRAMS(WEB)/12.png",
        "/Portfolio/STIRAMS(WEB)/13.png",
        "/Portfolio/STIRAMS(WEB)/14.png",
        "/Portfolio/STIRAMS(WEB)/15.png"
      ],
      howMade: "Next.js 14 App Router with Radix UI/shadcn components, PostgreSQL via pg driver, SWR for data fetching, and Recharts for analytics. Shares a Supabase backend with the WPF desktop client. Hybrid offline/online architecture with GUID-based conflict resolution. Developer console and emergency admin recovery features. The web dashboard provides real-time monitoring, DTR generation, leave management, substitute scheduling, holiday handling, audit logs, and reports."
    },
    {
      id: 18,
      title: "STIRAMS WPF",
      subtitle: "RFID Attendance Desktop Client",
      type: "IoT",
      desc: "WPF desktop client that reads HID RFID cards for employee attendance, with offline sync and kiosk mode.",
      longDesc: "STI RAMS WPF is the desktop client component of the RFID-based employee attendance system built for STI College Santa Rosa. Written in C# with .NET 8 and WPF, it reads HID RFID card taps via USB auto-detected readers (WMI), displays employee profile photos, and manages clock-in/clock-out with local SQLite storage and background PostgreSQL sync. Features include MVVM architecture with CommunityToolkit.Mvvm, MaterialDesignThemes UI, 30+ services (attendance validation, holiday handling, RFID detection, schedule caching), full-screen kiosk tap-in mode, and emergency admin recovery.",
      tech: ["C#", ".NET 8", "WPF", "MaterialDesign", "SQLite", "PostgreSQL", "Supabase", "WMI", "CommunityToolkit.Mvvm"],
      stats: { status: "Featured", year: "2026", platform: "Windows" },
      link: "https://github.com/Kuraisura/STIRAMSWPF",
      date: "May 7, 2026",
      size: "large",
      color: "bg-blue-600",
      gradient: "from-blue-600/20 to-cyan-500/20",
      screenshots: [
        "/Portfolio/STIRAMS(WPF)/1.png",
        "/Portfolio/STIRAMS(WPF)/2.png",
        "/Portfolio/STIRAMS(WPF)/3.png",
        "/Portfolio/STIRAMS(WPF)/4.png",
        "/Portfolio/STIRAMS(WPF)/5.png"
      ],
      howMade: "WPF desktop client using MVVM architecture with CommunityToolkit.Mvvm, 30+ services (attendance validation, holiday handling, RFID detection, schedule caching), and MaterialDesignThemes UI. Runs as a kiosk with full-screen tap-in mode. Auto-detects USB RFID readers via WMI and syncs offline attendance to PostgreSQL in the background. Shares a Supabase backend with the web dashboard."
    },
    {
      id: 13,
      title: "Neural Lens",
      subtitle: "Facial Recognition Attendance System",
      type: "IoT",
      desc: "Enterprise facial recognition attendance with Flask web UI, role-based access, Docker deployment, and system monitoring.",
      longDesc: "Neural Lens (internally 'Neural Eye') is an enterprise-grade facial recognition attendance system. Enrolls employees via webcam, stores encrypted 128-dimensional face encodings (no raw images), and auto clocks in/out when recognized. Calculates attendance status (ON-TIME, LATE, UNDERTIME, OVERTIME) with configurable work hours and grace periods. Full employee lifecycle management: departments, positions, shifts, leave requests with manager approval. Web dashboard for real-time monitoring and reporting. Features AES-256-GCM encryption, multi-role auth (admin/manager/viewer), structured JSON logging, system health monitoring (CPU/memory/disk/temperature), backup/restore with SHA-256 verification, Docker deployment, and GitHub Actions CI/CD.",
      tech: ["Python", "Flask", "OpenCV", "face_recognition", "SQLite", "Docker", "GitHub Actions", "pytest", "bcrypt"],
      stats: { platform: "Web + Embedded", year: "2025", apiEndpoints: "20+", status: "In Development" },
      link: "https://github.com/Kuraisura/NeuralLens",
      date: "December 26, 2025",
      size: "large",
      color: "bg-blue-600",
      gradient: "from-blue-600/20 to-cyan-500/20",
      howMade: "4-layer architecture: Presentation (Web UI HTML templates + REST API JSON + MJPEG video stream), Application (face recognition, attendance logic, employee/leave management), Core (SQLite database, security, logging, config, cache, watchdog), HAL (camera interface with USB/CSI/Mock support, storage, network, GPIO). Uses face-recognition library (dlib-based) with OpenCV for camera capture. Thread-safe camera reader with timeout protection. Mock camera mode for development. Repository pattern for database abstraction, Factory pattern for camera devices, Observer pattern for notifications. Docker multi-stage build with health checks. pytest + coverage + benchmarks for testing. CI/CD via GitHub Actions with Black/isort/Flake8/Pylint/MyPy/Bandit code quality checks."
    },
    // ── Websites (newest → oldest) ──
    {
      id: 8,
      title: "YT Converter",
      subtitle: "Media Conversion Web App",
      type: "Websites",
      desc: "Queue-based YouTube to MP3/MP4 converter with playlist support, quality selection, and Cloudflare R2 storage.",
      longDesc: "YT Converter is a full-stack web application that converts YouTube videos and playlists to MP3 or MP4. Users paste a YouTube URL, choose format (MP3 128-320kbps / MP4 360-1080p), and the app fetches metadata, downloads via yt-dlp, converts with FFmpeg, uploads to Cloudflare R2, and serves a presigned download URL. Features include queue-based async processing with Upstash Redis, animated 5-state UI (idle→fetching→selection→processing→success), playlist ZIP archival, real-time progress polling, mobile 'Pocket mode' with action sheet, and scheduled R2 cleanup.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "FFmpeg", "yt-dlp", "Cloudflare R2", "Upstash Redis", "Docker", "Radix UI"],
      stats: { type: "Utility", year: "2026", apiEndpoints: "9", platform: "Web" },
      link: "https://github.com/Kuraisura/YTConverter",
      website: "https://ytconverter-vt6g.onrender.com/",
      date: "May 10, 2026",
      size: "small",
      color: "bg-orange-500",
      gradient: "from-orange-500/20 to-amber-500/20",
      screenshots: [
        "/Portfolio/YT Converter/1.png",
        "/Portfolio/YT Converter/2.png",
        "/Portfolio/YT Converter/3.png"
      ],
      howMade: "Queue-based architecture: Browser → POST /api/convert → Redis Queue → background worker (queue-worker.js) polls every 2s → processor downloads with yt-dlp, converts with FFmpeg (fluent-ffmpeg), uploads to Cloudflare R2 via AWS SDK → serves presigned URL. Frontend uses Framer Motion for physics-based animations and AnimatePresence for state transitions. 58 shadcn/ui components, Radix UI primitives, and Orbitron custom font. Docker deployment with Alpine Node 18 + ffmpeg + Python + yt-dlp. Mobile-optimized with responsive breakpoints and 'Pocket mode' action sheet."
    },
    {
      id: 5,
      title: "Raiko",
      subtitle: "E-Commerce Website",
      type: "Websites",
      desc: "A front-end anime merchandise storefront with hero banners, product grids, and a checkout flow.",
      longDesc: "Raiko is a static front-end e-commerce website for selling anime/Japanese/Korean-themed t-shirts and merchandise. Features a hero banner with trade-in offers, featured products and new arrivals sections with anime character shirts (Eren Yeager, Anya, Gojo Satoru, Makima), product detail pages, and a shopping cart. Pricing in Philippine Pesos. Built as a learning project following a web development tutorial.",
      tech: ["HTML", "CSS", "JavaScript"],
      stats: { year: "2024", pages: "7", platform: "Web" },
      link: "https://github.com/Kuraisura/Raiko",
      website: "https://raiko-three.vercel.app/",
      date: "May 7, 2024",
      size: "small",
      color: "bg-orange-500",
      gradient: "from-orange-500/20 to-amber-500/20",
      screenshots: [
        "/Portfolio/Raiko/home.png",
        "/Portfolio/Raiko/shop.png",
        "/Portfolio/Raiko/about.png",
        "/Portfolio/Raiko/blog.png",
        "/Portfolio/Raiko/contact.png"
      ],
      howMade: "Pure vanilla HTML/CSS/JS — no frameworks or build tools. 7 pages (index, shop, blog, about, contact, cart, sproduct) with custom CSS (523 lines) using Google Fonts (Spartan). Product images organized in subdirectories (img/products/, img/banner/, img/blog/). The index page is fully built out with hero banners, featured products, and new arrivals grids. Other pages are structured shells. Built as a learning exercise following a web development tutorial."
    },
    {
      id: 15,
      title: "Chrono Desktop",
      subtitle: "Task & Habit Tracker",
      type: "Desktop",
      desc: "Desktop task and habit tracking application with a Pomodoro timer, streak calendar, and gamified progress.",
      longDesc: "Chrono Desktop is a productivity desktop application for task and habit management with gamification elements. Features include a Pomodoro timer, streak calendar with heat-map visualization, task categories with drag-and-drop reordering, habit tracking with daily and weekly goals, project management with kanban-style boards, and a points-based reward system.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Framer Motion"],
      stats: { type: "Productivity", year: "2026", platform: "Desktop" },
      link: "https://github.com/Kuraisura/ChronoWeb",
      date: "September 12, 2026",
      size: "medium",
      color: "bg-orange-500",
      gradient: "from-orange-500/20 to-amber-500/20",
      howMade: "React single-page application with TypeScript and Tailwind CSS. State management via React Context API with persistence to localStorage. Firebase Authentication for user accounts and Firestore for real-time data sync. Framer Motion for smooth animations and transitions. The Pomodoro timer uses the Web Audio API for sound notifications. Drag-and-drop functionality implemented using React DnD. Streak calendar renders a heat-map using SVG."
    },
    // ── Game ──
    {
      id: 3,
      title: "Silid 1201",
      subtitle: "Survival Horror",
      type: "Game",
      desc: "A first-person Unity horror game — collect 8 pages in an abandoned school while a Weeping Angel-style enemy freezes when looked at.",
      longDesc: "Silid 1201 is a first-person survival-horror school project built in only two days. The player explores an abandoned school, manages a flashlight and sprint stamina, collects scattered ritual pages, and survives an enemy that freezes while being watched.",
      tech: ["Unity 6", "C#", "URP 17", "Unity Input System", "Barracuda 3.0", "NavMesh", "Timeline", "TextMeshPro", "GLTFast"],
      stats: { genre: "Horror", year: "2025", scripts: "130+", engine: "Unity 6000.2" },
      link: "https://github.com/Kuraisura/Silid1201",
      date: "November 20, 2025",
      size: "large",
      color: "bg-red-900",
      gradient: "from-red-900/40 to-black/60",
      screenshots: [
        "/Portfolio/Silid 1201/1.png",
        "/Portfolio/Silid 1201/2.png",
        "/Portfolio/Silid 1201/3.png",
        "/Portfolio/Silid 1201/4.png",
        "/Portfolio/Silid 1201/5.png"
      ],
      showcase: ["/Portfolio/Silid 1201/Showcase/gameplay.mp4"],
      howMade: "Created in two days for a school project using Unity 6 and the Universal Render Pipeline (URP). The enemy uses Unity AI Navigation (NavMesh) and a visibility system that freezes it when the player looks at it. Player movement uses Unity's Input System, while dedicated components manage the flashlight, stamina, collectibles, HUD, doors, and cutscenes."
    },
    // ── Mobile (newest → oldest) ──
    {
      id: 14,
      title: "Wiz",
      subtitle: "AI-Powered Study Platform",
      type: "Mobile",
      desc: "Cross-platform study app that generates quizzes from documents, flashcards, and camera OCR with multi-provider AI chain.",
      longDesc: "Wiz is an AI-powered learning platform that transforms study materials into interactive quizzes and flashcards. Users upload PDF, DOCX, PPTX, or EPUB files and the app uses a multi-provider AI chain (Groq → Gemini → Cerebras → OpenRouter) to generate quiz questions. Features include a Scan-to-Quiz camera mode with hybrid OCR (Supabase Edge Functions, AI Vision, Tesseract.js), spaced-repetition flashcards, a cloud-synced document library, and a Pro subscription via PayMongo. Built as a hybrid web + mobile app using Capacitor for iOS and Android.",
      tech: ["React 19", "Vite 8", "Tailwind CSS 3", "Supabase", "Capacitor", "Groq", "Gemini", "Cerebras", "OpenRouter", "PayMongo", "Tesseract.js"],
      stats: { platforms: "Web, iOS, Android", year: "2026", aiProviders: "4", status: "In Development" },
      link: "https://github.com/Kuraisura/Wiz",
      date: "September 8, 2026",
      size: "large",
      color: "bg-emerald-600",
      gradient: "from-emerald-600/20 to-teal-500/20",
      screenshots: [
        "/Portfolio/Wiz/1.png",
        "/Portfolio/Wiz/2.png",
        "/Portfolio/Wiz/3.png",
        "/Portfolio/Wiz/4.png",
        "/Portfolio/Wiz/5.png",
        "/Portfolio/Wiz/6.png",
        "/Portfolio/Wiz/7.png",
        "/Portfolio/Wiz/8.png",
        "/Portfolio/Wiz/9.png",
        "/Portfolio/Wiz/10.png",
        "/Portfolio/Wiz/11.png",
        "/Portfolio/Wiz/12.png",
        "/Portfolio/Wiz/13.png",
        "/Portfolio/Wiz/14.png"
      ],
      howMade: "React 19 + Vite 8 SPA with Tailwind CSS 3 styling. Supabase handles auth, database (document library, flashcard progress), and Edge Functions for OCR processing. AI quiz generation uses a multi-provider chain with automatic fallback: Groq (fastest) → Gemini → Cerebras → OpenRouter. Camera mode uses Capacitor Camera API + hybrid OCR pipeline (Supabase Edge Functions for server-side processing, AI Vision as fallback, Tesseract.js for client-side). Spaced-repetition algorithm for flashcard scheduling. PayMongo integration for Pro subscription payments. Capacitor wraps the web app for native iOS/Android deployment."
    },
    {
      id: 9,
      title: "Musikk",
      subtitle: "AI Music Stem Separation",
      type: "Mobile",
      desc: "AI-powered Android app that splits songs into individual instrument tracks with a DAW-like mixer and practice tools.",
      longDesc: "Musikk is an AI-powered music stem separation Android app — a mobile alternative to Moises or BandLab. Upload an audio file, and the app splits it into individual instrument tracks (vocals, drums, bass, guitar, piano, etc.) using Demucs/HTDemucs models via a local Python backend or Hugging Face cloud inference. Features a DAW-like mixing console with per-stem volume/mute/solo, audio effects (EQ, reverb, delay, chorus, compression, noise reduction), practice tools (A/B loop, metronome, chord reader, key transposer), repertoire management, and user accounts with credit-based AI usage tracking.",
      tech: ["Kotlin", "Jetpack Compose", "Media3 ExoPlayer", "FastAPI", "Demucs", "Firebase Auth", "Cloudflare R2", "Cloud Firestore", "OkHttp", "Retrofit"],
      stats: { platform: "Android", year: "2026", stemPresets: "10", status: "In Development" },
      link: "https://github.com/Kuraisura/Musikk",
      date: "August 1, 2026",
      size: "medium",
      color: "bg-emerald-600",
      gradient: "from-emerald-600/20 to-teal-500/20",
      screenshots: [
        "/Portfolio/Musikk/1.jpg",
        "/Portfolio/Musikk/2.jpg",
        "/Portfolio/Musikk/3.jpg",
        "/Portfolio/Musikk/4.jpg",
        "/Portfolio/Musikk/5.jpg",
        "/Portfolio/Musikk/6.jpg",
        "/Portfolio/Musikk/7.jpg",
        "/Portfolio/Musikk/8.png"
      ],
      howMade: "Single-Activity Compose app with NavHost (Splash → Onboarding → 4 main tabs: Stems, Practice, Repertoire, Profile). Stem separation runs on a local FastAPI server (Demucs v4 CLI subprocess) or Hugging Face Inference API. Separated stems uploaded to Cloudflare R2 with custom AWS4-HMAC-SHA256 signing in pure Kotlin. Mixer uses up to 10 parallel ExoPlayer instances with synchronized playback. Audio effects chain includes Android audiofx (Equalizer, BassBoost) + custom PureKotlinAudioProcessor for speed/pitch. Firebase Auth for user accounts, Firestore for song library. Subscription model UI built (free 20 mins/month, $4.99 monthly, $11.99 pro) but payments not yet wired."
    },
    {
      id: 16,
      title: "Chrono Android",
      subtitle: "Task & Habit Tracker",
      type: "Mobile",
      desc: "Android task and habit tracking app with Pomodoro timer, streak calendar, and gamified progress built with Jetpack Compose and Kotlin.",
      longDesc: "Chrono Android is a productivity mobile application for task and habit management with gamification elements. Features include a Pomodoro timer, streak calendar with heat-map visualization, task categories with drag-and-drop reordering, habit tracking with daily/weekly goals, and a points-based reward system. Built with Jetpack Compose following modern Android architecture best practices.",
      tech: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Navigation Compose", "WorkManager", "Firebase Firestore"],
      stats: { platform: "Android", year: "2026", status: "In Development" },
      link: "https://github.com/Kuraisura/ChronoAndroid",
      date: "September 12, 2026",
      size: "medium",
      color: "bg-emerald-600",
      gradient: "from-emerald-600/20 to-teal-500/20",
      howMade: "Jetpack Compose Single-Activity architecture with MVVM + Repository pattern. Room database for local task/habit storage with encrypted SQLCipher. Hilt for dependency injection. WorkManager for Pomodoro timer background tasks. Firebase Firestore for cross-device sync. Navigation Compose for tab-based navigation."
    },
    {
      id: 19,
      title: "STITimer",
      subtitle: "Countdown Timer for STI College",
      type: "Windows Forms",
      desc: "A countdown timer application built in a 12-hour sprint for a college event at STI College Santa Rosa.",
      longDesc: "STITimer is a Windows Forms countdown timer application built in just 12 hours before an event at STI College Santa Rosa. Created as part of the STIRams project ecosystem, it provides a clean, reliable countdown display for event timing. The application was developed under extreme time pressure and deployed successfully for the school event. The project demonstrates rapid prototyping and delivery under tight deadlines.",
      tech: ["C#", ".NET Framework", "Windows Forms"],
      stats: { platform: "Windows", year: "2026" },
      link: "https://github.com/Kuraisura/STITimer",
      date: "March 4, 2026",
      size: "medium",
      color: "bg-purple-600",
      gradient: "from-purple-600/20 to-indigo-500/20",
      screenshots: [
        "/Portfolio/STITimer/1.png",
        "/Portfolio/STITimer/2.png",
        "/Portfolio/STITimer/3.png",
        "/Portfolio/STITimer/4.png",
        "/Portfolio/STITimer/5.png",
        "/Portfolio/STITimer/6.png",
        "/Portfolio/STITimer/7.png",
        "/Portfolio/STITimer/8.png",
        "/Portfolio/STITimer/9.png",
        "/Portfolio/STITimer/10.png",
        "/Portfolio/STITimer/11.png"
      ],
      showcase: [
        "/Portfolio/STITimer/Events/1.png",
        "/Portfolio/STITimer/Events/2.png",
        "/Portfolio/STITimer/Events/3.png",
        "/Portfolio/STITimer/Events/4.png"
      ],
      howMade: "Built in a 12-hour sprint using C# and Windows Forms. The application was created under extreme time pressure before an STI College Santa Rosa event. It provides a reliable countdown display for event timing. Developed as part of the STIRams project ecosystem."
    },
    {
      id: 10,
      title: "RN Ready",
      subtitle: "Nursing Board Exam Prep",
      type: "Mobile",
      desc: "Open-source Flutter study app with AI tutoring, anatomy quizzes, care plans, and MCQ banks for PNLE/NCLEX.",
      longDesc: "RN Ready is a free, open-source Flutter mobile study app for nursing board exam prep (PNLE/NCLEX). Features AI tutoring with multi-provider fallback (Groq → Gemini → OpenRouter), interactive anatomy quizzes with diagrams, AI-assisted care plan generation, clinical scenario quizzes, dynamic MCQ quiz banks with progress tracking, study modules with slide viewers, note-taking, and offline-capable content. Built with a feature-based modular architecture using Riverpod for state management, clinical-navy palette with glassmorphism UI, and dual-font offline typography.",
      tech: ["Flutter 3", "Dart", "Riverpod", "Groq", "Gemini", "OpenRouter", "Flutter Markdown", "Google Fonts", "SharedPreferences"],
      stats: { platforms: "Android, iOS, Web, Windows", year: "2026", status: "In Development" },
      link: "https://github.com/Kuraisura/RNReady",
      date: "June 12, 2026",
      size: "large",
      color: "bg-teal-600",
      gradient: "from-teal-600/20 to-emerald-500/20",
      screenshots: [
        "/Portfolio/Rn Ready/1.png",
        "/Portfolio/Rn Ready/2.png",
        "/Portfolio/Rn Ready/3.png",
        "/Portfolio/Rn Ready/4.png",
        "/Portfolio/Rn Ready/8.png",
        "/Portfolio/Rn Ready/9.png",
        "/Portfolio/Rn Ready/10.png",
        "/Portfolio/Rn Ready/11.png",
        "/Portfolio/Rn Ready/12.png",
        "/Portfolio/Rn Ready/13.png",
        "/Portfolio/Rn Ready/14.png",
        "/Portfolio/Rn Ready/15.png"
      ],
      howMade: "Clean feature-based modular structure: core/ (animations, router, theme, widgets), data/ (models, services), features/ (ai_tutor, anatomy, care_plan, clinical_quiz, mcq_quiz, module_slides, module_viewer, notes). Riverpod ProviderScope wraps the app with ThemeController injected as provider override. AI tutoring uses http package with automatic provider fallback chain (Groq → Gemini → OpenRouter/Anthropic). Content stored as JSON-backed slides in assets/study/slides/. Dual-font offline typography (Playfair Display + Inter) via bundled TTFs. Light/dark theme persisted with SharedPreferences.",
      landscapeIndices: []
    },
    {
      id: 6,
      title: "JournalEase",
      subtitle: "Android Journaling App",
      type: "Mobile",
      desc: "Android note-taking app with color-coded notes, PDF/DOCX export, and staggered grid layout.",
      longDesc: "JournalEase is a Java Android journaling application with full CRUD operations on notes. Features include color-coded notes displayed in a Pinterest-style 2-column staggered grid, export to PDF (iTextG) and DOCX (Apache POI), animated RecyclerView items, popup menus for edit/delete/export, session management via SharedPreferences, and a splash screen with animations. Originally forked from a Firebase-based tutorial, modified to work fully offline with local SharedPreferences storage.",
      tech: ["Java", "Android SDK", "iTextG 5.5", "Apache POI", "SharedPreferences", "Material Design"],
      stats: { platform: "Android", year: "2022", minSDK: "26", targetSDK: "33" },
      link: "https://github.com/Kuraisura/Journal-Ease",
      date: "May 22, 2022",
      size: "medium", 
      color: "bg-green-600",
      gradient: "from-green-600/20 to-emerald-500/20",
      screenshots: [
        "/Portfolio/JournalEase/1.png",
        "/Portfolio/JournalEase/2.png",
        "/Portfolio/JournalEase/3.png",
        "/Portfolio/JournalEase/4.png",
        "/Portfolio/JournalEase/5.png",
        "/Portfolio/JournalEase/6.png"
      ],
      howMade: "Activity-based Android architecture (no fragments/ViewModel). Data stored in SharedPreferences as JSON-serialized note list via LocalNoteStore singleton. Each note gets a random background color from a 10-color palette. PDF export uses Android PdfDocument + iTextG 5.5, DOCX export uses Apache POI poi-ooxml 4.1.2. RecyclerView with StaggeredGridLayoutManager for the Pinterest-style grid. Originally a Firebase tutorial project (NotesAppInAndroidStudio), modified to remove Firebase and use local storage only — making it work fully offline in demo mode."
    },
    // ── Windows Forms (newest → oldest) ──
    {
      id: 7,
      title: "Pet Haven",
      subtitle: "Pet Shop POS System",
      type: "Windows Forms",
      desc: "Full-featured pet shop point-of-sale system with inventory, billing, PDF receipts with QR codes, and transaction history.",
      longDesc: "Pet Haven is a complete desktop POS system for a physical pet shop in Santa Rosa, Laguna. Manages employees (admin/employee roles), product inventory categorized by animal type (Dog, Cat, Bird, Fish), customer records, billing with cash/change calculation, and transaction history. Generates PDF receipts with company logo, product table, and QR codes encoding transaction numbers. Features role-based access, real-time dashboard with category-level inventory counts, auto-incrementing transaction numbers, and product stock validation to prevent overselling.",
      tech: ["C#", ".NET Framework 4.7.2", "Windows Forms", "SQL Server", "Guna.UI2", "iTextSharp", "QRCoder", "PDFsharp", "BouncyCastle"],
      stats: { status: "Featured", year: "2024", platform: "Windows", publisher: "TeamPetHaven" },
      link: "https://github.com/Kuraisura/Pet-Haven",
      date: "May 24, 2024",
      size: "small",
      color: "bg-purple-600",
      gradient: "from-purple-600/20 to-pink-500/20",
      screenshots: [
        "/Portfolio/PetHaven/1.png",
        "/Portfolio/PetHaven/2.png",
        "/Portfolio/PetHaven/3.png",
        "/Portfolio/PetHaven/4.png",
        "/Portfolio/PetHaven/5.png",
        "/Portfolio/PetHaven/6.png",
        "/Portfolio/PetHaven/7.png",
        "/Portfolio/PetHaven/8.png"
      ],
      howMade: "Traditional WinForms code-behind architecture — each form manages its own database queries via SqlConnection/SqlCommand. SQL Server LocalDB .mdf file (dbPetHaven.mdf) stores all data in 4 tables (Employee, Product, Customer, Billing). SplashForm → LoginForm (BINARY_CHECKSUM auth) → MainForm hub. Product categories filter by animal type. Billing calculates cash/change in real-time. PDF receipts generated with iTextSharp (company branding, product table, totals) and QRCoder (transaction QR code). Guna.UI2 provides the UI theme with rounded controls and modern styling."
    },
    {
      id: 4,
      title: "St. Benedict Hospital Management System",
      subtitle: "Hospital Management System",
      type: "Windows Forms",
      desc: "Desktop hospital system for patient records, doctor appointments, billing, prescriptions, surgical procedures, and clinical encounters.",
      longDesc: "St. Benedict is a full-featured hospital management system built across 8 iterative versions. It manages patient records, doctor scheduling, appointments, medical histories, clinical encounter records, billing with iTextSharp PDF receipts, prescriptions with disease-to-drug mappings, surgical procedures, and clinic-hour scheduling. Two roles: doctors get a focused dashboard (patients, appointments, medical history), front desk staff get the full management suite. Uses SQL Server LocalDB with ADO.NET data access and Guna.UI2 for a polished interface.",
      tech: ["C#", ".NET Framework 4.7.2", "Windows Forms", "SQL Server", "Guna.UI2", "iTextSharp", "QRCoder", "BouncyCastle", "Newtonsoft.Json"],
      stats: { status: "Featured", year: "2024", versions: "8", platform: "Windows" },
      link: "https://github.com/Kuraisura/StBenedict",
      date: "December 13, 2024",
      size: "small",
      color: "bg-emerald-600",
      gradient: "from-emerald-600/20 to-teal-500/20",
      screenshots: [
        "/Portfolio/St.Benedict/1.png",
        "/Portfolio/St.Benedict/2.png",
        "/Portfolio/St.Benedict/3.png",
        "/Portfolio/St.Benedict/4.png",
        "/Portfolio/St.Benedict/5.png",
        "/Portfolio/St.Benedict/6.png"
      ],
      howMade: "Built iteratively across 8 versions in WinForms. Started with basic CRUD forms (v1.0), added typed datasets and dbConnect class (v2.0), clinical encounter records (v3.0), prescription and surgical procedure modules with disease-to-drug/surgery cost mappings (v4.0-6.0), and doctor-specific dashboards with PDF/QR generation (v8.0). Uses ADO.NET (SqlConnection/SqlCommand/SqlDataAdapter) for all database operations against SQL Server LocalDB .mdf files. UI powered by Guna.UI2 components. iTextSharp generates PDF receipts, QRCoder generates QR codes for patient records."
    }
  ];

  // Curated "best of so far" set. Order here is the order they are shown in.
  const FEATURED_TITLES = ['RN Ready', 'Wiz', 'Musikk', 'STIRAMS Web', 'STIRAMS WPF'];

  const sortedProjects = activeTab === 'featured'
    ? FEATURED_TITLES.map((title) => projects.find((p) => p.title === title)).filter(Boolean)
    : [...projects].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });

  const filteredProjects = activeTab === 'all' || activeTab === 'featured'
    ? sortedProjects 
    : sortedProjects.filter(p => {
        if (activeTab === 'IoT') return p.type === 'IoT';
        if (activeTab === 'Websites') return p.type === 'Websites';
        if (activeTab === 'Mobile') return p.type === 'Mobile';
        if (activeTab === 'Windows Forms') return p.type === 'Windows Forms';
        if (activeTab === 'Game') return p.type === 'Game';
        if (activeTab === 'Desktop') return p.type === 'Desktop';
        return false;
        });

  const groupedProjects = (() => {
    const groups = {};
    filteredProjects.forEach((project) => {
      if (!groups[project.type]) groups[project.type] = [];
      groups[project.type].push(project);
    });
    return ['Mobile', 'Websites', 'IoT', 'Windows Forms', 'Game', 'Desktop']
      .filter((category) => groups[category])
      .map((category) => ({ category, projects: groups[category] }));
  })();

  const selectedCertificateUrl = selectedCertificate
    ? selectedCertificate.imageFile
      ? `/Certificates/${encodeURIComponent(selectedCertificate.imageFile)}`
      : selectedCertificate.pdfFile
        ? `/Certificates/${encodeURIComponent(selectedCertificate.pdfFile)}`
        : selectedCertificate.credentialUrl?.includes('drive.google.com/file/d/')
          ? selectedCertificate.credentialUrl.replace(/\/view(?:\?.*)?$/, '/preview')
          : selectedCertificate.credentialUrl
    : '';

  const navItems = ['About', 'Projects', 'Skills', 'Education', 'Achievements', 'Seminars', 'Certificates', 'Contact'];

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-[#FAFAFA] text-[#111] font-sans relative overflow-x-hidden antialiased select-none"
      style={{ backgroundColor: 'var(--page-bg)', color: 'var(--page-text)' }}
    >
      
      {/* Custom Styles for smoothness & animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes tab-click {
          0% { transform: scale(1); }
          50% { transform: scale(0.92); }
          100% { transform: scale(1); }
        }
        @keyframes tab-glow {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px 4px rgba(59, 130, 246, 0.3); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes spark-sweep {
          0% { transform: translateX(-140%) rotate(18deg); opacity: 0; }
          30% { opacity: 0.7; }
          100% { transform: translateX(240%) rotate(18deg); opacity: 0; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-tab-click {
          animation: tab-click 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-tab-glow {
          animation: tab-glow 0.6s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .spark-button {
          isolation: isolate;
          overflow: hidden;
        }
        .spark-button::before {
          content: '';
          position: absolute;
          top: -80%;
          bottom: -80%;
          left: 0;
          width: 28%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
          transform: translateX(-140%) rotate(18deg);
          pointer-events: none;
          z-index: 0;
        }
        .spark-button:hover::before,
        .spark-button:focus-visible::before {
          animation: spark-sweep 0.7s ease-out;
        }
        .spark-button > * {
          position: relative;
          z-index: 1;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        
        /* Smooth Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #e5e5e5; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #d4d4d4; }

        /* Do NOT set scroll-behavior: smooth here. Native smooth scrolling
           fights Lenis's own animation loop and makes scrollTo jump or stall.
           Lenis provides the smoothing. */

        @keyframes project-grid-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-project-grid-in {
          animation: project-grid-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        
        /* Disable text selection */
        body { -webkit-user-select: none; user-select: none; }

        /* Fullscreen Swiper Coverflow */
        .fs-swiper { width: 100%; height: 100%; padding-top: 40px; padding-bottom: 40px; }
        /* Paints the #0a0a0a backdrop back over anything that reaches the screen
           edges so light screenshots never leave a white corner. The 40px top and
           bottom bands match .fs-swiper's padding (the active slide never enters
           them) and 7% is narrower than the active slide's half-width at every
           desktop breakpoint, so the main image is never touched. */
        .fs-edge-fade {
          position: absolute;
          inset: 0;
          z-index: 15;
          pointer-events: none;
          background:
            linear-gradient(to bottom, #0a0a0a 0, rgba(10, 10, 10, 0) 40px, rgba(10, 10, 10, 0) calc(100% - 40px), #0a0a0a 100%),
            linear-gradient(to right, #0a0a0a 0, rgba(10, 10, 10, 0) 7%, rgba(10, 10, 10, 0) 93%, #0a0a0a 100%);
        }
        /* Keep a drag that reaches the edge inside the gallery. */
        .fs-swiper, .modal-swiper { overscroll-behavior: none; }
        .fs-swiper .swiper-slide { transition-property: opacity; }
        .fs-swiper-slide {
          width: 480px;
          height: auto;
          opacity: 0.2;
          transition: opacity 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 480px) { .fs-swiper-slide { width: 240px; } }
        @media (min-width: 640px) { .fs-swiper-slide { width: 520px; } }
        @media (min-width: 768px) { .fs-swiper-slide { width: 640px; } }
        @media (min-width: 1024px) { .fs-swiper-slide { width: 780px; } }
        .fs-swiper-slide.swiper-slide-active {
          opacity: 1;
          z-index: 10;
        }
        /* Neighbours stay hinted but recede into the #0a0a0a backdrop instead of
           reading as a bright slab beside the active slide. */
        .fs-swiper-slide.swiper-slide-prev {
          opacity: 0.2;
        }
        .fs-swiper-slide.swiper-slide-next {
          opacity: 0.2;
        }
        .fs-swiper-slide.swiper-slide-hidden {
          opacity: 0.15;
          pointer-events: none;
        }
        .fs-swiper-slide img,
        .fs-swiper-slide video {
          width: 100%;
          height: auto;
          max-height: 75vh;
          display: block;
          object-fit: contain;
          border-radius: 16px;
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
          touch-action: pan-y;
          backface-visibility: hidden;
        }
        .fs-swiper-slide .swiper-zoom-container { width: 100%; height: 100%; }
        .fs-swiper-slide video { pointer-events: auto; background: #000; }
        @media (min-width: 1024px) {
          .fs-swiper-slide.is-wide-project {
            width: min(1000px, calc(100vw - 80px));
          }
        }
        .fs-swiper-slide.is-landscape img,
        .fs-swiper-slide.is-landscape video {
          object-fit: cover;
          height: 65vh;
          max-height: none;
        }
        @media (max-width: 640px) {
          .fs-swiper-slide.is-landscape img,
          .fs-swiper-slide.is-landscape video {
            object-fit: contain;
            height: 50vh;
            max-height: 50vh;
          }
        }

        /* Mobile fullscreen: YouTube Shorts style — active image fills screen */
        @media (max-width: 639px) {
          .fs-swiper { padding-top: 0; padding-bottom: 0; }
          .fs-swiper .swiper-wrapper { margin: 0; }
          .fs-swiper-slide {
            width: 100vw !important;
            height: 100vh !important;
            padding: 12vh 8vw calc(20vh + 32px);
            opacity: 0;
            transform: none !important;
            transition: opacity 0.25s ease;
            margin: 0 !important;
          }
          .fs-swiper-slide.swiper-slide-active {
            opacity: 1;
            transform: none !important;
            scale: 1;
          }
          .fs-swiper-slide.swiper-slide-prev,
          .fs-swiper-slide.swiper-slide-next {
            transform: none !important;
            opacity: 0;
            pointer-events: none;
          }
          .fs-swiper-slide img,
          .fs-swiper-slide video {
            width: 100%;
            height: 100%;
            max-height: none;
            object-fit: contain;
            border-radius: 12px;
          }
          .fs-swiper-slide .swiper-zoom-container {
            touch-action: none;
            overflow: visible;
          }
          .fs-swiper-slide .swiper-zoom-container img { touch-action: none; }
          .fs-swiper-slide.is-landscape img,
          .fs-swiper-slide.is-landscape video {
            object-fit: contain;
            width: 100%;
            height: 100%;
            max-height: 100%;
          }
          /* Hide nav buttons on mobile fullscreen — swipe only */
          .fs-swiper-prev,
          .fs-swiper-next { display: none !important; }
        }
        .fs-swiper .swiper-button-next,
        .fs-swiper .swiper-button-prev { display: none; }
        /* Modal Swiper Coverflow */
        /* Docked gallery controls: dark frosted pill with a white ring, so it stays
           readable on the white card, the dark gallery header and the black
           fullscreen backdrop alike. */
        .gal-control {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          height: 40px;
          border-radius: 9999px;
          background: rgba(8, 8, 8, 0.85);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 10px 26px -10px rgba(0, 0, 0, 0.7);
          cursor: pointer;
          transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
        }
        .gal-control:hover {
          background: rgba(8, 8, 8, 0.95);
          border-color: rgba(255, 255, 255, 0.45);
          transform: translateY(-1px);
        }
        .gal-control:active { transform: scale(0.96); }
        .gal-control:focus-visible { outline: 2px solid #ffffff; outline-offset: 2px; }
        .gal-control.is-icon { width: 40px; padding: 0; }
        .gal-control.is-pill { padding: 0 13px; font-size: 12px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; }
        .gal-control.is-copied { background: rgba(5, 150, 105, 0.95); border-color: rgba(255, 255, 255, 0.4); }
        .gal-control.is-copied:hover { background: rgba(4, 120, 87, 1); border-color: rgba(255, 255, 255, 0.55); }
        .modal-swiper { width: 100%; height: clamp(212px, 56vw, 232px); touch-action: pan-y; }
        .modal-swiper .swiper-wrapper { transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
        @media (min-width: 640px) { .modal-swiper { height: 400px; } }
        @media (min-width: 768px) { .modal-swiper { height: 460px; } }
        .modal-swiper-slide {
          width: 240px;
          height: auto;
          opacity: 0.7;
          transition: opacity 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        @media (min-width: 640px) { .modal-swiper-slide { width: 300px; } }
        @media (min-width: 768px) { .modal-swiper-slide { width: 360px; } }
        .modal-swiper-slide.swiper-slide-active {
          opacity: 1;
          z-index: 10;
          cursor: pointer;
        }
        .modal-swiper-slide.swiper-slide-prev {
          opacity: 0.75;
        }
        .modal-swiper-slide.swiper-slide-next {
          opacity: 0.75;
        }
        .modal-swiper-slide.swiper-slide-hidden {
          opacity: 0;
          pointer-events: none;
        }
        .modal-swiper-slide img,
        .modal-swiper-slide video {
          width: 100%;
          height: auto;
          max-height: 400px;
          display: block;
          object-fit: contain;
          border-radius: 12px;
          pointer-events: none;
          user-select: none;
          backface-visibility: hidden;
        }
        .modal-swiper-slide .swiper-zoom-container,
        .view-only-player,
        .view-only-player > * {
          width: 100%;
          height: 100%;
        }
        .view-only-player { display: flex; align-items: center; justify-content: center; }
        .view-only-player video { width: 100%; height: 100%; object-fit: contain; }
        .modal-swiper-slide video { pointer-events: auto; background: #000; }
        .modal-swiper-slide.is-landscape img,
        .modal-swiper-slide.is-landscape video {
          object-fit: cover;
          height: 300px;
          max-height: none;
        }
        /* Mobile gallery: compact frame with a wider slide so the image sits
           centered and fully visible (contain, never cropped) while the dialog
           content below stays in view. */
        @media (max-width: 639px) {
          .modal-swiper-slide { width: 78%; }
          .modal-swiper-slide img,
          .modal-swiper-slide video {
            width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: contain;
          }
          .modal-swiper-slide.is-landscape img,
          .modal-swiper-slide.is-landscape video {
            object-fit: contain;
            height: 100%;
            max-height: 100%;
          }
          .fs-swiper-slide.is-landscape img {
            object-fit: contain;
            height: 100vh;
            max-height: 100vh;
          }
        }
        .modal-swiper .swiper-button-next,
        .modal-swiper .swiper-button-prev { display: none; }
        .coverflow-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.12);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
        }
        .coverflow-btn:hover {
          background: rgba(255,255,255,0.25);
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-50%) scale(1.1);
        }
        .coverflow-btn:active {
          transform: translateY(-50%) scale(0.92);
        }
        /* The modal gallery reserves a 28px counter lane on small screens —
           nudge the arrows back to the image centre (fullscreen arrows are
           hidden below 640px, so this only reaches the modal). */
        @media (max-width: 639px) {
          .coverflow-btn { top: calc(50% - 14px); }
        }
        .coverflow-btn.is-prev { left: 8px; }
        .coverflow-btn.is-next { right: 8px; }
        @media (min-width: 640px) {
          .coverflow-btn { width: 48px; height: 48px; }
          .coverflow-btn.is-prev { left: 12px; }
          .coverflow-btn.is-next { right: 12px; }
        }
        @media (min-width: 768px) {
          .coverflow-btn { width: 52px; height: 52px; }
          .coverflow-btn.is-prev { left: 16px; }
          .coverflow-btn.is-next { right: 16px; }
        }
        .coverflow-counter {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.5);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 16px;
          border-radius: 20px;
          z-index: 20;
          letter-spacing: 0.03em;
        }
        /* Fullscreen counter sits on the #0a0a0a overlay, so it uses that exact
           fill to blend. Declared after .coverflow-counter so it wins the cascade. */
        .coverflow-counter-fullscreen {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: #0a0a0a;
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 20px;
          z-index: 20;
          letter-spacing: 0.03em;
        }
        /* Mobile fullscreen: park the count in the lane under the inset image
           (image bottom = 80vh − 32px), clamped so it never slides under the
           bottom sheet on short viewports. */
        @media (max-width: 639px) {
          .coverflow-counter-fullscreen {
            top: min(calc(80vh - 14px), calc(100% - 34px));
            bottom: auto;
            pointer-events: none;
          }
        }
      `}</style>

      {/* A single-cell GPU translation keeps the ambient grid moving without
          animating an oversized background layer or triggering layout work. */}
      {!(selectedProject || selectedAchievement || fullscreenMode) && (
      <div className="ambient-grid-bg fixed z-0 pointer-events-none opacity-[0.4]"
           style={{
             backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      )}

      {showDevtoolsEasterEgg && (
        <aside
          className="devtools-easter-egg fixed right-4 top-20 z-[70] w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          aria-live="polite"
        >
          <button
            type="button"
            onClick={() => setShowDevtoolsEasterEgg(false)}
            className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white"
            aria-label="Close reconnaissance message"
          >
            <X size={16} />
          </button>
          <img
            src="/hapibermonthsmrhacker.webp"
            alt="Kurai reconnaissance easter egg"
            width="639"
            height="426"
            decoding="async"
            className="block h-auto w-full"
          />
          <p className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-200">
            Reconnaissance detected. This is an easter egg, not a security boundary.
          </p>
        </aside>
      )}

      {/* Desktop Navigation - Top Center (Horizontal & Longer) */}
       <nav className="hidden lg:block fixed top-8 left-1/2 -translate-x-1/2 z-50 w-auto min-w-[600px] max-w-[1120px]">
         <div className="flex w-full items-center justify-center gap-2 bg-white/95 dark:bg-gray-900/95 rounded-full px-3 py-2 shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`relative px-5 py-3 text-sm font-semibold rounded-full transition-all duration-300 shrink-0 ${
                isActive
                  ? 'shadow-lg shadow-blue-500/30'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50 spark-button hover:-translate-y-0.5'
              }`}
              style={isActive ? { background: 'linear-gradient(135deg, #4F46E5, #3B82F6)', color: '#fff' } : undefined}
            >
              <span className="relative z-10">{item}</span>
            </button>
            );
          })}
        </div>
      </nav>

       <button
         type="button"
         onClick={toggleTheme}
         aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
         title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
         className="!fixed top-4 right-4 lg:top-8 lg:right-10 z-[60] w-11 h-11 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 shadow-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 spark-button"
       >
         {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
       </button>

       {viewCount !== null && (
         <div
           className="fixed bottom-4 right-4 lg:bottom-8 lg:right-10 z-[60] min-h-11 px-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-200 shadow-lg flex items-center gap-2 text-xs font-semibold tabular-nums"
           aria-live="polite"
           title="Live portfolio views"
         >
           <Eye size={16} />
           {viewCount.toLocaleString()} views
         </div>
       )}

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-20">
        
        {/* 1. ABOUT SECTION (Hero) */}
        <section id="about" className="hero-section min-h-screen flex items-center py-20 lg:py-32 scroll-mt-0">
          <div className="w-full animate-fade-in-up">
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-between">
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-[-0.04em] text-[#111] mb-4 leading-[0.95]">
                  Mark Crysler <br />
                  Baddo.
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium tracking-tight mb-6 md:mb-8">
                  Full-Stack Developer
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4 delay-200 animate-fade-in-up opacity-0 justify-center md:justify-start">
                  <SocialButton href="https://github.com/Kuraisura" icon={<Github size={16} />} label="GitHub" />
                  <SocialButton href="https://www.linkedin.com/in/mark-crysler-baddo-b14999364/" icon={<Linkedin size={16} />} label="LinkedIn" />
                  <SocialButton href="https://www.facebook.com/cryslerr/" icon={<Facebook size={16} />} label="Facebook" />
                  <SocialButton href="https://www.youtube.com/@RyoshuYT" icon={<Youtube size={16} />} label="YouTube" />
                  <SocialButton href="https://tryhackme.com/p/kuraisler.dev" icon={<SiTryhackme size={16} aria-hidden="true" />} label="TryHackMe" />
                  <SocialButton href="https://www.tiktok.com/@ryoshuyt_" icon={<SiTiktok size={16} aria-hidden="true" />} label="TikTok" />
                </div>
              </div>

              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 delay-100 animate-fade-in-up opacity-0">
                <img
                  src="/Portfolio/profile.jpg"
                  alt="Profile"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROJECTS SECTION */}
        <section id="projects" className="min-h-screen flex items-center py-20 lg:py-32 scroll-mt-0 delay-100 animate-fade-in-up opacity-0">
          <div className="w-full">
            <div className="sm:contents">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111] mb-2 flex items-center gap-2 md:gap-3">
                  <Globe size={24} className="theme-icon md:w-8 md:h-8" />
                  Projects
                  <span className="text-xs md:text-sm font-normal text-gray-400 bg-gray-100 px-2 md:px-3 py-1 rounded-full">{filteredProjects.length}</span>
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex flex-wrap p-1.5 bg-gray-100/80 dark:bg-gray-800/80 rounded-full gap-1">
                {['Featured', 'All', 'Mobile', 'Websites', 'IoT', 'Windows Forms', 'Game', 'Desktop'].map((tab) => {
                  const tabKey = tab === 'All' ? 'all' : tab === 'Featured' ? 'featured' : tab;
                  const isSelected = activeTab === tabKey;
                  const catColor = categoryColors[tab];
                  // Idle tabs carry a faint tint of their category colour so the
                  // coding is legible before selection, in both themes.
                  const idleStyle = catColor ? { '--cat-color': catColor.bg } : undefined;
                  const activeStyle = catColor
                    ? { backgroundColor: catColor.bg, color: '#fff', '--cat-color': catColor.bg }
                    : { background: 'linear-gradient(135deg, #4F46E5, #3B82F6)', color: '#fff' };
                  return (
                    <button
                      key={tab}
                      onClick={() => {
                        setClickedTab(tab);
                        setActiveTab(tabKey);
                        setTimeout(() => setClickedTab(null), 300);
                      }}
                      className={`project-filter-tab relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shrink-0 ${
                        isSelected
                          ? 'is-selected shadow-lg'
                          : 'hover:bg-white/60 dark:hover:bg-gray-700/60 spark-button'
                      } hover:-translate-y-0.5 ${
                        clickedTab === tab ? 'animate-tab-click animate-tab-glow' : ''
                      }`}
                      style={isSelected ? activeStyle : idleStyle}
                    >
                      <span className="relative z-10">{tab}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

            {/* Desktop project presentation mode. Carousel remains the default. */}
            <div className="hidden sm:flex justify-end mb-3">
              <div className="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/90 p-1 shadow-sm" role="group" aria-label="Project view mode">
                <button
                  type="button"
                  onClick={() => setProjectViewMode('carousel')}
                  aria-pressed={projectViewMode === 'carousel'}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${projectViewMode === 'carousel' ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <GalleryHorizontalEnd size={14} /> Carousel
                </button>
                <button
                  type="button"
                  onClick={() => setProjectViewMode('grid')}
                  aria-pressed={projectViewMode === 'grid'}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${projectViewMode === 'grid' ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <Grid3X3 size={14} /> 3x3 Grid
                </button>
              </div>
            </div>

            {/* Sort Order Dropdown. Featured keeps its curated order, so the control is hidden there. */}
            <div className={`${activeTab === 'featured' ? 'hidden' : projectViewMode === 'grid' ? 'flex' : 'flex sm:hidden'} justify-end mb-4 md:mb-6`}>
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1.5 shadow-sm">
                <span className="text-xs md:text-sm font-medium text-gray-500">Sort:</span>
                <div className="flex gap-1 bg-gray-100 dark:bg-gray-700/60 rounded-full p-0.5">
                  <button
                    onClick={() => {
                      setSortOrder('newest');
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
                      sortOrder === 'newest'
                        ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white animate-tab-click'
                        : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                    }`}
                  >
                    <ArrowDownNarrowWide size={14} />
                    Newest
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder('oldest');
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
                      sortOrder === 'oldest'
                        ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white animate-tab-click'
                        : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                    }`}
                  >
                    <ArrowDownWideNarrow size={14} />
                    Oldest
                  </button>
                </div>
              </div>
            </div>
            </div>
           {activeTab === '__legacy_carousel__' ? (
            filteredProjects.length > 0 ? (
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} className="text-gray-700 md:w-6 md:h-6" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNextSlide}
                className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
                aria-label="Next project"
              >
                <ChevronRight size={20} className="text-gray-700 md:w-6 md:h-6" />
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden px-8 md:px-16">
                <div 
                  ref={dragRef}
                  className={`flex ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: enableTransition ? 'transform 500ms ease-out' : 'none'
                  }}
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDragMove}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                  onTouchStart={handleDragStart}
                  onTouchMove={handleDragMove}
                  onTouchEnd={handleDragEnd}
                >
                  {/* Clone last project at the beginning for seamless loop */}
                  <div 
                    key={`clone-last`}
                    onClick={() => {
                      if (!hasMovedEnough) {
                        setSelectedProject(filteredProjects[filteredProjects.length - 1]);
                        setCoverflowIndex(0);
                      }
                    }}
                    className="w-full flex-shrink-0 px-2 md:px-4 cursor-pointer"
                  >
                    <div className="relative bg-white rounded-2xl md:rounded-3xl border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 h-[320px] sm:h-[360px] md:h-[420px]">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${filteredProjects[filteredProjects.length - 1].gradient} opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out rounded-2xl md:rounded-3xl`}></div>
                      <div className="relative z-10 h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-3 md:mb-4">
                              <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${filteredProjects[filteredProjects.length - 1].color}`}></span>
                              <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {filteredProjects[filteredProjects.length - 1].type}
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111] mb-2 md:mb-3 tracking-tight">
                              {filteredProjects[filteredProjects.length - 1].title}
                            </h3>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm font-medium line-clamp-2 md:line-clamp-3">
                              {filteredProjects[filteredProjects.length - 1].desc}
                            </p>
                          </div>
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
                            <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
                          </div>
                        </div>
                        <div className="tech-tags flex flex-wrap gap-1.5 md:gap-2 mt-4 md:mt-8">
                          {filteredProjects[filteredProjects.length - 1].tech.map(t => (
                            <span key={t} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/60 border border-black/5 text-[10px] md:text-xs font-semibold text-gray-600 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Real projects */}
                  {filteredProjects.map((project) => (
                    <div 
                      key={project.id}
                      onClick={() => {
                        if (!hasMovedEnough) {
                          setSelectedProject(project);
                          setCoverflowIndex(0);
                        }
                      }}
                      className="w-full flex-shrink-0 px-2 md:px-4 cursor-pointer"
                    >
                      <div className="relative bg-white rounded-2xl md:rounded-3xl border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 h-[320px] sm:h-[360px] md:h-[420px]">
                        {/* Spotlight Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out rounded-2xl md:rounded-3xl`}></div>

                        {/* Content */}
                        <div className="relative z-10 h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-2 mb-3 md:mb-4">
                                <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${project.color}`}></span>
                                <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                  {project.type}
                                </span>
                              </div>
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111] mb-2 md:mb-3 tracking-tight">
                                {project.title}
                              </h3>
                              <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm font-medium line-clamp-2 md:line-clamp-3">
                                {project.desc}
                              </p>
                            </div>
                            
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
                              <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
                            </div>
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4 md:mt-8">
                            {project.tech.map(t => (
                              <span key={t} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/60 border border-black/5 text-[10px] md:text-xs font-semibold text-gray-600 rounded-full">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Clone first project at the end for seamless loop */}
                  <div 
                    key={`clone-first`}
                    onClick={() => {
                      if (!hasMovedEnough) {
                        setSelectedProject(filteredProjects[0]);
                        setCoverflowIndex(0);
                      }
                    }}
                    className="w-full flex-shrink-0 px-2 md:px-4 cursor-pointer"
                  >
                    <div className="relative bg-white rounded-2xl md:rounded-3xl border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 h-[320px] sm:h-[360px] md:h-[420px]">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${filteredProjects[0].gradient} opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out rounded-2xl md:rounded-3xl`}></div>
                      <div className="relative z-10 h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-3 md:mb-4">
                              <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${filteredProjects[0].color}`}></span>
                              <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {filteredProjects[0].type}
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111] mb-2 md:mb-3 tracking-tight">
                              {filteredProjects[0].title}
                            </h3>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm font-medium line-clamp-2 md:line-clamp-3">
                              {filteredProjects[0].desc}
                            </p>
                          </div>
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
                            <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
                          </div>
                        </div>
                        <div className="tech-tags flex flex-wrap gap-1.5 md:gap-2 mt-4 md:mt-8">
                          {filteredProjects[0].tech.map(t => (
                            <span key={t} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/60 border border-black/5 text-[10px] md:text-xs font-semibold text-gray-600 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {filteredProjects.map((_, idx) => {
                  // Calculate actual slide index (accounting for cloned slides)
                  const actualSlide = currentSlide === 0 ? filteredProjects.length - 1 
                    : currentSlide === filteredProjects.length + 1 ? 0 
                    : currentSlide - 1;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        const newSlide = idx + 1;
                        setCurrentSlide(newSlide);
                      }}
                      className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                        idx === actualSlide
                          ? 'w-6 md:w-8 brand-gradient'
                          : 'w-1.5 md:w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>
            </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                No projects available
              </div>
            )
          ) : (
            <div className="relative">
              <div key={`${activeTab}-${sortOrder}`} className="sm:hidden grid grid-cols-3 gap-3 pb-10 animate-project-grid-in">
                {filteredProjects.length > 0 ? filteredProjects.map((project) => {
                  const catColor = categoryColors[project.type];
                  const initials = project.title.split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase();
                  return (
                    <button
                      type="button"
                      key={project.id}
                      onClick={() => {
                        setSelectedProject(project);
                        setCoverflowIndex(0);
                        setGalleryTab('screenshots');
                      }}
                      className="project-card group relative aspect-square overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-left active:scale-95 transition-transform duration-200"
                      style={catColor ? { '--cat-color': catColor.border } : undefined}
                      aria-label={`View ${project.title}`}
                    >
                      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                        <span className="text-lg font-black tracking-tight text-gray-400 dark:text-gray-500">{initials}</span>
                      </div>
                      <ProjectArtwork project={project} compact />
                      <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 via-black/45 to-transparent pt-8">
                        <span className="block text-[10px] leading-tight font-bold text-white line-clamp-2">{project.title}</span>
                        <span className="mt-0.5 block text-[8px] leading-tight font-semibold text-white line-clamp-1">{project.date}</span>
                      </div>
                    </button>
                  );
                }) : (
                  <div className="col-span-3 py-12 text-center text-gray-400">No projects found in this category yet.</div>
                )}
              </div>

              {/* Desktop: Draggable auto-scrolling rows per category */}
              <div key={activeTab + '-desktop'} className="hidden sm:block pb-10 animate-project-grid-in">
                {filteredProjects.length === 0 ? (
                  <div className="w-full py-12 text-center text-gray-400">
                    No projects found in this category yet.
                  </div>
                ) : projectViewMode === 'carousel' ? (
                  groupedProjects.map(({ category, projects }, groupIdx) => (
                    <DraggableRow
                      key={category}
                      category={category}
                      projects={projects}
                      catColor={categoryColors[category]}
                      reverse={groupIdx % 2 === 1}
                      externalPaused={!!(selectedProject || fullscreenMode)}
                      onSelect={(project) => { setSelectedProject(project); setCoverflowIndex(0); setGalleryTab('screenshots'); }}
                    />
                  ))
                ) : (
                  <div className="space-y-10">
                    {groupedProjects.map(({ category, projects }) => (
                      <section key={category} aria-labelledby={`project-grid-${category.replace(/\s+/g, '-').toLowerCase()}`}>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: categoryColors[category]?.bg }} />
                          <h3 id={`project-grid-${category.replace(/\s+/g, '-').toLowerCase()}`} className="text-sm font-bold uppercase tracking-wider text-gray-500">{category}</h3>
                          <span className="text-xs font-medium text-gray-400">{projects.length} project{projects.length === 1 ? '' : 's'}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                          {projects.map((project) => (
                            <button
                              type="button"
                              key={project.id}
                              onClick={() => { setSelectedProject(project); setCoverflowIndex(0); setGalleryTab('screenshots'); }}
                              className="project-card group relative aspect-[3/2] overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700"
                              style={{ '--cat-color': categoryColors[project.type]?.border }}
                              aria-label={`View ${project.title}, created ${project.date}`}
                            >
                              <ProjectArtwork project={project} compact />
                              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pb-4 pt-12">
                                <span className="block text-base font-bold leading-tight text-white">{project.title}</span>
                                <span className="mt-1 block text-[11px] font-semibold text-white">{project.date}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          </div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="min-h-screen flex items-center py-20 lg:py-32 scroll-mt-0 delay-200 animate-fade-in-up opacity-0">
          <div className="w-full">
            <div className="flex items-center justify-center md:justify-between mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111] flex items-center gap-2 md:gap-3">
                <Zap size={24} className="theme-icon md:w-8 md:h-8" />
                Frameworks & Technologies
              </h2>
            </div>

            <div className="space-y-4 md:space-y-5">
              {techCategories.map((category) => {
                const categoryTech = techStack.filter((tech) => tech.category === category.id);
                return (
                  <section key={category.id} aria-labelledby={`technology-${category.id}`} className="tech-category-group">
                    <div className="mb-2 flex items-baseline gap-2 border-l-2 border-blue-500 pl-2.5">
                      <h3 id={`technology-${category.id}`} className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 md:text-sm">
                        {category.label}
                      </h3>
                      <span className="text-[10px] font-medium text-gray-400 md:text-xs">{categoryTech.length}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                      {categoryTech.map((tech) => (
                        <div
                          key={tech.name}
                          className="group flex h-14 min-w-0 flex-col items-center justify-center rounded-lg border border-gray-100 bg-white px-1.5 py-1 text-center dark:border-gray-700/60 dark:bg-gray-800/80 sm:h-16 md:h-[4.5rem]"
                          title={tech.name}
                        >
                          <div className={`mb-1 flex h-5 w-5 items-center justify-center md:h-6 md:w-6 ${tech.darkBg ? 'dark-bg-icon' : ''}`}>
                            <img src={tech.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" className="tech-logo-img h-full w-full object-contain" />
                          </div>
                          <span className="line-clamp-2 text-[8px] font-semibold leading-tight text-gray-600 dark:text-gray-300 sm:text-[9px] md:text-[10px]">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. EDUCATION SECTION */}
        <section id="education" className="min-h-screen flex items-center py-20 lg:py-32 scroll-mt-0">
          <div className="w-full">
            <div className="flex items-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111] flex items-center gap-2 md:gap-3">
                <GraduationCap size={24} className="theme-icon md:w-8 md:h-8" />
                Education Timeline
              </h2>
            </div>

          {/* Mobile: Compact 3x3 grid */}
          <div className="sm:hidden grid grid-cols-3 gap-2">
            {education.map((edu, index) => (
              <div key={index} className="aspect-square flex flex-col items-center justify-center p-2 bg-white border border-gray-100 rounded-xl text-center">
                <div className="p-1.5 bg-gray-50 rounded-lg mb-1.5">
                  <Award size={12} />
                </div>
                <p className="text-[8px] font-bold text-[#111] leading-tight line-clamp-2">{edu.degree}</p>
                <p className="text-[7px] text-gray-400 mt-0.5 line-clamp-1">{edu.school}</p>
                <p className="text-[7px] font-semibold text-gray-500 mt-0.5">{edu.year}</p>
              </div>
            ))}
          </div>

          {/* Desktop: Full cards */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {education.map((edu, index) => (
              <div key={index} className="group p-4 sm:p-6 md:p-8 bg-white border border-gray-100 rounded-2xl md:rounded-3xl hover:border-gray-300 hover:shadow-sm transition-all duration-300">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <div className="p-2 md:p-3 bg-gray-50 rounded-lg md:rounded-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <Award size={20} className="md:w-6 md:h-6" />
                  </div>
                  <span className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 rounded-full text-[10px] md:text-xs font-semibold text-gray-600">
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#111] mb-1">{edu.degree}</h3>
                <p className="text-xs md:text-sm font-semibold text-gray-500 mb-3 md:mb-4">{edu.school}</p>
                <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* 5. ACHIEVEMENTS SECTION */}
        <section id="achievements" className="min-h-screen flex items-center py-20 lg:py-32 scroll-mt-0">
          <div className="w-full">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111] flex items-center gap-2 md:gap-3">
                  <Award size={24} className="theme-icon md:w-8 md:h-8" />
                  Achievements
                </h2>
                <p className="text-sm md:text-base text-gray-500 mt-2">Academic honors, competitions, and research milestones.</p>
              </div>
              <span className="text-xs md:text-sm font-normal text-gray-400 bg-gray-100 px-2 md:px-3 py-1 rounded-full">{achievements.length}</span>
            </div>

            {/* Mobile: Compact 3x3 grid with image backgrounds */}
            <div className="sm:hidden grid grid-cols-3 gap-2">
              {achievements.map((achievement) => (
                <article
                  key={`${achievement.title}-${achievement.year}`}
                  onClick={() => setSelectedAchievement(achievement)}
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer active:scale-95 transition-all duration-200"
                >
                  {achievement.image ? (
                    <img src={achievement.image} alt={achievement.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 brand-gradient"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-[8px] font-bold text-white leading-tight line-clamp-2">{achievement.title}</p>
                    <p className="text-[7px] text-white/60 mt-0.5">{achievement.year}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Desktop: Full cards */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {achievements.map((achievement) => (
                <article
                  key={`${achievement.title}-${achievement.year}`}
                  onClick={() => setSelectedAchievement(achievement)}
                  className="group overflow-hidden bg-white border border-gray-100 rounded-2xl md:rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {achievement.image ? (
                    <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                      <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="h-2 brand-gradient"></div>
                  )}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-base md:text-lg font-bold text-[#111] leading-snug">{achievement.title}</h3>
                      <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">{achievement.year}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{achievement.school}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SEMINARS SECTION */}
        <section id="seminars" className="min-h-screen flex items-center py-20 lg:py-32 scroll-mt-0">
          <div className="w-full">
            <div className="flex items-center mb-8 md:mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111] flex items-center gap-2 md:gap-3">
                  <GraduationCap size={24} className="theme-icon md:w-8 md:h-8" />
                  Seminars
                </h2>
                <p className="text-sm md:text-base text-gray-500 mt-2">Professional learning and industry exposure.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {seminars.map((seminar) => (
                <article key={seminar.name} className="group overflow-hidden bg-white border border-gray-100 rounded-2xl md:rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/8] bg-gray-100 overflow-hidden">
                    <img src={seminar.image} alt={`${seminar.name} seminar`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 md:p-7">
                    <h3 className="text-xl md:text-2xl font-bold text-[#111] mb-2">{seminar.name}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">{seminar.description}</p>
                    <a href={seminar.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111] text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                      Visit Website <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CERTIFICATES SECTION */}
        <section id="certificates" className="min-h-screen flex items-center py-20 lg:py-32 scroll-mt-0">
          <div className="w-full">
            <div className="flex items-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111] flex items-center gap-2 md:gap-3">
                <Award size={24} className="theme-icon md:w-8 md:h-8" />
                Certificates
              </h2>
            </div>

            {/* Mobile: Compact 3x3 grid */}
            <div className="sm:hidden grid grid-cols-3 gap-2">
              {certificates.map((cert, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setSelectedCertificate(cert)}
                  className="relative aspect-square flex flex-col items-center justify-center p-2 bg-white border border-gray-100 rounded-xl cursor-pointer active:scale-95 transition-all duration-200 hover:shadow-md text-center overflow-hidden"
                  aria-label={`Preview ${cert.name}`}
                >
                  <div className="p-1.5 bg-gray-50 rounded-lg mb-1.5 group-hover:bg-black group-hover:text-white transition-colors">
                    <Award size={14} />
                  </div>
                  <p className="text-[8px] font-bold text-[#111] leading-tight line-clamp-2">{cert.name}</p>
                  <p className="text-[7px] text-gray-400 mt-0.5">{cert.issuer}</p>
                </button>
              ))}
            </div>

            {/* Desktop: Full cards */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {certificates.map((cert, index) => (
                <div key={index} className="group p-4 sm:p-6 md:p-8 bg-white border border-gray-100 rounded-2xl md:rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-gray-50 rounded-lg md:rounded-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                      <Award size={20} className="md:w-6 md:h-6" />
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#111] mb-2">{cert.name}</h3>
                  <p className="text-xs md:text-sm font-semibold text-gray-500 mb-3">{cert.issuer}</p>
                  
                  <div className="space-y-1.5 mb-4 text-xs md:text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span className="font-medium">Issue Date:</span>
                      <span>{cert.issueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Expires:</span>
                      <span>{cert.expirationDate}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">Credential ID:</span>
                      <span className="text-xs break-all font-mono bg-gray-50 px-2 py-1 rounded">{cert.credentialId}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(cert)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs md:text-sm font-semibold rounded-lg md:rounded-xl hover:bg-gray-800 transition-colors duration-300 w-full justify-center"
                  >
                    Preview Certificate
                    <Eye size={14} className="md:w-4 md:h-4" />
                  </button>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center mt-2 text-xs md:text-sm font-semibold text-gray-500 hover:text-black transition-colors"
                    >
                      Verify credential <ArrowUpRight size={13} className="ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION (Form) */}
        <footer id="contact" className="min-h-screen flex items-center py-20 lg:py-32 scroll-mt-0">
          <div className="w-full">
           <div className="max-w-2xl mx-auto px-4 md:px-0">
             <div className="text-center mb-8 md:mb-12">
               <div className="inline-flex p-3 md:p-4 bg-gray-50 rounded-full mb-4 md:mb-6">
                 <Mail size={24} className="theme-icon md:w-8 md:h-8" />
               </div>
               <h2 className="text-2xl sm:text-3xl font-bold text-[#111] mb-2 md:mb-3 tracking-tight">Let's bring your next idea to life.</h2>
               <p className="text-sm md:text-base text-gray-500">
                 Have a project in mind? Let's turn your idea into a fast, reliable, and user-focused digital experience.
               </p>
               
               <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 mt-4 md:mt-6 text-xs md:text-sm text-gray-600">
                 <div className="flex items-center justify-center gap-2">
                   <Mail size={14} className="md:w-4 md:h-4" /> kuraisler.dev@gmail.com
                 </div>
                 <div className="flex items-center justify-center gap-2">
                   <Phone size={14} className="md:w-4 md:h-4" /> +63 945 293 4417
                 </div>
               </div>
             </div>

             <form onSubmit={handleContactSubmit} className="relative space-y-3 md:space-y-4" autoComplete="off">
               {/* Honeypot. Hidden from sight and from assistive tech, but still in
                   the DOM so naive spam bots fill it and get silently dropped. */}
               <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                 <label htmlFor="company">Company</label>
                 <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    ref={honeypotRef}
                  />
                </div>

                {formError && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 px-3 py-2.5 rounded-lg md:rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs md:text-sm"
                  >
                    <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5 md:space-y-2">
                    <label htmlFor="name" className="text-xs md:text-sm font-semibold text-gray-700">Name</label>
                     <input 
                       type="text" 
                       id="name"
                       ref={nameRef}
                       maxLength={30}
                       pattern="[a-zA-Z ]*"
                       inputMode="text"
                       autoComplete="off"
                       onInput={(event) => {
                         event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z ]/g, '');
                         if (formErrors.name) setFormErrors(prev => ({ ...prev, name: null }));
                         if (formError) setFormError('');
                       }}
                       className={`select-text selection:bg-blue-200 selection:text-gray-900 w-full px-3 md:px-4 py-2.5 md:py-3 bg-white border rounded-lg md:rounded-xl text-sm md:text-base outline-none ${
                         formErrors.name 
                           ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                           : 'border-gray-200 focus:border-black focus:ring-1 focus:ring-black'
                       }`}
                     />
                   {formErrors.name && (
                     <p className="text-red-500 text-[10px] md:text-xs flex items-center gap-1"><AlertCircle size={12} /> {formErrors.name}</p>
                   )}
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label htmlFor="email" className="text-xs md:text-sm font-semibold text-gray-700">Email</label>
                     <input 
                       type="email" 
                       id="email"
                       ref={emailRef}
                       maxLength={40}
                       autoComplete="off"
                       onInput={() => { if (formErrors.email) setFormErrors(prev => ({ ...prev, email: null })); if (formError) setFormError(''); }}
                       className={`select-text selection:bg-blue-200 selection:text-gray-900 w-full px-3 md:px-4 py-2.5 md:py-3 bg-white border rounded-lg md:rounded-xl text-sm md:text-base outline-none ${
                         formErrors.email
                           ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                           : 'border-gray-200 focus:border-black focus:ring-1 focus:ring-black'
                       }`}
                     />
                    {formErrors.email && (
                     <p className="text-red-500 text-[10px] md:text-xs flex items-center gap-1"><AlertCircle size={12} /> {formErrors.email}</p>
                   )}
                  </div>
                </div>
                
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="note" className="text-xs md:text-sm font-semibold text-gray-700">Message</label>
                   <textarea 
                    id="note"
                    rows={4}
                    ref={noteRef}
                    maxLength={2000}
                    autoComplete="off"
                    onInput={() => { if (formErrors.note) setFormErrors(prev => ({ ...prev, note: null })); if (formError) setFormError(''); }}
                    className={`select-text selection:bg-blue-200 selection:text-gray-900 w-full px-3 md:px-4 py-2.5 md:py-3 bg-white border rounded-lg md:rounded-xl text-sm md:text-base outline-none resize-none ${
                      formErrors.note 
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                         : 'border-gray-200 focus:border-black focus:ring-1 focus:ring-black'
                   }`}
                  ></textarea>
                  {formErrors.note && (
                     <p className="text-red-500 text-[10px] md:text-xs flex items-center gap-1"><AlertCircle size={12} /> {formErrors.note}</p>
                   )}
               </div>

               <button 
                 type="submit"
                 disabled={formStatus === 'submitting' || formStatus === 'success'}
                 className={`
                   w-full py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-bold flex items-center justify-center gap-2 transition-all duration-300
                   ${formStatus === 'success' 
                     ? 'bg-green-600 text-white shadow-green-200' 
                     : 'bg-[#111] text-white hover:bg-black shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]'
                   }
                 `}
               >
                 {formStatus === 'submitting' ? (
                   <span className="animate-pulse">Sending...</span>
                 ) : formStatus === 'success' ? (
                   <>Message Sent <CheckCircle2 size={16} className="md:w-[18px] md:h-[18px]" /></>
                 ) : (
                   <>Send Message <Send size={16} className="md:w-[18px] md:h-[18px]" /></>
                 )}
               </button>
             </form>

           <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 pt-12 md:pt-16 mt-12 md:mt-16 border-t border-gray-100 w-full text-center">
            <div className="text-xs md:text-sm font-medium text-gray-400">
              © 2025 Mark Crysler Baddo. <br className="md:hidden"/> Based in Silang, Cavite.
            </div>
          </div>
           </div>
          </div>
        </footer>
      </main>

      {/* Project Modal with Spring Animation */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
          <div
            className="absolute inset-0 bg-black/30 transition-opacity duration-500"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-3xl">
            <div
              ref={projectModalRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onWheel={(event) => event.stopPropagation()}
              onTouchMove={(event) => event.stopPropagation()}
              className="relative bg-white w-full max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl md:rounded-[32px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] animate-scale-in outline-none"
            >
            {/* Modal Header with Swiper Coverflow Gallery or Hero Image */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
              <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden rounded-t-2xl md:rounded-t-[32px] max-sm:pb-7">
                {/* Gallery toggle tabs for projects with showcase */}
                {selectedProject.showcase && selectedProject.showcase.length > 0 && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 max-sm:left-3 max-sm:translate-x-0 z-30 flex gap-1 bg-black/50 backdrop-blur-sm rounded-full p-1">
                    <button
                      onClick={() => { setGalleryTab('screenshots'); setCoverflowIndex(0); }}
                      className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold transition-all ${galleryTab === 'screenshots' ? 'bg-white/20 text-white ring-1 ring-white/50' : 'text-white/70 hover:text-white'}`}
                    >
                      Images
                    </button>
                    <button
                      onClick={() => { setGalleryTab('showcase'); setCoverflowIndex(0); }}
                      className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold transition-all ${galleryTab === 'showcase' ? 'bg-white/20 text-white ring-1 ring-white/50' : 'text-white/70 hover:text-white'}`}
                    >
                      Showcase
                    </button>
                  </div>
                )}
                <Swiper
                  key={`${selectedProject.id}-${galleryTab}`}
                  onSwiper={(swiper) => {
                    modalSwiperRef.current = swiper;
                    setCoverflowIndex(0);
                    requestAnimationFrame(() => {
                      if (!swiper.destroyed) {
                        swiper.update();
                        swiper.slideTo(0, 0);
                        writeSlideCounter(modalCounterRef, 0, swiper.slides.length);
                      }
                    });
                  }}
                  onTouchStart={() => {
                    modalDraggingRef.current = true;
                  }}
                  onTouchEnd={() => finishSwiperDrag('modal')}
                  onSlideChange={(swiper) => {
                    swiper.zoom?.out();
                    writeSlideCounter(modalCounterRef, swiper.realIndex, swiper.slides.length);
                  }}
                  effect={'slide'}
                  grabCursor={true}
                  allowTouchMove={true}
                  simulateTouch={true}
                  touchRatio={1}
                  touchAngle={45}
                  threshold={3}
                  resistanceRatio={0.85}
                  followFinger={true}
                  longSwipes={true}
                  longSwipesRatio={0.15}
                  shortSwipes={true}
                  touchStartPreventDefault={false}
                  touchMoveStopPropagation={true}
                  nested={true}
                  centeredSlides={true}
                  slidesPerView={1.15}
                  breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 1.8 },
                  }}
                  observer={true}
                  observeParents={true}
                  watchSlidesProgress={true}
                  roundLengths={true}
                  preventInteractionOnTransition={false}
                  modules={[]}
                  className="modal-swiper"
                  loop={false}
                  rewind={true}
                  watchOverflow={false}
                  speed={450}
                  onClick={(swiper) => {
                    if (swiper.allowClick && swiper.clickedSlide?.classList.contains('swiper-slide-active') && !isVideoMedia(swiper.clickedSlide?.querySelector('video')?.currentSrc)) {
                      setCoverflowIndex(swiper.realIndex);
                      setFullscreenMode(true);
                    }
                  }}
                >
                  {(galleryTab === 'showcase' && selectedProject.showcase ? selectedProject.showcase : selectedProject.screenshots).map((src, idx) => (
                      <SwiperSlide
                        key={src}
                        className={`modal-swiper-slide${
                          galleryTab === 'screenshots' && selectedProject.landscapeIndices && selectedProject.landscapeIndices.includes(idx)
                            ? ' is-landscape'
                            : ''
                        }`}
                      >
                        {isVideoMedia(src) ? (
                          <ViewOnlyVideo src={src} onReady={() => runSwiperUpdate('modal')} />
                        ) : (
                          <img
                            src={src}
                            alt={`${selectedProject.title} ${galleryTab === 'showcase' ? 'event' : 'screenshot'} ${idx + 1}`}
                            loading="eager"
                            decoding="async"
                            draggable={false}
                            onLoad={() => runSwiperUpdate('modal')}
                          />
                        )}
                      </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  type="button"
                  className="modal-swiper-prev coverflow-btn is-prev"
                  aria-label="Previous screenshot"
                  onClick={() => {
                    const swiper = modalSwiperRef.current;
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.isBeginning) swiper.slideTo(swiper.slides.length - 1);
                    else swiper.slidePrev();
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="modal-swiper-next coverflow-btn is-next"
                  aria-label="Next screenshot"
                  onClick={() => {
                    const swiper = modalSwiperRef.current;
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.isEnd) swiper.slideTo(0);
                    else swiper.slideNext();
                  }}
                >
                  <ChevronRight size={20} />
                </button>
                <div className="coverflow-counter" ref={modalCounterRef}>
                </div>
              </div>
            ) : selectedProject.image ? (
              <div className="relative h-48 sm:h-64 md:h-80 bg-gray-100 overflow-hidden rounded-t-2xl md:rounded-t-[32px]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            ) : (
              <div className={`h-32 sm:h-40 md:h-48 bg-gradient-to-br ${selectedProject.gradient} relative overflow-hidden rounded-t-2xl md:rounded-t-[32px]`}>
              </div>
            )}
            
            {/* Modal Content */}
            <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-10 pt-2">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                {(() => {
                  // Use the same category palette as the cards rather than the
                  // per-project Tailwind `color` class, so the modal matches.
                  const modalCat = categoryColors[selectedProject.type];
                  return (
                    <>
                      <span
                        className="cat-dot w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                        style={modalCat ? { backgroundColor: modalCat.bg, color: modalCat.bg } : undefined}
                      ></span>
                      <span
                        className="cat-label text-xs md:text-sm font-semibold uppercase tracking-wide"
                        style={modalCat ? { '--cat-text': modalCat.text, '--cat-text-dark': modalCat.textDark } : undefined}
                      >
                        {selectedProject.type}
                      </span>
                      <span className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        · {selectedProject.subtitle}
                      </span>
                    </>
                  );
                })()}
              </div>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 md:mb-6">
                {selectedProject.logo && (
                  <div className="project-title-logo" aria-hidden="true">
                    <img src={selectedProject.logo} alt="" draggable={false} />
                  </div>
                )}
                <h2 id="project-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111] tracking-tight mr-auto">
                  {selectedProject.title}
                </h2>
                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-1.5 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-sm font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 active:scale-95"
                  >
                    View Website <Globe size={14} />
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-1.5 bg-[#111] text-white px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-sm font-semibold hover:bg-black/90 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 active:scale-95"
                  >
                    View Project <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
              {selectedProject.date && (
                <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">Created: {selectedProject.date}</p>
              )}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-10 font-medium">
                {selectedProject.longDesc}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
                {Object.entries(selectedProject.stats).filter(([key]) => key !== 'status').map(([key, value]) => (
                  <div key={key} className="p-3 sm:p-4 md:p-5 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{key}</div>
                    <div className="text-lg md:text-xl font-bold text-[#111]">{value}</div>
                  </div>
                ))}
              </div>

              {/* How It Was Made */}
              {selectedProject.howMade && (
                <div className="mb-6 md:mb-10">
                  <h3 className="text-sm md:text-base font-bold text-[#111] mb-3 md:mb-4 uppercase tracking-wider">How It Was Made</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
                    {selectedProject.howMade}
                  </p>
                </div>
              )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-100">
                <div className="tech-tags flex gap-1.5 md:gap-2 flex-wrap">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-2 md:px-3 py-0.5 md:py-1 bg-white border border-gray-200 text-gray-600 text-[10px] md:text-xs font-semibold rounded-full shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
                {selectedProject.githubLinks && selectedProject.githubLinks.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProject.githubLinks.map((gl, idx) => (
                      <a
                        key={idx}
                        href={gl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs md:text-sm text-gray-500 hover:text-black underline decoration-gray-300 hover:decoration-gray-500 transition-colors"
                      >
                        {gl.replace("https://github.com/", "")} <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Docked toolbar — sits on the card frame, never scrolls with content */}
          <div className="absolute top-3 right-3 z-40 flex items-center gap-2">
            <button
              type="button"
              onClick={copyProjectLink}
              className={`gal-control is-pill${linkCopied ? ' is-copied' : ''}`}
              aria-label="Copy link to this project"
              title="Copy link to this project"
            >
              {linkCopied ? <CheckCircle2 size={16} /> : <Link2 size={16} />}
              <span className="hidden sm:inline">{linkCopied ? 'Link copied' : 'Copy link'}</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="gal-control is-icon"
              aria-label="Close project details"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
          </div>
        </div>
      )}

      {/* Fullscreen Coverflow + Bottom Sheet Mode */}
      {fullscreenMode && selectedProject && selectedProject.screenshots && (
        <div className="fixed inset-0 z-[120] flex flex-col bg-[#0a0a0a] overscroll-contain">
          {/* Top-left navigation: back to the project dialog + project identity */}
          <div className="absolute top-3 left-3 md:top-5 md:left-6 z-40 flex items-center gap-3 max-w-[55vw] sm:max-w-[60vw]">
            <button
              type="button"
              onClick={() => { setFullscreenMode(false); setSheetExpanded(false); }}
              className="gal-control is-pill"
              aria-label="Back to project details"
              title="Back to project details"
            >
              <ChevronLeft size={17} />
              <span className="hidden sm:inline">Back to details</span>
            </button>
            {[selectedProject.type, selectedProject.subtitle].filter(Boolean).length > 0 && (
              <div className="hidden sm:block min-w-0">
                <div className="text-white text-sm font-semibold leading-tight truncate">{selectedProject.title}</div>
                <div className="text-white/55 text-[10px] font-semibold uppercase tracking-[0.16em] leading-tight truncate">
                  {[selectedProject.type, selectedProject.subtitle].filter(Boolean).join(' · ')}
                </div>
              </div>
            )}
          </div>

          {/* Top-right toolbar: share + exit */}
          <div className="absolute top-3 right-3 md:top-5 md:right-6 z-40 flex items-center gap-2">
            <button
              type="button"
              onClick={copyProjectLink}
              className={`gal-control is-pill${linkCopied ? ' is-copied' : ''}`}
              aria-label="Copy link to this project"
              title="Copy link to this project"
            >
              {linkCopied ? <CheckCircle2 size={16} /> : <Link2 size={16} />}
              <span className="hidden sm:inline">{linkCopied ? 'Link copied' : 'Copy link'}</span>
            </button>
            <button
              type="button"
              onClick={() => { setFullscreenMode(false); setSheetExpanded(false); }}
              className="gal-control is-icon"
              aria-label="Exit fullscreen"
              title="Exit fullscreen"
            >
              <X size={18} />
            </button>
          </div>

          {/* Fullscreen Swiper Coverflow */}
          <div className="flex-1 min-h-0 relative">
            <Swiper
              key={`${selectedProject.id}-${galleryTab}`}
              onSwiper={(swiper) => {
                fullscreenSwiperRef.current = swiper;
                const selectedIndex = coverflowIndex;
                requestAnimationFrame(() => {
                  if (!swiper.destroyed) {
                    swiper.update();
                    swiper.slideTo(selectedIndex, 0);
                    writeSlideCounter(fullscreenCounterRef, selectedIndex, swiper.slides.length);
                  }
                });
              }}
              onTouchStart={() => {
                fsDraggingRef.current = true;
              }}
              onTouchEnd={() => finishSwiperDrag('fs')}
              onSlideChange={(swiper) => {
                swiper.zoom?.out();
                writeSlideCounter(fullscreenCounterRef, swiper.realIndex, swiper.slides.length);
              }}
              effect={'coverflow'}
              grabCursor={true}
              allowTouchMove={true}
              simulateTouch={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              observer={true}
              observeParents={true}
              watchSlidesProgress={true}
              touchRatio={1}
              threshold={10}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 350,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Zoom]}
              zoom={typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches ? {
                maxRatio: 4,
                minRatio: 1,
                toggle: true,
              } : false}
              className="fs-swiper"
              loop={false}
              rewind={true}
              watchOverflow={false}
              speed={400}
            >
                  {(galleryTab === 'showcase' && selectedProject.showcase ? selectedProject.showcase : selectedProject.screenshots).map((src, idx) => (
                    <SwiperSlide
                      key={src}
                      className={`fs-swiper-slide${['Websites', 'IoT', 'Windows Forms', 'Game', 'Desktop'].includes(selectedProject.type) ? ' is-wide-project' : ''}${
                        galleryTab === 'screenshots' && selectedProject.landscapeIndices && selectedProject.landscapeIndices.includes(idx)
                          ? ' is-landscape'
                          : ''
                      }`}
                    >
                      {isVideoMedia(src) ? (
                        <ViewOnlyVideo src={src} onReady={() => runSwiperUpdate('fs')} />
                      ) : (
                        <div className="swiper-zoom-container">
                          <img
                            src={src}
                            loading="eager"
                            decoding="sync"
                            alt={`${selectedProject.title} ${galleryTab === 'showcase' ? 'event' : 'screenshot'} ${idx + 1}`}
                            draggable={false}
                            onLoad={() => runSwiperUpdate('fs')}
                          />
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
            </Swiper>

            {/* Re-paints the backdrop over the screen edges so neighbouring
                slides never leave a white corner behind the controls. */}
            <div className="fs-edge-fade" aria-hidden="true"></div>

            {/* Custom nav buttons */}
            <button
              type="button"
              className="fs-swiper-prev coverflow-btn is-prev"
              aria-label="Previous screenshot"
              onClick={() => {
                const swiper = fullscreenSwiperRef.current;
                if (!swiper || swiper.destroyed) return;
                if (swiper.isBeginning) swiper.slideTo(swiper.slides.length - 1);
                else swiper.slidePrev();
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              className="fs-swiper-next coverflow-btn is-next"
              aria-label="Next screenshot"
              onClick={() => {
                const swiper = fullscreenSwiperRef.current;
                if (!swiper || swiper.destroyed) return;
                if (swiper.isEnd) swiper.slideTo(0);
                else swiper.slideNext();
              }}
            >
              <ChevronRight size={24} />
            </button>

            <div className="coverflow-counter coverflow-counter-fullscreen" ref={fullscreenCounterRef}>
            </div>
          </div>

          {/* Bottom Sheet — tap to expand/collapse */}
          <Motion.div
            ref={sheetRef}
            className="relative bg-[#0f1520] border-t border-white/10 flex-shrink-0 overflow-hidden"
            initial={false}
            animate={{
              height: sheetExpanded ? (typeof window !== 'undefined' && window.innerWidth < 640 ? '45vh' : '70vh') : '120px',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
          >
            {/* Tap handle */}
            <div
              className="flex flex-col items-center pt-3 pb-2 cursor-pointer select-none"
              onClick={() => setSheetExpanded((prev) => !prev)}
            >
              <div className={`transition-transform duration-300 ${sheetExpanded ? 'rotate-180' : 'animate-bounce-up'}`}>
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="mb-1">
                  <path d="M2 2L14 12L26 2" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[10px] text-white/30 font-medium tracking-wider uppercase mb-1 select-none">
                {sheetExpanded ? 'Tap to close' : 'Tap for details'}
              </span>
            </div>

            {/* Scrollable content */}
            <div
              ref={sheetContentRef}
              className="px-6 sm:px-10 md:px-16 pb-8 overflow-y-auto overscroll-contain"
              style={{
                height: sheetExpanded ? `calc(${typeof window !== 'undefined' && window.innerWidth < 640 ? '45vh' : '70vh'} - 80px)` : '0px',
                pointerEvents: sheetExpanded ? 'auto' : 'none',
              }}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-wide text-white/50">
                    {selectedProject.type}
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-white/30 uppercase tracking-wide">
                    · {selectedProject.subtitle}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 md:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mr-auto">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.website && (
                    <a href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-blue-600 px-3 sm:px-4 py-2 text-[11px] sm:text-sm font-semibold text-white hover:bg-blue-500 transition-colors">
                      View Website <Globe size={14} />
                    </a>
                  )}
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3 sm:px-4 py-2 text-[11px] sm:text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                      View Project <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-6 md:mb-8 font-medium">
                  {selectedProject.longDesc}
                </p>

                {selectedProject.howMade && (
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-sm md:text-base font-bold text-white mb-3 uppercase tracking-wider">How It Was Made</h3>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed font-medium bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
                      {selectedProject.howMade}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                  {Object.entries(selectedProject.stats).filter(([key]) => key !== 'status').map(([key, value]) => (
                    <div key={key} className="p-3 sm:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10">
                      <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">{key}</div>
                      <div className="text-base md:text-lg font-bold text-white">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="tech-tags flex gap-1.5 md:gap-2 flex-wrap">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 border border-white/15 text-white/80 text-[10px] md:text-xs font-semibold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      )}

      {selectedAchievement && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSelectedAchievement(null)}
          ></div>
          <div
            ref={achievementModalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-modal-title"
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto overscroll-contain bg-white rounded-2xl md:rounded-[32px] shadow-2xl animate-scale-in outline-none"
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="sticky top-4 float-right mr-4 md:mr-6 z-10 w-10 h-10 rounded-full bg-white/95 text-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg"
              aria-label="Close achievement preview"
            >
              <X size={20} />
            </button>
            <div className="p-3 sm:p-6 md:p-10 pt-16 md:pt-10">
              <div className="bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  loading="lazy"
                  className="w-full max-h-[65vh] object-contain"
                />
              </div>
              <div className="pt-5 md:pt-7">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">{selectedAchievement.year}</p>
                <h2 id="achievement-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111] leading-tight">{selectedAchievement.title}</h2>
                <p className="text-sm md:text-base text-gray-500 mt-3">{selectedAchievement.school}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCertificate && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6">
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate preview"
          />
          <div
            ref={certificateModalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            className="relative flex h-[92dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl outline-none sm:rounded-[28px]"
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <h2 id="certificate-modal-title" className="truncate text-sm font-bold text-white sm:text-base">{selectedCertificate.name}</h2>
                <p className="truncate text-xs text-white/60">{selectedCertificate.issuer}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="min-h-0 flex-1 bg-[#080d16] p-2 sm:p-4">
              {selectedCertificate.imageFile ? (
                <img
                  src={selectedCertificateUrl}
                  alt={`${selectedCertificate.name} certificate`}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              ) : (
                <iframe
                  src={`${selectedCertificateUrl}${selectedCertificate.pdfFile ? '#toolbar=0&navpanes=0' : ''}`}
                  title={`${selectedCertificate.name} certificate`}
                  className="h-full w-full rounded-xl border-0 bg-white"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Sub-components
  const SocialButton = ({ icon, label, href }) => (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button flex items-center gap-2.5 px-6 py-3.5 bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 rounded-2xl text-gray-700 dark:text-gray-200 font-semibold hover:border-gray-300 dark:hover:border-gray-600 hover:text-black dark:hover:text-white hover:-translate-y-1 transition-all duration-300 active:scale-95"
    >
      <span className="relative z-10 flex items-center gap-2.5">
        {icon}
        <span>{label}</span>
      </span>
    </a>
  );

const FooterLink = ({ label, href }) => (
  <a href={href} className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">
    {label}
  </a>
);

export default ModernPortfolio;
