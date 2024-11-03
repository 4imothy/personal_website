import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from './text.module.scss';

const first = 'Timothy'.split('');
const middle = 'Leon'.split('');
const last = 'Cronin'.split('');
const initials = 'IV'.split('');

const Text = () => {
    return (
        <Parallax speed={-2} className={styles.container}>
            <span className={styles.word}>
                {first.map((letter, i) => (
                    <Parallax
                        key={`text-${i}`}
                        translateX={[-200 * (i - 3), 50 * (i - 3)]}
                        className={styles.letter}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>
            <span className={styles.word}>
                {middle.map((letter, i) => (
                    <Parallax
                        key={`middle-${i}`}
                        translateX={[-150 * (i - 1.5), 50 * (i - 1.5)]}
                        className={styles.letter}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>

            <span className={styles.word}>
                {last.map((letter, i) => (
                    <Parallax
                        key={`last-${i}`}
                        translateX={[-100 * (i - 2.5), 50 * (i - 2.5)]}
                        className={styles.letter}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>
            <span className={styles.word}>
                {initials.map((letter, i) => (
                    <Parallax
                        key={`initials-${i}`}
                        translateX={[-50 * (i - 0.5), 50 * (i - 0.5)]}
                        className={styles.letter}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>
        </Parallax>
    );
};

export default Text;
