export const site = {
  name: "Shashank Nallabothu",
  role: "Forward Deployed AI Engineer",
  email: "nallabothushashank125@gmail.com",
  location: "Detroit, Michigan",
  github: "https://github.com/shashank1730",
  linkedin: "https://linkedin.com/in/shashank1730",
  resumeUrl: "/resume.html",
};

type MailtoOptions = {
  subject?: string;
  body?: string;
};

export const buildMailto = ({ subject, body }: MailtoOptions = {}) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
};
