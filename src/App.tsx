import { ArrowRight } from "lucide-react";
import { ContactBar } from "./components/ContactBar";
import { SectionTitle } from "./components/SectionTitle";
import { ServiceCard } from "./components/ServiceCard";
import { services } from "./data/services";

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#top">本地生活服务</a>
          <nav className="nav">
            <a href="#services">服务</a>
            <a href="#cases">案例</a>
            <a href="#contact">联系</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">LOCAL LIFE · OFFLINE SERVICE</p>
              <h1>衣 · 改 · 租 · 养</h1>
              <p className="hero-text">
                做衣服、改衣服、租房资源、养生服务，
                <br />
                本地需要什么，可以直接联系我们。
              </p>
              <a className="button button-dark" href="#contact">
                联系咨询 <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span>线下服务</span>
              <span>熟人介绍</span>
              <span>提前预约</span>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="SERVICES"
              title="我们能提供什么"
              description="首页只做服务概览，具体项目和案例进入对应页面查看。"
            />
            <div className="service-grid">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="section section-soft">
          <div className="container">
            <SectionTitle
              eyebrow="CASES"
              title="实际案例"
              description="这里以后主要放改衣前后、制衣成品等真实案例。"
            />
            <div className="case-placeholder">
              <div>
                <strong>案例展示区</strong>
                <p>先预留结构，后续直接添加真实照片即可。</p>
              </div>
              <a href="#contact" className="text-link">咨询案例 <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">CONTACT</p>
              <h2>有需要，直接联系</h2>
              <p className="contact-intro">
                租房资源、养生服务需要提前咨询；其他服务也可以先发照片或直接到店沟通。
              </p>
            </div>
            <div className="contact-info">
              <div><span>地址</span><strong>这里填写门店地址</strong></div>
              <div><span>电话</span><strong>这里填写联系电话</strong></div>
              <div><span>微信</span><strong>这里填写微信号</strong></div>
            </div>
          </div>
        </section>
      </main>

      <ContactBar />
      <footer className="footer">
        <div className="container">© 2026 本地生活服务 · 线下咨询为主</div>
      </footer>
    </div>
  );
}