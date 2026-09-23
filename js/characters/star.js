export default {
  id: "star",
  label: "star",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="14" y="5" width="2" height="3" fill="${p.main}"/>
      <rect x="13" y="8" width="4" height="2" fill="${p.main}"/>
      <rect x="12" y="10" width="6" height="2" fill="${p.main}"/>
      <rect x="7" y="12" width="16" height="2" fill="${p.main}"/>
      <rect x="9" y="14" width="12" height="2" fill="${p.main}"/>
      <rect x="11" y="16" width="8" height="2" fill="${p.main}"/>
      <rect x="10" y="18" width="4" height="3" fill="${p.main}"/>
      <rect x="16" y="18" width="4" height="3" fill="${p.main}"/>

      <rect x="13" y="9" width="4" height="1" fill="${p.light}"/>
      <rect x="12" y="11" width="2" height="3" fill="${p.light}"/>

      <rect x="14" y="5" width="2" height="1" fill="${p.light}"/>
      <rect x="15" y="14" width="4" height="4" fill="${p.shade}" opacity="0.5"/>
    `;
  }
};