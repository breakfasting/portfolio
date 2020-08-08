import React from 'react';
import styles from './skill-icon.module.scss';

const SkillIcon = ({ src, name }) => {
  const processedName = name.replace(/-/g, ' ');
  return (
    <div className={styles.icon}>
      <img src={src} alt={name} />
      <div className={styles.padding}>
        <span className={styles.tooltip}>
          {processedName}
        </span>

      </div>
    </div>
  );
};

export default SkillIcon;
