Package.describe({
  summary: "Marked - parser and compiler for Markdown",
  version: "0.3.3",
  git: "https://github.com/parhelium/package-marked",
  name: "parhelium:marked"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('lib/marked.js');
  api.export('marked', 'client')
});

