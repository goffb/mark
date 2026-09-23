export default {
  id: "eye",
  label: "eye",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="6" y="10" width="18" height="1" fill="${p.main}"/>
      <rect x="5" y="11" width="20" height="1" fill="${p.main}"/>
      <rect x="4" y="12" width="22" height="7" fill="${p.main}"/>
      <rect x="5" y="19" width="20" height="1" fill="${p.main}"/>
      <rect x="6" y="20" width="18" height="1" fill="${p.main}"/>

      <rect x="12" y="10" width="6" height="12" fill="${p.light}"/>
      <rect x="12" y="12" width="6" height="7" fill="${p.dark}"/>
      <rect x="13" y="13" width="3" height="3" fill="${p.light}"/>

      <rect x="10" y="8" width="1" height="2" fill="${p.main}"/>
      <rect x="13" y="7" width="1" height="3" fill="${p.main}"/>
      <rect x="16" y="7" width="1" height="3" fill="${p.main}"/>
      <rect x="19" y="8" width="1" height="2" fill="${p.main}"/>

      <rect x="10" y="21" width="1" height="2" fill="${p.main}"/>
      <rect x="13" y="21" width="1" height="3" fill="${p.main}"/>
      <rect x="16" y="21" width="1" height="3" fill="${p.main}"/>
      <rect x="19" y="21" width="1" height="2" fill="${p.main}"/>
    `;
  }
};