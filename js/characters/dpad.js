export default {
  id: "dpad",
  label: "dpad",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="12" y="7" width="6" height="17" fill="${p.main}"/>
      <rect x="7" y="12" width="16" height="7" fill="${p.main}"/>

      <rect x="13" y="8" width="4" height="6" fill="${p.light}"/>
      <rect x="8" y="13" width="6" height="5" fill="${p.light}"/>

      <rect x="14" y="14" width="2" height="3" fill="${p.shade}" opacity="0.6"/>

      <rect x="18" y="13" width="5" height="6" fill="${p.shade}" opacity="0.4"/>
      <rect x="13" y="20" width="5" height="4" fill="${p.shade}" opacity="0.4"/>
    `;
  }
};