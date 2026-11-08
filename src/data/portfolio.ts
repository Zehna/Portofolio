export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  timezone: string;
  availability: {
    status: "available" | "busy" | "open";
    label: string;
    responseTime: string;
  };
  socials: SocialLinks;
  heroBadges: string[];
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: string;
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  subtitle: string;
  badge: string;
  iconName: "Terminal" | "Sparkles" | "Gamepad2";
  accentGradient: string;
  skills: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  problem: string;
  architecture: string[];
  solution: string;
  keyOutcomes: string[];
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
}

export interface ProjectItem {
  title: string;
  slug: string;
  badge: string;
  summary: string;
  description: string;
  techStack: string[];
  metrics: ProjectMetric[];
  liveUrl: string;
  githubUrl: string;
  previewType: "video" | "image";
  bentoSpan: "large" | "wide" | "standard";
  accentColor: string;
  previewVisual: {
    gradient: string;
    terminalLines?: string[];
    fpsLabel?: string;
    resolutionLabel?: string;
  };
  caseStudy: ProjectCaseStudy;
}

export const PROFILE: ProfileData = {
  name: "Benny Putra",
  handle: "@benny.dev",
  role: "Full-Stack Engineer & Creative Technologist",
  tagline:
    "Merancang sistem otomasi berkinerja tinggi, antarmuka web interaktif, dan pipeline simulasi 3D real-time.",
  bio: "Engineer yang berfokus pada titik temu antara rekayasa sistem skala produksi, pengalaman web interaktif berbasis fisika/motion, serta pipeline simulasi & game engine. Membangun perangkat lunak yang cepat, terukur, dan memiliki presisi visual tingkat tinggi.",
  location: "Bandung, Indonesia",
  timezone: "UTC+7 (WIB)",
  availability: {
    status: "available",
    label: "Available for projects",
    responseTime: "< 12 jam",
  },
  socials: {
    github: "https://github.com/benny",
    linkedin: "https://linkedin.com/in/benny",
    email: "mailto:hello@benny.dev",
  },
  heroBadges: [
    "Next.js 16 & React 19",
    "High-Throughput FFmpeg Pipelines",
    "Three.js / WebGL Shaders",
    "Unity C# & Low-Poly Systems",
  ],
  stats: [
    {
      label: "Pipeline Throughput",
      value: "4.2x",
      detail: "Akselerasi render & transcode otomatis",
    },
    {
      label: "Runtime Frame Budget",
      value: "16.6ms",
      detail: "60+ FPS terkunci di WebGL & Unity",
    },
    {
      label: "Core Web Vitals",
      value: "99/100",
      detail: "Lighthouse Performance & Accessibility",
    },
  ],
};

