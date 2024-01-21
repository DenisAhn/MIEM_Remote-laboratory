// vite.config.ts
import path from "path";
import legacy from "file:///D:/untitled9/async_lab/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import react from "file:///D:/untitled9/async_lab/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///D:/untitled9/async_lab/node_modules/vite/dist/node/index.js";
import checker from "file:///D:/untitled9/async_lab/node_modules/vite-plugin-checker/dist/esm/main.js";
import svgr from "file:///D:/untitled9/async_lab/node_modules/vite-plugin-svgr/dist/index.js";
import mkcert from "file:///D:/untitled9/async_lab/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import paths from "file:///D:/untitled9/async_lab/node_modules/vite-tsconfig-paths/dist/index.mjs";

// tsconfig.json
var tsconfig_default = {
  compilerOptions: {
    baseUrl: "./src",
    target: "es6",
    skipLibCheck: true,
    paths: {
      components: ["components/*"],
      config: ["config/*"],
      images: ["images/*"],
      pages: ["pages/*"],
      stores: ["stores/*"],
      utils: ["utils/*"],
      styles: ["styles/*"],
      assets: ["assets/*"],
      types: ["types/*"],
      hooks: ["hooks/*"],
      entities: ["entities/*"]
    },
    lib: [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    typeRoots: [
      "./node_modules/@types",
      "types"
    ],
    forceConsistentCasingInFileNames: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    module: "esnext",
    resolveJsonModule: true,
    moduleResolution: "node",
    isolatedModules: true,
    jsx: "preserve",
    strictNullChecks: true,
    incremental: true,
    strictPropertyInitialization: false,
    plugins: [
      {
        name: "typescript-plugin-css-modules",
        options: {
          customMatcher: "\\.module\\.scss$"
        }
      }
    ]
  },
  "ts-node": {
    compilerOptions: {
      module: "CommonJS"
    }
  },
  include: [
    "**/*.ts",
    "**/*.tsx"
  ],
  exclude: [
    "node_modules"
  ]
};

// vite.config.ts
var __vite_injected_original_dirname = "D:\\untitled9\\async_lab";
var SRC_PATH = path.resolve(__vite_injected_original_dirname, "src");
var parseTsConfigPaths = (paths2) => {
  const webpackConfigAliases = {};
  Object.entries(paths2).forEach(([alias, paths3]) => {
    const aliasPath = paths3[0].replace(/[^a-zA-Z]/g, "");
    webpackConfigAliases[alias] = path.join(SRC_PATH, aliasPath);
  });
  return webpackConfigAliases;
};
var vite_config_default = defineConfig({
  publicDir: "./static",
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    svgr(),
    checker({
      typescript: true,
      overlay: false
    }),
    paths(),
    mkcert()
  ],
  resolve: {
    alias: {
      ...parseTsConfigPaths(tsconfig_default.compilerOptions.paths),
      styles: path.join(__vite_injected_original_dirname, "src/styles")
    }
  },
  build: {
    outDir: "./public",
    assetsDir: "static",
    rollupOptions: {
      plugins: [
        {
          name: "replace-import-extension",
          transform(code, id) {
            if (id.endsWith(".js") || id.endsWith(".jsx")) {
              return code.replace(
                /import\s.*\sfrom\s['"].*\.(ts|tsx)['"]/g,
                (match) => match.replace(/\.(ts|tsx)/, ".js")
              );
            }
          }
        }
      ]
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  css: {
    modules: {
      localsConvention: "dashes"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidHNjb25maWcuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHVudGl0bGVkOVxcXFxhc3luY19sYWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHVudGl0bGVkOVxcXFxhc3luY19sYWJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3VudGl0bGVkOS9hc3luY19sYWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5JztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBjaGVja2VyIGZyb20gJ3ZpdGUtcGx1Z2luLWNoZWNrZXInO1xuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XG5pbXBvcnQgbWtjZXJ0IGZyb20gJ3ZpdGUtcGx1Z2luLW1rY2VydCc7XG5pbXBvcnQgcGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgdHNjb25maWcgZnJvbSAnLi90c2NvbmZpZy5qc29uJztcblxuY29uc3QgU1JDX1BBVEggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyk7XG5cbmNvbnN0IHBhcnNlVHNDb25maWdQYXRocyA9IChcbiAgICBwYXRoczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+XG4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgY29uc3Qgd2VicGFja0NvbmZpZ0FsaWFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgT2JqZWN0LmVudHJpZXMocGF0aHMpLmZvckVhY2goKFthbGlhcywgcGF0aHNdKSA9PiB7XG4gICAgY29uc3QgYWxpYXNQYXRoID0gcGF0aHNbMF0ucmVwbGFjZSgvW15hLXpBLVpdL2csICcnKTtcbiAgICB3ZWJwYWNrQ29uZmlnQWxpYXNlc1thbGlhc10gPSBwYXRoLmpvaW4oU1JDX1BBVEgsIGFsaWFzUGF0aCk7XG4gIH0pO1xuICByZXR1cm4gd2VicGFja0NvbmZpZ0FsaWFzZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwdWJsaWNEaXI6ICcuL3N0YXRpYycsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGxlZ2FjeSh7XG4gICAgICB0YXJnZXRzOiBbJ2RlZmF1bHRzJywgJ25vdCBJRSAxMSddLFxuICAgIH0pLFxuICAgIHN2Z3IoKSxcbiAgICBjaGVja2VyKHtcbiAgICAgIHR5cGVzY3JpcHQ6IHRydWUsXG4gICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICB9KSxcbiAgICBwYXRocygpLFxuICAgIG1rY2VydCgpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIC4uLnBhcnNlVHNDb25maWdQYXRocyh0c2NvbmZpZy5jb21waWxlck9wdGlvbnMucGF0aHMpLFxuICAgICAgc3R5bGVzOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnc3JjL3N0eWxlcycpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi9wdWJsaWMnLFxuICAgIGFzc2V0c0RpcjogJ3N0YXRpYycsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3JlcGxhY2UtaW1wb3J0LWV4dGVuc2lvbicsXG4gICAgICAgICAgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XG4gICAgICAgICAgICBpZiAoaWQuZW5kc1dpdGgoJy5qcycpIHx8IGlkLmVuZHNXaXRoKCcuanN4JykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvZGUucmVwbGFjZSgvaW1wb3J0XFxzLipcXHNmcm9tXFxzWydcIl0uKlxcLih0c3x0c3gpWydcIl0vZywgKG1hdGNoKSA9PlxuICAgICAgICAgICAgICAgICAgbWF0Y2gucmVwbGFjZSgvXFwuKHRzfHRzeCkvLCAnLmpzJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICB9LFxuICBjc3M6IHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICBsb2NhbHNDb252ZW50aW9uOiAnZGFzaGVzJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbiIsICJ7XG4gIFwiY29tcGlsZXJPcHRpb25zXCI6IHtcbiAgICBcImJhc2VVcmxcIjogXCIuL3NyY1wiLFxuICAgIFwidGFyZ2V0XCI6IFwiZXM2XCIsXG4gICAgXCJza2lwTGliQ2hlY2tcIjogdHJ1ZSxcbiAgICBcInBhdGhzXCI6IHtcbiAgICAgIFwiY29tcG9uZW50c1wiOiBbXCJjb21wb25lbnRzLypcIl0sXG4gICAgICBcImNvbmZpZ1wiOiBbXCJjb25maWcvKlwiXSxcbiAgICAgIFwiaW1hZ2VzXCI6IFtcImltYWdlcy8qXCJdLFxuICAgICAgXCJwYWdlc1wiOiBbXCJwYWdlcy8qXCJdLFxuICAgICAgXCJzdG9yZXNcIjogW1wic3RvcmVzLypcIl0sXG4gICAgICBcInV0aWxzXCI6IFtcInV0aWxzLypcIl0sXG4gICAgICBcInN0eWxlc1wiOiBbXCJzdHlsZXMvKlwiXSxcbiAgICAgIFwiYXNzZXRzXCI6IFtcImFzc2V0cy8qXCJdLFxuICAgICAgXCJ0eXBlc1wiOiBbXCJ0eXBlcy8qXCJdLFxuICAgICAgXCJob29rc1wiOiBbXCJob29rcy8qXCJdLFxuICAgICAgXCJlbnRpdGllc1wiOiBbXCJlbnRpdGllcy8qXCJdXG4gICAgfSxcbiAgICBcImxpYlwiOiBbXG4gICAgICBcImRvbVwiLFxuICAgICAgXCJkb20uaXRlcmFibGVcIixcbiAgICAgIFwiZXNuZXh0XCJcbiAgICBdLFxuICAgIFwidHlwZVJvb3RzXCI6IFtcbiAgICAgIFwiLi9ub2RlX21vZHVsZXMvQHR5cGVzXCIsXG4gICAgICBcInR5cGVzXCJcbiAgICBdLFxuICAgIFwiZm9yY2VDb25zaXN0ZW50Q2FzaW5nSW5GaWxlTmFtZXNcIjogdHJ1ZSxcbiAgICBcImVzTW9kdWxlSW50ZXJvcFwiOiB0cnVlLFxuICAgIFwiYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0c1wiOiB0cnVlLFxuICAgIFwibW9kdWxlXCI6IFwiZXNuZXh0XCIsXG4gICAgXCJyZXNvbHZlSnNvbk1vZHVsZVwiOiB0cnVlLFxuICAgIFwibW9kdWxlUmVzb2x1dGlvblwiOiBcIm5vZGVcIixcbiAgICBcImlzb2xhdGVkTW9kdWxlc1wiOiB0cnVlLFxuICAgIFwianN4XCI6IFwicHJlc2VydmVcIixcbiAgICBcInN0cmljdE51bGxDaGVja3NcIjogdHJ1ZSxcbiAgICBcImluY3JlbWVudGFsXCI6IHRydWUsXG4gICAgXCJzdHJpY3RQcm9wZXJ0eUluaXRpYWxpemF0aW9uXCI6IGZhbHNlLFxuICAgIFwicGx1Z2luc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcInR5cGVzY3JpcHQtcGx1Z2luLWNzcy1tb2R1bGVzXCIsXG4gICAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgICAgXCJjdXN0b21NYXRjaGVyXCI6IFwiXFxcXC5tb2R1bGVcXFxcLnNjc3MkXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJ0cy1ub2RlXCI6IHtcbiAgICBcImNvbXBpbGVyT3B0aW9uc1wiOiB7XG4gICAgICBcIm1vZHVsZVwiOiBcIkNvbW1vbkpTXCJcbiAgICB9XG4gIH0sXG4gIFwiaW5jbHVkZVwiOiBbXG4gICAgXCIqKi8qLnRzXCIsXG4gICAgXCIqKi8qLnRzeFwiXG4gIF0sXG4gIFwiZXhjbHVkZVwiOiBbXG4gICAgXCJub2RlX21vZHVsZXNcIlxuICBdXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBQLE9BQU8sVUFBVTtBQUMzUSxPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVzs7O0FDUGxCO0FBQUEsRUFDRSxpQkFBbUI7QUFBQSxJQUNqQixTQUFXO0FBQUEsSUFDWCxRQUFVO0FBQUEsSUFDVixjQUFnQjtBQUFBLElBQ2hCLE9BQVM7QUFBQSxNQUNQLFlBQWMsQ0FBQyxjQUFjO0FBQUEsTUFDN0IsUUFBVSxDQUFDLFVBQVU7QUFBQSxNQUNyQixRQUFVLENBQUMsVUFBVTtBQUFBLE1BQ3JCLE9BQVMsQ0FBQyxTQUFTO0FBQUEsTUFDbkIsUUFBVSxDQUFDLFVBQVU7QUFBQSxNQUNyQixPQUFTLENBQUMsU0FBUztBQUFBLE1BQ25CLFFBQVUsQ0FBQyxVQUFVO0FBQUEsTUFDckIsUUFBVSxDQUFDLFVBQVU7QUFBQSxNQUNyQixPQUFTLENBQUMsU0FBUztBQUFBLE1BQ25CLE9BQVMsQ0FBQyxTQUFTO0FBQUEsTUFDbkIsVUFBWSxDQUFDLFlBQVk7QUFBQSxJQUMzQjtBQUFBLElBQ0EsS0FBTztBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQWE7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLGtDQUFvQztBQUFBLElBQ3BDLGlCQUFtQjtBQUFBLElBQ25CLDhCQUFnQztBQUFBLElBQ2hDLFFBQVU7QUFBQSxJQUNWLG1CQUFxQjtBQUFBLElBQ3JCLGtCQUFvQjtBQUFBLElBQ3BCLGlCQUFtQjtBQUFBLElBQ25CLEtBQU87QUFBQSxJQUNQLGtCQUFvQjtBQUFBLElBQ3BCLGFBQWU7QUFBQSxJQUNmLDhCQUFnQztBQUFBLElBQ2hDLFNBQVc7QUFBQSxNQUNUO0FBQUEsUUFDRSxNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsVUFDVCxlQUFpQjtBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxpQkFBbUI7QUFBQSxNQUNqQixRQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGOzs7QUQzREEsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTSxXQUFXLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBRTlDLElBQU0scUJBQXFCLENBQ3ZCQSxXQUN5QjtBQUMzQixRQUFNLHVCQUErQyxDQUFDO0FBQ3RELFNBQU8sUUFBUUEsTUFBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU9BLE1BQUssTUFBTTtBQUNoRCxVQUFNLFlBQVlBLE9BQU0sQ0FBQyxFQUFFLFFBQVEsY0FBYyxFQUFFO0FBQ25ELHlCQUFxQixLQUFLLElBQUksS0FBSyxLQUFLLFVBQVUsU0FBUztBQUFBLEVBQzdELENBQUM7QUFDRCxTQUFPO0FBQ1Q7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsWUFBWSxXQUFXO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEdBQUcsbUJBQW1CLGlCQUFTLGdCQUFnQixLQUFLO0FBQUEsTUFDcEQsUUFBUSxLQUFLLEtBQUssa0NBQVcsWUFBWTtBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVUsTUFBTSxJQUFJO0FBQ2xCLGdCQUFJLEdBQUcsU0FBUyxLQUFLLEtBQUssR0FBRyxTQUFTLE1BQU0sR0FBRztBQUM3QyxxQkFBTyxLQUFLO0FBQUEsZ0JBQVE7QUFBQSxnQkFBMkMsQ0FBQyxVQUM1RCxNQUFNLFFBQVEsY0FBYyxLQUFLO0FBQUEsY0FDckM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxTQUFTLFdBQVc7QUFBQSxFQUNoQztBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1Asa0JBQWtCO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aHMiXQp9Cg==
