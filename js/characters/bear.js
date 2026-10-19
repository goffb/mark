export default {
  id: "bear",
  label: "bear",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="6" y="6" width="4" height="4" fill="${p.main}"/>
      <rect x="20" y="6" width="4" height="4" fill="${p.main}"/>
      <rect x="7" y="7" width="2" height="2" fill="${p.shade}"/>
      <rect x="21" y="7" width="2" height="2" fill="${p.shade}"/>

      <rect x="7" y="9" width="16" height="12" fill="${p.main}"/>
      <rect x="6" y="11" width="18" height="8" fill="${p.main}"/>

      <rect x="8" y="21" width="14" height="2" fill="${p.shade}"/>
      <rect x="10" y="23" width="10" height="1" fill="${p.shade}"/>

      <rect x="10" y="12" width="2" height="2" fill="${p.dark}"/>
      <rect x="18" y="12" width="2" height="2" fill="${p.dark}"/>
      <rect x="10" y="12" width="1" height="1" fill="${p.light}"/>
      <rect x="18" y="12" width="1" height="1" fill="${p.light}"/>

      <rect x="11" y="15" width="8" height="5" fill="${p.light}"/>
      <rect x="13" y="16" width="4" height="2" fill="${p.dark}"/>
      <rect x="14" y="18" width="2" height="2" fill="${p.dark}"/>
    `;
  }
};