const productionUrl = "evaboogaard.nl";
const developmentUrl = "http://localhost:8080";

export default {
  name: "Eva Boogaard",
  authorName: "Eva Boogaard",
  url: process.env.NODE_ENV === "production" ? productionUrl : developmentUrl,
  authorEmail: "evaboogaard@hotmail.com",
  metaDesc: "Portfolio website 2025",
};
