import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/B_Fist.svg').default,
    description: (
      <>
        Pantheon Decoupled Kit makes serving content where you need it fast and easy
      </>
    ),
  },
  {
    title: 'Supports Drupal and Wordpress',
    Svg: require('@site/static/img/B_Fist.svg').default,
    description: (
      <>
        Pantheon Decoupled Kits lets you focus on delievering the right experience to the right channel. Speed up your WebOps with Decoupled Drupal or Wordpress on Pantheon.
      </>
    ),
  },
  {
    title: 'Powered by Pantheon',
    Svg: require('@site/static/img/B_Fist.svg').default,
    description: (
      <>
        Bring your own frontend to Pantheon's first-in-class WebOps platform.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
