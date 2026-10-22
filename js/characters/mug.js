export default {
  id: "mug",
  label: "mug",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="11" y="7" width="1" height="2" fill="${p.light}"/>
      <rect x="15" y="7" width="1" height="2" fill="${p.light}"/>

      <rect x="8" y="11" width="12" height="12" fill="${p.main}"/>
      <rect x="7" y="12" width="14" height="10" fill="${p.main}"/>

      <rect x="8" y="10" width="12" height="2" fill="${p.light}"/>

      <rect x="21" y="13" width="2" height="6" fill="${p.main}"/>
      <rect x="20" y="14" width="1" height="4" fill="${p.box}"/>

      <rect x="8" y="22" width="12" height="1" fill="${p.shade}" opacity="0.5"/>
    `;
  }
};