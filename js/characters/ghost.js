export default {
  id: "ghost",
  label: "ghost",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="10" y="7" width="8" height="1" fill="${p.main}"/>
      <rect x="8" y="8" width="12" height="1" fill="${p.main}"/>
      <rect x="7" y="9" width="14" height="10" fill="${p.main}"/>
      <rect x="8" y="19" width="12" height="3" fill="${p.main}"/>

      <rect x="8" y="19" width="2" height="1" fill="${p.box}"/>
      <rect x="13" y="19" width="2" height="1" fill="${p.box}"/>
      <rect x="18" y="19" width="2" height="1" fill="${p.box}"/>

      <rect x="7" y="22" width="2" height="2" fill="${p.main}"/>
      <rect x="12" y="22" width="2" height="2" fill="${p.main}"/>
      <rect x="17" y="22" width="2" height="2" fill="${p.main}"/>

      <rect x="9" y="11" width="2" height="1" fill="${p.main}" opacity="0.5"/>
      <rect x="7" y="9" width="1" height="6" fill="${p.light}" opacity="0.5"/>

      <rect x="11" y="13" width="2" height="3" fill="${p.dark}"/>
      <rect x="17" y="13" width="2" height="3" fill="${p.dark}"/>

      <rect x="13" y="18" width="4" height="1" fill="${p.dark}"/>
    `;
  }
};