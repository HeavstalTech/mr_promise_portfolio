const fs = require("fs");
const https = require("https");

const pkg = JSON.parse(fs.readFileSync("package.json"));

const packages = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {})
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(
      url,
      {
        headers: {
          "User-Agent": "GitHub-Actions"
        }
      },
      res => {
        let data = "";

        res.on("data", c => (data += c));
        res.on("end", () => resolve(data));
      }
    ).on("error", reject);
  });
}

(async () => {
  let output = "# Combined Package READMEs\n\n";

  for (const name of packages) {
    console.log(`Fetching ${name}`);

    try {
      const meta = JSON.parse(
        await get(`https://registry.npmjs.org/${name}`)
      );

      let repo = meta.repository?.url || "";

      repo = repo
        .replace(/^git\+/, "")
        .replace(/\.git$/, "")
        .replace("git://", "https://");

      const match = repo.match(/github\.com\/([^/]+)\/([^/]+)/);

      if (!match) {
        output += `# ${name}\n\nRepository not on GitHub.\n\n---\n\n`;
        continue;
      }

      const owner = match[1];
      const project = match[2];

      const branches = ["main", "master"];

      let readme = null;

      for (const branch of branches) {
        try {
          readme = await get(
            `https://raw.githubusercontent.com/${owner}/${project}/${branch}/README.md`
          );

          if (!readme.includes("404")) break;
        } catch {}
      }

      output += `# ${name}\n\n`;

      if (readme && !readme.includes("404")) {
        output += readme;
      } else {
        output += "README not found.";
      }

      output += "\n\n---\n\n";
    } catch (e) {
      output += `# ${name}\n\nFailed to fetch.\n\n---\n\n`;
    }
  }

  fs.writeFileSync("PACKAGE_READMES.md", output);
})();
