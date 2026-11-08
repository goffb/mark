export default {
  id: "bug",
  label: "bug",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="6" y="8" width="2" height="4" fill="${p.main}"/>
      <rect x="22" y="8" width="2" height="4" fill="${p.main}"/>
      <rect x="6" y="12" width="3" height="2" fill="${p.main}"/>
      <rect x="21" y="12" width="3" height="2" fill="${p.main}"/>
      <rect x="6" y="16" width="3" height="2" fill="${p.main}"/>
      <rect x="21" y="16" width="3" height="2" fill="${p.main}"/>
      <rect x="6" y="20" width="3" height="2" fill="${p.main}"/>
      <rect x="21" y="20" width="3" height="2" fill="${p.main}"/>
      <rect x="6" y="22" width="2" height="2" fill="${p.main}"/>
      <rect x="22" y="22" width="2" height="2" fill="${p.main}"/>

      <rect x="11" y="5" width="2" height="5" fill="${p.main}"/>
      <rect x="17" y="5" width="2" height="5" fill="${p.main}"/>

      <rect x="9" y="8" width="2" height="13" fill="${p.main}"/>
      <rect x="19" y="8" width="2" height="13" fill="${p.main}"/>
      <rect x="11" y="8" width="8" height="2" fill="${p.main}"/>
      
      <rect x="11" y="10" width="8" height="2" fill="${p.light}"/>
      <rect x="9" y="21" width="12" height="2" fill="${p.main}"/>
      
      <rect x="14" y="17" width="2" height="5" fill="${p.main}"/>

      <rect x="17" y="12" width="2" height="9" fill="${p.shade}" opacity="0.4"/>
      <rect x="13" y="19" width="6" height="2" fill="${p.shade}" opacity="0.4"/>
    `;
  }
};
