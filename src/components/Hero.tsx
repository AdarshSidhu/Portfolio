import { site } from "../data/content";

export function Hero() {
  return (
    <section className="hero hero-enter" id="top" aria-label="Introduction">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url(/hero-backend.jpg)" }}
        aria-hidden="true"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <h1 className="hero-brand">{site.name}</h1>
          <p className="hero-title">{site.title}</p>
          <p className="hero-pitch">{site.pitch}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">
              Contact
            </a>
            <a className="btn btn-ghost" href={site.cvPath} download>
              Download CV
            </a>
            <a
              className="btn btn-ghost"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <pre className="hero-code" aria-hidden="true">
          <code>{`from rest_framework.views import APIView
from rest_framework.response import Response

class HealthAPIView(APIView):
    def get(self, request):
        return Response({"status": "ok"})`}</code>
        </pre>
      </div>
    </section>
  );
}
