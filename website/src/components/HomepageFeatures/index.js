import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Github',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    url: 'https://github.com/vlad-nestorov',
  },
  {
    title: 'LinkedIn',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    url: 'https://www.linkedin.com/in/vlad-nestorov/',
  },
  {
    title: '500px',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    url: 'https://500px.com/p/vladnestorov?view=photos',
  },
];

function Feature({Svg, title, url}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={url}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img"/>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
        </div>
      </a>
    </div>
)
  ;
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