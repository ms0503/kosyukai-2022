'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Four(): JSX.Element {
    return (
        <>
            <Head>
                <title>4. 入力 - C++講習会2022</title>
            </Head>
            <div className="container">
                <nav className="nav">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                </nav>
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>入力</h2>
                    <section>
                        <h3>目標</h3>
                        <p>コンソール画面から文字、数字を入力できるようになる。</p>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>標準入力</h4>
                            <p>コンソール画面でのキーボードによる入力のこと。</p>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/c8f90c6f9079a4f7d829c8bd1221e017.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>std::cin</h5>
                                <span>std::cinは<pre><code>&gt;&gt;</code></pre>の後にある変数にコンソール画面に入力された値を入れることができます。</span>
                                <span>入力するもの同士は<pre><code>&gt;&gt;</code></pre>で区切ります。入力する際はコンソール画面に値を入れた後Enterキーを押してください。</span>
<pre><code>
std::cin &gt;&gt; a &gt;&gt; b;
</code></pre>
                                <p>a・bにそれぞれ値が入力されます。改行やスペース、タブが入力の区切りとして扱われます。</p>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>サンプルコードを実行して出力を確かめる。</li>
                            <li>名前を入力すると「○○さん、こんにちは。」と表示されるようにする。</li>
                            <li><strong>要提出</strong> 5教科の点数をそれぞれ入力すると平均を出力するプログラムを作る。(出力は小数) </li>
                        </ul>
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
