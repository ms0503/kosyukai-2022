'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function Ten(): JSX.Element {
    return (
        <>
            <Head>
                <title>10. 最終試験 - C++講習会2022</title>
            </Head>
            <div className="container">
                <nav className="nav">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                </nav>
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>最終試験</h2>
                    <section>
                        <h3>目標</h3>
                        <p>動作するゲームを作り、講習会を卒業する。</p>
                    </section>
                    <section>
                        <h3>三目並べを作ろう</h3>
                        <p>三目並べとはいわゆる○×ゲームのことです。○と×に分かれて交互に○×を置いていき三つ並べた方の勝ちというゲームです。</p>
                        <section>
                            <h4>満たしてほしい要件</h4>
                            <ul>
                                <li>Wikipediaに載っている三目並べのルールを満たしている。</li>
                                <li>コンソール画面にテキストを表示し、操作方法がわかるようにする。(ルール説明は必要ないものとする。)</li>
                                <li>C++で書いている。</li>
                            </ul>
                            <p>以上です！最終課題頑張ってください！！(作り始める前に多次元配列と名前空間を<strong>必ず</strong>見てね)</p>
                        </section>
                        <p>ヒント：クラス無しでも作ることができます。</p>
                        <p>
                            アドバイス: 分からないところはすぐに先輩に聞きましょう。Slackでも大丈夫です。
                            randomやquestionで聞くかプログラミング班の先輩にメールすれば答えてくれるはずです。
                        </p>
                    </section>
                </main>
            </div>
            <footer className="footer">
                <div className="footer-contents">
                    <Footer />
                </div>
            </footer>
        </>
    );
}
