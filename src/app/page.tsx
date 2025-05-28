/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cubie Group - Financial Intelligence Platform</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        body {\n            font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace;\n            background: #0a0f1a;\n            color: #e1e8f0;\n            line-height: 1.6;\n            overflow-x: hidden;\n            position: relative;\n        }\n\n        body::before {\n            content: '';\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: \n                radial-gradient(circle at 20% 50%, rgba(0, 140, 255, 0.1) 0%, transparent 50%),\n                radial-gradient(circle at 80% 20%, rgba(0, 200, 255, 0.08) 0%, transparent 50%),\n                radial-gradient(circle at 40% 80%, rgba(64, 192, 255, 0.06) 0%, transparent 50%);\n            pointer-events: none;\n            z-index: -1;\n        }\n\n        .container {\n            max-width: 1400px;\n            margin: 0 auto;\n            padding: 0 2rem;\n        }\n\n        /* Navigation */\n        nav {\n            position: fixed;\n            top: 0;\n            width: 100%;\n            z-index: 1000;\n            backdrop-filter: blur(20px);\n            border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n        }\n\n        .nav-container {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 1rem 2rem;\n        }\n\n        .logo {\n            font-size: 1.5rem;\n            font-weight: 700;\n            color: #00c3ff;\n            text-transform: uppercase;\n            letter-spacing: 0.1em;\n            position: relative;\n        }\n\n        .logo::before {\n            content: '<';\n            color: #0088ff;\n            margin-right: 0.2em;\n        }\n\n        .logo::after {\n            content: '/>';\n            color: #0088ff;\n            margin-left: 0.2em;\n        }\n\n        .nav-links {\n            display: flex;\n            gap: 2rem;\n            list-style: none;\n        }\n\n        .nav-links a {\n            color: #ffffff;\n            text-decoration: none;\n            font-weight: 500;\n            transition: color 0.3s ease;\n        }\n\n        .nav-links a:hover {\n            color: #00c3ff;\n            text-shadow: 0 0 8px rgba(0, 195, 255, 0.6);\n        }\n\n        .cta-button {\n            background: linear-gradient(135deg, #0088ff, #00c3ff);\n            color: #0a0f1a;\n            padding: 0.7rem 1.5rem;\n            border: none;\n            border-radius: 6px;\n            font-weight: 600;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            font-family: 'JetBrains Mono', monospace;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .cta-button::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: -100%;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n            transition: left 0.5s;\n        }\n\n        .cta-button:hover::before {\n            left: 100%;\n        }\n\n        .cta-button:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 8px 25px rgba(0, 195, 255, 0.4);\n        }\n\n        /* Hero Section */\n        .hero {\n            min-height: 100vh;\n            display: flex;\n            align-items: center;\n            position: relative;\n            background: \n                linear-gradient(135deg, rgba(0, 136, 255, 0.1), transparent 70%),\n                radial-gradient(ellipse at top, rgba(0, 195, 255, 0.15), transparent 50%);\n        }\n\n        .hero::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background-image: \n                repeating-linear-gradient(\n                    90deg,\n                    transparent,\n                    transparent 98px,\n                    rgba(0, 195, 255, 0.03) 100px\n                ),\n                repeating-linear-gradient(\n                    0deg,\n                    transparent,\n                    transparent 98px,\n                    rgba(0, 195, 255, 0.03) 100px\n                );\n            pointer-events: none;\n        }\n\n        .hero-content {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 4rem;\n            align-items: center;\n        }\n\n        .hero-text h1 {\n            font-size: 4rem;\n            font-weight: 800;\n            line-height: 1.1;\n            margin-bottom: 1.5rem;\n            background: linear-gradient(135deg, #e1e8f0, #00c3ff, #0088ff);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            animation: fadeInUp 1s ease;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .hero-text h1::before {\n            content: '// ';\n            color: #00c3ff;\n            font-size: 0.7em;\n            opacity: 0.8;\n        }\n\n        .hero-text p {\n            font-size: 1.3rem;\n            color: #a8b8c8;\n            margin-bottom: 2rem;\n            animation: fadeInUp 1s ease 0.2s both;\n            font-family: 'JetBrains Mono', monospace;\n            line-height: 1.8;\n        }\n\n        .hero-stats {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 2rem;\n            margin-top: 3rem;\n        }\n\n        .stat {\n            text-align: center;\n            animation: fadeInUp 1s ease 0.4s both;\n        }\n\n        .stat-number {\n            font-size: 2rem;\n            font-weight: 700;\n            color: #00c3ff;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .stat-label {\n            font-size: 0.9rem;\n            color: #6b7c8e;\n            text-transform: uppercase;\n            letter-spacing: 0.05em;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .hero-visual {\n            position: relative;\n            height: 500px;\n            animation: fadeInRight 1s ease 0.3s both;\n        }\n\n        .data-grid {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background: \n                linear-gradient(135deg, rgba(0, 195, 255, 0.1), rgba(0, 136, 255, 0.1)),\n                repeating-linear-gradient(\n                    45deg,\n                    transparent,\n                    transparent 10px,\n                    rgba(0, 195, 255, 0.05) 12px\n                );\n            border: 1px solid rgba(0, 195, 255, 0.3);\n            border-radius: 12px;\n            backdrop-filter: blur(10px);\n            padding: 2rem;\n            overflow: hidden;\n            position: relative;\n        }\n\n        .data-grid::before {\n            content: 'class FinancialIntelligence {';\n            position: absolute;\n            top: 1rem;\n            left: 1rem;\n            color: #00c3ff;\n            font-family: 'JetBrains Mono', monospace;\n            font-size: 0.9rem;\n            opacity: 0.7;\n        }\n\n        .data-grid::after {\n            content: '}';\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            color: #00c3ff;\n            font-family: 'JetBrains Mono', monospace;\n            font-size: 0.9rem;\n            opacity: 0.7;\n        }\n\n        .data-points {\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            gap: 1rem;\n            height: 100%;\n        }\n\n        .data-point {\n            background: rgba(0, 195, 255, 0.15);\n            border: 1px solid rgba(0, 195, 255, 0.4);\n            border-radius: 6px;\n            padding: 1rem;\n            animation: codeFlicker 3s infinite;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .data-point::before {\n            content: 'def analyze() {\\n  return predict();\\n}';\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            font-family: 'JetBrains Mono', monospace;\n            font-size: 0.7rem;\n            color: #00c3ff;\n            opacity: 0.6;\n            white-space: pre;\n            text-align: center;\n        }\n\n        .data-point:nth-child(odd) {\n            animation-delay: 0.5s;\n        }\n\n        .data-point:nth-child(3n)::before {\n            content: 'if (data.trend) {\\n  execute();\\n}';\n        }\n\n        .data-point:nth-child(4n)::before {\n            content: 'while(learning) {\\n  optimize();\\n}';\n        }\n\n        /* Section Styling */\n        .section {\n            padding: 6rem 0;\n            border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n        }\n\n        .section-header {\n            text-align: center;\n            margin-bottom: 4rem;\n        }\n\n        .section-title {\n            font-size: 2.5rem;\n            font-weight: 700;\n            margin-bottom: 1rem;\n            background: linear-gradient(135deg, #e1e8f0, #00c3ff, #0088ff);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .section-title::before {\n            content: '/* ';\n            color: #6b7c8e;\n            opacity: 0.8;\n        }\n\n        .section-title::after {\n            content: ' */';\n            color: #6b7c8e;\n            opacity: 0.8;\n        }\n\n        .section-subtitle {\n            font-size: 1.2rem;\n            color: #a8b8c8;\n            max-width: 600px;\n            margin: 0 auto;\n            font-family: 'JetBrains Mono', monospace;\n            line-height: 1.8;\n        }\n\n        /* Mission Section */\n        .mission-content {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 4rem;\n            align-items: center;\n        }\n\n        .mission-text {\n            font-size: 1.1rem;\n            line-height: 1.8;\n            color: #d0dae5;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .mission-visual {\n            height: 400px;\n            background: \n                linear-gradient(135deg, rgba(0, 195, 255, 0.1), rgba(0, 136, 255, 0.1)),\n                repeating-linear-gradient(\n                    45deg,\n                    transparent,\n                    transparent 20px,\n                    rgba(0, 195, 255, 0.05) 22px\n                );\n            border: 1px solid rgba(0, 195, 255, 0.3);\n            border-radius: 12px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .mission-visual::before {\n            content: '// Neural Network Architecture';\n            position: absolute;\n            top: 1rem;\n            left: 1rem;\n            color: #00c3ff;\n            font-family: 'JetBrains Mono', monospace;\n            font-size: 0.8rem;\n            opacity: 0.7;\n        }\n\n        .neural-network {\n            width: 80%;\n            height: 80%;\n            position: relative;\n        }\n\n        .node {\n            position: absolute;\n            width: 12px;\n            height: 12px;\n            background: #00c3ff;\n            border-radius: 50%;\n            animation: networkPulse 2s infinite alternate;\n            box-shadow: 0 0 10px rgba(0, 195, 255, 0.6);\n        }\n\n        .node::before {\n            content: '';\n            position: absolute;\n            width: 20px;\n            height: 20px;\n            border: 2px solid rgba(0, 195, 255, 0.3);\n            border-radius: 50%;\n            top: -4px;\n            left: -4px;\n            animation: nodeRing 3s infinite;\n        }\n\n        .node:nth-child(1) { top: 20%; left: 20%; }\n        .node:nth-child(2) { top: 30%; left: 70%; }\n        .node:nth-child(3) { top: 60%; left: 40%; }\n        .node:nth-child(4) { top: 80%; left: 80%; }\n        .node:nth-child(5) { top: 50%; left: 10%; }\n\n        /* Platform Overview */\n        .platform-modules {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n            gap: 2rem;\n        }\n\n        .module {\n            background: rgba(0, 195, 255, 0.05);\n            border: 1px solid rgba(0, 195, 255, 0.2);\n            border-radius: 12px;\n            padding: 2rem;\n            transition: all 0.3s ease;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .module::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: -100%;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(90deg, transparent, rgba(0, 195, 255, 0.1), transparent);\n            transition: left 0.6s;\n        }\n\n        .module:hover::before {\n            left: 100%;\n        }\n\n        .module:hover {\n            transform: translateY(-5px);\n            border-color: #00c3ff;\n            background: rgba(0, 195, 255, 0.1);\n            box-shadow: 0 10px 30px rgba(0, 195, 255, 0.2);\n        }\n\n        .module-icon {\n            width: 60px;\n            height: 60px;\n            background: linear-gradient(135deg, #0088ff, #00c3ff);\n            border-radius: 12px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-bottom: 1.5rem;\n            font-size: 1.5rem;\n            position: relative;\n        }\n\n        .module-icon::before {\n            content: '{';\n            position: absolute;\n            top: -5px;\n            left: -5px;\n            color: #00c3ff;\n            font-family: 'JetBrains Mono', monospace;\n            font-size: 1.2rem;\n        }\n\n        .module-icon::after {\n            content: '}';\n            position: absolute;\n            bottom: -5px;\n            right: -5px;\n            color: #00c3ff;\n            font-family: 'JetBrains Mono', monospace;\n            font-size: 1.2rem;\n        }\n\n        .module h3 {\n            font-size: 1.3rem;\n            margin-bottom: 1rem;\n            color: #e1e8f0;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .module p {\n            color: #a8b8c8;\n            line-height: 1.6;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        /* Use Cases */\n        .use-cases {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 3rem;\n        }\n\n        .use-case {\n            background: \n                linear-gradient(135deg, rgba(0, 195, 255, 0.08), rgba(0, 136, 255, 0.05)),\n                repeating-linear-gradient(\n                    45deg,\n                    transparent,\n                    transparent 30px,\n                    rgba(0, 195, 255, 0.02) 32px\n                );\n            border: 1px solid rgba(0, 195, 255, 0.25);\n            border-radius: 12px;\n            padding: 2.5rem;\n            position: relative;\n            overflow: hidden;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .use-case::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            height: 3px;\n            background: linear-gradient(90deg, #0088ff, #00c3ff);\n        }\n\n        .use-case::after {\n            content: '// Implementation';\n            position: absolute;\n            top: 1rem;\n            right: 1rem;\n            color: #6b7c8e;\n            font-size: 0.8rem;\n            opacity: 0.7;\n        }\n\n        .use-case h3 {\n            font-size: 1.5rem;\n            margin-bottom: 1rem;\n            color: #00c3ff;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .use-case h3::before {\n            content: 'class ';\n            color: #0088ff;\n            font-size: 0.9em;\n        }\n\n        .use-case h3::after {\n            content: ' {';\n            color: #0088ff;\n        }\n\n        .use-case ul {\n            list-style: none;\n            padding: 0;\n        }\n\n        .use-case li {\n            padding: 0.5rem 0;\n            color: #d0dae5;\n            position: relative;\n            padding-left: 1.5rem;\n            font-family: 'JetBrains Mono', monospace;\n        }\n\n        .use-case li::before {\n            content: '→';\n            position: absolute;\n            left: 0;\n            color: #00c3ff;\n            font-weight: bold;\n        }\n\n        /* Technology Stack */\n        .tech-stack {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 2rem;\n        }\n\n        .tech-category {\n            background: rgba(255, 255, 255, 0.03);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 12px;\n            padding: 2rem;\n        }\n\n        .tech-category h3 {\n            color: #00ff88;\n            margin-bottom: 1.5rem;\n            font-size: 1.3rem;\n        }\n\n        .tech-list {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 0.5rem;\n        }\n\n        .tech-tag {\n            background: rgba(0, 255, 136, 0.1);\n            color: #00ff88;\n            padding: 0.5rem 1rem;\n            border-radius: 20px;\n            font-size: 0.9rem;\n            border: 1px solid rgba(0, 255, 136, 0.3);\n        }\n\n        /* Vision Section */\n        .vision {\n            background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 100, 200, 0.1));\n        }\n\n        .vision-content {\n            text-align: center;\n            max-width: 800px;\n            margin: 0 auto;\n        }\n\n        .quote {\n            font-size: 1.5rem;\n            font-style: italic;\n            color: #ffffff;\n            margin-bottom: 2rem;\n            line-height: 1.6;\n        }\n\n        .quote-author {\n            color: #00ff88;\n            font-weight: 600;\n            margin-bottom: 3rem;\n        }\n\n        .vision-cta {\n            display: flex;\n            gap: 1rem;\n            justify-content: center;\n            flex-wrap: wrap;\n        }\n\n        .btn-primary {\n            background: linear-gradient(135deg, #00ff88, #00cc6a);\n            color: #000;\n            padding: 1rem 2rem;\n            border: none;\n            border-radius: 8px;\n            font-weight: 600;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            text-decoration: none;\n            display: inline-block;\n        }\n\n        .btn-secondary {\n            background: transparent;\n            color: #ffffff;\n            padding: 1rem 2rem;\n            border: 2px solid #00ff88;\n            border-radius: 8px;\n            font-weight: 600;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            text-decoration: none;\n            display: inline-block;\n        }\n\n        .btn-primary:hover, .btn-secondary:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 8px 25px rgba(0, 255, 136, 0.3);\n        }\n\n        /* Animations */\n        @keyframes fadeInUp {\n            from {\n                opacity: 0;\n                transform: translateY(30px);\n            }\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n\n        @keyframes fadeInRight {\n            from {\n                opacity: 0;\n                transform: translateX(30px);\n            }\n            to {\n                opacity: 1;\n                transform: translateX(0);\n            }\n        }\n\n        @keyframes pulse {\n            0% { opacity: 0.6; }\n            50% { opacity: 1; }\n            100% { opacity: 0.6; }\n        }\n\n        @keyframes networkPulse {\n            0% { transform: scale(1); opacity: 0.7; }\n            100% { transform: scale(1.2); opacity: 1; }\n        }\n\n        /* Responsive Design */\n        @media (max-width: 768px) {\n            .hero-content,\n            .mission-content,\n            .use-cases,\n            .tech-stack {\n                grid-template-columns: 1fr;\n                gap: 2rem;\n            }\n\n            .hero-text h1 {\n                font-size: 2.5rem;\n            }\n\n            .nav-links {\n                display: none;\n            }\n\n            .container {\n                padding: 0 1rem;\n            }\n\n            .hero-stats {\n                grid-template-columns: 1fr;\n            }\n        }\n    "
    }}
  />
  {/* Navigation */}
  <nav>
    <div className="nav-container">
      <div className="logo">Cubie Group</div>
      <ul className="nav-links">
        <li>
          <a href="#mission">Mission</a>
        </li>
        <li>
          <a href="#platform">Platform</a>
        </li>
        <li>
          <a href="#cases">Use Cases</a>
        </li>
        <li>
          <a href="#technology">Technology</a>
        </li>
        <li>
          <a href="#vision">Vision</a>
        </li>
      </ul>
      <button className="cta-button">Schedule Demo</button>
    </div>
  </nav>
  {/* Hero Section */}
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Financial Systems That Think. Evolve. Lead.</h1>
          <p>
            Powering national financial intelligence through unified AI-driven
            economic modeling, strategic forecasting, and adaptive governance
            systems that synchronize macro and micro financial decisions across
            centuries.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">$2.4T</div>
              <div className="stat-label">Assets Under Analysis</div>
            </div>
            <div className="stat">
              <div className="stat-number">47</div>
              <div className="stat-label">National Partners</div>
            </div>
            <div className="stat">
              <div className="stat-number">99.7%</div>
              <div className="stat-label">Forecast Accuracy</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="data-grid">
            <div className="data-points">
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Mission Section */}
  <section id="mission" className="section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Reimagining Financial Intelligence</h2>
        <p className="section-subtitle">
          We build unified systems that integrate AI, economics, and strategic
          planning to create financial intelligence platforms that think beyond
          traditional boundaries.
        </p>
      </div>
      <div className="mission-content">
        <div className="mission-text">
          <p>
            Cubie Group is architecting the future of national financial
            intelligence through systems thinking and AI-driven economic
            modeling. Our platform transcends conventional financial analysis by
            creating adaptive, interconnected systems that learn, evolve, and
            optimize across multiple time horizons.
          </p>
          <p>
            We believe that true financial intelligence requires the integration
            of macro-economic trends, micro-level market dynamics, behavioral
            economics, and long-term strategic planning. Our neural economic
            models process vast amounts of data to identify patterns, predict
            outcomes, and recommend actions that align with both immediate needs
            and century-spanning objectives.
          </p>
          <p>
            By unifying data streams, decision frameworks, and governance
            systems, we enable organizations to make informed choices that
            resonate across economic cycles, political changes, and
            technological disruptions.
          </p>
        </div>
        <div className="mission-visual">
          <div className="neural-network">
            <div className="node" />
            <div className="node" />
            <div className="node" />
            <div className="node" />
            <div className="node" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Platform Overview */}
  <section id="platform" className="section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Platform Overview</h2>
        <p className="section-subtitle">
          Modular intelligence tools designed for comprehensive financial
          analysis, forecasting, and strategic alignment.
        </p>
      </div>
      <div className="platform-modules">
        <div className="module">
          <div className="module-icon">📊</div>
          <h3>Macro-Micro Analysis Engine</h3>
          <p>
            Real-time integration of macroeconomic indicators with micro-level
            market data, providing comprehensive economic intelligence across
            all scales of financial activity.
          </p>
        </div>
        <div className="module">
          <div className="module-icon">🧠</div>
          <h3>AI Forecasting Suite</h3>
          <p>
            Advanced neural networks trained on historical patterns, current
            data streams, and scenario modeling to predict economic outcomes
            with unprecedented accuracy.
          </p>
        </div>
        <div className="module">
          <div className="module-icon">🔗</div>
          <h3>Sectoral Integration Hub</h3>
          <p>
            Cross-sector analysis tools that identify interdependencies,
            spillover effects, and systemic risks across industries, regions,
            and asset classes.
          </p>
        </div>
        <div className="module">
          <div className="module-icon">⚖️</div>
          <h3>Policy Alignment Framework</h3>
          <p>
            Strategic planning tools that align financial decisions with policy
            objectives, regulatory frameworks, and long-term national economic
            goals.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Use Cases */}
  <section id="cases" className="section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Strategic Applications</h2>
        <p className="section-subtitle">
          Empowering decision-makers across government, finance, and strategic
          planning with intelligent financial systems.
        </p>
      </div>
      <div className="use-cases">
        <div className="use-case">
          <h3>Government &amp; Central Banks</h3>
          <ul>
            <li>Real-time economic monitoring and policy impact assessment</li>
            <li>Multi-scenario fiscal planning and budget optimization</li>
            <li>Systemic risk identification and crisis response planning</li>
            <li>Long-term economic strategy development and tracking</li>
          </ul>
        </div>
        <div className="use-case">
          <h3>Sovereign Wealth Funds</h3>
          <ul>
            <li>Cross-asset portfolio optimization and risk management</li>
            <li>Geopolitical risk analysis and investment strategy</li>
            <li>ESG integration and sustainable investment planning</li>
            <li>Multi-generational wealth preservation strategies</li>
          </ul>
        </div>
        <div className="use-case">
          <h3>Financial Institutions</h3>
          <ul>
            <li>Advanced stress testing and regulatory compliance</li>
            <li>Market timing and liquidity management optimization</li>
            <li>Credit risk modeling and portfolio construction</li>
            <li>Digital transformation and fintech integration</li>
          </ul>
        </div>
        <div className="use-case">
          <h3>Strategic Think Tanks</h3>
          <ul>
            <li>Economic scenario modeling and policy simulation</li>
            <li>Long-range forecasting and trend analysis</li>
            <li>Cross-national comparative economic studies</li>
            <li>Strategic foresight and planning advisory services</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Technology Stack */}
  <section id="technology" className="section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Technology Architecture</h2>
        <p className="section-subtitle">
          Built on cutting-edge AI, distributed systems, and adaptive governance
          frameworks.
        </p>
      </div>
      <div className="tech-stack">
        <div className="tech-category">
          <h3>Neural Economic Models</h3>
          <div className="tech-list">
            <span className="tech-tag">Deep Learning Networks</span>
            <span className="tech-tag">Reinforcement Learning</span>
            <span className="tech-tag">Time Series Analysis</span>
            <span className="tech-tag">Ensemble Modeling</span>
            <span className="tech-tag">Causal Inference</span>
          </div>
        </div>
        <div className="tech-category">
          <h3>Data Infrastructure</h3>
          <div className="tech-list">
            <span className="tech-tag">Federated Learning</span>
            <span className="tech-tag">Real-time Streaming</span>
            <span className="tech-tag">Distributed Computing</span>
            <span className="tech-tag">Blockchain Integration</span>
            <span className="tech-tag">Quantum Readiness</span>
          </div>
        </div>
        <div className="tech-category">
          <h3>Simulation &amp; Modeling</h3>
          <div className="tech-list">
            <span className="tech-tag">Agent-Based Models</span>
            <span className="tech-tag">Monte Carlo Simulation</span>
            <span className="tech-tag">Network Analysis</span>
            <span className="tech-tag">Game Theory Engine</span>
            <span className="tech-tag">Complexity Science</span>
          </div>
        </div>
        <div className="tech-category">
          <h3>Governance Systems</h3>
          <div className="tech-list">
            <span className="tech-tag">Adaptive Algorithms</span>
            <span className="tech-tag">Decision Trees</span>
            <span className="tech-tag">Risk Management</span>
            <span className="tech-tag">Compliance Automation</span>
            <span className="tech-tag">Ethical AI Framework</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Vision Section */}
  <section id="vision" className="section vision">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">A 300-Year Vision</h2>
      </div>
      <div className="vision-content">
        <p className="quote">
          &ldquo;True financial intelligence transcends market cycles and political
          changes. We are building systems that think in centuries, not
          quarters. Our platform doesn&apos;t just analyze the present&mdash;it architects
          the economic future, ensuring that today&apos;s decisions create prosperity
          for generations yet unborn.&rdquo;
        </p>
        <p className="quote-author">
          — Marcus Chen, Founder &amp; Chief Architect, Cubie Group
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#d0d0d0",
            marginBottom: "3rem",
            lineHeight: "1.8"
          }}
        >
          Cubie Group exists to unify data, decisions, and economic design
          across time horizons that span centuries. We believe that financial
          intelligence should serve not just immediate profit, but the long-term
          flourishing of human civilization. Our systems are built to evolve,
          adapt, and guide economic decisions that will resonate through
          history.
        </p>
        <div className="vision-cta">
          <a href="#" className="btn-primary">
            Explore the Platform
          </a>
          <a href="#" className="btn-secondary">
            Schedule a Demo
          </a>
        </div>
      </div>
    </div>
  </section>
</>

  );
}
