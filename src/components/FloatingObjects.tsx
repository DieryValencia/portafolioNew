'use client';

import Image from 'next/image';
import { FOX_ILLUSTRATION } from '@/data/constants';

export function FloatingObjects() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '70px 1fr 70px',
        gridTemplateRows: 'auto auto auto',
        gap: '4px',
        width: '100%',
        maxWidth: '500px',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      {/* Fila 1 */}
      <div style={{ animation: 'floatObj 3.5s ease-in-out infinite', display: 'flex', justifyContent: 'center' }}>
        <ReactLogo />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', animation: 'spin 9s linear infinite' }}>
        <Star />
      </div>
      <div style={{ animation: 'floatObj 4s ease-in-out infinite 0.8s', display: 'flex', justifyContent: 'center' }}>
        <Terminal />
      </div>

      {/* Fila 2 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ animation: 'floatObj 4.2s ease-in-out infinite 0.3s' }}>
          <GitBranch />
        </div>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A78BFA' }} />
      </div>

      <div style={{ animation: 'heroFloat 4s ease-in-out infinite' }}>
        <Image
          src={FOX_ILLUSTRATION}
          alt="Developer fox"
          width={400}
          height={400}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 300px, 400px"
          quality={85}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            filter: 'drop-shadow(0 12px 32px rgba(249,115,22,0.22))',
          }}
          priority
          fetchPriority="high"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ animation: 'floatObj 5s ease-in-out infinite 2s' }}>
          <DockerIcon />
        </div>
        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34D399' }} />
      </div>

      {/* Fila 3 */}
      <div style={{ animation: 'floatObj 4.5s ease-in-out infinite 1.2s', display: 'flex', justifyContent: 'center' }}>
        <TSBadge />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FB7185' }} />
      </div>
      <div style={{ animation: 'floatObj 3.8s ease-in-out infinite 0.5s', display: 'flex', justifyContent: 'center' }}>
        <GraphQLBadge />
      </div>
    </div>
  );
}

function ReactLogo() {
  return (
    <>
      <svg className="float-obj-light" viewBox="0 0 60 60" width="48" height="48">
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#38BDF8" strokeWidth="2" />
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#38BDF8" strokeWidth="2" transform="rotate(60 30 30)" />
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#38BDF8" strokeWidth="2" transform="rotate(120 30 30)" />
        <circle cx="30" cy="30" r="5" fill="#38BDF8" />
      </svg>
      <svg className="float-obj-dark" viewBox="0 0 60 60" width="48" height="48" style={{ filter: 'drop-shadow(0 0 6px #38BDF8)' }}>
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#7DD3FC" strokeWidth="2.5" />
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#7DD3FC" strokeWidth="2.5" transform="rotate(60 30 30)" />
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#7DD3FC" strokeWidth="2.5" transform="rotate(120 30 30)" />
        <circle cx="30" cy="30" r="5" fill="#38BDF8" />
        <circle cx="30" cy="30" r="7" fill="#38BDF8" opacity="0.2" />
      </svg>
    </>
  );
}

function Terminal() {
  return (
    <>
      <svg className="float-obj-light" viewBox="0 0 76 54" width="76" height="54">
        <rect x="1" y="1" width="74" height="52" rx="10" fill="#1E1B4B" stroke="#818CF8" strokeWidth="1.5" />
        <rect x="1" y="1" width="74" height="14" rx="10" fill="#312E81" />
        <rect x="1" y="12" width="74" height="3" fill="#312E81" />
        <circle cx="14" cy="8" r="3" fill="#F87171" />
        <circle cx="24" cy="8" r="3" fill="#FCD34D" />
        <circle cx="34" cy="8" r="3" fill="#34D399" />
        <text x="9" y="30" fontSize="8" fontFamily="monospace" fill="#34D399">
          $ npm run dev
        </text>
        <text x="9" y="44" fontSize="8" fontFamily="monospace" fill="#818CF8">
          {'>'} ready ✓
        </text>
      </svg>
      <svg className="float-obj-dark" viewBox="0 0 76 54" width="76" height="54" style={{ filter: 'drop-shadow(0 0 8px #818CF8)' }}>
        <rect x="1" y="1" width="74" height="52" rx="10" fill="#1a1040" stroke="#A78BFA" strokeWidth="2" />
        <rect x="1" y="1" width="74" height="14" rx="10" fill="#2D1B69" />
        <rect x="1" y="12" width="74" height="3" fill="#2D1B69" />
        <circle cx="14" cy="8" r="3" fill="#FCA5A5" />
        <circle cx="24" cy="8" r="3" fill="#FDE68A" />
        <circle cx="34" cy="8" r="3" fill="#6EE7B7" />
        <text x="9" y="30" fontSize="8" fontFamily="monospace" fill="#6EE7B7">
          $ npm run dev
        </text>
        <text x="9" y="44" fontSize="8" fontFamily="monospace" fill="#C4B5FD">
          {'>'} ready ✓
        </text>
      </svg>
    </>
  );
}

