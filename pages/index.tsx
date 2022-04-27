'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>TOP - C++講習会2022</title>
            </Head>
            <div className="container">
                <Navigation />
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>プログラムの基礎を学ぼう！</h2>
                    <p><strong>ソフトウェア研究部会へようこそ！</strong></p>
                    <p>
                        この講習会は、プログラミングの基礎を学ぶために作られたものです。
                        最初は理解するのに時間がかかるかもしれませんが&quot;やればやるだけ&quot;
                        身に付くので根気詰めすぎないよう頑張ってください。
                    </p>
                    <section>
                        <h3>C++講習会</h3>
                        <section>
                            <h4 className={styles['title']}><Link href="-1/"><a>－１．プロジェクト作成</a></Link></h4>
                            <p>Visual Studioでプロジェクトを作ってみよう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="0/"><a>０．コンパイル</a></Link></h4>
                            <p>コンパイルしてみよう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="1/"><a>１．出力</a></Link></h4>
                            <p>std::coutを理解して標準出力に出力してみよう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="2/"><a>２．表示</a></Link></h4>
                            <p>変数と型、constを理解し、変数に格納してからコンソール画面に出力できるようになろう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="3/"><a>３．演算子</a></Link></h4>
                            <p>演算子を理解し、四則演算ができるようになろう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="4/"><a>４．入力</a></Link></h4>
                            <p>std::cinを理解し、標準入力から値を受け取ってみよう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="5/"><a>５．分岐</a></Link></h4>
                            <p>条件分岐を理解し、if・switchが使えるようになろう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="6."><a>６．繰り返し</a></Link></h4>
                            <p>繰り返しを理解し、for・whileが使えるようになろう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="7/"><a>７．配列</a></Link></h4>
                            <p>配列を理解し、std::array・for・eachを使えるようになろう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="8/"><a>８．関数</a></Link></h4>
                            <p>関数を理解し使えるようになろう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="9/"><a>９．クラス</a></Link></h4>
                            <p>classを理解し使えるようになろう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="10/"><a>１０．最終試験</a></Link></h4>
                            <p>三目並べを制作し、講習会を卒業しよう。</p>
                        </section>
                    </section>
                    <section>
                        <h3>おまけ</h3>
                        <section>
                            <h4 className={styles['title']}><Link href="ex/multi-dim-array.tsx"><a>Ｅｘ．多次元配列</a></Link></h4>
                            <p>多次元配列について学ぼう。</p>
                        </section>
                        <section>
                            <h4 className={styles['title']}><Link href="ex/namespace.tsx"><a>Ｅｘ．名前空間</a></Link></h4>
                            <p>名前空間について学ぼう。</p>
                        </section>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
