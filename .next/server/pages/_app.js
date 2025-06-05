/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_supabase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/util/supabase/component */ \"(pages-dir-node)/./src/util/supabase/component.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const supabase = (0,_util_supabase_component__WEBPACK_IMPORTED_MODULE_2__.createClient)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const { data: { subscription } } = supabase.auth.onAuthStateChange({\n                \"AuthProvider.useEffect\": (_event, session)=>{\n                    setUser(session?.user ?? null);\n                    setLoading(false);\n                }\n            }[\"AuthProvider.useEffect\"]);\n            return ({\n                \"AuthProvider.useEffect\": ()=>{\n                    subscription.unsubscribe();\n                }\n            })[\"AuthProvider.useEffect\"];\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    const signIn = async (email, password)=>{\n        try {\n            const { error } = await supabase.auth.signInWithPassword({\n                email,\n                password\n            });\n            if (error) {\n                throw error;\n            }\n            router.push('/dashboard');\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    const signUp = async (email, password)=>{\n        try {\n            const { error } = await supabase.auth.signUp({\n                email,\n                password\n            });\n            if (error) {\n                throw error;\n            }\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    const signOut = async ()=>{\n        try {\n            const { error } = await supabase.auth.signOut();\n            if (error) {\n                throw error;\n            }\n            setUser(null);\n            router.push('/');\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    const signInWithGoogle = async ()=>{\n        try {\n            const { error } = await supabase.auth.signInWithOAuth({\n                provider: 'google',\n                options: {\n                    redirectTo: `${window.location.origin}/auth/callback`\n                }\n            });\n            if (error) {\n                throw error;\n            }\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            signIn,\n            signUp,\n            signOut,\n            signInWithGoogle,\n            loading,\n            error\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\ThreadCrafts\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNyQjtBQUVqQjtBQVl4QyxNQUFNTyw0QkFBY04sb0RBQWFBLENBQThCTztBQUV4RCxTQUFTQyxhQUFhLEVBQUVDLFFBQVEsRUFBaUM7SUFDdEUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFjO0lBQzlDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQWdCO0lBQ2xELE1BQU1hLFNBQVNYLHNEQUFTQTtJQUN4QixNQUFNWSxXQUFXYixzRUFBWUE7SUFFN0JGLGdEQUFTQTtrQ0FBQztZQUNSLE1BQU0sRUFBRWdCLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEVBQUUsR0FBR0YsU0FBU0csSUFBSSxDQUFDQyxpQkFBaUI7MENBQUMsQ0FBQ0MsUUFBUUM7b0JBQzFFWixRQUFRWSxTQUFTYixRQUFRO29CQUN6QkcsV0FBVztnQkFDYjs7WUFFQTswQ0FBTztvQkFDTE0sYUFBYUssV0FBVztnQkFDMUI7O1FBQ0Y7aUNBQUcsRUFBRTtJQUVMLE1BQU1DLFNBQVMsT0FBT0MsT0FBZUM7UUFDbkMsSUFBSTtZQUNGLE1BQU0sRUFBRWIsS0FBSyxFQUFFLEdBQUcsTUFBTUcsU0FBU0csSUFBSSxDQUFDUSxrQkFBa0IsQ0FBQztnQkFDdkRGO2dCQUNBQztZQUNGO1lBRUEsSUFBSWIsT0FBTztnQkFDVCxNQUFNQTtZQUNSO1lBRUFFLE9BQU9hLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT2YsT0FBWTtZQUNuQkMsU0FBU0QsTUFBTWdCLE9BQU87UUFDeEI7SUFDRjtJQUVBLE1BQU1DLFNBQVMsT0FBT0wsT0FBZUM7UUFDbkMsSUFBSTtZQUNGLE1BQU0sRUFBRWIsS0FBSyxFQUFFLEdBQUcsTUFBTUcsU0FBU0csSUFBSSxDQUFDVyxNQUFNLENBQUM7Z0JBQzNDTDtnQkFDQUM7WUFDRjtZQUVBLElBQUliLE9BQU87Z0JBQ1QsTUFBTUE7WUFDUjtRQUNGLEVBQUUsT0FBT0EsT0FBWTtZQUNuQkMsU0FBU0QsTUFBTWdCLE9BQU87UUFDeEI7SUFDRjtJQUVBLE1BQU1FLFVBQVU7UUFDZCxJQUFJO1lBQ0YsTUFBTSxFQUFFbEIsS0FBSyxFQUFFLEdBQUcsTUFBTUcsU0FBU0csSUFBSSxDQUFDWSxPQUFPO1lBQzdDLElBQUlsQixPQUFPO2dCQUNULE1BQU1BO1lBQ1I7WUFDQUgsUUFBUTtZQUNSSyxPQUFPYSxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9mLE9BQVk7WUFDbkJDLFNBQVNELE1BQU1nQixPQUFPO1FBQ3hCO0lBQ0Y7SUFFQSxNQUFNRyxtQkFBbUI7UUFDdkIsSUFBSTtZQUNGLE1BQU0sRUFBRW5CLEtBQUssRUFBRSxHQUFHLE1BQU1HLFNBQVNHLElBQUksQ0FBQ2MsZUFBZSxDQUFDO2dCQUNwREMsVUFBVTtnQkFDVkMsU0FBUztvQkFDUEMsWUFBWSxHQUFHQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUM7Z0JBQ3ZEO1lBQ0Y7WUFFQSxJQUFJMUIsT0FBTztnQkFDVCxNQUFNQTtZQUNSO1FBQ0YsRUFBRSxPQUFPQSxPQUFZO1lBQ25CQyxTQUFTRCxNQUFNZ0IsT0FBTztRQUN4QjtJQUNGO0lBRUEscUJBQ0UsOERBQUN4QixZQUFZbUMsUUFBUTtRQUFDQyxPQUFPO1lBQUVoQztZQUFNZTtZQUFRTTtZQUFRQztZQUFTQztZQUFrQnJCO1lBQVNFO1FBQU07a0JBQzVGTDs7Ozs7O0FBR1A7QUFFTyxTQUFTa0M7SUFDZCxNQUFNQyxVQUFVM0MsaURBQVVBLENBQUNLO0lBQzNCLElBQUlzQyxZQUFZckMsV0FBVztRQUN6QixNQUFNLElBQUlzQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsiRDpcXFRocmVhZENyYWZ0c1xcc3JjXFxjb250ZXh0c1xcQXV0aENvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL3V0aWwvc3VwYWJhc2UvY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlciwgUHJvdmlkZXIgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbnRlcmZhY2UgQXV0aENvbnRleHRUeXBlIHtcclxuICB1c2VyOiBVc2VyIHwgbnVsbDtcclxuICBzaWduSW46IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gIHNpZ25VcDogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XHJcbiAgc2lnbk91dDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBzaWduSW5XaXRoR29vZ2xlOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHN1YnNjcmlwdGlvbiB9IH0gPSBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChfZXZlbnQsIHNlc3Npb24pID0+IHtcclxuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyID8/IG51bGwpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNpZ25JbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25JbldpdGhQYXNzd29yZCh7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25VcCh7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbk91dCgpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoT0F1dGgoe1xyXG4gICAgICAgIHByb3ZpZGVyOiAnZ29vZ2xlJyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICByZWRpcmVjdFRvOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hdXRoL2NhbGxiYWNrYFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNpZ25Jbiwgc2lnblVwLCBzaWduT3V0LCBzaWduSW5XaXRoR29vZ2xlLCBsb2FkaW5nLCBlcnJvciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDbGllbnQiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJzdXBhYmFzZSIsImRhdGEiLCJzdWJzY3JpcHRpb24iLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJfZXZlbnQiLCJzZXNzaW9uIiwidW5zdWJzY3JpYmUiLCJzaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aFBhc3N3b3JkIiwicHVzaCIsIm1lc3NhZ2UiLCJzaWduVXAiLCJzaWduT3V0Iiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhPQXV0aCIsInByb3ZpZGVyIiwib3B0aW9ucyIsInJlZGlyZWN0VG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/AuthContext */ \"(pages-dir-node)/./src/contexts/AuthContext.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\ThreadCrafts\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ThreadCrafts\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQytCO0FBQ3VCO0FBRXZDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNILCtEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsiRDpcXFRocmVhZENyYWZ0c1xcc3JjXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/util/supabase/component.ts":
/*!****************************************!*\
  !*** ./src/util/supabase/component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://tcwavbavgmqcpfhrkmij.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjd2F2YmF2Z21xY3BmaHJrbWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjExMDAsImV4cCI6MjA2NDU5NzEwMH0.66b55geagd5NppwOLNy1cAeFGTsDo_kWe9eq3ICYgWM\";\nif (!supabaseUrl || !supabaseAnonKey) {\n    throw new Error('Missing Supabase environment variables');\n}\nconst createClient = ()=>(0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy91dGlsL3N1cGFiYXNlL2NvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkU7QUFFN0UsTUFBTUUsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGtCQUFrQkgsa05BQXlDO0FBRWpFLElBQUksQ0FBQ0QsZUFBZSxDQUFDSSxpQkFBaUI7SUFDcEMsTUFBTSxJQUFJRSxNQUFNO0FBQ2xCO0FBRU8sTUFBTVIsZUFBZSxJQUMxQkMsbUVBQW9CQSxDQUFDQyxhQUFhSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkQ6XFxUaHJlYWRDcmFmdHNcXHNyY1xcdXRpbFxcc3VwYWJhc2VcXGNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgYXMgY3JlYXRlU3VwYWJhc2VDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkw7XHJcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZO1xyXG5cclxuaWYgKCFzdXBhYmFzZVVybCB8fCAhc3VwYWJhc2VBbm9uS2V5KSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFN1cGFiYXNlIGVudmlyb25tZW50IHZhcmlhYmxlcycpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2xpZW50ID0gKCkgPT5cclxuICBjcmVhdGVTdXBhYmFzZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNyZWF0ZVN1cGFiYXNlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VBbm9uS2V5IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/util/supabase/component.ts\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();