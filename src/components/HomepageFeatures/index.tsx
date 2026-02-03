import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.announcement}>
          <span className={styles.announcementBadge}>New</span>
          <span className={styles.announcementText}>Introducing V-Pack Components</span>
          <Link to="/docs/intro" className={styles.announcementLink}>
            Get started →
          </Link>
        </div>
        
        <h1 className={styles.heroTitle}>
          Build beautiful apps with
          <span className={styles.gradientText}> React Native</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          A collection of re-usable components built with React Native and styled with twrnc.
          <br />
          Accessible. Customizable. Open Source. Copy, paste, and make it yours.
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.primaryButton)}
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={clsx('button button--lg', styles.secondaryButton)}
            to="/docs/category/components">
            Browse Components
          </Link>
        </div>

        <div className={styles.installSection}>
          <div className={styles.codeBlock}>
            <span className={styles.codePrompt}>$</span>
            <code>npm install twrnc</code>
          </div>
        </div>
      </div>
    </header>
  );
}

function CodePreviewSection() {
  return (
    <section className={styles.codePreview}>
      <div className="container">
        <div className={styles.previewGrid}>
          <div className={styles.previewLeft}>
            <h2 className={styles.previewTitle}>Copy. Paste. Customize.</h2>
            <p className={styles.previewDescription}>
              This is not a component library. It's a collection of re-usable components 
              that you can copy and paste into your apps.
            </p>
            <ul className={styles.previewList}>
              <li>✓ Pick the components you need</li>
              <li>✓ Copy the code into your project</li>
              <li>✓ Customize to match your design</li>
              <li>✓ Own the code, no dependencies</li>
            </ul>
            <Link to="/docs/category/components" className={styles.previewLink}>
              View all components →
            </Link>
          </div>
          <div className={styles.previewRight}>
            <div className={styles.codeExample}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.codeTitle}>Button.tsx</span>
              </div>
              <pre className={styles.codeContent}>
{`import tw from 'twrnc';
import { TouchableOpacity, Text } from 'react-native';

export const Button = ({ title, onPress }) => (
  <TouchableOpacity
    style={tw\`bg-black dark:bg-white px-6 py-3 
              rounded-lg\`}
    onPress={onPress}
  >
    <Text style={tw\`text-white dark:text-black 
                    font-semibold\`}>
      {title}
    </Text>
  </TouchableOpacity>
);`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: '20+', label: 'Components' },
    { number: '100%', label: 'Customizable' },
    { number: 'MIT', label: 'Open Source' },
    { number: 'twrnc', label: 'Powered by' },
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({icon, title, description}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Development',
      description: 'Pre-built components ready to use. Stop reinventing the wheel.',
    },
    {
      icon: '🎨',
      title: 'Tailwind CSS',
      description: 'Styled with twrnc. Full Tailwind utility classes in React Native.',
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'Built with accessibility best practices for React Native.',
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'Every component supports light and dark mode out of the box.',
    },
    {
      icon: '📱',
      title: 'Cross Platform',
      description: 'Works seamlessly on iOS, Android, and Web platforms.',
    },
    {
      icon: '🔧',
      title: 'Full Control',
      description: 'Own the code. Modify and extend components however you need.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why V-Pack?</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to build modern React Native applications
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <FeatureCard {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComponentShowcase() {
  const components = [
    'VButton', 'VInput', 'VCalendar', 'VDialog', 'VDrawer',
    'VAlert', 'VBadge', 'VAvatar', 'VTabs', 'VSwitch',
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Components</h2>
          <p className={styles.sectionSubtitle}>
            A growing collection of production-ready components
          </p>
        </div>
        <div className={styles.componentGrid}>
          {components.map((component, idx) => (
            <Link 
              key={idx}
              to={`/docs/components/${component.toLowerCase()}`}
              className={styles.componentCard}
            >
              <span className={styles.componentIcon}>📦</span>
              <span className={styles.componentName}>{component}</span>
              <span className={styles.componentArrow}>→</span>
            </Link>
          ))}
        </div>
        <div className={styles.showcaseCta}>
          <Link to="/docs/category/components" className={styles.viewAllLink}>
            View all components →
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get Started in Minutes</h2>
          <p className={styles.sectionSubtitle}>
            Three simple steps to start building with V-Pack
          </p>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <h3>Install Dependencies</h3>
            <p>Add twrnc to your React Native project</p>
            <div className={styles.stepCode}>
              <code>npm install twrnc</code>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <h3>Browse & Copy</h3>
            <p>Find components you need and copy the source code</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <h3>Customize & Ship</h3>
            <p>Adapt the code to your design system and ship your app</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to build?</h2>
          <p className={styles.ctaSubtitle}>
            Start building beautiful React Native apps today
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button button--lg', styles.ctaPrimary)}
              to="/docs/intro">
              Get Started
            </Link>
            <Link
              className={clsx('button button--lg', styles.ctaSecondary)}
              to="https://github.com/dimsmaul/v-pack">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="React Native Components"
      description="Beautiful, accessible React Native components built with twrnc">
      <HomepageHeader />
      <StatsSection />
      <CodePreviewSection />
      <FeaturesSection />
      <ComponentShowcase />
      <QuickStartSection />
      <CTASection />
    </Layout>
  );
}

// import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import styles from './styles.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero', styles.heroBanner)}>
//       <div className="container">
//         <div className={styles.badge}>Built with twrnc</div>
//         <h1 className={styles.heroTitle}>
//           Build your React Native app faster
//         </h1>
//         <p className={styles.heroSubtitle}>
//           Beautifully designed components that you can copy and paste into your apps. 
//           Accessible. Customizable. Open Source.
//         </p>
//         <div className={styles.buttons}>
//           <Link
//             className={clsx('button button--primary button--lg', styles.primaryButton)}
//             to="/docs/intro">
//             Get Started
//           </Link>
//           <Link
//             className={clsx('button button--secondary button--lg', styles.secondaryButton)}
//             to="/docs/category/components">
//             Browse Components
//           </Link>
//         </div>
//         <div className={styles.codeBlock}>
//           <code>npm install v-pack twrnc</code>
//         </div>
//       </div>
//     </header>
//   );
// }

// function FeatureCard({icon, title, description}) {
//   return (
//     <div className={styles.featureCard}>
//       <div className={styles.featureIcon}>{icon}</div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// function FeaturesSection() {
//   const features = [
//     {
//       icon: '⚡',
//       title: 'Copy & Paste',
//       description: 'Not a component library. Copy the code and customize it to your needs.',
//     },
//     {
//       icon: '🎨',
//       title: 'Tailwind CSS',
//       description: 'Styled with twrnc. Full Tailwind utility classes in React Native.',
//     },
//     {
//       icon: '♿',
//       title: 'Accessible',
//       description: 'Built with accessibility best practices for React Native.',
//     },
//     {
//       icon: '🌙',
//       title: 'Dark Mode',
//       description: 'All components support dark mode out of the box.',
//     },
//     {
//       icon: '📱',
//       title: 'Cross Platform',
//       description: 'Works seamlessly on iOS, Android, and Web.',
//     },
//     {
//       icon: '🔧',
//       title: 'Customizable',
//       description: 'Own the code. Modify components to fit your design system.',
//     },
//   ];

//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <h2 className={styles.sectionTitle}>Why V-Pack?</h2>
//         <div className={styles.featureGrid}>
//           {features.map((feature, idx) => (
//             <FeatureCard {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function QuickStartSection() {
//   return (
//     <section className={styles.quickStart}>
//       <div className="container">
//         <h2 className={styles.sectionTitle}>Quick Start</h2>
//         <div className={styles.steps}>
//           <div className={styles.step}>
//             <div className={styles.stepNumber}>1</div>
//             <h3>Install twrnc</h3>
//             <div className={styles.stepCode}>
//               <code>npm install twrnc</code>
//             </div>
//           </div>
//           <div className={styles.step}>
//             <div className={styles.stepNumber}>2</div>
//             <h3>Browse Components</h3>
//             <p>Find the component you need in our documentation</p>
//           </div>
//           <div className={styles.step}>
//             <div className={styles.stepNumber}>3</div>
//             <h3>Copy & Customize</h3>
//             <p>Copy the code and adapt it to your project</p>
//           </div>
//         </div>
//         <div className={styles.ctaContainer}>
//           <Link
//             className="button button--primary button--lg"
//             to="/docs/introduction">
//             Read the Documentation
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title="React Native Components"
//       description="Beautiful React Native components built with twrnc">
//       <HomepageHeader />
//       <FeaturesSection />
//       <QuickStartSection />
//     </Layout>
//   );
// }
