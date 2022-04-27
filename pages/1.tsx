'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function One(): JSX.Element {
    return (
        <>
            <Head>
                <title>1. 出力 - C++講習会2022</title>
            </Head>
            <div className="container">
                <Navigation />
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>出力</h2>
                    <section>
                        <h3>目標</h3>
                        <p>コンソール画面に文字、数字を出力(表示)出来るようになる。</p>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/5f0d460a89ee4d0c9a44a558fd22f587.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>#include &lt;iostream&gt;</h5>
                                <span><pre><code>std::cout</code></pre>や、<pre><code>std::endl</code></pre>などを使えるようにする文です。これがないとサンプルコードが動きません。</span>
                            </section>
                            <section>
                                <h5>std::cout</h5>
                                <p>
                                    std::coutは &lt;&lt; の後にある文字、数字などを出力することができます。
                                    文字列を表示したいときは&quot; &quot;で、
                                    文字のときは&apos; &apos;で囲いましょう。(間違えやすい)
                                    数字のときは囲わなくて大丈夫です。
                                </p>
                            </section>
                            <section>
                                <h5>std::endl</h5>
                                <p>改行を入れる役割を持つ。</p>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>サンプルコードを実行して出力を確かめる。</li>
                            <li>「Hello World!」を出力する</li>
                            <li>いろいろ出力してみる</li>
                        </ul>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
