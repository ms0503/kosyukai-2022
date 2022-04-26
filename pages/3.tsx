'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Three(): JSX.Element {
    return (
        <>
            <Head>
                <title>3. 演算子 - C++講習会2022</title>
            </Head>
            <div className="container">
                <nav className="nav">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                </nav>
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>演算子</h2>
                    <section>
                        <h3>目標</h3>
                        <p>四則演算ができるようになる。</p>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>演算子</h4>
                            <p>+(足す)、-(引く)、*(かける)、/(割る)、%(余り)のこと。</p>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/6fb920cd0039098882dc72335c1db5e2.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <table>
                                <tr><th colSpan={2}>算術演算子</th></tr>
                                <tr><td>a + b</td><td rowSpan={3}>そのまま。</td></tr>
                                <tr><td>a - b</td></tr>
                                <tr><td>a * b</td></tr>
                                <tr><td>a / b</td><td>割り算の商を出す。整数同士の場合、小数は切り捨てられる。</td></tr>
                                <tr><td>a % b</td><td>割り算の余りを出す。整数同士でしか使うことができない。</td></tr>
                                <tr><td>e++</td><td rowSpan={2}>eの値を1増やす。(違いについては後述。)</td></tr>
                                <tr><td>++e</td></tr>
                                <tr><td>e--</td><td rowSpan={2}>eの値を1減らす。(違いについては後述。)</td></tr>
                                <tr><td>--e</td></tr>
                                <tr><th colSpan={2}>代入演算子</th></tr>
                                <tr><td>e += 10</td><td>eの値を10増やす。要はe = e + 10の短縮系。</td></tr>
                                <tr><td>e -= 10</td><td>eの値を10減らす。要はe = e - 10の短縮系。</td></tr>
                                <tr><td>e *= 10</td><td>eの値を10倍する。要はe = e * 10の短縮系。</td></tr>
                                <tr><td>e /= 10</td><td>eの値を10で割る。要はe = e / 10の短縮系。</td></tr>
                                <tr><td>e %= 10</td><td>eの値を10で割った余りにする。要はe = e % 10の短縮系。</td></tr>
                                <tr><th rowSpan={2}>文字列演算子</th></tr>
                                <tr><td>c + d</td><td>文字列同士を組み合わせ、別の文字列を作ることができる。+しかないので注意。</td></tr>
                            </table>
                        </section>
                        <section>
                            <h4>++、--演算子について</h4>
                            <p>++すること、--することはそれぞれインクリメント、デクリメントと言います。</p>
                            <p>
                                これらは<strong>単体で使う分には</strong>変数の前に置いても後ろに置いても変わりません。
                                関数の引数や変数への代入時に影響が出てきます。
                            </p>
                            <p>
                                この場合、
<pre><code>
int a = 10;  // a = 10
int b = a++; // a = 11, b = 10

int c = 10;  // c = 10
int d = ++c; // c = 11, d = 11
</code></pre>
                                となります。(デクリメントでも同様)
                                後に置いた場合、代入されてからイン(デ)クリメントされます。
                                一方、前に置いた場合、イン(デ)クリメントされてから代入されます。
                            </p>
                        </section>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>サンプルコードを実行して出力を確かめる。</li>
                            <li>演算子をいろいろ変えてみて出力を確かめる。</li>
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
