export default {
  id: "duck",
  label: "duck",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="10" y="7" width="8" height="2" fill="${p.main}"/>
      <rect x="8" y="9" width="12" height="8" fill="${p.main}"/>
      <rect x="10" y="17" width="10" height="2" fill="${p.main}"/>
      <rect x="7" y="18" width="14" height="4" fill="${p.main}"/>

      <rect x="19" y="12" width="5" height="3" fill="${p.shade}"/>
      <rect x="20" y="15" width="3" height="2" fill="${p.shade}"/>

      <rect x="15" y="11" width="2" height="2" fill="${p.dark}"/>
      <rect x="9" y="18" width="7" height="2" fill="${p.shade}"/>

      <rect x="10" y="22" width="4" height="2" fill="${p.shade}"/>
      <rect x="17" y="22" width="4" height="2" fill="${p.shade}"/>
    `;
  }
};
