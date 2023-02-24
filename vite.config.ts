import { defineConfig } from "vite";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import React from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  plugins: [
    React(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: ["src/presentation/pages"],
      exclude: ["**/components/**/*"],
      extensions: ["tsx", "mdx"],
      extendRoute(route, parent) {
        console.log('route: ', route, '\nparent: ', parent)
        if (route.path === "/") {
          // Index is unauthenticated.
          return route;
        }

        // Augment the route with meta that indicates that the route requires authentication.
        return {
          ...route,
          meta: { auth: true },
        };
      },
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "react",
        "react-router-dom",
        {
          "@reactuses/core": [
            "useToggle",
            'useDarkMode',
          ],
        },
      ],

      dts: true,
    }),
  ],
});
