export default {
  id: "cat",
  label: "cat",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="6" y="7" width="4" height="3" fill="${p.main}"/>
      <rect x="20" y="7" width="4" height="3" fill="${p.main}"/>
      <rect x="7" y="6" width="2" height="1" fill="${p.main}"/>
      <rect x="21" y="6" width="2" height="1" fill="${p.main}"/>

      <rect x="8" y="11" width="14" height="11" fill="${p.main}"/>
      <rect x="6" y="13" width="2" height="7" fill="${p.main}"/>
      <rect x="22" y="13" width="2" height="7" fill="${p.main}"/>

      <rect x="8" y="22" width="14" height="2" fill="${p.shade}"/>
      <rect x="10" y="24" width="10" height="1" fill="${p.shade}"/>

      <rect x="11" y="14" width="2" height="3" fill="${p.dark}"/>
      <rect x="17" y="14" width="2" height="3" fill="${p.dark}"/>
      <rect x="11" y="14" width="1" height="1" fill="${p.light}"/>
      <rect x="17" y="14" width="1" height="1" fill="${p.light}"/>

      <rect x="14" y="18" width="2" height="1" fill="${p.dark}"/>
      <rect x="14" y="19" width="2" height="1" fill="${p.light}"/>
    `;
  }
};