
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: <span>Nextra-Changelog</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Nextra Changelog",
    };
  },
  project: {
    link: 'https://github.com/try-to-fly/nextra-changelog'
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  toc: {
    float: true,
    title: "目录",
  },
}
