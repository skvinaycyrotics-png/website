(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui-patterns/tech-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechBackground",
    ()=>TechBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function TechBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TechBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let animationFrameId;
            let particles = [];
            const resize = {
                "TechBackground.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    initParticles();
                }
            }["TechBackground.useEffect.resize"];
            const initParticles = {
                "TechBackground.useEffect.initParticles": ()=>{
                    particles = [];
                    const numParticles = Math.floor(canvas.width * canvas.height / 15000);
                    for(let i = 0; i < numParticles; i++){
                        particles.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            vx: (Math.random() - 0.5) * 0.5,
                            vy: (Math.random() - 0.5) * 0.5,
                            size: Math.random() * 2 + 1
                        });
                    }
                }
            }["TechBackground.useEffect.initParticles"];
            const draw = {
                "TechBackground.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // We will use a color based on the current theme, but for now we'll use a semi-transparent blue/cyan that works in both
                    ctx.fillStyle = 'rgba(14, 165, 233, 0.15)'; // Tailwind sky-500 with low opacity
                    ctx.strokeStyle = 'rgba(14, 165, 233, 0.05)';
                    particles.forEach({
                        "TechBackground.useEffect.draw": (p, i)=>{
                            p.x += p.vx;
                            p.y += p.vy;
                            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                            ctx.fill();
                            for(let j = i + 1; j < particles.length; j++){
                                const p2 = particles[j];
                                const dx = p.x - p2.x;
                                const dy = p.y - p2.y;
                                const dist = Math.sqrt(dx * dx + dy * dy);
                                if (dist < 150) {
                                    ctx.beginPath();
                                    ctx.moveTo(p.x, p.y);
                                    ctx.lineTo(p2.x, p2.y);
                                    ctx.stroke();
                                }
                            }
                        }
                    }["TechBackground.useEffect.draw"]);
                    animationFrameId = requestAnimationFrame(draw);
                }
            }["TechBackground.useEffect.draw"];
            window.addEventListener('resize', resize);
            resize();
            draw();
            return ({
                "TechBackground.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    cancelAnimationFrame(animationFrameId);
                }
            })["TechBackground.useEffect"];
        }
    }["TechBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-30 mix-blend-screen"
    }, void 0, false, {
        fileName: "[project]/src/components/ui-patterns/tech-background.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(TechBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = TechBackground;
var _c;
__turbopack_context__.k.register(_c, "TechBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui-patterns/animated-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedItem",
    ()=>AnimatedItem,
    "AnimatedSection",
    ()=>AnimatedSection,
    "fadeUpVariant",
    ()=>fadeUpVariant,
    "scaleUpVariant",
    ()=>scaleUpVariant,
    "slideInFromLeftVariant",
    ()=>slideInFromLeftVariant,
    "staggerContainerVariant",
    ()=>staggerContainerVariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const staggerContainerVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};
const fadeUpVariant = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 70,
            damping: 20,
            mass: 1
        }
    }
};
const scaleUpVariant = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 70,
            damping: 20
        }
    }
};
const slideInFromLeftVariant = {
    hidden: {
        opacity: 0,
        x: -40
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
            damping: 20
        }
    }
};
function AnimatedSection({ children, stagger = false, once = true, variants, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once
        },
        variants: variants || (stagger ? staggerContainerVariant : fadeUpVariant),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui-patterns/animated-section.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = AnimatedSection;
function AnimatedItem({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: fadeUpVariant,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui-patterns/animated-section.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c1 = AnimatedItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedSection");
__turbopack_context__.k.register(_c1, "AnimatedItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui-patterns_4e4a0f19._.js.map