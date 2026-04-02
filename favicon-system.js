(function () {
  const head = document.head;

  const add = (tag) => head.appendChild(tag);

  // SVG favicon (primary)
  const svgIcon = document.createElement("link");
  svgIcon.rel = "icon";
  svgIcon.type = "image/svg+xml";
  svgIcon.href = "/assets/favicon.svg";
  add(svgIcon);

  // PNG fallbacks
  const icons = [
    { sizes: "32x32", href: "/assets/favicon-32.png" },
    { sizes: "16x16", href: "/assets/favicon-16.png" },
    { sizes: "192x192", href: "/assets/android-chrome-192.png" },
    { sizes: "512x512", href: "/assets/android-chrome-512.png" }
  ];

  icons.forEach(({ sizes, href }) => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = sizes;
    link.href = href;
    add(link);
  });

  // Apple touch icon
  const apple = document.createElement("link");
  apple.rel = "apple-touch-icon";
  apple.sizes = "180x180";
  apple.href = "/assets/apple-touch-icon.png";
  add(apple);

  // Manifest
  const manifest = document.createElement("link");
  manifest.rel = "manifest";
  manifest.href = "/site.webmanifest";
  add(manifest);

  // Theme color
  const theme = document.createElement("meta");
  theme.name = "theme-color";
  theme.content = "#d9d9d9";
  add(theme);
})();