function GitBranch() {
  return (
    <>
      <svg className="float-obj-light" viewBox="0 0 50 60" width="44" height="54">
        <rect x="1" y="1" width="48" height="58" rx="8" fill="#1C2333" stroke="#4B5563" strokeWidth="1.5" />
        <circle cx="16" cy="14" r="5" fill="none" stroke="#F97316" strokeWidth="2" />
        <circle cx="16" cy="46" r="5" fill="none" stroke="#34D399" strokeWidth="2" />
        <circle cx="36" cy="28" r="5" fill="none" stroke="#38BDF8" strokeWidth="2" />
        <line x1="16" y1="19" x2="16" y2="41" stroke="#6B7280" strokeWidth="1.5" />
        <path d="M16 22 Q16 28 36 28" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
      <svg className="float-obj-dark" viewBox="0 0 50 60" width="44" height="54" style={{ filter: 'drop-shadow(0 0 7px #F97316)' }}>
        <rect x="1" y="1" width="48" height="58" rx="8" fill="#0D1117" stroke="#F97316" strokeWidth="1.5" />
        <circle cx="16" cy="14" r="5" fill="none" stroke="#FB923C" strokeWidth="2.5" />
        <circle cx="16" cy="46" r="5" fill="none" stroke="#6EE7B7" strokeWidth="2.5" />
        <circle cx="36" cy="28" r="5" fill="none" stroke="#7DD3FC" strokeWidth="2.5" />
        <line x1="16" y1="19" x2="16" y2="41" stroke="#374151" strokeWidth="1.5" />
        <path d="M16 22 Q16 28 36 28" fill="none" stroke="#FB923C" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    </>
  );
}

function DockerIcon() {
  return (
    <>
      <svg className="float-obj-light" viewBox="0 0 56 48" width="52" height="44">
        <rect x="1" y="1" width="54" height="46" rx="8" fill="#EFF6FF" stroke="#2496ED" strokeWidth="1.5" />
        {[[8, 8], [8, 18], [8, 28], [20, 8], [20, 18], [32, 8]].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="9" height="7" rx="2" fill="#2496ED" opacity={0.7 + i * 0.05} />
        ))}
        <path d="M40 32 Q46 28 50 32 Q50 40 40 40 Q32 40 30 34 Q36 36 40 32Z" fill="#2496ED" opacity="0.5" />
      </svg>
      <svg className="float-obj-dark" viewBox="0 0 56 48" width="52" height="44" style={{ filter: 'drop-shadow(0 0 8px #2496ED)' }}>
        <rect x="1" y="1" width="54" height="46" rx="8" fill="#0C1F35" stroke="#38BDF8" strokeWidth="1.5" />
        {[[8, 8], [8, 18], [8, 28], [20, 8], [20, 18], [32, 8]].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="9" height="7" rx="2" fill="#38BDF8" opacity={0.65 + i * 0.06} />
        ))}
        <path d="M40 32 Q46 28 50 32 Q50 40 40 40 Q32 40 30 34 Q36 36 40 32Z" fill="#38BDF8" opacity="0.45" />
      </svg>
    </>
  );
}

function TSBadge() {
  return (
    <>
      <svg className="float-obj-light" viewBox="0 0 54 54" width="50" height="50">
        <rect x="1" y="1" width="52" height="52" rx="10" fill="#3178C6" />
        <text x="27" y="36" textAnchor="middle" fontSize="24" fontWeight="bold" fontFamily="monospace" fill="white">
          TS
        </text>
      </svg>
      <svg className="float-obj-dark" viewBox="0 0 54 54" width="50" height="50" style={{ filter: 'drop-shadow(0 0 10px #3178C6)' }}>
        <rect x="1" y="1" width="52" height="52" rx="10" fill="#1a3a5c" stroke="#60A5FA" strokeWidth="1.5" />
        <text x="27" y="36" textAnchor="middle" fontSize="24" fontWeight="bold" fontFamily="monospace" fill="#93C5FD">
          TS
        </text>
      </svg>
    </>
  );
}

function Star() {
  return (
    <>
      <svg className="float-obj-light" viewBox="0 0 30 30" width="28" height="28">
        <polygon points="15,2 18,11 27,11 20,17 23,26 15,20 7,26 10,17 3,11 12,11" fill="#F97316" />
      </svg>
      <svg className="float-obj-dark" viewBox="0 0 30 30" width="28" height="28" style={{ filter: 'drop-shadow(0 0 6px #F97316)' }}>
        <polygon points="15,2 18,11 27,11 20,17 23,26 15,20 7,26 10,17 3,11 12,11" fill="#FB923C" />
        <polygon points="15,5 17,12 24,12 19,16 21,23 15,19 9,23 11,16 6,12 13,12" fill="#FED7AA" opacity="0.3" />
      </svg>
    </>
  );
}

function GraphQLBadge() {
  return (
    <>
      <svg className="float-obj-light" viewBox="0 0 54 54" width="50" height="50">
        <rect x="1" y="1" width="52" height="52" rx="10" fill="#F5E6FF" stroke="#E10098" strokeWidth="1.5" />
        <text x="27" y="36" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="monospace" fill="#E10098">
          GraphQL
        </text>
      </svg>
      <svg className="float-obj-dark" viewBox="0 0 54 54" width="50" height="50" style={{ filter: 'drop-shadow(0 0 8px #E10098)' }}>
        <rect x="1" y="1" width="52" height="52" rx="10" fill="#1a0520" stroke="#F472B6" strokeWidth="1.5" />
        <text x="27" y="36" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="monospace" fill="#F9A8D4">
          GraphQL
        </text>
      </svg>
    </>
  );
}
