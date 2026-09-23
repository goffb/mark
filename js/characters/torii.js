export default {
  id: "torii",
  label: "torii",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="5" y="6" width="20" height="2" fill="${p.main}"/>

      <rect x="7" y="8" width="16" height="1" fill="${p.shade}"/>

      <rect x="8" y="9" width="2" height="16" fill="${p.main}"/>
      <rect x="20" y="9" width="2" height="16" fill="${p.main}"/>

      <rect x="6" y="11" width="18" height="2" fill="${p.main}"/>

      <rect x="8" y="25" width="3" height="1" fill="${p.shade}"/>
      <rect x="19" y="25" width="3" height="1" fill="${p.shade}"/>

      <rect x="5" y="6" width="20" height="1" fill="${p.light}"/>
      <rect x="8" y="9" width="1" height="16" fill="${p.light}"/>
    `;
  }
};