module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/theme-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/theme-provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/src/components/ui/toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Toaster() {
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/client-toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientToaster",
    ()=>ClientToaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toaster.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function ClientToaster() {
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
        fileName: "[project]/src/components/client-toaster.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/layout-client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutClient",
    ()=>LayoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
;
;
'use client';
;
;
const AnimatedBg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ui-patterns/animated-bg.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const SupportDesk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/layout/SupportDesk.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const CookieConsent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/cookie-consent.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
function LayoutClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedBg, {}, void 0, false, {
                fileName: "[project]/src/components/layout-client.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SupportDesk, {}, void 0, false, {
                fileName: "[project]/src/components/layout-client.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CookieConsent, {}, void 0, false, {
                fileName: "[project]/src/components/layout-client.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ui-patterns/tech-background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechBackground",
    ()=>TechBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function TechBackground() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: -2000,
        y: -2000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationFrameId;
        let particles = [];
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        const initParticles = ()=>{
            particles = [];
            const numParticles = Math.floor(canvas.width * canvas.height / 10000); // Increased density
            for(let i = 0; i < numParticles; i++){
                const size = Math.random() * 2.5 + 1;
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: size,
                    baseSize: size
                });
            }
        };
        const handleMouseMove = (e)=>{
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        const draw = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mouse = mouseRef.current;
            const isDark = document.documentElement.classList.contains('dark');
            // Ultra-High Visibility Neon (Cyan for Light, Brilliant Sky Blue for Dark)
            const primaryColor = isDark ? '56, 189, 248' : '14, 165, 233';
            particles.forEach((p, i)=>{
                const dxm = p.x - mouse.x;
                const dym = p.y - mouse.y;
                const distm = Math.sqrt(dxm * dxm + dym * dym);
                // Stronger Magnetic Influence
                if (distm < 350) {
                    const force = (350 - distm) / 350;
                    const angle = Math.atan2(dym, dxm);
                    p.x -= Math.cos(angle) * force * 2.5;
                    p.y -= Math.sin(angle) * force * 2.5;
                    p.size = p.baseSize * (1 + force * 2);
                } else {
                    p.size = p.baseSize;
                }
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                // Draw Particle with Glow
                ctx.shadowBlur = isDark ? 10 : 0;
                ctx.shadowColor = `rgb(${primaryColor})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${primaryColor}, ${isDark ? 0.9 : 0.6})`;
                ctx.fill();
                ctx.shadowBlur = 0;
                // Mouse Neural Link (Thicker & Brighter)
                if (distm < 350) {
                    ctx.lineWidth = 1.2;
                    ctx.strokeStyle = `rgba(${primaryColor}, ${0.7 * (1 - distm / 350)})`;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
                // Inter-particle Neural Web
                for(let j = i + 1; j < particles.length; j++){
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        ctx.lineWidth = 0.8;
                        ctx.strokeStyle = `rgba(${primaryColor}, ${isDark ? 0.35 : 0.15} * (1 - dist / 180))`;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(draw);
        };
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();
        draw();
        return ()=>{
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-background transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.05] dark:opacity-[0.1]",
                style: {
                    backgroundImage: `linear-gradient(#0ea5e9 1.5px, transparent 1.5px), linear-gradient(90deg, #0ea5e9 1.5px, transparent 1.5px)`,
                    backgroundSize: '80px 80px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui-patterns/tech-background.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/components/ui-patterns/tech-background.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui-patterns/tech-background.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg",
            destructive: "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 70,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/src/components/logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Logo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center text-xl font-bold', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: '180px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/Cyrotics-Logo.png",
                alt: "CYROTICS TECHNOLOGIES Logo",
                width: 180,
                height: 40,
                priority: true,
                className: "transition-all dark:invert dark:hue-rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/logo.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/logo.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/theme-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ThemeToggle() {
    const { setTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        onClick: ()=>setTheme(theme === 'light' ? 'dark' : 'light'),
        className: "rounded-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-toggle.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-toggle.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle theme"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-toggle.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/theme-toggle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BLOG_POSTS",
    ()=>BLOG_POSTS,
    "BUDGET_RANGES",
    ()=>BUDGET_RANGES,
    "CAREER_BENEFITS",
    ()=>CAREER_BENEFITS,
    "CAREER_FAQS",
    ()=>CAREER_FAQS,
    "CAREER_LEVELS",
    ()=>CAREER_LEVELS,
    "CONTACT_METHODS",
    ()=>CONTACT_METHODS,
    "CONTACT_SUBJECTS",
    ()=>CONTACT_SUBJECTS,
    "CONTACT_TIMES",
    ()=>CONTACT_TIMES,
    "COUNTRY_CODES",
    ()=>COUNTRY_CODES,
    "DEPARTMENTS",
    ()=>DEPARTMENTS,
    "EMPLOYEE_TESTIMONIALS",
    ()=>EMPLOYEE_TESTIMONIALS,
    "EXPERIENCE_LEVELS",
    ()=>EXPERIENCE_LEVELS,
    "FAQS",
    ()=>FAQS,
    "HEAR_ABOUT_US_OPTIONS",
    ()=>HEAR_ABOUT_US_OPTIONS,
    "JOB_OPENINGS",
    ()=>JOB_OPENINGS,
    "JOB_TYPES",
    ()=>JOB_TYPES,
    "LOCATIONS",
    ()=>LOCATIONS,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "OCCUPATIONS",
    ()=>OCCUPATIONS,
    "PRIMARY_NAV_LINKS",
    ()=>PRIMARY_NAV_LINKS,
    "PRIORITY_LEVELS",
    ()=>PRIORITY_LEVELS,
    "PROJECTS",
    ()=>PROJECTS,
    "PROJECTS_FOR_HOME",
    ()=>PROJECTS_FOR_HOME,
    "PROJECT_TYPES",
    ()=>PROJECT_TYPES,
    "SALUTATIONS",
    ()=>SALUTATIONS,
    "SECONDARY_NAV_LINKS",
    ()=>SECONDARY_NAV_LINKS,
    "SEGMENTS",
    ()=>SEGMENTS,
    "SERVICES",
    ()=>SERVICES,
    "SPECIAL_JOB_TYPES",
    ()=>SPECIAL_JOB_TYPES,
    "TEAM_MEMBERS",
    ()=>TEAM_MEMBERS,
    "TESTIMONIALS",
    ()=>TESTIMONIALS,
    "companyAddress",
    ()=>companyAddress,
    "footerQuickLinks",
    ()=>footerQuickLinks,
    "homeServices",
    ()=>homeServices,
    "socialLinks",
    ()=>socialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-ssr] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$speaker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSpeaker$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-speaker.js [app-ssr] (ecmascript) <export default as MonitorSpeaker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-ssr] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2d$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseZap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database-zap.js [app-ssr] (ecmascript) <export default as DatabaseZap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cctv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cctv$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cctv.js [app-ssr] (ecmascript) <export default as Cctv>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fingerprint.js [app-ssr] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Presentation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/presentation.js [app-ssr] (ecmascript) <export default as Presentation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$screen$2d$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenShare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/screen-share.js [app-ssr] (ecmascript) <export default as ScreenShare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/signal.js [app-ssr] (ecmascript) <export default as Signal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$charging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryCharging$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/battery-charging.js [app-ssr] (ecmascript) <export default as BatteryCharging>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$combine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Combine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/combine.js [app-ssr] (ecmascript) <export default as Combine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fan.js [app-ssr] (ecmascript) <export default as Fan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2d$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlugZap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug-zap.js [app-ssr] (ecmascript) <export default as PlugZap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$chart$2d$gantt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GanttChartSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-chart-gantt.js [app-ssr] (ecmascript) <export default as GanttChartSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-ssr] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$traffic$2d$cone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrafficCone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/traffic-cone.js [app-ssr] (ecmascript) <export default as TrafficCone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-ssr] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$expand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Expand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/expand.js [app-ssr] (ecmascript) <export default as Expand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server-cog.js [app-ssr] (ecmascript) <export default as ServerCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-ssr] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-cog.js [app-ssr] (ecmascript) <export default as CloudCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check-2.js [app-ssr] (ecmascript) <export default as FileCheck2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-ssr] (ecmascript) <export default as Factory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-check.js [app-ssr] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-ssr] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$half$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldHalf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-half.js [app-ssr] (ecmascript) <export default as ShieldHalf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-ssr] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
