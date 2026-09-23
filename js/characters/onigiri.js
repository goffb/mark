export default {
  id: "onigiri",
  label: "onigiri",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="14" y="6" width="2" height="2" fill="${p.main}"/>
      <rect x="13" y="8" width="4" height="2" fill="${p.main}"/>
      <rect x="12" y="10" width="6" height="2" fill="${p.main}"/>
      <rect x="11" y="12" width="8" height="2" fill="${p.main}"/>
      <rect x="10" y="14" width="10" height="2" fill="${p.main}"/>
      <rect x="9" y="16" width="12" height="2" fill="${p.main}"/>
      <rect x="8" y="18" width="14" height="2" fill="${p.main}"/>
      <rect x="7" y="20" width="16" height="3" fill="${p.main}"/>

      <rect x="11" y="19" width="8" height="4" fill="${p.dark}"/>
      <rect x="10" y="21" width="10" height="2" fill="${p.dark}"/>

      <rect x="12" y="9" width="2" height="2" fill="${p.light}"/>
      <rect x="11" y="11" width="1" height="2" fill="${p.light}"/>

      <rect x="8" y="20" width="14" height="1" fill="${p.shade}"/>
    `;
  }
};