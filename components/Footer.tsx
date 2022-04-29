'use strict';

import styles from '../styles/Footer.module.scss';

export default function Footer(): JSX.Element {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-contents']}>
                <p>Club Official Accounts</p>
                <ul>
                    <li>Twitter:<a href="https://twitter.com/sofken_natori/">@sofken_natori</a></li>
                    <li>E-mail:<a href="mailto:sofken.natori@gmail.com">sofken.natori &lt;at&gt; gmail.com</a></li>
                </ul>
                <small>Copyright &copy; 2022 SNCT Natori Software Laboratory. All rights reserved. Modified by <a href="https://github.com/ms0503/">Sora Tonami</a>.</small>
            </div>
        </footer>
    );
}
