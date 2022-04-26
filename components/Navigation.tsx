'use strict';

import Link from 'next/link';
import styles from '../styles/Navigation.module.scss';
import { slide as Menu } from 'react-burger-menu';

export default function Navigation(): JSX.Element {
    return (
        <>
            <div className={styles['navigation-button']}></div>
            <div className={styles['navigation']}>
                <h2>講習一覧</h2>
                <Menu width={300}>
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
                </Menu>
            </div>
        </>
    );
}
