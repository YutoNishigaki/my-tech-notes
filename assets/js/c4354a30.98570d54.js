"use strict";(self.webpackChunkmy_tech_notes=self.webpackChunkmy_tech_notes||[]).push([[1630],{244:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"my-first-note","title":"\u306f\u3058\u3081\u3066\u306e\u6280\u8853\u30e1\u30e2","description":"\u3053\u308c\u306f Docusaurus \u3067\u4f5c\u6210\u3057\u305f\u6280\u8853\u30e1\u30e2\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u3059\uff01","source":"@site/docs/my-first-note.md","sourceDirName":".","slug":"/my-first-note","permalink":"/my-tech-notes/docs/my-first-note","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/my-first-note.md","tags":[],"version":"current","frontMatter":{"id":"my-first-note","title":"\u306f\u3058\u3081\u3066\u306e\u6280\u8853\u30e1\u30e2"},"sidebar":"tutorialSidebar","previous":{"title":"Translate your site","permalink":"/my-tech-notes/docs/tutorial-extras/translate-your-site"}}');var r=t(4848),s=t(8453);const i={id:"my-first-note",title:"\u306f\u3058\u3081\u3066\u306e\u6280\u8853\u30e1\u30e2"},c="\u306f\u3058\u3081\u3066\u306e\u6280\u8853\u30e1\u30e2",u={},a=[{value:"\u30b3\u30fc\u30c9\u306e\u30b5\u30f3\u30d7\u30eb",id:"\u30b3\u30fc\u30c9\u306e\u30b5\u30f3\u30d7\u30eb",level:2},{value:"Select \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"select-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:3},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u8a2d\u5b9a",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u8a2d\u5b9a",level:3},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u306f\u3058\u3081\u3066\u306e\u6280\u8853\u30e1\u30e2",children:"\u306f\u3058\u3081\u3066\u306e\u6280\u8853\u30e1\u30e2"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u306f Docusaurus \u3067\u4f5c\u6210\u3057\u305f\u6280\u8853\u30e1\u30e2\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u3059\uff01"}),"\n",(0,r.jsx)(n.h2,{id:"\u30b3\u30fc\u30c9\u306e\u30b5\u30f3\u30d7\u30eb",children:"\u30b3\u30fc\u30c9\u306e\u30b5\u30f3\u30d7\u30eb"}),"\n",(0,r.jsx)(n.h3,{id:"select-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"Select \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="Menu.tsx"',children:'import { useCallback, useEffect, useState } from "react";\nimport { MenuProvider, useMenu } from "./MenuContext";\nimport clsx from "clsx";\n\nconst MenuTarget = ({ children }: { children: React.ReactNode }) => {\n  const { toggleMenu, targetRef } = useMenu();\n\n  return (\n    <button\n      type="button"\n      ref={targetRef}\n      onClick={toggleMenu}\n      className="cursor-pointer text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"\n    >\n      {children}\n    </button>\n  );\n};\n\nconst MenuDropdown = ({ children }: { children: React.ReactNode }) => {\n  const { isOpen, targetRef, dropdownRef } = useMenu();\n  const [position, setPosition] = useState<"top" | "bottom">("bottom");\n  const [maxHeight, setMaxHeight] = useState<number | null>(null);\n\n  const updateDropdownPosition = useCallback(() => {\n    if (!targetRef.current || !dropdownRef.current) return;\n\n    const buttonRect = targetRef.current.getBoundingClientRect();\n    const dropdownRect = dropdownRef.current.getBoundingClientRect();\n    const spaceBelow = window.innerHeight - buttonRect.bottom;\n    const spaceAbove = buttonRect.top;\n\n    let newPosition: "top" | "bottom" = "bottom";\n    let newMaxHeight: number | null = null;\n\n    if (spaceBelow < dropdownRect.height && spaceAbove > dropdownRect.height) {\n      newPosition = "top";\n      newMaxHeight = Math.min(spaceAbove - 8, dropdownRect.height);\n    } else if (\n      spaceAbove < dropdownRect.height &&\n      spaceBelow > dropdownRect.height\n    ) {\n      newPosition = "bottom";\n      newMaxHeight = Math.min(spaceBelow - 8, dropdownRect.height);\n    } else if (\n      spaceBelow < dropdownRect.height &&\n      spaceAbove < dropdownRect.height\n    ) {\n      if (spaceBelow > spaceAbove) {\n        newPosition = "bottom";\n        newMaxHeight = spaceBelow * 0.8;\n      } else {\n        newPosition = "top";\n        newMaxHeight = spaceAbove * 0.8;\n      }\n    }\n\n    setPosition(newPosition);\n    setMaxHeight(newMaxHeight);\n  }, [dropdownRef, targetRef]);\n\n  useEffect(() => {\n    if (isOpen) {\n      setTimeout(() => {\n        updateDropdownPosition();\n      }, 10);\n    }\n  }, [isOpen, updateDropdownPosition]);\n\n  useEffect(() => {\n    if (isOpen) {\n      const handleResizeOrScroll = () => {\n        updateDropdownPosition();\n      };\n\n      window.addEventListener("resize", handleResizeOrScroll);\n      window.addEventListener("scroll", handleResizeOrScroll, true);\n\n      return () => {\n        window.removeEventListener("resize", handleResizeOrScroll);\n        window.removeEventListener("scroll", handleResizeOrScroll, true);\n      };\n    }\n  }, [isOpen, updateDropdownPosition]);\n\n  return (\n    isOpen && (\n      <div\n        ref={dropdownRef}\n        className={clsx(\n          "absolute transform bg-white rounded-lg shadow-md z-50",\n          {\n            "bottom-full mb-[8px]": position === "top",\n            "top-full mt-[8px]": position === "bottom",\n          }\n        )}\n        style={{\n          maxHeight: maxHeight ? `${maxHeight}px` : "auto",\n          overflowY: maxHeight ? "auto" : "visible",\n        }}\n      >\n        {children}\n      </div>\n    )\n  );\n};\n\ninterface MenuItemProps {\n  children: React.ReactNode;\n  onClick?: () => void;\n  focusRef?: React.RefObject<HTMLElement>;\n}\n\nconst MenuItem = ({ children, onClick, focusRef }: MenuItemProps) => {\n  const { closeMenu, targetRef } = useMenu();\n\n  const handleClick = () => {\n    if (onClick) {\n      onClick();\n    }\n    closeMenu();\n\n    // \u30af\u30ea\u30c3\u30af\u5f8c\u306e\u30d5\u30a9\u30fc\u30ab\u30b9\u51e6\u7406\n    setTimeout(() => {\n      if (focusRef?.current) {\n        focusRef.current.focus();\n      } else if (targetRef.current) {\n        targetRef.current.focus();\n      }\n    }, 100);\n  };\n\n  return (\n    <button\n      onClick={handleClick}\n      className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:border-gray-700"\n    >\n      {children}\n    </button>\n  );\n};\n\nexport const Menu = ({ children }: { children: React.ReactNode }) => {\n  return (\n    <MenuProvider>\n      <div className="relative flex mt-[200px] w-[500px]">{children}</div>\n    </MenuProvider>\n  );\n};\n\nMenu.Target = MenuTarget;\nMenu.Dropdown = MenuDropdown;\nMenu.Item = MenuItem;\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u8a2d\u5b9a",children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="MenuContext.tsx"',children:'import { createContext, useContext, useState, ReactNode, useRef } from "react";\n\ninterface MenuContextType {\n  isOpen: boolean;\n  toggleMenu: () => void;\n  closeMenu: () => void;\n  targetRef: React.RefObject<HTMLButtonElement>;\n  dropdownRef: React.RefObject<HTMLDivElement>;\n}\n\nconst MenuContext = createContext<MenuContextType | null>(null);\n\nexport const useMenu = () => {\n  const context = useContext(MenuContext);\n  if (!context) {\n    throw new Error("useMenu must be used within a Menu");\n  }\n  return context;\n};\n\nexport const MenuProvider = ({ children }: { children: ReactNode }) => {\n  const [isOpen, setIsOpen] = useState(false);\n  const targetRef = useRef<HTMLButtonElement>(null);\n  const dropdownRef = useRef<HTMLDivElement>(null);\n\n  const toggleMenu = () => setIsOpen((prev) => !prev);\n  const closeMenu = () => setIsOpen(false);\n\n  return (\n    <MenuContext.Provider\n      value={{ isOpen, toggleMenu, closeMenu, targetRef, dropdownRef }}\n    >\n      {children}\n    </MenuContext.Provider>\n  );\n};\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u3044\u65b9",children:"\u4f7f\u3044\u65b9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="App.tsx"',children:'import { Menu } from "./examples/menu";\nimport { Layout } from "./examples/Layout";\nimport { useRef } from "react";\n\nconst App = () => {\n  const inputRef = useRef<HTMLInputElement>(null);\n\n  return (\n    <Layout>\n      <Menu>\n        <Menu.Target>Open Menu</Menu.Target>\n        <Menu.Dropdown>\n          <Menu.Item\n            onClick={() => console.log("Clicked item 1")}\n            focusRef={inputRef}\n          >\n            Item 1\n          </Menu.Item>\n          <Menu.Item>Item 2</Menu.Item>\n        </Menu.Dropdown>\n      </Menu>\n\n      <input ref={inputRef} placeholder="Click Item 1 to focus here" />\n    </Layout>\n  );\n};\n\nexport default App;\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);