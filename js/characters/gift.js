export default {
  id: "gift",
  label: "gift",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="10" y="7" width="4" height="2" fill="${p.main}"/>
      <rect x="16" y="7" width="4" height="2" fill="${p.main}"/>
      <rect x="13" y="9" width="4" height="2" fill="${p.main}"/>

      <rect x="7" y="11" width="16" height="3" fill="${p.main}"/>
      <rect x="9" y="12" width="5" height="1" fill="${p.light}"/>

      <rect x="8" y="14" width="14" height="10" fill="${p.main}"/>

      <rect x="13" y="11" width="4" height="13" fill="${p.light}"/>

      <rect x="15" y="15" width="6" height="8" fill="${p.shade}" opacity="0.5"/>
      <rect x="8" y="23" width="14" height="1" fill="${p.shade}" opacity="0.5"/>
    `;
  }
};
