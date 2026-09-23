export default {
  id: "mail",
  label: "mail",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="6" y="9" width="18" height="13" fill="${p.main}"/>

      <rect x="6" y="9" width="18" height="2" fill="${p.shade}"/>
      <rect x="7" y="11" width="16" height="2" fill="${p.shade}"/>
      <rect x="9" y="13" width="12" height="2" fill="${p.shade}"/>
      <rect x="11" y="15" width="8" height="2" fill="${p.shade}"/>
      <rect x="14" y="17" width="2" height="1" fill="${p.shade}"/>

      <rect x="7" y="10" width="2" height="1" fill="${p.light}"/>
      <rect x="21" y="10" width="2" height="1" fill="${p.light}"/>
    `;
  }
};