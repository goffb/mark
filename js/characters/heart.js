export default {
  id: "heart",
  label: "heart",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="8" y="7" width="5" height="4" fill="${p.main}"/>
      <rect x="15" y="7" width="5" height="4" fill="${p.main}"/>
      
      <rect x="7" y="11" width="14" height="5" fill="${p.main}"/>
      <rect x="8" y="16" width="12" height="3" fill="${p.main}"/>
      <rect x="10" y="19" width="8" height="3" fill="${p.main}"/>
      <rect x="12" y="22" width="4" height="2" fill="${p.main}"/>

      <rect x="9" y="8" width="2" height="2" fill="${p.light}"/>
      <rect x="16" y="8" width="2" height="2" fill="${p.light}"/>
    `;
  }
};