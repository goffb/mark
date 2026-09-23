export default {
  id: "skull",
  label: "skull",

  render(p) {
    return `
      <rect x="3" y="3" width="24" height="25" fill="${p.box}"/>

      <rect x="10" y="7" width="8" height="1" fill="${p.main}"/>
      <rect x="8" y="8" width="12" height="1" fill="${p.main}"/>
      <rect x="7" y="9" width="14" height="10" fill="${p.main}"/>
      <rect x="8" y="19" width="12" height="2" fill="${p.main}"/>

      <rect x="9" y="17" width="10" height="1" fill="${p.shade}"/>
      <rect x="7" y="17" width="2" height="3" fill="${p.shade}" opacity="0.4"/>
      <rect x="19" y="17" width="2" height="3" fill="${p.shade}" opacity="0.4"/>

      <rect x="9" y="11" width="3" height="3" fill="${p.dark}"/>
      <rect x="16" y="11" width="3" height="3" fill="${p.dark}"/>

      <rect x="13" y="15" width="2" height="2" fill="${p.dark}"/>

      <rect x="10" y="19" width="12" height="3" fill="${p.main}"/>
      <rect x="11" y="19" width="1" height="3" fill="${p.dark}"/>
      <rect x="13" y="19" width="1" height="3" fill="${p.dark}"/>
      <rect x="15" y="19" width="1" height="3" fill="${p.dark}"/>
      <rect x="17" y="19" width="1" height="3" fill="${p.dark}"/>
      <rect x="19" y="19" width="1" height="3" fill="${p.dark}"/>
    `;
  }
};