export const SKILLS: SkillCategory[] = [
  {
    id: "systems-automation",
    category: "Systems & Automation",
    subtitle:
      "Orkestrasi proses latar belakang, pemrosesan media paralel, dan perkakas CLI tanpa friksi.",
    badge: "Backend & Infra",
    iconName: "Terminal",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    skills: [
      {
        name: "Node.js",
        level: "Production Core",
        description:
          "Event-driven worker pools, stream processing, dan arsitektur layanan mikro berlatensi rendah.",
        highlight: true,
      },
      {
        name: "Python",
        level: "Automation & AI",
        description:
          "Skrip otomasi data, integrasi pipeline AI/ML, dan orkestrasi tugas asinkron.",
        highlight: true,
      },
      {
        name: "FFmpeg",
        level: "Media Engine",
        description:
          "Filtergraph kompleks, hardware-accelerated encoding (NVENC), dan batch transcoding otomatis.",
        highlight: true,
      },
      {
        name: "Custom Automation APIs",
        level: "System Integration",
        description:
          "Webhook orchestrator, rate-limited queue workers, dan sinkronisasi lintas platform.",
      },
      {
        name: "CLI Tools",
        level: "Developer Experience",
        description:
          "Perkakas terminal interaktif untuk otomasi build, scaffolding aset, dan diagnostik sistem.",
      },
    ],
  },
  {
    id: "frontend-interactive",
    category: "Frontend & Interactive",
    subtitle:
      "Antarmuka web modern dengan mikro-interaksi presisi, tipografi tajam, dan grafik 3D di peramban.",
    badge: "UI & Creative Web",
    iconName: "Sparkles",
    accentGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    skills: [
      {
        name: "Next.js",
        level: "App Router Architecture",
        description:
          "React Server Components, streaming SSR, optimasi edge, dan arsitektur aplikasi full-stack.",
        highlight: true,
      },
      {
        name: "React",
        level: "UI Engineering",
        description:
          "Komposisi komponen modular, custom hooks terukur, dan manajemen state reaktif.",
        highlight: true,
      },
      {
        name: "Tailwind CSS",
        level: "Design System",
        description:
          "Tokenisasi desain, tata letak bento responsif, glassmorphism presisi, dan dark-first styling.",
      },
      {
        name: "Framer Motion",
        level: "Physics Animation",
        description:
          "Transisi layout berbasis pegas (spring physics), choreographed reveals, dan gestur interaktif.",
        highlight: true,
      },
      {
        name: "Three.js/R3F",
        level: "3D Web Graphics",
        description:
          "Scene 3D deklaratif dengan React Three Fiber, custom GLSL shaders, dan post-processing.",
        highlight: true,
      },
    ],
  },
  {
    id: "game-simulation",
    category: "Game & Simulation",
    subtitle:
      "Rekayasa gameplay real-time, sistem simulasi deterministik, dan optimasi aset 3D low-poly.",
    badge: "Real-Time 3D",
    iconName: "Gamepad2",
    accentGradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    skills: [
      {
        name: "Unity Engine",
        level: "Real-Time Runtime",
        description:
          "Arsitektur gameplay modular, Universal Render Pipeline (URP), profiling memori, dan sistem fisika.",
        highlight: true,
      },
      {
        name: "C#",
        level: "Systems Scripting",
        description:
          "Pola desain berbasis event/state machine, pemrograman bebas alokasi GC di jalur panas (hot-path).",
        highlight: true,
      },
      {
        name: "Low-Poly Assets Pipeline",
        level: "Technical Art",
        description:
          "Otomasi Blender-ke-Unity, atlas tekstur palet warna, optimasi draw call, dan LOD otomatis.",
        highlight: true,
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "HyperStream FFmpeg Render Engine",
    slug: "hyperstream-ffmpeg-render-engine",
    badge: "Systems & Automation",
    summary:
      "Mesin otomasi pemrosesan video terdistribusi berbasis Node.js, Python, dan FFmpeg dengan akselerasi perangkat keras.",
    description:
      "Platform otomasi media headless yang dirancang untuk merender, memotong, menormalkan audio, dan mengompilasi ratusan stream video secara paralel menggunakan filtergraph FFmpeg dinamis dan worker pool berlatensi rendah.",
    techStack: [
      "Node.js",
      "Python",
      "FFmpeg",
      "Custom Automation APIs",
      "CLI Tools",
    ],
    metrics: [
      { label: "Render Throughput", value: "4.2x Lebih Cepat" },
      { label: "Pemanfaatan GPU", value: "94% NVENC" },
      { label: "Tingkat Keberhasilan Job", value: "99.94%" },
    ],
    liveUrl: "https://hyperstream-demo.benny.dev",
    githubUrl: "https://github.com/benny/hyperstream-ffmpeg-engine",
    previewType: "video",
    bentoSpan: "large",
    accentColor: "emerald",
    previewVisual: {
      gradient: "from-emerald-500/25 via-teal-500/10 to-zinc-950",
      fpsLabel: "240 fps encode",
      resolutionLabel: "4K60 NVENC Pipe",
      terminalLines: [
        "$ hyperstream dispatch --preset=nvenc-hevc --workers=8",
        "[worker-01] Filtergraph compiled: loudnorm + lut3d + scale_cuda",
        "[worker-04] Segment #128 transcoded in 412ms (5.8x realtime)",
        "[orchestrator] Batch completed: 120/120 streams verified ✓",
      ],
    },
    caseStudy: {
      problem:
        "Proses rendering dan transcoding ribuan aset video promosi secara manual membutuhkan waktu lebih dari 14 jam per batch, sering mengalami kebocoran memori pada proses tunggal, serta tidak konsisten dalam normalisasi kekerasan audio (LUFS).",
      architecture: [
        "API Gateway & Job Queue: Menerima payload JSON spesifikasi timeline dan membaginya menjadi segmen mikro yang idempoten.",
        "Dynamic Filtergraph Compiler (Python & Node.js): Menyusun ekspresi filter kompleks FFmpeg secara terprogram lengkap dengan fallback software apabila antrean GPU penuh.",
        "Zero-Copy Stream Pipe: Mengalirkan frame mentah antar-tahap pemrosesan tanpa penulisan disk perantara untuk memangkas bottleneck I/O hingga 68%.",
      ],
      solution:
        "Membangun orkestrator worker hibrida Node.js + Python dengan CLI diagnostik real-time. Setiap job dipetakan ke sesi FFmpeg NVENC terisolasi dengan telemetri frame-per-second langsung dan auto-retry cerdas pada tingkat segmen.",
      keyOutcomes: [
        "Memangkas waktu pemrosesan batch produksi dari 14 jam menjadi kurang dari 3,3 jam (peningkatan throughput 4,2x).",
        "Menstandarkan output audio pada -14 LUFS secara otomatis di seluruh aset keluaran.",
        "Mengurangi penggunaan disk sementara sebesar 68% melalui arsitektur in-memory stream piping.",
      ],
      codeSnippet: {
        title: "Dynamic Filtergraph Builder",
        language: "typescript",
        code: `export function buildCudaFilterGraph(width: number, height: number, lufs = -14) {
  return [
    \`hwupload_cuda\`,
    \`scale_cuda=\${width}:\${height}:interp_algo=lanczos\`,
    \`hwdownload,format=nv12\`,
    \`loudnorm=I=\${lufs}:TP=-1.5:LRA=11\`,
  ].join(",");
}`,
      },
    },
  },
  {
    title: "Aether3D Interactive Product Configurator",
    slug: "aether3d-interactive-configurator",
    badge: "Frontend & Interactive",
    summary:
      "Pengalaman web 3D real-time berbasis Next.js, React Three Fiber, dan Framer Motion dengan pencahayaan PBR kustom.",
    description:
      "Aplikasi showcase dan konfigurator 3D interaktif di peramban yang menggabungkan transisi tata letak Framer Motion dengan viewport WebGL/Three.js berkecepatan 60 FPS stabil di perangkat desktop maupun mobile.",
    techStack: [
      "Next.js",
      "React",
      "Three.js/R3F",
      "Framer Motion",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Frame Rate WebGL", value: "60 FPS Stabil" },
      { label: "Ukuran Bundle 3D", value: "-54% (Draco)" },
      { label: "First Contentful Paint", value: "0.7s" },
    ],
    liveUrl: "https://aether3d.benny.dev",
    githubUrl: "https://github.com/benny/aether3d-configurator",
    previewType: "video",
    bentoSpan: "standard",
    accentColor: "cyan",
    previewVisual: {
      gradient: "from-cyan-500/25 via-blue-500/10 to-zinc-950",
      fpsLabel: "60.0 FPS WebGL2",
      resolutionLabel: "Draco Mesh + Custom GLSL",
      terminalLines: [
        "[r3f-scene] Draco compressed GLB loaded (1.1 MB)",
        "[shader] Compiled custom Fresnel + studio HDRI map",
        "[motion] Spring camera rig synced to UI state",
      ],
    },
    caseStudy: {
      problem:
        "Visualisasi produk 3D di web sering kali terasa berat, membekukan main thread saat inisialisasi tekstur, dan terpisah secara visual dari antarmuka DOM standar.",
      architecture: [
        "Next.js App Router Shell: Memuat antarmuka UI kritis secara instan menggunakan Server Components sembari melakukan streaming aset 3D di latar belakang.",
        "Declarative R3F Scene Graph: Sinkronisasi state kamera dan material PBR langsung dengan kontrol antarmuka React tanpa re-render kanvas penuh.",
        "Adaptive Quality Scaler: Menyesuaikan resolusi pixel ratio (DPR) dan kompleksitas bayangan secara dinamis berdasarkan pengukuran frame time perangkat.",
      ],
      solution:
        "Mengintegrasikan kompresi geometri Draco dan tekstur KTX2 dengan transisi kamera berbasis pegas (spring) yang selaras dengan animasi komponen Framer Motion.",
      keyOutcomes: [
        "Mempertahankan 60 FPS konsisten pada perangkat kelas menengah melalui adaptive DPR scaling.",
        "Menurunkan ukuran unduhan aset 3D awal sebesar 54% tanpa kehilangan detail permukaan.",
        "Meningkatkan durasi interaksi pengguna rata-rata sebesar 3,1x dibandingkan galeri foto statis.",
      ],
    },
  },
  {
    title: "VoxelForge Low-Poly Simulation & Asset Pipeline",
    slug: "voxelforge-unity-simulation-pipeline",
    badge: "Game & Simulation",
    summary:
      "Kerangka kerja simulasi dunia taktis di Unity C# dengan pipeline otomasi aset low-poly dan GPU instancing.",
    description:
      "Sistem simulasi berbasis agen di Unity Engine yang mampu merender ribuan entitas low-poly sekaligus dengan satu draw call per kelompok material, didukung oleh pipeline otomatisasi ekspor aset dari Blender ke Unity.",
    techStack: [
      "Unity Engine",
      "C#",
      "Low-Poly Assets Pipeline",
      "Python",
      "CLI Tools",
    ],
    metrics: [
      { label: "Entitas Aktif", value: "10.000+ Agen" },
      { label: "Reduksi Draw Call", value: "-82% Batching" },
      { label: "Alokasi GC Runtime", value: "0 B / Frame" },
    ],
    liveUrl: "https://voxelforge.benny.dev",
    githubUrl: "https://github.com/benny/voxelforge-unity-pipeline",
    previewType: "image",
    bentoSpan: "standard",
    accentColor: "violet",
    previewVisual: {
      gradient: "from-violet-500/25 via-fuchsia-500/10 to-zinc-950",
      fpsLabel: "144 FPS URP",
      resolutionLabel: "GPU Instanced Mesh",
      terminalLines: [
        "[AssetPipeline] Atlas UV baked -> 256x256 palette.png",
        "[Unity-URP] SRP Batcher + GPU Instancing active (14 batches)",
        "[SimLoop] 10,240 agents updated in 2.1ms (0B GC alloc)",
      ],
    },
    caseStudy: {
      problem:
        "Mengimpor ratusan aset 3D low-poly ke Unity secara manual sering menghasilkan material duplikat yang membengkakkan jumlah draw call, sementara pembaruan ribuan agen simulasi di C# memicu lonjakan Garbage Collector (GC spikes).",
      architecture: [
        "Automated Asset Importer & UV Palette Baker: Skrip Python + Unity AssetPostprocessor yang secara otomatis memetakan seluruh mesh ke satu tekstur atlas palet global.",
        "Zero-Allocation Simulation Loop (C#): Menggunakan struktur data berbasis array kontigu (struct buffers) untuk memperbarui posisi dan status ribuan agen tanpa alokasi heap.",
        "GPU Instanced Rendering: Menggabungkan SRP Batcher dan DrawMeshInstancedIndirect untuk merender vegetasi dan unit simulasi secara masif.",
      ],
      solution:
        "Membangun pipeline end-to-end dari direktori sumber 3D hingga runtime Unity URP yang memvalidasi skala mesh, pivot, collider, dan pengelompokan material secara otomatis saat build.",
      keyOutcomes: [
        "Menurunkan jumlah draw call adegan padat dari 420 menjadi 74 (-82%).",
        "Menghilangkan frame stutter dengan menjaga alokasi GC pada 0 byte per frame selama simulasi berjalan.",
        "Mempercepat iterasi penambahan aset baru dari 25 menit menjadi kurang dari 30 detik melalui CLI otomasi.",
      ],
    },
  },
  {
    title: "NexusCLI & Autonomous DevOps Orchestrator",
    slug: "nexus-cli-devops-orchestrator",
    badge: "Systems & Automation",
    summary:
      "Perkakas CLI terpadu dan API otomasi kustom untuk deployment instan, audit performa, dan sinkronisasi artefak rilis.",
    description:
      "Suite CLI modern dan layanan webhook kustom yang menyatukan alur kerja pengujian, optimasi aset media, validasi skema, dan distribusi rilis lintas lingkungan cloud dengan antarmuka terminal interaktif.",
    techStack: [
      "CLI Tools",
      "Custom Automation APIs",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Waktu Siklus Rilis", value: "-75% (2.4 mnt)" },
      { label: "Otomasi Workflow", value: "35+ Command" },
      { label: "Overhead Memori CLI", value: "< 28 MB" },
    ],
    liveUrl: "https://nexus-cli.benny.dev",
    githubUrl: "https://github.com/benny/nexus-cli-orchestrator",
    previewType: "image",
    bentoSpan: "wide",
    accentColor: "amber",
    previewVisual: {
      gradient: "from-amber-500/20 via-orange-500/10 to-zinc-950",
      fpsLabel: "CLI v2.4.0",
      resolutionLabel: "REST + Webhook Engine",
      terminalLines: [
        "$ nexus release --env=production --verify-assets",
        "✔ Schema & Type-check passed in 1.2s",
        "✔ Media assets optimized via FFmpeg & WebP pipeline",
        "✔ Edge deployment live: https://prod.benny.dev (99ms TTFB)",
      ],
    },
    caseStudy: {
      problem:
        "Tim teknik menghabiskan terlalu banyak waktu pada tugas berulang sebelum rilis: mengoptimalkan media, memverifikasi variabel lingkungan, menjalankan migrasi, dan memantau metrik pasca-deploy di berbagai dashboard terpisah.",
      architecture: [
        "Modular Command Runner: Arsitektur plugin CLI berbasis Node.js dengan output streaming berwarna dan mode JSON untuk integrasi CI/CD.",
        "Signed Webhook Automation API: Endpoint berkecepatan tinggi dengan verifikasi tanda tangan HMAC untuk memicu pipeline build, notifikasi, dan rollback otomatis.",
        "Real-Time Telemetry Dashboard: Antarmuka Next.js ringan yang menampilkan status eksekusi command dan riwayat audit setiap rilis.",
      ],
      solution:
        "Merancang satu binary CLI lintas platform yang terhubung langsung ke API otomasi internal, mengubah daftar periksa rilis 18 langkah menjadi satu perintah terverifikasi.",
      keyOutcomes: [
        "Memangkas waktu rata-rata rilis produksi sebesar 75% (dari ~10 menit menjadi 2,4 menit).",
        "Mendeteksi kesalahan konfigurasi environment 100% sebelum tahap build dimulai.",
        "Digunakan setiap hari untuk mengelola proyek web, layanan API, dan distribusi build simulasi.",
      ],
    },
  },
];
