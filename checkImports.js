// checkImports.js
import fs from "fs";
import path from "path";

const SRC_DIR = "./src";

function walk(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, callback);
    } else if (entry.isFile() && fullPath.match(/\.(jsx?|tsx?)$/)) {
      callback(fullPath);
    }
  });
}

function checkFileImports(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const regex = /import .* from ["'](.*)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith(".")) {
      const absImportPath = path.resolve(path.dirname(filePath), importPath);
      let resolvedFile = null;

      // probar posibles extensiones
      const candidates = [".js", ".jsx", ".ts", ".tsx", "/index.js", "/index.jsx"];
      for (const ext of candidates) {
        if (fs.existsSync(absImportPath + ext)) {
          resolvedFile = absImportPath + ext;
          break;
        }
      }

      if (!resolvedFile && fs.existsSync(absImportPath)) {
        resolvedFile = absImportPath;
      }

      if (!resolvedFile) {
        console.log(`⚠️ Posible error en: ${filePath}\n   → Import no resuelto: ${importPath}`);
      }
    }
  }
}

console.log("🔎 Revisando imports en", SRC_DIR);
walk(SRC_DIR, checkFileImports);
console.log("✅ Revisión terminada");
