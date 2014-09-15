Package.describe({
  summary: "Marked - parser and compiler for Markdown",
  version: "0.3.2",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('lib/marked.js');
  api.export('marked', 'client')
});

