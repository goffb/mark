export default {
  id: "key",
  label: "key",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="13" y="5" width="2" height="1" fill="${p.main}"/>
      <rect x="12" y="6" width="4" height="1" fill="${p.main}"/>
      <rect x="11" y="7" width="6" height="3" fill="${p.main}"/>
      <rect x="12" y="10" width="4" height="1" fill="${p.main}"/>
      <rect x="13" y="11" width="2" height="1" fill="${p.main}"/>

      <rect x="13" y="7" width="2" height="3" fill="${p.box}"/>

      <rect x="13" y="12" width="2" height="12" fill="${p.main}"/>

      <rect x="15" y="17" width="3" height="2" fill="${p.main}"/>
      <rect x="15" y="20" width="2" height="2" fill="${p.main}"/>

      <rect x="12" y="6" width="1" height="1" fill="${p.light}"/>
      <rect x="15" y="17" width="3" height="1" fill="${p.shade}"/>
      <rect x="15" y="20" width="2" height="1" fill="${p.shade}"/>
    `;
  }
};