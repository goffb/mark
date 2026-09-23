export default {
  id: "fox",
  label: "fox",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="7" y="4" width="1" height="3" fill="${p.main}"/>
      <rect x="6" y="5" width="1" height="3" fill="${p.main}"/>
      <rect x="7" y="7" width="2" height="2" fill="${p.main}"/>
      <rect x="8" y="8" width="2" height="2" fill="${p.main}"/>
      <rect x="9" y="9" width="2" height="1" fill="${p.main}"/>

      <rect x="20" y="4" width="1" height="3" fill="${p.main}"/>
      <rect x="21" y="5" width="1" height="3" fill="${p.main}"/>
      <rect x="19" y="7" width="2" height="2" fill="${p.main}"/>
      <rect x="18" y="8" width="2" height="2" fill="${p.main}"/>
      <rect x="17" y="9" width="2" height="1" fill="${p.main}"/>

      <rect x="8" y="6" width="1" height="2" fill="${p.shade}"/>
      <rect x="19" y="6" width="1" height="2" fill="${p.shade}"/>

      <rect x="7" y="9" width="14" height="7" fill="${p.main}"/>
      <rect x="8" y="16" width="12" height="2" fill="${p.main}"/>

      <rect x="8" y="16" width="12" height="3" fill="${p.light}"/>
      <rect x="9" y="19" width="10" height="1" fill="${p.light}"/>
      <rect x="10" y="20" width="8" height="1" fill="${p.shade}"/>

      <rect x="10" y="13" width="1" height="2" fill="${p.dark}"/>
      <rect x="17" y="13" width="1" height="2" fill="${p.dark}"/>
      <rect x="10" y="13" width="1" height="1" fill="${p.light}"/>
      <rect x="17" y="13" width="1" height="1" fill="${p.light}"/>

      <rect x="13" y="16" width="2" height="1" fill="${p.dark}"/>
      <rect x="14" y="17" width="1" height="1" fill="${p.dark}"/>
    `;
  }
};