export default {
  id: "mushroom",
  label: "mushroom",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="12" y="7" width="8" height="2" fill="${p.main}"/>
      <rect x="10" y="9" width="12" height="2" fill="${p.main}"/>
      <rect x="8" y="11" width="16" height="2" fill="${p.main}"/>
      <rect x="7" y="13" width="18" height="2" fill="${p.main}"/>
      <rect x="7" y="15" width="18" height="2" fill="${p.main}"/>

      <rect x="12" y="12" width="2" height="2" fill="${p.light}"/>
      <rect x="16" y="11" width="2" height="2" fill="${p.light}"/>
      <rect x="19" y="13" width="2" height="2" fill="${p.light}"/>
      <rect x="9" y="14" width="2" height="2" fill="${p.light}"/>

      <rect x="13" y="17" width="6" height="2" fill="${p.light}"/>
      <rect x="12" y="19" width="8" height="2" fill="${p.light}"/>
      <rect x="12" y="21" width="8" height="2" fill="${p.light}"/>

      <rect x="12" y="23" width="8" height="2" fill="${p.shade}"/>

      <rect x="7" y="15" width="18" height="1" fill="${p.shade}"/>
    `;
  }
};