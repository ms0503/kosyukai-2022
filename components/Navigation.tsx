'use strict';

import $ from 'jquery';
import Link from 'next/link';
import styles from '../styles/Navigation.module.scss';

export default function Navigation(): JSX.Element {
    return (
        <nav className={styles['nav']}>
            <div className={styles['nav-container']}>
                <div className={styles['navigation-button']} onClick={e => {
                    e.preventDefault();
                    let shade = $('.navigation-effect')[0];
                    if(shade === undefined) {
                        $('<div>').addClass('navigation-effect').on('click', e => removeMenu(e.delegateTarget)).appendTo($('body'));
                        $('#slidemenu').slideDown('fast');
                    } else removeMenu(shade);
                    return true;
                }}></div>
                <div id="slidemenu" className={styles['navigation']}>
                    <h2>講習一覧</h2>
                    <ul className={styles['navigation-list']}>
                        <li><Link href="index/"><a style={{color: '#ff0'}}>TOP</a></Link></li>
                        <li><Link href="-1/"><a>－１．プロジェクト作成</a></Link></li>
                        <li><Link href="0/"><a>０．コンパイル</a></Link></li>
                        <li><Link href="1/"><a>１．出力</a></Link></li>
                        <li><Link href="2/"><a>２．表示</a></Link></li>
                        <li><Link href="3/"><a>３．演算子</a></Link></li>
                        <li><Link href="4/"><a>４．入力</a></Link></li>
                        <li><Link href="5/"><a>５．分岐</a></Link></li>
                        <li><Link href="6/"><a>６．繰り返し</a></Link></li>
                        <li><Link href="7/"><a>７．配列</a></Link></li>
                        <li><Link href="8/"><a>８．関数</a></Link></li>
                        <li><Link href="9/"><a>９．クラス</a></Link></li>
                        <li><Link href="10/"><a>１０．最終試験</a></Link></li>
                        <li><Link href="ex/multi-dim-array/"><a>Ｅｘ．多次元配列</a></Link></li>
                        <li><Link href="ex/namespace/"><a>Ｅｘ．名前空間</a></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function removeMenu(shade: HTMLElement) {
    shade.remove();
    $('#slidemenu').slideUp('fast');
}