;
const NAV_LINKS = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/about',
        label: 'About Us'
    },
    {
        href: '/services',
        label: 'Services',
        subLinks: [
            {
                href: '/services/data-center-infrastructure-solutions',
                label: 'Data Center Infrastructure',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
            },
            {
                href: '/services/cloud-hybrid-it-solutions',
                label: 'Cloud & Hybrid IT Solutions',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudCog$3e$__["CloudCog"]
            },
            {
                href: '/services/scalable-storage-architecture',
                label: 'Scalable Storage Architecture',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
            },
            {
                href: '/services/nextgen-cybersecurity-shield',
                label: 'NextGen Cybersecurity Shield',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
            },
            {
                href: '/services/audio-visual-communication',
                label: 'Audio-Visual & Communication',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$speaker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSpeaker$3e$__["MonitorSpeaker"]
            },
            {
                href: '/services/consulting-services',
                label: 'IT Strategy & Advisory',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                href: '/services/unified-communications',
                label: 'Unified Communications (UC)',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            },
            {
                href: '/services/security-surveillance',
                label: 'Security & Surveillance',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cctv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cctv$3e$__["Cctv"]
            },
            {
                href: '/services/managed-services',
                label: 'Managed Services',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__["ServerCog"]
            },
            {
                href: '/services/software-development',
                label: 'Software Development',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
            },
            {
                href: '/services/ai-ml-solutions',
                label: 'AI & ML Solutions',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"]
            },
            {
                href: '/services/smart-factory-building-infra',
                label: 'Smart Factory & Building',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
            },
            {
                href: '/services/intelligent-urban-ecosystems',
                label: 'Smart City Infrastructure',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
            },
            {
                href: '/services/renewable-energy',
                label: 'Renewable Energy',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
            }
        ]
    },
    {
        href: '#industry',
        label: 'Business Sectors',
        subLinks: [
            {
                href: '/business-sector/overview',
                label: 'Overview',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                href: '#industry-solutions',
                label: 'Industry Solution',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subLinks: [
                    {
                        href: '/business-sector/telecom',
                        label: 'Telecom',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"]
                    },
                    {
                        href: '/business-sector/logistics',
                        label: 'Logistics',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
                    },
                    {
                        href: '/business-sector/education',
                        label: 'Education',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
                    },
                    {
                        href: '/business-sector/health-pharmacy',
                        label: 'Health & Pharmacy',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"]
                    },
                    {
                        href: '/business-sector/energy',
                        label: 'Energy',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
                    },
                    {
                        href: '/business-sector/manufacturing-units',
                        label: 'Manufacturing Units',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"]
                    },
                    {
                        href: '/business-sector/mobility-automotive-engineering',
                        label: 'Mobility & Automation',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"]
                    },
                    {
                        href: '/business-sector/processing-units',
                        label: 'Processing Units',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$combine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Combine$3e$__["Combine"]
                    },
                    {
                        href: '/business-sector/urban-development',
                        label: 'Urban Development',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
                    }
                ]
            },
            {
                href: '#public-solutions',
                label: 'Public Solution',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                subLinks: [
                    {
                        href: '/business-sector/defence',
                        label: 'Defence',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$half$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldHalf$3e$__["ShieldHalf"]
                    },
                    {
                        href: '/business-sector/e-governance',
                        label: 'E-Governance',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                    },
                    {
                        href: '/business-sector/public-sector-undertakings',
                        label: 'Public Sector Undertakings',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
                    },
                    {
                        href: '/business-sector/smart-city',
                        label: 'Smart City',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
                    }
                ]
            }
        ]
    },
    {
        href: '/projects',
        label: 'Projects'
    },
    {
        href: '/blog',
        label: 'Blog'
    },
    {
        href: '/contact',
        label: 'Contact Us'
    }
];
const PRIMARY_NAV_LINKS = [
    {
        href: '/',
        label: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        href: '/services',
        label: 'Services',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        subLinks: [
            {
                href: '/services/data-center-infrastructure-solutions',
                label: 'Data Center Infrastructure',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
            },
            {
                href: '/services/cloud-hybrid-it-solutions',
                label: 'Cloud & Hybrid IT Solutions',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudCog$3e$__["CloudCog"]
            },
            {
                href: '/services/scalable-storage-architecture',
                label: 'Scalable Storage Architecture',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
            },
            {
                href: '/services/nextgen-cybersecurity-shield',
                label: 'NextGen Cybersecurity Shield',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
            },
            {
                href: '/services/audio-visual-communication',
                label: 'Audio-Visual & Communication',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$speaker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSpeaker$3e$__["MonitorSpeaker"]
            },
            {
                href: '/services/consulting-services',
                label: 'IT Strategy & Advisory',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                href: '/services/unified-communications',
                label: 'Unified Communications (UC)',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            },
            {
                href: '/services/security-surveillance',
                label: 'Security & Surveillance',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cctv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cctv$3e$__["Cctv"]
            },
            {
                href: '/services/managed-services',
                label: 'Managed Services',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__["ServerCog"]
            },
            {
                href: '/services/software-development',
                label: 'Software Development',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
            },
            {
                href: '/services/ai-ml-solutions',
                label: 'AI & ML Solutions',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"]
            },
            {
                href: '/services/smart-factory-building-infra',
                label: 'Smart Factory & Building',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
            },
            {
                href: '/services/intelligent-urban-ecosystems',
                label: 'Smart City Infrastructure',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
            },
            {
                href: '/services/renewable-energy',
                label: 'Renewable Energy',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
            }
        ]
    },
    {
        href: '#industry',
        label: 'Business Sectors',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
        subLinks: [
            {
                href: '/business-sector/overview',
                label: 'Overview',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                href: '#industry-solutions',
                label: 'Industry Solution',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
                subLinks: [
                    {
                        href: '/business-sector/telecom',
                        label: 'Telecom',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"]
                    },
                    {
                        href: '/business-sector/logistics',
                        label: 'Logistics',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
                    },
                    {
                        href: '/business-sector/education',
                        label: 'Education',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
                    },
                    {
                        href: '/business-sector/health-pharmacy',
                        label: 'Health & Pharmacy',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"]
                    },
                    {
                        href: '/business-sector/energy',
                        label: 'Energy',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
                    },
                    {
                        href: '/business-sector/manufacturing-units',
                        label: 'Manufacturing Units',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"]
                    },
                    {
                        href: '/business-sector/mobility-automotive-engineering',
                        label: 'Mobility & Automation',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"]
                    },
                    {
                        href: '/business-sector/processing-units',
                        label: 'Processing Units',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$combine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Combine$3e$__["Combine"]
                    },
                    {
                        href: '/business-sector/urban-development',
                        label: 'Urban Development',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
                    }
                ]
            },
            {
                href: '#public-solutions',
                label: 'Public Solution',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                subLinks: [
                    {
                        href: '/business-sector/defence',
                        label: 'Defence',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$half$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldHalf$3e$__["ShieldHalf"]
                    },
                    {
                        href: '/business-sector/e-governance',
                        label: 'E-Governance',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                    },
                    {
                        href: '/business-sector/public-sector-undertakings',
                        label: 'Public Sector Undertakings',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
                    },
                    {
                        href: '/business-sector/smart-city',
                        label: 'Smart City',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
                    }
                ]
            }
        ]
    },
    {
        href: '/projects',
        label: 'Projects',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$chart$2d$gantt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GanttChartSquare$3e$__["GanttChartSquare"]
    },
    {
        href: '/trust-and-compliance',
        label: 'Trust & Compliance',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        href: '/contact',
        label: 'Contact Us',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
    }
];
const SECONDARY_NAV_LINKS = [
    {
        href: '/about',
        label: 'About Us'
    },
    {
        href: '/blog',
        label: 'Blog'
    },
    {
        href: '/faqs',
        label: 'FAQs'
    }
];
const SERVICES = [
    {
        slug: 'data-center-infrastructure-solutions',
        title: 'Data Center Infrastructure Solutions',
        category: 'Data Center Infrastructure',
        shortDescription: 'We architect resilient, 99.999% available data centers. From modernization to ultra-fast networking, our solutions provide the high-performance foundation your enterprise demands.',
        description: 'We engineer mission-critical, future-ready data centers designed for 99.999% availability. Our solutions blend high-density computing, intelligent thermal management, and ultra-fast networking to provide the high-performance foundation your enterprise demands.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
        imageUrl: '/data-center.png',
        imageHint: 'data center servers',
        features: [
            {
                title: 'End-to-End Data Center Build',
                description: 'We provide complete turnkey data center construction, from initial design and civil work to electrical, cooling, and fire safety systems. Our service includes deploying all IT hardware, delivering a production-ready facility.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"]
            },
            {
                title: 'AI-Enabled Next-Gen Data Center',
                description: 'Transform your data center into an intelligent, self-optimizing environment. We integrate AI for predictive analytics, automated workload balancing, and enhanced energy efficiency to ensure peak performance.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"]
            },
            {
                title: 'Cloud Infrastructure Solutions',
                description: 'Leverage the power of the cloud with our expert services in public, private, and hybrid cloud deployments. We design secure, scalable, and cost-effective cloud architectures on platforms like AWS, Azure, and GCP.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"]
            },
            {
                title: 'Data Center Modernization',
                description: 'Optimize your data center for efficiency, cooling, and power with our modification and optimization services.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
            },
            {
                title: 'Network Transformation',
                description: 'Seamlessly migrate to next-gen networks with our expertise in SD-WAN, cloud networking, and wireless solutions.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"]
            },
            {
                title: 'IT Infrastructure Management',
                description: 'Proactive monitoring, management, and support for your entire IT stack, ensuring operational excellence.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2d$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseZap$3e$__["DatabaseZap"]
            }
        ],
        techStack: [
            'Cisco',
            'HPE',
            'Dell EMC',
            'VMware',
            'Microsoft Azure',
            'AWS',
            'GCP'
        ],
        caseStudies: [
            {
                title: 'Enterprise Network Overhaul',
                slug: 'proj-1'
            }
        ]
    },
    {
        slug: 'cloud-hybrid-it-solutions',
        title: 'Cloud & Hybrid IT Solutions',
        category: 'Cloud & Hybrid IT Solutions',
        shortDescription: 'Accelerate transformation with secure, frictionless hybrid cloud architectures. We bridge legacy reliability with cloud-native agility for infinite scalability and security.',
        description: 'Accelerate your digital transformation with secure, frictionless hybrid cloud architectures. We bridge the gap between legacy reliability and cloud-native agility, ensuring your data is always accessible, infinitely scalable, and protected by enterprise-grade security.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudCog$3e$__["CloudCog"],
        imageUrl: '/Cloud-&-Hybrid.png',
        imageHint: 'hybrid cloud network',
        features: [
            {
                title: 'Cloud Architecture & Strategy',
                description: 'Expert design for AWS, Azure & GCP. We provide cloud readiness assessment, and a detailed migration planning & execution strategy.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"]
            },
            {
                title: 'Hybrid IT Integration',
                description: 'Seamless integration of on-premise & cloud environments with secure connectivity, workload balancing, and multi-cloud interoperability.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"]
            },
            {
                title: 'Cloud Security & Compliance',
                description: 'Implementation of Zero Trust cloud architecture, IAM, MFA, encryption, and firewall integration to meet government & industry standards.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
            },
            {
                title: 'Cloud Operations & Optimization',
                description: 'Continuous performance monitoring, cost optimization (FinOps), and automation & orchestration of cloud resources.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__["ServerCog"]
            },
            {
                title: 'Disaster Recovery & Business Continuity',
                description: 'Robust cloud-based DR solutions, high-availability architecture, and automated backup & recovery processes to ensure business continuity.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"]
            }
        ],
        techStack: [
            'AWS',
            'Microsoft Azure',
            'Google Cloud Platform',
            'VMware',
            'Kubernetes',
            'Terraform'
        ],
        caseStudies: []
    },
    {
        slug: 'scalable-storage-architecture',
        title: 'Scalable Storage Architecture',
        category: 'Data Center & Cloud Infrastructure Solutions',
        shortDescription: 'Petabyte-scale storage architectures designed for mission-critical workloads. High-performance, secure, and instantaneously accessible across your global infrastructure.',
        description: 'High-performance, petabyte-scale storage architectures designed for the most demanding workloads. From NVMe-powered all-flash arrays to multi-tier archival systems, we ensure your mission-critical data remains secure, redundant, and instantaneously accessible across your global infrastructure.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        imageUrl: '/Storage.png',
        imageHint: 'data storage array',
        features: [
            {
                title: 'Easily scale from TB to multiple PB',
                description: 'Supports horizontal and vertical expansion, ideal for growing enterprise workloads.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$expand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Expand$3e$__["Expand"]
            },
            {
                title: 'High-Performance Storage (All-Flash / Hybrid)',
                description: 'NVMe/SSD-based high-speed response with low-latency read/write operations, suitable for HPC, databases, VMs, and analytics.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            },
            {
                title: 'Multi-Tier Storage',
                description: 'Automated tiering based on data usage across high-performance SSD, cost-optimal SAS, and archival HDD storage.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"]
            },
            {
                title: 'SAN / NAS / Object Storage Support',
                description: 'Support for SAN (Fibre Channel, iSCSI), NAS (NFS, SMB/CIFS), and Object Storage (S3) for any workload.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__["ServerCog"]
            },
            {
                title: 'Storage Virtualization',
                description: 'Pool storage from multiple vendors into a single, centrally managed console to reduce hardware dependency.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$combine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Combine$3e$__["Combine"]
            },
            {
                title: 'High Availability & Redundancy',
                description: 'Active-active/active-passive architecture with RAID 5/6/10 support and multipath I/O (MPIO) failover clusters.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
            },
            {
                title: 'Data Protection & Disaster Recovery',
                description: 'Features snapshot replication, synchronous/asynchronous replication, offsite DR, and immutable storage for ransomware protection.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
            },
            {
                title: 'Intelligent Data Management',
                description: 'Benefit from deduplication, compression, thin provisioning, and real-time monitoring and forecasting.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"]
            },
            {
                title: 'Cloud-Ready Storage',
                description: 'Hybrid & multi-cloud integration with support for cloud backup (AWS, Azure, GCP) and cloud tiering.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudCog$3e$__["CloudCog"]
            },
            {
                title: 'Secure Storage Architecture',
                description: 'AES-256 data-at-rest encryption, end-to-end data path encryption, and RBAC with MFA access control.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__["FileCheck2"]
            }
        ],
        techStack: [
            'Dell EMC',
            'NetApp',
            'HPE',
            'Pure Storage',
            'IBM Storage',
            'Ceph',
            'MinIO'
        ],
        caseStudies: []
    },
    {
        slug: 'nextgen-cybersecurity-shield',
        title: 'NextGen Cybersecurity Shield',
        category: 'NextGen Cybersecurity Shield',
        shortDescription: 'Fortify your enterprise with an AI-driven cybersecurity ecosystem. Zero-Trust aligned defense providing real-time threat intelligence and proactive mitigation.',
        description: 'Fortify your enterprise with an impenetrable, AI-driven cybersecurity ecosystem. Our Zero-Trust aligned defense strategy provides multi-layered protection, real-time threat intelligence, and proactive mitigation to safeguard your critical infrastructure against the most sophisticated global cyber threats.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        imageUrl: '/Cyber.png',
        imageHint: 'cyber security',
        features: [
            {
                title: 'Zero Trust Architecture',
                description: 'Implement a "never trust, always verify" model to secure your network, applications, and data by eliminating implicit trust and continuously validating every access request.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"]
            },
            {
                title: 'AI-Powered Threat Detection',
                description: 'Utilize machine learning and AI to proactively detect, analyze, and respond to threats in real-time, moving from a reactive to a predictive security posture.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
            },
            {
                title: 'Managed Security Operations (SOC)',
                description: 'Our 24/7 Security Operations Center provides continuous monitoring, threat hunting, and incident response to safeguard your organization around the clock.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"]
            }
        ],
        techStack: [
            'Palo Alto Networks',
            'Fortinet',
            'CrowdStrike',
            'SIEM',
            'SOAR'
        ],
        caseStudies: []
    },
    {
        slug: 'audio-visual-communication',
        title: 'Audio-Visual & Communication',
        category: 'Audio-Visual & Communication',
        shortDescription: 'Transform connectivity with immersive, high-impact AV environments. State-of-the-art boardrooms and command centers delivering a premium communication experience.',
        description: 'Transform how your organization connects and collaborates with high-impact, immersive audio-visual environments. We design state-of-the-art executive boardrooms, global command centers, and public-facing displays that deliver crystal-clear communication and a premium user experience.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$speaker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSpeaker$3e$__["MonitorSpeaker"],
        imageUrl: '/Audio-Visual-&-Communication.png',
        imageHint: 'conference room',
        features: [
            {
                title: 'Audio & Video Solutions',
                description: 'Design and installation of professional audio systems and high-definition video displays for auditoriums, boardrooms, and public spaces.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
            },
            {
                title: 'Conference Room Solutions',
                description: 'Smart conference rooms with wireless presentation, video conferencing, and automated controls.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Presentation$3e$__["Presentation"]
            },
            {
                title: 'Digital Signage',
                description: 'Dynamic and centrally managed digital signage networks for corporate communication, advertising, and wayfinding.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$screen$2d$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenShare$3e$__["ScreenShare"]
            },
            {
                title: 'Public Address Systems',
                description: 'Integrated public address and voice alarm systems for clear communication in any environment.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"]
            }
        ],
        techStack: [
            'Crestron',
            'JBL',
            'Polycom',
            'Samsung Displays'
        ],
        caseStudies: []
    },
    {
        slug: 'consulting-services',
        title: 'IT Strategy & Advisory',
        category: 'IT Strategy & Advisory',
        shortDescription: 'Navigate digital transformation with senior-level IT advisory. We provide the technical roadmap and governance required to align technology with your corporate vision.',
        description: 'Navigate the complexities of digital transformation with our senior-level IT advisory and strategic consulting. We provide the technical roadmap, risk-assessment frameworks, and operational governance required to align your technology investments with your long-term corporate vision.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        imageUrl: '/IT-Strategy-&-Advisory.png',
        imageHint: 'business consulting meeting',
        features: [
            {
                title: 'IT Infrastructure Consulting',
                description: 'We design and optimize resilient, high-performance IT infrastructures—including network architecture, cloud strategy, and HA/DR planning—aligned with your long-term business growth.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
            },
            {
                title: 'Data Center Consulting',
                description: 'Our experts provide end-to-end consulting for data center assessment, modernization, migration, and greenfield builds, ensuring peak efficiency, security, and compliance.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
            },
            {
                title: 'IT Strategy Consulting',
                description: 'We align technology investments with your organizational goals by developing clear IT roadmaps, digital transformation strategies, and robust governance frameworks.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
            },
            {
                title: 'Project Management Consultancy',
                description: 'Our PMP-certified experts ensure complex IT projects are delivered on time and within budget through structured planning, risk mitigation, and stakeholder management.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$chart$2d$gantt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GanttChartSquare$3e$__["GanttChartSquare"]
            }
        ],
        techStack: [
            'ITIL',
            'PMP',
            'Agile',
            'TOGAF',
            'AWS',
            'Azure',
            'GCP',
            'Cisco'
        ],
        caseStudies: []
    },
    {
        slug: 'unified-communications',
        title: 'Unified Communications (UC)',
        category: 'Audio-Visual & Communication',
        shortDescription: 'Unify your global workforce with seamless, HD communication platforms. Integrate voice, video, and messaging into a single, synchronized intuitive ecosystem.',
        description: 'Unify your global workforce with seamless, high-definition communication platforms. We integrate voice, video, messaging, and real-time collaboration into a single, intuitive ecosystem that empowers your team to work with total synchronization from any location.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        imageUrl: '/Unified-Communications-(UC).png',
        imageHint: 'team collaboration video call',
        features: [
            {
                title: 'Unified Voice & Video Calling',
                description: 'High-quality voice and video calls with advanced features like call routing, IVR, voicemail-to-email, and conference bridging.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
            },
            {
                title: 'Instant Messaging & Presence',
                description: 'Send quick messages, share files, and check real-time availability of your team members.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
            },
            {
                title: 'Audio & Video Conferencing',
                description: 'Host secure meetings, webinars, and virtual discussions with HD-quality video and screen-sharing capabilities.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
            },
            {
                title: 'Collaboration Tools',
                description: 'Integrated platforms for group chats, document sharing, and collaborative workspaces to enhance teamwork.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            },
            {
                title: 'Mobility & Remote Access',
                description: 'Access communication tools from smartphones, tablets, or laptops, ensuring uninterrupted communication on the move.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
            },
            {
                title: 'Integration with Business Applications',
                description: 'Seamless integration with CRM, ERP, helpdesk systems, and project management tools for end-to-end communication flow.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"]
            }
        ],
        techStack: [
            'Microsoft Teams',
            'Cisco Webex',
            'Zoom',
            'Avaya',
            'Poly'
        ],
        caseStudies: []
    },
    {
        slug: 'security-surveillance',
        title: 'Security & Surveillance',
        category: 'CCTV & ELV Systems',
        shortDescription: 'Secure perimeters with AI-powered surveillance and integrated security frameworks. Real-time situational awareness and advanced biometric access control.',
        description: 'Secure your physical and digital perimeters with intelligent, AI-powered surveillance and integrated security frameworks. Our high-definition systems provide real-time situational awareness, advanced biometric access control, and automated threat detection for maximum operational safety.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cctv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cctv$3e$__["Cctv"],
        imageUrl: '/Security-&-Surveillance.png',
        imageHint: 'security camera',
        features: [
            {
                title: 'CCTV Surveillance Systems',
                description: 'High-definition IP, Analog, and Hybrid camera systems with advanced video analytics and remote monitoring.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cctv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cctv$3e$__["Cctv"]
            },
            {
                title: 'Access Control Systems',
                description: 'Secure your premises with biometric, card-based, and mobile access control solutions for granular control.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"]
            },
            {
                title: 'Fire Detection & Safety',
                description: 'Intelligent fire alarm and suppression systems that provide early detection and ensure regulatory compliance.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"]
            },
            {
                title: 'Integrated Security Solutions',
                description: 'Unify all security systems onto a single platform for centralized command and control, improving situational awareness and response efficiency.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$combine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Combine$3e$__["Combine"]
            }
        ],
        techStack: [
            'Hikvision',
            'Bosch',
            'Axis Communications',
            'Honeywell'
        ],
        caseStudies: [
            {
                title: 'Corporate Campus Security',
                slug: 'proj-2'
            }
        ]
    },
    {
        slug: 'managed-services',
        title: 'Managed Services',
        category: 'Managed Services',
        shortDescription: 'Experience peace of mind with 24/7 proactive managed services. We provide continuous optimization of your IT landscape while you focus on driving innovation.',
        description: 'Experience total peace of mind with our "Always-On" proactive managed services. We provide 24/7 monitoring, rapid-response incident management, and continuous optimization of your entire IT landscape, ensuring peak performance while you focus on driving business innovation.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__["ServerCog"],
        imageUrl: '/Managed-Services.png',
        imageHint: 'managed services control room',
        features: [
            {
                title: 'Network Managed Services',
                description: '24×7 NOC Monitoring, LAN/WAN/Wi-Fi Management, SD-WAN Operations, and Performance Optimization.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"]
            },
            {
                title: 'Cybersecurity Managed Services',
                description: 'SOC (L1, L2, L3) Operations, Firewall Management, SIEM/SOAR & Log Analytics, and Vulnerability Management.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
            },
            {
                title: 'Data Center Managed Services',
                description: 'Tier-III Data Center Operations, Server/Storage/Virtualization Management, Backup & Disaster Recovery (DR).',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
            },
            {
                title: 'Cloud & Hybrid IT Management',
                description: 'AWS/Azure/Private Cloud Operations, Hybrid Infrastructure Monitoring, Cost Optimization, and Security Governance.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudCog$3e$__["CloudCog"]
            },
            {
                title: 'AV, ELV & Smart Infrastructure Management',
                description: 'Command & Control Centers, Digital Signage & AV Systems, CCTV Monitoring, and BMS/IBMS Solutions.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
            },
            {
                title: 'IoT & Automation Managed Services',
                description: 'Device Monitoring & Health Analytics, Edge Computing Support, and Predictive Maintenance Models.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
            }
        ],
        techStack: [
            'ITIL',
            'NOC',
            'SOC',
            'SIEM',
            'SOAR',
            'AWS',
            'Azure',
            'VMware'
        ],
        caseStudies: []
    },
    {
        slug: 'software-development',
        title: 'Software Development',
        category: 'Software Development',
        shortDescription: 'High-performance, custom-engineered software solutions for complex enterprise challenges. Robust, secure, and ready to scale with a world-class user experience.',
        description: 'We build high-performance, custom-engineered software solutions that solve complex enterprise challenges. Our cloud-native development approach ensures your applications are robust, secure, and ready to scale with your business while delivering a world-class user experience.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        imageUrl: '/Software-Development.png',
        imageHint: 'code editor',
        features: [
            {
                title: 'Custom Enterprise Applications',
                description: 'Bespoke software solutions designed to streamline your business processes and workflows.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
            },
            {
                title: 'Cloud & Mobile Solutions',
                description: 'Develop and deploy scalable applications on the cloud and deliver seamless experiences on mobile devices.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
            },
            {
                title: 'API Development & Integration',
                description: 'Build and integrate robust APIs to connect your systems and unlock new business capabilities.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"]
            }
        ],
        techStack: [
            'React',
            'Node.js',
            'Python',
            'Docker',
            'AWS'
        ],
        caseStudies: []
    },
    {
        slug: 'ai-ml-solutions',
        title: 'AI & ML Solutions',
        category: 'Software Development',
        shortDescription: 'Unlock real-time intelligence with bespoke AI ecosystems. Predictive accuracy and cognitive workflows that transform strategic decision-making.',
        description: 'Unlock the power of real-time intelligence with our bespoke AI and Machine Learning ecosystems. We move beyond simple automation to deliver predictive accuracy, deep-data insights, and cognitive workflows that transform how your organization makes strategic decisions in a data-driven world.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"],
        imageUrl: '/AL-&-ML-Solutions.png',
        imageHint: 'artificial intelligence brain',
        features: [
            {
                title: 'AI-Powered Automation',
                description: 'Streamline repetitive workflows using intelligent automation systems that reduce manual effort, minimize errors, and deliver operational precision.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
            },
            {
                title: 'Machine Learning Models',
                description: 'We build robust ML models engineered to understand data patterns, predict outcomes, and support strategic decisions.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"]
            },
            {
                title: 'Computer Vision Solutions',
                description: 'Enable machines to see, analyze, and interpret real-world visuals with advanced vision models.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
            },
            {
                title: 'Natural Language Processing (NLP)',
                description: 'Allow systems to comprehend human language and deliver intelligent, contextual responses, like chatbots and sentiment analysis.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
            },
            {
                title: 'AI for IoT & Smart Infrastructure',
                description: 'Integrate AI with IoT to unlock adaptive, self-learning environments for predictive maintenance and energy optimization.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"]
            },
            {
                title: 'AI Consulting & Strategy',
                description: 'We guide organizations in developing future-proof AI strategies aligned with business KPIs, from readiness assessment to end-to-end solution design.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
            }
        ],
        techStack: [
            'Python',
            'TensorFlow',
            'PyTorch',
            'scikit-learn',
            'AWS SageMaker',
            'GCP AI Platform'
        ],
        caseStudies: []
    },
    {
        slug: 'smart-factory-building-infra',
        title: 'Smart Factory & Building',
        category: 'Smart Factory & Building',
        shortDescription: 'Redefine efficiency with fully automated facility infrastructure. Integrate HVAC, lighting, and energy into a centralized, data-driven smart platform.',
        description: 'Redefine operational efficiency with intelligent, sustainable, and fully automated facility infrastructure. We integrate HVAC, smart lighting, and energy management into a centralized, data-driven platform that reduces costs while creating a superior, responsive environment.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
        imageUrl: '/Smart-Factory-&-Building.png',
        imageHint: 'modern architecture',
        features: [
            {
                title: 'Building Management Systems (BMS)',
                description: 'Centralized control and automation of your building’s core systems for operational efficiency.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
            },
            {
                title: 'HVAC Control Systems',
                description: 'Intelligent control of heating, ventilation, and air conditioning to optimize comfort and reduce energy consumption.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__["Fan"]
            },
            {
                title: 'Energy Management',
                description: 'Monitor, analyze, and optimize energy consumption to reduce costs and improve sustainability.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$charging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryCharging$3e$__["BatteryCharging"]
            },
            {
                title: 'IoT Integration',
                description: 'Connect and manage a wide range of IoT sensors and devices for real-time insights and automation.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"]
            }
        ],
        techStack: [
            'Schneider Electric',
            'Siemens',
            'Johnson Controls',
            'LoRaWAN'
        ],
        caseStudies: []
    },
    {
        slug: 'intelligent-urban-ecosystems',
        title: 'Smart City Infrastructure',
        category: 'Smart City Infrastructure',
        shortDescription: 'Engineer future-ready urban living with IoT-driven smart city ecosystems. Centralized digital fabrics enhancing public safety and resource efficiency.',
        description: 'Engineer the future of urban living with intelligent, IoT-driven smart city ecosystems. We integrate city-wide surveillance, adaptive traffic management, and smart utility grids into a secure, centralized digital fabric that enhances public safety and maximizes resource efficiency.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        imageUrl: '/Smart-City-Infrastructure.png',
        imageHint: 'smart city',
        features: [
            {
                title: 'Intelligent Traffic Management',
                description: 'Deploy smart traffic signals, vehicle detection sensors, and centralized management platforms to reduce congestion and improve traffic flow.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$traffic$2d$cone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrafficCone$3e$__["TrafficCone"]
            },
            {
                title: 'City-Wide Surveillance',
                description: 'Implement a network of AI-powered cameras for public safety, incident detection, and crowd management with a central command and control center.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cctv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cctv$3e$__["Cctv"]
            },
            {
                title: 'Smart Utilities & IoT',
                description: 'Integrate IoT sensors for smart lighting, waste management, and environmental monitoring to optimize resource usage and reduce operational costs.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
            }
        ],
        techStack: [
            'LoRaWAN',
            '5G',
            'IoT Platforms',
            'GIS',
            'Video Analytics'
        ],
        caseStudies: []
    },
    {
        slug: 'renewable-energy',
        title: 'Renewable Energy',
        category: 'Renewable Energy',
        shortDescription: 'Transition to sustainability with enterprise-grade solar energy solutions. High-efficiency turnkey infrastructure delivering significant operational savings.',
        description: 'Transition to a sustainable future with high-efficiency, enterprise-grade renewable energy solutions. We provide turnkey solar infrastructure and intelligent energy storage systems that drastically reduce your carbon footprint while delivering significant long-term operational cost savings.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
        imageUrl: '/Renewable-Energy.png',
        imageHint: 'solar panels',
        features: [
            {
                title: 'Solar Power Systems',
                description: 'Design, installation, and commissioning of rooftop and ground-mounted solar power plants.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
            },
            {
                title: 'Energy Storage Solutions',
                description: 'Integrate battery storage to ensure power reliability and optimize energy usage.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$charging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryCharging$3e$__["BatteryCharging"]
            },
            {
                title: 'Grid-Tie Systems',
                description: 'Seamlessly integrate your solar power system with the public grid, enabling net metering and ensuring a stable power supply.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2d$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlugZap$3e$__["PlugZap"]
            },
            {
                title: 'Solar Maintenance',
                description: 'Comprehensive O&amp;M services to maximize the performance and lifespan of your solar assets.',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"]
            }
        ],
        techStack: [
            'Trina Solar',
            'SMA',
            'Enphase',
            'Tesla Powerwall'
        ],
        caseStudies: []
    }
];
const homeServices = [
    {
        slug: 'data-center-infrastructure-solutions',
        title: 'Data Center Infrastructure',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
    },
    {
        slug: 'nextgen-cybersecurity-shield',
        title: 'NextGen Cybersecurity Shield',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
    },
    {
        slug: 'audio-visual-communication',
        title: 'Audio-Visual & Communication',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$speaker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSpeaker$3e$__["MonitorSpeaker"]
    },
    {
        slug: 'unified-communications',
        title: 'Unified Communications (UC)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        slug: 'security-surveillance',
        title: 'Security & Surveillance',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cctv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cctv$3e$__["Cctv"]
    },
    {
        slug: 'managed-services',
        title: 'Managed Services',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__["ServerCog"]
    },
    {
        slug: 'renewable-energy',
        title: 'Renewable Energy',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
    }
];
const PROJECTS = [
    {
        id: 'proj-cims',
        title: 'Chhindwara Institute of Medical Science – Madhya Pradesh',
        client: 'PWD',
        shortDescription: 'Complete IT infrastructure development, including data center, networking, CCTV, and wireless infrastructure.',
        longDescription: "For the Chhindwara Institute of Medical Science in Madhya Pradesh, we executed a comprehensive IT infrastructure project. The scope included the full development of the IT infrastructure, migration and commissioning of the data center, setup of the network core and access layers, installation of CCTV and surveillance server infrastructure, and implementation of wireless infrastructure, passive cabling, and server management.",
        imageUrl: '/cims.png',
        imageHint: 'hospital building',
        tags: [
            'IT Infrastructure',
            'Data Center',
            'Networking',
            'CCTV',
            'Smart Campus'
        ],
        timeline: 'Ongoing',
        results: 'A state-of-the-art smart medical campus providing seamless connectivity, high-availability systems, and secure data accessibility to staff and students.'
    },
    {
        id: 'proj-gmc-chandrapur',
        title: 'Government Medical College – Chandrapur, Maharashtra',
        client: 'HSCC',
        shortDescription: 'End-to-end IT & ELV infrastructure, Wi-Fi campus, network security, and IP CCTV with a monitoring command centre.',
        longDescription: 'For the Government Medical College in Chandrapur, we provided a comprehensive turnkey solution. Our scope covered end-to-end IT and ELV infrastructure, including a campus-wide Wi-Fi deployment, a robust network security and firewall setup, and an advanced IP CCTV system complete with a central monitoring command centre. This project ensures the new medical college has a secure, scalable, and high-performance technology backbone.',
        imageUrl: '/gmc.png',
        imageHint: 'modern medical college',
        tags: [
            'IT Infrastructure',
            'Wi-Fi',
            'Network Security',
            'CCTV',
            'Smart Campus'
        ],
        timeline: '12 Months',
        results: 'Delivered a turnkey technology infrastructure solution for a new-build medical college, ensuring campus-wide connectivity and security from day one.'
    },
    {
        id: 'proj-3',
        title: 'Mahindra Enclave – Mumbai',
        client: 'Mahindra &amp; Mahindra',
        shortDescription: 'Comprehensive fire safety and smart security solutions, including fire alarms, public address systems, surveillance, and access control.',
        longDescription: "For the prestigious Mahindra Enclave in Mumbai, we provided an integrated safety and security solution. The project involved deploying a sophisticated Fire Alarm System coupled with a Public Address System for emergency coordination. We also installed a smart surveillance network and advanced access control systems to ensure the security and safety of the residents.",
        imageUrl: '/mahindra.png',
        imageHint: 'modern apartment building',
        tags: [
            'Fire Safety',
            'Surveillance',
            'Access Control',
            'Smart Building'
        ],
        timeline: '18 Months',
        results: 'Enhanced resident safety and security with a unified, state-of-the-art system for fire detection, emergency communication, and premises monitoring.'
    },
    {
        id: 'proj-4',
        title: 'Bihar Animal Sciences University – Patna',
        client: 'ACIL',
        shortDescription: 'Full campus technology deployment including networking, data center, fire alarm, PA system, access control, CCTV, and Wi-Fi.',
        longDescription: 'We delivered a comprehensive technology overhaul for the Bihar Animal Sciences University campus. The project included complete campus networking, data center cabling &amp; server setup, a fire alarm and public address system, access control, and the deployment of integrated CCTV and Wi-Fi systems to create a modern, secure, and connected learning environment.',
        imageUrl: '/basu.png',
        imageHint: 'university campus',
        tags: [
            'Campus Networking',
            'Data Center',
            'Fire Safety',
            'Access Control',
            'CCTV',
            'Wi-Fi'
        ],
        timeline: '10 Months',
        results: 'Created a modern, secure, and fully connected campus environment.'
    },
    {
        id: 'bpgmc',
        title: 'Bhagwan Parshuram Government Medical College – Kaithal, Haryana',
        client: 'Bridge and Roof Company (India) Limited',
        shortDescription: 'Comprehensive IT &amp; ELV infrastructure for a new medical college, including smart lecture halls, campus-wide networking, and integrated security systems.',
        longDescription: 'We provided a full turnkey solution for the Bhagwan Parshuram Government Medical College in Haryana. The project encompassed the entire IT and Extra-Low Voltage (ELV) infrastructure. This included smart lecture hall solutions, a high-speed fiber backbone and enterprise network, complete campus networking, data center cabling &amp; server setup, Fire Alarm &amp; Public Address System Solutions, Access Control System, and comprehensive CCTV, Wi-Fi &amp; Access Control coverage across the campus.',
        imageUrl: '/kaithal.png',
        imageHint: 'medical college building',
        tags: [
            'IT Infrastructure',
            'ELV',
            'Smart Lecture Hall',
            'Networking',
            'Data Center',
            'Fire Safety',
            'Access Control',
            'CCTV',
            'Wi-Fi'
        ],
        timeline: 'Ongoing',
        results: 'Delivering a cutting-edge, fully integrated technology backbone for a new government medical college, ensuring a secure, connected, and future-ready environment for learning and healthcare.'
    },
    {
        id: 'sgtb',
        title: 'Shri Guru Tegh Bahadur Sahib Government Medical College – Yamuna Nagar, Haryana',
        client: 'Government of Haryana',
        shortDescription: 'End-to-end smart campus solution, integrating IT, ELV, security, and data center infrastructure for a new government medical college.',
        longDescription: 'This project involves the delivery of a comprehensive technology infrastructure for a new medical college. The scope includes: Network &amp; Security Infrastructure, CCTV &amp; Video Surveillance System, Data Center Setup, IT &amp; ELV Infrastructure, Smart Lecture Hall Solutions, Fiber Backbone &amp; Enterprise Network, Smart Hospital IT Infrastructure, Campus Wi-Fi &amp; Secure Network Backbone, CCTV Surveillance &amp; Data Center Deployment, Complete Campus Networking, Data Center Cabling &amp; Server Setup, Fire Alarm System &amp; Public Address System Solutions, and an integrated Access Control System.',
        imageUrl: '/yamunanagar.png',
        imageHint: 'modern medical college',
        tags: [
            'IT Infrastructure',
            'ELV',
            'Smart Campus',
            'Data Center',
            'Network Security',
            'CCTV',
            'Fire Safety',
            'Access Control',
            'Wi-Fi'
        ],
        timeline: 'Ongoing',
        results: "The project delivers a state-of-the-art smart medical campus, designed to ensure seamless connectivity, high system availability, and secure access to digital resources. By integrating advanced IT and ELV infrastructure, the institution now benefits from:\n\n- Uninterrupted network performance for academic, administrative, and clinical operations\n\n- Secure and centralized data accessibility for staff, students, and medical professionals\n\n- Enhanced digital learning experiences through reliable communication systems\n\n- Improved operational efficiency driven by automation and modern network design\n\nThis transformation empowers the medical campus to operate as a modern, technology-enabled institution capable of supporting future growth and innovation."
    },
    {
        id: 'nial-jewar',
        title: 'Noida International Airport Limited - Jewar, Uttar Pradesh',
        client: 'Noida International Airport Limited',
        shortDescription: 'Comprehensive data center and network infrastructure setup for the new international airport.',
        longDescription: 'For the new Noida International Airport, we are providing critical foundational technology infrastructure. This includes establishing the core Network &amp; Security Infrastructure, setting up the primary Data Center, and executing the complete Data Center Cabling &amp; Server Setup to ensure robust and scalable airport operations from day one.',
        imageUrl: '/nial.png',
        imageHint: 'airport terminal',
        tags: [
            'Data Center',
            'Network Security',
            'IT Infrastructure',
            'Airport'
        ],
        timeline: 'Ongoing',
        results: "Building a future-ready, high-performance technology backbone to support one of India's largest greenfield airport projects."
    },
    {
        id: 'techno-dc',
        title: 'Techno Data Center – Chennai',
        client: 'Techno Group, Chennai',
        shortDescription: 'Comprehensive data center build-out in Chennai, including network and security infrastructure, CCTV, and complete data center cabling and setup.',
        longDescription: 'We delivered a full-scale data center infrastructure project for Techno Group in Chennai. The scope included setting up the core Network &amp; Security Infrastructure, a comprehensive CCTV &amp; Video Surveillance System, the primary Data Center, and all supporting IT Infrastructure. We implemented a Fiber Backbone for high-speed connectivity, managed the complete data center networking, cabling, and server setup, and deployed a robust Wireless Solution with integrated Access Control and Wi-Fi.',
        imageUrl: '/techno.png',
        imageHint: 'data center servers',
        tags: [
            'Data Center',
            'Network Security',
            'IT Infrastructure',
            'CCTV',
            'Wireless',
            'Access Control'
        ],
        timeline: 'Completed',
        results: "The project designed to ensure seamless connectivity, high system availability, and secure access to digital resources. By integrating advanced IT infrastructure, the benefits from:\n\nUninterrupted network performance \n\nSecure and centralized data accessibility \n\nEnhanced digital learning experiences through reliable communication systems\n\nImproved operational efficiency driven by automation and modern network design"
    },
    {
        id: 'aiims-rajkot',
        title: 'All India Institute of Medical Sciences – Rajkot, Gujarat',
        client: 'AIIMS Rajkot',
        shortDescription: 'End-to-end smart hospital and campus infrastructure, including data center, networking, security, and smart classroom solutions.',
        longDescription: 'We are delivering a comprehensive, turnkey technology solution for the entire campus and hospital. The scope of work includes: Network &amp; Security Infrastructure, CCTV &amp; Video Surveillance System, Data Center Setup, IT &amp; ELV Infrastructure, Smart Lecture Hall Solutions, Fiber Backbone &amp; Enterprise Network, Smart Hospital IT Infrastructure, Campus Wi-Fi &amp; Secure Network Backbone, CCTV Surveillance &amp; Data Center Deployment, Complete Campus Networking, Data Center Cabling &amp; Server Setup, Fire Alarm System &amp; Public Address System Solutions, and an integrated Access Control System.',
        imageUrl: '/aiims.png',
        imageHint: 'modern hospital building',
        tags: [
            'Smart Hospital',
            'IT Infrastructure',
            'Data Center',
            'Network Security',
            'Smart Campus',
            'ELV',
            'CCTV'
        ],
        timeline: 'Ongoing',
        results: "The project delivers a state-of-the-art smart medical campus, designed to ensure seamless connectivity, high system availability, and secure access to digital resources. By integrating advanced IT and ELV infrastructure, the institution now benefits from:\n\n- Uninterrupted network performance for academic, administrative, and clinical operations\n\n- Secure and centralized data accessibility for staff, students, and medical professionals\n\n- Enhanced digital learning experiences through reliable communication systems\n\n- Improved operational efficiency driven by automation and modern network design\n\nThis transformation empowers the medical campus to operate as a modern, technology-enabled institution capable of supporting future growth and innovation."
    },
    {
        id: 'iim-bodh-gaya',
        title: 'IIM Bodh Gaya – Bihar',
        client: 'Indian Institute of Management Bodh Gaya',
        shortDescription: 'Comprehensive smart campus solution for IIM Bodh Gaya, integrating IT, security, and data center infrastructure.',
        longDescription: "For IIM Bodh Gaya, we are providing an end-to-end technology infrastructure solution. The scope includes Network &amp; Security Infrastructure, CCTV &amp; Video Surveillance, Data Center Setup, IT &amp; ELV Infrastructure, Smart Lecture Hall Solutions, a Fiber Backbone &amp; Enterprise Network, and a comprehensive Access Control System. This creates a fully integrated and modern campus environment fit for a premier management institute.",
        imageUrl: '/iim.png',
        imageHint: 'university campus building',
        tags: [
            'Smart Campus',
            'IT Infrastructure',
            'Data Center',
            'Network Security',
            'ELV',
            'CCTV'
        ],
        timeline: 'Ongoing',
        results: "The project delivers a state-of-the-art smart campus, designed to ensure seamless connectivity, high system availability, and secure access to digital resources for students and faculty. By integrating advanced IT and ELV infrastructure, the institution benefits from:\n\n- Uninterrupted network performance for academic and administrative operations.\n- Secure and centralized data accessibility for all stakeholders.\n- Enhanced digital learning experiences through reliable communication and smart classroom systems.\n- Improved operational efficiency driven by automation and modern network design.\n\nThis transformation empowers the campus to operate as a modern, technology-enabled institution capable of supporting future growth and innovation."
    },
    {
        id: 'dlf-mall-goa',
        title: 'DLF Mall – Goa',
        client: 'DLF Limited',
        shortDescription: 'State-of-the-art Audio-Visual (AV) infrastructure for a seamless and immersive visitor experience.',
        longDescription: `Cyrotics Technologies successfully delivered a state-of-the-art Audio-Visual (AV) infrastructure for the prestigious DLF Mall – Goa, ensuring a seamless and immersive visitor experience. Our scope included the design, integration, testing, and commissioning of a complete smart AV ecosystem. This involved a centralized AV distribution system for multi-screen content routing, deployment of 4K digital signage and video walls, and a comprehensive Public Address &amp; Background Music system with zonal controls. We also equipped the conference and control rooms with modern AV solutions, including wireless presentation and video conferencing capabilities, to streamline mall operations.`,
        imageUrl: '/dlf.png',
        imageHint: 'shopping mall interior',
        tags: [
            'Smart AV',
            'Digital Signage',
            'Video Wall',
            'Public Address System',
            'Smart Building'
        ],
        timeline: 'Completed',
        results: 'Delivered a fully integrated, centrally managed smart AV solution that enhances the visitor experience, improves operational efficiency, and provides a powerful platform for retail promotions and mall-wide communications.'
    }
];
const PROJECTS_FOR_HOME = PROJECTS.slice(0, 3).map((p)=>({
        id: p.id,
        title: p.title,
        client: p.client,
        shortDescription: p.shortDescription,
        imageUrl: p.imageUrl,
        imageHint: p.imageHint,
        tags: p.tags
    }));
const TESTIMONIALS = [
    {
        quote: 'Their end-to-end data center solution was a masterpiece of engineering. The migration was flawless, and our new infrastructure is faster, more secure, and ready for future AI workloads. Cyrotics is a partner you can trust with mission-critical projects.',
        name: 'CIO',
        title: 'Major Public Sector Bank',
        company: 'Apex Financial',
        imageUrl: 'https://picsum.photos/seed/priya/100/100'
    },
    {
        quote: 'The smart campus infrastructure Cyrotics delivered for our new medical college is world-class. From the data center to the ELV and security systems, everything is integrated seamlessly. Their team set a new benchmark for excellence and professionalism.',
        name: 'Project Director',
        title: 'Leading Government Medical College',
        company: 'Nova Labs',
        imageUrl: 'https://picsum.photos/seed/alok/100/100'
    },
    {
        quote: 'The custom automation solution CYROTICS designed for our manufacturing line has been a game-changer, driving a 40% increase in productivity. They are more than just vendors; they are genuine innovation partners who deeply understand industrial needs. Highly recommended.',
        name: 'Sameer Verma',
        title: 'Property Manager',
        company: 'Innovate Towers',
        imageUrl: 'https://picsum.photos/seed/sameer/100/100'
    },
    {
        quote: 'The bespoke ERP system CYROTICS developed for us has completely revolutionized our workflow. Production efficiency has increased by 30%, and we now have real-time visibility across our entire process. Their developers truly understood our unique challenges and delivered a perfect solution.',
        name: 'Kiran Desai',
        title: 'COO',
        company: 'Precision Parts Inc.',
        imageUrl: 'https://picsum.photos/seed/kiran/100/100'
    },
    {
        quote: 'From network architecture to implementation, CYROTICS has been an indispensable partner. Their SD-WAN solution has dramatically increased our branch agility and significantly reduced our connectivity costs. Their technical support is consistently responsive and highly knowledgeable.',
        name: 'Amit Patel',
        title: 'IT Director',
        company: 'Retail Chain Corp',
        imageUrl: 'https://picsum.photos/seed/amit/100/100'
    },
    {
        quote: 'Our new medical college demanded a state-of-the-art IT and ELV infrastructure, and CYROTICS delivered flawlessly. Their smart campus solution, including an integrated data center and security systems, has established a new standard for educational institutions in our region.',
        name: 'Dr. R. Mathur',
        title: 'Dean',
        company: 'National Medical College',
        imageUrl: 'https://picsum.photos/seed/mathur/100/100'
    },
    {
        quote: 'The solar power plant that CYROTICS installed has exceeded all our expectations. We have reduced our energy costs by over 70% and significantly lowered our carbon footprint. Their end-to-end project management was exceptionally professional and seamless.',
        name: 'Sunil Agarwal',
        title: 'Factory Head',
        company: 'Green Manufacturing Co.',
        imageUrl: 'https://picsum.photos/seed/sunil/100/100'
    },
    {
        quote: 'CYROTICS’ expertise in automotive simulation and CAE is truly unmatched. Their virtual validation process identified critical design flaws early on, saving us months of development time and substantial prototyping costs. They are a genuine engineering partner.',
        name: 'Rajesh Nair',
        title: 'Head of R&amp;D',
        company: 'Momentum EV',
        imageUrl: 'https://picsum.photos/seed/rajesh/100/100'
    }
];
const TEAM_MEMBERS = [
    {
        name: 'Arjun Desai',
        role: 'Founder & CEO',
        imageUrl: 'https://picsum.photos/seed/arjun/400/400',
        bio: 'With over 20 years in the technology sector, Arjun drives the company’s vision for innovation and excellence. His leadership is pivotal in establishing CYROTICS as a leader in technology solutions.'
    },
    {
        name: 'Meera Iyer',
        role: 'Chief Technology Officer',
        imageUrl: 'https://picsum.photos/seed/meera/400/400',
        bio: 'Meera is the architectural mind behind our most complex solutions. With a deep expertise in infrastructure and security, she ensures our technical offerings remain at the cutting edge.'
    },
    {
        name: 'Vikram Singh',
        role: 'Head of Business Development',
        imageUrl: 'https://picsum.photos/seed/vikram/400/400',
        bio: 'Vikram leads our strategic growth and client relationship initiatives. His focus on understanding client needs ensures we deliver solutions that provide real, measurable value.'
    }
];
const CAREER_LEVELS = [
    'Apprenticeship',
    'Graduates',
    'Internship / Working Students',
    'Manager',
    'Professionals'
];
const JOB_TYPES = [
    'Full-time',
    'Remote',
    'Hybrid',
    'Part-time',
    'Contract'
];
const SPECIAL_JOB_TYPES = {
    Apprenticeship: [
        'Apprenticeship',
        'Training Integrated Studies'
    ],
    'Internship / Working Students': [
        'Internship (Students)',
        'Working Student',
        'Part-time'
    ]
};
const OCCUPATIONS = [
    {
        level: 'Executive',
        roles: [
            'Chief Executive Officer (CEO)',
            'Chief Technology Officer (CTO)',
            'Chief Operations Officer (COO)',
            'Chief Information Security Officer (CISO)',
            'Vice President – Operations',
            'Vice President – Projects',
            'Network Director',
            'DC Infrastructure Director',
            'Cybersecurity Director',
            'Head of AV Engineering',
            'ELV Project Director',
            'IoT Systems Director',
            'Software Engineering Director',
            'Director – Sales & Strategy',
            'HR Director',
            'Procurement Director',
            'CFO',
            'AI/ML Director'
        ]
    },
    {
        level: 'Senior Level',
        roles: [
            'Network Architect',
            'Senior Network Engineer',
            'Security Architect',
            'SOC Manager',
            'AV Solutions Architect',
            'Senior AV Engineer',
            'ELV Project Manager',
            'Senior ELV Engineer',
            'IoT Solutions Architect',
            'Technical Lead',
            'Project Director',
            'Business Development Manager',
            'HR Manager',
            'Procurement Manager',
            'Senior Full Stack Developer',
            'Senior Accountant',
            'Senior AI Engineer'
        ]
    },
    {
        level: 'Mid-Senior Level',
        roles: [
            'Network Engineer',
            'NOC Engineer',
            'SOC Analyst L2/L3',
            'Firewall Engineer',
            'AV Engineer',
            'ELV Engineer',
            'Embedded Systems Engineer',
            'Software Developer',
            'Project Manager',
            'Sales Executive',
            'HR Executive',
            'Purchase Executive',
            'Security Engineer',
            'IoT Engineer',
            'Sales Manager',
            'Accounts Executive',
            'Machine Learning Engineer'
        ]
    },
    {
        level: 'Associate Level',
        roles: [
            'Network Associate',
            'SOC Analyst L1/L2',
            'AV Technician',
            'ELV Technician',
            'IoT Technician',
            'Junior Developer',
            'Project Coordinator',
            'Sales Executive',
            'HR Assistant',
            'Logistics Coordinator',
            'Billing Coordinator',
            'AI/ML Associate'
        ]
    },
    {
        level: 'Entry Level',
        roles: [
            'Network Technician',
            'Security Analyst L1',
            'AV Technician',
            'CCTV Technician',
            'IoT Technician',
            'Web Developer Intern',
            'Site Supervisor',
            'Marketing Intern',
            'Office Assistant',
            'Inventory Assistant',
            'Cybersecurity Trainee',
            'AV Intern',
            'ELV Intern',
            'IoT Intern',
            'Software Intern',
            'Admin Intern',
            'Store Assistant',
            'Accounts Intern',
            'AI/ML Intern'
        ]
    },
    {
        level: 'Apprenticeship',
        roles: [
            'Apprenticeship'
        ]
    },
    {
        level: 'Internship',
        roles: [
            'Internship (Students)'
        ]
    }
];
const SEGMENTS = [
    'Networking & Data Center',
    'Cybersecurity',
    'AV & Smart Solutions',
    'ELV',
    'IoT & Automation',
    'Software Development',
    'Project Management',
    'Sales & Marketing',
    'HR & Administration',
    'Procurement & Logistics',
    'Finance & Accounts',
    'AI & Machine Learning',
    'Executive',
    'Apprenticeship',
    'Internship (Students)'
];
const EXPERIENCE_LEVELS = [
    'Executive',
    'Senior Level',
    'Mid-Senior Level',
    'Associate Level',
    'Entry Level',
    'Internship',
    'Apprenticeship'
];
const LOCATIONS = [
    {
        name: 'India',
        states: [
            {
                name: 'Delhi',
                cities: [
                    'New Delhi'
                ]
            },
            {
                name: 'Maharashtra',
                cities: [
                    'Mumbai',
                    'Pune',
                    'Nagpur'
                ]
            },
            {
                name: 'Karnataka',
                cities: [
                    'Bangalore'
                ]
            },
            {
                name: 'Tamil Nadu',
                cities: [
                    'Chennai'
                ]
            },
            {
                name: 'Telangana',
                cities: [
                    'Hyderabad'
                ]
            },
            {
                name: 'Bihar',
                cities: [
                    'Patna'
                ]
            }
        ]
    },
    {
        name: 'UAE',
        states: [
            {
                name: 'Dubai',
                cities: [
                    'Dubai'
                ]
            },
            {
                name: 'Abu Dhabi',
                cities: [
                    'Abu Dhabi'
                ]
            }
        ]
    },
    {
        name: 'Germany',
        states: [
            {
                name: 'Berlin',
                cities: [
                    'Berlin'
                ]
            },
            {
                name: 'Bavaria',
                cities: [
                    'Munich'
                ]
            },
            {
                name: 'Baden-Württemberg',
                cities: [
                    'Stuttgart'
                ]
            }
        ]
    },
    {
        name: 'USA',
        states: [
            {
                name: 'New York',
                cities: [
                    'New York City'
                ]
            },
            {
                name: 'Texas',
                cities: [
                    'Houston',
                    'Dallas'
                ]
            },
            {
                name: 'California',
                cities: [
                    'Los Angeles',
                    'San Francisco'
                ]
            }
        ]
    },
    {
        name: 'UK',
        states: [
            {
                name: 'England',
                cities: [
                    'London',
                    'Birmingham'
                ]
            }
        ]
    },
    {
        name: 'Singapore',
        states: [
            {
                name: 'Singapore',
                cities: [
                    'Singapore'
                ]
            }
        ]
    },
    {
        name: 'Canada',
        states: [
            {
                name: 'Ontario',
                cities: [
                    'Toronto'
                ]
            }
        ]
    },
    {
        name: 'Australia',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    'Sydney'
                ]
            }
        ]
    }
];
const JOB_OPENINGS = [
    {
        id: 'sn-eng-01',
        title: 'Senior Network Engineer',
        location: 'Bangalore, India',
        department: 'Networking',
        type: 'Full-time',
        description: 'Design, implement, and manage complex network solutions for our enterprise clients.',
        requirements: [
            '5+ years of experience with Cisco and Juniper technologies.',
            'CCNP or equivalent certification required.',
            'Strong knowledge of SD-WAN, BGP, and OSPF.',
            'Experience with network security and firewalls.'
        ],
        careerLevel: 'Professionals',
        occupation: 'Senior Network Engineer',
        segment: 'Networking & Data Center',
        experienceLevel: 'Senior Level'
    },
    {
        id: 'fs-dev-01',
        title: 'Full-Stack Developer (React & Node.js)',
        location: 'Remote',
        department: 'Software Development',
        type: 'Full-time',
        description: 'Join our software development team to build cutting-edge web and cloud applications for our diverse client base.',
        requirements: [
            '3+ years of professional experience with React and Node.js.',
            'Proficiency in TypeScript and GraphQL.',
            'Experience with Docker and AWS/GCP.',
            'Strong understanding of software design principles.'
        ],
        careerLevel: 'Professionals',
        occupation: 'Software Developer',
        segment: 'Software Development',
        experienceLevel: 'Mid-Senior Level'
    },
    {
        id: 'sec-tech-01',
        title: 'Security Systems Technician',
        location: 'Mumbai, India',
        department: 'ELV',
        type: 'Full-time',
        description: 'Install, configure, and maintain CCTV, access control, and fire alarm systems at client sites.',
        requirements: [
            '2+ years of hands-on experience with electronic security systems.',
            'Familiarity with brands like Hikvision, Bosch, Honeywell.',
            'Strong troubleshooting and problem-solving skills.',
            'Excellent communication and customer service skills.'
        ],
        careerLevel: 'Professionals',
        occupation: 'CCTV Technician',
        segment: 'ELV',
        experienceLevel: 'Entry Level'
    },
    {
        id: 'iot-sa-01',
        title: 'IoT Solutions Architect',
        location: 'Dubai, UAE',
        department: 'IoT & Automation',
        type: 'Full-time',
        description: 'Design and lead the implementation of large-scale IoT solutions for smart buildings and smart cities.',
        requirements: [
            '7+ years in IoT architecture.',
            'Expertise in LoRaWAN, MQTT, and cloud IoT platforms (AWS IoT, Azure IoT Hub).',
            'Strong understanding of sensor technology and edge computing.',
            'Proven track record of delivering complex IoT projects.'
        ],
        careerLevel: 'Professionals',
        occupation: 'IoT Solutions Architect',
        segment: 'IoT & Automation',
        experienceLevel: 'Senior Level'
    },
    {
        id: 'pm-01',
        title: 'Project Manager',
        location: 'New Delhi, India',
        department: 'Project Management',
        type: 'Full-time',
        description: 'Lead the planning, execution, and delivery of IT infrastructure projects, ensuring they are on time and within budget.',
        requirements: [
            '5+ years of project management experience in the IT sector.',
            'PMP or similar certification is highly desirable.',
            'Excellent leadership, communication, and stakeholder management skills.',
            'Experience with large-scale ELV, networking, or data center projects.'
        ],
        careerLevel: 'Manager',
        occupation: 'Project Manager',
        segment: 'Project Management',
        experienceLevel: 'Mid-Senior Level'
    },
    {
        id: 'intern-wd-01',
        title: 'Web Developer Intern',
        location: 'Patna, India',
        department: 'Software Development',
        type: 'Internship',
        description: 'Assist the development team in creating and maintaining web applications. A great opportunity to learn and grow.',
        requirements: [
            'Basic understanding of HTML, CSS, and JavaScript.',
            'Familiarity with a modern framework like React is a plus.',
            'Eagerness to learn and a strong work ethic.',
            'Currently pursuing a degree in Computer Science or related field.'
        ],
        careerLevel: 'Internship / Working Students',
        occupation: 'Web Developer Intern',
        segment: 'Internship (Students)',
        experienceLevel: 'Internship'
    }
];
const BLOG_POSTS = [
    {
        slug: 'navigating-the-maze-of-data-center-modernization',
        title: 'Why Data Center Migration Is Critical for Modern Enterprises',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-03-20',
        category: 'Data Center Migration & Cloud Infrastructure Solutions',
        excerpt: 'In today’s digital-first economy, data is no longer just an operational asset—it is the core foundation of business continuity, innovation, and competitive advantage. Enterprises across industries are experiencing unprecedented growth in data volume, application complexity, cybersecurity threats, and customer expectations.',
        imageUrl: 'https://picsum.photos/seed/blog1/800/450',
        imageHint: 'data center aisle',
        tags: [
            'Data Center',
            'Infrastructure',
            'Migration'
        ],
        content: `
      <h3>Why Data Center Migration Is Critical for Modern Enterprises</h3>
      <p>Enabling Scalability, Security, and Digital Resilience in a Hyper-Connected World</p>
      <p>In today’s digital-first economy, data is no longer just an operational asset—it is the core foundation of business continuity, innovation, and competitive advantage. Enterprises across industries are experiencing unprecedented growth in data volume, application complexity, cybersecurity threats, and customer expectations.</p>
      <p>Legacy data centers, once considered robust and future-proof, are now struggling to meet modern demands. This has made data center migration not just an IT upgrade, but a strategic business imperative.</p>
      <p>At Cyrotics Technologies OPC Pvt. Ltd., we help enterprises re-architect their data center environments to support agility, security, and future readiness—without disrupting ongoing operations.</p>
      <h3>Understanding Data Center Migration</h3>
      <p>Data center migration refers to the structured process of moving data, applications, workloads, and IT infrastructure from one environment to another. This may include:</p>
      <ul>
        <li>On-premises to on-premises (modern facility upgrade)</li>
        <li>On-premises to cloud (public, private, or hybrid)</li>
        <li>Legacy hardware to virtualized or hyper-converged infrastructure</li>
        <li>Co-location or disaster recovery site migration</li>
      </ul>
      <p>Modern migration is not just a “lift-and-shift” activity—it involves re-designing architecture, improving performance, strengthening security, and aligning IT with business goals.</p>
      <h3>Why Modern Enterprises Cannot Ignore Data Center Migration</h3>
      <h4>1. Legacy Infrastructure Limits Business Growth</h4>
      <p>Traditional data centers were not designed for:</p>
      <ul>
        <li>AI and analytics workloads</li>
        <li>Real-time data processing</li>
        <li>Remote and hybrid workforces</li>
        <li>High availability and disaster recovery</li>
      </ul>
      <p>As enterprises scale, legacy infrastructure becomes:</p>
      <ul>
        <li>Costly to maintain</li>
        <li>Difficult to upgrade</li>
        <li>Prone to downtime</li>
      </ul>
      <p>Migration enables organizations to break free from infrastructure bottlenecks and adopt scalable, high-performance environments.</p>
      <h4>2. Cybersecurity Threats Are Growing Exponentially</h4>
      <p>Modern cyber threats are more sophisticated, targeted, and persistent. Legacy data centers often lack:</p>
      <ul>
        <li>Advanced threat detection</li>
        <li>Zero Trust architecture</li>
        <li>Real-time monitoring</li>
        <li>Compliance-ready security controls</li>
      </ul>
      <p>Data center migration allows enterprises to embed:</p>
      <ul>
        <li>Next-generation firewalls</li>
        <li>Secure network segmentation</li>
        <li>Encrypted storage and backups</li>
        <li>Integrated SOC and monitoring platforms</li>
      </ul>
      <p>Security is no longer optional—it must be built into the infrastructure design.</p>
      <h4>3. Compliance and Regulatory Requirements Are Increasing</h4>
      <p>Industries such as banking, healthcare, government, education, and manufacturing face strict compliance mandates, including:</p>
      <ul>
        <li>Data localization</li>
        <li>Audit readiness</li>
        <li>Business continuity requirements</li>
        <li>Security standards</li>
      </ul>
      <p>A modern data center ensures:</p>
      <ul>
        <li>Regulatory compliance by design</li>
        <li>Easier audits and reporting</li>
        <li>Reduced legal and operational risk</li>
      </ul>
      <p>This is especially critical for government, PSU, and enterprise-grade projects.</p>
      <h4>4. High Availability and Business Continuity Are Mission-Critical</h4>
      <p>Even a few minutes of downtime can result in:</p>
      <ul>
        <li>Revenue loss</li>
        <li>Reputation damage</li>
        <li>Customer dissatisfaction</li>
      </ul>
      <p>Modern data center migration enables:</p>
      <ul>
        <li>Active-active or active-passive architectures</li>
        <li>Automated failover</li>
        <li>Geo-redundant disaster recovery</li>
        <li>Continuous monitoring and alerting</li>
      </ul>
      <p>At Cyrotics Technologies, we design resilient infrastructures that keep businesses operational—24×7.</p>
      <h4>5. Cloud and Hybrid Readiness Are Now Essential</h4>
      <p>Enterprises today operate in hybrid environments, combining:</p>
      <ul>
        <li>On-premises data centers</li>
        <li>Cloud platforms</li>
        <li>Edge locations</li>
      </ul>
      <p>Data center migration ensures:</p>
      <ul>
        <li>Seamless cloud integration</li>
        <li>Optimized workload placement</li>
        <li>Cost-efficient hybrid operations</li>
      </ul>
      <p>This future-ready approach allows enterprises to innovate faster while maintaining control over critical data.</p>
      <h3>The Strategic Business Benefits of Data Center Migration</h3>
      <ul>
        <li>✔ Improved system performance and application response times</li>
        <li>✔ Reduced operational and maintenance costs</li>
        <li>✔ Enhanced security and compliance posture</li>
        <li>✔ Faster deployment of new applications and services</li>
        <li>✔ Improved scalability and flexibility</li>
        <li>✔ Strong disaster recovery and business continuity</li>
      </ul>
      <p>In short, data center migration transforms IT from a cost center into a business enabler.</p>
      <h3>Cyrotics Technologies’ Approach to Data Center Migration</h3>
      <p>At Cyrotics Technologies OPC Pvt. Ltd., we follow a structured, risk-free, and business-aligned migration methodology:</p>
      <p><strong>🔹 Assessment &amp; Planning</strong></p>
      <p>Infrastructure and application discovery</p>
      <p>Risk analysis and dependency mapping</p>
      <p>Migration roadmap aligned with business objectives</p>
      <p><strong>🔹 Architecture &amp; Design</strong></p>
      <p>Modern, scalable, and secure infrastructure design</p>
      <p>Network transformation and optimization</p>
      <p>Integration with cloud and hybrid platforms</p>
      <p><strong>🔹 Migration &amp; Execution</strong></p>
      <p>Zero or minimal downtime migration</p>
      <p>Secure data transfer and validation</p>
      <p>Phased implementation for operational continuity</p>
      <p><strong>🔹 Testing &amp; Optimization</strong></p>
      <p>Performance benchmarking</p>
      <p>Security validation</p>
      <p>Failover and disaster recovery testing</p>
      <p><strong>🔹 Post-Migration Support</strong></p>
      <p>Monitoring and management</p>
      <p>Documentation and knowledge transfer</p>
      <p>Continuous optimization and scaling support</p>
      <h3>Who Should Consider Data Center Migration Now?</h3>
      <ul>
        <li>Enterprises running on aging infrastructure</li>
        <li>Organizations facing frequent downtime or performance issues</li>
        <li>Businesses planning cloud or digital transformation</li>
        <li>Government, PSU, and regulated-sector organizations</li>
        <li>Growing companies in Tier-2 and Tier-3 cities seeking enterprise-grade IT</li>
      </ul>
      <h3>The Future Belongs to Agile, Secure, and Intelligent Infrastructure</h3>
      <p>The next decade will be defined by data-driven decision-making, automation, AI, and digital services. Enterprises that delay data center migration risk falling behind competitors who are already modernizing their IT foundations.</p>
      <p>Data center migration is not just about moving infrastructure—it’s about future-proofing your business.</p>
      <h3>Partner with Cyrotics Technologies</h3>
      <p>At Cyrotics Technologies OPC Pvt. Ltd., we combine deep technical expertise with real-world enterprise experience to deliver secure, scalable, and future-ready data center migration solutions.</p>
      <p><strong>📌 Transform your infrastructure. Strengthen your security. Accelerate your growth.</strong></p>
      <p>Get in touch with us today to plan your data center migration journey.</p>
    `
    },
    {
        slug: 'zero-trust-architecture-a-paradigm-shift-in-cybersecurity',
        title: 'Zero Trust Architecture: A Paradigm Shift in Modern Cybersecurity',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-07-22',
        category: 'Network Security & Cyber Security',
        excerpt: 'The old castle-and-moat approach to security is broken. With perimeters dissolving and threats lurking inside and out, it\'s time for a new model: "Never trust, always verify." This introduction to Zero Trust Architecture (ZTA) explains why it\'s the future of enterprise security.',
        imageUrl: 'https://picsum.photos/seed/blog2/800/450',
        imageHint: 'digital security lock',
        tags: [
            'Cybersecurity',
            'Zero Trust',
            'Networking'
        ],
        content: `
      <h3>Zero Trust Architecture: A Paradigm Shift in Modern Cybersecurity</h3>
      <p>In an era where digital transformation is accelerating at an unprecedented rate, traditional security frameworks are struggling to keep pace. The rapid adoption of cloud infrastructure, the rise of remote and hybrid workforces, the proliferation of IoT devices, and increasingly sophisticated cyberattacks have forced organizations to rethink their approach to cybersecurity.</p>
      <p>Zero Trust Architecture (ZTA) has emerged as the leading modern security framework — not as an industry buzzword, but as a strategic shift in how enterprises safeguard their digital ecosystems. It moves the industry away from implicit trust models and toward a more resilient, identity-centric approach.</p>
      <h3>What Is Zero Trust Architecture?</h3>
      <p>Zero Trust is founded on one core principle:</p>
      <blockquote>“Never Trust, Always Verify.”</blockquote>
      <p>Unlike traditional perimeter-based security — where anything inside the network is assumed to be trustworthy — Zero Trust assumes no user, device, system, or workload is trusted by default, whether inside or outside the organization.</p>
      <p>Zero Trust ensures that every access request is:</p>
      <ul>
        <li>Verified</li>
        <li>Authenticated</li>
        <li>Authorized</li>
        <li>Continuously monitored</li>
      </ul>
      <p>This approach ensures that access is only granted when required and only to the extent needed.</p>
      <h3>Why Zero Trust Has Become Essential</h3>
      <p>The shift toward Zero Trust is driven by modern IT challenges:</p>
      <h4>Remote &amp; Hybrid Workforce</h4><p>Employees now access corporate applications from home networks, airports, cafés, and mobile devices. This dramatically expands the attack surface.</p>
      <h4>Cloud Adoption</h4><p>Cloud environments eliminate the concept of a fixed perimeter. Traditional firewalls alone can no longer secure modern environments.</p>
      <h4>Increasing Cyberattacks</h4><p>Ransomware, insider threats, phishing, and advanced persistent threats (APTs) now target every layer of an organization.</p>
      <h4>Device Explosion (IoT, BYOD, OT)</h4><p>Organizations manage thousands of diverse and unmanaged devices. Each device becomes a potential entry point for attackers.</p>
      <p>Traditional security models cannot support this level of scale and complexity. Zero Trust can.</p>
      <h3>Core Principles of Zero Trust Architecture</h3>
      <p>🔐 1. Continuous Verification: Access is always treated as untrusted, regardless of user location or previous approvals.</p>
      <p>🧱 2. Least Privilege Access: Users and applications receive only the minimum access necessary to perform their function.</p>
      <p>📍 3. Micro-Segmentation: Networks are divided into tightly controlled zones to prevent lateral movement.</p>
      <p>📊 4. Real-Time Monitoring &amp; Analytics: User behavior, traffic flows, and access patterns are continuously analyzed for anomalies.</p>
      <p>📑 5. Strong Identity &amp; Access Management (IAM): MFA, biometrics, SSO, and identity governance become central security components.</p>
      <p>🔄 6. Assume Breach: Zero Trust operates on the assumption that attackers may already be inside the network, and controls are built accordingly.</p>
      <h3>How Zero Trust Strengthens Security</h3>
      <p>✅ Prevents Insider Threats: Even internal users must undergo continuous verification.</p>
      <p>✅ Limits Lateral Movement: Micro-segmentation stops attackers from spreading across the network.</p>
      <p>✅ Enhances Visibility: Every request, session, and connection is logged and analyzed.</p>
      <p>✅ Protects Remote &amp; Cloud Access: Zero Trust aligns perfectly with modern cloud-native environments.</p>
      <p>✅ Reduces Blast Radius: Any breach is contained within a small, isolated environment.</p>
      <h3>Industries Benefiting from Zero Trust</h3>
      <p>Zero Trust is now widely implemented across:</p>
      <ul>
        <li>Healthcare: EMR protection, patient data security</li>
        <li>Banking &amp; Finance: Transaction integrity, compliance</li>
        <li>Government &amp; Defense: National cybersecurity resilience</li>
        <li>Manufacturing &amp; Automotive: Securing OT, robotics, and IoT</li>
        <li>IT &amp; Data Centers: Cloud-native security and workload segmentation</li>
      </ul>
      <p>Even SMBs are adopting Zero Trust because of its flexibility and scalability.</p>
      <h3>Key Technologies Behind Zero Trust</h3>
      <p>Zero Trust is not a product — it is a comprehensive framework supported by:</p>
      <ul>
        <li>Identity &amp; Access Management (IAM)</li>
        <li>Multi-Factor Authentication (MFA)</li>
        <li>Privileged Access Management (PAM)</li>
        <li>Endpoint Detection and Response (EDR)</li>
        <li>Secure Access Service Edge (SASE)</li>
        <li>Micro-segmentation &amp; Next-Gen Firewalls</li>
        <li>Continuous Threat Monitoring</li>
        <li>Data Loss Prevention (DLP)</li>
      </ul>
      <p>Together, these components create a unified Zero Trust ecosystem.</p>
      <h3>Challenges in Implementing Zero Trust</h3>
      <p>Transitioning to Zero Trust may involve:</p>
      <ul>
        <li>Organizational culture changes</li>
        <li>Strong identity governance foundations</li>
        <li>Legacy system upgrades</li>
        <li>Clear security policies</li>
        <li>Skilled cybersecurity professionals</li>
      </ul>
      <p>Despite these challenges, Zero Trust offers unmatched long-term value.</p>
      <h3>Zero Trust Is the Future of Cybersecurity</h3>
      <p>Zero Trust represents a fundamental shift in how organizations defend themselves. It replaces outdated perimeter-centric models with a holistic, identity-first, data-centric approach designed for modern digital environments.</p>
      <p>Organizations that embrace Zero Trust benefit from:</p>
      <ul>
        <li>Stronger security posture</li>
        <li>Greater visibility across the network</li>
        <li>Reduced risks and faster detection</li>
        <li>Compliance with global cybersecurity standards</li>
        <li>Future-proof protection against evolving threats</li>
      </ul>
      <p>In today’s world, Zero Trust is no longer optional — it is essential.</p>
    `
    },
    {
        slug: 'the-roi-of-sustainability-how-solar-powers-your-bottom-line',
        title: 'The ROI of Sustainability: How Solar Powers Your Bottom Line',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-02-28',
        category: 'Renewable Energy',
        excerpt: 'Adopting solar energy is more than an environmental statement—it\'s a powerful financial strategy. From immediate operational savings to long-term brand enhancement, we explore how investing in renewable energy delivers a compelling return on investment that goes far beyond just the balance sheet.',
        imageUrl: 'https://picsum.photos/seed/blog3/800/450',
        imageHint: 'solar panels factory',
        tags: [
            'Renewable Energy',
            'Solar',
            'ROI'
        ],
        content: `
      <p>In today’s competitive business environment, organizations are not only expected to increase revenue but also to operate responsibly and sustainably. Sustainability is no longer a “good-to-have” — it has become a strategic advantage. Among the many green technologies available, solar energy stands out as one of the most effective ways to reduce operational expenses, future-proof your infrastructure, and significantly boost long-term ROI.</p>
      <p>Whether you’re managing a hospital, government campus, manufacturing facility, commercial building, data center, or educational institution, embracing solar power can deliver measurable financial and environmental benefits.</p>
      <p>This blog explores how solar energy drives profitability while strengthening your commitment to sustainability.</p>
      <h3>🌞 Solar Energy: A Smart Financial Investment, Not Just an Eco-Choice</h3>
      <p>Solar is often perceived as an environmental initiative, but in reality, it is one of the strongest financial decisions a business can make.</p>
      <p>Here’s why:</p>
      <h3>✔ 1. Dramatic Reduction in Electricity Bills</h3>
      <p>Electricity costs are rising every year. For large facilities — hospitals, universities, IT companies, airports, and industrial plants — energy consumption is one of the largest operating expenses.</p>
      <p>Solar energy directly offsets this cost.</p>
      <ul>
        <li>Most commercial installations recover 30–60% of monthly bills instantly.</li>
        <li>Large projects can eliminate up to 80–90% of electricity expenditure.</li>
        <li>Savings grow over time as utility tariffs increase.</li>
      </ul>
      <p><strong>Result?</strong><br/>Lower operating expenses and higher profitability.</p>
      <h3>✔ 2. High &amp; Stable Long-Term ROI</h3>
      <p>Solar systems deliver ROI in two ways:</p>
      <ul>
        <li>🔹 Direct savings from reduced electricity usage</li>
        <li>🔹 Revenue from government incentives &amp; tax benefits</li>
      </ul>
      <p>Most commercial solar installations generate:</p>
      <ul>
        <li>18%–30% annual ROI</li>
        <li>Cost recovery within 3–5 years</li>
      </ul>
      <p>Once the initial investment is recovered, the next 20–25 years of electricity is virtually free.</p>
      <p>Few investments generate such stable, long-term returns.</p>
      <h3>✔ 3. Government Subsidies, Tax Benefits &amp; Incentives</h3>
      <p>The Indian government provides several benefits for solar adoption:</p>
      <ul>
        <li>📌 Accelerated Depreciation (Up to 40%): Reduces taxable income significantly.</li>
        <li>📌 Subsidies for specific sectors (State/central schemes): Hospitals, universities, and agricultural facilities often qualify for additional subsidies.</li>
        <li>📌 Net Metering: Sell excess energy back to the grid and earn credits.</li>
      </ul>
      <p>These policies ensure that solar power delivers maximum financial impact from day one.</p>
      <h3>✔ 4. Increased Property Value</h3>
      <p>Buildings with solar installations offer:</p>
      <ul>
        <li>Lower operational expenses</li>
        <li>Energy independence</li>
        <li>Modern, sustainable infrastructure</li>
      </ul>
      <p>This leads to:</p>
      <ul>
        <li>🔺 Higher property valuation</li>
        <li>🔺 Better leasing attractiveness</li>
        <li>🔺 Long-term asset appreciation</li>
      </ul>
      <p>Companies that invest in solar typically outperform peers in total asset value.</p>
      <h3>✔ 5. Lower Maintenance Costs</h3>
      <p>Solar systems have:</p>
      <ul>
        <li>No moving parts</li>
        <li>Minimal maintenance cost</li>
        <li>Long system life (25+ years)</li>
      </ul>
      <p>This reduces OPEX and improves overall cost-efficiency.</p>
      <h3>✔ 6. Environmental Impact That Pays Off</h3>
      <p>Going solar reduces carbon footprint dramatically.</p>
      <ul>
        <li>🌍 Reduced CO₂ emissions</li>
        <li>🌱 Cleaner, greener power supply</li>
      </ul>
      <p>Many regulatory bodies and clients prefer working with organizations that follow sustainable practices.</p>
      <p>This can directly result in:</p>
      <ul>
        <li>Better brand reputation</li>
        <li>Higher customer trust</li>
        <li>Increased business opportunities</li>
        <li>Alignment with ESG (Environmental, Social &amp; Governance) goals</li>
      </ul>
      <h3>💼 How Solar Strengthens Your Business Competitiveness</h3>
      <p>Solar is not just an energy solution — it's a strategic business enabler.</p>
      <ul>
        <li>🔶 Enhances corporate reputation: Clients prefer companies that adopt green energy.</li>
        <li>🔶 Ensures operational stability: Solar reduces dependency on grid and uncertain fuel costs.</li>
        <li>🔶 Supports future compliance: Upcoming government regulations will make sustainability mandatory for many sectors.</li>
        <li>🔶 Helps win more tenders: Most government and private tenders now give preference to sustainable vendors.</li>
      </ul>
      <h3>🔧 Why Businesses Choose Cyrotics Technologies for Solar Implementation</h3>
      <p>At Cyrotics Technologies (OPC) Pvt. Ltd., we provide end-to-end Solar Infrastructure Services:</p>
      <ul>
        <li>Solar Feasibility Study</li>
        <li>Detailed Engineering &amp; Design</li>
        <li>Equipment Selection &amp; Procurement</li>
        <li>Installation &amp; Commissioning</li>
        <li>AMC &amp; Remote Monitoring</li>
        <li>Hybrid and On-Grid Solutions</li>
        <li>Solar for Data Centers, Hospitals, Campuses &amp; Commercial Buildings</li>
      </ul>
      <p>Our expertise ensures:</p>
      <ul>
        <li>Higher energy output</li>
        <li>Maximum ROI</li>
        <li>Long-term system reliability</li>
        <li>Compliance with safety &amp; quality standards</li>
        <li>Seamless project execution</li>
      </ul>
      <h3>🚀 The Future is Solar — And the Future Starts Today</h3>
      <p>Solar power is no longer an alternative; it is becoming the primary energy strategy for future-ready organizations.</p>
      <p>By investing in solar today, businesses achieve:</p>
      <ul>
        <li>✔ Lower electricity bills</li>
        <li>✔ Strong long-term ROI</li>
        <li>✔ Energy independence</li>
        <li>✔ Sustainability and ESG alignment</li>
        <li>✔ Competitive advantage</li>
      </ul>
      <blockquote><b>Solar doesn’t just power your building...<br/><br/>It powers your profitability.</b></blockquote>
    `
    },
    {
        slug: 'beyond-the-video-call-crafting-the-modern-conference-room',
        title: 'Beyond the Video Call: Crafting the Modern Conference Room',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-01-12',
        category: 'Audio-Visual & Communication',
        excerpt: 'In the era of hybrid work, the conference room is no longer just a table with a speakerphone. It\'s a critical hub for collaboration between in-office and remote teams. This post dives into the key AV technologies and design principles for creating seamless, equitable, and productive meeting experiences.',
        imageUrl: 'https://picsum.photos/seed/blog4/800/450',
        imageHint: 'modern conference room',
        tags: [
            'Audio-Visual',
            'Hybrid Work',
            'Collaboration'
        ],
        content: `
      <p>The workplace has changed — and with it, the expectations from a conference room. What was once a simple space with a table, chairs, and a projector is now the nerve center of collaboration, decision-making, client engagement, and global communication. The modern conference room is no longer “just a room.” It is a high-performance digital environment designed to enhance productivity, improve communication, and bring people together — whether they’re across the table or across the world.</p>
      <p>This blog explores how organizations can elevate ordinary meeting spaces into smart, seamless, future-ready conference rooms that go far beyond the traditional video call.</p>
      <h3>🎯 Why Modern Conference Rooms Matter More Than Ever</h3>
      <p>The shift to hybrid work models has created a unique challenge: How do we make remote and in-office participants feel equally connected and engaged?</p>
      <p>The answer lies in designing conference rooms that combine:</p>
      <ul>
        <li>Smart audio-visual systems</li>
        <li>Intelligent collaboration tools</li>
        <li>High-speed, secure networking</li>
        <li>Automated controls</li>
        <li>Unified communication platforms</li>
      </ul>
      <p>A well-designed conference room doesn’t just support meetings — it makes them smarter, faster, and more effective.</p>
      <h3>🛠️ The Core Elements of a Modern Conference Room</h3>
      <p>Transforming a traditional room into a smart collaboration space requires a strategic blend of technology, design, and user experience. Here are the essential components:</p>
      <h4>1. Intelligent Video Conferencing Systems</h4>
      <p>Today’s video conferencing goes beyond a simple camera and microphone. A modern room leverages:</p>
      <ul>
        <li>AI-powered cameras that auto-track speakers</li>
        <li>4K/Full HD video systems for crystal-clear communication</li>
        <li>Smart framing &amp; noise cancellation</li>
        <li>Real-time meeting analytics</li>
      </ul>
      <p>Platforms like Zoom Rooms, Microsoft Teams Rooms, and Google Meet Rooms are redefining meeting productivity.</p>
      <h4>2. Acoustic Engineering and Professional Audio</h4>
      <p>Clear audio is non-negotiable. This includes:</p>
      <ul>
        <li>Ceiling array microphones</li>
        <li>Beamforming mic technology</li>
        <li>DSP processors</li>
        <li>Acoustic panels for echo and noise control</li>
        <li>High-fidelity speakers for immersive audio</li>
      </ul>
      <p>With the right design, every participant — remote or present — hears every voice with precision.</p>
      <h4>3. Collaborative Interactive Displays</h4>
      <p>Traditional projectors are being replaced with:</p>
      <ul>
        <li>Interactive 4K touch displays</li>
        <li>Wireless content sharing</li>
        <li>Digital whiteboarding</li>
        <li>Multi-user annotation</li>
        <li>Smart screen mirroring for all devices</li>
      </ul>
      <p>This fosters real-time brainstorming and dynamic team interaction.</p>
      <h4>4. Seamless Room Automation</h4>
      <p>Smart conference rooms simplify operations with:</p>
      <ul>
        <li>One-touch meeting start</li>
        <li>Automated lighting and blinds</li>
        <li>Environmental sensors</li>
        <li>Centralized AV &amp; room control panels</li>
        <li>Voice-based control integration</li>
      </ul>
      <p>Automation ensures a frictionless meeting experience every time.</p>
      <h4>5. Secure &amp; High-Speed Network Infrastructure</h4>
      <p>Behind every modern meeting room is a powerful IT backbone:</p>
      <ul>
        <li>Enterprise-grade Wi-Fi</li>
        <li>High-throughput switching</li>
        <li>Dedicated conferencing bandwidth</li>
        <li>VLAN network segmentation</li>
        <li>QoS for voice &amp; video traffic</li>
      </ul>
      <p>Reliable connectivity ensures that meetings stay smooth and uninterrupted.</p>
      <h4>6. Integration With Unified Communication Platforms</h4>
      <p>Modern conference rooms integrate deeply with platforms like:</p>
      <ul>
        <li>Microsoft Teams</li>
        <li>Zoom</li>
        <li>Cisco Webex</li>
        <li>Google Workspace</li>
      </ul>
      <p>This ensures seamless scheduling, real-time collaboration, and cross-device consistency.</p>
      <h3>🌐 Types of Modern Conference Rooms</h3>
      <p>Organizations now demand multiple types of meeting environments:</p>
      <ul>
        <li>🔹 Huddle Rooms: Small spaces designed for 2–5 people; ideal for quick collaborations.</li>
        <li>🔹 Medium Meeting Rooms: Flexible spaces equipped with mid-range AV and collaboration tools.</li>
        <li>🔹 Boardrooms: Premium spaces with high-end video walls, advanced automation, and executive-level AV.</li>
        <li>🔹 Experience Centers &amp; Training Rooms: Large-scale interactive environments for workshops, presentations, and virtual demonstrations.</li>
      </ul>
      <h3>💡 Benefits of Modern Conference Room Infrastructure</h3>
      <p>Upgrading your meeting spaces delivers long-term value:</p>
      <ul>
        <li>✔ Improved Communication &amp; Engagement: Eliminates communication barriers for hybrid teams.</li>
        <li>✔ Enhanced Productivity: Meetings start faster, run smoother, and drive decisions quicker.</li>
        <li>✔ Professional Brand Image: High-quality AV systems create an impressive environment for clients.</li>
        <li>✔ Reduced Operational Cost: Automated systems and energy-efficient designs ensure long-term savings.</li>
        <li>✔ Future-Ready Collaboration: Supports AI tools, cloud conferencing, and emerging work models.</li>
      </ul>
      <h3>🏢 Industries Transforming Their Meeting Spaces</h3>
      <p>Conference room modernization is rapidly advancing across sectors:</p>
      <ul>
        <li>Corporate Offices</li>
        <li>Hospitals &amp; Medical Colleges</li>
        <li>Data Centers</li>
        <li>Government Institutions</li>
        <li>Universities &amp; Educational Campuses</li>
        <li>Hotels &amp; Hospitality</li>
        <li>Manufacturing &amp; Automotive</li>
        <li>Airports &amp; Aviation</li>
        <li>Real Estate &amp; Commercial Spaces</li>
      </ul>
      <p>Every industry needs smarter collaboration — and modern conference rooms deliver exactly that.</p>
      <h3>🚀 Why Cyrotics Technologies Leads in Modern Conference Room Solutions</h3>
      <p>At Cyrotics Technologies (OPC) Pvt. Ltd., we specialize in designing high-performance, integrated conference rooms that meet global standards.</p>
      <p>Our services include:</p>
      <ul>
        <li>AV design &amp; engineering</li>
        <li>Boardroom and training room setup</li>
        <li>Video conferencing solutions</li>
        <li>Acoustic treatment</li>
        <li>Digital signage</li>
        <li>Structured cabling</li>
        <li>Networking &amp; automation integration</li>
        <li>End-to-end project execution</li>
      </ul>
      <p>Our approach ensures:</p>
      <ul>
        <li>Aesthetically pleasing design</li>
        <li>User-friendly experience</li>
        <li>Scalable architecture</li>
        <li>Long-term support &amp; maintenance</li>
      </ul>
      <p>From top medical institutes to corporate offices and government organizations across India, we have delivered smart, future-ready conferencing ecosystems.</p>
      <h3>📌 Conclusion: The Future of Meetings Is Hybrid, Smart, and Fully Connected</h3>
      <p>The era of simple video conferencing is over. Modern businesses need technologically advanced conference rooms that provide:</p>
      <ul>
        <li>✔ Intelligent collaboration</li>
        <li>✔ High-quality audio and video</li>
        <li>✔ Secure connectivity</li>
        <li>✔ Powerful automation</li>
        <li>✔ Seamless hybrid engagement</li>
      </ul>
      <blockquote>A well-designed conference room doesn’t just improve meetings —<br/>it transforms the way teams work, communicate, and innovate.</blockquote>
      <p>If your organization is ready to elevate its meeting spaces, Cyrotics Technologies is here to build the perfect modern conference room for you.</p>
    `
    },
    {
        slug: 'the-hidden-genius-of-your-building-an-intro-to-bms',
        title: 'The Hidden Genius of Your Building: An Introduction to BMS (Building Management System)',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-04-15',
        category: 'Smart Factory & Building Solutions',
        excerpt: 'What if your building could think? A Building Management System (BMS) is the brain that does just that, quietly optimizing everything from temperature to security. Discover how this hidden genius works to make buildings more efficient, comfortable, and sustainable.',
        imageUrl: 'https://picsum.photos/seed/blog5/800/450',
        imageHint: 'building blueprint',
        tags: [
            'Smart Building',
            'BMS',
            'IoT'
        ],
        content: `
      <p>Modern buildings are no longer just four walls and a roof — they are intelligent, responsive, and interconnected ecosystems. Behind every efficient, safe, and comfortable space lies an invisible layer of intelligence that keeps everything functioning seamlessly. This silent technological backbone is known as the Building Management System (BMS).</p>
      <p>Whether it’s a hospital, data center, airport, school, corporate office, or industrial plant, BMS plays a critical role in ensuring operational excellence. In this blog, we unravel the fundamentals of BMS — the hidden genius that quietly runs your building.</p>
      <h3>🌐 What Is a Building Management System (BMS)?</h3>
      <p>A Building Management System is an integrated software and hardware platform that centrally monitors, controls, and automates the essential functions of a building. Think of BMS as the brain of the building — making decisions, analyzing data, responding to environmental changes, and ensuring safety and efficiency.</p>
      <p>A BMS typically manages:</p>
      <ul>
        <li>HVAC (Heating, Ventilation, Air Conditioning)</li>
        <li>Lighting automation</li>
        <li>Power &amp; energy systems</li>
        <li>Elevators &amp; movement control</li>
        <li>Fire alarm &amp; life safety systems</li>
        <li>Water pumping &amp; plumbing</li>
        <li>CCTV &amp; access control integration (in advanced setups)</li>
        <li>Environmental quality sensors (CO₂, temperature, humidity)</li>
      </ul>
      <p>By connecting thousands of sensors and devices, a BMS brings everything together on a single, intelligent dashboard.</p>
      <h3>🎯 Why BMS is the Hidden Genius of Modern Infrastructure</h3>
      <p>A well-implemented BMS transforms a building from a passive structure to a smart, dynamic environment that responds in real time.</p>
      <p>Here’s how:</p>
      <h4>1. Centralized Control for Total Visibility</h4>
      <p>Imagine monitoring:</p>
      <ul>
        <li>Room temperatures</li>
        <li>Power consumption</li>
        <li>Fire alarms</li>
        <li>Water leak alerts</li>
        <li>Access logs</li>
        <li>Generator performance</li>
        <li>Battery backup status</li>
      </ul>
      <p>—all from one screen.</p>
      <p>BMS acts as a centralized command center that gives facility managers complete visibility and control over every system.</p>
      <h4>2. Energy Savings &amp; Sustainability</h4>
      <p>Energy is often the biggest operational cost of any building.</p>
      <p>A smart BMS helps reduce this by:</p>
      <ul>
        <li>Adjusting HVAC based on occupancy</li>
        <li>Automating lighting</li>
        <li>Optimizing load distribution</li>
        <li>Reducing wastage during non-peak hours</li>
        <li>Predicting energy demand trends</li>
      </ul>
      <p>Buildings with BMS experience up to 30–40% energy savings, contributing directly to cost reduction and environmental sustainability.</p>
      <h4>3. Enhanced Safety &amp; Risk Prevention</h4>
      <p>A BMS strengthens building safety through:</p>
      <ul>
        <li>Real-time fire alarm monitoring</li>
        <li>Emergency evacuation workflows</li>
        <li>Gas leak detection</li>
        <li>Fault prediction in electrical systems</li>
        <li>Intelligent lockdown controls</li>
      </ul>
      <p>When an incident occurs, the BMS responds instantly — far faster than any manual intervention.</p>
      <h4>4. Improved Comfort &amp; Workplace Experience</h4>
      <p>Modern occupants expect smart, comfortable, and personalized spaces.
BMS takes care of this by regulating:</p>
      <ul>
        <li>Temperature</li>
        <li>Ventilation</li>
        <li>Air quality</li>
        <li>Lighting</li>
      </ul>
      <p>The result? Improved productivity, satisfaction, and overall environmental experience.</p>
      <h4>5. Predictive Maintenance — The Future of Facility Management</h4>
      <p>Instead of waiting for a fault to occur, BMS uses real-time analytics to:</p>
      <ul>
        <li>Predict equipment failure</li>
        <li>Monitor asset health</li>
        <li>Schedule maintenance activities</li>
        <li>Reduce downtime</li>
      </ul>
      <p>This proactive approach reduces repair costs and extends the lifespan of the infrastructure.</p>
      <h3>🧠 How a BMS Actually Works</h3>
      <p>A Building Management System uses a 4-layer architecture:</p>
      <ol>
        <li><strong>Sensors &amp; Field Devices:</strong> Temperature sensors, smoke detectors, motion sensors, flow meters, etc.</li>
        <li><strong>Controllers:</strong> Programmable Logic Controllers (PLCs) and DDCs (Direct Digital Controllers) that interpret signals.</li>
        <li><strong>Communication Network:</strong> Protocols like BACnet, Modbus, KNX, LonWorks, IP networks.</li>
        <li><strong>Central Management Software:</strong> Dashboards, alerts, analytics, automation rules, reporting.</li>
      </ol>
      <p>These layers work together seamlessly to create an intelligent building ecosystem.</p>
      <h3>🏢 Where Is BMS Used?</h3>
      <p>BMS is essential in:</p>
      <ul>
        <li>Hospitals &amp; Medical Colleges</li>
        <li>Corporate Offices &amp; IT Parks</li>
        <li>Data Centers</li>
        <li>Airports &amp; Metro Stations</li>
        <li>Smart Buildings &amp; Shopping Malls</li>
        <li>Universities &amp; Schools</li>
        <li>Hotels &amp; Hospitality</li>
        <li>Manufacturing Plants</li>
        <li>Government Institutions</li>
      </ul>
      <p>Any facility with electrical, mechanical, or safety systems benefits from a smart BMS layer.</p>
      <h3>🚀 The Rise of iBMS: The Future of Smart Buildings</h3>
      <p>The next generation of BMS is iBMS (Integrated Building Management System) — which combines:</p>
      <ul>
        <li>IoT devices</li>
        <li>Cloud analytics</li>
        <li>AI-driven automation</li>
        <li>Cybersecurity protection</li>
        <li>Energy optimization</li>
        <li>Integrated ELV (CCTV, Access Control, PA)</li>
      </ul>
      <p>This delivers a holistic smart building environment capable of learning, predicting, and automatically improving operations.</p>
      <h3>💼 Why Choose Cyrotics Technologies for BMS Solutions?</h3>
      <p>At Cyrotics Technologies, we specialize in designing, integrating, and delivering advanced BMS and smart infrastructure solutions across India.</p>
      <p>Our expertise includes:</p>
      <ul>
        <li>Full-scale BMS consulting &amp; design</li>
        <li>HVAC automation</li>
        <li>Lighting &amp; energy optimization</li>
        <li>Access control &amp; security integration</li>
        <li>Fire &amp; safety system integration</li>
        <li>IoT-based smart building solutions</li>
        <li>Command center and monitoring setup</li>
        <li>End-to-end project execution</li>
      </ul>
      <p>Our team has successfully executed BMS and IT infrastructure at major institutions including:</p>
      <ul>
        <li>Chhindwara Institute of Medical Science</li>
        <li>Government Medical College Chandrapur</li>
        <li>Noida International Airport Limited</li>
        <li>AIIMS Rajkot</li>
        <li>Bihar Animal Science University</li>
        <li>And multiple private &amp; public sector clients</li>
      </ul>
      <p>We ensure every project is future-ready, scalable, efficient, and compliant with global standards.</p>
      <h3>📌 Conclusion: The Building of the Future Is Smart, Responsive &amp; Efficient</h3>
      <p>A Building Management System is not a luxury — it’s a strategic investment.</p>
      <p>It enhances:</p>
      <ul>
        <li>✔ Operational efficiency</li>
        <li>✔ Energy savings</li>
        <li>✔ Security &amp; safety</li>
        <li>✔ Comfort &amp; user experience</li>
        <li>✔ Predictive building intelligence</li>
      </ul>
      <p>The hidden genius of your building is already here — and with the right implementation, it can transform how your infrastructure performs for decades.</p>
      <p>If you're ready to build a smarter, safer, more efficient facility, Cyrotics Technologies is here to help you unlock the full power of BMS.</p>
    `
    },
    {
        slug: 'from-idea-to-app-the-journey-of-custom-software-development',
        title: 'From Idea to App: The Journey of Custom Software Development',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-06-18',
        category: 'Software Development',
        excerpt: 'Off-the-shelf software can only take you so far. When your business processes are unique, a custom-built application is the key to unlocking true efficiency. This post outlines the typical lifecycle of a custom software project, from initial discovery and design to deployment and beyond.',
        imageUrl: 'https://picsum.photos/seed/blog6/800/450',
        imageHint: 'ui design wireframe',
        tags: [
            'Software Development',
            'Agile',
            'Cloud'
        ],
        content: `
      <p>In today’s digital era, businesses are no longer asking whether they need digital solutions — they are asking how fast they can build them. Whether it’s a mobile app, a web platform, a mission-critical enterprise tool, or an automation system, the journey from concept to deployment requires expertise, strategy, and innovation.</p>
      <p>At Cyrotics Technologies, we specialize in transforming ideas into fully functional, scalable, and secure applications. This blog walks you through the complete journey of custom software development — from the very first spark of an idea to delivering a production-ready application.</p>
      <h3>1. Ideation &amp; Requirement Discovery</h3>
      <p>Every great app begins with a clear vision. During this phase, we work closely with the client to understand:</p>
      <ul>
        <li>The business problem</li>
        <li>Target users</li>
        <li>Key functional requirements</li>
        <li>Expected outcomes</li>
        <li>Technical feasibility</li>
        <li>Budget and timelines</li>
      </ul>
      <p>Through structured discovery workshops, brainstorming sessions, and competitor analysis, we convert ideas into a defined project scope. This forms the foundation of all future development activities.</p>
      <h3>2. Planning, Documentation &amp; Architecture Design</h3>
      <p>Once the idea is validated, our team creates a detailed blueprint of the solution, which includes:</p>
      <ul>
        <li><strong>✔ Technical Architecture:</strong> Defines system components, databases, APIs, and integrations.</li>
        <li><strong>✔ UI/UX Wireframes:</strong> Visual outlines of how users will interact with the application.</li>
        <li><strong>✔ Project Plan &amp; Milestones:</strong> Agile sprint planning, deliverable timelines, resource allocation.</li>
        <li><strong>✔ Technology Stack Selection:</strong> Choosing the most suitable tools (React, Node.js, Python, Flutter, AWS, etc.) based on performance, scalability, and cost.</li>
      </ul>
      <p>This phase ensures clarity, transparency, and predictable project execution.</p>
      <h3>3. UI/UX Design: Crafting a Seamless User Experience</h3>
      <p>A successful app is not just functional — it must be intuitive and delightful. Our UI/UX designers build:</p>
      <ul>
        <li>High-fidelity screens</li>
        <li>Interactive prototypes</li>
        <li>Responsive layouts</li>
        <li>User journey maps</li>
        <li>Brand-aligned theme guides</li>
      </ul>
      <p>The goal is to create a design that is modern, user-friendly, and aligned with the brand identity of our client.</p>
      <h3>4. Development: Where the Code Comes to Life</h3>
      <p>This is the phase where the real engineering begins. Using Agile methodology, our development cycles include:</p>
      <h4>🔹 Front-end Development</h4>
      <p>Crafting user interfaces using modern frameworks like React, Angular, or Flutter.</p>
      <h4>🔹 Back-end Development</h4>
      <p>Developing secure, high-performance APIs, databases, and business logic using:</p>
      <ul>
        <li>Node.js</li>
        <li>Python Django / Flask</li>
        <li>Java / .NET</li>
        <li>PHP Laravel</li>
      </ul>
      <h4>🔹 Database &amp; Cloud Deployment</h4>
      <p>Designing scalable data structures on platforms like:</p>
      <ul>
        <li>AWS</li>
        <li>Google Cloud</li>
        <li>Azure</li>
      </ul>
      <p>We ensure every feature is built modularly, tested thoroughly, and optimized for speed.</p>
      <h3>5. Testing &amp; Quality Assurance</h3>
      <p>Quality is non-negotiable in custom software development. Our QA engineers perform:</p>
      <ul>
        <li>Functional testing</li>
        <li>Performance testing</li>
        <li>UI/UX testing</li>
        <li>Security testing</li>
        <li>API testing</li>
        <li>Cross-platform and cross-device testing</li>
      </ul>
      <p>Our objective: zero bugs and maximum reliability. Every feature undergoes rigorous validation before moving to production.</p>
      <h3>6. Deployment &amp; Go-Live</h3>
      <p>Once the application passes all quality checkpoints, we prepare for deployment. This includes:</p>
      <ul>
        <li>Server setup and cloud configuration</li>
        <li>CI/CD pipeline execution</li>
        <li>Database migration</li>
        <li>Load testing</li>
        <li>Go-live readiness checks</li>
      </ul>
      <p>After deployment, we monitor the application to ensure smooth performance and immediate issue resolution if needed.</p>
      <h3>7. Post-Launch Support, Upgrades &amp; Scaling</h3>
      <p>Software development does not end at launch — it evolves. We offer long-term support through:</p>
      <ul>
        <li>Continuous monitoring</li>
        <li>Security patches</li>
        <li>Performance enhancements</li>
        <li>New feature releases</li>
        <li>Scalability upgrades</li>
      </ul>
      <p>This ensures your app remains secure, relevant, and future-ready.</p>
      <h3>Why Businesses Choose Custom Software Development</h3>
      <p>Custom-built applications offer unmatched benefits:</p>
      <ul>
        <li>✔ Tailored to your business needs</li>
        <li>✔ More secure than off-the-shelf solutions</li>
        <li>✔ Scalable for future growth</li>
        <li>✔ Integrated with your existing systems</li>
        <li>✔ Competitive advantage in your industry</li>
      </ul>
      <p>Whether you're building an operational automation tool, a mobile app for customers, or a complete enterprise system — custom software gives you full control and long-term value.</p>
      <h3>Cyrotics Technologies: Your Partner in Custom Software Excellence</h3>
      <p>With experience across healthcare, aviation, education, corporate, and government sectors, we deliver solutions that are:</p>
      <ul>
        <li>Robust</li>
        <li>Scalable</li>
        <li>Secure</li>
        <li>User-centric</li>
        <li>Cost-efficient</li>
      </ul>
      <p>Our team excels in end-to-end IT and software development — from concept consulting to long-term maintenance.</p>
      <h3>Final Thoughts</h3>
      <p>Turning an idea into a powerful application is a journey that requires creativity, engineering expertise, and a clear strategy. At Cyrotics Technologies, we take pride in converting concepts into digital products that drive business success.</p>
      <p>If you’re planning to develop a custom app or a software platform, our team is ready to help you bring your vision to life.</p>
    `
    },
    {
        slug: 'the-role-of-it-infrastructure-in-modern-medical-colleges-and-hospitals',
        title: 'The Role of IT Infrastructure in Modern Medical Colleges and Hospitals (With Cyrotics Project Insights)',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-05-05',
        category: 'CCTV & ELV Systems',
        excerpt: 'Healthcare is transforming rapidly—and modern medical colleges, teaching hospitals, and research institutions now depend heavily on robust IT & ELV infrastructure to deliver efficient clinical care, secure data management, and smooth institutional functioning.',
        imageUrl: 'https://picsum.photos/seed/blog9/800/450',
        imageHint: 'doctor using tablet',
        tags: [
            'Healthcare',
            'IT Infrastructure',
            'Smart Hospital'
        ],
        content: `
      <p>Healthcare is transforming rapidly—and modern medical colleges, teaching hospitals, and research institutions now depend heavily on robust IT &amp; ELV infrastructure to deliver efficient clinical care, secure data management, and smooth institutional functioning.</p>
      <p>From electronic medical records to advanced CCTV surveillance, from high-speed campus networks to smart classrooms—technology is at the heart of every modern healthcare institution.</p>
      <p>At Cyrotics Technologies, we have successfully built and delivered complete IT &amp; ELV infrastructures for leading medical institutions across India, including:</p>
      <ul>
        <li>Chhindwara Institute of Medical Science (MP)</li>
        <li>Govt. Medical College Chandrapur (MH)</li>
        <li>Bhagwan Parshuram Govt. Medical College Kaithal (HR)</li>
        <li>Shri Guru Tegh Bahadur Govt. Medical College Yamunanagar (HR)</li>
        <li>AIIMS Rajkot (Gujarat)</li>
        <li>IIM Bodhgaya</li>
        <li>Bihar Animal Science University</li>
      </ul>
      <p>This blog explains the critical role of IT infrastructure in healthcare institutions—supported with real examples from our executed projects.</p>
      <h3>⭐ 1. High-Speed Network Backbone – The Digital Nervous System of a Medical College</h3>
      <p>A medical college runs thousands of devices every day:</p>
      <ul>
        <li>Student computers</li>
        <li>Smart classrooms</li>
        <li>Labs &amp; simulation centers</li>
        <li>Hospital OPD/IPD systems</li>
        <li>Diagnostic machines</li>
        <li>Faculty &amp; administration systems</li>
      </ul>
      <p>A high-speed, redundant network is mandatory.</p>
      <h4>What Cyrotics Provides:</h4>
      <ul>
        <li>✔ Campus-wide fiber backbone</li>
        <li>✔ Redundant core switching</li>
        <li>✔ Secure Wi-Fi 6 coverage</li>
        <li>✔ Segmented VLAN architecture</li>
        <li>✔ High availability Internet links</li>
      </ul>
      <p><strong>Project Example:</strong> At Govt. Medical College Chandrapur, we built a multi-gigabit fiber network covering hostels, classrooms, OPD/IPD blocks, exam halls, and labs.</p>
      <h3>⭐ 2. Data Centers &amp; Server Rooms – The Heart of Healthcare Data</h3>
      <p>Modern healthcare requires centralized processing and storage for:</p>
      <ul>
        <li>EMR/EHR systems</li>
        <li>PACS/RIS imaging systems</li>
        <li>HRMS/Accounts/ERP</li>
        <li>Attendance &amp; RFID tracking</li>
        <li>CCTV video retention</li>
        <li>Lab &amp; diagnostic databases</li>
      </ul>
      <h4>Cyrotics Expertise:</h4>
      <ul>
        <li>✔ Tier-based server room setup</li>
        <li>✔ Environmental control (PAC, humidity sensors)</li>
        <li>✔ Redundant power &amp; UPS</li>
        <li>✔ Structured cabling</li>
        <li>✔ Blade/virtualized servers</li>
        <li>✔ Firewall security</li>
      </ul>
      <p><strong>Project Example:</strong> Chhindwara Institute of Medical Science received a full data center migration, including server upgrades, CCTV storage servers, and virtualized infrastructure.</p>
      <h3>⭐ 3. Smart Classroom &amp; E-Learning Integration</h3>
      <p>Medical colleges today rely on:</p>
      <ul>
        <li>Smart boards</li>
        <li>High-resolution projectors</li>
        <li>Lecture recording systems</li>
        <li>Online teaching platforms</li>
        <li>Video conferencing</li>
      </ul>
      <h4>Our Deliverables:</h4>
      <ul>
        <li>✔ Classroom automation</li>
        <li>✔ Audio &amp; video integration</li>
        <li>✔ High-bandwidth Wi-Fi</li>
        <li>✔ Central monitoring &amp; control</li>
      </ul>
      <p>Smart classrooms enable better learning, real-time online sessions, and digital skill development for medical students.</p>
      <h3>⭐ 4. Hospital &amp; Campus Security Through ELV Systems</h3>
      <p>Security is extremely critical in medical environments.</p>
      <h4>We Deploy Full ELV Ecosystems:</h4>
      <ul>
        <li>✔ CCTV surveillance (NVR-based or VMS-based)</li>
        <li>✔ Fire alarm &amp; smoke detection systems</li>
        <li>✔ Access control &amp; biometric systems</li>
        <li>✔ Public announcement systems</li>
        <li>✔ IP-based intercom solutions</li>
      </ul>
      <p><strong>Real Example:</strong> At Shri Guru Tegh Bahadur Govt. Medical College Yamunanagar, we deployed:</p>
      <ul>
        <li>800+ CCTV cameras</li>
        <li>Server-based long-term storage with long-term storage</li>
        <li>Complete access control &amp; fire alarm integration</li>
      </ul>
      <p>This ensured a fully-secure medical campus with 24×7 monitoring.</p>
      <h3>⭐ 5. IT Integration for Clinical Departments</h3>
      <p>Departments such as:</p>
      <ul>
        <li>Pathology</li>
        <li>Radiology</li>
        <li>Orthopedics</li>
        <li>Anatomy</li>
        <li>Pharmacology</li>
      </ul>
      <p>…need specialized digital connectivity.</p>
      <h4>How We Support:</h4>
      <ul>
        <li>✔ Network links for diagnostic machines</li>
        <li>✔ PACS/RIS compatibility</li>
        <li>✔ EMR integration</li>
        <li>✔ High-speed data transfer for imaging</li>
        <li>✔ Smart labs setup</li>
      </ul>
      <p>With our IT design, all departments get seamless digital data exchange.</p>
      <h3>⭐ 6. Scalable Infrastructure for Future Expansion</h3>
      <p>Medical colleges expand frequently:</p>
      <ul>
        <li>New labs</li>
        <li>Hostels</li>
        <li>OPD blocks</li>
        <li>Research centers</li>
        <li>Additional hospitals</li>
      </ul>
      <h4>Cyrotics Ensures Future-Ready Design:</h4>
      <ul>
        <li>✔ Modular data centers</li>
        <li>✔ Tier-based expansion possibility</li>
        <li>✔ Extra fiber cores &amp; spare capacity</li>
        <li>✔ Flexible VLAN/IP schemas</li>
        <li>✔ Cloud-ready infrastructure</li>
      </ul>
      <p>Our infrastructures are designed to scale effortlessly for 5–10 years.</p>
      <h3>⭐ 7. Ensuring 24×7 Availability &amp; IT Security</h3>
      <p>Healthcare cannot afford downtime or cyber risks.</p>
      <h4>We provide:</h4>
      <ul>
        <li>✔ Redundant Internet</li>
        <li>✔ Failover routing</li>
        <li>✔ Firewall &amp; UTM protection</li>
        <li>✔ Regular security audits</li>
        <li>✔ Data backups &amp; DR solutions</li>
      </ul>
      <p>This ensures uninterrupted hospital operations and protection against cyberattacks.</p>
      <h3>⭐ Conclusion</h3>
      <p>Modern medical colleges are not just educational institutions—they are technology-driven ecosystems that require strong, secure, and scalable IT &amp; ELV infrastructure.</p>
      <p>Cyrotics Technologies helps healthcare institutions achieve:</p>
      <ul>
        <li>✔ Faster operations</li>
        <li>✔ Higher security</li>
        <li>✔ Better learning environments</li>
        <li>✔ Efficient patient care</li>
        <li>✔ Long-term scalability</li>
      </ul>
      <p>From data centers to CCTV, from networking to automation—we are proud to empower India's leading medical institutions with future-ready digital infrastructure.</p>
    `
    },
    {
        slug: 'how-smart-elv-systems-improve-security',
        title: 'How Smart ELV Systems Improve Security &amp; Efficiency in Government and Corporate Campuses',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-06-02',
        category: 'CCTV & ELV Systems',
        excerpt: 'In today’s rapidly evolving environment, security is no longer limited to guards and manual checks. Government institutions, medical campuses, and corporate offices now rely on Smart ELV (Extra Low Voltage) Systems for 360° safety and operational efficiency.',
        imageUrl: 'https://picsum.photos/seed/blog10/800/450',
        imageHint: 'security control room',
        tags: [
            'ELV',
            'Security',
            'Smart Campus',
            'Government'
        ],
        content: `
      <p>In today’s rapidly evolving environment, security is no longer limited to guards, manual registers, and physical checks. Government institutions, medical campuses, corporate offices, airports, universities, and large public facilities now rely heavily on Smart ELV (Extra Low Voltage) Systems to ensure 360° safety, operational efficiency, and intelligent monitoring.</p>
      <p>From AI-enabled CCTV to automated access control, ELV systems form the digital backbone of modern campuses.</p>
      <p>At Cyrotics Technologies, we have successfully deployed full-scale ELV infrastructures across India at top institutions, including:</p>
      <ul>
        <li>Chhindwara Institute of Medical Science (MP)</li>
        <li>Government Medical College Chandrapur (MH)</li>
        <li>Bhagwan Parshuram Govt. Medical College Kaithal</li>
        <li>SGTS Govt. Medical College Yamunanagar</li>
        <li>Noida International Airport</li>
        <li>Techno Data Center Chennai</li>
        <li>Bihar Animal Sciences University</li>
        <li>Multiple Corporate Facilities</li>
      </ul>
      <p>This article explains how Smart ELV Systems enhance both security and operational efficiency for large campuses.</p>
      <h3>⭐ 1. AI-Powered CCTV Surveillance</h3>
      <p>CCTV is no longer just about recording—modern AI-enabled surveillance is capable of:</p>
      <h4>Key Features:</h4>
      <ul>
        <li>✔ Facial recognition</li>
        <li>✔ Motion &amp; intrusion detection</li>
        <li>✔ Perimeter breach alerts</li>
        <li>✔ Crowd detection</li>
        <li>✔ Number plate recognition</li>
        <li>✔ Abnormal behavior detection</li>
      </ul>
      <h4>Benefits for Campuses:</h4>
      <ul>
        <li>Real-time threat detection</li>
        <li>Automated alerts reduce manpower dependency</li>
        <li>Evidence-based decision-making</li>
        <li>Safer hostels, academic areas, parking, and patient zones</li>
      </ul>
      <p><strong>Example Project:</strong> At SGTBS Govt. Medical College Yamunanagar, Cyrotics deployed 800+ cameras with server-based long-term storage and AI analytics.</p>
      <h3>⭐ 2. Access Control &amp; Biometric Security</h3>
      <p>Managing entry and exit in sensitive areas is critical.</p>
      <h4>Smart Access Systems Include:</h4>
      <ul>
        <li>✔ Biometric/Face entry</li>
        <li>✔ RFID-based smart access cards</li>
        <li>✔ Visitor management systems</li>
        <li>✔ Elevator access control</li>
        <li>✔ Door interlocking solutions</li>
      </ul>
      <h4>Benefits:</h4>
      <ul>
        <li>Prevents unauthorized access</li>
        <li>Maintains digital entry logs</li>
        <li>Enhances employee/student safety</li>
        <li>Ideal for labs, server rooms, ICUs, data centers, hostels</li>
      </ul>
      <p><strong>Example:</strong> At Chhindwara Institute of Medical Science, we implemented multi-layer biometric access for server rooms and critical departments.</p>
      <h3>⭐ 3. Public Address (PA) &amp; Emergency Announcement Systems</h3>
      <p>A smart PA system is essential for emergency alerts and routine announcements.</p>
      <h4>Capabilities:</h4>
      <ul>
        <li>✔ Zonal announcements</li>
        <li>✔ Fire alarm integration</li>
        <li>✔ Automated scheduled announcements</li>
        <li>✔ Centralized control</li>
      </ul>
      <h4>Benefits:</h4>
      <ul>
        <li>Faster emergency response</li>
        <li>Clear communication across large areas</li>
        <li>Important for hospitals, hostels, admin blocks, and public areas</li>
      </ul>
      <h3>⭐ 4. Fire Alarm &amp; Smoke Detection Systems</h3>
      <p>Modern campuses demand advanced fire protection.</p>
      <h4>ELV Fire Systems Include:</h4>
      <ul>
        <li>✔ Addressable fire alarm panels</li>
        <li>✔ Heat &amp; smoke sensors</li>
        <li>✔ Water leak detection</li>
        <li>✔ Gas leak detection</li>
        <li>✔ Emergency evacuation systems</li>
      </ul>
      <h4>Advantages:</h4>
      <ul>
        <li>Instant alerts help avoid major damage</li>
        <li>Reduces risk to life and infrastructure</li>
        <li>Integrated with BMS, CCTV, and PA systems</li>
      </ul>
      <h3>⭐ 5. Structured Cabling &amp; Communication Infrastructure</h3>
      <p>All ELV devices rely on a strong cabling backbone.</p>
      <h4>Cyrotics Provides:</h4>
      <ul>
        <li>✔ OFC backbone</li>
        <li>✔ CAT6/CAT6A copper network</li>
        <li>✔ Patch panel &amp; racks</li>
        <li>✔ End-to-end certified cabling</li>
      </ul>
      <h4>Benefits:</h4>
      <ul>
        <li>High-speed data transfer for CCTV, Wi-Fi, access control</li>
        <li>Zero downtime</li>
        <li>Better scalability for future devices</li>
      </ul>
      <h3>⭐ 6. Smart Energy &amp; Building Automation Integration</h3>
      <p>ELV systems are now integrated with:</p>
      <ul>
        <li>BMS (Building Management System)</li>
        <li>HVAC controls</li>
        <li>IoT sensors</li>
        <li>Energy management dashboards</li>
      </ul>
      <h4>Outcomes:</h4>
      <ul>
        <li>✔ Energy savings</li>
        <li>✔ Reduced operational cost</li>
        <li>✔ Improved sustainability</li>
      </ul>
      <p>This is especially useful for government buildings focusing on green initiatives.</p>
      <h3>⭐ 7. Visitor &amp; Vehicle Management Systems (VMS)</h3>
      <p>Managing large footfall requires automation.</p>
      <h4>ELV Helps Automate:</h4>
      <ul>
        <li>✔ Visitor registration with QR codes</li>
        <li>✔ Parking management</li>
        <li>✔ ANPR (Automatic Number Plate Recognition)</li>
        <li>✔ Entry approval workflows</li>
      </ul>
      <h4>Benefits:</h4>
      <ul>
        <li>Zero manual errors</li>
        <li>Higher security</li>
        <li>Smooth movement of staff, students, visitors, and vehicles</li>
      </ul>
      <h3>⭐ 8. Improved Operational Efficiency Across the Campus</h3>
      <p>ELV systems reduce dependency on manual processes and enable:</p>
      <ul>
        <li>✔ 24×7 automated monitoring</li>
        <li>✔ Faster incident detection</li>
        <li>✔ Better control over assets and operations</li>
        <li>✔ Data-driven security management</li>
        <li>✔ Staff productivity improvement</li>
        <li>✔ Reduced downtime</li>
      </ul>
      <p>This makes campuses safer, smarter, and more efficient.</p>
      <h3>⭐ Conclusion</h3>
      <p>Smart ELV systems are no longer optional—they are essential for any government or corporate campus aiming for world-class safety and operational standards.</p>
      <p>At Cyrotics Technologies, we design and deploy end-to-end ELV ecosystems that include:</p>
      <ul>
        <li>AI CCTV Surveillance</li>
        <li>Access Control &amp; Biometric Systems</li>
        <li>Fire Alarm &amp; Smoke Detection</li>
        <li>PA &amp; Emergency Alert Systems</li>
        <li>Visitor &amp; Vehicle Management</li>
        <li>Structured Cabling</li>
        <li>Integrated Command Centers</li>
      </ul>
      <p>Our solutions have helped institutions across India operate with higher security, improved efficiency, and future-ready digital infrastructure.</p>
    `
    },
    {
        slug: 'importance-of-data-center-migration-and-modernization',
        title: 'The Importance of Data Center Migration &amp; Modernization for Future-Ready Businesses',
        author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
        authorImage: 'https://picsum.photos/seed/logo/100/100',
        date: '2024-04-15',
        category: 'Data Center Migration & Cloud Infrastructure Solutions',
        excerpt: 'In today’s digital-first era, businesses cannot afford downtime, legacy systems, or inefficient computing environments. Data Center Migration and Modernization has become a necessity.',
        imageUrl: 'https://picsum.photos/seed/blog11/800/450',
        imageHint: 'modern data center',
        tags: [
            'Data Center',
            'Modernization',
            'Cloud'
        ],
        content: `
      <p>In today’s digital-first era, businesses cannot afford downtime, legacy systems, or inefficient computing environments. Data Center Migration and Modernization has become a necessity. At Cyrotics Technologies (OPC) Pvt. Ltd., our experience with complex data center projects across India highlights the critical importance of this process.</p>
      <h3>⭐ Why Data Center Migration Is Crucial Today</h3>
      <p>A data center is the heart of any organization. Modernization is unavoidable for several reasons:</p>
      <ul>
        <li><strong>Legacy Infrastructure Causes Downtime:</strong> Old hardware creates performance bottlenecks. Migration upgrades your environment to high-availability, redundant architectures.</li>
        <li><strong>Security Threats Are Increasing:</strong> Modern data centers offer Next-Gen Firewalls, Zero Trust Architecture, and end-to-end encryption to combat evolving cyberattacks.</li>
        <li><strong>Cloud Adoption Is a Priority:</strong> Modernization enables smooth integration with AWS, Azure, GCP, and hybrid cloud solutions.</li>
        <li><strong>Scalability Needs Are Higher Than Ever:</strong> A modernized data center easily scales to handle more users, new applications, and exponential data growth.</li>
      </ul>
      <h3>⭐ How Cyrotics Technologies Performs Seamless Data Center Migration</h3>
      <p>Our expertise ensures zero data loss and minimal downtime. Our step-by-step approach includes Assessment &amp; Audit, Design &amp; Architecture, Migration Planning, Execution &amp; Deployment, Testing &amp; Validation, and Go-Live &amp; Optimization.</p>
      <h3>⭐ Benefits of Modernizing Your Data Center</h3>
      <p>Modernization brings immediate and long-term advantages, including enhanced performance, improved security, reduced operational costs, better business continuity, and a future-proof IT environment ready for AI, IoT, and 5G.</p>
      <h3>⭐ Conclusion</h3>
      <p>Data Center Migration and Modernization is a strategic move to build a resilient, secure, and scalable foundation for the future. At Cyrotics Technologies, we bring expertise in complex national-level projects, a structured migration framework, and a zero-downtime approach. Your digital transformation journey begins with the right infrastructure—let us build it for you.</p>
    `
    }
];
const FAQS = [
    {
        question: "What industries do you specialize in?",
        answer: "We work with a wide range of industries, but we have deep expertise in Finance, Healthcare, Manufacturing, Real Estate, and Education. Our solutions are adaptable and can be tailored to meet the specific compliance and operational needs of any sector."
    },
    {
        question: "How do you begin a new project with a client?",
        answer: "Every project starts with a detailed consultation and discovery phase. Our primary goal is to understand your business, challenges, and objectives. We then conduct a thorough assessment of your existing systems before designing a solution and presenting a detailed proposal with a clear scope, timeline, and budget."
    },
    {
        question: "Do you provide ongoing support and maintenance after a project is completed?",
        answer: "Yes, absolutely. We view our clients as long-term partners. We offer a range of customizable support and maintenance packages, including 24/7 monitoring, preventive maintenance, and on-demand technical support to ensure your systems operate at peak performance."
    },
    {
        question: "How does CYROTICS ensure the security of the solutions you implement?",
        answer: "Security is at the core of everything we do. We follow a 'security-by-design' methodology, integrating best practices and robust security controls from the very beginning of a project. This includes risk assessments, secure coding practices, and adhering to industry standards like ISO 27001 and Zero Trust principles."
    },
    {
        question: "Can you integrate your solutions with our existing legacy systems?",
        answer: "Yes. We understand that a complete rip-and-replace is not always feasible. Our engineers are highly experienced in system integration and can develop custom APIs and middleware to ensure our modern solutions communicate seamlessly with your existing legacy applications and infrastructure, allowing for a phased and cost-effective modernization approach."
    }
];
const SALUTATIONS = [
    'Mr',
    'Ms',
    'Mx',
    'Dr',
    'Er',
    'Prof'
];
const CONTACT_SUBJECTS = [
    'General Inquiry',
    'Sales / New Project',
    'Technical Support',
    'Billing & Accounts',
    'Vendor Registration',
    'Partnership / Collaboration',
    'Feedback / Complaint',
    'Order Issues',
    'Others'
];
const DEPARTMENTS = [
    'Sales Team',
    'Support Team',
    'Project Execution Team',
    'Finance / Billing',
    'HR / Recruitment',
    'Procurement / Vendor Management'
];
const PROJECT_TYPES = [
    'IT Networking',
    'Data Center',
    'Audio-Visual / Smart Classroom',
    'CCTV & Surveillance',
    'Smart Building Solutions',
    'Smart City Solutions',
    'Software Development',
    'Mobile App Development',
    'AI / Automation',
    'Cloud / Cybersecurity',
    'Renewable Energy / Solar',
    'Annual Maintenance Contract (AMC)'
];
const BUDGET_RANGES = [
    '&lt; ₹1 Lakh',
    '₹1–10 Lakh',
    '₹10–50 Lakh',
    '₹50 Lakh–1 Cr',
    '₹1 Cr - 50 Cr',
    '₹50 Cr - 150 Cr'
];
const PRIORITY_LEVELS = [
    'Normal',
    'High',
    'Critical'
];
const CONTACT_METHODS = [
    'Email',
    'Phone Call',
    'WhatsApp',
    'Google Meet',
    'Zoom'
];
const CONTACT_TIMES = [
    'Morning (9 AM – 12 PM)',
    'Afternoon (12 PM – 5 PM)',
    'Evening (5 PM – 8 PM)',
    'Anytime'
];
const HEAR_ABOUT_US_OPTIONS = [
    'Google Search',
    'LinkedIn',
    'Referral',
    'Existing Client',
    'Exhibition/Event',
    'Email Campaign',
    'Other'
];
const COUNTRY_CODES = [
    "+91",
    "+1",
    "+44",
    "+971",
    "+65",
    "+61",
    "+49",
    "+81",
    "+86"
];
const EMPLOYEE_TESTIMONIALS = [
    {
        quote: "Working at Cyrotics has been a phenomenal growth journey. The exposure to large-scale, mission-critical projects is unparalleled, and the leadership team truly invests in your professional development.",
        name: "Anjali Sharma",
        role: "Senior Network Architect"
    },
    {
        quote: "The culture here is all about innovation and collaboration. I get to work with cutting-edge technologies in cybersecurity and smart infrastructure, and my voice is always heard.",
        name: "Rajiv Menon",
        role: "Cybersecurity Analyst"
    },
    {
        quote: "As a software developer, I appreciate the creative freedom and the emphasis on quality. We're not just coding; we're building solutions that solve real-world problems for major clients.",
        name: "Priya Singh",
        role: "Software Engineer"
    }
];
const CAREER_BENEFITS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Work-Life Balance",
        description: "We promote a healthy work-life balance with flexible work arrangements and a supportive environment."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"],
        title: "Skill Development",
        description: "Continuous learning is in our DNA. We provide access to training, workshops, and certifications."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        title: "Career Growth",
        description: "We offer clear career paths and opportunities for advancement within the company."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        title: "Innovative Projects",
        description: "Work on exciting, challenging projects that are shaping the future of technology in India."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        title: "Rewards &amp; Recognition",
        description: "We believe in recognizing and rewarding our employees for their hard work and dedication."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Collaborative Culture",
        description: "Join a team of talented professionals who are passionate about what they do."
    }
];
const CAREER_FAQS = [
    {
        question: "What is the hiring process at Cyrotics?",
        answer: "Our hiring process typically includes an initial screening, a technical interview, and a final HR round. For senior roles, there may be an additional leadership interview. We aim to keep the process transparent and efficient."
    },
    {
        question: "How long does it take to hear back after applying?",
        answer: "We strive to review all applications within two weeks. If your profile matches our requirements, our HR team will get in touch with you to schedule the next steps."
    },
    {
        question: "Can I apply for multiple roles at the same time?",
        answer: "Yes, you can apply for multiple positions that you believe are a good fit for your skills and experience. However, we recommend tailoring your application for each specific role to highlight your relevant qualifications."
    },
    {
        question: "Do you offer internships or programs for fresh graduates?",
        answer: "Absolutely! We have dedicated internship and graduate trainee programs. These are great opportunities to gain hands-on experience and kick-start your career in the technology industry. Keep an eye on our careers page for openings."
    }
];
const socialLinks = [
    {
        name: 'YouTube',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
        href: '#'
    },
    {
        name: 'Twitter',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        href: '#'
    },
    {
        name: 'LinkedIn',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: '#'
    },
    {
        name: 'Instagram',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: '#'
    },
    {
        name: 'Facebook',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
        href: '#'
    }
];
const footerQuickLinks = [
    [
        {
            href: '/',
            label: 'Home'
        },
        {
            href: '/services',
            label: 'Services'
        },
        {
            href: '/business-sector/overview',
            label: 'Business Sectors'
        },
        {
            href: '/projects',
            label: 'Projects'
        }
    ],
    [
        {
            href: '/about',
            label: 'About Us'
        },
        {
            href: '/careers',
            label: 'Careers'
        },
        {
            href: '/trust-and-compliance',
            label: 'Trust & Compliance'
        }
    ],
    [
        {
            href: '/faqs',
            label: 'FAQs'
        },
        {
            href: '/contact',
            label: 'Contact Us'
        },
        {
            href: '#',
            label: 'Support Desk',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"]
        }
    ]
];
const companyAddress = {
    name: "Cyrotics Technologies (OPC) Pvt. Ltd.",
    full: "Cyrotics Technologies (OPC) Pvt. Ltd. 86/2, Street No.-54/V/3, Ist 60 Feet Road, Molarband Extension, Badarpur Border, New Delhi – 110044, India",
    line1: "86/2, Street No.-54/V/3, Ist 60 Feet Road,",
    line2: "Molarband Extension, Badarpur Border,",
    cityStateZip: "New Delhi – 110044, India"
};
}),
"[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}),
"[project]/src/components/layout/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-ssr] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
// --- Components & Utils ---
/**
 * Animated underline component that moves with the cursor or active state
 */ const NavIndicator = ({ activeRect, isHovering })=>{
    if (!activeRect) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute bottom-0 h-0.5 bg-brand rounded-full z-10",
        initial: false,
        animate: {
            left: activeRect.left,
            width: activeRect.width,
            opacity: isHovering ? 1 : 0.6,
            bottom: 8
        },
        transition: {
            type: 'spring',
            stiffness: 350,
            damping: 30
        }
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
/**
 * AI-like dynamic cursor highlight blob
 */ const CursorHighlight = ({ mouseX, mouseY, opacity })=>{
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, {
        stiffness: 100,
        damping: 30
    });
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, {
        stiffness: 100,
        damping: 30
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 z-0",
        style: {
            background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])([
                smoothX,
                smoothY
            ], ([x, y])=>`radial-gradient(100px circle at ${x}px ${y}px, rgba(var(--brand-rgb), 0.25), transparent 80%)`),
            opacity,
            filter: "blur(20px)"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
/**
 * 3D Tilt Navigation Item
 */ const NavItem = ({ link, pathname, onHover, isHovered, isActive })=>{
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseXSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(x);
    const mouseYSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(y);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(mouseYSpring, [
        -0.5,
        0.5
    ], [
        "7deg",
        "-7deg"
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(mouseXSpring, [
        -0.5,
        0.5
    ], [
        "-7deg",
        "7deg"
    ]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (e)=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
        // Safe harbor delay
        setTimeout(()=>{
            onHover(null);
        }, 200);
    };
    const handleMouseEnter = (e)=>{
        if (ref.current) {
            onHover(ref.current.getBoundingClientRect());
        }
    };
    const handleLinkClick = ()=>{
        onHover(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
        },
        className: "relative py-2",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: ref,
                href: link.href,
                onClick: handleLinkClick,
                onMouseMove: handleMouseMove,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-10 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl flex items-center gap-1.5", isActive ? "text-primary" : "text-foreground/90 hover:text-primary", "group/item [transform-style:preserve-3d] antialiased"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "relative z-10 flex items-center gap-1.5 antialiased",
                        style: {
                            translateZ: 20
                        },
                        children: [
                            link.label,
                            link.subLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    rotate: isHovered ? 180 : 0
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-3.5 w-3.5 opacity-50 group-hover/item:opacity-100 transition-opacity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            layoutId: "nav-hover-bg",
                            className: "absolute inset-0 bg-brand/5 dark:bg-white/5 rounded-xl border border-brand/10 dark:border-white/10 -z-10 shadow-[0_0_20px_rgba(var(--brand-rgb),0.1)]",
                            initial: {
                                opacity: 0,
                                scale: 0.9,
                                rotateX: 10
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                rotateX: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.9,
                                rotateX: -10
                            },
                            transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 25
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isHovered && link.subLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95,
                        rotateX: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95,
                        rotateX: -10
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    },
                    className: "absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 pointer-events-auto",
                    style: {
                        perspective: "2000px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[640px] bg-background border border-white/20 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[32px] p-8 grid grid-cols-2 gap-x-10 gap-y-6 overflow-hidden relative antialiased group/menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-6 left-0 right-0 h-6 bg-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 200,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 203,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 204,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-24 -right-24 w-64 h-64 bg-brand/10 blur-[100px] rounded-full pointer-events-none animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 205,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2 mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-bold uppercase tracking-widest text-muted-foreground/70 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "h-3 w-3 text-brand"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 209,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        link.label,
                                        " Solutions"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 208,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 207,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)),
                            link.subLinks.map((sub, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: idx * 0.03
                                    },
                                    children: sub.subLinks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 font-semibold text-sm",
                                                children: [
                                                    sub.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(sub.icon, {
                                                        className: "h-4 w-4 text-brand"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 40
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    sub.label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 223,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1.5 pl-6 border-l border-border/50 ml-2",
                                                children: sub.subLinks.slice(0, 4).map((inner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: inner.href,
                                                            onClick: handleLinkClick,
                                                            className: "text-xs text-muted-foreground hover:text-brand transition-colors block py-0.5",
                                                            children: inner.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 31
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, inner.href, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 227,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 222,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: sub.href,
                                        onClick: handleLinkClick,
                                        className: "group/sub flex items-start gap-3 p-2 rounded-xl hover:bg-secondary/50 transition-all border border-transparent hover:border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover/sub:bg-brand group-hover/sub:text-white transition-colors",
                                                children: sub.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(sub.icon, {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 38
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 247,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-semibold group-hover/sub:text-brand transition-colors flex items-center gap-1",
                                                        children: [
                                                            sub.label,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "h-3 w-3 opacity-0 group-hover/sub:opacity-100 transition-all -translate-x-1 group-hover/sub:translate-x-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-muted-foreground line-clamp-1 mt-0.5",
                                                        children: "Enterprise-grade technology solutions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 250,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 242,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, sub.href, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 215,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2 mt-4 pt-4 border-t border-border/50 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-muted-foreground italic flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " 24/7 Expert Support Available"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 265,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: handleLinkClick,
                                        className: "text-xs font-bold text-brand hover:underline flex items-center gap-1",
                                        children: [
                                            "View All ",
                                            link.label,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 273,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 268,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 264,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 198,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredLink, setHoveredLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoverRect, setHoverRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const highlightOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        const handleScroll = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    if (pathname.startsWith('/portal') || pathname.startsWith('/admin')) {
        return null;
    }
    const handleMouseMove = (e)=>{
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
        highlightOpacity.set(1);
    };
    const handleMouseLeave = ()=>{
        highlightOpacity.set(0);
        setHoveredLink(null);
    };
    const openSupportDesk = ()=>{
        document.dispatchEvent(new Event('open-support-desk'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-50 w-full transition-all duration-700", scrolled ? "bg-background/80 backdrop-blur-3xl border-b border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] py-2" : "bg-transparent border-b border-transparent py-5"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-50 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden opacity-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("container flex items-center transition-all duration-500 px-4 md:px-6", scrolled ? "h-14" : "h-16"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                        className: "transition-all hover:scale-105 active:scale-95 duration-300 relative z-20"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    isMounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "ml-auto hidden items-center gap-1 md:flex relative px-4 py-1 rounded-2xl bg-secondary/20 border border-white/5 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorHighlight, {
                                        mouseX: mouseX,
                                        mouseY: mouseY,
                                        opacity: highlightOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMARY_NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                            link: link,
                                            pathname: pathname,
                                            isActive: pathname === link.href || link.href !== '/' && pathname.startsWith(link.href),
                                            isHovered: hoveredLink === link.href,
                                            onHover: (rect)=>{
                                                setHoveredLink(rect ? link.href : null);
                                                setHoverRect(rect);
                                            }
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavIndicator, {
                                        activeRect: hoverRect,
                                        isHovering: !!hoveredLink
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-6 hidden items-center gap-3 md:flex relative z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: openSupportDesk,
                                        className: "rounded-full px-5 bg-primary text-primary-foreground hover:bg-brand hover:text-white transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-brand/20 active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                children: "Support"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex items-center md:hidden gap-2 relative z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
                                        open: isMobileMenuOpen,
                                        onOpenChange: setIsMobileMenuOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "rounded-full hover:bg-secondary transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            animate: {
                                                                rotate: isMobileMenuOpen ? 90 : 0
                                                            },
                                                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 43
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 51
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sr-only",
                                                            children: "Toggle Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                                                side: "right",
                                                className: "w-full bg-background/95 backdrop-blur-xl border-l border-white/10 p-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                        className: "sr-only",
                                                        children: "Navigation Menu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-full flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-6 flex items-center justify-between border-b border-border/50 bg-secondary/10",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "ghost",
                                                                            size: "icon",
                                                                            className: "rounded-full",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                className: "h-6 w-6"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                lineNumber: 401,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                                            lineNumber: 400,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 overflow-y-auto px-6 py-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                                    className: "flex flex-col gap-6",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMARY_NAV_LINKS"].map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            initial: {
                                                                                opacity: 0,
                                                                                x: 20
                                                                            },
                                                                            animate: {
                                                                                opacity: 1,
                                                                                x: 0
                                                                            },
                                                                            transition: {
                                                                                delay: idx * 0.1
                                                                            },
                                                                            children: link.subLinks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                                                                                type: "single",
                                                                                collapsible: true,
                                                                                className: "w-full",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                                                    value: link.label,
                                                                                    className: "border-none",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                                            className: "py-2 text-2xl font-bold hover:no-underline text-foreground tracking-tight",
                                                                                            children: link.label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                                                            lineNumber: 418,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                                            className: "pt-2 pb-4 px-4",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "grid gap-4",
                                                                                                children: link.subLinks.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                href: sub.href,
                                                                                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                                                                                className: "flex items-center gap-3 py-2 text-lg font-medium text-muted-foreground hover:text-brand transition-colors",
                                                                                                                children: [
                                                                                                                    sub.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(sub.icon, {
                                                                                                                        className: "h-5 w-5 text-brand"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                                                                        lineNumber: 430,
                                                                                                                        columnNumber: 58
                                                                                                                    }, this),
                                                                                                                    sub.label
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                                                lineNumber: 425,
                                                                                                                columnNumber: 43
                                                                                                            }, this),
                                                                                                            sub.subLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "pl-8 mt-2 space-y-2 border-l-2 border-secondary",
                                                                                                                children: sub.subLinks.map((inner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                        href: inner.href,
                                                                                                                        onClick: ()=>setIsMobileMenuOpen(false),
                                                                                                                        className: "block text-sm text-muted-foreground/70 hover:text-brand",
                                                                                                                        children: inner.label
                                                                                                                    }, inner.href, false, {
                                                                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                                                                        lineNumber: 436,
                                                                                                                        columnNumber: 49
                                                                                                                    }, this))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                                                lineNumber: 434,
                                                                                                                columnNumber: 45
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, sub.href, true, {
                                                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                                                        lineNumber: 424,
                                                                                                        columnNumber: 41
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                                lineNumber: 422,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                                                            lineNumber: 421,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                                                    lineNumber: 417,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                lineNumber: 416,
                                                                                columnNumber: 31
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: link.href,
                                                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-bold tracking-tight transition-colors", pathname === link.href ? "text-brand" : "text-foreground"),
                                                                                children: link.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                lineNumber: 454,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, link.href, false, {
                                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-6 border-t border-border/50 bg-secondary/5 space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-medium text-muted-foreground",
                                                                                children: "More Links"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                lineNumber: 472,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-px flex-1 bg-border/50 ml-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                lineNumber: 473,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                        lineNumber: 471,
                                                                        columnNumber: 24
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-2 gap-4",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECONDARY_NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: link.href,
                                                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                                                className: "text-sm text-muted-foreground hover:text-brand",
                                                                                children: link.label
                                                                            }, link.href, false, {
                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                lineNumber: 477,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                        lineNumber: 475,
                                                                        columnNumber: 24
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        size: "lg",
                                                                        className: "w-full rounded-2xl h-14 text-lg font-bold bg-brand hover:bg-brand/90 text-white",
                                                                        onClick: ()=>{
                                                                            setIsMobileMenuOpen(false);
                                                                            openSupportDesk();
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                                                className: "mr-3 h-6 w-6"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                                lineNumber: 492,
                                                                                columnNumber: 26
                                                                            }, this),
                                                                            " Contact Support"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                        lineNumber: 487,
                                                                        columnNumber: 24
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 325,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/src/components/layout/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const legalLinks = [
    {
        href: "/privacy-policy",
        label: "Privacy Policy"
    },
    {
        href: "/terms-of-service",
        label: "Terms of Service"
    },
    {
        href: "/cookies-policy",
        label: "Cookies Policy"
    },
    {
        href: "/legal-terms",
        label: "Legal Terms"
    },
    {
        href: "/refund-policy",
        label: "Refund & Cancellation"
    },
    {
        href: "/sitemap",
        label: "Sitemap"
    }
];
function Footer() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [showScroll, setShowScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setShowScroll(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    if (pathname.startsWith('/portal') || pathname.startsWith('/admin')) {
        return null;
    }
    const year = new Date().getFullYear();
    const handleScrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const openSupportDesk = (e)=>{
        e.preventDefault();
        document.dispatchEvent(new Event('open-support-desk'));
    };
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                ref: footerRef,
                className: "border-t bg-background relative overflow-hidden pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-24 -left-24 w-96 h-96 bg-brand/5 blur-[120px] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/10 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/footer.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "container relative z-10 px-4",
                        variants: containerVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "lg:col-span-4",
                                        variants: itemVariants,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                                                className: "mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg tracking-tight text-foreground",
                                                children: "Cyrotics Technologies (OPC) Pvt. Ltd."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-brand uppercase tracking-widest mt-1 mb-4",
                                                children: "Engineering the Future. Securing the Present."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground leading-relaxed max-w-md",
                                                children: [
                                                    "A future‑driven technology company delivering ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground font-medium",
                                                        children: "data center transformation, network infrastructure, cyber security, and AI-driven solutions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 63
                                                    }, this),
                                                    " We empower digital growth for government and enterprise organizations with engineering excellence."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "lg:col-span-5",
                                        variants: itemVariants,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm uppercase tracking-widest text-muted-foreground mb-8",
                                                children: "Navigation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 sm:grid-cols-3 gap-8",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["footerQuickLinks"].map((column, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-4",
                                                        children: column.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "group/link",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: link.href,
                                                                    onClick: link.href === '#' ? openSupportDesk : undefined,
                                                                    className: "text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group-hover/link:translate-x-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "h-3 w-3 text-brand opacity-0 -ml-5 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 118,
                                                                            columnNumber: 39
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "relative",
                                                                            children: [
                                                                                link.label,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "absolute bottom-0 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover/link:w-full"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 121,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 119,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, link.label, false, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, colIdx, false, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "lg:col-span-3",
                                        variants: itemVariants,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm uppercase tracking-widest text-muted-foreground mb-8",
                                                children: "Connect"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyAddress"].full)}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex items-start gap-4 group/contact",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 rounded-xl bg-secondary/50 group-hover/contact:bg-brand group-hover/contact:text-white transition-all duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold text-sm text-foreground mb-1",
                                                                        children: "Corporate Office"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                                        className: "not-italic text-xs text-muted-foreground leading-relaxed group-hover/contact:text-primary transition-colors",
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyAddress"].name,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                                lineNumber: 147,
                                                                                columnNumber: 52
                                                                            }, this),
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyAddress"].line1,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                                lineNumber: 148,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyAddress"].line2,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                                lineNumber: 149,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyAddress"].cityStateZip
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+919999295636",
                                                        className: "flex items-center gap-4 group/contact",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 rounded-xl bg-secondary/50 group-hover/contact:bg-brand group-hover/contact:text-white transition-all duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold text-sm text-foreground mb-0.5",
                                                                        children: "Phone"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                                        lineNumber: 159,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-muted-foreground group-hover/contact:text-primary transition-colors",
                                                                        children: "+91 99992 95636"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                                        lineNumber: 160,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:info@cyrotics.in",
                                                        className: "flex items-center gap-4 group/contact",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 rounded-xl bg-secondary/50 group-hover/contact:bg-brand group-hover/contact:text-white transition-all duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold text-sm text-foreground mb-0.5",
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-muted-foreground group-hover/contact:text-primary transition-colors",
                                                                        children: "info@cyrotics.in"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                                        lineNumber: 169,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
                                className: "bg-white/5 dark:bg-zinc-800/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-8 flex flex-col md:flex-row justify-between items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2",
                                        children: legalLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground hover:text-brand transition-colors",
                                                children: link.label
                                            }, link.href, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 182,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socialLinks"].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    whileHover: {
                                                        y: -3
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        asChild: true,
                                                        className: "rounded-xl border-white/10 bg-secondary/30 hover:bg-brand hover:text-white hover:border-brand transition-all duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: social.href,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sr-only",
                                                                    children: social.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 27
                                                    }, this)
                                                }, social.name, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/footer.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-secondary/10 border-t border-white/5 py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",
                                    children: [
                                        "© ",
                                        year,
                                        " CYROTICS TECHNOLOGIES OPC PVT LTD. All Rights Reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-8 bg-brand/30"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] italic text-muted-foreground/40 italic",
                                            children: "Built with precision, security, and innovation — Made in India, Trusted Globally."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-8 bg-brand/30"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/footer.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/footer.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.5
                },
                animate: {
                    opacity: showScroll ? 1 : 0,
                    scale: showScroll ? 1 : 0.5
                },
                className: "fixed bottom-8 right-8 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    onClick: handleScrollToTop,
                    className: "rounded-xl h-12 w-12 bg-background/80 backdrop-blur-xl border-brand/20 shadow-2xl shadow-brand/20 hover:bg-brand hover:text-white hover:border-brand transition-all",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/footer.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/footer.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/footer.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1346deed._.js.map